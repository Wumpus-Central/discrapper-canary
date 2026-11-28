l.d(t, { A: () => y });
var n = l(477900),
    a = l(582128),
    i = l(189213),
    r = l(858899),
    s = l(192308),
    u = l(331322),
    o = l(834730),
    d = l(777847),
    c = l(233470),
    f = l(260498),
    m = l(733791),
    g = l(680032),
    p = l(959956),
    h = l(258576),
    v = l(792996),
    x = l(653036);
function b(e) {
    let { project: t, transitionState: l, onClose: b } = e,
        y = (function (e) {
            let [t, l] = a.useState(!1),
                [n, i] = a.useState(null);
            a.useEffect(() => (0, c.GO)(e.id), [e.id]);
            let r = (0, m.Bs)(e.id),
                [s, u] = a.useState(null),
                o = null == s ? r : s.target,
                d = o?.appName ?? e.name,
                x = a.useMemo(() => (0, g.wJ)(e, o), [e, o]),
                b = a.useCallback(async () => {
                    (l(!0), i(null), u({ target: r }));
                    try {
                        await (0, c.kY)(e.id);
                    } catch {
                        return (i(v.intl.string(h.default["d+wTRF"])), u(null), l(!1), null);
                    }
                    (l(!1), (0, p.Ay)(e, "removed"));
                    let t = f.Ay.getIntegrationStatus(e.id)?.owner_authorization_revoked === !0;
                    return v.intl.formatToPlainString(t ? h.default.tOu7uv : h.default.TWYUzf, { app: d });
                }, [d, r, e]);
            return {
                appName: d,
                rows: x,
                keptChannels: null == o ? null : (0, m.Mi)(o),
                pending: t,
                error: n,
                submit: b,
            };
        })(t),
        { appName: j, rows: k, keptChannels: A, pending: S, error: w } = y;
    return (0, n.jsx)(i.a, {
        transitionState: l,
        onClose: b,
        role: "alertdialog",
        title: v.intl.formatToPlainString(h.default.cAxBIL, { app: j }),
        notice: null == w ? void 0 : { type: "critical", message: w, role: "alert" },
        actions: [
            { text: v.intl.string(v.t["ETE/oC"]), variant: "secondary", onClick: b, disabled: S },
            {
                text: v.intl.string(h.default.ErhKil),
                variant: "critical-primary",
                onClick: async function () {
                    let e = await y.submit();
                    null != e &&
                        ((0, r.P0)({ text: e, variant: "success" }), (0, s.s7)(), (0, d.n0)(t.id, j, { kind: "wand" }));
                },
                loading: S,
                disabled: S,
            },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 12,
            children: [
                (0, n.jsx)(x.A, { rows: k }),
                null != A ? (0, n.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", children: A }) : null,
            ],
        }),
    });
}
function y(e) {
    (0, s.qf)((t) => (0, n.jsx)(b, { ...t, ...e }));
}
