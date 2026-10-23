l.d(t, { A: () => s });
var n = l(477900),
    a = l(582128),
    i = l(545442),
    r = l(644968),
    u = l(652215);
function s(e) {
    let t = (0, r.qm)(e);
    return a.useMemo(
        () =>
            t.map((e) => ({
                key: e.id,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: () => (0, n.jsx)(i.R, { color: e.colorString ?? u.TpD, colors: e.colorStrings }),
            })),
        [t],
    );
}
