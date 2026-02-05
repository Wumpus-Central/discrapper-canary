i.d(s, { default: () => C }), i(321073);
var t = i(627968),
    n = i(64700),
    l = i(136722),
    r = i(158954),
    a = i(397927),
    d = i(376092),
    c = i(260509),
    o = i(317525),
    x = i(486020),
    m = i(488926),
    u = i(636042),
    _ = i(652215),
    h = i(124759),
    j = i(985018),
    p = i(636250);
function g(e) {
    let { guild: s } = e,
        i = x.Ay.getGuildIconURL({ id: s.id, icon: s.icon, size: 120 });
    return (0, t.jsxs)(a.rQ0, {
        className: p.wx,
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: p.O_,
                children:
                    null != i
                        ? (0, t.jsx)(a.euF, {
                              src: i,
                              "aria-label": s.name,
                              size: a._3J.SIZE_120,
                              className: p.__invalid_guildIcon,
                          })
                        : (0, t.jsx)("div", { className: p.q9, children: (0, c.Rb)(s) }),
            }),
            (0, t.jsxs)("div", {
                className: p.TK,
                children: [
                    (0, t.jsx)(a.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        children: j.intl.string(j.t.MatO7M),
                    }),
                    (0, t.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: j.intl.string(j.t.VyPIeu),
                    }),
                ],
            }),
        ],
    });
}
let v = (e) => (e.toString() === _.xBc.MENTION_EVERYONE.toString() ? j.intl.string(j.t.yCpsQw) : (0, d.hx)(e));
function N(e) {
    let { permissions: s } = e;
    return (0, t.jsxs)("div", {
        className: p.CZ,
        children: [
            (0, t.jsx)(a.Text, {
                className: p.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: j.intl.string(j.t["0WZKI4"]),
            }),
            (0, t.jsx)("div", {
                className: p.lM,
                children: s.map((e, s) =>
                    (0, t.jsxs)(
                        "div",
                        {
                            className: p.ce,
                            children: [
                                (0, t.jsx)("div", { className: p.dT }),
                                (0, t.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: v(e),
                                }),
                            ],
                        },
                        s,
                    ),
                ),
            }),
        ],
    });
}
function b(e) {
    let { permissions: s } = e;
    return (0, t.jsxs)("div", {
        className: p.CZ,
        children: [
            (0, t.jsx)(a.Text, {
                className: p.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: j.intl.string(j.t.Yo5qlq),
            }),
            (0, t.jsx)("div", {
                className: p.lM,
                children: s.map((e, s) =>
                    (0, t.jsxs)(
                        "div",
                        {
                            className: p.ce,
                            children: [
                                (0, t.jsx)("div", { className: p.xE }),
                                (0, t.jsx)(a.Text, { variant: "text-sm/normal", color: "text-muted", children: v(e) }),
                            ],
                        },
                        s,
                    ),
                ),
            }),
        ],
    });
}
function f(e) {
    let { permissions: s } = e,
        { enabledPermissions: i, disabledPermissions: n } = s;
    return (0, t.jsx)(a.$mQ, {
        "data-migration-pending": !0,
        children: (0, t.jsxs)("div", {
            className: p.tp,
            children: [(0, t.jsx)(N, { permissions: i }), (0, t.jsx)(b, { permissions: n })],
        }),
    });
}
function T(e) {
    let { onConfirm: s, onDismiss: i } = e;
    return (0, t.jsx)(a.jlY, {
        className: p.qr,
        "data-migration-pending": !0,
        children: (0, t.jsxs)(r.e2v, {
            fullWidth: !0,
            children: [
                (0, t.jsx)(r.$nd, { variant: "secondary", text: j.intl.string(j.t.gWQZvr), onClick: i }),
                (0, t.jsx)(r.$nd, { text: j.intl.string(j.t.iOSdAW), onClick: s }),
            ],
        }),
    });
}
function C(e) {
    let { guild: s, transitionState: i, onClose: r } = e,
        d = n.useMemo(() => {
            let e = [],
                i = [];
            return (
                h.dR.map((t) => {
                    m.Ib(t, s) ? e.push(t) : i.push(t);
                }),
                { enabledPermissions: e, disabledPermissions: i }
            );
        }, [s]);
    if (null == s) return null;
    let c = async () => {
        let e = null != s ? o.A.getEveryoneRole(s) : void 0;
        if (null == e) return;
        let i = l.TF(e.permissions, h.e$);
        await (0, u.JY)(s.id, [{ ...e, permissions: i }]), r();
    };
    return (0, t.jsxs)(a.EOs, {
        transitionState: i,
        size: a.rIJ.SMALL,
        className: p.yl,
        parentComponent: "DisableRiskyPermsModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)(g, { guild: s }),
            (0, t.jsx)(f, { permissions: d }),
            (0, t.jsx)(T, {
                onConfirm: c,
                onDismiss: () => {
                    r();
                },
            }),
        ],
    });
}
