import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const AuthGuard: CanActivateFn = () => {
  const hasToken = localStorage.getItem('ngToken');
  if (!hasToken) {
    return inject(Router).navigateByUrl('/login');
  }
  return true
}