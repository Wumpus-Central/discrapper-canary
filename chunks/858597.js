n.d(e, { Z: () => k }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(692547),
    c = n(481060),
    d = n(194359),
    u = n(782568),
    T = n(726521),
    _ = n(485664),
    S = n(922611),
    x = n(681678),
    b = n(699516),
    p = n(991981),
    A = n(367408),
    h = n(423932),
    E = n(473092),
    N = n(611446),
    R = n(993750),
    C = n(134612),
    O = n(388032),
    L = n(397131);
function g(t) {
    let { children: e } = t;
    return (0, i.jsx)('div', {
        className: L.actionGroup,
        children: e
    });
}
function m(t) {
    let { title: e, subTitle: n, buttonText: s, buttonColor: l, onPress: r, disabled: o } = t;
    return (0, i.jsxs)('div', {
        className: L.actionRow,
        children: [
            (0, i.jsxs)('div', {
                className: L.actionButtonDetails,
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
                color: l,
                onClick: r,
                disabled: o,
                children: s
            })
        ]
    });
}
function j(t) {
    let { title: e, subTitle: n, onPress: s } = t;
    return (0, i.jsxs)(c.P3F, {
        className: r()(L.actionRow, L.clickableActionRow),
        onClick: s,
        children: [
            (0, i.jsxs)('div', {
                className: L.actionButtonDetails,
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
let k = function (t) {
    let { otherUserId: e, channelId: l, warningId: r, warningType: a, transitionToSlide: L } = t,
        k = (0, _.o)(),
        f = (0, _.Q)(),
        I = (0, p.q)(l),
        M = null != (0, A.M)(l),
        F = (0, S.Do)({ location: C.cH }),
        Z = (0, o.e7)([b.Z], () => b.Z.isIgnored(e), [e]),
        y = (0, o.e7)([b.Z], () => b.Z.isBlocked(e), [e]),
        Y = s.useCallback(
            (t) => {
                (0, E.qc)({
                    channelId: l,
                    warningId: r,
                    senderId: e,
                    warningType: a,
                    cta: t,
                    isNudgeWarning: M
                });
            },
            [l, r, e, a, M]
        ),
        v = s.useCallback(() => {
            (0, c.Mr3)(C.X_), Y(E.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [Y]),
        U = s.useCallback(() => {
            d.Z.unblockUser(e, { location: C.DL }), Y(E.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, Y]),
        P = s.useCallback(() => {
            (0, c.Mr3)(C.X_), Y(E.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [Y]),
        B = s.useMemo(
            () => [
                ...(F
                    ? [
                          {
                              type: 0,
                              title: O.intl.string(O.t.B7ZT09),
                              subTitle: O.intl.string(O.t['fCfp4+']),
                              buttonText: Z ? O.intl.string(O.t['9e0wLi']) : O.intl.string(O.t.B7ZT09),
                              buttonColor: c.Ttl.PRIMARY,
                              disabled: y,
                              onPress: () => {
                                  Z ? (d.Z.unignoreUser(e, C.cH, l), Y(E.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (d.Z.ignoreUser(e, C.cH, l), Y(E.NM.USER_SAFETY_TOOLS_IGNORE));
                              }
                          }
                      ]
                    : []),
                {
                    type: 0,
                    title: O.intl.string(O.t.oDxaKy),
                    subTitle: O.intl.string(O.t.Lj37a2),
                    buttonText: y ? O.intl.string(O.t.Hro409) : O.intl.string(O.t.oDxaKy),
                    buttonColor: c.Ttl.BRAND,
                    onPress: () => {
                        y
                            ? (U(), x.Z.showUnblockSuccessToast(e, l))
                            : (0, c.ZDy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: s, onClose: r } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: s,
                                          onBlock: v,
                                          onBlockAndReport: P,
                                          onCancel: () => {
                                              null == r || r(), Y(E.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: r,
                                          userId: e,
                                          channelId: l
                                      });
                                  };
                              });
                    }
                },
                {
                    type: 0,
                    title: O.intl.string(O.t.X27yhI),
                    subTitle: O.intl.string(O.t['0tydOT']),
                    buttonText: O.intl.string(O.t.X27yhI),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, c.Mr3)(C.X_), (0, T.wk)(I), Y(E.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                }
            ],
            [Z, F, y, Y, U, v, P, e, l, I]
        ),
        w = s.useMemo(() => {
            let t = {
                    title: O.intl.string(O.t.ZSbbMD),
                    subTitle: O.intl.string(O.t.iNcsra),
                    buttonText: O.intl.string(O.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, u.Z)(C.EI), Y(E.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                e = {
                    title: O.intl.string(O.t.ZSbbMD),
                    subTitle: O.intl.string(O.t.g5uwCw),
                    buttonText: O.intl.string(O.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, u.Z)(C.n4), Y(E.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                n = {
                    title: O.intl.string(O.t.ZSbbMD),
                    subTitle: O.intl.string(O.t.S9O1ZW),
                    buttonText: O.intl.string(O.t.rK4Gqq),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, u.Z)(C.$l), Y(E.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    type: 0,
                    title: O.intl.string(O.t.syuaPD),
                    subTitle: O.intl.string(O.t.LLBnNj),
                    buttonText: O.intl.string(O.t.rzvzyc),
                    buttonColor: c.Ttl.PRIMARY,
                    onPress: () => {
                        (0, h.Z)(c.pTH), Y(E.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                },
                {
                    type: 1,
                    title: O.intl.string(O.t['7LgVmp']),
                    subTitle: O.intl.string(O.t.pwoRjY),
                    onPress: () => {
                        L(N.O.SAFETY_TIPS), Y(E.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                {
                    type: 0,
                    ...(k ? t : f ? n : e)
                }
            ];
        }, [k, f, L, Y]),
        z = s.useMemo(
            () => [
                {
                    type: 1,
                    title: O.intl.string(O.t.otdt29),
                    onPress: () => {
                        L(N.O.ABOUT_SAFETY_ALERTS), Y(E.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [L, Y]
        ),
        D = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: s, buttonText: l, buttonColor: r, onPress: o, disabled: a } = t;
                return (0, i.jsx)(
                    m,
                    {
                        type: e,
                        title: n,
                        subTitle: s,
                        buttonText: l,
                        buttonColor: r,
                        onPress: o,
                        disabled: a
                    },
                    n
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: s, onPress: l } = t;
                return (0, i.jsx)(
                    j,
                    {
                        type: e,
                        title: n,
                        subTitle: s,
                        onPress: l
                    },
                    n
                );
            }
            return null;
        };
    return (0, i.jsxs)(R.Z, {
        children: [(0, i.jsx)(g, { children: B.map((t) => D(t)) }), (0, i.jsx)(g, { children: w.map((t) => D(t)) }), (0, i.jsx)(g, { children: z.map((t) => D(t)) })]
    });
};
