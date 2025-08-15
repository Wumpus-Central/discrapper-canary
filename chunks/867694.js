n.d(t, { I: () => o });
var i = n(951288),
    l = n(471141),
    s = n(2644);
function o(e) {
    var t;
    let { node: n } = e,
        { useValue: o, setValue: r, useTitle: a, useSubtitle: u, useDisabled: c, useTooltip: d } = n,
        f = a(),
        g = null == u ? void 0 : u(),
        m = o(),
        v = null != (t = null == c ? void 0 : c()) && t,
        b = null == d ? void 0 : d();
    return (0, i.jsx)(l.j, {
        value: m,
        onChange: (e) => r(e),
        className: s.toggle,
        note: g,
        disabled: v,
        tooltipNote: b,
        hideBorder: !0,
        children: f,
    });
}
