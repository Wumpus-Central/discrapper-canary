t.d(s, { A: () => r });
var p = t(582128),
    u = t(17928),
    c = t(67480),
    i = t(435658);
function r(e) {
    let { skuId: s } = e,
        t = (0, u.bG)([c.A], () => c.A.get(s)),
        r = p.useMemo(() => [s], [s]);
    return (0, i.j)({ skuIds: r }), t;
}
