"use strict";
n.d(t, { t: () => s });
var r = n(424918),
    i = n(651162),
    a = n(624711);
class s {
    subblocks;
    constructor(e) {
        (this.type = i.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === r.u.CATEGORY ? a.j.fromServer(e) : e)));
    }
    static fromServer(e) {
        return new s(e);
    }
}
