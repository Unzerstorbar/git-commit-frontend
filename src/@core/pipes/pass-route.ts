import {Injectable} from '@angular/core';

import {Router, NavigationExtras, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Location} from '@angular/common';

@Injectable()
export class PassRouter {
    private history = [];
    private dataMap: Map<any, any> = new Map();

    constructor(
        private router: Router,
        private location: Location
    ) {
        this.loadRouting();
    }

    get currentUrl(): string {
        return this.router.routerState.snapshot.url.replace(/\?.*$/, '');
    }


    get extendedData(): any {

        const key = 'complexdata_' + this.currentUrl;
        let retval = this.dataMap.get(key);
        this.dataMap.delete(key);

        if (retval === undefined) {
            retval = null;
        }

        return retval;
    }

    replaceState(commands: any[], navigationExtras?: NavigationExtras) {
        const newUrl: string = this.router.serializeUrl(this.router.createUrlTree(commands, navigationExtras));
        const currentUri = this.location.path();
        if (currentUri != newUrl) {
            this.location.replaceState(newUrl);
        }
    }

    navigate(commands: any[], complexData?: any, extras?: NavigationExtras): Promise<boolean> {
        const key: string = this._getKey(commands);

        this.dataMap.set('complexdata_' + key, complexData);
        return this.router.navigate(commands, extras);
    }

    navigateMd(urls: any[], mdUrl: string) {
        return this.router.navigate(urls.concat([{outlets: {md: [mdUrl]}}]));
    }

    primaryRoute(route: ActivatedRoute) {

        let _route = route.parent;

        while (_route.outlet == 'md') {
            _route = _route.parent;
        }

        return _route;
    }

    get dialogData(): any {

        const key = 'dialogdata_' + this.router.routerState.snapshot.url;
        let _dialogData = this.dataMap.get(key);
        this.dataMap.delete(key);

        if (_dialogData === undefined) {
            _dialogData = null;
        }

        return _dialogData;
    }

    get confirmActionData(): any {

        const key = 'confirmActionParams_' + this.currentUrl;
        let _confirmActionData = this.dataMap.get(key);
        this.dataMap.delete(key);

        if (_confirmActionData === undefined) {
            _confirmActionData = null;
        }

        return _confirmActionData;
    }

    navigateWithDialogData(commands: any[], dialogInfo?: any, extras?: NavigationExtras): Promise<boolean> {
        const key: string = this._getKey(commands);
        this.dataMap.set('dialogdata_' + key, dialogInfo);
        return this.router.navigate(commands, extras);
    }

    navigateWithConfirmActionDialog(
        commands: any[],
        confirmActionParams?: any,
        complexData?: any,
        extras?: NavigationExtras): Promise<boolean> {

        const key: string = this._getKey(commands);
        this.dataMap.set('confirmActionParams_' + key, confirmActionParams);
        this.dataMap.set('complexdata_' + key, complexData);
        return this.router.navigate(commands, extras);
    }

    public loadRouting(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        )
            .subscribe(({urlAfterRedirects}: NavigationEnd) => {
                if (this.history.length > 5) {
                    this.history.shift();
                }
                this.history.push(urlAfterRedirects);
            });
    }

    public getHistory(): string[] {
        return this.history;
    }

    public getPreviousUrl(): string {
        return this.history[this.history.length - 2] || '/summary';
    }

    private _getKey(commands: any[]): string {
        let key: string;

        commands = commands.map(it => {
            if (typeof it === 'string') {
                return it;
            }

            if (!it.outlets) {
                return it;
            }

            const outletName = Object.keys(it.outlets)[0];

            return  '//' + outletName + '_' + it.outlets[outletName].join('/');
        });

        if (commands && commands[0].split('', 1) == '/') {
            key = commands.join('/');
        } else {
            key = this.router.routerState.snapshot.url;
            const index = key.indexOf(commands[0]);

            if (key.indexOf(commands[0]) === -1) {
                key = key + '/' + commands.join('/');
            } else {
                key = key.substr(0, index) + commands.join('/');
            }

        }
        key = key.replace('//', '/');
        return key;
    }
}
