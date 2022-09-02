import { useState, useRef } from "react";
import { Navigate } from 'react-router-dom';

import { createStyles, Title, Text, Grid, Paper, Code, Input, Button } from "@mantine/core";
import { showNotification } from '@mantine/notifications';

const useStyles = createStyles((theme) => ({
    invalid: {
        input: {
            border: "1px solid red",
            color: "red"
        },
    },
    valid: {
        input: {
            border: "1px solid green",
            color: "green"
        },
      }
  }))

function Step1({ main }) {
    const [redirect, setRedirect] = useState(false);
    const part1Ref = useRef("");
    const [part1, setPart1] = useState(null);
    const part2Ref = useRef("");
    const [part2, setPart2] = useState(null);

    const { classes, cx } = useStyles();
    
    if(redirect) {
        return <Navigate to="/step2"/>
    }

    const checkPart1 = () => {
        var inputVal = part1Ref.current.value.trim().replaceAll(',', '.')

        if (inputVal === "") 
            setPart1(null);
        else if (inputVal === "48.111511") 
            setPart1(true);
        else 
            setPart1(false)
    }

    const checkPart2 = () => {
        var inputVal = part2Ref.current.value.trim().replaceAll(',', '.')

        if (inputVal === "") 
            setPart2(null);
        else if (inputVal === "-1.684284") 
            setPart2(true);
        else 
            setPart2(false)
    }

    const checkValidation = () => {
        if (part1 && part2) return setRedirect(true);
        
        showNotification({
            color: 'red',
            title: 'Kestufé',
            message: 'Tu vois bien qu\'il y a toujours une erreur là quand même oh',
        })
    }

    return (
        <Paper className={main} shadow="sm" radius="lg" p="xl" withBorder>
            <Title order={1}>Etape 1</Title>

            <Text size="lg" mt="xl">La première étape est séparée en deux parties distinctes :</Text>
            
            <Grid mt="xl">
                <Grid.Col md={12} lg={6}>
                    <Paper shadow="sm" radius="md" p="sm" sx={{
                        height: '100%'
                    }}>
                        <Title order={5}>Premièrement</Title>
                        <Text size="sm" mt="sm">Résous-moi ce calcul (tu peux t'aider de google si tu trouves pas) : </Text>
                        <Code>
                            √(49)*9-4*3-2.888489
                        </Code>
                        <Input
                            ref={part1Ref} 
                            mt="md"
                            placeholder="La réponse"
                            className={cx({ [classes.invalid]: part1 === false }, { [classes.valid]: part1 === true })}
                            onChange={checkPart1}
                        />
                    </Paper>
                </Grid.Col>
                <Grid.Col md={12} lg={6}>
                    <Paper shadow="sm" radius="md" p="sm"  sx={{
                        height: '100%'
                    }}>
                        <Title order={5}>Deuxièmement</Title>
                        <Text size="sm" mt="sm">Décode moi ce texte : </Text>
                        <Code>
                            LTEuNjg0Mjg0
                        </Code>
                        <Text size="xs">Voici un petit <a href="https://fr.wikipedia.org/wiki/Base64" target="_blank">lien</a> pour t'aider</Text>
                        <Input
                            ref={part2Ref} 
                            mt="md"
                            placeholder="La réponse"
                            className={cx({ [classes.invalid]: part2 === false }, { [classes.valid]: part2 === true })}
                            onChange={checkPart2}
                        />
                    </Paper>
                </Grid.Col>
            </Grid>
            
            <Button 
                variant="light" color="indigo" radius="md" size="lg" mt="xl"
                onClick={checkValidation}
            >
                VALIDATION
            </Button>
        </Paper>
    )
}

export default Step1
