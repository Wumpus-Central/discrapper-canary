n.d(t, { I: () => o });
var i = n(255367),
    a = n(471141),
    s = n(851005);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: r, useSubtitle: l } = t.data,
        d = r(),
        c = null == l ? void 0 : l(),
        u = n();
    return (0, i.jsx)(a.j, {
        value: u,
        onChange: (e) => o(e),
        className: s.toggle,
        note: c,
        hideBorder: !0,
        children: d
    });
}
