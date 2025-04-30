n.d(e, { Z: () => C });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(692547),
    c = n(481060),
    u = n(194359),
    d = n(782568),
    T = n(726521),
    S = n(485664),
    _ = n(681678),
    b = n(699516),
    x = n(991981),
    p = n(367408),
    O = n(423932),
    h = n(473092),
    A = n(611446),
    E = n(993750),
    f = n(134612),
    N = n(388032),
    g = n(614177);
function R(t) {
    let { children: e } = t;
    return (0, i.jsx)('div', {
        className: g.actionGroup,
        children: e
    });
}
function m(t) {
    let { title: e, subTitle: n, buttonText: r, buttonColor: s, onPress: l, disabled: o } = t;
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
                size: c.zxk.Sizes.SMALL,
                color: s,
                onClick: l,
                disabled: o,
                children: r
            })
        ]
    });
}
function j(t) {
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
                color: a.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
let C = function (t) {
    let { otherUserId: e, channelId: s, warningId: l, warningType: a, transitionToSlide: g } = t,
        C = (0, S.o)(),
        L = (0, S.Q)(),
        y = (0, x.q)(s),
        k = null != (0, p.M)(s),
        I = (0, o.e7)([b.Z], () => b.Z.isIgnored(e), [e]),
        M = (0, o.e7)([b.Z], () => b.Z.isBlocked(e), [e]),
        v = r.useCallback(
            (t) => {
                (0, h.qc)({
                    channelId: s,
                    warningId: l,
                    senderId: e,
                    warningType: a,
                    cta: t,
                    isNudgeWarning: k
                });
            },
            [s, l, e, a, k]
        ),
        F = r.useCallback(() => {
            (0, c.Mr3)(f.X_), v(h.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [v]),
        P = r.useCallback(() => {
            u.Z.unblockUser(e, { location: f.DL }), v(h.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, v]),
        Z = r.useCallback(() => {
            (0, c.Mr3)(f.X_), v(h.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [v]),
        Y = r.useMemo(
            () => [
                {
                    type: 0,
                    title: N.intl.string(N.t.B7ZT09),
                    subTitle: N.intl.string(N.t['fCfp4+']),
                    buttonText: I ? N.intl.string(N.t['9e0wLi']) : N.intl.string(N.t.B7ZT09),
                    buttonColor: c.Ttl.PRIMARY,
                    disabled: M,
                    onPress: () => {
                        I ? (u.Z.unignoreUser(e, f.cH, s), v(h.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (u.Z.ignoreUser(e, f.cH, s), v(h.NM.USER_SAFETY_TOOLS_IGNORE));
                    }
                },
                {
                    type: 0,
                    title: N.intl.string(N.t.oDxaKy),
                    subTitle: N.intl.string(N.t.Lj37a2),
                    buttonText: M ? N.intl.string(N.t.Hro409) : N.intl.string(N.t.oDxaKy),
                    buttonColor: c.Ttl.BRAND,
                    onPress: () => {
                        M
                            ? (P(), _.Z.showUnblockSuccessToast(e, s))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: r, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: r,
                                          onBlock: F,
                                          onBlockAndReport: Z,
                                          onCancel: () => {
                                              null == l || l(), v(h.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
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
                    title: N.intl.string(N.t.X27yhI),
                    subTitle: N.intl.string(N.t['0tydOT']),
                    buttonText: N.intl.string(N.t.X27yhI),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, c.Mr3)(f.X_), (0, T.wk)(y), v(h.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                }
            ],
            [I, M, v, P, F, Z, e, s, y]
        ),
        U = r.useMemo(() => {
            let t = {
                    title: N.intl.string(N.t.ZSbbMD),
                    subTitle: N.intl.string(N.t.iNcsra),
                    buttonText: N.intl.string(N.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(f.EI), v(h.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                e = {
                    title: N.intl.string(N.t.ZSbbMD),
                    subTitle: N.intl.string(N.t.g5uwCw),
                    buttonText: N.intl.string(N.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(f.n4), v(h.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                n = {
                    title: N.intl.string(N.t.ZSbbMD),
                    subTitle: N.intl.string(N.t.S9O1ZW),
                    buttonText: N.intl.string(N.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(f.$l), v(h.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    type: 0,
                    title: N.intl.string(N.t.syuaPD),
                    subTitle: N.intl.string(N.t.LLBnNj),
                    buttonText: N.intl.string(N.t.rzvzyc),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, O.Z)(c.pTH), v(h.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                },
                {
                    type: 1,
                    title: N.intl.string(N.t['7LgVmp']),
                    subTitle: N.intl.string(N.t.pwoRjY),
                    onPress: () => {
                        g(A.O.SAFETY_TIPS), v(h.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = i);
                            });
                    }
                    return t;
                })({ type: 0 }, C ? t : L ? n : e)
            ];
        }, [C, L, g, v]),
        w = r.useMemo(
            () => [
                {
                    type: 1,
                    title: N.intl.string(N.t.otdt29),
                    onPress: () => {
                        g(A.O.ABOUT_SAFETY_ALERTS), v(h.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [g, v]
        ),
        B = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: r, buttonText: s, buttonColor: l, onPress: o, disabled: a } = t;
                return (0, i.jsx)(
                    m,
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
                    j,
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
    return (0, i.jsxs)(E.Z, {
        children: [(0, i.jsx)(R, { children: Y.map((t) => B(t)) }), (0, i.jsx)(R, { children: U.map((t) => B(t)) }), (0, i.jsx)(R, { children: w.map((t) => B(t)) })]
    });
};
