l.d(t, { L: () => f, Q: () => p });
var n = l(582128),
    a = l(17928),
    i = l(245179),
    r = l(319481),
    u = l(569319),
    s = l(285411),
    o = l(805330),
    d = l(248675),
    c = l(105292);
function f(e, t) {
    let { id: l, status: u, error: s } = t,
        f = (0, a.bG)([r.default], () => "open" === r.default.getConnState(e), [e]),
        p = (0, a.bG)([i.A], () => !i.A.isThinking(e) && !i.A.isCompacting(e), [e]),
        [h, m] = n.useState(null),
        g = n.useCallback(() => m({ frame: t, ok: (0, o.yR)(e, l) }), [t, e, l]),
        x = h?.frame === t ? h : null,
        b = x?.ok === !0 && f;
    if ("undone" === u) return null;
    if ("reverted" === u)
        return {
            label: c.intl.string(d.default.uQRAzS),
            body: c.intl.string(d.default["24OcbD"]),
            note: null,
            action: null,
        };
    let v = "failed" === s || x?.ok === !1;
    return {
        label: c.intl.string(d.default.iBrh0c),
        body: c.intl.string(d.default.sRY8wn),
        note: "busy" === s ? c.intl.string(d.default.QoixaY) : v ? c.intl.string(d.default["9fvHNe"]) : null,
        action:
            "expired" === u
                ? null
                : {
                      text: c.intl.string("active" === u ? d.default["7q2YyD"] : d.default.FzX9h8),
                      confirm: "committed" === u,
                      disabled: !f || b || ("committed" === u && !p),
                      onPress: g,
                  },
    };
}
function p(e) {
    let t = (0, a.bG)([s.A], () => s.A.getSmartContext(e), [e]),
        l = n.useCallback((t) => (0, o.VF)(e, t), [e]);
    return (0, u.V)(t, l);
}
