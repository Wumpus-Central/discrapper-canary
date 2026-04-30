"use strict";
n.d(t, { A: () => s });
var i = n(860840),
    r = n(916243);
class s {
    surface;
    originalMd5Promise;
    constructor(e, t) {
        (this.surface = e), (this.originalMd5Promise = t);
    }
    static fromBlob(e, t) {
        return new s(
            e,
            i.A.fromBlob(t).catch(() => null),
        );
    }
    getOriginalMd5() {
        return this.originalMd5Promise;
    }
    static buildHeadersForMd5(e, t) {
        return null == e ? t : { ...t, [r.B]: e };
    }
    async buildHeaders(e) {
        return s.buildHeadersForMd5(await this.originalMd5Promise, e);
    }
}
