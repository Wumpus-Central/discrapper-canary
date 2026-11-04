n(321073);
var e = n(477900),
    t = n(582128),
    l = n(136722),
    r = n(935462),
    a = n(97808),
    d = n(778712),
    c = n(534514),
    o = n(834730),
    m = n(825484),
    x = n(821609),
    u = n(376092),
    j = n(260509),
    h = n(317525),
    p = n(486020),
    g = n(488926),
    v = n(636042),
    N = n(652215),
    f = n(124759),
    b = n(792996),
    y = n(448320);
function E(s) {
    let { guild: i } = s,
        n = p.Ay.getGuildIconURL({ id: i.id, icon: i.icon, size: 120 });
    return (0, e.jsxs)(r.rQ, {
        className: y.wx,
        "data-migration-pending": !0,
        children: [
            (0, e.jsx)("div", {
                className: y.O_,
                children:
                    null != n
                        ? (0, e.jsx)(a.eu, {
                              src: n,
                              "aria-label": i.name,
                              size: d._3.SIZE_120,
                              className: y.__invalid_guildIcon,
                          })
                        : (0, e.jsx)("div", { className: y.q9, children: (0, j.Rb)(i) }),
            }),
            (0, e.jsxs)("div", {
                className: y.TK,
                children: [
                    (0, e.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: b.intl.string(b.t.MatO7M),
                    }),
                    (0, e.jsx)(o.E, {
                        variant: "body-md/normal",
                        color: "text-strong",
                        children: b.intl.string(b.t.VyPIeu),
                    }),
                ],
            }),
        ],
    });
}
function C(s) {
    return s.toString() === N.xBc.MENTION_EVERYONE.toString() ? b.intl.string(b.t.yCpsQw) : (0, u.hx)(s);
}
function _(s) {
    let { permissions: i } = s;
    return (0, e.jsxs)("div", {
        className: y.CZ,
        children: [
            (0, e.jsx)(o.E, {
                className: y.qd,
                variant: "body-xs/semibold",
                color: "text-muted",
                children: b.intl.string(b.t["0WZKI4"]),
            }),
            (0, e.jsx)("div", {
                className: y.lM,
                children: i.map((s, i) =>
                    (0, e.jsxs)(
                        "div",
                        {
                            className: y.ce,
                            children: [
                                (0, e.jsx)("div", { className: y.dT }),
                                (0, e.jsx)(o.E, { variant: "body-sm/normal", color: "text-default", children: C(s) }),
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
        className: y.CZ,
        children: [
            (0, e.jsx)(o.E, {
                className: y.qd,
                variant: "body-xs/semibold",
                color: "text-muted",
                children: b.intl.string(b.t.Yo5qlq),
            }),
            (0, e.jsx)("div", {
                className: y.lM,
                children: i.map((s, i) =>
                    (0, e.jsxs)(
                        "div",
                        {
                            className: y.ce,
                            children: [
                                (0, e.jsx)("div", { className: y.xE }),
                                (0, e.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", children: C(s) }),
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
    return (0, e.jsx)(r.$m, {
        "data-migration-pending": !0,
        children: (0, e.jsxs)("div", {
            className: y.tp,
            children: [(0, e.jsx)(_, { permissions: n }), (0, e.jsx)(I, { permissions: t })],
        }),
    });
}
function k(s) {
    let { onConfirm: i, onDismiss: n } = s;
    return (0, e.jsx)(r.jl, {
        className: y.qr,
        "data-migration-pending": !0,
        children: (0, e.jsxs)(m.e, {
            fullWidth: !0,
            children: [
                (0, e.jsx)(x.$, { variant: "secondary", text: b.intl.string(b.t.gWQZvr), onClick: n }),
                (0, e.jsx)(x.$, { text: b.intl.string(b.t.iOSdAW), onClick: i }),
            ],
        }),
    });
}
n.d(
    i,
    {},
    {
        default: function (s) {
            let { guild: i, transitionState: n, onClose: a } = s,
                d = t.useMemo(() => {
                    let s = [],
                        n = [];
                    return (
                        f.dR.map((e) => {
                            g.Ib(e, i) ? s.push(e) : n.push(e);
                        }),
                        { enabledPermissions: s, disabledPermissions: n }
                    );
                }, [i]);
            return null == i
                ? null
                : (0, e.jsxs)(r.EO, {
                      transitionState: n,
                      size: r.rI.SMALL,
                      className: y.yl,
                      parentComponent: "DisableRiskyPermsModal",
                      "data-migration-pending": !0,
                      children: [
                          (0, e.jsx)(E, { guild: i }),
                          (0, e.jsx)(M, { permissions: d }),
                          (0, e.jsx)(k, {
                              onConfirm: async function () {
                                  if (null == i) return;
                                  let s = null != i ? h.A.getEveryoneRole(i) : void 0;
                                  if (null == s) return;
                                  let n = l.TF(s.permissions, f.e$);
                                  (await (0, v.JY)(i.id, [{ ...s, permissions: n }]), a());
                              },
                              onDismiss: function () {
                                  a();
                              },
                          }),
                      ],
                  });
        },
    },
);
