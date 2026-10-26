n.d(t, { A: () => s });
var l = n(477900),
    a = n(582128),
    i = n(545442),
    r = n(644968),
    u = n(652215);
function s(e) {
    let t = (0, r.qm)(e);
    return a.useMemo(
        () =>
            t.map((e) => ({
                key: e.id,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: () => (0, l.jsx)(i.R, { color: e.colorString ?? u.TpD, colors: e.colorStrings }),
            })),
        [t],
    );
}
