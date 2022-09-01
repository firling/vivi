import { useState, useEffect } from "react";

import { useInterval } from '@mantine/hooks';

import { createStyles, keyframes, Loader, Progress, Title, Text } from "@mantine/core";

const bounce = keyframes({
    'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
    '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
    '70%': { transform: 'translate3d(0, -15px, 0)' },
    '90%': { transform: 'translate3d(0, -4px, 0)' },
});

const fade = keyframes({
    'from': { opacity: 0 },
    'to': { opacity: 1 }
});

const useStyles = createStyles((theme) => ({
    title: {
        animation: `${bounce} 2s ease-in-out infinite`,
    },
    bravo: {
        animation: `${fade} 3s`,
    }
}));

function Final() {
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [progressText, setProgressText] = useState('ça charge....')

    const { classes } = useStyles();

    const interval = useInterval(
      () =>
        setProgress((current) => {

            current === 20 && setProgressText("c'est long hein ?")
            current === 50 && setProgressText("ouais j'me suis cassé le cul je sais")
            current === 70 && setProgressText("encore un peu ......")
            current === 90 && setProgressText("ça y est ??")



            if (current < 100) {
                return current + 1;
            }
    
            interval.stop();
              setLoaded(true);
            return 100;
        }),
      125
    );

    useEffect(() => {
        interval.start();
        return interval.stop();
    }, []);

    if (!loaded) {
        return (
            <div style={{width: '600px'}}>
                <Loader />
                <Progress value={progress} label={`${progress}%`} size="xl" radius="xl" style={{width: '100%'}}/>
                <Text size="md" mt="xs">{progressText}</Text>
            </div>
        )
    }

    return (
        <div className={classes.bravo}>
            <Title className={classes.title} order={1}>BRAVOOOOOOOOO</Title>

            <Text size="lg" mt="xl">Tu as trouvé le mot caché WOUHOU</Text>

            <Text size="lg" mt="xl">Je t'invite donc maintenant à regarder tes mails</Text>
        </div>
    )
}

export default Final
