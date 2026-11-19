l.d(t, { A: () => x });
var n = l(477900),
    a = l(582128),
    r = l(189213),
    i = l(858899),
    s = l(192308),
    u = l(331322),
    o = l(834730),
    d = l(233470),
    c = l(260498),
    f = l(733791),
    m = l(680032),
    p = l(191850),
    g = l(792996),
    v = l(653036);
function h(e) {
    let { project: t, transitionState: l, onClose: h } = e,
        x = (function (e) {
            let [t, l] = a.useState(!1),
                [n, r] = a.useState(null);
            a.useEffect(() => (0, d.GO)(e.id), [e.id]);
            let i = (0, f.Bs)(e.id),
                [s, u] = a.useState(null),
                o = null == s ? i : s.target,
                v = o?.appName ?? e.name,
                h = a.useMemo(() => (0, m.wJ)(e, o), [e, o]),
                x = a.useCallback(async () => {
                    (l(!0), r(null), u({ target: i }));
                    try {
                        await (0, d.kY)(e.id);
                    } catch {
                        return (r(g.intl.string(p.default["d+wTRF"])), u(null), l(!1), null);
                    }
                    l(!1);
                    let t = c.Ay.getIntegrationStatus(e.id)?.owner_authorization_revoked === !0;
                    return g.intl.formatToPlainString(t ? p.default.tOu7uv : p.default.TWYUzf, { app: v });
                }, [v, i, e.id]);
            return {
                appName: v,
                rows: h,
                keptChannels: null == o ? null : (0, f.Mi)(o),
                pending: t,
                error: n,
                submit: x,
            };
        })(t),
        { appName: b, rows: y, keptChannels: j, pending: k, error: A } = x;
    return (0, n.jsx)(r.a, {
        transitionState: l,
        onClose: h,
        role: "alertdialog",
        title: g.intl.formatToPlainString(p.default.cAxBIL, { app: b }),
        notice: null == A ? void 0 : { type: "critical", message: A, role: "alert" },
        actions: [
            { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", onClick: h, disabled: k },
            {
                text: g.intl.string(p.default.ErhKil),
                variant: "critical-primary",
                onClick: async function () {
                    let e = await x.submit();
                    null != e && ((0, i.P0)({ text: e, variant: "success" }), (0, s.s7)());
                },
                loading: k,
                disabled: k,
            },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 12,
            children: [
                (0, n.jsx)(v.A, { rows: y }),
                null != j ? (0, n.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", children: j }) : null,
            ],
        }),
    });
}
function x(e) {
    (0, s.qf)((t) => (0, n.jsx)(h, { ...t, ...e }));
}
