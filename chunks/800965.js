r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(871499),
    u = r(388032),
    c = r(558352);
function d(e) {
    let { popoutOpen: n, onClosePopout: r, onOpenPopout: a, ...d } = e,
        f = n ? u.intl.string(u.t['7Dwcnp']) : u.intl.string(u.t.JzWez8);
    return (0, i.jsx)(l.Z, {
        label: f,
        onClick: n ? r : a,
        iconComponent: o.WindowLaunchIcon,
        iconClassName: s()({ [c.popIn]: n }),
        ...d
    });
}
