n.d(t, { Z: () => ek }), n(953529), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(348327),
    o = n.n(a),
    c = n(512722),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    g = n(442837),
    p = n(704215),
    h = n(481060),
    f = n(224706),
    b = n(660216),
    _ = n(765250),
    x = n(13245),
    E = n(825209),
    j = n(615287),
    O = n(593472),
    C = n(493773),
    S = n(812206),
    v = n(835473),
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
    Y = n(199902),
    W = n(77498),
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
    el = n(921944),
    ea = n(987650),
    eo = n(501787),
    ec = n(388032),
    ed = n(91481),
    eu = n(131970),
    em = n(730462);
function eg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function ep(e, t) {
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
let eh = e_(null),
    ef = 'voice-widget-display-users',
    eb = [0, 5, 10, 15, 20, 25];
function e_(e) {
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
function ex(e) {
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
                className: l()(ed.rowContainer, r),
                children: t
            })
        ]
    });
}
function eE(e) {
    let { header: t, icon: n, title: r, description: s, action: a, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: l()(ed.groupContainer, u),
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
                        children: a
                    })
                ]
            })
        ]
    });
}
function ej(e) {
    var { children: t, className: n, onExpand: s } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['children', 'className', 'onExpand']);
    let [o, c] = r.useState(!1),
        d = (e) => {
            c(e), null == s || s(e);
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
                eE,
                ep(eg({}, a), {
                    onClick: (e) => {
                        d(!o), null == t || t(e);
                    },
                    className: l()(ed.mainCollapseableContainer, n),
                    action: (0, i.jsxs)('div', {
                        className: ed.groupCollapsedAction,
                        children: [
                            a.action,
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
let eO = new Set([j.mM.INITIALIZING, j.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, j.mM.WAITING_FOR_MODULE_TRACKING, j.mM.WAITING_FOR_OVERLAY_OPEN]),
    eC = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eS(e) {
    var t, n, s;
    let { runningGame: l, runningGameApplication: a } = e,
        c = null == l ? void 0 : l.pid,
        d = (0, g.e7)([w.default], () => (null == l || null == c ? null : w.default.getTrackedGameByPid(c)), [l, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, g.cj)(
            [W.Z, q.Z],
            () => {
                if (null == l && null == d)
                    return {
                        enabledLegacy: !1,
                        enabledOOP: !1
                    };
                if (null == l) {
                    var e, t;
                    return {
                        enabledLegacy: null != (e = null == d ? void 0 : d.legacyEnabled) && e,
                        enabledOOP: null != (t = null == d ? void 0 : d.oopEnabled) && t
                    };
                }
                return (0, N.b6)(l, !1, [W.Z, q.Z]);
            },
            [l, d]
        ),
        p = (0, g.e7)([N.ZP, W.Z, q.Z], () => (null == l ? null : (0, N.FZ)(l, [N.ZP, W.Z, q.Z])), [l], o()),
        [b, _] = r.useState(m),
        [E, S] = r.useState(u),
        [v, T] = r.useState(!1);
    r.useEffect(() => {
        _(m), S(u);
    }, [m, u]);
    let I = !(0, er.supportsLegacy)(),
        R = !(0, er.supportsOutOfProcess)(),
        { legacyEnabled: D, oopEnabled: Z } = (0, g.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        k = (e, t, n) => {
            var i, r, s;
            if ((eC(n), null == l)) return;
            let a = !1,
                o = !1;
            switch (t) {
                case P.AE.LEGACY_GAME:
                    S(e), f.Z.toggleOverlay(l, e, b), (a = !e && E);
                    break;
                case P.AE.OOP_GAME:
                    _(e), f.Z.toggleOverlay(l, E, e), (o = !e && b);
                    break;
                case P.AE.LEGACY:
                    x.Z.setEnabled(e, Z), (0, P.ou)(e, P.AE.LEGACY, null != (i = l.id) ? i : null);
                    break;
                case P.AE.OOP:
                    x.Z.setEnabled(D, e), (0, P.ou)(e, P.AE.OOP, null != (r = l.id) ? r : null);
            }
            (a || o) && (0, M.l)(a ? P.AE.LEGACY_GAME : P.AE.OOP_GAME, null != (s = l.id) ? s : null);
        },
        L = (e, t) => {
            let n = !t && e,
                i = !Z && b,
                r = !D && E,
                s = !b && Z,
                l = !E && D;
            switch (!0) {
                case n && (i || r) && (s || l):
                    return 'both';
                case n && (i || r):
                    return 'global';
                default:
                    return 'game';
            }
        },
        B = (e, t, n) => {
            if ((eC(n), null == l)) return;
            let i = !1,
                r = !1;
            switch (t) {
                case 'game':
                    f.Z.toggleOverlay(l, e, e), S(e), _(e), (i = !e && E), (r = !e && b);
                    break;
                case 'global':
                    x.Z.setEnabled(e, e), (i = !e && D), (r = !e && Z);
                    break;
                case 'both':
                    x.Z.setEnabled(e, e), f.Z.toggleOverlay(l, e, e), S(e), _(e), (i = (!e && D) || (!e && E)), (r = (!e && Z) || (!e && b));
            }
            let s = null;
            if ((i ? (s = 'game' === t ? P.AE.LEGACY_GAME : P.AE.LEGACY) : r && (s = 'game' === t ? P.AE.OOP_GAME : P.AE.OOP), null != s)) {
                var a;
                (0, M.l)(s, null != (a = l.id) ? a : null);
            }
        },
        U = I && R,
        V = !D && !Z,
        G = !b && !D && E && !I,
        F = !E && !Z && b && !R,
        H = (null == d ? void 0 : d.overlayMethod) === j.gl.Disabled,
        z = (null == d ? void 0 : d.state) === j.mM.OVERLAY_RENDERING && !H,
        Y = (null == d ? void 0 : d.state) != null && eO.has(d.state) && !H,
        K = (null == d ? void 0 : d.overlayMethod) === j.gl.OutOfProcess,
        X = (null == d ? void 0 : d.overlayMethod) === j.gl.OutOfProcessLimitedInteraction,
        J = (null == d ? void 0 : d.overlayMethod) === j.gl.Hook,
        Q = (null == d ? void 0 : d.state) === j.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === j.mM.OVERLAY_CRASHED_DISABLED,
        $ = !b && !E,
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
                                        color: 'text-positive',
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
                                        color: 'text-warning',
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
                case Y:
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
    let [en, ei] = r.useMemo(() => (Y ? ['text-muted', h.TVs.colors.TEXT_MUTED.css] : z && X ? ['text-warning', h.TVs.colors.TEXT_FEEDBACK_WARNING.css] : z && K ? ['text-positive', h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css] : z && J ? ['text-primary', h.TVs.colors.TEXT_PRIMARY.css] : ['interactive-normal', h.TVs.colors.INTERACTIVE_NORMAL.css]), [Y, z, X, K, J]);
    return null == l
        ? null
        : (0, i.jsxs)(ej, {
              onExpand: T,
              className: v ? ed.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != (s = null != (n = null != (t = null == a ? void 0 : a.name) ? t : null == p ? void 0 : p.name) ? n : null == l ? void 0 : l.gameName) ? s : '',
                      null != p && p.verified
                          ? (0, i.jsx)(h.ua7, {
                                text: ec.intl.string(ec.t['4PJP5u']),
                                children: (e) =>
                                    (0, i.jsx)(
                                        A.Z,
                                        ep(
                                            eg(
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
                      z || Y
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
                  game: a,
                  pid: null == l ? void 0 : l.pid,
                  size: y.Z.Sizes.MEDIUM
              }),
              'aria-label': ec.intl.string(ec.t['87O5GB']),
              action: (0, i.jsx)(h.P3F, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(h.rsf, {
                      checked: (b && Z) || (E && D),
                      disabled: U,
                      onChange: (e, t) => {
                          B(e, L(e, (b && Z) || (E && D)), t);
                      }
                  })
              }),
              children: [
                  (0, i.jsx)(eE, {
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
                  (0, i.jsx)(eE, {
                      title: ec.intl.string(ec.t.BfFpW1),
                      description: ec.intl.string(ec.t.OzInYm),
                      hint: D ? void 0 : ec.intl.string(ec.t['3sYHXl']),
                      'aria-label': ec.intl.string(ec.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.rsf, {
                                  checked: E && D,
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
function ev(e) {
    let { game: t, gameApplication: n } = e,
        s = r.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]),
        l = (0, g.e7)([S.Z], () => (null != n ? n : S.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, i.jsx)(y.Z, {
        game: l,
        pid: s,
        size: y.Z.Sizes.SMALL
    });
}
function eT(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: l, onChange: a, clientSettingType: o, ariaLabel: c } = e,
        d = (0, g.cj)([N.ZP, W.Z, q.Z], () => (0, N.FZ)(t, [N.ZP, W.Z, q.Z])),
        u = (0, g.cj)([W.Z, q.Z], () => (0, N.b6)(t, !1, [W.Z, q.Z]), [t]),
        m = l(u),
        [p, f] = r.useState(m);
    r.useEffect(() => {
        f(m);
    }, [m]);
    let b = (e, n) => {
        let i = !e && p;
        if ((eC(n), f(e), a(e, d, u), i)) {
            var r, s;
            (0, M.l)(o, null != (s = null != (r = d.id) ? r : null == t ? void 0 : t.id) ? s : null);
        }
    };
    return (0, i.jsx)(eE, {
        title: t.name,
        icon: (0, i.jsx)(ev, {
            game: d,
            gameApplication: n
        }),
        'aria-label': c,
        action: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.rsf, {
                    checked: p,
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
        { legacyEnabled: n, oopEnabled: s } = (0, g.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        l = (0, g.Wu)([N.ZP], () => N.ZP.getGamesSeen(!0)),
        a = (0, v.Z)(l.map((e) => e.id)),
        o = !(0, er.supportsLegacy)(),
        c = (e, t) => {
            var i, r;
            eC(t), x.Z.setEnabled(e, s);
            let l = null != (r = null == (i = N.ZP.getCurrentGameForAnalytics()) ? void 0 : i.id) ? r : null;
            (0, P.ou)(e, P.AE.LEGACY, l), !e && n && (0, M.l)(P.AE.LEGACY, l);
        },
        d = (e, t, n) => {
            let { enabledOOP: i } = n;
            f.Z.toggleOverlay(t, e, i);
        },
        u = r.useMemo(() => ((0, er.supportsLegacy)() ? (o ? ec.intl.string(ec.t.r9jEV1) : ec.intl.string(ec.t.OzInYm)) : ec.intl.string(ec.t['8Ox6/P'])), [o]);
    return 0 === l.length
        ? (0, i.jsx)(eE, {
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
                      ea.iP && (0, i.jsx)('div', { className: ed.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ej, {
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
                      children: l.map((e, t) =>
                          (0, i.jsx)(
                              eT,
                              {
                                  rawGame: e,
                                  clientSettingType: P.AE.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: a[t],
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
        { oopEnabled: n, legacyEnabled: s } = (0, g.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        l = !(0, er.supportsOutOfProcess)(),
        a = (0, g.Wu)([N.ZP], () => N.ZP.getGamesSeen(!0)),
        o = (0, v.Z)(a.map((e) => e.id)),
        c = (e, t) => {
            var i, r;
            eC(t);
            let l = !e && n;
            x.Z.setEnabled(s, e);
            let a = null != (r = null == (i = N.ZP.getCurrentGameForAnalytics()) ? void 0 : i.id) ? r : null;
            (0, P.ou)(e, P.AE.OOP, a), l && (0, M.l)(P.AE.OOP, a);
        },
        d = (e, t, n) => {
            let { enabledLegacy: i } = n;
            f.Z.toggleOverlay(t, e, i);
        },
        u = r.useMemo(() => (ea.iP ? (l ? ec.intl.string(ec.t.C7bLTU) : ec.intl.string(ec.t.ndgADA)) : ec.intl.string(ec.t.m7X4a2)), [l]);
    return 0 === a.length
        ? (0, i.jsx)(eE, {
              title: ec.intl.string(ec.t['7BlVIi']),
              description: u,
              'aria-label': ec.intl.string(ec.t['7BlVIi']),
              className: ed.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e, t) => c(e, t)
                      }),
                      ea.iP && (0, i.jsx)('div', { className: ed.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ej, {
              onExpand: t,
              className: e ? ed.expandedContainer : void 0,
              title: ec.intl.string(ec.t['7BlVIi']),
              description: u,
              'aria-label': ec.intl.string(ec.t['7BlVIi']),
              action: (0, i.jsx)(h.P3F, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(h.rsf, {
                      checked: n,
                      disabled: l,
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
                                  clientSettingType: P.AE.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: l,
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
    let e = (0, g.e7)([J.ZP], () => J.ZP.getOverlayKeybind()),
        t = !(0, er.supportsLegacy)(),
        n = !(0, er.supportsOutOfProcess)(),
        [r, s] = (0, g.Wu)([N.ZP], () => [N.ZP.canShowAdminWarning, N.ZP.getVisibleGame()], []),
        l = null != s && s.elevated && r;
    return (0, i.jsx)(ex, {
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
                                    color: 'text-warning',
                                    className: ed.keybindAdminWarning,
                                    children: ec.intl.string(ec.t.NsowVV)
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: ed.keybindRecorderContainer,
                        children: (0, i.jsx)(E.Z, {
                            disabled: t && n,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                d()(null != e, 'Keybind should never be undefined'), b.Z.setKeybind(ep(eg({}, e), { shortcut: t }));
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
            x.Z.setNotificationDisabledSetting(e, !t);
        },
        s = (0, g.e7)([L.Z], () => L.Z.getDisabledNotifications());
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
                    ex,
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
    var e, t, n, s;
    let {
            avatarSizeMode: l,
            displayNameMode: a,
            displayUserMode: o
        } = (0, g.cj)([$.default], () => ({
            avatarSizeMode: $.default.getAvatarSizeMode(),
            displayNameMode: $.default.getDisplayNameMode(),
            displayUserMode: $.default.getDisplayUserMode()
        })),
        c = (0, g.e7)([X.default], () => X.default.getCurrentUser()),
        [d] = r.useState(() => [eR(ec.intl.string(ec.t.C0ZDvr), !0, !1), eR(ec.intl.string(ec.t.iOtj8P), !1, !1, !0), eR(ec.intl.string(ec.t['0oqNgI']), !1, !0)]),
        u = (0, g.e7)([B.ZP, K.Z], () => {
            let e = B.ZP.getWidgetByType(es.Odu.VOICE_V3);
            if (null == e) return null;
            let t = K.Z.getWidget(e.id);
            return null != t && (0, U.Aw)(t) ? t : null;
        }),
        m = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : eo.At,
        p = [
            null != c
                ? (function (e) {
                      let t = eR(e.username);
                      return (t.user = e), t;
                  })(c)
                : null,
            ...d
        ].filter(et.lm),
        f = [new Map(p.map((e) => [e.user.id, e])), p.map((e) => e.user.id)];
    return (0, i.jsxs)('div', {
        className: ed.voiceSettingsContainer,
        children: [
            (0, i.jsx)(ex, {
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
                    onChange: (e) => x.Z.setAvatarSizeMode(e),
                    value: l
                })
            }),
            (0, i.jsx)(ex, {
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
                    onChange: (e) => x.Z.setDisplayNameMode(e),
                    value: a
                })
            }),
            (0, i.jsxs)('div', {
                className: ed.widgetContainer,
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
                            overlayVoiceStates: f,
                            displayNameMode: a,
                            displayUserMode: o,
                            avatarSizeMode: l,
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
                            maxDisplayedVoiceStates: m
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: ed.widgetHeaderContainer,
                        children: [
                            (0, i.jsx)(G.PI, { children: ec.intl.string(ec.t.KNJ6Vl) }),
                            (0, i.jsx)(G.ls, {}),
                            (0, i.jsx)(G.RT, {
                                id: null != (n = null == u ? void 0 : u.id) ? n : 'voice-widget',
                                pinned: null != (s = null == u ? void 0 : u.pinned) && s
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(ex, {
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
                    onChange: (e) => x.Z.setDisplayUserMode(e),
                    value: o
                })
            }),
            (0, i.jsx)(ex, {
                title: ec.intl.string(ec.t['X/Uyzc']),
                titleId: ef,
                children: (0, i.jsx)('div', {
                    className: ed.sliderContainer,
                    children: (0, i.jsx)(h.iRW, {
                        initialValue: m,
                        onValueRender: (e) => (e < 1 ? ec.intl.string(ec.t.nrUzFB) : ''.concat(Math.floor(e))),
                        minValue: 0,
                        maxValue: 25,
                        onValueChange: function (e) {
                            null != u && (e < 1 ? (0, _.zG)(u.id, { voiceStatesMaxShown: eo.Og }) : (0, _.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
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
    let [e, t] = (0, T.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(el.L.DISMISS);
        };
    return ((0, C.ZP)(() => () => {
        t(el.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
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
                  (0, i.jsx)(h.zxk, {
                      className: ed.closeCircleButton,
                      onClick: () => n(),
                      children: ec.intl.string(ec.t.Q26diI)
                  }),
                  (0, i.jsx)('div', { className: ed.nuxDivider })
              ]
          });
}
function ew(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        s = null == n ? void 0 : n.id,
        l = (0, g.e7)([L.Z], () => L.Z.isLimitedInteractionOverrideEnabled(s), [s]),
        a = r.useMemo(() => null != t && (0, k.H8)(t.pid), [t]),
        o = (0, Z.Z)({ location: 'overlay_user_settings' }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: d } = (0, g.cj)([$.default], () => ({
            disableClickableRegions: $.default.disableClickableRegions,
            shouldShowKeybindIndicators: $.default.showKeybindIndicators
        }));
    return (0, i.jsxs)('div', {
        className: ed.overlayEnabledSettingsContainer,
        children: [
            (0, i.jsx)(ey, {}),
            o &&
                (0, i.jsx)(ex, {
                    children: (0, i.jsx)(h.j7V, {
                        value: d,
                        onChange: (e) => x.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: ec.intl.string(ec.t.XZTl9v)
                    })
                }),
            null != s &&
                (0, i.jsxs)(ex, {
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
                            value: l || a,
                            disabled: a,
                            onChange: (e) => {
                                null != n && x.Z.setLimitedInteractionOverride(n.id, e);
                            },
                            hideBorder: !0
                        })
                    ]
                }),
            (0, i.jsxs)(ex, {
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
                            x.Z.setDisableClickableRegions(!c);
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
            let e = (0, g.e7)([Y.Z], () => Y.Z.getStreamerActiveStreamMetadata()),
                t = (0, g.e7)(
                    [N.ZP],
                    () => {
                        let e = N.ZP.getVisibleGame();
                        return null == e ? null : e;
                    },
                    [],
                    o()
                ),
                [n] = (0, v.Z)([null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0]);
            return {
                runningGame: t,
                runningGameApplication: n
            };
        })(),
        l = (0, D.o4)('user_settings').overlayV3UI,
        a = (0, g.e7)([X.default], () => X.default.getCurrentUser());
    (0, C.ZP)(() => {
        if (en.isPlatformEmbedded) return (0, I.Ky)(), I.P7;
    });
    let c = e_(eh);
    return (m().isEqual(c, eh) || (ee.default.track(es.rMx.OVERLAY_SETTINGS_UPDATED, c), (eh = c)), null == a)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: ec.intl.string(ec.t['9cb1U1']),
                      children: [
                          l ? (0, i.jsx)(eZ, {}) : null,
                          (0, i.jsxs)('div', {
                              className: ed.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(eS, {
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
