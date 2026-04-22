n.d(t, { KL: () => d, f1: () => o, fi: () => u });
var l = n(311907),
    i = n(996439),
    r = n(800828),
    a = n(652215);
function s(e, t) {
    let [n] = (0, l.bG)(
        [r.A],
        () => [r.A.getGameRelationshipsForUserByType(e, t), r.A.getGameRelationshipsVersion()],
        [t, e],
        i.D,
    );
    return n;
}
function o(e) {
    return s(e, a.eA$.FRIEND);
}
function u(e) {
    return s(e, a.eA$.PENDING_INCOMING);
}
function d(e, t) {
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
