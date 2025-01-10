n(47120);
var o,
    i,
    s = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    T = n(194359),
    S = n(782568),
    _ = n(726521),
    x = n(485664),
    A = n(922611),
    b = n(681678),
    p = n(699516),
    E = n(863653),
    h = n(991981),
    R = n(367408),
    C = n(423932),
    N = n(473092),
    L = n(611446),
    g = n(993750),
    O = n(134612),
    m = n(388032),
    f = n(397131);
function j(t) {
    let { children: e } = t;
    return (0, s.jsx)('div', {
        className: f.actionGroup,
        children: e
    });
}
function M(t) {
    let { title: e, subTitle: n, buttonText: o, buttonColor: i, onPress: l, disabled: r } = t;
    return (0, s.jsxs)('div', {
        className: f.actionRow,
        children: [
            (0, s.jsxs)('div', {
                className: f.actionButtonDetails,
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    (0, s.jsx)(d.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.SMALL,
                color: i,
                onClick: l,
                disabled: r,
                children: o
            })
        ]
    });
}
function B(t) {
    let { title: e, subTitle: n, onPress: o } = t;
    return (0, s.jsxs)(d.Clickable, {
        className: a()(f.actionRow, f.clickableActionRow),
        onClick: o,
        children: [
            (0, s.jsxs)('div', {
                className: f.actionButtonDetails,
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    null != n
                        ? (0, s.jsx)(d.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              children: n
                          })
                        : null
                ]
            }),
            (0, s.jsx)(d.ChevronSmallRightIcon, {
                size: 'md',
                color: u.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
((i = o || (o = {}))[(i.ButtonRow = 0)] = 'ButtonRow'), (i[(i.ClickableRow = 1)] = 'ClickableRow');
e.Z = function (t) {
    let { otherUserId: e, channelId: o, warningId: i, warningType: r, transitionToSlide: a } = t,
        u = (0, x.o)(),
        f = (0, E.zF)('web_safety-tools-action-slide'),
        I = (0, h.q)(o),
        y = null != (0, R.M)(o),
        F = (0, A.Do)({ location: O.cH }),
        k = (0, c.e7)([p.Z], () => p.Z.isIgnored(e), [e]),
        Y = (0, c.e7)([p.Z], () => p.Z.isBlocked(e), [e]),
        v = l.useCallback(
            (t) => {
                (0, N.qc)({
                    channelId: o,
                    warningId: i,
                    senderId: e,
                    warningType: r,
                    cta: t,
                    isNudgeWarning: y
                });
            },
            [o, i, e, r, y]
        ),
        Z = l.useCallback(() => {
            (0, d.closeModal)(O.X_), v(N.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [v]),
        U = l.useCallback(() => {
            T.Z.unblockUser(e, { location: O.DL }), v(N.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, v]),
        P = l.useCallback(() => {
            (0, d.closeModal)(O.X_), v(N.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [v]),
        w = l.useMemo(
            () => [
                ...(F
                    ? [
                          {
                              type: 0,
                              title: m.intl.string(m.t.B7ZT09),
                              subTitle: m.intl.string(m.t['fCfp4+']),
                              buttonText: k ? m.intl.string(m.t['9e0wLi']) : m.intl.string(m.t.B7ZT09),
                              buttonColor: d.ButtonColors.PRIMARY,
                              disabled: Y,
                              onPress: () => {
                                  k ? (T.Z.unignoreUser(e, O.cH, o), v(N.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (T.Z.ignoreUser(e, O.cH, o), v(N.NM.USER_SAFETY_TOOLS_IGNORE));
                              }
                          }
                      ]
                    : []),
                {
                    type: 0,
                    title: m.intl.string(m.t.oDxaKy),
                    subTitle: m.intl.string(m.t.Lj37a2),
                    buttonText: Y ? m.intl.string(m.t.Hro409) : m.intl.string(m.t.oDxaKy),
                    buttonColor: d.ButtonColors.BRAND,
                    onPress: () => {
                        Y
                            ? (U(), b.Z.showUnblockSuccessToast(e, o))
                            : (0, d.openModalLazy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: i, onClose: l } = n;
                                      return (0, s.jsx)(t, {
                                          transitionState: i,
                                          onBlock: Z,
                                          onBlockAndReport: P,
                                          onCancel: () => {
                                              null == l || l(), v(N.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: l,
                                          userId: e,
                                          channelId: o
                                      });
                                  };
                              });
                    }
                },
                {
                    type: 0,
                    title: m.intl.string(m.t.X27yhI),
                    subTitle: m.intl.string(m.t['0tydOT']),
                    buttonText: m.intl.string(m.t.X27yhI),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, d.closeModal)(O.X_), (0, _.wk)(I), v(N.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                }
            ],
            [k, F, Y, v, U, Z, P, e, o, I]
        ),
        D = l.useMemo(() => {
            let t = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.iNcsra),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.EI), v(N.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                e = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.g5uwCw),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.n4), v(N.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                n = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.S9O1ZW),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.$l), v(N.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    type: 0,
                    title: m.intl.string(m.t.syuaPD),
                    subTitle: m.intl.string(m.t.LLBnNj),
                    buttonText: m.intl.string(m.t.rzvzyc),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, C.Z)(d.closeAllModals), v(N.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                },
                {
                    type: 1,
                    title: m.intl.string(m.t['7LgVmp']),
                    subTitle: m.intl.string(m.t.pwoRjY),
                    onPress: () => {
                        a(L.SafetyToolsSlides.SAFETY_TIPS), v(N.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                {
                    type: 0,
                    ...(u ? t : f ? n : e)
                }
            ];
        }, [u, f, a, v]),
        H = l.useMemo(
            () => [
                {
                    type: 1,
                    title: m.intl.string(m.t.otdt29),
                    onPress: () => {
                        a(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), v(N.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [a, v]
        ),
        z = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: o, buttonText: i, buttonColor: l, onPress: r, disabled: a } = t;
                return (0, s.jsx)(
                    M,
                    {
                        type: e,
                        title: n,
                        subTitle: o,
                        buttonText: i,
                        buttonColor: l,
                        onPress: r,
                        disabled: a
                    },
                    n
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: o, onPress: i } = t;
                return (0, s.jsx)(
                    B,
                    {
                        type: e,
                        title: n,
                        subTitle: o,
                        onPress: i
                    },
                    n
                );
            }
            return null;
        };
    return (0, s.jsxs)(g.Z, {
        children: [(0, s.jsx)(j, { children: w.map((t) => z(t)) }), (0, s.jsx)(j, { children: D.map((t) => z(t)) }), (0, s.jsx)(j, { children: H.map((t) => z(t)) })]
    });
};
