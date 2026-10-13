n.d(t, { L: () => c, Q: () => f });
var l = n(582128),
    i = n(17928),
    a = n(245179),
    r = n(591277),
    u = n(285411),
    s = n(805330),
    o = n(248675),
    d = n(660183);
function c(e, t) {
    let { id: n, status: u, error: c } = t,
        f = (0, i.bG)([r.Ay], () => "open" === r.Ay.getConnState(e), [e]),
        p = (0, i.bG)([a.A], () => !a.A.isThinking(e) && !a.A.isCompacting(e), [e]),
        [h, g] = l.useState(null),
        m = l.useCallback(() => g({ frame: t, ok: (0, s.yR)(e, n) }), [t, e, n]),
        b = h?.frame === t ? h : null,
        x = b?.ok === !0 && f;
    if ("undone" === u) return null;
    if ("reverted" === u)
        return {
            label: d.intl.string(o.default.uQRAzS),
            body: d.intl.string(o.default["24OcbD"]),
            note: null,
            action: null,
        };
    let v = "failed" === c || b?.ok === !1;
    return {
        label: d.intl.string(o.default.iBrh0c),
        body: d.intl.string(o.default.sRY8wn),
        note: "busy" === c ? d.intl.string(o.default.QoixaY) : v ? d.intl.string(o.default["9fvHNe"]) : null,
        action:
            "expired" === u
                ? null
                : {
                      text: d.intl.string("active" === u ? o.default["7q2YyD"] : o.default.FzX9h8),
                      confirm: "committed" === u,
                      disabled: !f || x || ("committed" === u && !p),
                      onPress: m,
                  },
    };
}
function f(e) {
    let t = (0, i.bG)([u.A], () => u.A.getSmartContext(e), [e]),
        [n, a] = l.useState(null);
    null != n && n === t && a(null);
    let r = null != n && n !== (t ?? !1),
        o = l.useCallback(() => !r || null == n || (0, s.VF)(e, n), [r, n, e]);
    return { checked: n ?? t ?? !1, changed: r, setChecked: a, save: o };
}
