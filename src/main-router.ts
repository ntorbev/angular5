import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/routerAndModule/app.module';

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule) .catch(err => console.log(err));
