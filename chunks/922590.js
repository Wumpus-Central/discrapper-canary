"use strict";
n.d(t, { KL: () => c, f1: () => l, fi: () => u });
var i = n(17928),
    r = n(996439),
    s = n(800828),
    a = n(652215);
function o(e, t) {
    let [n] = (0, i.bG)(
        [s.A],
        () => [s.A.getGameRelationshipsForUserByType(e, t), s.A.getGameRelationshipsVersion()],
        [t, e],
        r.D,
    );
    return n;
}
function l(e) {
    return o(e, a.eA$.FRIEND);
}
function u(e) {
    return o(e, a.eA$.PENDING_INCOMING);
}
function c(e, t) {
    let [n] = (0, i.bG)(
        [s.A],
        () => {
            let n = s.A.getGameRelationshipsForUserByType(e, t),
                i = s.A.getGameRelationshipsVersion();
            return [n.length > 0, i];
        },
        [t, e],
        r.D,
    );
    return n;
}
