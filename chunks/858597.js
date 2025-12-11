n.d(e, { Z: () => R });
var i = n(54381),
    s = n(473749),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    T = n(194359),
    d = n(782568),
    u = n(726521),
    S = n(485664),
    x = n(681678),
    _ = n(699516),
    E = n(991981),
    g = n(367408),
    A = n(423932),
    O = n(473092),
    h = n(611446),
    m = n(993750),
    p = n(134612),
    b = n(388032),
    N = n(284198);
function j(t) {
    let { children: e } = t;
    return (0, i.jsx)("div", {
        className: N.actionGroup,
        children: e,
    });
}
function C(t) {
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
                        color: "text-default",
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
                              color: "text-default",
                              children: n,
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(c.Fbu, {
                size: "md",
                color: o.Z.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
        ],
    });
}
let R = function (t) {
    let { otherUserId: e, channelId: r, warningId: l, warningType: o, transitionToSlide: N } = t,
        R = (0, S.o)(),
        f = (0, S.Q)(),
        y = (0, E.q)(r),
        v = null != (0, g.M)(r),
        F = (0, a.e7)([_.Z], () => _.Z.isIgnored(e), [e]),
        M = (0, a.e7)([_.Z], () => _.Z.isBlocked(e), [e]),
        I = s.useCallback(
            (t) => {
                (0, O.qc)({
                    channelId: r,
                    warningId: l,
                    senderId: e,
                    warningType: o,
                    cta: t,
                    isNudgeWarning: v,
                });
            },
            [r, l, e, o, v],
        ),
        Z = s.useCallback(() => {
            (0, c.Mr3)(p.X_), I(O.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [I]),
        U = s.useCallback(() => {
            T.Z.unblockUser(e, { location: p.DL }), I(O.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, I]),
        k = s.useCallback(() => {
            (0, c.Mr3)(p.X_), I(O.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [I]),
        Y = s.useMemo(
            () => [
                {
                    type: 0,
                    title: b.intl.string(b.t.B7ZT06),
                    subTitle: b.intl.string(b.t.fCfp49),
                    buttonText: F ? b.intl.string(b.t["9e0wLn"]) : b.intl.string(b.t.B7ZT06),
                    disabled: M,
                    onPress: () => {
                        F
                            ? (T.Z.unignoreUser(e, p.cH, r), I(O.NM.USER_SAFETY_TOOLS_UNIGNORE))
                            : (T.Z.ignoreUser(e, p.cH, r), I(O.NM.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: b.intl.string(b.t.oDxaKy),
                    subTitle: b.intl.string(b.t.Lj37az),
                    buttonText: M ? b.intl.string(b.t.Hro40y) : b.intl.string(b.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        M
                            ? (U(), x.Z.showUnblockSuccessToast(e, r))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e("41128").then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: s, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: s,
                                          onBlock: Z,
                                          onBlockAndReport: k,
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
                    title: b.intl.string(b.t.X27yhD),
                    subTitle: b.intl.string(b.t["0tydOa"]),
                    buttonText: b.intl.string(b.t.X27yhD),
                    onPress: () => {
                        (0, c.Mr3)(p.X_), (0, u.wk)(y), I(O.NM.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [F, M, I, U, Z, k, e, r, y],
        ),
        P = s.useMemo(() => {
            let t = {
                    title: b.intl.string(b.t.ZSbbMJ),
                    subTitle: b.intl.string(b.t.iNcsrW),
                    buttonText: b.intl.string(b.t.rK4Gqv),
                    onPress: () => {
                        (0, d.Z)(p.EI), I(O.NM.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: b.intl.string(b.t.ZSbbMJ),
                    subTitle: b.intl.string(b.t.g5uwC5),
                    buttonText: b.intl.string(b.t.rK4Gqv),
                    onPress: () => {
                        (0, d.Z)(p.n4), I(O.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: b.intl.string(b.t.ZSbbMJ),
                    subTitle: b.intl.string(b.t.S9O1ZZ),
                    buttonText: b.intl.string(b.t.rK4Gqv),
                    onPress: () => {
                        (0, d.Z)(p.$l), I(O.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: b.intl.string(b.t.syuaPI),
                    subTitle: b.intl.string(b.t.LLBnNk),
                    buttonText: b.intl.string(b.t.rzvzyZ),
                    onPress: () => {
                        (0, A.Z)(c.pTH), I(O.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: b.intl.string(b.t["7LgVmt"]),
                    subTitle: b.intl.string(b.t.pwoRjc),
                    onPress: () => {
                        N(h.O.SAFETY_TIPS), I(O.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
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
                })({ type: 0 }, R ? t : f ? n : e),
            ];
        }, [R, f, N, I]),
        B = s.useMemo(
            () => [
                {
                    type: 1,
                    title: b.intl.string(b.t.otdt24),
                    onPress: () => {
                        N(h.O.ABOUT_SAFETY_ALERTS), I(O.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    },
                },
            ],
            [N, I],
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
    return (0, i.jsxs)(m.Z, {
        children: [
            (0, i.jsx)(j, { children: Y.map((t) => w(t)) }),
            (0, i.jsx)(j, { children: P.map((t) => w(t)) }),
            (0, i.jsx)(j, { children: B.map((t) => w(t)) }),
        ],
    });
};
