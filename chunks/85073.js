"use strict";
n.d(t, { t: () => a });
var r = n(424918),
    i = n(651162),
    s = n(624711);
class a {
    subblocks;
    constructor(e) {
        (this.type = i.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === r.u.CATEGORY ? s.j.fromServer(e) : e)));
    }
    static fromServer(e) {
        return new a(e);
    }
}
