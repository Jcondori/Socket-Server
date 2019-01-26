import {Socket} from "socket.io";
import socketIO from "socket.io";

export const desconectar = (cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log("Cliente desconectado")
    });

};

//Escuchar mensajes
export const mensajes = (cliente: Socket, io: socketIO.Server) => {

    cliente.on("mensajes", (payload: { de: string, cuerpo: string }) => {

        console.log("Mensaje Recibido", payload);

        io.emit("mensaje_nuevo", payload);

    });

};
