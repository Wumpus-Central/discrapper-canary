n.d(t, { I: () => s });
var a = n(255367),
    i = n(471141),
    o = n(851005);
function s(e) {
    let { node: t } = e,
        { useValue: n, setValue: s, useTitle: r, useSubtitle: l } = t.data,
        c = r(),
        d = null == l ? void 0 : l(),
        u = n();
    return (0, a.jsx)(i.j, {
        value: u,
        onChange: (e) => s(e),
        className: o.toggle,
        note: d,
        hideBorder: !0,
        children: c
    });
}
