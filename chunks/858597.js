n.d(e, { Z: () => C });
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
    x = n(681678),
    _ = n(699516),
    b = n(991981),
    O = n(367408),
    E = n(423932),
    h = n(473092),
    p = n(611446),
    g = n(993750),
    A = n(134612),
    j = n(388032),
    m = n(614177);
function f(t) {
    let { children: e } = t;
    return (0, i.jsx)('div', {
        className: m.actionGroup,
        children: e
    });
}
function N(t) {
    let { title: e, subTitle: n, buttonText: r, variant: s = 'secondary', onPress: l, disabled: a } = t;
    return (0, i.jsxs)('div', {
        className: m.actionRow,
        children: [
            (0, i.jsxs)('div', {
                className: m.actionButtonDetails,
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
        className: l()(m.actionRow, m.clickableActionRow),
        onClick: r,
        children: [
            (0, i.jsxs)('div', {
                className: m.actionButtonDetails,
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
let C = function (t) {
    let { otherUserId: e, channelId: s, warningId: l, warningType: o, transitionToSlide: m } = t,
        C = (0, S.o)(),
        L = (0, S.Q)(),
        R = (0, b.q)(s),
        v = null != (0, O.M)(s),
        F = (0, a.e7)([_.Z], () => _.Z.isIgnored(e), [e]),
        M = (0, a.e7)([_.Z], () => _.Z.isBlocked(e), [e]),
        Z = r.useCallback(
            (t) => {
                (0, h.qc)({
                    channelId: s,
                    warningId: l,
                    senderId: e,
                    warningType: o,
                    cta: t,
                    isNudgeWarning: v
                });
            },
            [s, l, e, o, v]
        ),
        I = r.useCallback(() => {
            ((0, c.Mr3)(A.X_), Z(h.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM));
        }, [Z]),
        k = r.useCallback(() => {
            (u.Z.unblockUser(e, { location: A.DL }), Z(h.NM.USER_SAFETY_TOOLS_UNBLOCK));
        }, [e, Z]),
        U = r.useCallback(() => {
            ((0, c.Mr3)(A.X_), Z(h.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM));
        }, [Z]),
        P = r.useMemo(
            () => [
                {
                    type: 0,
                    title: j.intl.string(j.t.B7ZT09),
                    subTitle: j.intl.string(j.t['fCfp4+']),
                    buttonText: F ? j.intl.string(j.t['9e0wLi']) : j.intl.string(j.t.B7ZT09),
                    disabled: M,
                    onPress: () => {
                        F ? (u.Z.unignoreUser(e, A.cH, s), Z(h.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (u.Z.ignoreUser(e, A.cH, s), Z(h.NM.USER_SAFETY_TOOLS_IGNORE));
                    }
                },
                {
                    type: 0,
                    title: j.intl.string(j.t.oDxaKy),
                    subTitle: j.intl.string(j.t.Lj37a2),
                    buttonText: M ? j.intl.string(j.t.Hro409) : j.intl.string(j.t.oDxaKy),
                    variant: 'primary',
                    onPress: () => {
                        M
                            ? (k(), x.Z.showUnblockSuccessToast(e, s))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: r, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: r,
                                          onBlock: I,
                                          onBlockAndReport: U,
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
                    title: j.intl.string(j.t.X27yhI),
                    subTitle: j.intl.string(j.t['0tydOT']),
                    buttonText: j.intl.string(j.t.X27yhI),
                    onPress: () => {
                        ((0, c.Mr3)(A.X_), (0, T.wk)(R), Z(h.NM.USER_SAFETY_TOOLS_REPORT));
                    }
                }
            ],
            [F, M, Z, k, I, U, e, s, R]
        ),
        Y = r.useMemo(() => {
            let t = {
                    title: j.intl.string(j.t.ZSbbMD),
                    subTitle: j.intl.string(j.t.iNcsra),
                    buttonText: j.intl.string(j.t.rK4Gqq),
                    onPress: () => {
                        ((0, d.Z)(A.EI), Z(h.NM.USER_SAFETY_TOOLS_CTL));
                    }
                },
                e = {
                    title: j.intl.string(j.t.ZSbbMD),
                    subTitle: j.intl.string(j.t.g5uwCw),
                    buttonText: j.intl.string(j.t.rK4Gqq),
                    onPress: () => {
                        ((0, d.Z)(A.n4), Z(h.NM.USER_SAFETY_TOOLS_NO_FILTR));
                    }
                },
                n = {
                    title: j.intl.string(j.t.ZSbbMD),
                    subTitle: j.intl.string(j.t.S9O1ZW),
                    buttonText: j.intl.string(j.t.rK4Gqq),
                    onPress: () => {
                        ((0, d.Z)(A.$l), Z(h.NM.USER_SAFETY_TOOLS_THROUGHLINE));
                    }
                };
            return [
                {
                    type: 0,
                    title: j.intl.string(j.t.syuaPD),
                    subTitle: j.intl.string(j.t.LLBnNj),
                    buttonText: j.intl.string(j.t.rzvzyc),
                    onPress: () => {
                        ((0, E.Z)(c.pTH), Z(h.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS));
                    }
                },
                {
                    type: 1,
                    title: j.intl.string(j.t['7LgVmp']),
                    subTitle: j.intl.string(j.t.pwoRjY),
                    onPress: () => {
                        (m(p.O.SAFETY_TIPS), Z(h.NM.USER_SAFETY_TOOLS_SAFETY_TIPS));
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
                })({ type: 0 }, C ? t : L ? n : e)
            ];
        }, [C, L, m, Z]),
        w = r.useMemo(
            () => [
                {
                    type: 1,
                    title: j.intl.string(j.t.otdt29),
                    onPress: () => {
                        (m(p.O.ABOUT_SAFETY_ALERTS), Z(h.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS));
                    }
                }
            ],
            [m, Z]
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
    return (0, i.jsxs)(g.Z, {
        children: [(0, i.jsx)(f, { children: P.map((t) => B(t)) }), (0, i.jsx)(f, { children: Y.map((t) => B(t)) }), (0, i.jsx)(f, { children: w.map((t) => B(t)) })]
    });
};
