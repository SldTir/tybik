import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const isAuth = Boolean(localStorage.getItem('JWT'))
  return isAuth;
};
