import { Then, When } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';


import { CrearUsuario } from '../support/screenplay/tasks';
import { LastResponse } from '@serenity-js/rest';

When('el {actor} crea un usuario con el nombre: {string} y el puesto de trabajo que es: {string}', async (actor: Actor, nombreUsuario: string, puestoTrabajo: string) =>
     actor.attemptsTo(
         CrearUsuario.enElsistema(nombreUsuario, puestoTrabajo)
    )
);

Then('{pronoun} observa que el usuario es creado exitosamente', async (actor: Actor) =>
    actor.attemptsTo(
        Ensure.that(LastResponse.status(), equals(201)),
    )
);