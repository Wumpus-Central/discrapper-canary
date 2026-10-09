n.d(t, { A: () => s });
var l = n(477900),
    i = n(582128),
    a = n(545442),
    r = n(644968),
    u = n(652215);
function s(e) {
    let t = (0, r.q)(e);
    return i.useMemo(
        () =>
            t.map((e) => ({
                key: e.id,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: () => (0, l.jsx)(a.R, { color: e.colorString ?? u.TpD, colors: e.colorStrings }),
            })),
        [t],
    );
}
