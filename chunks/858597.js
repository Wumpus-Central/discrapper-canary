n.d(e, { Z: () => L });
var i = n(951288),
    s = n(647438),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(194359),
    T = n(782568),
    u = n(726521),
    _ = n(485664),
    S = n(681678),
    x = n(699516),
    p = n(991981),
    b = n(367408),
    E = n(423932),
    A = n(473092),
    h = n(611446),
    O = n(993750),
    g = n(134612),
    m = n(388032),
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
function C(t) {
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
let L = function (t) {
    let { otherUserId: e, channelId: r, warningId: l, warningType: o, transitionToSlide: N } = t,
        L = (0, _.o)(),
        f = (0, _.Q)(),
        y = (0, p.q)(r),
        F = null != (0, b.M)(r),
        v = (0, a.e7)([x.Z], () => x.Z.isIgnored(e), [e]),
        M = (0, a.e7)([x.Z], () => x.Z.isBlocked(e), [e]),
        I = s.useCallback(
            (t) => {
                (0, A.qc)({
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
            (0, c.Mr3)(g.X_), I(A.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [I]),
        U = s.useCallback(() => {
            d.Z.unblockUser(e, { location: g.DL }), I(A.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, I]),
        k = s.useCallback(() => {
            (0, c.Mr3)(g.X_), I(A.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [I]),
        P = s.useMemo(
            () => [
                {
                    type: 0,
                    title: m.intl.string(m.t.B7ZT09),
                    subTitle: m.intl.string(m.t["fCfp4+"]),
                    buttonText: v ? m.intl.string(m.t["9e0wLi"]) : m.intl.string(m.t.B7ZT09),
                    disabled: M,
                    onPress: () => {
                        v
                            ? (d.Z.unignoreUser(e, g.cH, r), I(A.NM.USER_SAFETY_TOOLS_UNIGNORE))
                            : (d.Z.ignoreUser(e, g.cH, r), I(A.NM.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: m.intl.string(m.t.oDxaKy),
                    subTitle: m.intl.string(m.t.Lj37a2),
                    buttonText: M ? m.intl.string(m.t.Hro409) : m.intl.string(m.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        M
                            ? (U(), S.Z.showUnblockSuccessToast(e, r))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e("41128").then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: s, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: s,
                                          onBlock: Z,
                                          onBlockAndReport: k,
                                          onCancel: () => {
                                              null == l || l(), I(A.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
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
                    title: m.intl.string(m.t.X27yhI),
                    subTitle: m.intl.string(m.t["0tydOT"]),
                    buttonText: m.intl.string(m.t.X27yhI),
                    onPress: () => {
                        (0, c.Mr3)(g.X_), (0, u.wk)(y), I(A.NM.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [v, M, I, U, Z, k, e, r, y],
        ),
        Y = s.useMemo(() => {
            let t = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.iNcsra),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    onPress: () => {
                        (0, T.Z)(g.EI), I(A.NM.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.g5uwCw),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    onPress: () => {
                        (0, T.Z)(g.n4), I(A.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.S9O1ZW),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    onPress: () => {
                        (0, T.Z)(g.$l), I(A.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: m.intl.string(m.t.syuaPD),
                    subTitle: m.intl.string(m.t.LLBnNj),
                    buttonText: m.intl.string(m.t.rzvzyc),
                    onPress: () => {
                        (0, E.Z)(c.pTH), I(A.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: m.intl.string(m.t["7LgVmp"]),
                    subTitle: m.intl.string(m.t.pwoRjY),
                    onPress: () => {
                        N(h.O.SAFETY_TIPS), I(A.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
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
                })({ type: 0 }, L ? t : f ? n : e),
            ];
        }, [L, f, N, I]),
        w = s.useMemo(
            () => [
                {
                    type: 1,
                    title: m.intl.string(m.t.otdt29),
                    onPress: () => {
                        N(h.O.ABOUT_SAFETY_ALERTS), I(A.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
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
                    C,
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
    return (0, i.jsxs)(O.Z, {
        children: [
            (0, i.jsx)(j, { children: P.map((t) => B(t)) }),
            (0, i.jsx)(j, { children: Y.map((t) => B(t)) }),
            (0, i.jsx)(j, { children: w.map((t) => B(t)) }),
        ],
    });
};
