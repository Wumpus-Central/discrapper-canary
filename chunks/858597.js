n.d(e, { Z: () => R });
var i = n(255367),
    r = n(73800),
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
    m = n(993750),
    A = n(134612),
    f = n(388032),
    g = n(614177);
function j(t) {
    let { children: e } = t;
    return (0, i.jsx)('div', {
        className: g.actionGroup,
        children: e
    });
}
function N(t) {
    let { title: e, subTitle: n, buttonText: r, variant: s = 'secondary', onPress: l, disabled: a } = t;
    return (0, i.jsxs)('div', {
        className: g.actionRow,
        children: [
            (0, i.jsxs)('div', {
                className: g.actionButtonDetails,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(c.zxk, {
                size: 'sm',
                variant: s,
                text: r,
                onClick: l,
                disabled: a
            })
        ]
    });
}
function y(t) {
    let { title: e, subTitle: n, onPress: r } = t;
    return (0, i.jsxs)(c.P3F, {
        className: l()(g.actionRow, g.clickableActionRow),
        onClick: r,
        children: [
            (0, i.jsxs)('div', {
                className: g.actionButtonDetails,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    null != n
                        ? (0, i.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              children: n
                          })
                        : null
                ]
            }),
            (0, i.jsx)(c.Fbu, {
                size: 'md',
                color: o.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
let R = function (t) {
    let { otherUserId: e, channelId: s, warningId: l, warningType: o, transitionToSlide: g } = t,
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
                    isNudgeWarning: L
                });
            },
            [s, l, e, o, L]
        ),
        I = r.useCallback(() => {
            ((0, c.Mr3)(A.X_), Z(h.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM));
        }, [Z]),
        k = r.useCallback(() => {
            (u.Z.unblockUser(e, { location: A.DL }), Z(h.NM.USER_SAFETY_TOOLS_UNBLOCK));
        }, [e, Z]),
        P = r.useCallback(() => {
            ((0, c.Mr3)(A.X_), Z(h.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM));
        }, [Z]),
        U = r.useMemo(
            () => [
                {
                    type: 0,
                    title: f.intl.string(f.t.B7ZT09),
                    subTitle: f.intl.string(f.t['fCfp4+']),
                    buttonText: F ? f.intl.string(f.t['9e0wLi']) : f.intl.string(f.t.B7ZT09),
                    disabled: M,
                    onPress: () => {
                        F ? (u.Z.unignoreUser(e, A.cH, s), Z(h.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (u.Z.ignoreUser(e, A.cH, s), Z(h.NM.USER_SAFETY_TOOLS_IGNORE));
                    }
                },
                {
                    type: 0,
                    title: f.intl.string(f.t.oDxaKy),
                    subTitle: f.intl.string(f.t.Lj37a2),
                    buttonText: M ? f.intl.string(f.t.Hro409) : f.intl.string(f.t.oDxaKy),
                    variant: 'primary',
                    onPress: () => {
                        M
                            ? (k(), _.Z.showUnblockSuccessToast(e, s))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: r, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: r,
                                          onBlock: I,
                                          onBlockAndReport: P,
                                          onCancel: () => {
                                              (null == l || l(), Z(h.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL));
                                          },
                                          onClose: l,
                                          userId: e,
                                          channelId: s
                                      });
                                  };
                              });
                    }
                },
                {
                    type: 0,
                    title: f.intl.string(f.t.X27yhI),
                    subTitle: f.intl.string(f.t['0tydOT']),
                    buttonText: f.intl.string(f.t.X27yhI),
                    onPress: () => {
                        ((0, c.Mr3)(A.X_), (0, T.wk)(v), Z(h.NM.USER_SAFETY_TOOLS_REPORT));
                    }
                }
            ],
            [F, M, Z, k, I, P, e, s, v]
        ),
        w = r.useMemo(() => {
            let t = {
                    title: f.intl.string(f.t.ZSbbMD),
                    subTitle: f.intl.string(f.t.iNcsra),
                    buttonText: f.intl.string(f.t.rK4Gqq),
                    onPress: () => {
                        ((0, d.Z)(A.EI), Z(h.NM.USER_SAFETY_TOOLS_CTL));
                    }
                },
                e = {
                    title: f.intl.string(f.t.ZSbbMD),
                    subTitle: f.intl.string(f.t.g5uwCw),
                    buttonText: f.intl.string(f.t.rK4Gqq),
                    onPress: () => {
                        ((0, d.Z)(A.n4), Z(h.NM.USER_SAFETY_TOOLS_NO_FILTR));
                    }
                },
                n = {
                    title: f.intl.string(f.t.ZSbbMD),
                    subTitle: f.intl.string(f.t.S9O1ZW),
                    buttonText: f.intl.string(f.t.rK4Gqq),
                    onPress: () => {
                        ((0, d.Z)(A.$l), Z(h.NM.USER_SAFETY_TOOLS_THROUGHLINE));
                    }
                };
            return [
                {
                    type: 0,
                    title: f.intl.string(f.t.syuaPD),
                    subTitle: f.intl.string(f.t.LLBnNj),
                    buttonText: f.intl.string(f.t.rzvzyc),
                    onPress: () => {
                        ((0, O.Z)(c.pTH), Z(h.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS));
                    }
                },
                {
                    type: 1,
                    title: f.intl.string(f.t['7LgVmp']),
                    subTitle: f.intl.string(f.t.pwoRjY),
                    onPress: () => {
                        (g(E.O.SAFETY_TIPS), Z(h.NM.USER_SAFETY_TOOLS_SAFETY_TIPS));
                    }
                },
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                ((i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = i));
                            }));
                    }
                    return t;
                })({ type: 0 }, R ? t : C ? n : e)
            ];
        }, [R, C, g, Z]),
        Y = r.useMemo(
            () => [
                {
                    type: 1,
                    title: f.intl.string(f.t.otdt29),
                    onPress: () => {
                        (g(E.O.ABOUT_SAFETY_ALERTS), Z(h.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS));
                    }
                }
            ],
            [g, Z]
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
                        disabled: a
                    },
                    n
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
                        onPress: s
                    },
                    n
                );
            }
            return null;
        };
    return (0, i.jsxs)(m.Z, {
        children: [(0, i.jsx)(j, { children: U.map((t) => B(t)) }), (0, i.jsx)(j, { children: w.map((t) => B(t)) }), (0, i.jsx)(j, { children: Y.map((t) => B(t)) })]
    });
};
