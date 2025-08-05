n.d(t, { I: () => a });
var i = n(255367),
    o = n(471141),
    l = n(851005);
function a(e) {
    let { node: t } = e,
        { useValue: n, setValue: a, useTitle: r, useSubtitle: s } = t,
        c = r(),
        u = null == s ? void 0 : s(),
        d = n();
    return (0, i.jsx)(o.j, {
        value: d,
        onChange: (e) => a(e),
        className: l.toggle,
        note: u,
        hideBorder: !0,
        children: c
    });
}
