(n.d(t, { Z: () => ek }), n(953529), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(348327),
    o = n.n(l),
    c = n(512722),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    p = n(442837),
    g = n(704215),
    h = n(481060),
    f = n(224706),
    b = n(660216),
    x = n(765250),
    _ = n(13245),
    j = n(825209),
    E = n(615287),
    O = n(593472),
    C = n(493773),
    v = n(812206),
    S = n(835473),
    T = n(243778),
    N = n(594190),
    I = n(320724),
    y = n(925329),
    A = n(297700),
    P = n(444295),
    R = n(486016),
    D = n(32300),
    Z = n(809357),
    w = n(371651),
    k = n(829907),
    L = n(624864),
    B = n(610394),
    M = n(957148),
    U = n(340101),
    V = n(243487),
    G = n(430561),
    F = n(131704),
    H = n(598077),
    z = n(189786),
    W = n(199902),
    Y = n(77498),
    K = n(355863),
    q = n(283595),
    X = n(594174),
    J = n(556296),
    Q = n(808506),
    $ = n(237997),
    ee = n(626135),
    et = n(823379),
    en = n(358085),
    ei = n(13140),
    er = n(145597),
    es = n(981631),
    ea = n(921944),
    el = n(987650),
    eo = n(501787),
    ec = n(388032),
    ed = n(91481),
    eu = n(131970),
    em = n(730462);
function ep(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function eg(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eh = ex(null),
    ef = 'voice-widget-display-users',
    eb = [0, 5, 10, 15, 20, 25];
function ex(e) {
    var t;
    let n = $.default.getNotificationPositionMode(),
        i = n !== es._vf.DISABLED,
        r = J.ZP.getOverlayKeybind(),
        s = J.ZP.getOverlayChatKeybind();
    return {
        enabled: Q.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: L.Z.isNotificationDisabled(R.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        hotkey: null != r ? (0, ei.BB)(r.shortcut) : null,
        text_activation_hotkey: null != s ? (0, ei.BB)(s.shortcut) : null,
        text_opacity_slider: $.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : Q.default.enabled
    };
}
function e_(e) {
    let { children: t, title: n, className: r, titleId: s } = e;
    return (0, i.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, i.jsx)(h.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: ed.formItemTitle,
                    id: s,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: a()(ed.rowContainer, r),
                children: t
            })
        ]
    });
}
function ej(e) {
    let { header: t, icon: n, title: r, description: s, action: l, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: a()(ed.groupContainer, u),
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: ed.groupHeader,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: ed.groupContent,
                children: [
                    null != n &&
                        (0, i.jsx)('div', {
                            className: ed.groupIcon,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: ed.groupMainContent,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: ed.groupTitle,
                                children: r
                            }),
                            null != s &&
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: s
                                }),
                            null != o &&
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-xxs/medium',
                                    color: 'text-muted',
                                    children: o
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: ed.groupAction,
                        children: l
                    })
                ]
            })
        ]
    });
}
function eE(e) {
    var { children: t, className: n, onExpand: s } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['children', 'className', 'onExpand']);
    let [o, c] = r.useState(!1),
        d = (e) => {
            (c(e), null == s || s(e));
        };
    return (0, i.jsx)(h.zF9, {
        className: ed.collapseable,
        collapsibleContent: (0, i.jsx)('div', {
            className: ed.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(
                ej,
                eg(ep({}, l), {
                    onClick: (e) => {
                        (d(!o), null == t || t(e));
                    },
                    className: a()(ed.mainCollapseableContainer, n),
                    action: (0, i.jsxs)('div', {
                        className: ed.groupCollapsedAction,
                        children: [
                            l.action,
                            o
                                ? (0, i.jsx)(h.CJ0, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'var(--interactive-active)'
                                  })
                                : (0, i.jsx)(h.Fbu, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'var(--interactive-active)'
                                  })
                        ]
                    })
                })
            );
        }
    });
}
let eO = new Set([E.mM.INITIALIZING, E.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, E.mM.WAITING_FOR_MODULE_TRACKING, E.mM.WAITING_FOR_OVERLAY_OPEN]),
    eC = (e) => {
        (e.preventDefault(), e.stopPropagation());
    };
function ev(e) {
    var t, n, s;
    let { runningGame: a, runningGameApplication: l } = e,
        c = null == a ? void 0 : a.pid,
        d = (0, p.e7)([w.default], () => (null == a || null == c ? null : w.default.getTrackedGameByPid(c)), [a, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, p.cj)(
            [Y.Z, q.Z],
            () => {
                if (null == a && null == d)
                    return {
                        enabledLegacy: !1,
                        enabledOOP: !1
                    };
                if (null == a) {
                    var e, t;
                    return {
                        enabledLegacy: null != (e = null == d ? void 0 : d.legacyEnabled) && e,
                        enabledOOP: null != (t = null == d ? void 0 : d.oopEnabled) && t
                    };
                }
                return (0, N.b6)(a, !1, [Y.Z, q.Z]);
            },
            [a, d]
        ),
        g = (0, p.e7)([N.ZP, Y.Z, q.Z], () => (null == a ? null : (0, N.FZ)(a, [N.ZP, Y.Z, q.Z])), [a], o()),
        [b, x] = r.useState(m),
        [j, v] = r.useState(u),
        [S, T] = r.useState(!1);
    r.useEffect(() => {
        (x(m), v(u));
    }, [m, u]);
    let I = !(0, er.supportsLegacy)(),
        R = !(0, er.supportsOutOfProcess)(),
        { legacyEnabled: D, oopEnabled: Z } = (0, p.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        k = (e, t, n) => {
            var i, r, s;
            if ((eC(n), null == a)) return;
            let l = !1,
                o = !1;
            switch (t) {
                case P.AE.LEGACY_GAME:
                    (v(e), f.Z.toggleOverlay(a, e, b), (l = !e && j));
                    break;
                case P.AE.OOP_GAME:
                    (x(e), f.Z.toggleOverlay(a, j, e), (o = !e && b));
                    break;
                case P.AE.LEGACY:
                    (_.Z.setEnabled(e, Z), (0, P.ou)(e, P.AE.LEGACY, null != (i = a.id) ? i : null));
                    break;
                case P.AE.OOP:
                    (_.Z.setEnabled(D, e), (0, P.ou)(e, P.AE.OOP, null != (r = a.id) ? r : null));
            }
            (l || o) && (0, M.l)(l ? P.AE.LEGACY_GAME : P.AE.OOP_GAME, null != (s = a.id) ? s : null);
        },
        L = (e, t) => {
            let n = !t && e,
                i = !Z && b,
                r = !D && j,
                s = !b && Z,
                a = !j && D;
            switch (!0) {
                case n && (i || r) && (s || a):
                    return 'both';
                case n && (i || r):
                    return 'global';
                default:
                    return 'game';
            }
        },
        B = (e, t, n) => {
            if ((eC(n), null == a)) return;
            let i = !1,
                r = !1;
            switch (t) {
                case 'game':
                    (f.Z.toggleOverlay(a, e, e), v(e), x(e), (i = !e && j), (r = !e && b));
                    break;
                case 'global':
                    (_.Z.setEnabled(e, e), (i = !e && D), (r = !e && Z));
                    break;
                case 'both':
                    (_.Z.setEnabled(e, e), f.Z.toggleOverlay(a, e, e), v(e), x(e), (i = (!e && D) || (!e && j)), (r = (!e && Z) || (!e && b)));
            }
            let s = null;
            if ((i ? (s = 'game' === t ? P.AE.LEGACY_GAME : P.AE.LEGACY) : r && (s = 'game' === t ? P.AE.OOP_GAME : P.AE.OOP), null != s)) {
                var l;
                (0, M.l)(s, null != (l = a.id) ? l : null);
            }
        },
        U = I && R,
        V = !D && !Z,
        G = !b && !D && j && !I,
        F = !j && !Z && b && !R,
        H = (null == d ? void 0 : d.overlayMethod) === E.gl.Disabled,
        z = (null == d ? void 0 : d.state) === E.mM.OVERLAY_RENDERING && !H,
        W = (null == d ? void 0 : d.state) != null && eO.has(d.state) && !H,
        K = (null == d ? void 0 : d.overlayMethod) === E.gl.OutOfProcess,
        X = (null == d ? void 0 : d.overlayMethod) === E.gl.OutOfProcessLimitedInteraction,
        J = (null == d ? void 0 : d.overlayMethod) === E.gl.Hook,
        Q = (null == d ? void 0 : d.state) === E.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === E.mM.OVERLAY_CRASHED_DISABLED,
        $ = !b && !j,
        [ee, et] = (() => {
            switch (!0) {
                case z && K:
                    return [
                        ec.intl.format(ec.t.hFVBIi, {
                            overlayMethod: ec.intl.string(ec.t.a3eXS0),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    h.Text,
                                    {
                                        tag: 'span',
                                        variant: 'text-sm/medium',
                                        color: 'text-feedback-positive',
                                        children: e
                                    },
                                    t
                                );
                            }
                        }),
                        null
                    ];
                case z && X:
                    return [
                        ec.intl.format(ec.t.hFVBIi, {
                            overlayMethod: ec.intl.string(ec.t['506AbW']),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    h.Text,
                                    {
                                        tag: 'span',
                                        variant: 'text-sm/medium',
                                        color: 'text-feedback-warning',
                                        children: e
                                    },
                                    t
                                );
                            }
                        }),
                        null
                    ];
                case z && J:
                    return [
                        ec.intl.format(ec.t.hFVBIi, {
                            overlayMethod: ec.intl.string(ec.t.bvlpDQ),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    h.Text,
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
                                case (null == d ? void 0 : d.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                                    return ec.intl.string(ec.t.mJmbeH);
                                case R:
                                    return ec.intl.string(ec.t.C7bLTU);
                                case !(null != (e = null == d ? void 0 : d.oopEnabled) && e):
                                    return ec.intl.string(ec.t.WiY24u);
                                case !Z:
                                    return ec.intl.string(ec.t.cAFVsL);
                                case !(null != (t = null == d ? void 0 : d.supportsOutOfProcess) && t):
                                    return ec.intl.string(ec.t.XcGEcn);
                                default:
                                    return ec.intl.string(ec.t.bJXH2t);
                            }
                        })()
                    ];
                case Q:
                    return [ec.intl.string(ec.t.OFC2a2), null];
                case U:
                    return [ec.intl.string(ec.t.m7X4a2), null];
                case V:
                    return [ec.intl.string(ec.t['9DUS5u']), null];
                case $:
                    return [ec.intl.string(ec.t.nQ9EdH), null];
                case G:
                case F:
                    return [ec.intl.string(ec.t.VWUn0d), null];
                case W:
                    if (K) return [ec.intl.string(ec.t['s8+CFh']), null];
                    if (J) return [ec.intl.string(ec.t.JEEdqq), null];
                    if (X) return [ec.intl.string(ec.t.pzBMwc), null];
                    return [ec.intl.string(ec.t['2Xhy9v']), null];
                case null == d:
                    return [ec.intl.string(ec.t.vwHPRk), null];
                default:
                    return [ec.intl.string(ec.t.ONovPz), null];
            }
        })();
    (0, C.ZP)(() => {
        f.Z.getDetectableGames();
    });
    let [en, ei] = r.useMemo(() => (W ? ['text-muted', h.TVs.colors.TEXT_MUTED.css] : z && X ? ['text-feedback-warning', h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : z && K ? ['text-feedback-positive', h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : z && J ? ['text-primary', h.TVs.colors.TEXT_PRIMARY.css] : ['interactive-normal', h.TVs.colors.INTERACTIVE_NORMAL.css]), [W, z, X, K, J]);
    return null == a
        ? null
        : (0, i.jsxs)(eE, {
              onExpand: T,
              className: S ? ed.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != (s = null != (n = null != (t = null == l ? void 0 : l.name) ? t : null == g ? void 0 : g.name) ? n : null == a ? void 0 : a.gameName) ? s : '',
                      null != g && g.verified
                          ? (0, i.jsx)(h.ua7, {
                                text: ec.intl.string(ec.t['4PJP5u']),
                                children: (e) =>
                                    (0, i.jsx)(
                                        A.Z,
                                        eg(
                                            ep(
                                                {
                                                    size: 16,
                                                    color: h.TVs.colors.BG_BRAND.css
                                                },
                                                e
                                            ),
                                            {
                                                children: (0, i.jsx)(h.kmB, {
                                                    size: 'custom',
                                                    width: 16,
                                                    height: 16,
                                                    color: h.TVs.colors.WHITE.css
                                                })
                                            }
                                        )
                                    )
                            })
                          : null
                  ]
              }),
              description: ee,
              hint: null != et ? et : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      z || W
                          ? (0, i.jsx)(h.pzj, {
                                size: 'xxs',
                                color: ei
                            })
                          : (0, i.jsx)('div', { className: ed.playingDot }),
                      (0, i.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: en,
                          children: ec.intl.string(ec.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, i.jsx)(y.Z, {
                  game: l,
                  pid: null == a ? void 0 : a.pid,
                  size: y.Z.Sizes.MEDIUM
              }),
              'aria-label': ec.intl.string(ec.t['87O5GB']),
              action: (0, i.jsx)(h.P3F, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(h.rsf, {
                      checked: (b && Z) || (j && D),
                      disabled: U,
                      onChange: (e, t) => {
                          B(e, L(e, (b && Z) || (j && D)), t);
                      }
                  })
              }),
              children: [
                  (0, i.jsx)(ej, {
                      title: ec.intl.string(ec.t['7BlVIi']),
                      description: ec.intl.string(ec.t.ndgADA),
                      hint: Z ? void 0 : ec.intl.string(ec.t.cAFVsL),
                      'aria-label': ec.intl.string(ec.t['7BlVIi']),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.rsf, {
                                  checked: b && Z,
                                  disabled: R,
                                  onChange: (e, t) => {
                                      e && !Z ? k(e, P.AE.OOP, t) : k(e, P.AE.OOP_GAME, t);
                                  }
                              }),
                              (0, i.jsx)('div', { className: ed.emptySpacer })
                          ]
                      })
                  }),
                  (0, i.jsx)(ej, {
                      title: ec.intl.string(ec.t.BfFpW1),
                      description: ec.intl.string(ec.t.OzInYm),
                      hint: D ? void 0 : ec.intl.string(ec.t['3sYHXl']),
                      'aria-label': ec.intl.string(ec.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.rsf, {
                                  checked: j && D,
                                  disabled: I,
                                  onChange: (e, t) => {
                                      e && !D ? k(e, P.AE.LEGACY, t) : k(e, P.AE.LEGACY_GAME, t);
                                  }
                              }),
                              (0, i.jsx)('div', { className: ed.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function eS(e) {
    let { game: t, gameApplication: n } = e,
        s = r.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]),
        a = (0, p.e7)([v.Z], () => (null != n ? n : v.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, i.jsx)(y.Z, {
        game: a,
        pid: s,
        size: y.Z.Sizes.SMALL
    });
}
function eT(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: a, onChange: l, clientSettingType: o, ariaLabel: c } = e,
        d = (0, p.cj)([N.ZP, Y.Z, q.Z], () => (0, N.FZ)(t, [N.ZP, Y.Z, q.Z])),
        u = (0, p.cj)([Y.Z, q.Z], () => (0, N.b6)(t, !1, [Y.Z, q.Z]), [t]),
        m = a(u),
        [g, f] = r.useState(m);
    r.useEffect(() => {
        f(m);
    }, [m]);
    let b = (e, n) => {
        let i = !e && g;
        if ((eC(n), f(e), l(e, d, u), i)) {
            var r, s;
            (0, M.l)(o, null != (s = null != (r = d.id) ? r : null == t ? void 0 : t.id) ? s : null);
        }
    };
    return (0, i.jsx)(ej, {
        title: t.name,
        icon: (0, i.jsx)(eS, {
            game: d,
            gameApplication: n
        }),
        'aria-label': c,
        action: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.rsf, {
                    checked: g,
                    disabled: s,
                    onChange: (e, t) => b(e, t)
                }),
                (0, i.jsx)('div', { className: ed.emptySpacer })
            ]
        })
    });
}
function eN() {
    let [e, t] = r.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, p.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        a = (0, p.Wu)([N.ZP], () => N.ZP.getGamesSeen(!0)),
        l = (0, S.Z)(a.map((e) => e.id)),
        o = !(0, er.supportsLegacy)(),
        c = (e, t) => {
            var i, r;
            (eC(t), _.Z.setEnabled(e, s));
            let a = null != (r = null == (i = N.ZP.getCurrentGameForAnalytics()) ? void 0 : i.id) ? r : null;
            ((0, P.ou)(e, P.AE.LEGACY, a), !e && n && (0, M.l)(P.AE.LEGACY, a));
        },
        d = (e, t, n) => {
            let { enabledOOP: i } = n;
            f.Z.toggleOverlay(t, e, i);
        },
        u = r.useMemo(() => ((0, er.supportsLegacy)() ? (o ? ec.intl.string(ec.t.r9jEV1) : ec.intl.string(ec.t.OzInYm)) : ec.intl.string(ec.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, i.jsx)(ej, {
              title: ec.intl.string(ec.t.BfFpW1),
              description: u,
              'aria-label': ec.intl.string(ec.t.BfFpW1),
              className: ed.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      el.iP && (0, i.jsx)('div', { className: ed.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(eE, {
              onExpand: t,
              className: e ? ed.expandedContainer : void 0,
              title: ec.intl.string(ec.t.BfFpW1),
              description: u,
              'aria-label': ec.intl.string(ec.t.BfFpW1),
              action: (0, i.jsx)(h.P3F, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: ed.subtitleContainer,
                      children: (0, i.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ec.intl.string(ec.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(h.zJl, {
                      className: ed.scroller,
                      children: a.map((e, t) =>
                          (0, i.jsx)(
                              eT,
                              {
                                  rawGame: e,
                                  clientSettingType: P.AE.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: l[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: ec.intl.format(ec.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eI() {
    let [e, t] = r.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, p.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        a = !(0, er.supportsOutOfProcess)(),
        l = (0, p.Wu)([N.ZP], () => N.ZP.getGamesSeen(!0)),
        o = (0, S.Z)(l.map((e) => e.id)),
        c = (e, t) => {
            var i, r;
            eC(t);
            let a = !e && n;
            _.Z.setEnabled(s, e);
            let l = null != (r = null == (i = N.ZP.getCurrentGameForAnalytics()) ? void 0 : i.id) ? r : null;
            ((0, P.ou)(e, P.AE.OOP, l), a && (0, M.l)(P.AE.OOP, l));
        },
        d = (e, t, n) => {
            let { enabledLegacy: i } = n;
            f.Z.toggleOverlay(t, e, i);
        },
        u = r.useMemo(() => (el.iP ? (a ? ec.intl.string(ec.t.C7bLTU) : ec.intl.string(ec.t.ndgADA)) : ec.intl.string(ec.t.m7X4a2)), [a]);
    return 0 === l.length
        ? (0, i.jsx)(ej, {
              title: ec.intl.string(ec.t['7BlVIi']),
              description: u,
              'aria-label': ec.intl.string(ec.t['7BlVIi']),
              className: ed.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.rsf, {
                          checked: n,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      el.iP && (0, i.jsx)('div', { className: ed.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(eE, {
              onExpand: t,
              className: e ? ed.expandedContainer : void 0,
              title: ec.intl.string(ec.t['7BlVIi']),
              description: u,
              'aria-label': ec.intl.string(ec.t['7BlVIi']),
              action: (0, i.jsx)(h.P3F, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(h.rsf, {
                      checked: n,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: ed.subtitleContainer,
                      children: (0, i.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ec.intl.string(ec.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(h.zJl, {
                      className: ed.scroller,
                      children: l.map((e, t) =>
                          (0, i.jsx)(
                              eT,
                              {
                                  rawGame: e,
                                  clientSettingType: P.AE.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: a,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: ec.intl.format(ec.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ey() {
    var e;
    let t = (0, p.e7)([J.ZP], () => J.ZP.getOverlayKeybind()),
        n = !(0, er.supportsLegacy)(),
        r = !(0, er.supportsOutOfProcess)(),
        [s, a] = (0, p.Wu)([N.ZP], () => [N.ZP.canShowAdminWarning, N.ZP.getVisibleGame()], []),
        l = null != a && a.elevated && s,
        o = (0, J.s4)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    return (0, i.jsx)(e_, {
        children: (0, i.jsx)('div', {
            className: ed.keybindMainContainer,
            children: (0, i.jsxs)('div', {
                className: ed.keybindContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: ed.keybindHeaderContainer,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: ec.intl.string(ec.t.VsAZcH)
                            }),
                            l &&
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-feedback-warning',
                                    className: ed.keybindAdminWarning,
                                    children: ec.intl.string(ec.t.NsowVV)
                                }),
                            o &&
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-feedback-warning',
                                    className: ed.keybindAdminWarning,
                                    children: ec.intl.string(ec.t.UNoTw8)
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: ed.keybindRecorderContainer,
                        children: (0, i.jsx)(j.Z, {
                            disabled: n && r,
                            defaultValue: null != t ? t.shortcut : [],
                            onChange: function (e) {
                                (d()(null != t, 'Keybind should never be undefined'), b.Z.setKeybind(eg(ep({}, t), { shortcut: e })));
                            }
                        })
                    })
                ]
            })
        })
    });
}
let eA = (e, t) =>
    [
        {
            title: ec.t.eVE4LS,
            description: ec.t['72WNqq'],
            disabledSetting: R.OverlayNotificationDisabledSetting.TEXT_CHAT
        },
        {
            title: ec.t.hqsZJS,
            description: ec.t.kHjdqa,
            disabledSetting: R.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE
        },
        e && {
            title: ec.t.sop3rq,
            description: ec.t.pjgffX,
            disabledSetting: R.OverlayNotificationDisabledSetting.GAME_ACTIVITY
        },
        t && {
            title: ec.t['2QVhbW'],
            description: ec.t.wQ4ilJ,
            disabledSetting: R.OverlayNotificationDisabledSetting.NOW_PLAYING
        }
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eP() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, D.o4)('user_settings'),
        n = eA(e, t),
        r = (e) => (t) => {
            _.Z.setNotificationDisabledSetting(e, !t);
        },
        s = (0, p.e7)([L.Z], () => L.Z.getDisabledNotifications());
    return (0, i.jsxs)('div', {
        className: ed.notificationSettingsContainer,
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: ec.intl.string(ec.t.xOE5bG)
            }),
            n.map((e) =>
                (0, i.jsxs)(
                    e_,
                    {
                        className: ed.notificationItem,
                        children: [
                            (0, i.jsxs)('div', {
                                className: ed.notificationDescriptionContainer,
                                children: [
                                    (0, i.jsx)(h.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: ec.intl.string(e.title)
                                    }),
                                    (0, i.jsx)(h.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ec.intl.string(e.description)
                                    })
                                ]
                            }),
                            (0, i.jsx)(h.j7V, {
                                value: !s.has(e.disabledSetting),
                                onChange: r(e.disabledSetting),
                                hideBorder: !0
                            })
                        ]
                    },
                    e.disabledSetting
                )
            )
        ]
    });
}
function eR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new z.Z({
            channelId: '123',
            userId: r,
            sessionId: '789',
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i
        }),
        user: new H.Z({
            id: r,
            username: e
        }),
        member: {
            nick: e,
            userId: r,
            guildId: '890',
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: '#000000',
            colorStrings: {
                primaryColor: '#000000',
                secondaryColor: void 0,
                tertiaryColor: void 0
            }
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0
    };
}
function eD() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: s,
            displayUserMode: l
        } = (0, p.cj)([$.default], () => ({
            avatarSizeMode: $.default.getAvatarSizeMode(),
            displayNameMode: $.default.getDisplayNameMode(),
            displayUserMode: $.default.getDisplayUserMode()
        })),
        o = (0, p.e7)([X.default], () => X.default.getCurrentUser()),
        [c] = r.useState(() => [eR(ec.intl.string(ec.t.C0ZDvr), !0, !1), eR(ec.intl.string(ec.t.iOtj8P), !1, !1, !0), eR(ec.intl.string(ec.t['0oqNgI']), !1, !0)]),
        d = (0, p.e7)([B.ZP, K.Z], () => {
            let e = B.ZP.getWidgetByType(es.Odu.VOICE_V3);
            if (null == e) return null;
            let t = K.Z.getWidget(e.id);
            return null != t && (0, U.Aw)(t) ? t : null;
        }),
        u = null != (t = null == d || null == (e = d.meta) ? void 0 : e.voiceStatesMaxShown) ? t : eo.At,
        m = [
            null != o
                ? (function (e) {
                      let t = eR(e.username);
                      return ((t.user = e), t);
                  })(o)
                : null,
            ...c
        ].filter(et.lm),
        g = [new Map(m.map((e) => [e.user.id, e])), m.map((e) => e.user.id)],
        f = es.BRd.MIDNIGHT;
    return (0, i.jsxs)('div', {
        className: ed.voiceSettingsContainer,
        children: [
            (0, i.jsx)(e_, {
                title: ec.intl.string(ec.t.dnvZSk),
                children: (0, i.jsx)(h.q4e, {
                    options: [
                        {
                            label: ec.intl.string(ec.t.YcOxtr),
                            value: es.ipw.LARGE
                        },
                        {
                            label: ec.intl.string(ec.t.BKIKq6),
                            value: es.ipw.SMALL
                        }
                    ],
                    className: ed.select,
                    onChange: (e) => _.Z.setAvatarSizeMode(e),
                    value: n
                })
            }),
            (0, i.jsx)(e_, {
                title: ec.intl.string(ec.t.J0dpcH),
                children: (0, i.jsx)(h.q4e, {
                    options: [
                        {
                            label: ec.intl.string(ec.t.nBmDra),
                            value: es.wC$.ALWAYS
                        },
                        {
                            label: ec.intl.string(ec.t['2OvIZW']),
                            value: es.wC$.ONLY_WHILE_SPEAKING
                        },
                        {
                            label: ec.intl.string(ec.t.ekjlPD),
                            value: es.wC$.NEVER
                        }
                    ],
                    className: ed.select,
                    onChange: (e) => _.Z.setDisplayNameMode(e),
                    value: s
                })
            }),
            (0, i.jsx)(h.f6W, {
                theme: f,
                children: (e) => {
                    var t, r;
                    return (0, i.jsxs)('div', {
                        className: a()(ed.widgetContainer, e),
                        children: [
                            (0, i.jsx)('div', {
                                className: ed.voiceWidgetContainer,
                                children: (0, i.jsx)(V.kI, {
                                    id: 'voice-widget',
                                    title: ec.intl.string(ec.t.KNJ6Vl),
                                    channel: (0, F.kt)({
                                        id: '123',
                                        name: 'Test Channel',
                                        type: es.d4z.GUILD_VOICE,
                                        guild_id: '456'
                                    }),
                                    overlayVoiceStates: g,
                                    displayNameMode: s,
                                    displayUserMode: l,
                                    avatarSizeMode: n,
                                    widget: es.Odu.VOICE,
                                    anchorLeft: !0,
                                    application: null,
                                    stream: null,
                                    streamApplication: null,
                                    streamMetadata: null,
                                    locked: !1,
                                    pinned: !1,
                                    isSettingsPreview: !0,
                                    isPreviewingInGame: !1,
                                    maxDisplayedVoiceStates: u
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: ed.widgetHeaderContainer,
                                children: [
                                    (0, i.jsx)(G.PI, { children: ec.intl.string(ec.t.KNJ6Vl) }),
                                    (0, i.jsx)(G.ls, {}),
                                    (0, i.jsx)(G.RT, {
                                        id: null != (t = null == d ? void 0 : d.id) ? t : 'voice-widget',
                                        pinned: null != (r = null == d ? void 0 : d.pinned) && r
                                    })
                                ]
                            })
                        ]
                    });
                }
            }),
            (0, i.jsx)(e_, {
                title: ec.intl.string(ec.t.swsWWF),
                children: (0, i.jsx)(h.q4e, {
                    options: [
                        {
                            label: ec.intl.string(ec.t.nBmDra),
                            value: es.OYC.ALWAYS
                        },
                        {
                            label: ec.intl.string(ec.t['2OvIZW']),
                            value: es.OYC.ONLY_WHILE_SPEAKING
                        }
                    ],
                    className: ed.select,
                    onChange: (e) => _.Z.setDisplayUserMode(e),
                    value: l
                })
            }),
            (0, i.jsx)(e_, {
                title: ec.intl.string(ec.t['X/Uyzc']),
                titleId: ef,
                children: (0, i.jsx)('div', {
                    className: ed.sliderContainer,
                    children: (0, i.jsx)(h.iRW, {
                        initialValue: u,
                        onValueRender: (e) => (e < 1 ? ec.intl.string(ec.t.nrUzFB) : ''.concat(Math.floor(e))),
                        minValue: 0,
                        maxValue: 25,
                        onValueChange: function (e) {
                            null != d && (e < 1 ? (0, x.zG)(d.id, { voiceStatesMaxShown: eo.Og }) : (0, x.zG)(d.id, { voiceStatesMaxShown: Math.floor(e) }));
                        },
                        markers: eb,
                        barStyles: { background: h.TVs.colors.BACKGROUND_MOD_STRONG.css },
                        fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                        'aria-labelledby': ef,
                        onMarkerRender: (e) => (e < 1 ? ec.intl.string(ec.t.nrUzFB) : ''.concat(Math.floor(e)))
                    })
                })
            })
        ]
    });
}
function eZ() {
    let [e, t] = (0, T.US)([g.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(ea.L.DISMISS);
        };
    return ((0, C.ZP)(() => () => {
        t(ea.L.AUTO_DISMISS);
    }),
    e !== g.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)('div', {
              className: ed.overlaySettingsNux,
              children: [
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)('img', {
                          src: eu.Z,
                          alt: ec.intl.string(ec.t.mdXZh4),
                          className: ed.nuxFirstImage
                      })
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                          className: ed.mainTitleContainer,
                          children: [
                              (0, i.jsx)(h.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: ec.intl.string(ec.t.jzjJQk)
                              }),
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: ec.intl.string(ec.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)('img', {
                          src: em.Z,
                          alt: ec.intl.string(ec.t.mdXZh4),
                          className: ed.nuxUserSettingsImage
                      })
                  }),
                  (0, i.jsx)('div', {
                      'data-button-hoisted-classname-wrapper': !0,
                      className: ed.closeCircleButton,
                      children: (0, i.jsx)(h.zxk, {
                          variant: 'primary',
                          text: ec.intl.string(ec.t.Q26diI),
                          onClick: () => n()
                      })
                  }),
                  (0, i.jsx)('div', { className: ed.nuxDivider })
              ]
          });
}
function ew(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        s = null == n ? void 0 : n.id,
        a = (0, p.e7)([L.Z], () => L.Z.isLimitedInteractionOverrideEnabled(s), [s]),
        l = r.useMemo(() => null != t && (0, k.H8)(t.pid), [t]),
        o = (0, Z.Z)({ location: 'overlay_user_settings' }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: d } = (0, p.cj)([$.default], () => ({
            disableClickableRegions: $.default.disableClickableRegions,
            shouldShowKeybindIndicators: $.default.showKeybindIndicators
        }));
    return (0, i.jsxs)('div', {
        className: ed.overlayEnabledSettingsContainer,
        children: [
            (0, i.jsx)(ey, {}),
            o &&
                (0, i.jsx)(e_, {
                    children: (0, i.jsx)(h.j7V, {
                        value: d,
                        onChange: (e) => _.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: ec.intl.string(ec.t.XZTl9v)
                    })
                }),
            null != s &&
                (0, i.jsxs)(e_, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: ed.limitedInteractionOverrideContainer,
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: ec.intl.string(ec.t.wgVQND)
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: ec.intl.string(ec.t['5SsyFx'])
                                })
                            ]
                        }),
                        (0, i.jsx)(h.j7V, {
                            value: a || l,
                            disabled: l,
                            onChange: (e) => {
                                null != n && _.Z.setLimitedInteractionOverride(n.id, e);
                            },
                            hideBorder: !0
                        })
                    ]
                }),
            (0, i.jsxs)(e_, {
                children: [
                    (0, i.jsxs)('div', {
                        className: ed.limitedInteractionOverrideContainer,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: ec.intl.string(ec.t['+eFXxs'])
                            }),
                            (0, i.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: ec.intl.string(ec.t.kivMAg)
                            })
                        ]
                    }),
                    (0, i.jsx)(h.j7V, {
                        value: !c,
                        onChange: function () {
                            _.Z.setDisableClickableRegions(!c);
                        },
                        hideBorder: !0
                    })
                ]
            })
        ]
    });
}
function ek(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: r, runningGameApplication: s } = (function () {
            let e = (0, p.e7)([W.Z], () => W.Z.getStreamerActiveStreamMetadata()),
                t = (0, p.e7)(
                    [N.ZP],
                    () => {
                        let e = N.ZP.getVisibleGame();
                        return null == e ? null : e;
                    },
                    [],
                    o()
                ),
                [n] = (0, S.Z)([null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0]);
            return {
                runningGame: t,
                runningGameApplication: n
            };
        })(),
        a = (0, D.o4)('user_settings').overlayV3UI,
        l = (0, p.e7)([X.default], () => X.default.getCurrentUser());
    (0, C.ZP)(() => {
        if (en.isPlatformEmbedded) return ((0, I.Ky)(), I.P7);
    });
    let c = ex(eh);
    return (m().isEqual(c, eh) || (ee.default.track(es.rMx.OVERLAY_SETTINGS_UPDATED, c), (eh = c)), null == l)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: ec.intl.string(ec.t['9cb1U1']),
                      children: [
                          a ? (0, i.jsx)(eZ, {}) : null,
                          (0, i.jsxs)('div', {
                              className: ed.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(ev, {
                                      runningGame: r,
                                      runningGameApplication: s
                                  }),
                                  (0, i.jsx)(eI, {}),
                                  (0, i.jsx)(eN, {})
                              ]
                          }),
                          (0, i.jsx)('div', { className: ed.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(h.hjN, {
                      children: [
                          (0, i.jsx)(ew, {
                              runningGame: r,
                              runningGameApplication: s
                          }),
                          (0, i.jsx)('div', { className: ed.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(h.hjN, {
                      title: ec.intl.string(ec.t.r1TZfn),
                      children: [(0, i.jsx)(eD, {}), (0, i.jsx)('div', { className: ed.settingsDivider })]
                  }),
                  (0, i.jsx)(h.hjN, { children: (0, i.jsx)(eP, {}) })
              ]
          });
}
