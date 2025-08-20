n.d(t, { I: () => o });
var i = n(951288),
    l = n(471141),
    r = n(2644);
function o(e) {
    var t;
    let { node: n } = e,
        { useValue: o, setValue: s, useTitle: a, useSubtitle: u, useDisabled: c, useTooltip: d } = n,
        f = a(),
        g = null == u ? void 0 : u(),
        v = o(),
        m = null != (t = null == c ? void 0 : c()) && t,
        b = null == d ? void 0 : d();
    return (0, i.jsx)(l.j, {
        value: v,
        onChange: (e) => s(e),
        className: r.toggle,
        note: g,
        disabled: m,
        tooltipNote: b,
        hideBorder: !0,
        children: f,
    });
}
