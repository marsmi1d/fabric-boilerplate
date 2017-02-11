'use strict';

import * as shortID from 'shortid';

export class Thing {
    private _thingID: string;

    public constructor(private _someProperty: string,
                       private _afnemerID: string,
                       private _bedrag: string,
                       private _userID: string) {
        this._thingID = shortID.generate();
    }

    public get thingID(): string {
        return this._thingID;
    }

    public get someProperty(): string {
        return this._someProperty;
    }

    public get afnemerID(): string {
        return this._afnemerID;
    }

    public get bedrag(): string {
        return this._bedrag;
    }

    public get userID(): string {
        return this._userID;
    }

    public toJSON(): any {
        return {
            'thingID': this.thingID,
            'someProperty': this.someProperty,
            'afnemerID': this.afnemerID,
            'bedrag': this.bedrag,
            'userID': this.userID,
        };
    }
}