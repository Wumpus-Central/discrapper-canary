n.d(e, { Z: () => L });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(194359),
    T = n(782568),
    S = n(726521),
    _ = n(485664),
    b = n(681678),
    x = n(699516),
    p = n(991981),
    O = n(367408),
    h = n(423932),
    A = n(473092),
    E = n(611446),
    f = n(993750),
    N = n(134612),
    g = n(388032),
    R = n(614177);
function m(t) {
    let { children: e } = t;
    return (0, i.jsx)('div', {
        className: R.actionGroup,
        children: e
    });
}
function j(t) {
    let { title: e, subTitle: n, buttonText: r, buttonColor: s, onPress: l, disabled: o } = t;
    return (0, i.jsxs)('div', {
        className: R.actionRow,
        children: [
            (0, i.jsxs)('div', {
                className: R.actionButtonDetails,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(c.zx, {
                size: c.zx.Sizes.SMALL,
                color: s,
                onClick: l,
                disabled: o,
                children: r
            })
        ]
    });
}
function C(t) {
    let { title: e, subTitle: n, onPress: r } = t;
    return (0, i.jsxs)(u.P3F, {
        className: l()(R.actionRow, R.clickableActionRow),
        onClick: r,
        children: [
            (0, i.jsxs)('div', {
                className: R.actionButtonDetails,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    null != n
                        ? (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              children: n
                          })
                        : null
                ]
            }),
            (0, i.jsx)(u.Fbu, {
                size: 'md',
                color: a.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
let L = function (t) {
    let { otherUserId: e, channelId: s, warningId: l, warningType: a, transitionToSlide: R } = t,
        L = (0, _.o)(),
        y = (0, _.Q)(),
        M = (0, p.q)(s),
        I = null != (0, O.M)(s),
        v = (0, o.e7)([x.Z], () => x.Z.isIgnored(e), [e]),
        F = (0, o.e7)([x.Z], () => x.Z.isBlocked(e), [e]),
        k = r.useCallback(
            (t) => {
                (0, A.qc)({
                    channelId: s,
                    warningId: l,
                    senderId: e,
                    warningType: a,
                    cta: t,
                    isNudgeWarning: I
                });
            },
            [s, l, e, a, I]
        ),
        P = r.useCallback(() => {
            ((0, u.Mr3)(N.X_), k(A.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM));
        }, [k]),
        Z = r.useCallback(() => {
            (d.Z.unblockUser(e, { location: N.DL }), k(A.NM.USER_SAFETY_TOOLS_UNBLOCK));
        }, [e, k]),
        Y = r.useCallback(() => {
            ((0, u.Mr3)(N.X_), k(A.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM));
        }, [k]),
        U = r.useMemo(
            () => [
                {
                    type: 0,
                    title: g.intl.string(g.t.B7ZT09),
                    subTitle: g.intl.string(g.t['fCfp4+']),
                    buttonText: v ? g.intl.string(g.t['9e0wLi']) : g.intl.string(g.t.B7ZT09),
                    buttonColor: c.Tt.PRIMARY,
                    disabled: F,
                    onPress: () => {
                        v ? (d.Z.unignoreUser(e, N.cH, s), k(A.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (d.Z.ignoreUser(e, N.cH, s), k(A.NM.USER_SAFETY_TOOLS_IGNORE));
                    }
                },
                {
                    type: 0,
                    title: g.intl.string(g.t.oDxaKy),
                    subTitle: g.intl.string(g.t.Lj37a2),
                    buttonText: F ? g.intl.string(g.t.Hro409) : g.intl.string(g.t.oDxaKy),
                    buttonColor: c.Tt.BRAND,
                    onPress: () => {
                        F
                            ? (Z(), b.Z.showUnblockSuccessToast(e, s))
                            : (0, u.ZDy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: r, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: r,
                                          onBlock: P,
                                          onBlockAndReport: Y,
                                          onCancel: () => {
                                              (null == l || l(), k(A.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL));
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
                    title: g.intl.string(g.t.X27yhI),
                    subTitle: g.intl.string(g.t['0tydOT']),
                    buttonText: g.intl.string(g.t.X27yhI),
                    buttonColor: c.Tt.PRIMARY,
                    onPress: () => {
                        ((0, u.Mr3)(N.X_), (0, S.wk)(M), k(A.NM.USER_SAFETY_TOOLS_REPORT));
                    }
                }
            ],
            [v, F, k, Z, P, Y, e, s, M]
        ),
        w = r.useMemo(() => {
            let t = {
                    title: g.intl.string(g.t.ZSbbMD),
                    subTitle: g.intl.string(g.t.iNcsra),
                    buttonText: g.intl.string(g.t.rK4Gqq),
                    buttonColor: c.Tt.PRIMARY,
                    onPress: () => {
                        ((0, T.Z)(N.EI), k(A.NM.USER_SAFETY_TOOLS_CTL));
                    }
                },
                e = {
                    title: g.intl.string(g.t.ZSbbMD),
                    subTitle: g.intl.string(g.t.g5uwCw),
                    buttonText: g.intl.string(g.t.rK4Gqq),
                    buttonColor: c.Tt.PRIMARY,
                    onPress: () => {
                        ((0, T.Z)(N.n4), k(A.NM.USER_SAFETY_TOOLS_NO_FILTR));
                    }
                },
                n = {
                    title: g.intl.string(g.t.ZSbbMD),
                    subTitle: g.intl.string(g.t.S9O1ZW),
                    buttonText: g.intl.string(g.t.rK4Gqq),
                    buttonColor: c.Tt.PRIMARY,
                    onPress: () => {
                        ((0, T.Z)(N.$l), k(A.NM.USER_SAFETY_TOOLS_THROUGHLINE));
                    }
                };
            return [
                {
                    type: 0,
                    title: g.intl.string(g.t.syuaPD),
                    subTitle: g.intl.string(g.t.LLBnNj),
                    buttonText: g.intl.string(g.t.rzvzyc),
                    buttonColor: c.Tt.PRIMARY,
                    onPress: () => {
                        ((0, h.Z)(u.pTH), k(A.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS));
                    }
                },
                {
                    type: 1,
                    title: g.intl.string(g.t['7LgVmp']),
                    subTitle: g.intl.string(g.t.pwoRjY),
                    onPress: () => {
                        (R(E.O.SAFETY_TIPS), k(A.NM.USER_SAFETY_TOOLS_SAFETY_TIPS));
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
                })({ type: 0 }, L ? t : y ? n : e)
            ];
        }, [L, y, R, k]),
        B = r.useMemo(
            () => [
                {
                    type: 1,
                    title: g.intl.string(g.t.otdt29),
                    onPress: () => {
                        (R(E.O.ABOUT_SAFETY_ALERTS), k(A.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS));
                    }
                }
            ],
            [R, k]
        ),
        z = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: r, buttonText: s, buttonColor: l, onPress: o, disabled: a } = t;
                return (0, i.jsx)(
                    j,
                    {
                        type: e,
                        title: n,
                        subTitle: r,
                        buttonText: s,
                        buttonColor: l,
                        onPress: o,
                        disabled: a
                    },
                    n
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: r, onPress: s } = t;
                return (0, i.jsx)(
                    C,
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
    return (0, i.jsxs)(f.Z, {
        children: [(0, i.jsx)(m, { children: U.map((t) => z(t)) }), (0, i.jsx)(m, { children: w.map((t) => z(t)) }), (0, i.jsx)(m, { children: B.map((t) => z(t)) })]
    });
};
