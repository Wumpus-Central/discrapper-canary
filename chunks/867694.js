n.d(t, { I: () => o });
var i = n(255367),
    l = n(471141),
    s = n(2644);
function o(e) {
    var t;
    let { node: n } = e,
        { useValue: o, setValue: a, useTitle: r, useSubtitle: u, useDisabled: c, useTooltip: d } = n,
        f = r(),
        g = null == u ? void 0 : u(),
        m = o(),
        v = null != (t = null == c ? void 0 : c()) && t,
        b = null == d ? void 0 : d();
    return (0, i.jsx)(l.j, {
        value: m,
        onChange: (e) => a(e),
        className: s.toggle,
        note: g,
        disabled: v,
        tooltipNote: b,
        hideBorder: !0,
        children: f,
    });
}
