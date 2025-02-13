n.d(t, { Z: () => eg }), n(47120);
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
    I = n(493773),
    f = n(887278),
    T = n(835473),
    S = n(442550),
    j = n(594190),
    v = n(320724),
    b = n(297700),
    A = n(444295),
    O = n(32300),
    R = n(809357),
    D = n(371651),
    P = n(243487),
    y = n(430561),
    Z = n(131704),
    L = n(598077),
    k = n(189786),
    B = n(77498),
    M = n(355863),
    V = n(283595),
    w = n(594174),
    U = n(556296),
    G = n(808506),
    F = n(237997),
    z = n(626135),
    Y = n(358085),
    H = n(13140),
    W = n(145597),
    K = n(981631),
    X = n(987650),
    q = n(501787),
    J = n(388032),
    Q = n(775254);
let $ = ee(null);
function ee(e) {
    var t;
    let n = F.Z.getNotificationPositionMode(),
        i = n !== K._vf.DISABLED,
        s = U.ZP.getOverlayKeybind(),
        l = U.ZP.getOverlayChatKeybind();
    return {
        enabled: G.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: F.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, H.BB)(s.shortcut) : null,
        text_activation_hotkey: null != l ? (0, H.BB)(l.shortcut) : null,
        text_opacity_slider: F.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : G.Z.enabled
    };
}
function et(e) {
    let { children: t, title: n } = e;
    return (0, i.jsxs)(g.xJW, {
        children: [
            null != n &&
                (0, i.jsx)(g.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: Q.formItemTitle,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: Q.rowContainer,
                children: t
            })
        ]
    });
}
function en(e) {
    let { header: t, icon: n, title: s, description: l, action: a, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(g.kL8, {
        'aria-label': d,
        onClick: c,
        className: r()(Q.groupContainer, u),
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: Q.groupHeader,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: Q.groupContent,
                children: [
                    null != n &&
                        (0, i.jsx)('div', {
                            className: Q.groupIcon,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: Q.groupMainContent,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: Q.groupTitle,
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
                        className: Q.groupAction,
                        children: a
                    })
                ]
            })
        ]
    });
}
function ei(e) {
    let { children: t, className: n, onExpand: l, ...a } = e,
        [o, c] = s.useState(!1),
        d = (e) => {
            c(e), null == l || l(e);
        };
    return (0, i.jsx)(g.zF9, {
        className: r()(Q.collapseable),
        collapsibleContent: (0, i.jsx)('div', {
            className: Q.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(en, {
                ...a,
                onClick: (e) => {
                    d(!o), null == t || t(e);
                },
                className: r()(Q.mainCollapseableContainer, n),
                action: (0, i.jsxs)('div', {
                    className: Q.groupCollapsedAction,
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
let es = new Set([C.mM.INITIALIZING, C.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, C.mM.WAITING_FOR_MODULE_TRACKING, C.mM.WAITING_FOR_OVERLAY_OPEN]),
    el = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function er(e) {
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
        a = (0, m.e7)([D.default], () => (null == l || null == r ? null : D.default.getTrackedGameByPid(r)), [l, r], o()),
        { enabledLegacy: c, enabledOOP: d } = (0, m.cj)(
            [B.Z, V.Z],
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
                return (0, j.b6)(l, !1, [B.Z, V.Z]);
            },
            [l, a]
        ),
        u = (0, m.e7)([j.ZP, B.Z, V.Z], () => (null == l ? null : (0, j.FZ)(l, [j.ZP, B.Z, V.Z])), [l], o()),
        [h, _] = s.useState(d),
        [p, E] = s.useState(c),
        [S, v] = s.useState(!1);
    s.useEffect(() => {
        _(d), E(c);
    }, [d, c]);
    let A = (0, f.$1)(),
        O = !(0, W.VS)(),
        { legacyEnabled: R, oopEnabled: P } = (0, m.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        [y] = (0, T.Z)([null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : void 0]),
        Z = (e, t, n) => {
            el(n), null != l && (x.Z.toggleOverlay(l, e, t), _(t), E(e));
        },
        L = A && O,
        k = !R && !P,
        M = !h && !R && p && !A,
        w = !p && !P && h && !O,
        U = (null == a ? void 0 : a.overlayMethod) === C.gl.Disabled,
        G = (null == a ? void 0 : a.state) === C.mM.OVERLAY_RENDERING && !U,
        F = (null == a ? void 0 : a.state) != null && es.has(a.state) && !U,
        z = (null == a ? void 0 : a.overlayMethod) === C.gl.OutOfProcess || (null == a ? void 0 : a.overlayMethod) === C.gl.OutOfProcessLimitedInteraction,
        Y = (null == a ? void 0 : a.overlayMethod) === C.gl.Hook,
        H = (null == a ? void 0 : a.state) === C.mM.OVERLAY_CRASHED || (null == a ? void 0 : a.state) === C.mM.OVERLAY_CRASHED_DISABLED,
        K = !h && !p,
        [X, q] = (() => {
            switch (!0) {
                case G && z:
                    return [
                        J.intl.format(J.t.hFVBIi, {
                            overlayMethod: J.intl.string(J.t.a3eXS0),
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
                case G && Y:
                    return [
                        J.intl.format(J.t.hFVBIi, {
                            overlayMethod: J.intl.string(J.t.bvlpDQ),
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
                                    return J.intl.string(J.t.mJmbeH);
                                case O:
                                    return J.intl.string(J.t.C7bLTU);
                                case !(null !== (e = null == a ? void 0 : a.oopEnabled) && void 0 !== e && e):
                                    return J.intl.string(J.t.WiY24u);
                                case !P:
                                    return J.intl.string(J.t.cAFVsL);
                                case !(null !== (t = null == a ? void 0 : a.supportsOutOfProcess) && void 0 !== t && t):
                                    return J.intl.string(J.t.XcGEcn);
                                default:
                                    return J.intl.string(J.t.bJXH2t);
                            }
                        })()
                    ];
                case H:
                    return [J.intl.string(J.t.OFC2a2), null];
                case L:
                    return [J.intl.string(J.t.m7X4a2), null];
                case k:
                    return [J.intl.string(J.t['9DUS5u']), null];
                case K:
                    return [J.intl.string(J.t.nQ9EdH), null];
                case M:
                case w:
                    return [J.intl.string(J.t.VWUn0d), null];
                case F:
                    if (z) return [J.intl.string(J.t['s8+CFh']), null];
                    if (Y) return [J.intl.string(J.t.JEEdqq), null];
                    return [J.intl.string(J.t['2Xhy9v']), null];
                case null == a:
                    return [J.intl.string(J.t.vwHPRk), null];
                default:
                    return [J.intl.string(J.t.ONovPz), null];
            }
        })();
    return ((0, I.ZP)(() => {
        x.Z.getDetectableGames();
    }),
    null == l)
        ? null
        : (0, i.jsxs)(ei, {
              onExpand: v,
              className: S ? Q.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null !== (n = null == y ? void 0 : y.name) && void 0 !== n ? n : '',
                      null != u && u.verified
                          ? (0, i.jsx)(g.ua7, {
                                text: J.intl.string(J.t['4PJP5u']),
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
              description: X,
              hint: null != q ? q : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      G || F
                          ? (0, i.jsx)(g.pzj, {
                                size: 'xxs',
                                color: F ? g.TVs.colors.TEXT_MUTED.css : z ? g.TVs.colors.TEXT_POSITIVE.css : g.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, i.jsx)('div', { className: Q.playingDot }),
                      (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: J.intl.string(J.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, i.jsx)(ea, { game: l }),
              'aria-label': J.intl.string(J.t['87O5GB']),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => el(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: h || p,
                      disabled: L || k || M || w,
                      onChange: (e, t) => Z(e, e, t)
                  })
              }),
              children: [
                  (0, i.jsx)(en, {
                      title: J.intl.string(J.t['7BlVIi']),
                      description: J.intl.string(J.t.ndgADA),
                      hint: P ? void 0 : J.intl.string(J.t.cAFVsL),
                      'aria-label': J.intl.string(J.t['7BlVIi']),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.rsf, {
                                  checked: h,
                                  disabled: O || !P,
                                  onChange: (e, t) => Z(p, e, t)
                              }),
                              (0, i.jsx)('div', { className: Q.emptySpacer })
                          ]
                      })
                  }),
                  (0, i.jsx)(en, {
                      title: J.intl.string(J.t.BfFpW1),
                      description: J.intl.string(J.t.OzInYm),
                      hint: R ? void 0 : J.intl.string(J.t['3sYHXl']),
                      'aria-label': J.intl.string(J.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.rsf, {
                                  checked: p,
                                  disabled: A || !R,
                                  onChange: (e, t) => Z(e, h, t)
                              }),
                              (0, i.jsx)('div', { className: Q.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function ea(e) {
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
function eo(e) {
    let { rawGame: t, legacySupportDisabled: n } = e,
        l = (0, m.cj)([j.ZP, B.Z, V.Z], () => (0, j.FZ)(t, [j.ZP, B.Z, V.Z])),
        { enabledLegacy: r, enabledOOP: a } = (0, m.cj)([B.Z, V.Z], () => (0, j.b6)(t, !1, [B.Z, V.Z]), [t]),
        [o, c] = s.useState(r);
    s.useEffect(() => {
        c(r);
    }, [r]);
    let d = (e, t) => {
        el(t), x.Z.toggleOverlay(l, e, a), c(e);
    };
    return (0, i.jsx)(en, {
        title: t.name,
        icon: (0, i.jsx)(ea, { game: l }),
        'aria-label': J.intl.format(J.t.hvPYsL, { gameName: l.name }).toString(),
        action: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.rsf, {
                    checked: o,
                    disabled: n,
                    onChange: (e, t) => d(e, t)
                }),
                (0, i.jsx)('div', { className: Q.emptySpacer })
            ]
        })
    });
}
function ec(e) {
    let [t, n] = s.useState(!1),
        { legacyEnabled: l, oopEnabled: r } = (0, m.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = (0, m.Wu)([j.ZP], () => j.ZP.getGamesSeen(!0)),
        o = (0, f.$1)(),
        c = (e, t) => {
            var n, i;
            el(t), p.Z.setEnabled(e, r), (0, A.ou)(e, A.AE.LEGACY, null !== (i = null === (n = j.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null);
        },
        d = s.useMemo(() => (X.iP ? (o ? J.intl.string(J.t.r9jEV1) : J.intl.string(J.t.OzInYm)) : J.intl.string(J.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, i.jsx)(en, {
              title: J.intl.string(J.t.BfFpW1),
              description: d,
              'aria-label': J.intl.string(J.t.BfFpW1),
              className: Q.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.rsf, {
                          checked: l,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      X.iP && (0, i.jsx)('div', { className: Q.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ei, {
              onExpand: n,
              className: t ? Q.expandedContainer : void 0,
              title: J.intl.string(J.t.BfFpW1),
              description: d,
              'aria-label': J.intl.string(J.t.BfFpW1),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => el(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: l,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: Q.subtitleContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: J.intl.string(J.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(g.zJl, {
                      className: Q.scroller,
                      children: a.map((e) =>
                          (0, i.jsx)(
                              eo,
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
function ed(e) {
    let { rawGame: t, oopSupportDisabled: n } = e,
        l = (0, m.cj)([j.ZP, B.Z, V.Z], () => (0, j.FZ)(t, [j.ZP, B.Z, V.Z])),
        { enabledLegacy: r, enabledOOP: a } = (0, m.cj)([B.Z, V.Z], () => (0, j.b6)(t, !0, [B.Z, V.Z]), [t]),
        [o, c] = s.useState(a),
        d = (e, t) => {
            el(t), x.Z.toggleOverlay(l, r, e), c(e);
        };
    return (
        s.useEffect(() => {
            c(a);
        }, [a]),
        (0, i.jsx)(en, {
            title: t.name,
            icon: (0, i.jsx)(ea, { game: l }),
            'aria-label': J.intl.format(J.t.nByTd3, { gameName: l.name }).toString(),
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.rsf, {
                        checked: o,
                        disabled: n,
                        onChange: (e, t) => d(e, t)
                    }),
                    (0, i.jsx)('div', { className: Q.emptySpacer })
                ]
            })
        })
    );
}
function eu(e) {
    let [t, n] = s.useState(!1),
        { oopEnabled: l, legacyEnabled: r } = (0, m.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = !(0, W.VS)(),
        o = (0, m.Wu)([j.ZP], () => j.ZP.getGamesSeen(!0)),
        c = (e, t) => {
            var n, i;
            el(t), p.Z.setEnabled(r, e), (0, A.ou)(e, A.AE.OOP, null !== (i = null === (n = j.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null);
        },
        d = s.useMemo(() => (X.iP ? (a ? J.intl.string(J.t.C7bLTU) : J.intl.string(J.t.ndgADA)) : J.intl.string(J.t.m7X4a2)), [a]);
    return 0 === o.length
        ? (0, i.jsx)(en, {
              title: J.intl.string(J.t['7BlVIi']),
              description: d,
              'aria-label': J.intl.string(J.t['7BlVIi']),
              className: Q.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.rsf, {
                          checked: l,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      X.iP && (0, i.jsx)('div', { className: Q.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ei, {
              onExpand: n,
              className: t ? Q.expandedContainer : void 0,
              title: J.intl.string(J.t['7BlVIi']),
              description: d,
              'aria-label': J.intl.string(J.t['7BlVIi']),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => el(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: l,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: Q.subtitleContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: J.intl.string(J.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(g.zJl, {
                      className: Q.scroller,
                      children: o.map((e) =>
                          (0, i.jsx)(
                              ed,
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
function eh() {
    let e = (0, m.e7)([U.ZP], () => U.ZP.getOverlayKeybind()),
        t = (0, f.$1)(),
        n = !(0, W.VS)(),
        [s, l] = (0, m.Wu)([j.ZP], () => [j.ZP.canShowAdminWarning, j.ZP.getVisibleGame()], []),
        r = null != l && l.elevated && s;
    return (0, i.jsx)(et, {
        children: (0, i.jsxs)('div', {
            className: Q.keybindMainContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: Q.keybindContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: Q.keybindHeaderContainer,
                            children: (0, i.jsx)(g.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: J.intl.string(J.t.VsAZcH)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: Q.keybindRecorderContainer,
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
                        className: Q.keybindAdminWarning,
                        children: J.intl.string(J.t.NsowVV)
                    })
            ]
        })
    });
}
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new k.Z({
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
        user: new L.Z({
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
function eg(e) {
    var t, n;
    let { className: l, showHeader: r } = e,
        {
            avatarSizeMode: a,
            displayNameMode: o,
            displayUserMode: c,
            notificationPositionMode: d,
            textChatNotificationMode: u,
            disableClickableRegions: x,
            shouldShowKeybindIndicators: _
        } = (0, m.cj)([F.Z], () => ({
            avatarSizeMode: F.Z.getAvatarSizeMode(),
            displayNameMode: F.Z.getDisplayNameMode(),
            displayUserMode: F.Z.getDisplayUserMode(),
            notificationPositionMode: F.Z.getNotificationPositionMode(),
            textChatNotificationMode: F.Z.getTextChatNotificationMode(),
            disableClickableRegions: F.Z.disableClickableRegions,
            shouldShowKeybindIndicators: F.Z.showKeybindIndicators
        })),
        E = (0, O.o4)('user_settings').overlayV3UI,
        C = (0, m.e7)([w.default], () => w.default.getCurrentUser()),
        N = (0, R.Z)({ location: 'overlay_user_settings' });
    (0, I.ZP)(() => {
        if (Y.isPlatformEmbedded) return (0, v.Ky)(), v.P7;
    }),
        (function () {
            let e = ee($);
            h().isEqual(e, $) || (z.default.track(K.rMx.OVERLAY_SETTINGS_UPDATED, e), ($ = e));
        })();
    let [f] = s.useState(() => [em(J.intl.string(J.t.C0ZDvr), !0, !1), em(J.intl.string(J.t.iOtj8P), !1, !1, !0), em(J.intl.string(J.t['0oqNgI']), !1, !0)]),
        T = (0, m.e7)([M.Z], () => M.Z.getWidgetsForLayout(q.OVERLAY_V3_LAYOUT_ID).find((e) => e.type === K.Odu.VOICE_V3));
    return null == C
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(g.hjN, {
                      tag: g.RB0.H1,
                      title: J.intl.string(J.t['9cb1U1']),
                      children: [
                          (0, i.jsxs)('div', {
                              className: Q.overlayEnabledSettingsContainer,
                              children: [(0, i.jsx)(er, {}), (0, i.jsx)(eu, {}), (0, i.jsx)(ec, {})]
                          }),
                          (0, i.jsx)('div', { className: Q.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(g.hjN, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: Q.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(eh, {}),
                                  N &&
                                      (0, i.jsx)(et, {
                                          children: (0, i.jsx)(g.j7V, {
                                              value: _,
                                              onChange: (e) => p.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: J.intl.string(J.t.XZTl9v)
                                          })
                                      }),
                                  (0, i.jsxs)(et, {
                                      children: [
                                          (0, i.jsx)(g.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: J.intl.string(J.t.Fy5kPj)
                                          }),
                                          (0, i.jsx)(g.j7V, {
                                              value: d !== K._vf.DISABLED && u === K.Ypu.ENABLED,
                                              disabled: d === K._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = K.Ypu;
                                                  p.Z.setTextChatNotificationMode(u === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)(et, {
                                      children: [
                                          (0, i.jsx)(g.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: J.intl.string(J.t['+eFXxs'])
                                          }),
                                          (0, i.jsx)(g.j7V, {
                                              value: !x,
                                              onChange: function () {
                                                  p.Z.setDisableClickableRegions(!x);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', { className: Q.settingsDivider })
                      ]
                  }),
                  (0, i.jsx)(g.hjN, {
                      title: 'Voice Widget',
                      children: (0, i.jsxs)('div', {
                          className: Q.voiceSettingsContainer,
                          children: [
                              (0, i.jsx)(et, {
                                  title: J.intl.string(J.t.dnvZSk),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: J.intl.string(J.t.YcOxtr),
                                              value: K.ipw.LARGE
                                          },
                                          {
                                              label: J.intl.string(J.t.BKIKq6),
                                              value: K.ipw.SMALL
                                          }
                                      ],
                                      className: Q.select,
                                      onChange: (e) => p.Z.setAvatarSizeMode(e),
                                      value: a
                                  })
                              }),
                              (0, i.jsx)(et, {
                                  title: J.intl.string(J.t.J0dpcH),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: J.intl.string(J.t.nBmDra),
                                              value: K.wC$.ALWAYS
                                          },
                                          {
                                              label: J.intl.string(J.t['2OvIZW']),
                                              value: K.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: J.intl.string(J.t.ekjlPD),
                                              value: K.wC$.NEVER
                                          }
                                      ],
                                      className: Q.select,
                                      onChange: (e) => p.Z.setDisplayNameMode(e),
                                      value: o
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: Q.widgetContainer,
                                  children:
                                      E &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', {
                                                  className: Q.voiceWidgetContainer,
                                                  children: (0, i.jsx)(P.k, {
                                                      id: 'voice-widget',
                                                      title: J.intl.string(J.t.KNJ6Vl),
                                                      channel: (0, Z.kt)({
                                                          id: '123',
                                                          name: 'Test Channel',
                                                          type: K.d4z.GUILD_VOICE,
                                                          guild_id: '456'
                                                      }),
                                                      sortedVoiceStates: [
                                                          (function (e) {
                                                              let t = em(e.username);
                                                              return (t.user = e), t;
                                                          })(C),
                                                          ...f
                                                      ],
                                                      displayNameMode: o,
                                                      displayUserMode: c,
                                                      avatarSizeMode: a,
                                                      widget: K.Odu.VOICE,
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
                                                  className: Q.widgetHeaderContainer,
                                                  children: [
                                                      (0, i.jsx)(y.PI, { children: J.intl.string(J.t.KNJ6Vl) }),
                                                      (0, i.jsx)(y.ls, {}),
                                                      (0, i.jsx)(y.RT, {
                                                          id: null !== (t = null == T ? void 0 : T.id) && void 0 !== t ? t : 'voice-widget',
                                                          pinned: null !== (n = null == T ? void 0 : T.pinned) && void 0 !== n && n
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                              }),
                              (0, i.jsx)(et, {
                                  title: J.intl.string(J.t.swsWWF),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: J.intl.string(J.t.nBmDra),
                                              value: K.OYC.ALWAYS
                                          },
                                          {
                                              label: J.intl.string(J.t['2OvIZW']),
                                              value: K.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: Q.select,
                                      onChange: (e) => p.Z.setDisplayUserMode(e),
                                      value: c
                                  })
                              })
                          ]
                      })
                  })
              ]
          });
}
