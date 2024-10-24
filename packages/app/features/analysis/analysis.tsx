import React from 'react';
import { YStack, XStack, H1, Text, Anchor } from '@t4/ui';
import { SolitoImage } from 'solito/image';
import { useLink } from 'solito/link';

export const AnalysisScreen = () => {
    const resumenLink = useLink({
        href: '/resumen',
    });

    const informesLink = useLink({
        href: '/informes',
    });

    const estadoResultadosLink = useLink({
        href: '/estado-resultados',
    });

    return (
        <YStack flex={1} backgroundColor="#f4f4f4">
            {/* Barra de Navegación */}
            <XStack
                backgroundColor="#d3d4d8"
                padding="$3"
                alignItems="center"
                justifyContent="space-between"
            >
                {/* Logo */}
                <SolitoImage src="/Logo.png" width={50} height={50} alt="Logo" />
                {/* Links de Navegación */}
                <XStack space="$4">
                    <Anchor {...resumenLink} fontSize="$4">
                        Resumen de la Explotación Agrícola
                    </Anchor>
                    <Anchor {...informesLink} fontSize="$4">
                        Informes y Análisis
                    </Anchor>
                    <Anchor {...estadoResultadosLink} fontSize="$4">
                        Estado de Resultados
                    </Anchor>
                </XStack>
            </XStack>

            {/* Cuerpo Principal */}
            <XStack flex={1} space="$4">
                {/* Barra Lateral de Secciones */}
                <YStack backgroundColor="#d3d4d8" width={200} justifyContent="center" alignItems="center">
                    <Text transform="rotate(-90deg)">Barra de secciones</Text>
                </YStack>

                {/* Contenido */}
                <YStack flex={1} padding="$3" justifyContent="center" alignItems="center" backgroundColor="#fff">
                    <H1>Contenido de Informes y Análisis</H1>
                    {/* Aquí puedes agregar el contenido de la página */}
                </YStack>
            </XStack>
        </YStack>
    );
};

export default AnalysisScreen;
