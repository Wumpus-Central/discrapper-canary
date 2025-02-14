n.d(t, { Z: () => ef }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(348327),
    o = n.n(a),
    c = n(512722),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    g = n(442837),
    h = n(704215),
    x = n(481060),
    _ = n(224706),
    p = n(660216),
    E = n(13245),
    C = n(825209),
    f = n(615287),
    T = n(593472),
    N = n(493773),
    S = n(887278),
    I = n(835473),
    b = n(442550),
    v = n(243778),
    j = n(594190),
    A = n(320724),
    O = n(297700),
    R = n(444295),
    P = n(32300),
    D = n(809357),
    y = n(371651),
    Z = n(243487),
    k = n(430561),
    L = n(131704),
    B = n(598077),
    M = n(189786),
    w = n(77498),
    V = n(355863),
    U = n(283595),
    G = n(594174),
    F = n(556296),
    H = n(808506),
    z = n(237997),
    Y = n(626135),
    W = n(358085),
    K = n(13140),
    q = n(145597),
    X = n(981631),
    J = n(921944),
    Q = n(987650),
    $ = n(501787),
    ee = n(388032),
    et = n(156643),
    en = n(131970),
    ei = n(730462);
let es = er(null);
function er(e) {
    var t;
    let n = z.Z.getNotificationPositionMode(),
        i = n !== X._vf.DISABLED,
        s = F.ZP.getOverlayKeybind(),
        r = F.ZP.getOverlayChatKeybind();
    return {
        enabled: H.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: z.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, K.BB)(s.shortcut) : null,
        text_activation_hotkey: null != r ? (0, K.BB)(r.shortcut) : null,
        text_opacity_slider: z.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : H.Z.enabled
    };
}
function el(e) {
    let { children: t, title: n } = e;
    return (0, i.jsxs)(x.xJW, {
        children: [
            null != n &&
                (0, i.jsx)(x.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: et.formItemTitle,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: et.rowContainer,
                children: t
            })
        ]
    });
}
function ea(e) {
    let { header: t, icon: n, title: s, description: r, action: a, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(x.kL8, {
        'aria-label': d,
        onClick: c,
        className: l()(et.groupContainer, u),
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: et.groupHeader,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: et.groupContent,
                children: [
                    null != n &&
                        (0, i.jsx)('div', {
                            className: et.groupIcon,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: et.groupMainContent,
                        children: [
                            (0, i.jsx)(x.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: et.groupTitle,
                                children: s
                            }),
                            null != r &&
                                (0, i.jsx)(x.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: r
                                }),
                            null != o &&
                                (0, i.jsx)(x.Text, {
                                    variant: 'text-xxs/medium',
                                    color: 'text-muted',
                                    children: o
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: et.groupAction,
                        children: a
                    })
                ]
            })
        ]
    });
}
function eo(e) {
    let { children: t, className: n, onExpand: r, ...a } = e,
        [o, c] = s.useState(!1),
        d = (e) => {
            c(e), null == r || r(e);
        };
    return (0, i.jsx)(x.zF9, {
        className: l()(et.collapseable),
        collapsibleContent: (0, i.jsx)('div', {
            className: et.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(ea, {
                ...a,
                onClick: (e) => {
                    d(!o), null == t || t(e);
                },
                className: l()(et.mainCollapseableContainer, n),
                action: (0, i.jsxs)('div', {
                    className: et.groupCollapsedAction,
                    children: [
                        a.action,
                        o
                            ? (0, i.jsx)(x.CJ0, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'var(--interactive-active)'
                              })
                            : (0, i.jsx)(x.Fbu, {
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
let ec = new Set([f.mM.INITIALIZING, f.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, f.mM.WAITING_FOR_MODULE_TRACKING, f.mM.WAITING_FOR_OVERLAY_OPEN]),
    ed = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eu(e) {
    var t, n;
    let r = (0, g.e7)(
            [j.ZP],
            () => {
                let e = j.ZP.getVisibleGame();
                return null == e ? null : e;
            },
            [],
            o()
        ),
        l = null == r ? void 0 : r.pid,
        a = (0, g.e7)([y.default], () => (null == r || null == l ? null : y.default.getTrackedGameByPid(l)), [r, l], o()),
        { enabledLegacy: c, enabledOOP: d } = (0, g.cj)(
            [w.Z, U.Z],
            () => {
                if (null == r && null == a)
                    return {
                        enabledLegacy: !1,
                        enabledOOP: !1
                    };
                if (null == r) {
                    var e, t;
                    return {
                        enabledLegacy: null !== (e = null == a ? void 0 : a.legacyEnabled) && void 0 !== e && e,
                        enabledOOP: null !== (t = null == a ? void 0 : a.oopEnabled) && void 0 !== t && t
                    };
                }
                return (0, j.b6)(r, !1, [w.Z, U.Z]);
            },
            [r, a]
        ),
        u = (0, g.e7)([j.ZP, w.Z, U.Z], () => (null == r ? null : (0, j.FZ)(r, [j.ZP, w.Z, U.Z])), [r], o()),
        [m, h] = s.useState(d),
        [p, E] = s.useState(c),
        [C, b] = s.useState(!1);
    s.useEffect(() => {
        h(d), E(c);
    }, [d, c]);
    let v = (0, S.$1)(),
        A = !(0, q.VS)(),
        { legacyEnabled: R, oopEnabled: P } = (0, g.cj)([y.default], () => y.default.getGlobalEnabledStatus()),
        [D] = (0, I.Z)([null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : void 0]),
        Z = (e, t, n) => {
            ed(n), null != r && (_.Z.toggleOverlay(r, e, t), h(t), E(e));
        },
        k = v && A,
        L = !R && !P,
        B = !m && !R && p && !v,
        M = !p && !P && m && !A,
        V = (null == a ? void 0 : a.overlayMethod) === f.gl.Disabled,
        G = (null == a ? void 0 : a.state) === f.mM.OVERLAY_RENDERING && !V,
        F = (null == a ? void 0 : a.state) != null && ec.has(a.state) && !V,
        H = (null == a ? void 0 : a.overlayMethod) === f.gl.OutOfProcess || (null == a ? void 0 : a.overlayMethod) === f.gl.OutOfProcessLimitedInteraction,
        z = (null == a ? void 0 : a.overlayMethod) === f.gl.Hook,
        Y = (null == a ? void 0 : a.state) === f.mM.OVERLAY_CRASHED || (null == a ? void 0 : a.state) === f.mM.OVERLAY_CRASHED_DISABLED,
        W = !m && !p,
        [K, X] = (() => {
            switch (!0) {
                case G && H:
                    return [
                        ee.intl.format(ee.t.hFVBIi, {
                            overlayMethod: ee.intl.string(ee.t.a3eXS0),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    x.Text,
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
                case G && z:
                    return [
                        ee.intl.format(ee.t.hFVBIi, {
                            overlayMethod: ee.intl.string(ee.t.bvlpDQ),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    x.Text,
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
                                case (null == a ? void 0 : a.fullscreenType) !== T.Jx.BORDERLESS_FULLSCREEN:
                                    return ee.intl.string(ee.t.mJmbeH);
                                case A:
                                    return ee.intl.string(ee.t.C7bLTU);
                                case !(null !== (e = null == a ? void 0 : a.oopEnabled) && void 0 !== e && e):
                                    return ee.intl.string(ee.t.WiY24u);
                                case !P:
                                    return ee.intl.string(ee.t.cAFVsL);
                                case !(null !== (t = null == a ? void 0 : a.supportsOutOfProcess) && void 0 !== t && t):
                                    return ee.intl.string(ee.t.XcGEcn);
                                default:
                                    return ee.intl.string(ee.t.bJXH2t);
                            }
                        })()
                    ];
                case Y:
                    return [ee.intl.string(ee.t.OFC2a2), null];
                case k:
                    return [ee.intl.string(ee.t.m7X4a2), null];
                case L:
                    return [ee.intl.string(ee.t['9DUS5u']), null];
                case W:
                    return [ee.intl.string(ee.t.nQ9EdH), null];
                case B:
                case M:
                    return [ee.intl.string(ee.t.VWUn0d), null];
                case F:
                    if (H) return [ee.intl.string(ee.t['s8+CFh']), null];
                    if (z) return [ee.intl.string(ee.t.JEEdqq), null];
                    return [ee.intl.string(ee.t['2Xhy9v']), null];
                case null == a:
                    return [ee.intl.string(ee.t.vwHPRk), null];
                default:
                    return [ee.intl.string(ee.t.ONovPz), null];
            }
        })();
    return ((0, N.ZP)(() => {
        _.Z.getDetectableGames();
    }),
    null == r)
        ? null
        : (0, i.jsxs)(eo, {
              onExpand: b,
              className: C ? et.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null !== (n = null == D ? void 0 : D.name) && void 0 !== n ? n : '',
                      null != u && u.verified
                          ? (0, i.jsx)(x.ua7, {
                                text: ee.intl.string(ee.t['4PJP5u']),
                                children: (e) =>
                                    (0, i.jsx)(O.Z, {
                                        size: 16,
                                        color: x.TVs.colors.BG_BRAND.css,
                                        ...e,
                                        children: (0, i.jsx)(x.kmB, {
                                            size: 'custom',
                                            width: 16,
                                            height: 16,
                                            color: x.TVs.colors.WHITE.css
                                        })
                                    })
                            })
                          : null
                  ]
              }),
              description: K,
              hint: null != X ? X : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      G || F
                          ? (0, i.jsx)(x.pzj, {
                                size: 'xxs',
                                color: F ? x.TVs.colors.TEXT_MUTED.css : H ? x.TVs.colors.TEXT_POSITIVE.css : x.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, i.jsx)('div', { className: et.playingDot }),
                      (0, i.jsx)(x.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: ee.intl.string(ee.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, i.jsx)(em, { game: r }),
              'aria-label': ee.intl.string(ee.t['87O5GB']),
              action: (0, i.jsx)(x.P3F, {
                  onClick: (e) => ed(e),
                  children: (0, i.jsx)(x.rsf, {
                      checked: m || p,
                      disabled: k || L || B || M,
                      onChange: (e, t) => Z(e, e, t)
                  })
              }),
              children: [
                  (0, i.jsx)(ea, {
                      title: ee.intl.string(ee.t['7BlVIi']),
                      description: ee.intl.string(ee.t.ndgADA),
                      hint: P ? void 0 : ee.intl.string(ee.t.cAFVsL),
                      'aria-label': ee.intl.string(ee.t['7BlVIi']),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.rsf, {
                                  checked: m,
                                  disabled: A || !P,
                                  onChange: (e, t) => Z(p, e, t)
                              }),
                              (0, i.jsx)('div', { className: et.emptySpacer })
                          ]
                      })
                  }),
                  (0, i.jsx)(ea, {
                      title: ee.intl.string(ee.t.BfFpW1),
                      description: ee.intl.string(ee.t.OzInYm),
                      hint: R ? void 0 : ee.intl.string(ee.t['3sYHXl']),
                      'aria-label': ee.intl.string(ee.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.rsf, {
                                  checked: p,
                                  disabled: v || !R,
                                  onChange: (e, t) => Z(e, m, t)
                              }),
                              (0, i.jsx)('div', { className: et.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function em(e) {
    var t, n;
    let { game: s } = e,
        [r] = (0, I.Z)([null == s ? void 0 : s.id], !0),
        l = null !== (t = null == r ? void 0 : r.getIconURL(32)) && void 0 !== t ? t : void 0;
    return (0, i.jsx)(b.f, {
        src: l,
        size: 32,
        showTooltip: !1,
        alt: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : ''
    });
}
function eg(e) {
    let { rawGame: t, legacySupportDisabled: n } = e,
        r = (0, g.cj)([j.ZP, w.Z, U.Z], () => (0, j.FZ)(t, [j.ZP, w.Z, U.Z])),
        { enabledLegacy: l, enabledOOP: a } = (0, g.cj)([w.Z, U.Z], () => (0, j.b6)(t, !1, [w.Z, U.Z]), [t]),
        [o, c] = s.useState(l);
    s.useEffect(() => {
        c(l);
    }, [l]);
    let d = (e, t) => {
        ed(t), _.Z.toggleOverlay(r, e, a), c(e);
    };
    return (0, i.jsx)(ea, {
        title: t.name,
        icon: (0, i.jsx)(em, { game: r }),
        'aria-label': ee.intl.format(ee.t.hvPYsL, { gameName: r.name }).toString(),
        action: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.rsf, {
                    checked: o,
                    disabled: n,
                    onChange: (e, t) => d(e, t)
                }),
                (0, i.jsx)('div', { className: et.emptySpacer })
            ]
        })
    });
}
function eh(e) {
    let [t, n] = s.useState(!1),
        { legacyEnabled: r, oopEnabled: l } = (0, g.cj)([y.default], () => y.default.getGlobalEnabledStatus()),
        a = (0, g.Wu)([j.ZP], () => j.ZP.getGamesSeen(!0)),
        o = (0, S.$1)(),
        c = (e, t) => {
            var n, i;
            ed(t), E.Z.setEnabled(e, l), (0, R.ou)(e, R.AE.LEGACY, null !== (i = null === (n = j.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null);
        },
        d = s.useMemo(() => (Q.iP ? (o ? ee.intl.string(ee.t.r9jEV1) : ee.intl.string(ee.t.OzInYm)) : ee.intl.string(ee.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, i.jsx)(ea, {
              title: ee.intl.string(ee.t.BfFpW1),
              description: d,
              'aria-label': ee.intl.string(ee.t.BfFpW1),
              className: et.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.rsf, {
                          checked: r,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      Q.iP && (0, i.jsx)('div', { className: et.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(eo, {
              onExpand: n,
              className: t ? et.expandedContainer : void 0,
              title: ee.intl.string(ee.t.BfFpW1),
              description: d,
              'aria-label': ee.intl.string(ee.t.BfFpW1),
              action: (0, i.jsx)(x.P3F, {
                  onClick: (e) => ed(e),
                  children: (0, i.jsx)(x.rsf, {
                      checked: r,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: et.subtitleContainer,
                      children: (0, i.jsx)(x.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ee.intl.string(ee.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(x.zJl, {
                      className: et.scroller,
                      children: a.map((e) =>
                          (0, i.jsx)(
                              eg,
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
function ex(e) {
    let { rawGame: t, oopSupportDisabled: n } = e,
        r = (0, g.cj)([j.ZP, w.Z, U.Z], () => (0, j.FZ)(t, [j.ZP, w.Z, U.Z])),
        { enabledLegacy: l, enabledOOP: a } = (0, g.cj)([w.Z, U.Z], () => (0, j.b6)(t, !0, [w.Z, U.Z]), [t]),
        [o, c] = s.useState(a),
        d = (e, t) => {
            ed(t), _.Z.toggleOverlay(r, l, e), c(e);
        };
    return (
        s.useEffect(() => {
            c(a);
        }, [a]),
        (0, i.jsx)(ea, {
            title: t.name,
            icon: (0, i.jsx)(em, { game: r }),
            'aria-label': ee.intl.format(ee.t.nByTd3, { gameName: r.name }).toString(),
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.rsf, {
                        checked: o,
                        disabled: n,
                        onChange: (e, t) => d(e, t)
                    }),
                    (0, i.jsx)('div', { className: et.emptySpacer })
                ]
            })
        })
    );
}
function e_(e) {
    let [t, n] = s.useState(!1),
        { oopEnabled: r, legacyEnabled: l } = (0, g.cj)([y.default], () => y.default.getGlobalEnabledStatus()),
        a = !(0, q.VS)(),
        o = (0, g.Wu)([j.ZP], () => j.ZP.getGamesSeen(!0)),
        c = (e, t) => {
            var n, i;
            ed(t), E.Z.setEnabled(l, e), (0, R.ou)(e, R.AE.OOP, null !== (i = null === (n = j.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null);
        },
        d = s.useMemo(() => (Q.iP ? (a ? ee.intl.string(ee.t.C7bLTU) : ee.intl.string(ee.t.ndgADA)) : ee.intl.string(ee.t.m7X4a2)), [a]);
    return 0 === o.length
        ? (0, i.jsx)(ea, {
              title: ee.intl.string(ee.t['7BlVIi']),
              description: d,
              'aria-label': ee.intl.string(ee.t['7BlVIi']),
              className: et.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.rsf, {
                          checked: r,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      Q.iP && (0, i.jsx)('div', { className: et.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(eo, {
              onExpand: n,
              className: t ? et.expandedContainer : void 0,
              title: ee.intl.string(ee.t['7BlVIi']),
              description: d,
              'aria-label': ee.intl.string(ee.t['7BlVIi']),
              action: (0, i.jsx)(x.P3F, {
                  onClick: (e) => ed(e),
                  children: (0, i.jsx)(x.rsf, {
                      checked: r,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: et.subtitleContainer,
                      children: (0, i.jsx)(x.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ee.intl.string(ee.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(x.zJl, {
                      className: et.scroller,
                      children: o.map((e) =>
                          (0, i.jsx)(
                              ex,
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
function ep() {
    let e = (0, g.e7)([F.ZP], () => F.ZP.getOverlayKeybind()),
        t = (0, S.$1)(),
        n = !(0, q.VS)(),
        [s, r] = (0, g.Wu)([j.ZP], () => [j.ZP.canShowAdminWarning, j.ZP.getVisibleGame()], []),
        l = null != r && r.elevated && s;
    return (0, i.jsx)(el, {
        children: (0, i.jsxs)('div', {
            className: et.keybindMainContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: et.keybindContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: et.keybindHeaderContainer,
                            children: (0, i.jsx)(x.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: ee.intl.string(ee.t.VsAZcH)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: et.keybindRecorderContainer,
                            children: (0, i.jsx)(C.Z, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    d()(null != e, 'Keybind should never be undefined'),
                                        p.Z.setKeybind({
                                            ...e,
                                            shortcut: t
                                        });
                                }
                            })
                        })
                    ]
                }),
                l &&
                    (0, i.jsx)(x.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-warning',
                        className: et.keybindAdminWarning,
                        children: ee.intl.string(ee.t.NsowVV)
                    })
            ]
        })
    });
}
function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new M.Z({
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
        user: new B.Z({
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
function eC() {
    let [e, t] = (0, v.US)([h.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(J.L.DISMISS);
        };
    return ((0, N.ZP)(() => () => {
        t(J.L.AUTO_DISMISS);
    }),
    e !== h.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)('div', {
              className: et.overlaySettingsNux,
              children: [
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)('img', {
                          src: en.Z,
                          alt: ee.intl.string(ee.t.mdXZh4),
                          className: et.nuxFirstImage
                      })
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                          className: et.mainTitleContainer,
                          children: [
                              (0, i.jsx)(x.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: ee.intl.string(ee.t.jzjJQk)
                              }),
                              (0, i.jsx)(x.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: ee.intl.string(ee.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)('img', {
                          src: ei.Z,
                          alt: ee.intl.string(ee.t.mdXZh4),
                          className: et.nuxUserSettingsImage
                      })
                  }),
                  (0, i.jsx)(x.zxk, {
                      className: et.closeCircleButton,
                      onClick: () => n(),
                      children: ee.intl.string(ee.t.Q26diI)
                  }),
                  (0, i.jsx)('div', { className: et.nuxDivider })
              ]
          });
}
function ef(e) {
    var t, n;
    let { className: r, showHeader: l } = e,
        {
            avatarSizeMode: a,
            displayNameMode: o,
            displayUserMode: c,
            notificationPositionMode: d,
            textChatNotificationMode: u,
            disableClickableRegions: h,
            shouldShowKeybindIndicators: _
        } = (0, g.cj)([z.Z], () => ({
            avatarSizeMode: z.Z.getAvatarSizeMode(),
            displayNameMode: z.Z.getDisplayNameMode(),
            displayUserMode: z.Z.getDisplayUserMode(),
            notificationPositionMode: z.Z.getNotificationPositionMode(),
            textChatNotificationMode: z.Z.getTextChatNotificationMode(),
            disableClickableRegions: z.Z.disableClickableRegions,
            shouldShowKeybindIndicators: z.Z.showKeybindIndicators
        })),
        p = (0, P.o4)('user_settings').overlayV3UI,
        C = (0, g.e7)([G.default], () => G.default.getCurrentUser()),
        f = (0, D.Z)({ location: 'overlay_user_settings' });
    (0, N.ZP)(() => {
        if (W.isPlatformEmbedded) return (0, A.Ky)(), A.P7;
    }),
        (function () {
            let e = er(es);
            m().isEqual(e, es) || (Y.default.track(X.rMx.OVERLAY_SETTINGS_UPDATED, e), (es = e));
        })();
    let [T] = s.useState(() => [eE(ee.intl.string(ee.t.C0ZDvr), !0, !1), eE(ee.intl.string(ee.t.iOtj8P), !1, !1, !0), eE(ee.intl.string(ee.t['0oqNgI']), !1, !0)]),
        S = (0, g.e7)([V.Z], () => V.Z.getWidgetsForLayout($.OVERLAY_V3_LAYOUT_ID).find((e) => e.type === X.Odu.VOICE_V3));
    return null == C
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(x.hjN, {
                      tag: x.RB0.H1,
                      title: ee.intl.string(ee.t['9cb1U1']),
                      children: [
                          p ? (0, i.jsx)(eC, {}) : null,
                          (0, i.jsxs)('div', {
                              className: et.overlayEnabledSettingsContainer,
                              children: [(0, i.jsx)(eu, {}), (0, i.jsx)(e_, {}), (0, i.jsx)(eh, {})]
                          }),
                          (0, i.jsx)('div', { className: et.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(x.hjN, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: et.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(ep, {}),
                                  f &&
                                      (0, i.jsx)(el, {
                                          children: (0, i.jsx)(x.j7V, {
                                              value: _,
                                              onChange: (e) => E.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: ee.intl.string(ee.t.XZTl9v)
                                          })
                                      }),
                                  (0, i.jsxs)(el, {
                                      children: [
                                          (0, i.jsx)(x.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: ee.intl.string(ee.t.Fy5kPj)
                                          }),
                                          (0, i.jsx)(x.j7V, {
                                              value: d !== X._vf.DISABLED && u === X.Ypu.ENABLED,
                                              disabled: d === X._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = X.Ypu;
                                                  E.Z.setTextChatNotificationMode(u === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)(el, {
                                      children: [
                                          (0, i.jsx)(x.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: ee.intl.string(ee.t['+eFXxs'])
                                          }),
                                          (0, i.jsx)(x.j7V, {
                                              value: !h,
                                              onChange: function () {
                                                  E.Z.setDisableClickableRegions(!h);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', { className: et.settingsDivider })
                      ]
                  }),
                  (0, i.jsx)(x.hjN, {
                      title: 'Voice Widget',
                      children: (0, i.jsxs)('div', {
                          className: et.voiceSettingsContainer,
                          children: [
                              (0, i.jsx)(el, {
                                  title: ee.intl.string(ee.t.dnvZSk),
                                  children: (0, i.jsx)(x.q4e, {
                                      options: [
                                          {
                                              label: ee.intl.string(ee.t.YcOxtr),
                                              value: X.ipw.LARGE
                                          },
                                          {
                                              label: ee.intl.string(ee.t.BKIKq6),
                                              value: X.ipw.SMALL
                                          }
                                      ],
                                      className: et.select,
                                      onChange: (e) => E.Z.setAvatarSizeMode(e),
                                      value: a
                                  })
                              }),
                              (0, i.jsx)(el, {
                                  title: ee.intl.string(ee.t.J0dpcH),
                                  children: (0, i.jsx)(x.q4e, {
                                      options: [
                                          {
                                              label: ee.intl.string(ee.t.nBmDra),
                                              value: X.wC$.ALWAYS
                                          },
                                          {
                                              label: ee.intl.string(ee.t['2OvIZW']),
                                              value: X.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: ee.intl.string(ee.t.ekjlPD),
                                              value: X.wC$.NEVER
                                          }
                                      ],
                                      className: et.select,
                                      onChange: (e) => E.Z.setDisplayNameMode(e),
                                      value: o
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: et.widgetContainer,
                                  children:
                                      p &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', {
                                                  className: et.voiceWidgetContainer,
                                                  children: (0, i.jsx)(Z.k, {
                                                      id: 'voice-widget',
                                                      title: ee.intl.string(ee.t.KNJ6Vl),
                                                      channel: (0, L.kt)({
                                                          id: '123',
                                                          name: 'Test Channel',
                                                          type: X.d4z.GUILD_VOICE,
                                                          guild_id: '456'
                                                      }),
                                                      sortedVoiceStates: [
                                                          (function (e) {
                                                              let t = eE(e.username);
                                                              return (t.user = e), t;
                                                          })(C),
                                                          ...T
                                                      ],
                                                      displayNameMode: o,
                                                      displayUserMode: c,
                                                      avatarSizeMode: a,
                                                      widget: X.Odu.VOICE,
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
                                                  className: et.widgetHeaderContainer,
                                                  children: [
                                                      (0, i.jsx)(k.PI, { children: ee.intl.string(ee.t.KNJ6Vl) }),
                                                      (0, i.jsx)(k.ls, {}),
                                                      (0, i.jsx)(k.RT, {
                                                          id: null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : 'voice-widget',
                                                          pinned: null !== (n = null == S ? void 0 : S.pinned) && void 0 !== n && n
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                              }),
                              (0, i.jsx)(el, {
                                  title: ee.intl.string(ee.t.swsWWF),
                                  children: (0, i.jsx)(x.q4e, {
                                      options: [
                                          {
                                              label: ee.intl.string(ee.t.nBmDra),
                                              value: X.OYC.ALWAYS
                                          },
                                          {
                                              label: ee.intl.string(ee.t['2OvIZW']),
                                              value: X.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: et.select,
                                      onChange: (e) => E.Z.setDisplayUserMode(e),
                                      value: c
                                  })
                              })
                          ]
                      })
                  })
              ]
          });
}
