import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SecurityService } from "./security.service";
import {addSecurity, requestSecurities, securitiesLoaded, securityAdded} from './security.actions'
import { map, switchMap } from "rxjs";

@Injectable()
export class SecurityEffects {
  constructor(
    private actions$: Actions,
    private service: SecurityService
  ) {}

  requestSecurities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestSecurities),
      switchMap(action =>
        this.service.getSecurities().pipe(
          map(securities => securitiesLoaded({entities: securities}))
        )
      )
    )
  )

  createSecurity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSecurity),
      switchMap(action =>
        this.service.createSecurity(action.sec).pipe(
          map(security => securityAdded({sec: security}))
        )
      )
    )
  )
}
