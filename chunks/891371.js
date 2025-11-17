e.d(n, { c: () => s });
var r = e(212158),
    o = e(148179),
    i = e(427574),
    a = e(573180),
    u = e(255660),
    c = e(870145),
    l = e(573654);
function s(t, n) {
    var e = (0, o.w)(t, n);
    (0, l.k)(
        !e.begin,
        "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
    );
    var s = (0, i._)(),
        f = (0, a.Y)(e.options, e.previewOptions);
    return (0, r.q)(e, s, f), [(0, u.J)(e.collect, s, f), (0, c.u)(f), (0, c.y)(f)];
}
