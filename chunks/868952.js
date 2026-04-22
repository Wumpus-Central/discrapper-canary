i.d(e, { default: () => y }), i(321073);
var n = i(627968),
    s = i(64700),
    a = i(136722),
    l = i(825484),
    r = i(821609),
    o = i(935462),
    c = i(97808),
    d = i(778712),
    _ = i(534514),
    h = i(834730),
    p = i(376092),
    E = i(260509),
    S = i(317525),
    m = i(486020),
    u = i(488926),
    x = i(636042),
    T = i(652215),
    I = i(124759),
    N = i(985018),
    L = i(626241);
function O(t) {
    let { guild: e } = t,
        i = m.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 120 });
    return (0, n.jsxs)(o.rQ, {
        className: L.wx,
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)("div", {
                className: L.O_,
                children:
                    null != i
                        ? (0, n.jsx)(c.eu, {
                              src: i,
                              "aria-label": e.name,
                              size: d._3.SIZE_120,
                              className: L.__invalid_guildIcon,
                          })
                        : (0, n.jsx)("div", { className: L.q9, children: (0, E.Rb)(e) }),
            }),
            (0, n.jsxs)("div", {
                className: L.TK,
                children: [
                    (0, n.jsx)(_.D, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        children: N.intl.string(N.t.MatO7M),
                    }),
                    (0, n.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: N.intl.string(N.t.VyPIeu),
                    }),
                ],
            }),
        ],
    });
}
let j = (t) => (t.toString() === T.xBc.MENTION_EVERYONE.toString() ? N.intl.string(N.t.yCpsQw) : (0, p.hx)(t));
function g(t) {
    let { permissions: e } = t;
    return (0, n.jsxs)("div", {
        className: L.CZ,
        children: [
            (0, n.jsx)(h.E, {
                className: L.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: N.intl.string(N.t["0WZKI4"]),
            }),
            (0, n.jsx)("div", {
                className: L.lM,
                children: e.map((t, e) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: L.ce,
                            children: [
                                (0, n.jsx)("div", { className: L.dT }),
                                (0, n.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", children: j(t) }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function R(t) {
    let { permissions: e } = t;
    return (0, n.jsxs)("div", {
        className: L.CZ,
        children: [
            (0, n.jsx)(h.E, {
                className: L.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: N.intl.string(N.t.Yo5qlq),
            }),
            (0, n.jsx)("div", {
                className: L.lM,
                children: e.map((t, e) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: L.ce,
                            children: [
                                (0, n.jsx)("div", { className: L.xE }),
                                (0, n.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: j(t) }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function G(t) {
    let { permissions: e } = t,
        { enabledPermissions: i, disabledPermissions: s } = e;
    return (0, n.jsx)(o.$m, {
        "data-migration-pending": !0,
        children: (0, n.jsxs)("div", {
            className: L.tp,
            children: [(0, n.jsx)(g, { permissions: i }), (0, n.jsx)(R, { permissions: s })],
        }),
    });
}
function f(t) {
    let { onConfirm: e, onDismiss: i } = t;
    return (0, n.jsx)(o.jl, {
        className: L.qr,
        "data-migration-pending": !0,
        children: (0, n.jsxs)(l.e, {
            fullWidth: !0,
            children: [
                (0, n.jsx)(r.$, { variant: "secondary", text: N.intl.string(N.t.gWQZvr), onClick: i }),
                (0, n.jsx)(r.$, { text: N.intl.string(N.t.iOSdAW), onClick: e }),
            ],
        }),
    });
}
function y(t) {
    let { guild: e, transitionState: i, onClose: l } = t,
        r = s.useMemo(() => {
            let t = [],
                i = [];
            return (
                I.dR.map((n) => {
                    u.Ib(n, e) ? t.push(n) : i.push(n);
                }),
                { enabledPermissions: t, disabledPermissions: i }
            );
        }, [e]);
    if (null == e) return null;
    let c = async () => {
        let t = null != e ? S.A.getEveryoneRole(e) : void 0;
        if (null == t) return;
        let i = a.TF(t.permissions, I.e$);
        await (0, x.JY)(e.id, [{ ...t, permissions: i }]), l();
    };
    return (0, n.jsxs)(o.EO, {
        transitionState: i,
        size: o.rI.SMALL,
        className: L.yl,
        parentComponent: "DisableRiskyPermsModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(O, { guild: e }),
            (0, n.jsx)(G, { permissions: r }),
            (0, n.jsx)(f, {
                onConfirm: c,
                onDismiss: () => {
                    l();
                },
            }),
        ],
    });
}
