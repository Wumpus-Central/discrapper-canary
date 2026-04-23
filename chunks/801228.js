n.d(t, { A: () => r });
var i = n(64700),
    l = n(311907),
    a = n(67480),
    s = n(435658);
function r(e) {
    let { skuId: t, location: n } = e,
        r = (0, l.bG)([a.A], () => a.A.get(t)),
        o = i.useMemo(() => [t], [t]);
    return (0, s.j)({ skuIds: o, location: n }), r;
}
