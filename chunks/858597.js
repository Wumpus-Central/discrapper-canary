n.d(e, { Z: () => L }), n(47120);
var r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(442837),
    a = n(692547),
    c = n(481060),
    u = n(194359),
    d = n(782568),
    T = n(726521),
    S = n(485664),
    _ = n(922611),
    b = n(681678),
    N = n(699516),
    x = n(991981),
    p = n(367408),
    O = n(423932),
    h = n(473092),
    A = n(611446),
    E = n(993750),
    f = n(134612),
    g = n(388032),
    R = n(83519);
function m(t) {
    let { children: e } = t;
    return (0, r.jsx)('div', {
        className: R.actionGroup,
        children: e
    });
}
function j(t) {
    let { title: e, subTitle: n, buttonText: s, buttonColor: i, onPress: o, disabled: l } = t;
    return (0, r.jsxs)('div', {
        className: R.actionRow,
        children: [
            (0, r.jsxs)('div', {
                className: R.actionButtonDetails,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, r.jsx)(c.zxk, {
                size: c.zxk.Sizes.SMALL,
                color: i,
                onClick: o,
                disabled: l,
                children: s
            })
        ]
    });
}
function C(t) {
    let { title: e, subTitle: n, onPress: s } = t;
    return (0, r.jsxs)(c.P3F, {
        className: o()(R.actionRow, R.clickableActionRow),
        onClick: s,
        children: [
            (0, r.jsxs)('div', {
                className: R.actionButtonDetails,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    null != n
                        ? (0, r.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              children: n
                          })
                        : null
                ]
            }),
            (0, r.jsx)(c.Fbu, {
                size: 'md',
                color: a.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
let L = function (t) {
    let { otherUserId: e, channelId: i, warningId: o, warningType: a, transitionToSlide: R } = t,
        L = (0, S.o)(),
        y = (0, S.Q)(),
        k = (0, x.q)(i),
        I = null != (0, p.M)(i),
        M = (0, _.D)({ location: f.cH }),
        v = (0, l.e7)([N.Z], () => N.Z.isIgnored(e), [e]),
        F = (0, l.e7)([N.Z], () => N.Z.isBlocked(e), [e]),
        P = s.useCallback(
            (t) => {
                (0, h.qc)({
                    channelId: i,
                    warningId: o,
                    senderId: e,
                    warningType: a,
                    cta: t,
                    isNudgeWarning: I
                });
            },
            [i, o, e, a, I]
        ),
        W = s.useCallback(() => {
            (0, c.Mr3)(f.X_), P(h.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [P]),
        Z = s.useCallback(() => {
            u.Z.unblockUser(e, { location: f.DL }), P(h.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, P]),
        Y = s.useCallback(() => {
            (0, c.Mr3)(f.X_), P(h.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [P]),
        U = s.useMemo(
            () => [
                ...(M
                    ? [
                          {
                              type: 0,
                              title: g.NW.string(g.t.B7ZT09),
                              subTitle: g.NW.string(g.t['fCfp4+']),
                              buttonText: v ? g.NW.string(g.t['9e0wLi']) : g.NW.string(g.t.B7ZT09),
                              buttonColor: c.Ttl.PRIMARY,
                              disabled: F,
                              onPress: () => {
                                  v ? (u.Z.unignoreUser(e, f.cH, i), P(h.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (u.Z.ignoreUser(e, f.cH, i), P(h.NM.USER_SAFETY_TOOLS_IGNORE));
                              }
                          }
                      ]
                    : []),
                {
                    type: 0,
                    title: g.NW.string(g.t.oDxaKy),
                    subTitle: g.NW.string(g.t.Lj37a2),
                    buttonText: F ? g.NW.string(g.t.Hro409) : g.NW.string(g.t.oDxaKy),
                    buttonColor: c.Ttl.BRAND,
                    onPress: () => {
                        F
                            ? (Z(), b.Z.showUnblockSuccessToast(e, i))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: s, onClose: o } = n;
                                      return (0, r.jsx)(t, {
                                          transitionState: s,
                                          onBlock: W,
                                          onBlockAndReport: Y,
                                          onCancel: () => {
                                              null == o || o(), P(h.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: o,
                                          userId: e,
                                          channelId: i
                                      });
                                  };
                              });
                    }
                },
                {
                    type: 0,
                    title: g.NW.string(g.t.X27yhI),
                    subTitle: g.NW.string(g.t['0tydOT']),
                    buttonText: g.NW.string(g.t.X27yhI),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, c.Mr3)(f.X_), (0, T.wk)(k), P(h.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                }
            ],
            [v, M, F, P, Z, W, Y, e, i, k]
        ),
        w = s.useMemo(() => {
            let t = {
                    title: g.NW.string(g.t.ZSbbMD),
                    subTitle: g.NW.string(g.t.iNcsra),
                    buttonText: g.NW.string(g.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(f.EI), P(h.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                e = {
                    title: g.NW.string(g.t.ZSbbMD),
                    subTitle: g.NW.string(g.t.g5uwCw),
                    buttonText: g.NW.string(g.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(f.n4), P(h.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                n = {
                    title: g.NW.string(g.t.ZSbbMD),
                    subTitle: g.NW.string(g.t.S9O1ZW),
                    buttonText: g.NW.string(g.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(f.$l), P(h.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    type: 0,
                    title: g.NW.string(g.t.syuaPD),
                    subTitle: g.NW.string(g.t.LLBnNj),
                    buttonText: g.NW.string(g.t.rzvzyc),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, O.Z)(c.pTH), P(h.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                },
                {
                    type: 1,
                    title: g.NW.string(g.t['7LgVmp']),
                    subTitle: g.NW.string(g.t.pwoRjY),
                    onPress: () => {
                        R(A.O.SAFETY_TIPS), P(h.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            r.forEach(function (e) {
                                var r;
                                (r = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = r);
                            });
                    }
                    return t;
                })({ type: 0 }, L ? t : y ? n : e)
            ];
        }, [L, y, R, P]),
        B = s.useMemo(
            () => [
                {
                    type: 1,
                    title: g.NW.string(g.t.otdt29),
                    onPress: () => {
                        R(A.O.ABOUT_SAFETY_ALERTS), P(h.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [R, P]
        ),
        z = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: s, buttonText: i, buttonColor: o, onPress: l, disabled: a } = t;
                return (0, r.jsx)(
                    j,
                    {
                        type: e,
                        title: n,
                        subTitle: s,
                        buttonText: i,
                        buttonColor: o,
                        onPress: l,
                        disabled: a
                    },
                    n
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: s, onPress: i } = t;
                return (0, r.jsx)(
                    C,
                    {
                        type: e,
                        title: n,
                        subTitle: s,
                        onPress: i
                    },
                    n
                );
            }
            return null;
        };
    return (0, r.jsxs)(E.Z, {
        children: [(0, r.jsx)(m, { children: U.map((t) => z(t)) }), (0, r.jsx)(m, { children: w.map((t) => z(t)) }), (0, r.jsx)(m, { children: B.map((t) => z(t)) })]
    });
};
