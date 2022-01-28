import { Actor, Cast } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            CallAnApi.at('https://reqres.in')
        )
    }
}