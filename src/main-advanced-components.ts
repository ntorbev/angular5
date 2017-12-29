import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/advanced-components/app.module';

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule) .catch(err => console.log(err));
