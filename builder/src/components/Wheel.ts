export default class Wheel {

    constructor(private _rim: number) {

    }

    set rim(rim:number) {
        this._rim = rim;
    }

    get rim():number {
        return this.rim;
    }
}