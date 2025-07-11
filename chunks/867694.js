n.d(t, { I: () => r });
var a = n(255367),
    i = n(471141),
    o = n(851005);
function r(e) {
    let { node: t } = e,
        { useValue: n, setValue: r, useTitle: s, useSubtitle: l } = t.data,
        d = s(),
        c = null == l ? void 0 : l(),
        u = n();
    return (0, a.jsx)(i.j, {
        value: u,
        onChange: (e) => r(e),
        className: o.toggle,
        note: c,
        hideBorder: !0,
        children: d
    });
}
