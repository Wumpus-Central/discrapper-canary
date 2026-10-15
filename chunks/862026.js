n.d(t, { L: () => c, Q: () => f });
var l = n(582128),
    i = n(17928),
    r = n(245179),
    a = n(723312),
    u = n(285411),
    s = n(805330),
    o = n(248675),
    d = n(105292);
function c(e, t) {
    let { id: n, status: u, error: c } = t,
        f = (0, i.bG)([a.default], () => "open" === a.default.getConnState(e), [e]),
        p = (0, i.bG)([r.A], () => !r.A.isThinking(e) && !r.A.isCompacting(e), [e]),
        [h, g] = l.useState(null),
        m = l.useCallback(() => g({ frame: t, ok: (0, s.yR)(e, n) }), [t, e, n]),
        b = h?.frame === t ? h : null,
        v = b?.ok === !0 && f;
    if ("undone" === u) return null;
    if ("reverted" === u)
        return {
            label: d.intl.string(o.default.uQRAzS),
            body: d.intl.string(o.default["24OcbD"]),
            note: null,
            action: null,
        };
    let x = "failed" === c || b?.ok === !1;
    return {
        label: d.intl.string(o.default.iBrh0c),
        body: d.intl.string(o.default.sRY8wn),
        note: "busy" === c ? d.intl.string(o.default.QoixaY) : x ? d.intl.string(o.default["9fvHNe"]) : null,
        action:
            "expired" === u
                ? null
                : {
                      text: d.intl.string("active" === u ? o.default["7q2YyD"] : o.default.FzX9h8),
                      confirm: "committed" === u,
                      disabled: !f || v || ("committed" === u && !p),
                      onPress: m,
                  },
    };
}
function f(e) {
    let t = (0, i.bG)([u.A], () => u.A.getSmartContext(e), [e]),
        [n, r] = l.useState(null);
    null != n && n === t && r(null);
    let a = null != n && n !== (t ?? !1),
        o = l.useCallback(() => !a || null == n || (0, s.VF)(e, n), [a, n, e]);
    return { checked: n ?? t ?? !1, changed: a, setChecked: r, save: o };
}
