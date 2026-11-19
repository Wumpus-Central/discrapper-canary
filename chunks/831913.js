l.d(t, { A: () => b });
var n = l(477900),
    a = l(582128),
    r = l(189213),
    i = l(858899),
    s = l(192308),
    u = l(331322),
    o = l(834730),
    d = l(777847),
    c = l(233470),
    f = l(260498),
    m = l(733791),
    p = l(680032),
    g = l(191850),
    v = l(792996),
    h = l(653036);
function x(e) {
    let { project: t, transitionState: l, onClose: x } = e,
        b = (function (e) {
            let [t, l] = a.useState(!1),
                [n, r] = a.useState(null);
            a.useEffect(() => (0, c.GO)(e.id), [e.id]);
            let i = (0, m.Bs)(e.id),
                [s, u] = a.useState(null),
                o = null == s ? i : s.target,
                d = o?.appName ?? e.name,
                h = a.useMemo(() => (0, p.wJ)(e, o), [e, o]),
                x = a.useCallback(async () => {
                    (l(!0), r(null), u({ target: i }));
                    try {
                        await (0, c.kY)(e.id);
                    } catch {
                        return (r(v.intl.string(g.default["d+wTRF"])), u(null), l(!1), null);
                    }
                    l(!1);
                    let t = f.Ay.getIntegrationStatus(e.id)?.owner_authorization_revoked === !0;
                    return v.intl.formatToPlainString(t ? g.default.tOu7uv : g.default.TWYUzf, { app: d });
                }, [d, i, e.id]);
            return {
                appName: d,
                rows: h,
                keptChannels: null == o ? null : (0, m.Mi)(o),
                pending: t,
                error: n,
                submit: x,
            };
        })(t),
        { appName: y, rows: j, keptChannels: k, pending: A, error: S } = b;
    return (0, n.jsx)(r.a, {
        transitionState: l,
        onClose: x,
        role: "alertdialog",
        title: v.intl.formatToPlainString(g.default.cAxBIL, { app: y }),
        notice: null == S ? void 0 : { type: "critical", message: S, role: "alert" },
        actions: [
            { text: v.intl.string(v.t["ETE/oC"]), variant: "secondary", onClick: x, disabled: A },
            {
                text: v.intl.string(g.default.ErhKil),
                variant: "critical-primary",
                onClick: async function () {
                    let e = await b.submit();
                    null != e &&
                        ((0, i.P0)({ text: e, variant: "success" }), (0, s.s7)(), (0, d.n0)(t.id, y, { kind: "wand" }));
                },
                loading: A,
                disabled: A,
            },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 12,
            children: [
                (0, n.jsx)(h.A, { rows: j }),
                null != k ? (0, n.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", children: k }) : null,
            ],
        }),
    });
}
function b(e) {
    (0, s.qf)((t) => (0, n.jsx)(x, { ...t, ...e }));
}
