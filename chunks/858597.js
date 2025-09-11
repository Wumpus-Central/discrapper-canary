n.d(e, { Z: () => C });
var i = n(951288),
    s = n(647438),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(194359),
    u = n(782568),
    T = n(726521),
    _ = n(485664),
    S = n(681678),
    x = n(699516),
    p = n(991981),
    b = n(367408),
    E = n(423932),
    h = n(473092),
    A = n(611446),
    m = n(993750),
    O = n(134612),
    g = n(388032),
    N = n(149245);
function j(t) {
    let { children: e } = t;
    return (0, i.jsx)("div", {
        className: N.actionGroup,
        children: e,
    });
}
function R(t) {
    let { title: e, subTitle: n, buttonText: s, variant: r = "secondary", onPress: l, disabled: a } = t;
    return (0, i.jsxs)("div", {
        className: N.actionRow,
        children: [
            (0, i.jsxs)("div", {
                className: N.actionButtonDetails,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: e,
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)(c.zxk, {
                size: "sm",
                variant: r,
                text: s,
                onClick: l,
                disabled: a,
            }),
        ],
    });
}
function f(t) {
    let { title: e, subTitle: n, onPress: s } = t;
    return (0, i.jsxs)(c.P3F, {
        className: l()(N.actionRow, N.clickableActionRow),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: N.actionButtonDetails,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: e,
                    }),
                    null != n
                        ? (0, i.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              color: "header-secondary",
                              children: n,
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(c.Fbu, {
                size: "md",
                color: o.Z.colors.INTERACTIVE_NORMAL,
            }),
        ],
    });
}
let C = function (t) {
    let { otherUserId: e, channelId: r, warningId: l, warningType: o, transitionToSlide: N } = t,
        C = (0, _.o)(),
        L = (0, _.Q)(),
        y = (0, p.q)(r),
        F = null != (0, b.M)(r),
        v = (0, a.e7)([x.Z], () => x.Z.isIgnored(e), [e]),
        M = (0, a.e7)([x.Z], () => x.Z.isBlocked(e), [e]),
        I = s.useCallback(
            (t) => {
                (0, h.qc)({
                    channelId: r,
                    warningId: l,
                    senderId: e,
                    warningType: o,
                    cta: t,
                    isNudgeWarning: F,
                });
            },
            [r, l, e, o, F],
        ),
        Z = s.useCallback(() => {
            (0, c.Mr3)(O.X_), I(h.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [I]),
        k = s.useCallback(() => {
            d.Z.unblockUser(e, { location: O.DL }), I(h.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, I]),
        U = s.useCallback(() => {
            (0, c.Mr3)(O.X_), I(h.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [I]),
        P = s.useMemo(
            () => [
                {
                    type: 0,
                    title: g.intl.string(g.t.B7ZT09),
                    subTitle: g.intl.string(g.t["fCfp4+"]),
                    buttonText: v ? g.intl.string(g.t["9e0wLi"]) : g.intl.string(g.t.B7ZT09),
                    disabled: M,
                    onPress: () => {
                        v
                            ? (d.Z.unignoreUser(e, O.cH, r), I(h.NM.USER_SAFETY_TOOLS_UNIGNORE))
                            : (d.Z.ignoreUser(e, O.cH, r), I(h.NM.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: g.intl.string(g.t.oDxaKy),
                    subTitle: g.intl.string(g.t.Lj37a2),
                    buttonText: M ? g.intl.string(g.t.Hro409) : g.intl.string(g.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        M
                            ? (k(), S.Z.showUnblockSuccessToast(e, r))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e("41128").then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: s, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: s,
                                          onBlock: Z,
                                          onBlockAndReport: U,
                                          onCancel: () => {
                                              null == l || l(), I(h.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: l,
                                          userId: e,
                                          channelId: r,
                                      });
                                  };
                              });
                    },
                },
                {
                    type: 0,
                    title: g.intl.string(g.t.X27yhI),
                    subTitle: g.intl.string(g.t["0tydOT"]),
                    buttonText: g.intl.string(g.t.X27yhI),
                    onPress: () => {
                        (0, c.Mr3)(O.X_), (0, T.wk)(y), I(h.NM.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [v, M, I, k, Z, U, e, r, y],
        ),
        Y = s.useMemo(() => {
            let t = {
                    title: g.intl.string(g.t.ZSbbMD),
                    subTitle: g.intl.string(g.t.iNcsra),
                    buttonText: g.intl.string(g.t.rK4Gqq),
                    onPress: () => {
                        (0, u.Z)(O.EI), I(h.NM.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: g.intl.string(g.t.ZSbbMD),
                    subTitle: g.intl.string(g.t.g5uwCw),
                    buttonText: g.intl.string(g.t.rK4Gqq),
                    onPress: () => {
                        (0, u.Z)(O.n4), I(h.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: g.intl.string(g.t.ZSbbMD),
                    subTitle: g.intl.string(g.t.S9O1ZW),
                    buttonText: g.intl.string(g.t.rK4Gqq),
                    onPress: () => {
                        (0, u.Z)(O.$l), I(h.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: g.intl.string(g.t.syuaPD),
                    subTitle: g.intl.string(g.t.LLBnNj),
                    buttonText: g.intl.string(g.t.rzvzyc),
                    onPress: () => {
                        (0, E.Z)(c.pTH), I(h.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: g.intl.string(g.t["7LgVmp"]),
                    subTitle: g.intl.string(g.t.pwoRjY),
                    onPress: () => {
                        N(A.O.SAFETY_TIPS), I(h.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    },
                },
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = i);
                            });
                    }
                    return t;
                })({ type: 0 }, C ? t : L ? n : e),
            ];
        }, [C, L, N, I]),
        w = s.useMemo(
            () => [
                {
                    type: 1,
                    title: g.intl.string(g.t.otdt29),
                    onPress: () => {
                        N(A.O.ABOUT_SAFETY_ALERTS), I(h.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    },
                },
            ],
            [N, I],
        ),
        B = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: s, buttonText: r, onPress: l, disabled: a, variant: o } = t;
                return (0, i.jsx)(
                    R,
                    {
                        type: e,
                        title: n,
                        subTitle: s,
                        buttonText: r,
                        variant: o,
                        onPress: l,
                        disabled: a,
                    },
                    n,
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: s, onPress: r } = t;
                return (0, i.jsx)(
                    f,
                    {
                        type: e,
                        title: n,
                        subTitle: s,
                        onPress: r,
                    },
                    n,
                );
            }
            return null;
        };
    return (0, i.jsxs)(m.Z, {
        children: [
            (0, i.jsx)(j, { children: P.map((t) => B(t)) }),
            (0, i.jsx)(j, { children: Y.map((t) => B(t)) }),
            (0, i.jsx)(j, { children: w.map((t) => B(t)) }),
        ],
    });
};
