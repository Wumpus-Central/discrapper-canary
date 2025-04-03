n.d(e, { Z: () => C });
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
    _ = n(681678),
    b = n(699516),
    N = n(991981),
    x = n(367408),
    p = n(423932),
    O = n(473092),
    h = n(611446),
    A = n(993750),
    E = n(134612),
    f = n(388032),
    g = n(614177);
function R(t) {
    let { children: e } = t;
    return (0, r.jsx)('div', {
        className: g.actionGroup,
        children: e
    });
}
function m(t) {
    let { title: e, subTitle: n, buttonText: s, buttonColor: i, onPress: o, disabled: l } = t;
    return (0, r.jsxs)('div', {
        className: g.actionRow,
        children: [
            (0, r.jsxs)('div', {
                className: g.actionButtonDetails,
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
function j(t) {
    let { title: e, subTitle: n, onPress: s } = t;
    return (0, r.jsxs)(c.P3F, {
        className: o()(g.actionRow, g.clickableActionRow),
        onClick: s,
        children: [
            (0, r.jsxs)('div', {
                className: g.actionButtonDetails,
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
let C = function (t) {
    let { otherUserId: e, channelId: i, warningId: o, warningType: a, transitionToSlide: g } = t,
        C = (0, S.o)(),
        L = (0, S.Q)(),
        y = (0, N.q)(i),
        k = null != (0, x.M)(i),
        I = (0, l.e7)([b.Z], () => b.Z.isIgnored(e), [e]),
        M = (0, l.e7)([b.Z], () => b.Z.isBlocked(e), [e]),
        v = s.useCallback(
            (t) => {
                (0, O.qc)({
                    channelId: i,
                    warningId: o,
                    senderId: e,
                    warningType: a,
                    cta: t,
                    isNudgeWarning: k
                });
            },
            [i, o, e, a, k]
        ),
        F = s.useCallback(() => {
            (0, c.Mr3)(E.X_), v(O.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [v]),
        P = s.useCallback(() => {
            u.Z.unblockUser(e, { location: E.DL }), v(O.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, v]),
        W = s.useCallback(() => {
            (0, c.Mr3)(E.X_), v(O.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [v]),
        Z = s.useMemo(
            () => [
                {
                    type: 0,
                    title: f.NW.string(f.t.B7ZT09),
                    subTitle: f.NW.string(f.t['fCfp4+']),
                    buttonText: I ? f.NW.string(f.t['9e0wLi']) : f.NW.string(f.t.B7ZT09),
                    buttonColor: c.Ttl.PRIMARY,
                    disabled: M,
                    onPress: () => {
                        I ? (u.Z.unignoreUser(e, E.cH, i), v(O.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (u.Z.ignoreUser(e, E.cH, i), v(O.NM.USER_SAFETY_TOOLS_IGNORE));
                    }
                },
                {
                    type: 0,
                    title: f.NW.string(f.t.oDxaKy),
                    subTitle: f.NW.string(f.t.Lj37a2),
                    buttonText: M ? f.NW.string(f.t.Hro409) : f.NW.string(f.t.oDxaKy),
                    buttonColor: c.Ttl.BRAND,
                    onPress: () => {
                        M
                            ? (P(), _.Z.showUnblockSuccessToast(e, i))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: s, onClose: o } = n;
                                      return (0, r.jsx)(t, {
                                          transitionState: s,
                                          onBlock: F,
                                          onBlockAndReport: W,
                                          onCancel: () => {
                                              null == o || o(), v(O.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
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
                    title: f.NW.string(f.t.X27yhI),
                    subTitle: f.NW.string(f.t['0tydOT']),
                    buttonText: f.NW.string(f.t.X27yhI),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, c.Mr3)(E.X_), (0, T.wk)(y), v(O.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                }
            ],
            [I, M, v, P, F, W, e, i, y]
        ),
        Y = s.useMemo(() => {
            let t = {
                    title: f.NW.string(f.t.ZSbbMD),
                    subTitle: f.NW.string(f.t.iNcsra),
                    buttonText: f.NW.string(f.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(E.EI), v(O.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                e = {
                    title: f.NW.string(f.t.ZSbbMD),
                    subTitle: f.NW.string(f.t.g5uwCw),
                    buttonText: f.NW.string(f.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(E.n4), v(O.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                n = {
                    title: f.NW.string(f.t.ZSbbMD),
                    subTitle: f.NW.string(f.t.S9O1ZW),
                    buttonText: f.NW.string(f.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, d.Z)(E.$l), v(O.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    type: 0,
                    title: f.NW.string(f.t.syuaPD),
                    subTitle: f.NW.string(f.t.LLBnNj),
                    buttonText: f.NW.string(f.t.rzvzyc),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, p.Z)(c.pTH), v(O.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                },
                {
                    type: 1,
                    title: f.NW.string(f.t['7LgVmp']),
                    subTitle: f.NW.string(f.t.pwoRjY),
                    onPress: () => {
                        g(h.O.SAFETY_TIPS), v(O.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
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
                })({ type: 0 }, C ? t : L ? n : e)
            ];
        }, [C, L, g, v]),
        U = s.useMemo(
            () => [
                {
                    type: 1,
                    title: f.NW.string(f.t.otdt29),
                    onPress: () => {
                        g(h.O.ABOUT_SAFETY_ALERTS), v(O.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [g, v]
        ),
        w = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: s, buttonText: i, buttonColor: o, onPress: l, disabled: a } = t;
                return (0, r.jsx)(
                    m,
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
                    j,
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
    return (0, r.jsxs)(A.Z, {
        children: [(0, r.jsx)(R, { children: Z.map((t) => w(t)) }), (0, r.jsx)(R, { children: Y.map((t) => w(t)) }), (0, r.jsx)(R, { children: U.map((t) => w(t)) })]
    });
};
