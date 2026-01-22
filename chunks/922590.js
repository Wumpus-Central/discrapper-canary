n.d(t, {
    KL: () => u,
    f1: () => l,
    fi: () => c,
}),
    n(896048);
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
function c(e) {
    return o(e, s.eA$.PENDING_INCOMING);
}
function u(e, t) {
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
