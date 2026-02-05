"use strict";
n.d(t, { KL: () => c, f1: () => l, fi: () => u });
var r = n(311907),
    i = n(996439),
    a = n(800828),
    s = n(652215);
function o(e, t) {
    let [n] = (0, r.bG)(
        [a.A],
        () => [a.A.getGameRelationshipsForUserByType(e, t), a.A.getGameRelationshipsVersion()],
        [t, e],
        i.D,
    );
    return n;
}
function l(e) {
    return o(e, s.eA$.FRIEND);
}
function u(e) {
    return o(e, s.eA$.PENDING_INCOMING);
}
function c(e, t) {
    let [n] = (0, r.bG)(
        [a.A],
        () => {
            let n = a.A.getGameRelationshipsForUserByType(e, t),
                r = a.A.getGameRelationshipsVersion();
            return [n.length > 0, r];
        },
        [t, e],
        i.D,
    );
    return n;
}
