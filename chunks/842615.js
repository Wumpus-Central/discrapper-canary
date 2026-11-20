n.d(e, { A: () => v });
var i = n(582128),
    l = n(260498),
    a = n(733791),
    r = n(314116),
    s = n(858899),
    o = n(233470),
    c = n(191850),
    u = n(792996),
    d = n(477900),
    f = n(189213),
    g = n(331322),
    C = n(834730),
    m = n(192308),
    x = n(936508),
    h = n(199267),
    b = n(706935);
function p(t) {
    let { project: e, target: n, otherTargets: l, ...r } = t,
        [s, m] = i.useState(!1),
        [x, h] = i.useState(null),
        p = (0, a.fI)(n, l),
        v = (0, a.Mi)(n);
    return (0, d.jsx)(f.a, {
        ...r,
        role: "alertdialog",
        title: u.intl.formatToPlainString(c.default.CJBhb2, { name: n.projectName }),
        subtitle: (0, a.J)(n, l),
        notice: null == x ? void 0 : { message: x, type: "critical", role: "alert" },
        actions: [
            { text: u.intl.string(u.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: u.intl.string(c.default.aC42bN),
                variant: "critical-primary",
                loading: s,
                disabled: s,
                onClick: () => {
                    (async function () {
                        (m(!0), h(null));
                        let t = await (0, o.xx)(e.id).catch(() => null);
                        (m(!1), t?.ok !== !0) ? h(u.intl.string(c.default["0XDHob"])) : r.onClose();
                    })().catch(() => {});
                },
            },
        ],
        children: (0, d.jsxs)(g.B, {
            gap: 12,
            children: [
                (0, d.jsx)(b.Ay, { items: p }),
                null != v ? (0, d.jsx)(C.E, { variant: "body-sm/normal", color: "text-muted", children: v }) : null,
            ],
        }),
    });
}
function v(t, e) {
    let n = (0, a.Bs)(t);
    return i.useCallback(() => {
        let i = l.Ay.getProject(t);
        if (null != i && null != n)
            !(function (t) {
                let { project: e, target: n, action: i } = t;
                if ("delete" === i) {
                    let t = (0, a.zu)(e);
                    (0, m.qf)((i) => (0, d.jsx)(p, { ...i, project: e, target: n, otherTargets: t }));
                    return;
                }
                let l = (0, x.hJ)(e, n);
                (0, m.qf)((t) => (0, d.jsx)(h.A, { ...t, target: l }));
            })({ project: i, target: n, action: "delete" });
        else
            (0, r.A)({
                title: u.intl.formatToPlainString(c.default.CJBhb2, { name: e }),
                subtitle: u.intl.string(c.default["0OmrVn"]),
                confirmText: u.intl.string(u.t.oyYWHE),
                variant: "critical",
                onConfirm: () => {
                    (0, o.K)(t, () => (0, s.P0)({ text: u.intl.string(c.default["0XDHob"]), variant: "critical" }));
                },
            });
    }, [t, e, n]);
}
