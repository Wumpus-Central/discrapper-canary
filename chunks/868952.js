n.d(i, { default: () => q }), n(321073);
var e = n(627968),
    t = n(64700),
    l = n(136722),
    r = n(825484),
    a = n(821609),
    d = n(935462),
    c = n(97808),
    o = n(778712),
    x = n(534514),
    m = n(834730),
    u = n(376092),
    j = n(260509),
    h = n(317525),
    p = n(486020),
    g = n(488926),
    v = n(636042),
    N = n(652215),
    f = n(124759),
    E = n(375708),
    b = n(626241);
function C(s) {
    let { guild: i } = s,
        n = p.Ay.getGuildIconURL({ id: i.id, icon: i.icon, size: 120 });
    return (0, e.jsxs)(d.rQ, {
        className: b.wx,
        "data-migration-pending": !0,
        children: [
            (0, e.jsx)("div", {
                className: b.O_,
                children:
                    null != n
                        ? (0, e.jsx)(c.eu, {
                              src: n,
                              "aria-label": i.name,
                              size: o._3.SIZE_120,
                              className: b.__invalid_guildIcon,
                          })
                        : (0, e.jsx)("div", { className: b.q9, children: (0, j.Rb)(i) }),
            }),
            (0, e.jsxs)("div", {
                className: b.TK,
                children: [
                    (0, e.jsx)(x.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        children: E.intl.string(E.t.MatO7M),
                    }),
                    (0, e.jsx)(m.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: E.intl.string(E.t.VyPIeu),
                    }),
                ],
            }),
        ],
    });
}
function _(s) {
    return s.toString() === N.xBc.MENTION_EVERYONE.toString() ? E.intl.string(E.t.yCpsQw) : (0, u.hx)(s);
}
function y(s) {
    let { permissions: i } = s;
    return (0, e.jsxs)("div", {
        className: b.CZ,
        children: [
            (0, e.jsx)(m.E, {
                className: b.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: E.intl.string(E.t["0WZKI4"]),
            }),
            (0, e.jsx)("div", {
                className: b.lM,
                children: i.map((s, i) =>
                    (0, e.jsxs)(
                        "div",
                        {
                            className: b.ce,
                            children: [
                                (0, e.jsx)("div", { className: b.dT }),
                                (0, e.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", children: _(s) }),
                            ],
                        },
                        i,
                    ),
                ),
            }),
        ],
    });
}
function I(s) {
    let { permissions: i } = s;
    return (0, e.jsxs)("div", {
        className: b.CZ,
        children: [
            (0, e.jsx)(m.E, {
                className: b.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: E.intl.string(E.t.Yo5qlq),
            }),
            (0, e.jsx)("div", {
                className: b.lM,
                children: i.map((s, i) =>
                    (0, e.jsxs)(
                        "div",
                        {
                            className: b.ce,
                            children: [
                                (0, e.jsx)("div", { className: b.xE }),
                                (0, e.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: _(s) }),
                            ],
                        },
                        i,
                    ),
                ),
            }),
        ],
    });
}
function M(s) {
    let { permissions: i } = s,
        { enabledPermissions: n, disabledPermissions: t } = i;
    return (0, e.jsx)(d.$m, {
        "data-migration-pending": !0,
        children: (0, e.jsxs)("div", {
            className: b.tp,
            children: [(0, e.jsx)(y, { permissions: n }), (0, e.jsx)(I, { permissions: t })],
        }),
    });
}
function k(s) {
    let { onConfirm: i, onDismiss: n } = s;
    return (0, e.jsx)(d.jl, {
        className: b.qr,
        "data-migration-pending": !0,
        children: (0, e.jsxs)(r.e, {
            fullWidth: !0,
            children: [
                (0, e.jsx)(a.$, { variant: "secondary", text: E.intl.string(E.t.gWQZvr), onClick: n }),
                (0, e.jsx)(a.$, { text: E.intl.string(E.t.iOSdAW), onClick: i }),
            ],
        }),
    });
}
function q(s) {
    let { guild: i, transitionState: n, onClose: r } = s,
        a = t.useMemo(() => {
            let s = [],
                n = [];
            return (
                f.dR.map((e) => {
                    g.Ib(e, i) ? s.push(e) : n.push(e);
                }),
                { enabledPermissions: s, disabledPermissions: n }
            );
        }, [i]);
    if (null == i) return null;
    let c = async () => {
        let s = null != i ? h.A.getEveryoneRole(i) : void 0;
        if (null == s) return;
        let n = l.TF(s.permissions, f.e$);
        await (0, v.JY)(i.id, [{ ...s, permissions: n }]), r();
    };
    return (0, e.jsxs)(d.EO, {
        transitionState: n,
        size: d.rI.SMALL,
        className: b.yl,
        parentComponent: "DisableRiskyPermsModal",
        "data-migration-pending": !0,
        children: [
            (0, e.jsx)(C, { guild: i }),
            (0, e.jsx)(M, { permissions: a }),
            (0, e.jsx)(k, {
                onConfirm: c,
                onDismiss: function () {
                    r();
                },
            }),
        ],
    });
}
