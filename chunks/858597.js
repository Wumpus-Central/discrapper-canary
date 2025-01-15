n(47120);
var i,
    s,
    o = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    T = n(194359),
    S = n(782568),
    _ = n(726521),
    x = n(485664),
    b = n(922611),
    p = n(681678),
    A = n(699516),
    h = n(863653),
    C = n(991981),
    E = n(367408),
    R = n(423932),
    N = n(473092),
    L = n(611446),
    g = n(993750),
    O = n(134612),
    m = n(388032),
    j = n(729259);
function M(t) {
    let { children: e } = t;
    return (0, o.jsx)('div', {
        className: j.actionGroup,
        children: e
    });
}
function f(t) {
    let { title: e, subTitle: n, buttonText: i, buttonColor: s, onPress: l, disabled: r } = t;
    return (0, o.jsxs)('div', {
        className: j.actionRow,
        children: [
            (0, o.jsxs)('div', {
                className: j.actionButtonDetails,
                children: [
                    (0, o.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    (0, o.jsx)(u.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, o.jsx)(u.Button, {
                size: u.Button.Sizes.SMALL,
                color: s,
                onClick: l,
                disabled: r,
                children: i
            })
        ]
    });
}
function B(t) {
    let { title: e, subTitle: n, onPress: i } = t;
    return (0, o.jsxs)(u.Clickable, {
        className: a()(j.actionRow, j.clickableActionRow),
        onClick: i,
        children: [
            (0, o.jsxs)('div', {
                className: j.actionButtonDetails,
                children: [
                    (0, o.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    null != n
                        ? (0, o.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              children: n
                          })
                        : null
                ]
            }),
            (0, o.jsx)(u.ChevronSmallRightIcon, {
                size: 'md',
                color: d.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
((s = i || (i = {}))[(s.ButtonRow = 0)] = 'ButtonRow'), (s[(s.ClickableRow = 1)] = 'ClickableRow');
e.Z = function (t) {
    let { otherUserId: e, channelId: i, warningId: s, warningType: r, transitionToSlide: a } = t,
        d = (0, x.o)(),
        j = (0, h.zF)('web_safety-tools-action-slide'),
        I = (0, C.q)(i),
        k = null != (0, E.M)(i),
        F = (0, b.Do)({ location: O.cH }),
        y = (0, c.e7)([A.Z], () => A.Z.isIgnored(e), [e]),
        v = (0, c.e7)([A.Z], () => A.Z.isBlocked(e), [e]),
        Y = l.useCallback(
            (t) => {
                (0, N.qc)({
                    channelId: i,
                    warningId: s,
                    senderId: e,
                    warningType: r,
                    cta: t,
                    isNudgeWarning: k
                });
            },
            [i, s, e, r, k]
        ),
        U = l.useCallback(() => {
            (0, u.closeModal)(O.X_), Y(N.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [Y]),
        Z = l.useCallback(() => {
            T.Z.unblockUser(e, { location: O.DL }), Y(N.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, Y]),
        P = l.useCallback(() => {
            (0, u.closeModal)(O.X_), Y(N.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [Y]),
        w = l.useMemo(
            () => [
                ...(F
                    ? [
                          {
                              type: 0,
                              title: m.intl.string(m.t.B7ZT09),
                              subTitle: m.intl.string(m.t['fCfp4+']),
                              buttonText: y ? m.intl.string(m.t['9e0wLi']) : m.intl.string(m.t.B7ZT09),
                              buttonColor: u.ButtonColors.PRIMARY,
                              disabled: v,
                              onPress: () => {
                                  y ? (T.Z.unignoreUser(e, O.cH, i), Y(N.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (T.Z.ignoreUser(e, O.cH, i), Y(N.NM.USER_SAFETY_TOOLS_IGNORE));
                              }
                          }
                      ]
                    : []),
                {
                    type: 0,
                    title: m.intl.string(m.t.oDxaKy),
                    subTitle: m.intl.string(m.t.Lj37a2),
                    buttonText: v ? m.intl.string(m.t.Hro409) : m.intl.string(m.t.oDxaKy),
                    buttonColor: u.ButtonColors.BRAND,
                    onPress: () => {
                        v
                            ? (Z(), p.Z.showUnblockSuccessToast(e, i))
                            : (0, u.openModalLazy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: s, onClose: l } = n;
                                      return (0, o.jsx)(t, {
                                          transitionState: s,
                                          onBlock: U,
                                          onBlockAndReport: P,
                                          onCancel: () => {
                                              null == l || l(), Y(N.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: l,
                                          userId: e,
                                          channelId: i
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
                    buttonColor: u.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, u.closeModal)(O.X_), (0, _.wk)(I), Y(N.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                }
            ],
            [y, F, v, Y, Z, U, P, e, i, I]
        ),
        D = l.useMemo(() => {
            let t = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.iNcsra),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: u.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.EI), Y(N.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                e = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.g5uwCw),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: u.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.n4), Y(N.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                n = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.S9O1ZW),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: u.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.$l), Y(N.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    type: 0,
                    title: m.intl.string(m.t.syuaPD),
                    subTitle: m.intl.string(m.t.LLBnNj),
                    buttonText: m.intl.string(m.t.rzvzyc),
                    buttonColor: u.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, R.Z)(u.closeAllModals), Y(N.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                },
                {
                    type: 1,
                    title: m.intl.string(m.t['7LgVmp']),
                    subTitle: m.intl.string(m.t.pwoRjY),
                    onPress: () => {
                        a(L.SafetyToolsSlides.SAFETY_TIPS), Y(N.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                {
                    type: 0,
                    ...(d ? t : j ? n : e)
                }
            ];
        }, [d, j, a, Y]),
        H = l.useMemo(
            () => [
                {
                    type: 1,
                    title: m.intl.string(m.t.otdt29),
                    onPress: () => {
                        a(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), Y(N.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [a, Y]
        ),
        z = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: i, buttonText: s, buttonColor: l, onPress: r, disabled: a } = t;
                return (0, o.jsx)(
                    f,
                    {
                        type: e,
                        title: n,
                        subTitle: i,
                        buttonText: s,
                        buttonColor: l,
                        onPress: r,
                        disabled: a
                    },
                    n
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: i, onPress: s } = t;
                return (0, o.jsx)(
                    B,
                    {
                        type: e,
                        title: n,
                        subTitle: i,
                        onPress: s
                    },
                    n
                );
            }
            return null;
        };
    return (0, o.jsxs)(g.Z, {
        children: [(0, o.jsx)(M, { children: w.map((t) => z(t)) }), (0, o.jsx)(M, { children: D.map((t) => z(t)) }), (0, o.jsx)(M, { children: H.map((t) => z(t)) })]
    });
};
