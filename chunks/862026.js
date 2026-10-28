l.d(t, { L: () => f, Q: () => m });
var n = l(582128),
    a = l(17928),
    r = l(245179),
    i = l(889921),
    s = l(569319),
    u = l(285411),
    o = l(805330),
    d = l(248675),
    c = l(105292);
function f(e, t) {
    let { id: l, status: s, error: u } = t,
        f = (0, a.bG)([i.default], () => "open" === i.default.getConnState(e), [e]),
        m = (0, a.bG)([r.A], () => !r.A.isThinking(e) && !r.A.isCompacting(e), [e]),
        [g, h] = n.useState(null),
        p = n.useCallback(() => h({ frame: t, ok: (0, o.yR)(e, l) }), [t, e, l]),
        x = g?.frame === t ? g : null,
        v = x?.ok === !0 && f;
    if ("undone" === s) return null;
    if ("reverted" === s)
        return {
            label: c.intl.string(d.default.uQRAzS),
            body: c.intl.string(d.default["24OcbD"]),
            note: null,
            action: null,
        };
    let b = "failed" === u || x?.ok === !1;
    return {
        label: c.intl.string(d.default.iBrh0c),
        body: c.intl.string(d.default.sRY8wn),
        note: "busy" === u ? c.intl.string(d.default.QoixaY) : b ? c.intl.string(d.default["9fvHNe"]) : null,
        action:
            "expired" === s
                ? null
                : {
                      text: c.intl.string("active" === s ? d.default["7q2YyD"] : d.default.FzX9h8),
                      confirm: "committed" === s,
                      disabled: !f || v || ("committed" === s && !m),
                      onPress: p,
                  },
    };
}
function m(e) {
    let t = (0, a.bG)([u.A], () => u.A.getSmartContext(e), [e]),
        l = n.useCallback((t) => (0, o.VF)(e, t), [e]);
    return (0, s.V)(t, l);
}
