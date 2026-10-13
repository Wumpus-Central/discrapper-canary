n.d(t, { A: () => s });
var l = n(477900),
    i = n(582128),
    r = n(545442),
    a = n(644968),
    u = n(652215);
function s(e) {
    let t = (0, a.qm)(e);
    return i.useMemo(
        () =>
            t.map((e) => ({
                key: e.id,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: () => (0, l.jsx)(r.R, { color: e.colorString ?? u.TpD, colors: e.colorStrings }),
            })),
        [t],
    );
}
