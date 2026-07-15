"use strict";
n.d(t, { KL: () => c, f1: () => o, fi: () => d });
var i = n(17928),
    r = n(996439),
    a = n(800828),
    s = n(652215);
function l(e, t) {
    let [n] = (0, i.bG)(
        [a.A],
        () => [a.A.getGameRelationshipsForUserByType(e, t), a.A.getGameRelationshipsVersion()],
        [t, e],
        r.D,
    );
    return n;
}
function o(e) {
    return l(e, s.eA$.FRIEND);
}
function d(e) {
    return l(e, s.eA$.PENDING_INCOMING);
}
function c(e, t) {
    let [n] = (0, i.bG)(
        [a.A],
        () => {
            let n = a.A.getGameRelationshipsForUserByType(e, t),
                i = a.A.getGameRelationshipsVersion();
            return [n.length > 0, i];
        },
        [t, e],
        r.D,
    );
    return n;
}
