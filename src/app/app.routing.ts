import {RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';

const routes = [
  {path: '', component: MainComponent}
];

export const routing = RouterModule.forRoot(routes);
