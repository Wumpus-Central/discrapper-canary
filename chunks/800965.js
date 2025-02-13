n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(871499),
    l = n(388032),
    u = n(716196);
function c(e) {
    let { popoutOpen: t, onClosePopout: n, onOpenPopout: r, ...c } = e,
        d = t ? l.intl.string(l.t['7Dwcnp']) : l.intl.string(l.t.JzWez8);
    return (0, i.jsx)(o.Z, {
        label: d,
        onClick: t ? n : r,
        iconComponent: s.rgF,
        iconClassName: a()({ [u.popIn]: t }),
        ...c
    });
}
