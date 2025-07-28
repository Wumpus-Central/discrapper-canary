n.d(t, { I: () => s });
var i = n(255367),
    a = n(471141),
    o = n(851005);
function s(e) {
    let { node: t } = e,
        { useValue: n, setValue: s, useTitle: l, useSubtitle: r } = t.data,
        c = l(),
        u = null == r ? void 0 : r(),
        d = n();
    return (0, i.jsx)(a.j, {
        value: d,
        onChange: (e) => s(e),
        className: o.toggle,
        note: u,
        hideBorder: !0,
        children: c
    });
}
