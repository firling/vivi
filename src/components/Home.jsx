import { useState } from "react";
import { Navigate } from 'react-router-dom';

import { Paper, Title, Text, Button } from "@mantine/core";

function Home({ main }) {
    const [redirect, setRedirect] = useState(false);
    
    if(redirect) {
        return <Navigate to="/step1"/>
    }

    return (
        <Paper className={main} shadow="sm" radius="lg" p="xl" withBorder>
            <Title order={1}>Bienvenue sur ton site vivi</Title>
            <Text size="xs">(il est un peu nul mais c'est pas grave)</Text>

            <Text size="lg" mt="xl">Tu vas avoir une série de plusieurs mini-jeux (des trucs tout cons comme des trucs où il faudra un peu de réflexion).</Text>
            <Text size="lg" mt="xs">Si t'es prête ... ALORS ON Y VA LEZGOOOO</Text>
            
            <Button 
                variant="light" color="indigo" radius="md" size="lg" mt="xl"
                onClick={_ => setRedirect(true)}
            >
                LEZGOOOOOOOO
            </Button>
        </Paper>
    )
}

export default Home
