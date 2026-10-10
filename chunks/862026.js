n.d(t, { L: () => o, Q: () => d });
var l = n(582128),
    i = n(17928),
    a = n(245179),
    r = n(712808),
    s = n(248675),
    u = n(660183);
function o(e, t) {
    let { id: n, status: o, error: d } = t,
        c = (0, i.bG)([r.Ay], () => "open" === r.Ay.getConnState(e), [e]),
        f = (0, i.bG)([a.Ay, r.Ay], () => !r.Ay.isChatStopped(e) && !a.Ay.isThinking(e) && !a.Ay.isCompacting(e), [e]),
        [p, h] = l.useState(null),
        g = l.useCallback(() => h({ frame: t, ok: (0, r.yR)(e, n) }), [t, e, n]),
        m = p?.frame === t ? p : null,
        b = m?.ok === !0 && c;
    if ("undone" === o) return null;
    if ("reverted" === o)
        return {
            label: u.intl.string(s.default.uQRAzS),
            body: u.intl.string(s.default["24OcbD"]),
            note: null,
            action: null,
        };
    let v = "failed" === d || m?.ok === !1;
    return {
        label: u.intl.string(s.default.iBrh0c),
        body: u.intl.string(s.default.sRY8wn),
        note: "busy" === d ? u.intl.string(s.default.QoixaY) : v ? u.intl.string(s.default["9fvHNe"]) : null,
        action:
            "expired" === o
                ? null
                : {
                      text: u.intl.string("active" === o ? s.default["7q2YyD"] : s.default.FzX9h8),
                      confirm: "committed" === o,
                      disabled: !c || b || ("committed" === o && !f),
                      onPress: g,
                  },
    };
}
function d(e) {
    let t = (0, i.bG)([r.Ay], () => r.Ay.getSmartContext(e), [e]),
        [n, a] = l.useState(null);
    null != n && n === t && a(null);
    let s = null != n && n !== (t ?? !1),
        u = l.useCallback(() => !s || null == n || (0, r.VF)(e, n), [s, n, e]);
    return { checked: n ?? t ?? !1, changed: s, setChecked: a, save: u };
}
