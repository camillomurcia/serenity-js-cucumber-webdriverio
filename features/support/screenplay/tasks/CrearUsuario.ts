import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export const CrearUsuario = { enElsistema: (nombreTrabajador: string, pustoTrabajo: string) => 
    Task.where(`#actor crea el usuario de ${nombreTrabajador}`,
        Send.a(
            PostRequest.to('/api/users').with(
                {
                    name: nombreTrabajador,
                    job: pustoTrabajo
                }
            ).using({ headers: { 'Content-Type': 'application/json'}})
        )    
    ),
}