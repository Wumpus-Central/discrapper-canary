a.d(t, { o: () => o, r: () => c });
var s = a(311907),
    l = a(997590),
    r = a(324580),
    i = a(985018);
function n(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A];
    return e === r.Iq ? i.intl.string(i.t.Omu0fS) : t.getCategoryName(e);
}
function c(e) {
    let { categoryId: t } = e;
    return (0, s.bG)([l.A], () => n(t, [l.A]));
}
function o(e) {
    let { categoryIds: t } = e;
    return (0, s.cf)([l.A], () => {
        let e = {};
        return (
            t.forEach((t) => {
                e[t] = n(t, [l.A]);
            }),
            e
        );
    });
}
