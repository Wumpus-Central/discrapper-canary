n.d(e, { Z: () => R });
var i = n(951288),
    r = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    u = n(194359),
    d = n(782568),
    T = n(726521),
    S = n(485664),
    _ = n(681678),
    x = n(699516),
    b = n(991981),
    p = n(367408),
    O = n(423932),
    h = n(473092),
    E = n(611446),
    g = n(993750),
    m = n(134612),
    A = n(388032),
    f = n(3492);
function j(t) {
    let { children: e } = t;
    return (0, i.jsx)("div", {
        className: f.actionGroup,
        children: e,
    });
}
function N(t) {
    let { title: e, subTitle: n, buttonText: r, variant: s = "secondary", onPress: l, disabled: a } = t;
    return (0, i.jsxs)("div", {
        className: f.actionRow,
        children: [
            (0, i.jsxs)("div", {
                className: f.actionButtonDetails,
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
                variant: s,
                text: r,
                onClick: l,
                disabled: a,
            }),
        ],
    });
}
function y(t) {
    let { title: e, subTitle: n, onPress: r } = t;
    return (0, i.jsxs)(c.P3F, {
        className: l()(f.actionRow, f.clickableActionRow),
        onClick: r,
        children: [
            (0, i.jsxs)("div", {
                className: f.actionButtonDetails,
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
    let { otherUserId: e, channelId: s, warningId: l, warningType: o, transitionToSlide: f } = t,
        R = (0, S.o)(),
        C = (0, S.Q)(),
        v = (0, b.q)(s),
        L = null != (0, p.M)(s),
        F = (0, a.e7)([x.Z], () => x.Z.isIgnored(e), [e]),
        M = (0, a.e7)([x.Z], () => x.Z.isBlocked(e), [e]),
        Z = r.useCallback(
            (t) => {
                (0, h.qc)({
                    channelId: s,
                    warningId: l,
                    senderId: e,
                    warningType: o,
                    cta: t,
                    isNudgeWarning: L,
                });
            },
            [s, l, e, o, L],
        ),
        I = r.useCallback(() => {
            (0, c.Mr3)(m.X_), Z(h.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [Z]),
        k = r.useCallback(() => {
            u.Z.unblockUser(e, { location: m.DL }), Z(h.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, Z]),
        P = r.useCallback(() => {
            (0, c.Mr3)(m.X_), Z(h.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [Z]),
        U = r.useMemo(
            () => [
                {
                    type: 0,
                    title: A.intl.string(A.t.B7ZT09),
                    subTitle: A.intl.string(A.t["fCfp4+"]),
                    buttonText: F ? A.intl.string(A.t["9e0wLi"]) : A.intl.string(A.t.B7ZT09),
                    disabled: M,
                    onPress: () => {
                        F
                            ? (u.Z.unignoreUser(e, m.cH, s), Z(h.NM.USER_SAFETY_TOOLS_UNIGNORE))
                            : (u.Z.ignoreUser(e, m.cH, s), Z(h.NM.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: A.intl.string(A.t.oDxaKy),
                    subTitle: A.intl.string(A.t.Lj37a2),
                    buttonText: M ? A.intl.string(A.t.Hro409) : A.intl.string(A.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        M
                            ? (k(), _.Z.showUnblockSuccessToast(e, s))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e("41128").then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: r, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: r,
                                          onBlock: I,
                                          onBlockAndReport: P,
                                          onCancel: () => {
                                              null == l || l(), Z(h.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: l,
                                          userId: e,
                                          channelId: s,
                                      });
                                  };
                              });
                    },
                },
                {
                    type: 0,
                    title: A.intl.string(A.t.X27yhI),
                    subTitle: A.intl.string(A.t["0tydOT"]),
                    buttonText: A.intl.string(A.t.X27yhI),
                    onPress: () => {
                        (0, c.Mr3)(m.X_), (0, T.wk)(v), Z(h.NM.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [F, M, Z, k, I, P, e, s, v],
        ),
        w = r.useMemo(() => {
            let t = {
                    title: A.intl.string(A.t.ZSbbMD),
                    subTitle: A.intl.string(A.t.iNcsra),
                    buttonText: A.intl.string(A.t.rK4Gqq),
                    onPress: () => {
                        (0, d.Z)(m.EI), Z(h.NM.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: A.intl.string(A.t.ZSbbMD),
                    subTitle: A.intl.string(A.t.g5uwCw),
                    buttonText: A.intl.string(A.t.rK4Gqq),
                    onPress: () => {
                        (0, d.Z)(m.n4), Z(h.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: A.intl.string(A.t.ZSbbMD),
                    subTitle: A.intl.string(A.t.S9O1ZW),
                    buttonText: A.intl.string(A.t.rK4Gqq),
                    onPress: () => {
                        (0, d.Z)(m.$l), Z(h.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: A.intl.string(A.t.syuaPD),
                    subTitle: A.intl.string(A.t.LLBnNj),
                    buttonText: A.intl.string(A.t.rzvzyc),
                    onPress: () => {
                        (0, O.Z)(c.pTH), Z(h.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: A.intl.string(A.t["7LgVmp"]),
                    subTitle: A.intl.string(A.t.pwoRjY),
                    onPress: () => {
                        f(E.O.SAFETY_TIPS), Z(h.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
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
                })({ type: 0 }, R ? t : C ? n : e),
            ];
        }, [R, C, f, Z]),
        Y = r.useMemo(
            () => [
                {
                    type: 1,
                    title: A.intl.string(A.t.otdt29),
                    onPress: () => {
                        f(E.O.ABOUT_SAFETY_ALERTS), Z(h.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    },
                },
            ],
            [f, Z],
        ),
        B = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: r, buttonText: s, onPress: l, disabled: a, variant: o } = t;
                return (0, i.jsx)(
                    N,
                    {
                        type: e,
                        title: n,
                        subTitle: r,
                        buttonText: s,
                        variant: o,
                        onPress: l,
                        disabled: a,
                    },
                    n,
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: r, onPress: s } = t;
                return (0, i.jsx)(
                    y,
                    {
                        type: e,
                        title: n,
                        subTitle: r,
                        onPress: s,
                    },
                    n,
                );
            }
            return null;
        };
    return (0, i.jsxs)(g.Z, {
        children: [
            (0, i.jsx)(j, { children: U.map((t) => B(t)) }),
            (0, i.jsx)(j, { children: w.map((t) => B(t)) }),
            (0, i.jsx)(j, { children: Y.map((t) => B(t)) }),
        ],
    });
};
