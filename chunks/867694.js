n.d(t, { I: () => r });
var i = n(255367),
    o = n(471141),
    l = n(851005);
function r(e) {
    let { node: t } = e,
        { useValue: n, setValue: r, useTitle: a, useSubtitle: s } = t,
        c = a(),
        u = null == s ? void 0 : s(),
        d = n();
    return (0, i.jsx)(o.j, {
        value: d,
        onChange: (e) => r(e),
        className: l.toggle,
        note: u,
        hideBorder: !0,
        children: c,
    });
}
