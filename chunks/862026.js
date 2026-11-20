var n = l(582128),
    a = l(855986),
    r = l(513425),
    i = l(540665),
    s = l(569319),
    u = l(285411),
    o = l(805330),
    d = l(191850),
    c = l(792996);
l.d(
    t,
    {},
    {
        L: function (e, t) {
            let { id: l, status: s, error: u } = t,
                f = (0, a.bG)([i.Ay], () => "open" === i.Ay.getConnState(e), [e]),
                m = (0, a.bG)([r.A], () => !r.A.isThinking(e) && !r.A.isCompacting(e), [e]),
                [g, p] = n.useState(null),
                v = n.useCallback(() => p({ frame: t, ok: (0, o.yR)(e, l) }), [t, e, l]),
                h = g?.frame === t ? g : null,
                x = h?.ok === !0 && f;
            if ("undone" === s) return null;
            if ("reverted" === s)
                return {
                    label: c.intl.string(d.default.uQRAzS),
                    body: c.intl.string(d.default["24OcbD"]),
                    note: null,
                    action: null,
                };
            let b = "failed" === u || h?.ok === !1;
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
                              disabled: !f || x || ("committed" === s && !m),
                              onPress: v,
                          },
            };
        },
        Q: function (e) {
            let t = (0, a.bG)([u.A], () => u.A.getSmartContext(e), [e]),
                l = n.useCallback((t) => (0, o.VF)(e, t), [e]);
            return (0, s.V)(t, l);
        },
    },
);
