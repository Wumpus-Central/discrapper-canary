n.d(t, { I: () => s });
var a = n(255367),
    i = n(471141),
    r = n(851005);
function s(e) {
    let { node: t } = e,
        { useValue: n, setValue: s, useTitle: o, useSubtitle: l } = t.data,
        c = o(),
        d = null == l ? void 0 : l(),
        u = n();
    return (0, a.jsx)(i.j, {
        value: u,
        onChange: (e) => s(e),
        className: r.toggle,
        note: d,
        hideBorder: !0,
        children: c
    });
}
