n.d(e, { Z: () => R });
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
    S = n(485664),
    x = n(681678),
    _ = n(699516),
    E = n(991981),
    g = n(367408),
    A = n(423932),
    O = n(473092),
    h = n(611446),
    p = n(993750),
    m = n(134612),
    N = n(388032),
    b = n(3492);
function j(t) {
    let { children: e } = t;
    return (0, i.jsx)("div", {
        className: b.actionGroup,
        children: e,
    });
}
function C(t) {
    let { title: e, subTitle: n, buttonText: s, variant: r = "secondary", onPress: l, disabled: a } = t;
    return (0, i.jsxs)("div", {
        className: b.actionRow,
        children: [
            (0, i.jsxs)("div", {
                className: b.actionButtonDetails,
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
            (0, i.jsx)(c.Button, {
                size: "sm",
                variant: r,
                text: s,
                onClick: l,
                disabled: a,
            }),
        ],
    });
}
function L(t) {
    let { title: e, subTitle: n, onPress: s } = t;
    return (0, i.jsxs)(c.P3F, {
        className: l()(b.actionRow, b.clickableActionRow),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: b.actionButtonDetails,
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
let R = function (t) {
    let { otherUserId: e, channelId: r, warningId: l, warningType: o, transitionToSlide: b } = t,
        R = (0, S.o)(),
        y = (0, S.Q)(),
        f = (0, E.q)(r),
        F = null != (0, g.M)(r),
        M = (0, a.e7)([_.Z], () => _.Z.isIgnored(e), [e]),
        v = (0, a.e7)([_.Z], () => _.Z.isBlocked(e), [e]),
        I = s.useCallback(
            (t) => {
                (0, O.qc)({
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
            (0, c.Mr3)(m.X_), I(O.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [I]),
        U = s.useCallback(() => {
            d.Z.unblockUser(e, { location: m.DL }), I(O.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, I]),
        Y = s.useCallback(() => {
            (0, c.Mr3)(m.X_), I(O.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [I]),
        k = s.useMemo(
            () => [
                {
                    type: 0,
                    title: N.intl.string(N.t.B7ZT09),
                    subTitle: N.intl.string(N.t["fCfp4+"]),
                    buttonText: M ? N.intl.string(N.t["9e0wLi"]) : N.intl.string(N.t.B7ZT09),
                    disabled: v,
                    onPress: () => {
                        M
                            ? (d.Z.unignoreUser(e, m.cH, r), I(O.NM.USER_SAFETY_TOOLS_UNIGNORE))
                            : (d.Z.ignoreUser(e, m.cH, r), I(O.NM.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: N.intl.string(N.t.oDxaKy),
                    subTitle: N.intl.string(N.t.Lj37a2),
                    buttonText: v ? N.intl.string(N.t.Hro409) : N.intl.string(N.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        v
                            ? (U(), x.Z.showUnblockSuccessToast(e, r))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e("41128").then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: s, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: s,
                                          onBlock: Z,
                                          onBlockAndReport: Y,
                                          onCancel: () => {
                                              null == l || l(), I(O.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
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
                    title: N.intl.string(N.t.X27yhI),
                    subTitle: N.intl.string(N.t["0tydOT"]),
                    buttonText: N.intl.string(N.t.X27yhI),
                    onPress: () => {
                        (0, c.Mr3)(m.X_), (0, u.wk)(f), I(O.NM.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [M, v, I, U, Z, Y, e, r, f],
        ),
        P = s.useMemo(() => {
            let t = {
                    title: N.intl.string(N.t.ZSbbMD),
                    subTitle: N.intl.string(N.t.iNcsra),
                    buttonText: N.intl.string(N.t.rK4Gqq),
                    onPress: () => {
                        (0, T.Z)(m.EI), I(O.NM.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: N.intl.string(N.t.ZSbbMD),
                    subTitle: N.intl.string(N.t.g5uwCw),
                    buttonText: N.intl.string(N.t.rK4Gqq),
                    onPress: () => {
                        (0, T.Z)(m.n4), I(O.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: N.intl.string(N.t.ZSbbMD),
                    subTitle: N.intl.string(N.t.S9O1ZW),
                    buttonText: N.intl.string(N.t.rK4Gqq),
                    onPress: () => {
                        (0, T.Z)(m.$l), I(O.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: N.intl.string(N.t.syuaPD),
                    subTitle: N.intl.string(N.t.LLBnNj),
                    buttonText: N.intl.string(N.t.rzvzyc),
                    onPress: () => {
                        (0, A.Z)(c.pTH), I(O.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: N.intl.string(N.t["7LgVmp"]),
                    subTitle: N.intl.string(N.t.pwoRjY),
                    onPress: () => {
                        b(h.O.SAFETY_TIPS), I(O.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
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
                })({ type: 0 }, R ? t : y ? n : e),
            ];
        }, [R, y, b, I]),
        B = s.useMemo(
            () => [
                {
                    type: 1,
                    title: N.intl.string(N.t.otdt29),
                    onPress: () => {
                        b(h.O.ABOUT_SAFETY_ALERTS), I(O.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    },
                },
            ],
            [b, I],
        ),
        w = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: s, buttonText: r, onPress: l, disabled: a, variant: o } = t;
                return (0, i.jsx)(
                    C,
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
                    L,
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
    return (0, i.jsxs)(p.Z, {
        children: [
            (0, i.jsx)(j, { children: k.map((t) => w(t)) }),
            (0, i.jsx)(j, { children: P.map((t) => w(t)) }),
            (0, i.jsx)(j, { children: B.map((t) => w(t)) }),
        ],
    });
};
