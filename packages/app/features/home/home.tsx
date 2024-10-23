import React from 'react';
import { YStack, XStack, H1, Anchor } from '@t4/ui';
import { SolitoImage } from 'solito/image';
import { useLink } from 'solito/link';

export const HomeScreen = () => {
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
        <YStack flex={1} >
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
            <XStack flex={1} space="$4" padding="$3" backgroundColor="#f1f2f3">
                {/* Izquierda */}
                <YStack flex={1} space="$4" backgroundColor="#333">
                    <YStack backgroundColor="#a0a0a0" padding="$3" justifyContent="center" alignItems="center">
                        <H1>Alertas y Notificaciones</H1>
                    </YStack>
                    <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#444">
                        <H1>Mapa Interactivo de Campos</H1>
                    </YStack>
                    <YStack backgroundColor="#d3d4d8" padding="$3" justifyContent="center" alignItems="center">
                        <H1>Gestión de Recursos y Información Financiera</H1>
                    </YStack>
                </YStack>

                {/* Derecha */}
                <YStack flex={0.3} backgroundColor="#e6d6d6" padding="$3" justifyContent="center" alignItems="center">
                    <H1>Resumen</H1>
                </YStack>
            </XStack>
        </YStack>
    );
};

export default HomeScreen;
