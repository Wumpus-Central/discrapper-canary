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
    b = n(243778),
    v = n(594190),
    j = n(320724),
    A = n(925329),
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
    w = n(199902),
    V = n(77498),
    U = n(355863),
    G = n(283595),
    F = n(594174),
    H = n(556296),
    z = n(808506),
    Y = n(237997),
    W = n(626135),
    K = n(358085),
    q = n(13140),
    X = n(145597),
    J = n(981631),
    Q = n(921944),
    $ = n(987650),
    ee = n(501787),
    et = n(388032),
    en = n(156643),
    ei = n(131970),
    es = n(730462);
let er = el(null);
function el(e) {
    var t;
    let n = Y.Z.getNotificationPositionMode(),
        i = n !== J._vf.DISABLED,
        s = H.ZP.getOverlayKeybind(),
        r = H.ZP.getOverlayChatKeybind();
    return {
        enabled: z.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: Y.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, q.BB)(s.shortcut) : null,
        text_activation_hotkey: null != r ? (0, q.BB)(r.shortcut) : null,
        text_opacity_slider: Y.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : z.Z.enabled
    };
}
function ea(e) {
    let { children: t, title: n } = e;
    return (0, i.jsxs)(x.xJW, {
        children: [
            null != n &&
                (0, i.jsx)(x.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: en.formItemTitle,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: en.rowContainer,
                children: t
            })
        ]
    });
}
function eo(e) {
    let { header: t, icon: n, title: s, description: r, action: a, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(x.kL8, {
        'aria-label': d,
        onClick: c,
        className: l()(en.groupContainer, u),
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: en.groupHeader,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: en.groupContent,
                children: [
                    null != n &&
                        (0, i.jsx)('div', {
                            className: en.groupIcon,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: en.groupMainContent,
                        children: [
                            (0, i.jsx)(x.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: en.groupTitle,
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
                        className: en.groupAction,
                        children: a
                    })
                ]
            })
        ]
    });
}
function ec(e) {
    let { children: t, className: n, onExpand: r, ...a } = e,
        [o, c] = s.useState(!1),
        d = (e) => {
            c(e), null == r || r(e);
        };
    return (0, i.jsx)(x.zF9, {
        className: l()(en.collapseable),
        collapsibleContent: (0, i.jsx)('div', {
            className: en.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eo, {
                ...a,
                onClick: (e) => {
                    d(!o), null == t || t(e);
                },
                className: l()(en.mainCollapseableContainer, n),
                action: (0, i.jsxs)('div', {
                    className: en.groupCollapsedAction,
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
let ed = new Set([f.mM.INITIALIZING, f.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, f.mM.WAITING_FOR_MODULE_TRACKING, f.mM.WAITING_FOR_OVERLAY_OPEN]),
    eu = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function em(e) {
    var t, n, r;
    let { runningGame: l, runningGameApplication: a } = (function () {
            let e = (0, g.e7)([w.Z], () => w.Z.getStreamerActiveStreamMetadata()),
                t = (0, g.e7)(
                    [v.ZP],
                    () => {
                        let e = v.ZP.getVisibleGame();
                        return null == e ? null : e;
                    },
                    [],
                    o()
                ),
                [n] = (0, I.Z)([null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0]);
            return {
                runningGame: t,
                runningGameApplication: n
            };
        })(),
        c = null == l ? void 0 : l.pid,
        d = (0, g.e7)([y.default], () => (null == l || null == c ? null : y.default.getTrackedGameByPid(c)), [l, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, g.cj)(
            [V.Z, G.Z],
            () => {
                if (null == l && null == d)
                    return {
                        enabledLegacy: !1,
                        enabledOOP: !1
                    };
                if (null == l) {
                    var e, t;
                    return {
                        enabledLegacy: null !== (e = null == d ? void 0 : d.legacyEnabled) && void 0 !== e && e,
                        enabledOOP: null !== (t = null == d ? void 0 : d.oopEnabled) && void 0 !== t && t
                    };
                }
                return (0, v.b6)(l, !1, [V.Z, G.Z]);
            },
            [l, d]
        ),
        h = (0, g.e7)([v.ZP, V.Z, G.Z], () => (null == l ? null : (0, v.FZ)(l, [v.ZP, V.Z, G.Z])), [l], o()),
        [p, E] = s.useState(m),
        [C, b] = s.useState(u),
        [j, R] = s.useState(!1);
    s.useEffect(() => {
        E(m), b(u);
    }, [m, u]);
    let P = (0, S.$1)(),
        D = !(0, X.VS)(),
        { legacyEnabled: Z, oopEnabled: k } = (0, g.cj)([y.default], () => y.default.getGlobalEnabledStatus()),
        L = (e, t, n) => {
            eu(n), null != l && (_.Z.toggleOverlay(l, e, t), E(t), b(e));
        },
        B = P && D,
        M = !Z && !k,
        U = !p && !Z && C && !P,
        F = !C && !k && p && !D,
        H = (null == d ? void 0 : d.overlayMethod) === f.gl.Disabled,
        z = (null == d ? void 0 : d.state) === f.mM.OVERLAY_RENDERING && !H,
        Y = (null == d ? void 0 : d.state) != null && ed.has(d.state) && !H,
        W = (null == d ? void 0 : d.overlayMethod) === f.gl.OutOfProcess || (null == d ? void 0 : d.overlayMethod) === f.gl.OutOfProcessLimitedInteraction,
        K = (null == d ? void 0 : d.overlayMethod) === f.gl.Hook,
        q = (null == d ? void 0 : d.state) === f.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === f.mM.OVERLAY_CRASHED_DISABLED,
        J = !p && !C,
        [Q, $] = (() => {
            switch (!0) {
                case z && W:
                    return [
                        et.intl.format(et.t.hFVBIi, {
                            overlayMethod: et.intl.string(et.t.a3eXS0),
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
                case z && K:
                    return [
                        et.intl.format(et.t.hFVBIi, {
                            overlayMethod: et.intl.string(et.t.bvlpDQ),
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
                                case (null == d ? void 0 : d.fullscreenType) !== T.Jx.BORDERLESS_FULLSCREEN:
                                    return et.intl.string(et.t.mJmbeH);
                                case D:
                                    return et.intl.string(et.t.C7bLTU);
                                case !(null !== (e = null == d ? void 0 : d.oopEnabled) && void 0 !== e && e):
                                    return et.intl.string(et.t.WiY24u);
                                case !k:
                                    return et.intl.string(et.t.cAFVsL);
                                case !(null !== (t = null == d ? void 0 : d.supportsOutOfProcess) && void 0 !== t && t):
                                    return et.intl.string(et.t.XcGEcn);
                                default:
                                    return et.intl.string(et.t.bJXH2t);
                            }
                        })()
                    ];
                case q:
                    return [et.intl.string(et.t.OFC2a2), null];
                case B:
                    return [et.intl.string(et.t.m7X4a2), null];
                case M:
                    return [et.intl.string(et.t['9DUS5u']), null];
                case J:
                    return [et.intl.string(et.t.nQ9EdH), null];
                case U:
                case F:
                    return [et.intl.string(et.t.VWUn0d), null];
                case Y:
                    if (W) return [et.intl.string(et.t['s8+CFh']), null];
                    if (K) return [et.intl.string(et.t.JEEdqq), null];
                    return [et.intl.string(et.t['2Xhy9v']), null];
                case null == d:
                    return [et.intl.string(et.t.vwHPRk), null];
                default:
                    return [et.intl.string(et.t.ONovPz), null];
            }
        })();
    return ((0, N.ZP)(() => {
        _.Z.getDetectableGames();
    }),
    null == l)
        ? null
        : (0, i.jsxs)(ec, {
              onExpand: R,
              className: j ? en.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null !== (r = null !== (n = null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : null == h ? void 0 : h.name) && void 0 !== n ? n : null == l ? void 0 : l.gameName) && void 0 !== r ? r : '',
                      null != h && h.verified
                          ? (0, i.jsx)(x.ua7, {
                                text: et.intl.string(et.t['4PJP5u']),
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
              description: Q,
              hint: null != $ ? $ : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      z || Y
                          ? (0, i.jsx)(x.pzj, {
                                size: 'xxs',
                                color: Y ? x.TVs.colors.TEXT_MUTED.css : W ? x.TVs.colors.TEXT_POSITIVE.css : x.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, i.jsx)('div', { className: en.playingDot }),
                      (0, i.jsx)(x.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: et.intl.string(et.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, i.jsx)(A.Z, {
                  game: a,
                  pid: null == l ? void 0 : l.pid,
                  size: A.Z.Sizes.MEDIUM
              }),
              'aria-label': et.intl.string(et.t['87O5GB']),
              action: (0, i.jsx)(x.P3F, {
                  onClick: (e) => eu(e),
                  children: (0, i.jsx)(x.rsf, {
                      checked: p || C,
                      disabled: B || M || U || F,
                      onChange: (e, t) => L(e, e, t)
                  })
              }),
              children: [
                  (0, i.jsx)(eo, {
                      title: et.intl.string(et.t['7BlVIi']),
                      description: et.intl.string(et.t.ndgADA),
                      hint: k ? void 0 : et.intl.string(et.t.cAFVsL),
                      'aria-label': et.intl.string(et.t['7BlVIi']),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.rsf, {
                                  checked: p,
                                  disabled: D || !k,
                                  onChange: (e, t) => L(C, e, t)
                              }),
                              (0, i.jsx)('div', { className: en.emptySpacer })
                          ]
                      })
                  }),
                  (0, i.jsx)(eo, {
                      title: et.intl.string(et.t.BfFpW1),
                      description: et.intl.string(et.t.OzInYm),
                      hint: Z ? void 0 : et.intl.string(et.t['3sYHXl']),
                      'aria-label': et.intl.string(et.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.rsf, {
                                  checked: C,
                                  disabled: P || !Z,
                                  onChange: (e, t) => L(e, p, t)
                              }),
                              (0, i.jsx)('div', { className: en.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function eg(e) {
    let { game: t, gameApplication: n } = e,
        r = s.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]);
    return (0, i.jsx)(A.Z, {
        game: n,
        pid: r,
        size: A.Z.Sizes.SMALL
    });
}
function eh(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: r, getEnabledFromStatus: l, onChange: a, ariaLabel: o } = e,
        c = (0, g.cj)([v.ZP, V.Z, G.Z], () => (0, v.FZ)(t, [v.ZP, V.Z, G.Z])),
        d = (0, g.cj)([V.Z, G.Z], () => (0, v.b6)(t, !1, [V.Z, G.Z]), [t]),
        u = l(d),
        [m, h] = s.useState(u);
    s.useEffect(() => {
        h(u);
    }, [u]);
    let _ = (e, t) => {
        eu(t), h(e), a(e, c, d);
    };
    return (0, i.jsx)(eo, {
        title: t.name,
        icon: (0, i.jsx)(eg, {
            game: c,
            gameApplication: n
        }),
        'aria-label': o,
        action: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.rsf, {
                    checked: m,
                    disabled: r,
                    onChange: (e, t) => _(e, t)
                }),
                (0, i.jsx)('div', { className: en.emptySpacer })
            ]
        })
    });
}
function ex() {
    let [e, t] = s.useState(!1),
        { legacyEnabled: n, oopEnabled: r } = (0, g.cj)([y.default], () => y.default.getGlobalEnabledStatus()),
        l = (0, g.Wu)([v.ZP], () => v.ZP.getGamesSeen(!0)),
        a = (0, I.Z)(l.map((e) => e.id)),
        o = (0, S.$1)(),
        c = (e, t) => {
            var n, i;
            eu(t), E.Z.setEnabled(e, r), (0, R.ou)(e, R.AE.LEGACY, null !== (i = null === (n = v.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null);
        },
        d = (e, t, n) => {
            let { enabledOOP: i } = n;
            _.Z.toggleOverlay(t, e, i);
        },
        u = s.useMemo(() => ($.iP ? (o ? et.intl.string(et.t.r9jEV1) : et.intl.string(et.t.OzInYm)) : et.intl.string(et.t['8Ox6/P'])), [o]);
    return 0 === l.length
        ? (0, i.jsx)(eo, {
              title: et.intl.string(et.t.BfFpW1),
              description: u,
              'aria-label': et.intl.string(et.t.BfFpW1),
              className: en.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      $.iP && (0, i.jsx)('div', { className: en.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ec, {
              onExpand: t,
              className: e ? en.expandedContainer : void 0,
              title: et.intl.string(et.t.BfFpW1),
              description: u,
              'aria-label': et.intl.string(et.t.BfFpW1),
              action: (0, i.jsx)(x.P3F, {
                  onClick: (e) => eu(e),
                  children: (0, i.jsx)(x.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: en.subtitleContainer,
                      children: (0, i.jsx)(x.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: et.intl.string(et.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(x.zJl, {
                      className: en.scroller,
                      children: l.map((e, t) =>
                          (0, i.jsx)(
                              eh,
                              {
                                  rawGame: e,
                                  supportDisabled: o,
                                  gameApplication: a[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: et.intl.format(et.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function e_() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: r } = (0, g.cj)([y.default], () => y.default.getGlobalEnabledStatus()),
        l = !(0, X.VS)(),
        a = (0, g.Wu)([v.ZP], () => v.ZP.getGamesSeen(!0)),
        o = (0, I.Z)(a.map((e) => e.id)),
        c = (e, t) => {
            var n, i;
            eu(t), E.Z.setEnabled(r, e), (0, R.ou)(e, R.AE.OOP, null !== (i = null === (n = v.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null);
        },
        d = (e, t, n) => {
            let { enabledLegacy: i } = n;
            _.Z.toggleOverlay(t, e, i);
        },
        u = s.useMemo(() => ($.iP ? (l ? et.intl.string(et.t.C7bLTU) : et.intl.string(et.t.ndgADA)) : et.intl.string(et.t.m7X4a2)), [l]);
    return 0 === a.length
        ? (0, i.jsx)(eo, {
              title: et.intl.string(et.t['7BlVIi']),
              description: u,
              'aria-label': et.intl.string(et.t['7BlVIi']),
              className: en.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e, t) => c(e, t)
                      }),
                      $.iP && (0, i.jsx)('div', { className: en.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ec, {
              onExpand: t,
              className: e ? en.expandedContainer : void 0,
              title: et.intl.string(et.t['7BlVIi']),
              description: u,
              'aria-label': et.intl.string(et.t['7BlVIi']),
              action: (0, i.jsx)(x.P3F, {
                  onClick: (e) => eu(e),
                  children: (0, i.jsx)(x.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: en.subtitleContainer,
                      children: (0, i.jsx)(x.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: et.intl.string(et.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(x.zJl, {
                      className: en.scroller,
                      children: a.map((e, t) =>
                          (0, i.jsx)(
                              eh,
                              {
                                  rawGame: e,
                                  gameApplication: o[t],
                                  supportDisabled: l,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: et.intl.format(et.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ep() {
    let e = (0, g.e7)([H.ZP], () => H.ZP.getOverlayKeybind()),
        t = (0, S.$1)(),
        n = !(0, X.VS)(),
        [s, r] = (0, g.Wu)([v.ZP], () => [v.ZP.canShowAdminWarning, v.ZP.getVisibleGame()], []),
        l = null != r && r.elevated && s;
    return (0, i.jsx)(ea, {
        children: (0, i.jsxs)('div', {
            className: en.keybindMainContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: en.keybindContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: en.keybindHeaderContainer,
                            children: (0, i.jsx)(x.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: et.intl.string(et.t.VsAZcH)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: en.keybindRecorderContainer,
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
                        className: en.keybindAdminWarning,
                        children: et.intl.string(et.t.NsowVV)
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
    let [e, t] = (0, b.US)([h.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(Q.L.DISMISS);
        };
    return ((0, N.ZP)(() => () => {
        t(Q.L.AUTO_DISMISS);
    }),
    e !== h.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)('div', {
              className: en.overlaySettingsNux,
              children: [
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)('img', {
                          src: ei.Z,
                          alt: et.intl.string(et.t.mdXZh4),
                          className: en.nuxFirstImage
                      })
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                          className: en.mainTitleContainer,
                          children: [
                              (0, i.jsx)(x.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: et.intl.string(et.t.jzjJQk)
                              }),
                              (0, i.jsx)(x.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: et.intl.string(et.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)('img', {
                          src: es.Z,
                          alt: et.intl.string(et.t.mdXZh4),
                          className: en.nuxUserSettingsImage
                      })
                  }),
                  (0, i.jsx)(x.zxk, {
                      className: en.closeCircleButton,
                      onClick: () => n(),
                      children: et.intl.string(et.t.Q26diI)
                  }),
                  (0, i.jsx)('div', { className: en.nuxDivider })
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
        } = (0, g.cj)([Y.Z], () => ({
            avatarSizeMode: Y.Z.getAvatarSizeMode(),
            displayNameMode: Y.Z.getDisplayNameMode(),
            displayUserMode: Y.Z.getDisplayUserMode(),
            notificationPositionMode: Y.Z.getNotificationPositionMode(),
            textChatNotificationMode: Y.Z.getTextChatNotificationMode(),
            disableClickableRegions: Y.Z.disableClickableRegions,
            shouldShowKeybindIndicators: Y.Z.showKeybindIndicators
        })),
        p = (0, P.o4)('user_settings').overlayV3UI,
        C = (0, g.e7)([F.default], () => F.default.getCurrentUser()),
        f = (0, D.Z)({ location: 'overlay_user_settings' });
    (0, N.ZP)(() => {
        if (K.isPlatformEmbedded) return (0, j.Ky)(), j.P7;
    }),
        (function () {
            let e = el(er);
            m().isEqual(e, er) || (W.default.track(J.rMx.OVERLAY_SETTINGS_UPDATED, e), (er = e));
        })();
    let [T] = s.useState(() => [eE(et.intl.string(et.t.C0ZDvr), !0, !1), eE(et.intl.string(et.t.iOtj8P), !1, !1, !0), eE(et.intl.string(et.t['0oqNgI']), !1, !0)]),
        S = (0, g.e7)([U.Z], () => U.Z.getWidgetsForLayout(ee.OVERLAY_V3_LAYOUT_ID).find((e) => e.type === J.Odu.VOICE_V3));
    return null == C
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(x.hjN, {
                      tag: x.RB0.H1,
                      title: et.intl.string(et.t['9cb1U1']),
                      children: [
                          p ? (0, i.jsx)(eC, {}) : null,
                          (0, i.jsxs)('div', {
                              className: en.overlayEnabledSettingsContainer,
                              children: [(0, i.jsx)(em, {}), (0, i.jsx)(e_, {}), (0, i.jsx)(ex, {})]
                          }),
                          (0, i.jsx)('div', { className: en.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(x.hjN, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: en.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(ep, {}),
                                  f &&
                                      (0, i.jsx)(ea, {
                                          children: (0, i.jsx)(x.j7V, {
                                              value: _,
                                              onChange: (e) => E.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: et.intl.string(et.t.XZTl9v)
                                          })
                                      }),
                                  (0, i.jsxs)(ea, {
                                      children: [
                                          (0, i.jsx)(x.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: et.intl.string(et.t.Fy5kPj)
                                          }),
                                          (0, i.jsx)(x.j7V, {
                                              value: d !== J._vf.DISABLED && u === J.Ypu.ENABLED,
                                              disabled: d === J._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = J.Ypu;
                                                  E.Z.setTextChatNotificationMode(u === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)(ea, {
                                      children: [
                                          (0, i.jsx)(x.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: et.intl.string(et.t['+eFXxs'])
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
                          (0, i.jsx)('div', { className: en.settingsDivider })
                      ]
                  }),
                  (0, i.jsx)(x.hjN, {
                      title: 'Voice Widget',
                      children: (0, i.jsxs)('div', {
                          className: en.voiceSettingsContainer,
                          children: [
                              (0, i.jsx)(ea, {
                                  title: et.intl.string(et.t.dnvZSk),
                                  children: (0, i.jsx)(x.q4e, {
                                      options: [
                                          {
                                              label: et.intl.string(et.t.YcOxtr),
                                              value: J.ipw.LARGE
                                          },
                                          {
                                              label: et.intl.string(et.t.BKIKq6),
                                              value: J.ipw.SMALL
                                          }
                                      ],
                                      className: en.select,
                                      onChange: (e) => E.Z.setAvatarSizeMode(e),
                                      value: a
                                  })
                              }),
                              (0, i.jsx)(ea, {
                                  title: et.intl.string(et.t.J0dpcH),
                                  children: (0, i.jsx)(x.q4e, {
                                      options: [
                                          {
                                              label: et.intl.string(et.t.nBmDra),
                                              value: J.wC$.ALWAYS
                                          },
                                          {
                                              label: et.intl.string(et.t['2OvIZW']),
                                              value: J.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: et.intl.string(et.t.ekjlPD),
                                              value: J.wC$.NEVER
                                          }
                                      ],
                                      className: en.select,
                                      onChange: (e) => E.Z.setDisplayNameMode(e),
                                      value: o
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: en.widgetContainer,
                                  children:
                                      p &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', {
                                                  className: en.voiceWidgetContainer,
                                                  children: (0, i.jsx)(Z.k, {
                                                      id: 'voice-widget',
                                                      title: et.intl.string(et.t.KNJ6Vl),
                                                      channel: (0, L.kt)({
                                                          id: '123',
                                                          name: 'Test Channel',
                                                          type: J.d4z.GUILD_VOICE,
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
                                                      widget: J.Odu.VOICE,
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
                                                  className: en.widgetHeaderContainer,
                                                  children: [
                                                      (0, i.jsx)(k.PI, { children: et.intl.string(et.t.KNJ6Vl) }),
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
                              (0, i.jsx)(ea, {
                                  title: et.intl.string(et.t.swsWWF),
                                  children: (0, i.jsx)(x.q4e, {
                                      options: [
                                          {
                                              label: et.intl.string(et.t.nBmDra),
                                              value: J.OYC.ALWAYS
                                          },
                                          {
                                              label: et.intl.string(et.t['2OvIZW']),
                                              value: J.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: en.select,
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
