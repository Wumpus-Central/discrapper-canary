n.d(t, { I: () => o });
var r = n(951288),
    i = n(471141),
    l = n(2644);
function o(e) {
    var t;
    let { node: n } = e,
        { useValue: o, setValue: s, useTitle: a, useSubtitle: u, useDisabled: c, useTooltip: d } = n,
        f = a(),
        g = null == u ? void 0 : u(),
        y = o(),
        O = null != (t = null == c ? void 0 : c()) && t,
        E = null == d ? void 0 : d();
    return (0, r.jsx)(i.j, {
        value: y,
        onChange: (e) => s(e),
        className: l.toggle,
        note: g,
        disabled: O,
        tooltipNote: E,
        hideBorder: !0,
        children: f,
    });
}
