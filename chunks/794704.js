n.d(t, { Z: () => ed }), n(47120);
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
    A = n(809357),
    O = n(371651),
    R = n(243487),
    D = n(430561),
    P = n(131704),
    y = n(598077),
    Z = n(189786),
    L = n(77498),
    k = n(283595),
    B = n(594174),
    M = n(556296),
    V = n(808506),
    w = n(237997),
    U = n(626135),
    G = n(358085),
    F = n(13140),
    z = n(145597),
    Y = n(981631),
    H = n(987650),
    W = n(388032),
    K = n(775254);
let X = q(null);
function q(e) {
    var t;
    let n = w.Z.getNotificationPositionMode(),
        i = n !== Y._vf.DISABLED,
        s = M.ZP.getOverlayKeybind(),
        l = M.ZP.getOverlayChatKeybind();
    return {
        enabled: V.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: w.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, F.BB)(s.shortcut) : null,
        text_activation_hotkey: null != l ? (0, F.BB)(l.shortcut) : null,
        text_opacity_slider: w.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : V.Z.enabled
    };
}
function J(e) {
    let { children: t, title: n } = e;
    return (0, i.jsxs)(g.xJW, {
        children: [
            null != n &&
                (0, i.jsx)(g.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: K.formItemTitle,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: K.rowContainer,
                children: t
            })
        ]
    });
}
function Q(e) {
    let { header: t, icon: n, title: s, description: l, action: a, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(g.kL8, {
        'aria-label': d,
        onClick: c,
        className: r()(K.groupContainer, u),
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: K.groupHeader,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: K.groupContent,
                children: [
                    null != n &&
                        (0, i.jsx)('div', {
                            className: K.groupIcon,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: K.groupMainContent,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: K.groupTitle,
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
                        className: K.groupAction,
                        children: a
                    })
                ]
            })
        ]
    });
}
function $(e) {
    let { children: t, className: n, onExpand: l, ...a } = e,
        [o, c] = s.useState(!1),
        d = (e) => {
            c(e), null == l || l(e);
        };
    return (0, i.jsx)(g.zF9, {
        className: r()(K.collapseable),
        collapsibleContent: (0, i.jsx)('div', {
            className: K.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(Q, {
                ...a,
                onClick: (e) => {
                    d(!o), null == t || t(e);
                },
                className: r()(K.mainCollapseableContainer, n),
                action: (0, i.jsxs)('div', {
                    className: K.groupCollapsedAction,
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
let ee = new Set([C.mM.INITIALIZING, C.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, C.mM.WAITING_FOR_MODULE_TRACKING, C.mM.WAITING_FOR_OVERLAY_OPEN]),
    et = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function en(e) {
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
        a = (0, m.e7)([O.Z], () => (null == l || null == r ? null : O.Z.getTrackedGameByPid(r)), [l, r], o()),
        { enabledLegacy: c, enabledOOP: d } = (0, m.cj)(
            [L.Z, k.Z],
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
                return (0, j.b6)(l, !1, [L.Z, k.Z]);
            },
            [l, a]
        ),
        u = (0, m.e7)([j.ZP, L.Z, k.Z], () => (null == l ? null : (0, j.FZ)(l, [j.ZP, L.Z, k.Z])), [l], o()),
        [h, _] = s.useState(d),
        [p, E] = s.useState(c),
        [S, v] = s.useState(!1);
    s.useEffect(() => {
        _(d), E(c);
    }, [d, c]);
    let A = (0, I.$1)(),
        R = !(0, z.VS)(),
        { legacyEnabled: D, oopEnabled: P } = (0, m.cj)([O.Z], () => O.Z.getGlobalEnabledStatus()),
        [y] = (0, T.Z)([null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : void 0]),
        Z = (e, t, n) => {
            et(n), null != l && (x.Z.toggleOverlay(l, e, t), _(t), E(e));
        },
        B = A && R,
        M = !D && !P,
        V = !h && !D && p && !A,
        w = !p && !P && h && !R,
        U = (null == a ? void 0 : a.overlayMethod) === C.gl.Disabled,
        G = (null == a ? void 0 : a.state) === C.mM.OVERLAY_RENDERING && !U,
        F = (null == a ? void 0 : a.state) != null && ee.has(a.state) && !U,
        Y = (null == a ? void 0 : a.overlayMethod) === C.gl.OutOfProcess || (null == a ? void 0 : a.overlayMethod) === C.gl.OutOfProcessLimitedInteraction,
        H = (null == a ? void 0 : a.overlayMethod) === C.gl.Hook,
        X = (null == a ? void 0 : a.state) === C.mM.OVERLAY_CRASHED || (null == a ? void 0 : a.state) === C.mM.OVERLAY_CRASHED_DISABLED,
        q = !h && !p,
        [J, en] = (() => {
            switch (!0) {
                case G && Y:
                    return [
                        W.intl.format(W.t.hFVBIi, {
                            overlayMethod: W.intl.string(W.t.a3eXS0),
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
                        W.intl.format(W.t.hFVBIi, {
                            overlayMethod: W.intl.string(W.t.bvlpDQ),
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
                                    return W.intl.string(W.t.mJmbeH);
                                case R:
                                    return W.intl.string(W.t.C7bLTU);
                                case !(null !== (e = null == a ? void 0 : a.oopEnabled) && void 0 !== e && e):
                                    return W.intl.string(W.t.WiY24u);
                                case !P:
                                    return W.intl.string(W.t.cAFVsL);
                                case !(null !== (t = null == a ? void 0 : a.supportsOutOfProcess) && void 0 !== t && t):
                                    return W.intl.string(W.t.XcGEcn);
                                default:
                                    return W.intl.string(W.t.bJXH2t);
                            }
                        })()
                    ];
                case X:
                    return [W.intl.string(W.t.OFC2a2), null];
                case B:
                    return [W.intl.string(W.t.m7X4a2), null];
                case M:
                    return [W.intl.string(W.t['9DUS5u']), null];
                case q:
                    return [W.intl.string(W.t.nQ9EdH), null];
                case V:
                case w:
                    return [W.intl.string(W.t.VWUn0d), null];
                case F:
                    if (Y) return [W.intl.string(W.t['s8+CFh']), null];
                    if (H) return [W.intl.string(W.t.JEEdqq), null];
                    return [W.intl.string(W.t['2Xhy9v']), null];
                case null == a:
                    return [W.intl.string(W.t.vwHPRk), null];
                default:
                    return [W.intl.string(W.t.ONovPz), null];
            }
        })();
    return ((0, f.ZP)(() => {
        x.Z.getDetectableGames();
    }),
    null == l)
        ? null
        : (0, i.jsxs)($, {
              onExpand: v,
              className: S ? K.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null !== (n = null == y ? void 0 : y.name) && void 0 !== n ? n : '',
                      null != u && u.verified
                          ? (0, i.jsx)(g.ua7, {
                                text: W.intl.string(W.t['4PJP5u']),
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
              hint: null != en ? en : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      G || F
                          ? (0, i.jsx)(g.pzj, {
                                size: 'xxs',
                                color: F ? g.TVs.colors.TEXT_MUTED.css : Y ? g.TVs.colors.TEXT_POSITIVE.css : g.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, i.jsx)('div', { className: K.playingDot }),
                      (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: W.intl.string(W.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, i.jsx)(ei, { game: l }),
              'aria-label': W.intl.string(W.t['87O5GB']),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => et(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: h || p,
                      disabled: B || M || V || w,
                      onChange: (e, t) => Z(e, e, t)
                  })
              }),
              children: [
                  (0, i.jsx)(Q, {
                      title: W.intl.string(W.t['7BlVIi']),
                      description: W.intl.string(W.t.ndgADA),
                      hint: P ? void 0 : W.intl.string(W.t.cAFVsL),
                      'aria-label': W.intl.string(W.t['7BlVIi']),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.rsf, {
                                  checked: h,
                                  disabled: R || !P,
                                  onChange: (e, t) => Z(p, e, t)
                              }),
                              (0, i.jsx)('div', { className: K.emptySpacer })
                          ]
                      })
                  }),
                  (0, i.jsx)(Q, {
                      title: W.intl.string(W.t.BfFpW1),
                      description: W.intl.string(W.t.OzInYm),
                      hint: D ? void 0 : W.intl.string(W.t['3sYHXl']),
                      'aria-label': W.intl.string(W.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.rsf, {
                                  checked: p,
                                  disabled: A || !D,
                                  onChange: (e, t) => Z(e, h, t)
                              }),
                              (0, i.jsx)('div', { className: K.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function ei(e) {
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
function es(e) {
    let { rawGame: t, legacySupportDisabled: n } = e,
        l = (0, m.cj)([j.ZP, L.Z, k.Z], () => (0, j.FZ)(t, [j.ZP, L.Z, k.Z])),
        { enabledLegacy: r, enabledOOP: a } = (0, m.cj)([L.Z, k.Z], () => (0, j.b6)(t, !1, [L.Z, k.Z]), [t]),
        [o, c] = s.useState(r);
    s.useEffect(() => {
        c(r);
    }, [r]);
    let d = (e, t) => {
        et(t), x.Z.toggleOverlay(l, e, a), c(e);
    };
    return (0, i.jsx)(Q, {
        title: t.name,
        icon: (0, i.jsx)(ei, { game: l }),
        'aria-label': W.intl.format(W.t.hvPYsL, { gameName: l.name }).toString(),
        action: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.rsf, {
                    checked: o,
                    disabled: n,
                    onChange: (e, t) => d(e, t)
                }),
                (0, i.jsx)('div', { className: K.emptySpacer })
            ]
        })
    });
}
function el(e) {
    let [t, n] = s.useState(!1),
        { legacyEnabled: l, oopEnabled: r } = (0, m.cj)([O.Z], () => O.Z.getGlobalEnabledStatus()),
        a = (0, m.Wu)([j.ZP], () => j.ZP.getGamesSeen(!0)),
        o = (0, I.$1)(),
        c = (e, t) => {
            et(t),
                p.Z.setEnabled(e, r),
                U.default.track(Y.rMx.OVERLAY_TOGGLED, {
                    enabled: e,
                    setting_type: 'overlay toggled - legacy'
                });
        },
        d = s.useMemo(() => (H.iP ? (o ? W.intl.string(W.t.r9jEV1) : W.intl.string(W.t.OzInYm)) : W.intl.string(W.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, i.jsx)(Q, {
              title: W.intl.string(W.t.BfFpW1),
              description: d,
              'aria-label': W.intl.string(W.t.BfFpW1),
              className: K.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.rsf, {
                          checked: l,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      H.iP && (0, i.jsx)('div', { className: K.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)($, {
              onExpand: n,
              className: t ? K.expandedContainer : void 0,
              title: W.intl.string(W.t.BfFpW1),
              description: d,
              'aria-label': W.intl.string(W.t.BfFpW1),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => et(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: l,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: K.subtitleContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: W.intl.string(W.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(g.zJl, {
                      className: K.scroller,
                      children: a.map((e) =>
                          (0, i.jsx)(
                              es,
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
function er(e) {
    let { rawGame: t, oopSupportDisabled: n } = e,
        l = (0, m.cj)([j.ZP, L.Z, k.Z], () => (0, j.FZ)(t, [j.ZP, L.Z, k.Z])),
        { enabledLegacy: r, enabledOOP: a } = (0, m.cj)([L.Z, k.Z], () => (0, j.b6)(t, !0, [L.Z, k.Z]), [t]),
        [o, c] = s.useState(a),
        d = (e, t) => {
            et(t), x.Z.toggleOverlay(l, r, e), c(e);
        };
    return (
        s.useEffect(() => {
            c(a);
        }, [a]),
        (0, i.jsx)(Q, {
            title: t.name,
            icon: (0, i.jsx)(ei, { game: l }),
            'aria-label': W.intl.format(W.t.nByTd3, { gameName: l.name }).toString(),
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.rsf, {
                        checked: o,
                        disabled: n,
                        onChange: (e, t) => d(e, t)
                    }),
                    (0, i.jsx)('div', { className: K.emptySpacer })
                ]
            })
        })
    );
}
function ea(e) {
    let [t, n] = s.useState(!1),
        { oopEnabled: l, legacyEnabled: r } = (0, m.cj)([O.Z], () => O.Z.getGlobalEnabledStatus()),
        a = !(0, z.VS)(),
        o = (0, m.Wu)([j.ZP], () => j.ZP.getGamesSeen(!0)),
        c = (e, t) => {
            et(t),
                p.Z.setEnabled(r, e),
                U.default.track(Y.rMx.OVERLAY_TOGGLED, {
                    enabled: e,
                    setting_type: 'overlay toggled - oop'
                });
        },
        d = s.useMemo(() => (H.iP ? (a ? W.intl.string(W.t.C7bLTU) : W.intl.string(W.t.ndgADA)) : W.intl.string(W.t.m7X4a2)), [a]);
    return 0 === o.length
        ? (0, i.jsx)(Q, {
              title: W.intl.string(W.t['7BlVIi']),
              description: d,
              'aria-label': W.intl.string(W.t['7BlVIi']),
              className: K.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.rsf, {
                          checked: l,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      H.iP && (0, i.jsx)('div', { className: K.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)($, {
              onExpand: n,
              className: t ? K.expandedContainer : void 0,
              title: W.intl.string(W.t['7BlVIi']),
              description: d,
              'aria-label': W.intl.string(W.t['7BlVIi']),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => et(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: l,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: K.subtitleContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: W.intl.string(W.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(g.zJl, {
                      className: K.scroller,
                      children: o.map((e) =>
                          (0, i.jsx)(
                              er,
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
function eo() {
    let e = (0, m.e7)([M.ZP], () => M.ZP.getOverlayKeybind()),
        t = (0, I.$1)(),
        n = !(0, z.VS)(),
        [s, l] = (0, m.Wu)([j.ZP], () => [j.ZP.canShowAdminWarning, j.ZP.getVisibleGame()], []),
        r = null != l && l.elevated && s;
    return (0, i.jsx)(J, {
        children: (0, i.jsxs)('div', {
            className: K.keybindMainContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: K.keybindContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: K.keybindHeaderContainer,
                            children: (0, i.jsx)(g.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: W.intl.string(W.t.VsAZcH)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: K.keybindRecorderContainer,
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
                        className: K.keybindAdminWarning,
                        children: W.intl.string(W.t.NsowVV)
                    })
            ]
        })
    });
}
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new Z.Z({
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
        user: new y.Z({
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
function ed(e) {
    let { className: t, showHeader: n } = e,
        {
            avatarSizeMode: l,
            displayNameMode: r,
            displayUserMode: a,
            notificationPositionMode: o,
            textChatNotificationMode: c,
            disableClickableRegions: d,
            shouldShowKeybindIndicators: u
        } = (0, m.cj)([w.Z], () => ({
            avatarSizeMode: w.Z.getAvatarSizeMode(),
            displayNameMode: w.Z.getDisplayNameMode(),
            displayUserMode: w.Z.getDisplayUserMode(),
            notificationPositionMode: w.Z.getNotificationPositionMode(),
            textChatNotificationMode: w.Z.getTextChatNotificationMode(),
            disableClickableRegions: w.Z.disableClickableRegions,
            shouldShowKeybindIndicators: w.Z.showKeybindIndicators
        })),
        x = (0, m.e7)([B.default], () => B.default.getCurrentUser()),
        _ = (0, A.Z)({ location: 'overlay_user_settings' });
    (0, f.ZP)(() => {
        if (G.isPlatformEmbedded) return (0, v.Ky)(), v.P7;
    }),
        (function () {
            let e = q(X);
            h().isEqual(e, X) || (U.default.track(Y.rMx.OVERLAY_SETTINGS_UPDATED, e), (X = e));
        })();
    let [E] = s.useState(() => [ec(W.intl.string(W.t.C0ZDvr), !0, !1), ec(W.intl.string(W.t.iOtj8P), !1, !1, !0), ec(W.intl.string(W.t['0oqNgI']), !1, !0)]);
    return null == x
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(g.hjN, {
                      tag: g.RB0.H1,
                      title: W.intl.string(W.t['9cb1U1']),
                      children: [
                          (0, i.jsxs)('div', {
                              className: K.overlayEnabledSettingsContainer,
                              children: [(0, i.jsx)(en, {}), (0, i.jsx)(ea, {}), (0, i.jsx)(el, {})]
                          }),
                          (0, i.jsx)('div', { className: K.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(g.hjN, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: K.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(eo, {}),
                                  _ &&
                                      (0, i.jsx)(J, {
                                          children: (0, i.jsx)(g.j7V, {
                                              value: u,
                                              onChange: (e) => p.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: W.intl.string(W.t.XZTl9v)
                                          })
                                      }),
                                  (0, i.jsxs)(J, {
                                      children: [
                                          (0, i.jsx)(g.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: W.intl.string(W.t.Fy5kPj)
                                          }),
                                          (0, i.jsx)(g.j7V, {
                                              value: o !== Y._vf.DISABLED && c === Y.Ypu.ENABLED,
                                              disabled: o === Y._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = Y.Ypu;
                                                  p.Z.setTextChatNotificationMode(c === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)(J, {
                                      children: [
                                          (0, i.jsx)(g.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: W.intl.string(W.t['+eFXxs'])
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
                          (0, i.jsx)('div', { className: K.settingsDivider })
                      ]
                  }),
                  (0, i.jsx)(g.hjN, {
                      title: 'Voice Widget',
                      children: (0, i.jsxs)('div', {
                          className: K.voiceSettingsContainer,
                          children: [
                              (0, i.jsx)(J, {
                                  title: W.intl.string(W.t.dnvZSk),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: W.intl.string(W.t.YcOxtr),
                                              value: Y.ipw.LARGE
                                          },
                                          {
                                              label: W.intl.string(W.t.BKIKq6),
                                              value: Y.ipw.SMALL
                                          }
                                      ],
                                      className: K.select,
                                      onChange: (e) => p.Z.setAvatarSizeMode(e),
                                      value: l
                                  })
                              }),
                              (0, i.jsx)(J, {
                                  title: W.intl.string(W.t.J0dpcH),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: W.intl.string(W.t.nBmDra),
                                              value: Y.wC$.ALWAYS
                                          },
                                          {
                                              label: W.intl.string(W.t['2OvIZW']),
                                              value: Y.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: W.intl.string(W.t.ekjlPD),
                                              value: Y.wC$.NEVER
                                          }
                                      ],
                                      className: K.select,
                                      onChange: (e) => p.Z.setDisplayNameMode(e),
                                      value: r
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: K.widgetContainer,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: K.voiceWidgetContainer,
                                          children: (0, i.jsx)(R.k, {
                                              id: 'voice-widget',
                                              title: W.intl.string(W.t.KNJ6Vl),
                                              channel: (0, P.kt)({
                                                  id: '123',
                                                  name: 'Test Channel',
                                                  type: Y.d4z.GUILD_VOICE,
                                                  guild_id: '456'
                                              }),
                                              sortedVoiceStates: [
                                                  (function (e) {
                                                      let t = ec(e.username);
                                                      return (t.user = e), t;
                                                  })(x),
                                                  ...E
                                              ],
                                              displayNameMode: r,
                                              displayUserMode: a,
                                              avatarSizeMode: l,
                                              widget: Y.Odu.VOICE,
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
                                          className: K.widgetHeaderContainer,
                                          children: [
                                              (0, i.jsx)(D.PI, { children: W.intl.string(W.t.KNJ6Vl) }),
                                              (0, i.jsx)(D.ls, {}),
                                              (0, i.jsx)(D.RT, {
                                                  id: 'voice-widget',
                                                  pinned: !0
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, i.jsx)(J, {
                                  title: W.intl.string(W.t.swsWWF),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: W.intl.string(W.t.nBmDra),
                                              value: Y.OYC.ALWAYS
                                          },
                                          {
                                              label: W.intl.string(W.t['2OvIZW']),
                                              value: Y.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: K.select,
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
