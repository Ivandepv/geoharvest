import React, { useState, useEffect } from 'react';
import { YStack, Input, Button, H1, Image } from '@t4/ui';
import { SolitoImage } from 'solito/image';
import { styled } from 'tamagui';
import { useSupabase } from 'app/utils/supabase/hooks/useSupabase';
import { useRouter } from 'solito/router';
import { useToastController } from '@t4/ui';

// Estilizado personalizado para el contenedor del formulario
const FormContainer = styled(YStack, {
    width: '90%',
    maxWidth: 400,
    padding: '$4',
    borderRadius: '$10',
    backgroundColor: 'rgba(88,130,193, 0.28)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
});

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isWeb, setIsWeb] = useState(false); // Estado para controlar si estamos en web

    const supabase = useSupabase();
    const { replace } = useRouter();
    const toast = useToastController();

    // Detectar si estamos en un navegador
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsWeb(true);
        }
    }, []);

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            toast.show('Inicio de sesión fallido', {
                description: error.message,
            });
            return;
        }

        // Redirigir al usuario después del login exitoso
        replace('/');
    };

    return (
        <YStack flex={1} position="relative">
            {/* Imagen de Fondo */}
            <Image
                source={{ uri: 'Login.png' }} // Reemplaza con tu imagen
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
                resizeMode="cover"
            />

            {/* Contenedor Centrado del Formulario */}
            <YStack
                flex={1}
                justifyContent="center"
                alignItems="center"
                padding="$4"
                position="relative"
            >
                <FormContainer
                    style={
                        isWeb
                            ? {
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                            }
                            : {}
                    }
                >
                    {/* Logo Placeholder */}
                    <YStack ai="center" mb="$3">
                        <SolitoImage
                            src="/Logo.png" // Reemplaza con la ruta de tu logo
                            width={114}
                            height={200}
                            alt="Logo"
                        />
                    </YStack>

                    {/* Título de Login */}
                    <H1 textAlign="center" mb="$4">
                        Login
                    </H1>

                    {/* Formulario */}
                    <YStack space="$3">
                        <Input
                            placeholder="Correo Electrónico"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            textContentType="emailAddress"
                            value={email}
                            onChangeText={setEmail}
                            accessibilityLabel="Correo Electrónico"
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 8,
                                padding: 12,
                                backgroundColor: '#fff',
                            }}
                        />
                        <Input
                            placeholder="Contraseña"
                            secureTextEntry
                            textContentType="password"
                            value={password}
                            onChangeText={setPassword}
                            accessibilityLabel="Contraseña"
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 8,
                                padding: 12,
                                backgroundColor: '#fff',
                            }}
                        />
                        <Button backgroundColor={"#003465"} size="$4" onPress={handleLogin}>
                            Iniciar Sesión
                        </Button>
                    </YStack>
                </FormContainer>
            </YStack>
        </YStack>
    );
};
