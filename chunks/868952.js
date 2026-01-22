n.d(t, {
    default: () => b,
}),
    n(321073);
var i = n(627968),
    a = n(64700),
    o = n(136722),
    r = n(158954),
    c = n(397927),
    s = n(376092),
    l = n(260509),
    d = n(317525),
    p = n(486020),
    _ = n(488926),
    u = n(636042),
    h = n(652215),
    E = n(124759),
    O = n(985018),
    S = n(636250);

function m(e) {
    let { guild: t } = e,
        n = p.Ay.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120,
        });
    return (0, i.jsxs)(c.rQ0, {
        className: S.wx,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)("div", {
                className: S.O_,
                children:
                    null != n
                        ? (0, i.jsx)(c.euF, {
                              src: n,
                              "aria-label": t.name,
                              size: c._3J.SIZE_120,
                              className: S.__invalid_guildIcon,
                          })
                        : (0, i.jsx)("div", {
                              className: S.q9,
                              children: (0, l.Rb)(t),
                          }),
            }),
            (0, i.jsxs)("div", {
                className: S.TK,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        children: O.intl.string(O.t.MatO7M),
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: O.intl.string(O.t.VyPIeu),
                    }),
                ],
            }),
        ],
    });
}
let I = (e) => (e.toString() === h.xBc.MENTION_EVERYONE.toString() ? O.intl.string(O.t.yCpsQw) : (0, s.hx)(e));

function T(e) {
    let { permissions: t } = e;
    return (0, i.jsxs)("div", {
        className: S.CZ,
        children: [
            (0, i.jsx)(c.Text, {
                className: S.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: O.intl.string(O.t["0WZKI4"]),
            }),
            (0, i.jsx)("div", {
                className: S.lM,
                children: t.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: S.ce,
                            children: [
                                (0, i.jsx)("div", {
                                    className: S.dT,
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: I(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}

function f(e) {
    let { permissions: t } = e;
    return (0, i.jsxs)("div", {
        className: S.CZ,
        children: [
            (0, i.jsx)(c.Text, {
                className: S.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: O.intl.string(O.t.Yo5qlq),
            }),
            (0, i.jsx)("div", {
                className: S.lM,
                children: t.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: S.ce,
                            children: [
                                (0, i.jsx)("div", {
                                    className: S.xE,
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: I(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}

function N(e) {
    let { permissions: t } = e,
        { enabledPermissions: n, disabledPermissions: a } = t;
    return (0, i.jsx)(c.$mQ, {
        "data-migration-pending": !0,
        children: (0, i.jsxs)("div", {
            className: S.tp,
            children: [
                (0, i.jsx)(T, {
                    permissions: n,
                }),
                (0, i.jsx)(f, {
                    permissions: a,
                }),
            ],
        }),
    });
}

function y(e) {
    let { onConfirm: t, onDismiss: n } = e;
    return (0, i.jsx)(c.jlY, {
        className: S.qr,
        "data-migration-pending": !0,
        children: (0, i.jsxs)(r.e2v, {
            fullWidth: !0,
            children: [
                (0, i.jsx)(r.$nd, {
                    variant: "secondary",
                    text: O.intl.string(O.t.gWQZvr),
                    onClick: n,
                }),
                (0, i.jsx)(r.$nd, {
                    text: O.intl.string(O.t.iOSdAW),
                    onClick: t,
                }),
            ],
        }),
    });
}

function b(e) {
    let { guild: t, transitionState: n, onClose: r } = e,
        s = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                E.dR.map((i) => {
                    _.Ib(i, t) ? e.push(i) : n.push(i);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: n,
                }
            );
        }, [t]);
    if (null == t) return null;
    let l = async () => {
        var e, n;
        let i = null != t ? d.A.getEveryoneRole(t) : void 0;
        if (null == i) return;
        let a = o.TF(i.permissions, E.e$);
        await (0, u.JY)(t.id, [
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, i)),
            (n = n =
                {
                    permissions: a,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  }),
            e),
        ]),
            r();
    };
    return (0, i.jsxs)(c.EOs, {
        transitionState: n,
        size: c.rIJ.SMALL,
        className: S.yl,
        parentComponent: "DisableRiskyPermsModal",
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(m, {
                guild: t,
            }),
            (0, i.jsx)(N, {
                permissions: s,
            }),
            (0, i.jsx)(y, {
                onConfirm: l,
                onDismiss: () => {
                    r();
                },
            }),
        ],
    });
}
