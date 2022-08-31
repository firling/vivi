import { useState } from "react";
import { Navigate } from 'react-router-dom';

import { Title, Text, Button } from "@mantine/core";

function Home() {
    const [redirect, setRedirect] = useState(false);
    
    if(redirect) {
        return <Navigate to="/step1"/>
    }

    return (
        <>
            <Title order={1}>Bienvenue sur ton site vivi</Title>
            <Text size="xs">(il est un peu nul mais c'est pas grave)</Text>

            <Text size="lg" mt="xl">Tu vas avoir une série de plusieur mini jeu (des trucs tout con comme des trucs ou il faudrat un peu de réflexion).</Text>
            <Text size="lg" mt="xs">Si t'es prête (ou prêt ptete t'es non binaire jsp quoi) ALORS ON Y VA LEZGOOOO</Text>
            
            <Button 
                variant="light" color="indigo" radius="md" size="lg" mt="xl"
                onClick={_ => setRedirect(true)}
            >
                LEZGOOOOOOOO
            </Button>
        </>
    )
}

export default Home
