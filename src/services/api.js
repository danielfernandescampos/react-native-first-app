import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:3333',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com celular: IP da máquina
 * Android com emulador: localhost (adb reverse tcp:3333 tcp:3333)
 * Android com emulador: ip 10.0.2.2 (Android Studio)
 * Android com celular: IP da máquina
 */