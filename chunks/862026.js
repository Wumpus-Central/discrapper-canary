n.d(t, { L: () => f, Q: () => p });
var l = n(582128),
    a = n(17928),
    i = n(245179),
    r = n(319481),
    u = n(569319),
    s = n(285411),
    o = n(805330),
    d = n(248675),
    c = n(105292);
function f(e, t) {
    let { id: n, status: u, error: s } = t,
        f = (0, a.bG)([r.default], () => "open" === r.default.getConnState(e), [e]),
        p = (0, a.bG)([i.A], () => !i.A.isThinking(e) && !i.A.isCompacting(e), [e]),
        [h, g] = l.useState(null),
        m = l.useCallback(() => g({ frame: t, ok: (0, o.yR)(e, n) }), [t, e, n]),
        v = h?.frame === t ? h : null,
        b = v?.ok === !0 && f;
    if ("undone" === u) return null;
    if ("reverted" === u)
        return {
            label: c.intl.string(d.default.uQRAzS),
            body: c.intl.string(d.default["24OcbD"]),
            note: null,
            action: null,
        };
    let x = "failed" === s || v?.ok === !1;
    return {
        label: c.intl.string(d.default.iBrh0c),
        body: c.intl.string(d.default.sRY8wn),
        note: "busy" === s ? c.intl.string(d.default.QoixaY) : x ? c.intl.string(d.default["9fvHNe"]) : null,
        action:
            "expired" === u
                ? null
                : {
                      text: c.intl.string("active" === u ? d.default["7q2YyD"] : d.default.FzX9h8),
                      confirm: "committed" === u,
                      disabled: !f || b || ("committed" === u && !p),
                      onPress: m,
                  },
    };
}
function p(e) {
    let t = (0, a.bG)([s.A], () => s.A.getSmartContext(e), [e]),
        n = l.useCallback((t) => (0, o.VF)(e, t), [e]);
    return (0, u.V)(t, n);
}
