n.d(t, {
    o: () => c,
    r: () => o,
}),
    n(896048);
var r = n(311907),
    i = n(997590),
    l = n(324580),
    a = n(985018);

function s(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A];
    return e === l.Iq ? a.intl.string(a.t.Omu0fS) : t.getCategoryName(e);
}

function o(e) {
    let { categoryId: t } = e;
    return (0, r.bG)([i.A], () => s(t, [i.A]));
}

function c(e) {
    let { categoryIds: t } = e;
    return (0, r.cf)([i.A], () => {
        let e = {};
        return (
            t.forEach((t) => {
                e[t] = s(t, [i.A]);
            }),
            e
        );
    });
}
