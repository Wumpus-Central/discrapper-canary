l.d(t, { A: () => s });
var n = l(64700),
    a = l(17928),
    i = l(67480),
    r = l(171491);
function s(e) {
    let { skuId: t, location: l } = e,
        s = (0, a.bG)([i.A], () => i.A.get(t)),
        o = n.useMemo(() => [t], [t]);
    return (0, r.j)({ skuIds: o, location: l }), s;
}
