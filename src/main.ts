import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//khai báo cái AppModule là module gốc của ứng dụng
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
