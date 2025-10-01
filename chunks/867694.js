n.d(t, { I: () => i });
var r = n(951288),
    o = n(471141),
    l = n(601857);
function i(e) {
    var t;
    let { node: n } = e,
        { useValue: i, setValue: a, useTitle: s, useSubtitle: c, useDisabled: u, useTooltip: d } = n,
        f = s(),
        b = null == c ? void 0 : c(),
        m = i(),
        p = null != (t = null == u ? void 0 : u()) && t,
        j = null == d ? void 0 : d();
    return (0, r.jsx)(o.j, {
        value: m,
        onChange: (e) => a(e),
        className: l.toggle,
        note: b,
        disabled: p,
        tooltipNote: j,
        hideBorder: !0,
        children: f,
    });
}
