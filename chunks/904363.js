l.d(t, { A: () => u });
var n = l(477900),
    a = l(582128),
    r = l(545442),
    i = l(644968),
    s = l(652215);
function u(e) {
    let t = (0, i.qm)(e);
    return a.useMemo(
        () =>
            t.map((e) => ({
                key: e.id,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: () => (0, n.jsx)(r.R, { color: e.colorString ?? s.TpD, colors: e.colorStrings }),
            })),
        [t],
    );
}
