n.d(t, { o: () => d, r: () => o });
var i = n(311907),
    r = n(997590),
    a = n(324580),
    l = n(985018);
function s(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A];
    return e === a.Iq ? l.intl.string(l.t.Omu0fS) : t.getCategoryName(e);
}
function o(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([r.A], () => s(t, [r.A]));
}
function d(e) {
    let { categoryIds: t } = e;
    return (0, i.cf)([r.A], () => {
        let e = {};
        return (
            t.forEach((t) => {
                e[t] = s(t, [r.A]);
            }),
            e
        );
    });
}
