n.d(t, { KL: () => u, f1: () => s, fi: () => d });
var l = n(311907),
    i = n(996439),
    r = n(800828),
    a = n(652215);
function o(e, t) {
    let [n] = (0, l.bG)(
        [r.A],
        () => [r.A.getGameRelationshipsForUserByType(e, t), r.A.getGameRelationshipsVersion()],
        [t, e],
        i.D,
    );
    return n;
}
function s(e) {
    return o(e, a.eA$.FRIEND);
}
function d(e) {
    return o(e, a.eA$.PENDING_INCOMING);
}
function u(e, t) {
    let [n] = (0, l.bG)(
        [r.A],
        () => {
            let n = r.A.getGameRelationshipsForUserByType(e, t),
                l = r.A.getGameRelationshipsVersion();
            return [n.length > 0, l];
        },
        [t, e],
        i.D,
    );
    return n;
}
