l.d(t, { A: () => y });
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
    g = l(680032),
    p = l(894076),
    v = l(191850),
    h = l(792996),
    x = l(653036);
function b(e) {
    let { project: t, transitionState: l, onClose: b } = e,
        y = (function (e) {
            let [t, l] = a.useState(!1),
                [n, r] = a.useState(null);
            a.useEffect(() => (0, c.GO)(e.id), [e.id]);
            let i = (0, m.Bs)(e.id),
                [s, u] = a.useState(null),
                o = null == s ? i : s.target,
                d = o?.appName ?? e.name,
                x = a.useMemo(() => (0, g.wJ)(e, o), [e, o]),
                b = a.useCallback(async () => {
                    (l(!0), r(null), u({ target: i }));
                    try {
                        await (0, c.kY)(e.id);
                    } catch {
                        return (r(h.intl.string(v.default["d+wTRF"])), u(null), l(!1), null);
                    }
                    (l(!1), (0, p.A)(e, "removed"));
                    let t = f.Ay.getIntegrationStatus(e.id)?.owner_authorization_revoked === !0;
                    return h.intl.formatToPlainString(t ? v.default.tOu7uv : v.default.TWYUzf, { app: d });
                }, [d, i, e]);
            return {
                appName: d,
                rows: x,
                keptChannels: null == o ? null : (0, m.Mi)(o),
                pending: t,
                error: n,
                submit: b,
            };
        })(t),
        { appName: j, rows: A, keptChannels: k, pending: w, error: S } = y;
    return (0, n.jsx)(r.a, {
        transitionState: l,
        onClose: b,
        role: "alertdialog",
        title: h.intl.formatToPlainString(v.default.cAxBIL, { app: j }),
        notice: null == S ? void 0 : { type: "critical", message: S, role: "alert" },
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: b, disabled: w },
            {
                text: h.intl.string(v.default.ErhKil),
                variant: "critical-primary",
                onClick: async function () {
                    let e = await y.submit();
                    null != e &&
                        ((0, i.P0)({ text: e, variant: "success" }), (0, s.s7)(), (0, d.n0)(t.id, j, { kind: "wand" }));
                },
                loading: w,
                disabled: w,
            },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 12,
            children: [
                (0, n.jsx)(x.A, { rows: A }),
                null != k ? (0, n.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", children: k }) : null,
            ],
        }),
    });
}
function y(e) {
    (0, s.qf)((t) => (0, n.jsx)(b, { ...t, ...e }));
}
