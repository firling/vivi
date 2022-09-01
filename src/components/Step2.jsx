import { useState, useRef } from "react";
import { Navigate } from 'react-router-dom';

import { Paper, Title, Text, Code, Button, TextInput, ActionIcon, createStyles, keyframes } from "@mantine/core";
import { showNotification } from '@mantine/notifications';
import { IconArrowRight, IconShieldLock } from '@tabler/icons';

const fade = keyframes({
    'from': { opacity: 0 },
    'to': { opacity: 1 }
});

const useStyles = createStyles((theme) => ({
    button_wrapper: {
        marginTop: `${theme.spacing.sm}px`,

        display: 'flex',
        flexDirection: 'column',

        '& > button:not(:last-of-type)' : {
            marginBottom: '10px',
        }
    },

    fadeInDiv: {
        animation: `${fade} 3s`,
        
        marginTop: `${theme.spacing.lg}px`,
    },
  }));

function Step2() {
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoding] = useState(false);
    const [buttonDone, setButtonDone] = useState(true);
    const [invalid, setInvalid] = useState(false);
    
    const lastPartRef = useRef("");
    
    const { classes } = useStyles();
    
    if(redirect) {
        return <Navigate to="/final"/>
    }

    const checkButtons = answer => {
        if (buttonDone) return;
        setLoding(true);

        setTimeout(() => {
            if (answer === 2) {
                setButtonDone(true)
                showNotification({
                    color: 'green',
                    title: 'Bravo',
                    message: 'Tu as réussi bravo!!!!!!!!',
                })
            } else {
                showNotification({
                    color: 'red',
                    title: 'Kestufé',
                    message: 'Mauvaise réponse',
                })
            }
            setLoding(false);
        }, 1000)
    }

    const checkLastPart = _ => {
        var inputVal = lastPartRef.current.value.trim() // on enlève les espaces
        inputVal = inputVal.toLowerCase() // on met tout en minuscule
        inputVal = inputVal.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // on enlève les accents
        inputVal = inputVal.replaceAll('-', '').replaceAll(' ', '')

        if (inputVal === 'obienetre') setRedirect(true);
        else setInvalid(true);
    }

    return (
        <Paper shadow="sm" radius="lg" p="xl" withBorder>
            <Title order={1}>Etape 2</Title>

            <Text size="lg" mt="xl">Voici le résultat de l'étape dernière : </Text>
            <Code>48.111511</Code> et <Code>-1.684284</Code>

            <Text size="md" mt="xl">A ton avis, à quoi correspond ce résultat</Text>
            <div className={classes.button_wrapper}>
                <Button onClick={_ => checkButtons(1)} color={buttonDone ? "red" : "indigo"} loading={loading}>
                    La Théorie de la Relativité Générale
                </Button>
                <Button onClick={_ => checkButtons(2)} color={buttonDone ? "green" : "indigo"}  loading={loading}>
                    Des Coordonnées 
                </Button>
                <Button onClick={_ => checkButtons(3)} color={buttonDone ? "red" : "indigo"}  loading={loading}>
                    Un Code Animal Crossing
                </Button>
            </div>

            {buttonDone && (
                <div className={classes.fadeInDiv}>
                    <Text size="lg" mt="xl">Et oui c'était bien des coordonnées bravo</Text>

                    <Text>
                        Je te demande maintenant d'aller te balader en 
                        <a href="https://www.google.com/maps/@48.1115124,-1.6842055,3a,75y,268.61h,86.04t/data=!3m6!1e1!3m4!1s1fi3ZRfHEJcDvj2hp1unUg!2e0!7i13312!8i6656" target="_blank"> Street View </a> 
                        à ces coordonnées précédemment trouvée et de trouver le mot caché ci-dessous : 
                    </Text>
                    <Text size="xs">(Tu n'as normalement pas besoin de bouger)</Text>

                    <TextInput
                        ref={lastPartRef}
                        icon={<IconShieldLock size={18} stroke={1.5} />}
                        mt="md"
                        radius="xl"
                        placeholder="Le mot caché"
                        invalid={invalid}
                        onChange={_ => setInvalid(false)}
                        rightSection={
                            <ActionIcon onClick={checkLastPart} size={32} radius="xl" color='indigo' variant="filled">
                                <IconArrowRight size={18} stroke={1.5} />
                            </ActionIcon>
                        }
                    />
                </div>
            )}
        </Paper>
    )
}

export default Step2
