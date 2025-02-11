n.d(t, { Z: () => eu }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(348327),
    o = n.n(a),
    c = n(512722),
    d = n.n(c),
    u = n(392711),
    h = n.n(u),
    m = n(442837),
    g = n(481060),
    x = n(224706),
    _ = n(660216),
    p = n(13245),
    E = n(825209),
    C = n(615287),
    N = n(593472),
    f = n(493773),
    I = n(887278),
    T = n(835473),
    S = n(442550),
    j = n(594190),
    v = n(320724),
    b = n(297700),
    A = n(444295),
    O = n(809357),
    R = n(371651),
    D = n(243487),
    P = n(430561),
    y = n(131704),
    Z = n(598077),
    L = n(189786),
    k = n(77498),
    B = n(283595),
    M = n(594174),
    V = n(556296),
    w = n(808506),
    U = n(237997),
    G = n(626135),
    F = n(358085),
    z = n(13140),
    Y = n(145597),
    H = n(981631),
    W = n(987650),
    K = n(388032),
    X = n(775254);
let q = J(null);
function J(e) {
    var t;
    let n = U.Z.getNotificationPositionMode(),
        i = n !== H._vf.DISABLED,
        s = V.ZP.getOverlayKeybind(),
        l = V.ZP.getOverlayChatKeybind();
    return {
        enabled: w.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: U.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, z.BB)(s.shortcut) : null,
        text_activation_hotkey: null != l ? (0, z.BB)(l.shortcut) : null,
        text_opacity_slider: U.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : w.Z.enabled
    };
}
function Q(e) {
    let { children: t, title: n } = e;
    return (0, i.jsxs)(g.xJW, {
        children: [
            null != n &&
                (0, i.jsx)(g.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: X.formItemTitle,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: X.rowContainer,
                children: t
            })
        ]
    });
}
function $(e) {
    let { header: t, icon: n, title: s, description: l, action: a, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(g.kL8, {
        'aria-label': d,
        onClick: c,
        className: r()(X.groupContainer, u),
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: X.groupHeader,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: X.groupContent,
                children: [
                    null != n &&
                        (0, i.jsx)('div', {
                            className: X.groupIcon,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: X.groupMainContent,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: X.groupTitle,
                                children: s
                            }),
                            null != l &&
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: l
                                }),
                            null != o &&
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-xxs/medium',
                                    color: 'text-muted',
                                    children: o
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: X.groupAction,
                        children: a
                    })
                ]
            })
        ]
    });
}
function ee(e) {
    let { children: t, className: n, onExpand: l, ...a } = e,
        [o, c] = s.useState(!1),
        d = (e) => {
            c(e), null == l || l(e);
        };
    return (0, i.jsx)(g.zF9, {
        className: r()(X.collapseable),
        collapsibleContent: (0, i.jsx)('div', {
            className: X.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)($, {
                ...a,
                onClick: (e) => {
                    d(!o), null == t || t(e);
                },
                className: r()(X.mainCollapseableContainer, n),
                action: (0, i.jsxs)('div', {
                    className: X.groupCollapsedAction,
                    children: [
                        a.action,
                        o
                            ? (0, i.jsx)(g.CJ0, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'var(--interactive-active)'
                              })
                            : (0, i.jsx)(g.Fbu, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'var(--interactive-active)'
                              })
                    ]
                })
            });
        }
    });
}
let et = new Set([C.mM.INITIALIZING, C.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, C.mM.WAITING_FOR_MODULE_TRACKING, C.mM.WAITING_FOR_OVERLAY_OPEN]),
    en = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ei(e) {
    var t, n;
    let l = (0, m.e7)(
            [j.ZP],
            () => {
                let e = j.ZP.getVisibleGame();
                return null == e ? null : e;
            },
            [],
            o()
        ),
        r = null == l ? void 0 : l.pid,
        a = (0, m.e7)([R.default], () => (null == l || null == r ? null : R.default.getTrackedGameByPid(r)), [l, r], o()),
        { enabledLegacy: c, enabledOOP: d } = (0, m.cj)(
            [k.Z, B.Z],
            () => {
                if (null == l && null == a)
                    return {
                        enabledLegacy: !1,
                        enabledOOP: !1
                    };
                if (null == l) {
                    var e, t;
                    return {
                        enabledLegacy: null !== (e = null == a ? void 0 : a.legacyEnabled) && void 0 !== e && e,
                        enabledOOP: null !== (t = null == a ? void 0 : a.oopEnabled) && void 0 !== t && t
                    };
                }
                return (0, j.b6)(l, !1, [k.Z, B.Z]);
            },
            [l, a]
        ),
        u = (0, m.e7)([j.ZP, k.Z, B.Z], () => (null == l ? null : (0, j.FZ)(l, [j.ZP, k.Z, B.Z])), [l], o()),
        [h, _] = s.useState(d),
        [p, E] = s.useState(c),
        [S, v] = s.useState(!1);
    s.useEffect(() => {
        _(d), E(c);
    }, [d, c]);
    let A = (0, I.$1)(),
        O = !(0, Y.VS)(),
        { legacyEnabled: D, oopEnabled: P } = (0, m.cj)([R.default], () => R.default.getGlobalEnabledStatus()),
        [y] = (0, T.Z)([null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : void 0]),
        Z = (e, t, n) => {
            en(n), null != l && (x.Z.toggleOverlay(l, e, t), _(t), E(e));
        },
        L = A && O,
        M = !D && !P,
        V = !h && !D && p && !A,
        w = !p && !P && h && !O,
        U = (null == a ? void 0 : a.overlayMethod) === C.gl.Disabled,
        G = (null == a ? void 0 : a.state) === C.mM.OVERLAY_RENDERING && !U,
        F = (null == a ? void 0 : a.state) != null && et.has(a.state) && !U,
        z = (null == a ? void 0 : a.overlayMethod) === C.gl.OutOfProcess || (null == a ? void 0 : a.overlayMethod) === C.gl.OutOfProcessLimitedInteraction,
        H = (null == a ? void 0 : a.overlayMethod) === C.gl.Hook,
        W = (null == a ? void 0 : a.state) === C.mM.OVERLAY_CRASHED || (null == a ? void 0 : a.state) === C.mM.OVERLAY_CRASHED_DISABLED,
        q = !h && !p,
        [J, Q] = (() => {
            switch (!0) {
                case G && z:
                    return [
                        K.intl.format(K.t.hFVBIi, {
                            overlayMethod: K.intl.string(K.t.a3eXS0),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    g.Text,
                                    {
                                        tag: 'span',
                                        variant: 'text-sm/medium',
                                        color: 'text-positive',
                                        children: e
                                    },
                                    t
                                );
                            }
                        }),
                        null
                    ];
                case G && H:
                    return [
                        K.intl.format(K.t.hFVBIi, {
                            overlayMethod: K.intl.string(K.t.bvlpDQ),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    g.Text,
                                    {
                                        tag: 'span',
                                        variant: 'text-sm/medium',
                                        color: 'text-primary',
                                        children: e
                                    },
                                    t
                                );
                            }
                        }),
                        (function () {
                            var e, t;
                            switch (!0) {
                                case (null == a ? void 0 : a.fullscreenType) !== N.Jx.BORDERLESS_FULLSCREEN:
                                    return K.intl.string(K.t.mJmbeH);
                                case O:
                                    return K.intl.string(K.t.C7bLTU);
                                case !(null !== (e = null == a ? void 0 : a.oopEnabled) && void 0 !== e && e):
                                    return K.intl.string(K.t.WiY24u);
                                case !P:
                                    return K.intl.string(K.t.cAFVsL);
                                case !(null !== (t = null == a ? void 0 : a.supportsOutOfProcess) && void 0 !== t && t):
                                    return K.intl.string(K.t.XcGEcn);
                                default:
                                    return K.intl.string(K.t.bJXH2t);
                            }
                        })()
                    ];
                case W:
                    return [K.intl.string(K.t.OFC2a2), null];
                case L:
                    return [K.intl.string(K.t.m7X4a2), null];
                case M:
                    return [K.intl.string(K.t['9DUS5u']), null];
                case q:
                    return [K.intl.string(K.t.nQ9EdH), null];
                case V:
                case w:
                    return [K.intl.string(K.t.VWUn0d), null];
                case F:
                    if (z) return [K.intl.string(K.t['s8+CFh']), null];
                    if (H) return [K.intl.string(K.t.JEEdqq), null];
                    return [K.intl.string(K.t['2Xhy9v']), null];
                case null == a:
                    return [K.intl.string(K.t.vwHPRk), null];
                default:
                    return [K.intl.string(K.t.ONovPz), null];
            }
        })();
    return ((0, f.ZP)(() => {
        x.Z.getDetectableGames();
    }),
    null == l)
        ? null
        : (0, i.jsxs)(ee, {
              onExpand: v,
              className: S ? X.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null !== (n = null == y ? void 0 : y.name) && void 0 !== n ? n : '',
                      null != u && u.verified
                          ? (0, i.jsx)(g.ua7, {
                                text: K.intl.string(K.t['4PJP5u']),
                                children: (e) =>
                                    (0, i.jsx)(b.Z, {
                                        size: 16,
                                        color: g.TVs.colors.BG_BRAND.css,
                                        ...e,
                                        children: (0, i.jsx)(g.kmB, {
                                            size: 'custom',
                                            width: 16,
                                            height: 16,
                                            color: g.TVs.colors.WHITE.css
                                        })
                                    })
                            })
                          : null
                  ]
              }),
              description: J,
              hint: null != Q ? Q : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      G || F
                          ? (0, i.jsx)(g.pzj, {
                                size: 'xxs',
                                color: F ? g.TVs.colors.TEXT_MUTED.css : z ? g.TVs.colors.TEXT_POSITIVE.css : g.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, i.jsx)('div', { className: X.playingDot }),
                      (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: K.intl.string(K.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, i.jsx)(es, { game: l }),
              'aria-label': K.intl.string(K.t['87O5GB']),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => en(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: h || p,
                      disabled: L || M || V || w,
                      onChange: (e, t) => Z(e, e, t)
                  })
              }),
              children: [
                  (0, i.jsx)($, {
                      title: K.intl.string(K.t['7BlVIi']),
                      description: K.intl.string(K.t.ndgADA),
                      hint: P ? void 0 : K.intl.string(K.t.cAFVsL),
                      'aria-label': K.intl.string(K.t['7BlVIi']),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.rsf, {
                                  checked: h,
                                  disabled: O || !P,
                                  onChange: (e, t) => Z(p, e, t)
                              }),
                              (0, i.jsx)('div', { className: X.emptySpacer })
                          ]
                      })
                  }),
                  (0, i.jsx)($, {
                      title: K.intl.string(K.t.BfFpW1),
                      description: K.intl.string(K.t.OzInYm),
                      hint: D ? void 0 : K.intl.string(K.t['3sYHXl']),
                      'aria-label': K.intl.string(K.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.rsf, {
                                  checked: p,
                                  disabled: A || !D,
                                  onChange: (e, t) => Z(e, h, t)
                              }),
                              (0, i.jsx)('div', { className: X.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function es(e) {
    var t, n;
    let { game: s } = e,
        [l] = (0, T.Z)([null == s ? void 0 : s.id], !0),
        r = null !== (t = null == l ? void 0 : l.getIconURL(32)) && void 0 !== t ? t : void 0;
    return (0, i.jsx)(S.f, {
        src: r,
        size: 32,
        showTooltip: !1,
        alt: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : ''
    });
}
function el(e) {
    let { rawGame: t, legacySupportDisabled: n } = e,
        l = (0, m.cj)([j.ZP, k.Z, B.Z], () => (0, j.FZ)(t, [j.ZP, k.Z, B.Z])),
        { enabledLegacy: r, enabledOOP: a } = (0, m.cj)([k.Z, B.Z], () => (0, j.b6)(t, !1, [k.Z, B.Z]), [t]),
        [o, c] = s.useState(r);
    s.useEffect(() => {
        c(r);
    }, [r]);
    let d = (e, t) => {
        en(t), x.Z.toggleOverlay(l, e, a), c(e);
    };
    return (0, i.jsx)($, {
        title: t.name,
        icon: (0, i.jsx)(es, { game: l }),
        'aria-label': K.intl.format(K.t.hvPYsL, { gameName: l.name }).toString(),
        action: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.rsf, {
                    checked: o,
                    disabled: n,
                    onChange: (e, t) => d(e, t)
                }),
                (0, i.jsx)('div', { className: X.emptySpacer })
            ]
        })
    });
}
function er(e) {
    let [t, n] = s.useState(!1),
        { legacyEnabled: l, oopEnabled: r } = (0, m.cj)([R.default], () => R.default.getGlobalEnabledStatus()),
        a = (0, m.Wu)([j.ZP], () => j.ZP.getGamesSeen(!0)),
        o = (0, I.$1)(),
        c = (e, t) => {
            var n, i;
            en(t), p.Z.setEnabled(e, r), (0, A.o)(e, A.A.LEGACY, null !== (i = null === (n = j.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null);
        },
        d = s.useMemo(() => (W.iP ? (o ? K.intl.string(K.t.r9jEV1) : K.intl.string(K.t.OzInYm)) : K.intl.string(K.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, i.jsx)($, {
              title: K.intl.string(K.t.BfFpW1),
              description: d,
              'aria-label': K.intl.string(K.t.BfFpW1),
              className: X.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.rsf, {
                          checked: l,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      W.iP && (0, i.jsx)('div', { className: X.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ee, {
              onExpand: n,
              className: t ? X.expandedContainer : void 0,
              title: K.intl.string(K.t.BfFpW1),
              description: d,
              'aria-label': K.intl.string(K.t.BfFpW1),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => en(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: l,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: X.subtitleContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: K.intl.string(K.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(g.zJl, {
                      className: X.scroller,
                      children: a.map((e) =>
                          (0, i.jsx)(
                              el,
                              {
                                  rawGame: e,
                                  legacySupportDisabled: o
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ea(e) {
    let { rawGame: t, oopSupportDisabled: n } = e,
        l = (0, m.cj)([j.ZP, k.Z, B.Z], () => (0, j.FZ)(t, [j.ZP, k.Z, B.Z])),
        { enabledLegacy: r, enabledOOP: a } = (0, m.cj)([k.Z, B.Z], () => (0, j.b6)(t, !0, [k.Z, B.Z]), [t]),
        [o, c] = s.useState(a),
        d = (e, t) => {
            en(t), x.Z.toggleOverlay(l, r, e), c(e);
        };
    return (
        s.useEffect(() => {
            c(a);
        }, [a]),
        (0, i.jsx)($, {
            title: t.name,
            icon: (0, i.jsx)(es, { game: l }),
            'aria-label': K.intl.format(K.t.nByTd3, { gameName: l.name }).toString(),
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.rsf, {
                        checked: o,
                        disabled: n,
                        onChange: (e, t) => d(e, t)
                    }),
                    (0, i.jsx)('div', { className: X.emptySpacer })
                ]
            })
        })
    );
}
function eo(e) {
    let [t, n] = s.useState(!1),
        { oopEnabled: l, legacyEnabled: r } = (0, m.cj)([R.default], () => R.default.getGlobalEnabledStatus()),
        a = !(0, Y.VS)(),
        o = (0, m.Wu)([j.ZP], () => j.ZP.getGamesSeen(!0)),
        c = (e, t) => {
            var n, i;
            en(t), p.Z.setEnabled(r, e), (0, A.o)(e, A.A.OOP, null !== (i = null === (n = j.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null);
        },
        d = s.useMemo(() => (W.iP ? (a ? K.intl.string(K.t.C7bLTU) : K.intl.string(K.t.ndgADA)) : K.intl.string(K.t.m7X4a2)), [a]);
    return 0 === o.length
        ? (0, i.jsx)($, {
              title: K.intl.string(K.t['7BlVIi']),
              description: d,
              'aria-label': K.intl.string(K.t['7BlVIi']),
              className: X.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.rsf, {
                          checked: l,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      W.iP && (0, i.jsx)('div', { className: X.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ee, {
              onExpand: n,
              className: t ? X.expandedContainer : void 0,
              title: K.intl.string(K.t['7BlVIi']),
              description: d,
              'aria-label': K.intl.string(K.t['7BlVIi']),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => en(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: l,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: X.subtitleContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: K.intl.string(K.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(g.zJl, {
                      className: X.scroller,
                      children: o.map((e) =>
                          (0, i.jsx)(
                              ea,
                              {
                                  rawGame: e,
                                  oopSupportDisabled: a
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ec() {
    let e = (0, m.e7)([V.ZP], () => V.ZP.getOverlayKeybind()),
        t = (0, I.$1)(),
        n = !(0, Y.VS)(),
        [s, l] = (0, m.Wu)([j.ZP], () => [j.ZP.canShowAdminWarning, j.ZP.getVisibleGame()], []),
        r = null != l && l.elevated && s;
    return (0, i.jsx)(Q, {
        children: (0, i.jsxs)('div', {
            className: X.keybindMainContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: X.keybindContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: X.keybindHeaderContainer,
                            children: (0, i.jsx)(g.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: K.intl.string(K.t.VsAZcH)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: X.keybindRecorderContainer,
                            children: (0, i.jsx)(E.Z, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    d()(null != e, 'Keybind should never be undefined'),
                                        _.Z.setKeybind({
                                            ...e,
                                            shortcut: t
                                        });
                                }
                            })
                        })
                    ]
                }),
                r &&
                    (0, i.jsx)(g.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-warning',
                        className: X.keybindAdminWarning,
                        children: K.intl.string(K.t.NsowVV)
                    })
            ]
        })
    });
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new L.Z({
            channelId: '123',
            userId: s,
            sessionId: '789',
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i
        }),
        user: new Z.Z({
            id: s,
            username: e
        }),
        member: {
            nick: e,
            userId: s,
            guildId: '890',
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: '#000000'
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0
    };
}
function eu(e) {
    let { className: t, showHeader: n } = e,
        {
            avatarSizeMode: l,
            displayNameMode: r,
            displayUserMode: a,
            notificationPositionMode: o,
            textChatNotificationMode: c,
            disableClickableRegions: d,
            shouldShowKeybindIndicators: u
        } = (0, m.cj)([U.Z], () => ({
            avatarSizeMode: U.Z.getAvatarSizeMode(),
            displayNameMode: U.Z.getDisplayNameMode(),
            displayUserMode: U.Z.getDisplayUserMode(),
            notificationPositionMode: U.Z.getNotificationPositionMode(),
            textChatNotificationMode: U.Z.getTextChatNotificationMode(),
            disableClickableRegions: U.Z.disableClickableRegions,
            shouldShowKeybindIndicators: U.Z.showKeybindIndicators
        })),
        x = (0, m.e7)([M.default], () => M.default.getCurrentUser()),
        _ = (0, O.Z)({ location: 'overlay_user_settings' });
    (0, f.ZP)(() => {
        if (F.isPlatformEmbedded) return (0, v.Ky)(), v.P7;
    }),
        (function () {
            let e = J(q);
            h().isEqual(e, q) || (G.default.track(H.rMx.OVERLAY_SETTINGS_UPDATED, e), (q = e));
        })();
    let [E] = s.useState(() => [ed(K.intl.string(K.t.C0ZDvr), !0, !1), ed(K.intl.string(K.t.iOtj8P), !1, !1, !0), ed(K.intl.string(K.t['0oqNgI']), !1, !0)]);
    return null == x
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(g.hjN, {
                      tag: g.RB0.H1,
                      title: K.intl.string(K.t['9cb1U1']),
                      children: [
                          (0, i.jsxs)('div', {
                              className: X.overlayEnabledSettingsContainer,
                              children: [(0, i.jsx)(ei, {}), (0, i.jsx)(eo, {}), (0, i.jsx)(er, {})]
                          }),
                          (0, i.jsx)('div', { className: X.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(g.hjN, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: X.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(ec, {}),
                                  _ &&
                                      (0, i.jsx)(Q, {
                                          children: (0, i.jsx)(g.j7V, {
                                              value: u,
                                              onChange: (e) => p.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: K.intl.string(K.t.XZTl9v)
                                          })
                                      }),
                                  (0, i.jsxs)(Q, {
                                      children: [
                                          (0, i.jsx)(g.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: K.intl.string(K.t.Fy5kPj)
                                          }),
                                          (0, i.jsx)(g.j7V, {
                                              value: o !== H._vf.DISABLED && c === H.Ypu.ENABLED,
                                              disabled: o === H._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = H.Ypu;
                                                  p.Z.setTextChatNotificationMode(c === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)(Q, {
                                      children: [
                                          (0, i.jsx)(g.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: K.intl.string(K.t['+eFXxs'])
                                          }),
                                          (0, i.jsx)(g.j7V, {
                                              value: !d,
                                              onChange: function () {
                                                  p.Z.setDisableClickableRegions(!d);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', { className: X.settingsDivider })
                      ]
                  }),
                  (0, i.jsx)(g.hjN, {
                      title: 'Voice Widget',
                      children: (0, i.jsxs)('div', {
                          className: X.voiceSettingsContainer,
                          children: [
                              (0, i.jsx)(Q, {
                                  title: K.intl.string(K.t.dnvZSk),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: K.intl.string(K.t.YcOxtr),
                                              value: H.ipw.LARGE
                                          },
                                          {
                                              label: K.intl.string(K.t.BKIKq6),
                                              value: H.ipw.SMALL
                                          }
                                      ],
                                      className: X.select,
                                      onChange: (e) => p.Z.setAvatarSizeMode(e),
                                      value: l
                                  })
                              }),
                              (0, i.jsx)(Q, {
                                  title: K.intl.string(K.t.J0dpcH),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: K.intl.string(K.t.nBmDra),
                                              value: H.wC$.ALWAYS
                                          },
                                          {
                                              label: K.intl.string(K.t['2OvIZW']),
                                              value: H.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: K.intl.string(K.t.ekjlPD),
                                              value: H.wC$.NEVER
                                          }
                                      ],
                                      className: X.select,
                                      onChange: (e) => p.Z.setDisplayNameMode(e),
                                      value: r
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: X.widgetContainer,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: X.voiceWidgetContainer,
                                          children: (0, i.jsx)(D.k, {
                                              id: 'voice-widget',
                                              title: K.intl.string(K.t.KNJ6Vl),
                                              channel: (0, y.kt)({
                                                  id: '123',
                                                  name: 'Test Channel',
                                                  type: H.d4z.GUILD_VOICE,
                                                  guild_id: '456'
                                              }),
                                              sortedVoiceStates: [
                                                  (function (e) {
                                                      let t = ed(e.username);
                                                      return (t.user = e), t;
                                                  })(x),
                                                  ...E
                                              ],
                                              displayNameMode: r,
                                              displayUserMode: a,
                                              avatarSizeMode: l,
                                              widget: H.Odu.VOICE,
                                              anchorLeft: !0,
                                              application: null,
                                              stream: null,
                                              streamApplication: null,
                                              streamMetadata: null,
                                              locked: !1,
                                              pinned: !1,
                                              isSettingsPreview: !0,
                                              isPreviewingInGame: !1
                                          })
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: X.widgetHeaderContainer,
                                          children: [
                                              (0, i.jsx)(P.PI, { children: K.intl.string(K.t.KNJ6Vl) }),
                                              (0, i.jsx)(P.ls, {}),
                                              (0, i.jsx)(P.RT, {
                                                  id: 'voice-widget',
                                                  pinned: !0
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, i.jsx)(Q, {
                                  title: K.intl.string(K.t.swsWWF),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: K.intl.string(K.t.nBmDra),
                                              value: H.OYC.ALWAYS
                                          },
                                          {
                                              label: K.intl.string(K.t['2OvIZW']),
                                              value: H.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: X.select,
                                      onChange: (e) => p.Z.setDisplayUserMode(e),
                                      value: a
                                  })
                              })
                          ]
                      })
                  })
              ]
          });
}
