n.d(t, { A: () => r });
var i = n(64700),
    l = n(311907),
    s = n(67480),
    a = n(435658);
function r(e) {
    let { skuId: t, location: n } = e,
        r = (0, l.bG)([s.A], () => s.A.get(t)),
        o = i.useMemo(() => [t], [t]);
    return (0, a.j)({ skuIds: o, location: n }), r;
}
