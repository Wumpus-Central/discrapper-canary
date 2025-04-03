n.d(t, { Z: () => eW }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(348327),
    o = n.n(l),
    c = n(512722),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    g = n(442837),
    p = n(704215),
    h = n(481060),
    f = n(224706),
    b = n(660216),
    N = n(765250),
    x = n(13245),
    _ = n(825209),
    E = n(615287),
    j = n(593472),
    O = n(493773),
    C = n(887278),
    S = n(812206),
    v = n(835473),
    T = n(243778),
    I = n(594190),
    y = n(320724),
    A = n(925329),
    P = n(297700),
    R = n(444295),
    D = n(486016),
    Z = n(32300),
    w = n(809357),
    k = n(371651),
    W = n(829907),
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
    K = n(77498),
    q = n(355863),
    X = n(283595),
    J = n(594174),
    Q = n(556296),
    $ = n(808506),
    ee = n(237997),
    et = n(626135),
    en = n(823379),
    er = n(358085),
    ei = n(13140),
    es = n(145597),
    ea = n(981631),
    el = n(921944),
    eo = n(987650),
    ec = n(501787),
    ed = n(388032),
    eu = n(91481),
    em = n(131970),
    eg = n(730462);
function ep(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ef = ex(null),
    eb = 'voice-widget-display-users',
    eN = [0, 5, 10, 15, 20, 25];
function ex(e) {
    var t;
    let n = ee.default.getNotificationPositionMode(),
        r = n !== ea._vf.DISABLED,
        i = Q.ZP.getOverlayKeybind(),
        s = Q.ZP.getOverlayChatKeybind();
    return {
        enabled: $.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: L.Z.isNotificationDisabled(D.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        hotkey: null != i ? (0, ei.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, ei.BB)(s.shortcut) : null,
        text_opacity_slider: ee.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : $.default.enabled
    };
}
function e_(e) {
    let { children: t, title: n, className: i, titleId: s } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: eu.formItemTitle,
                    id: s,
                    children: n
                }),
            (0, r.jsx)('div', {
                className: a()(eu.rowContainer, i),
                children: t
            })
        ]
    });
}
function eE(e) {
    let { header: t, icon: n, title: i, description: s, action: l, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, r.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: a()(eu.groupContainer, u),
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: eu.groupHeader,
                    children: t
                }),
            (0, r.jsxs)('div', {
                className: eu.groupContent,
                children: [
                    null != n &&
                        (0, r.jsx)('div', {
                            className: eu.groupIcon,
                            children: n
                        }),
                    (0, r.jsxs)('div', {
                        className: eu.groupMainContent,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: eu.groupTitle,
                                children: i
                            }),
                            null != s &&
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: s
                                }),
                            null != o &&
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-xxs/medium',
                                    color: 'text-muted',
                                    children: o
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: eu.groupAction,
                        children: l
                    })
                ]
            })
        ]
    });
}
function ej(e) {
    var { children: t, className: n, onExpand: s } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['children', 'className', 'onExpand']);
    let [o, c] = i.useState(!1),
        d = (e) => {
            c(e), null == s || s(e);
        };
    return (0, r.jsx)(h.zF9, {
        className: eu.collapseable,
        collapsibleContent: (0, r.jsx)('div', {
            className: eu.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eE,
                eh(ep({}, l), {
                    onClick: (e) => {
                        d(!o), null == t || t(e);
                    },
                    className: a()(eu.mainCollapseableContainer, n),
                    action: (0, r.jsxs)('div', {
                        className: eu.groupCollapsedAction,
                        children: [
                            l.action,
                            o
                                ? (0, r.jsx)(h.CJ0, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'var(--interactive-active)'
                                  })
                                : (0, r.jsx)(h.Fbu, {
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
        e.preventDefault(), e.stopPropagation();
    };
function eS(e) {
    var t, n, s;
    let { runningGame: a, runningGameApplication: l } = e,
        c = null == a ? void 0 : a.pid,
        d = (0, g.e7)([k.default], () => (null == a || null == c ? null : k.default.getTrackedGameByPid(c)), [a, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, g.cj)(
            [K.Z, X.Z],
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
                return (0, I.b6)(a, !1, [K.Z, X.Z]);
            },
            [a, d]
        ),
        p = (0, g.e7)([I.ZP, K.Z, X.Z], () => (null == a ? null : (0, I.FZ)(a, [I.ZP, K.Z, X.Z])), [a], o()),
        [b, N] = i.useState(m),
        [_, S] = i.useState(u),
        [v, T] = i.useState(!1);
    i.useEffect(() => {
        N(m), S(u);
    }, [m, u]);
    let y = (0, C.$1)(),
        D = !(0, es.supportsOutOfProcess)(),
        { legacyEnabled: Z, oopEnabled: w } = (0, g.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        W = (e, t, n) => {
            var r, i, s;
            if ((eC(n), null == a)) return;
            let l = !1,
                o = !1;
            switch (t) {
                case R.AE.LEGACY_GAME:
                    S(e), f.Z.toggleOverlay(a, e, b), (l = !e && _);
                    break;
                case R.AE.OOP_GAME:
                    N(e), f.Z.toggleOverlay(a, _, e), (o = !e && b);
                    break;
                case R.AE.LEGACY:
                    x.Z.setEnabled(e, w), (0, R.ou)(e, R.AE.LEGACY, null != (r = a.id) ? r : null);
                    break;
                case R.AE.OOP:
                    x.Z.setEnabled(Z, e), (0, R.ou)(e, R.AE.OOP, null != (i = a.id) ? i : null);
            }
            (l || o) && (0, M.l)(l ? R.AE.LEGACY_GAME : R.AE.OOP_GAME, null != (s = a.id) ? s : null);
        },
        L = (e, t) => {
            let n = !t && e,
                r = !w && b,
                i = !Z && _,
                s = !b && w,
                a = !_ && Z;
            switch (!0) {
                case n && (r || i) && (s || a):
                    return 'both';
                case n && (r || i):
                    return 'global';
                default:
                    return 'game';
            }
        },
        B = (e, t, n) => {
            if ((eC(n), null == a)) return;
            let r = !1,
                i = !1;
            switch (t) {
                case 'game':
                    f.Z.toggleOverlay(a, e, e), S(e), N(e), (r = !e && _), (i = !e && b);
                    break;
                case 'global':
                    x.Z.setEnabled(e, e), (r = !e && Z), (i = !e && w);
                    break;
                case 'both':
                    x.Z.setEnabled(e, e), f.Z.toggleOverlay(a, e, e), S(e), N(e), (r = (!e && Z) || (!e && _)), (i = (!e && w) || (!e && b));
            }
            let s = null;
            if ((r ? (s = 'game' === t ? R.AE.LEGACY_GAME : R.AE.LEGACY) : i && (s = 'game' === t ? R.AE.OOP_GAME : R.AE.OOP), null != s)) {
                var l;
                (0, M.l)(s, null != (l = a.id) ? l : null);
            }
        },
        U = y && D,
        V = !Z && !w,
        G = !b && !Z && _ && !y,
        F = !_ && !w && b && !D,
        H = (null == d ? void 0 : d.overlayMethod) === E.gl.Disabled,
        z = (null == d ? void 0 : d.state) === E.mM.OVERLAY_RENDERING && !H,
        Y = (null == d ? void 0 : d.state) != null && eO.has(d.state) && !H,
        q = (null == d ? void 0 : d.overlayMethod) === E.gl.OutOfProcess,
        J = (null == d ? void 0 : d.overlayMethod) === E.gl.OutOfProcessLimitedInteraction,
        Q = (null == d ? void 0 : d.overlayMethod) === E.gl.Hook,
        $ = (null == d ? void 0 : d.state) === E.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === E.mM.OVERLAY_CRASHED_DISABLED,
        ee = !b && !_,
        [et, en] = (() => {
            switch (!0) {
                case z && q:
                    return [
                        ed.NW.format(ed.t.hFVBIi, {
                            overlayMethod: ed.NW.string(ed.t.a3eXS0),
                            overlayMethodHook: function (e, t) {
                                return (0, r.jsx)(
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
                case z && J:
                    return [
                        ed.NW.format(ed.t.hFVBIi, {
                            overlayMethod: ed.NW.string(ed.t['506AbW']),
                            overlayMethodHook: function (e, t) {
                                return (0, r.jsx)(
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
                case z && Q:
                    return [
                        ed.NW.format(ed.t.hFVBIi, {
                            overlayMethod: ed.NW.string(ed.t.bvlpDQ),
                            overlayMethodHook: function (e, t) {
                                return (0, r.jsx)(
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
                                case (null == d ? void 0 : d.fullscreenType) !== j.Jx.BORDERLESS_FULLSCREEN:
                                    return ed.NW.string(ed.t.mJmbeH);
                                case D:
                                    return ed.NW.string(ed.t.C7bLTU);
                                case !(null != (e = null == d ? void 0 : d.oopEnabled) && e):
                                    return ed.NW.string(ed.t.WiY24u);
                                case !w:
                                    return ed.NW.string(ed.t.cAFVsL);
                                case !(null != (t = null == d ? void 0 : d.supportsOutOfProcess) && t):
                                    return ed.NW.string(ed.t.XcGEcn);
                                default:
                                    return ed.NW.string(ed.t.bJXH2t);
                            }
                        })()
                    ];
                case $:
                    return [ed.NW.string(ed.t.OFC2a2), null];
                case U:
                    return [ed.NW.string(ed.t.m7X4a2), null];
                case V:
                    return [ed.NW.string(ed.t['9DUS5u']), null];
                case ee:
                    return [ed.NW.string(ed.t.nQ9EdH), null];
                case G:
                case F:
                    return [ed.NW.string(ed.t.VWUn0d), null];
                case Y:
                    if (q) return [ed.NW.string(ed.t['s8+CFh']), null];
                    if (Q) return [ed.NW.string(ed.t.JEEdqq), null];
                    if (J) return [ed.NW.string(ed.t.pzBMwc), null];
                    return [ed.NW.string(ed.t['2Xhy9v']), null];
                case null == d:
                    return [ed.NW.string(ed.t.vwHPRk), null];
                default:
                    return [ed.NW.string(ed.t.ONovPz), null];
            }
        })();
    (0, O.ZP)(() => {
        f.Z.getDetectableGames();
    });
    let [er, ei] = i.useMemo(() => (Y ? ['text-muted', h.TVs.colors.TEXT_MUTED.css] : z && J ? ['text-warning', h.TVs.colors.TEXT_WARNING.css] : z && q ? ['text-positive', h.TVs.colors.TEXT_POSITIVE.css] : z && Q ? ['text-primary', h.TVs.colors.TEXT_PRIMARY.css] : ['interactive-normal', h.TVs.colors.INTERACTIVE_NORMAL.css]), [Y, z, J, q, Q]);
    return null == a
        ? null
        : (0, r.jsxs)(ej, {
              onExpand: T,
              className: v ? eu.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null != (s = null != (n = null != (t = null == l ? void 0 : l.name) ? t : null == p ? void 0 : p.name) ? n : null == a ? void 0 : a.gameName) ? s : '',
                      null != p && p.verified
                          ? (0, r.jsx)(h.ua7, {
                                text: ed.NW.string(ed.t['4PJP5u']),
                                children: (e) =>
                                    (0, r.jsx)(
                                        P.Z,
                                        eh(
                                            ep(
                                                {
                                                    size: 16,
                                                    color: h.TVs.colors.BG_BRAND.css
                                                },
                                                e
                                            ),
                                            {
                                                children: (0, r.jsx)(h.kmB, {
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
              description: et,
              hint: null != en ? en : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      z || Y
                          ? (0, r.jsx)(h.pzj, {
                                size: 'xxs',
                                color: ei
                            })
                          : (0, r.jsx)('div', { className: eu.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: er,
                          children: ed.NW.string(ed.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, r.jsx)(A.Z, {
                  game: l,
                  pid: null == a ? void 0 : a.pid,
                  size: A.Z.Sizes.MEDIUM
              }),
              'aria-label': ed.NW.string(ed.t['87O5GB']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eC(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (b && w) || (_ && Z),
                      disabled: U,
                      onChange: (e, t) => {
                          B(e, L(e, (b && w) || (_ && Z)), t);
                      }
                  })
              }),
              children: [
                  (0, r.jsx)(eE, {
                      title: ed.NW.string(ed.t['7BlVIi']),
                      description: ed.NW.string(ed.t.ndgADA),
                      hint: w ? void 0 : ed.NW.string(ed.t.cAFVsL),
                      'aria-label': ed.NW.string(ed.t['7BlVIi']),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: b && w,
                                  disabled: D,
                                  onChange: (e, t) => {
                                      e && !w ? W(e, R.AE.OOP, t) : W(e, R.AE.OOP_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: eu.emptySpacer })
                          ]
                      })
                  }),
                  (0, r.jsx)(eE, {
                      title: ed.NW.string(ed.t.BfFpW1),
                      description: ed.NW.string(ed.t.OzInYm),
                      hint: Z ? void 0 : ed.NW.string(ed.t['3sYHXl']),
                      'aria-label': ed.NW.string(ed.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: _ && Z,
                                  disabled: y,
                                  onChange: (e, t) => {
                                      e && !Z ? W(e, R.AE.LEGACY, t) : W(e, R.AE.LEGACY_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: eu.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function ev(e) {
    let { game: t, gameApplication: n } = e,
        s = i.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]),
        a = (0, g.e7)([S.Z], () => (null != n ? n : S.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(A.Z, {
        game: a,
        pid: s,
        size: A.Z.Sizes.SMALL
    });
}
function eT(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: a, onChange: l, clientSettingType: o, ariaLabel: c } = e,
        d = (0, g.cj)([I.ZP, K.Z, X.Z], () => (0, I.FZ)(t, [I.ZP, K.Z, X.Z])),
        u = (0, g.cj)([K.Z, X.Z], () => (0, I.b6)(t, !1, [K.Z, X.Z]), [t]),
        m = a(u),
        [p, f] = i.useState(m);
    i.useEffect(() => {
        f(m);
    }, [m]);
    let b = (e, n) => {
        let r = !e && p;
        if ((eC(n), f(e), l(e, d, u), r)) {
            var i, s;
            (0, M.l)(o, null != (s = null != (i = d.id) ? i : null == t ? void 0 : t.id) ? s : null);
        }
    };
    return (0, r.jsx)(eE, {
        title: t.name,
        icon: (0, r.jsx)(ev, {
            game: d,
            gameApplication: n
        }),
        'aria-label': c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.rsf, {
                    checked: p,
                    disabled: s,
                    onChange: (e, t) => b(e, t)
                }),
                (0, r.jsx)('div', { className: eu.emptySpacer })
            ]
        })
    });
}
function eI() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, g.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        a = (0, g.Wu)([I.ZP], () => I.ZP.getGamesSeen(!0)),
        l = (0, v.Z)(a.map((e) => e.id)),
        o = (0, C.$1)(),
        c = (e, t) => {
            var r, i;
            eC(t), x.Z.setEnabled(e, s);
            let a = null != (i = null == (r = I.ZP.getCurrentGameForAnalytics()) ? void 0 : r.id) ? i : null;
            (0, R.ou)(e, R.AE.LEGACY, a), !e && n && (0, M.l)(R.AE.LEGACY, a);
        },
        d = (e, t, n) => {
            let { enabledOOP: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (eo.iP ? (o ? ed.NW.string(ed.t.r9jEV1) : ed.NW.string(ed.t.OzInYm)) : ed.NW.string(ed.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, r.jsx)(eE, {
              title: ed.NW.string(ed.t.BfFpW1),
              description: u,
              'aria-label': ed.NW.string(ed.t.BfFpW1),
              className: eu.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      eo.iP && (0, r.jsx)('div', { className: eu.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(ej, {
              onExpand: t,
              className: e ? eu.expandedContainer : void 0,
              title: ed.NW.string(ed.t.BfFpW1),
              description: u,
              'aria-label': ed.NW.string(ed.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eC(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: eu.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ed.NW.string(ed.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: eu.scroller,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              eT,
                              {
                                  rawGame: e,
                                  clientSettingType: R.AE.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: l[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: ed.NW.format(ed.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ey() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, g.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        a = !(0, es.supportsOutOfProcess)(),
        l = (0, g.Wu)([I.ZP], () => I.ZP.getGamesSeen(!0)),
        o = (0, v.Z)(l.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            eC(t);
            let a = !e && n;
            x.Z.setEnabled(s, e);
            let l = null != (i = null == (r = I.ZP.getCurrentGameForAnalytics()) ? void 0 : r.id) ? i : null;
            (0, R.ou)(e, R.AE.OOP, l), a && (0, M.l)(R.AE.OOP, l);
        },
        d = (e, t, n) => {
            let { enabledLegacy: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (eo.iP ? (a ? ed.NW.string(ed.t.C7bLTU) : ed.NW.string(ed.t.ndgADA)) : ed.NW.string(ed.t.m7X4a2)), [a]);
    return 0 === l.length
        ? (0, r.jsx)(eE, {
              title: ed.NW.string(ed.t['7BlVIi']),
              description: u,
              'aria-label': ed.NW.string(ed.t['7BlVIi']),
              className: eu.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      eo.iP && (0, r.jsx)('div', { className: eu.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(ej, {
              onExpand: t,
              className: e ? eu.expandedContainer : void 0,
              title: ed.NW.string(ed.t['7BlVIi']),
              description: u,
              'aria-label': ed.NW.string(ed.t['7BlVIi']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eC(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: eu.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ed.NW.string(ed.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: eu.scroller,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              eT,
                              {
                                  rawGame: e,
                                  clientSettingType: R.AE.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: a,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: ed.NW.format(ed.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eA() {
    let e = (0, g.e7)([Q.ZP], () => Q.ZP.getOverlayKeybind()),
        t = (0, C.$1)(),
        n = !(0, es.supportsOutOfProcess)(),
        [i, s] = (0, g.Wu)([I.ZP], () => [I.ZP.canShowAdminWarning, I.ZP.getVisibleGame()], []),
        a = null != s && s.elevated && i;
    return (0, r.jsx)(e_, {
        children: (0, r.jsx)('div', {
            className: eu.keybindMainContainer,
            children: (0, r.jsxs)('div', {
                className: eu.keybindContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: eu.keybindHeaderContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: ed.NW.string(ed.t.VsAZcH)
                            }),
                            a &&
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-warning',
                                    className: eu.keybindAdminWarning,
                                    children: ed.NW.string(ed.t.NsowVV)
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: eu.keybindRecorderContainer,
                        children: (0, r.jsx)(_.Z, {
                            disabled: t && n,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                d()(null != e, 'Keybind should never be undefined'), b.Z.setKeybind(eh(ep({}, e), { shortcut: t }));
                            }
                        })
                    })
                ]
            })
        })
    });
}
let eP = (e, t) =>
    [
        {
            title: ed.t.eVE4LS,
            description: ed.t['72WNqq'],
            disabledSetting: D.OverlayNotificationDisabledSetting.TEXT_CHAT
        },
        {
            title: ed.t.hqsZJS,
            description: ed.t.kHjdqa,
            disabledSetting: D.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE
        },
        e && {
            title: ed.t.sop3rq,
            description: ed.t.pjgffX,
            disabledSetting: D.OverlayNotificationDisabledSetting.GAME_ACTIVITY
        },
        t && {
            title: ed.t['2QVhbW'],
            description: ed.t.wQ4ilJ,
            disabledSetting: D.OverlayNotificationDisabledSetting.NOW_PLAYING
        }
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eR() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, Z.o4)('user_settings'),
        n = eP(e, t),
        i = (e) => (t) => {
            x.Z.setNotificationDisabledSetting(e, !t);
        },
        s = (0, g.e7)([L.Z], () => L.Z.getDisabledNotifications());
    return (0, r.jsxs)('div', {
        className: eu.notificationSettingsContainer,
        children: [
            (0, r.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: ed.NW.string(ed.t.xOE5bG)
            }),
            n.map((e) =>
                (0, r.jsxs)(
                    e_,
                    {
                        className: eu.notificationItem,
                        children: [
                            (0, r.jsxs)('div', {
                                className: eu.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: ed.NW.string(e.title)
                                    }),
                                    (0, r.jsx)(h.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ed.NW.string(e.description)
                                    })
                                ]
                            }),
                            (0, r.jsx)(h.j7V, {
                                value: !s.has(e.disabledSetting),
                                onChange: i(e.disabledSetting),
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
function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new z.Z({
            channelId: '123',
            userId: i,
            sessionId: '789',
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: r
        }),
        user: new H.Z({
            id: i,
            username: e
        }),
        member: {
            nick: e,
            userId: i,
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
function eZ() {
    var e, t, n, s;
    let {
            avatarSizeMode: a,
            displayNameMode: l,
            displayUserMode: o
        } = (0, g.cj)([ee.default], () => ({
            avatarSizeMode: ee.default.getAvatarSizeMode(),
            displayNameMode: ee.default.getDisplayNameMode(),
            displayUserMode: ee.default.getDisplayUserMode()
        })),
        c = (0, g.e7)([J.default], () => J.default.getCurrentUser()),
        [d] = i.useState(() => [eD(ed.NW.string(ed.t.C0ZDvr), !0, !1), eD(ed.NW.string(ed.t.iOtj8P), !1, !1, !0), eD(ed.NW.string(ed.t['0oqNgI']), !1, !0)]),
        u = (0, g.e7)([B.ZP, q.Z], () => {
            let e = B.ZP.getWidgetByType(ea.Odu.VOICE_V3);
            if (null == e) return null;
            let t = q.Z.getWidget(e.id);
            return null != t && (0, U.Aw)(t) ? t : null;
        }),
        m = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : ec.At,
        p = [
            null != c
                ? (function (e) {
                      let t = eD(e.username);
                      return (t.user = e), t;
                  })(c)
                : null,
            ...d
        ].filter(en.lm),
        f = [new Map(p.map((e) => [e.user.id, e])), p.map((e) => e.user.id)];
    return (0, r.jsxs)('div', {
        className: eu.voiceSettingsContainer,
        children: [
            (0, r.jsx)(e_, {
                title: ed.NW.string(ed.t.dnvZSk),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.NW.string(ed.t.YcOxtr),
                            value: ea.ipw.LARGE
                        },
                        {
                            label: ed.NW.string(ed.t.BKIKq6),
                            value: ea.ipw.SMALL
                        }
                    ],
                    className: eu.select,
                    onChange: (e) => x.Z.setAvatarSizeMode(e),
                    value: a
                })
            }),
            (0, r.jsx)(e_, {
                title: ed.NW.string(ed.t.J0dpcH),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.NW.string(ed.t.nBmDra),
                            value: ea.wC$.ALWAYS
                        },
                        {
                            label: ed.NW.string(ed.t['2OvIZW']),
                            value: ea.wC$.ONLY_WHILE_SPEAKING
                        },
                        {
                            label: ed.NW.string(ed.t.ekjlPD),
                            value: ea.wC$.NEVER
                        }
                    ],
                    className: eu.select,
                    onChange: (e) => x.Z.setDisplayNameMode(e),
                    value: l
                })
            }),
            (0, r.jsxs)('div', {
                className: eu.widgetContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: eu.voiceWidgetContainer,
                        children: (0, r.jsx)(V.kI, {
                            id: 'voice-widget',
                            title: ed.NW.string(ed.t.KNJ6Vl),
                            channel: (0, F.kt)({
                                id: '123',
                                name: 'Test Channel',
                                type: ea.d4z.GUILD_VOICE,
                                guild_id: '456'
                            }),
                            overlayVoiceStates: f,
                            displayNameMode: l,
                            displayUserMode: o,
                            avatarSizeMode: a,
                            widget: ea.Odu.VOICE,
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
                    (0, r.jsxs)('div', {
                        className: eu.widgetHeaderContainer,
                        children: [
                            (0, r.jsx)(G.PI, { children: ed.NW.string(ed.t.KNJ6Vl) }),
                            (0, r.jsx)(G.ls, {}),
                            (0, r.jsx)(G.RT, {
                                id: null != (n = null == u ? void 0 : u.id) ? n : 'voice-widget',
                                pinned: null != (s = null == u ? void 0 : u.pinned) && s
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(e_, {
                title: ed.NW.string(ed.t.swsWWF),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.NW.string(ed.t.nBmDra),
                            value: ea.OYC.ALWAYS
                        },
                        {
                            label: ed.NW.string(ed.t['2OvIZW']),
                            value: ea.OYC.ONLY_WHILE_SPEAKING
                        }
                    ],
                    className: eu.select,
                    onChange: (e) => x.Z.setDisplayUserMode(e),
                    value: o
                })
            }),
            (0, r.jsx)(e_, {
                title: ed.NW.string(ed.t['X/Uyzc']),
                titleId: eb,
                children: (0, r.jsx)('div', {
                    className: eu.sliderContainer,
                    children: (0, r.jsx)(h.iRW, {
                        initialValue: m,
                        onValueRender: (e) => (e < 1 ? ed.NW.string(ed.t.nrUzFB) : ''.concat(Math.floor(e))),
                        minValue: 0,
                        maxValue: 25,
                        onValueChange: function (e) {
                            null != u && (e < 1 ? (0, N.zG)(u.id, { voiceStatesMaxShown: ec.Og }) : (0, N.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
                        },
                        markers: eN,
                        barStyles: { background: h.TVs.colors.BG_MOD_STRONG.css },
                        fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                        'aria-labelledby': eb,
                        onMarkerRender: (e) => (e < 1 ? ed.NW.string(ed.t.nrUzFB) : ''.concat(Math.floor(e)))
                    })
                })
            })
        ]
    });
}
function ew() {
    let [e, t] = (0, T.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(el.L.DISMISS);
        };
    return ((0, O.ZP)(() => () => {
        t(el.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)('div', {
              className: eu.overlaySettingsNux,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: em.Z,
                          alt: ed.NW.string(ed.t.mdXZh4),
                          className: eu.nuxFirstImage
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: eu.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: ed.NW.string(ed.t.jzjJQk)
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: ed.NW.string(ed.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: eg.Z,
                          alt: ed.NW.string(ed.t.mdXZh4),
                          className: eu.nuxUserSettingsImage
                      })
                  }),
                  (0, r.jsx)(h.zxk, {
                      className: eu.closeCircleButton,
                      onClick: () => n(),
                      children: ed.NW.string(ed.t.Q26diI)
                  }),
                  (0, r.jsx)('div', { className: eu.nuxDivider })
              ]
          });
}
function ek(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        s = null == n ? void 0 : n.id,
        a = (0, g.e7)([L.Z], () => L.Z.isLimitedInteractionOverrideEnabled(s), [s]),
        l = i.useMemo(() => null != t && (0, W.H8)(t.pid), [t]),
        o = (0, w.Z)({ location: 'overlay_user_settings' }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: d } = (0, g.cj)([ee.default], () => ({
            disableClickableRegions: ee.default.disableClickableRegions,
            shouldShowKeybindIndicators: ee.default.showKeybindIndicators
        }));
    return (0, r.jsxs)('div', {
        className: eu.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eA, {}),
            o &&
                (0, r.jsx)(e_, {
                    children: (0, r.jsx)(h.j7V, {
                        value: d,
                        onChange: (e) => x.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: ed.NW.string(ed.t.XZTl9v)
                    })
                }),
            null != s &&
                (0, r.jsxs)(e_, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eu.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: ed.NW.string(ed.t.wgVQND)
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: ed.NW.string(ed.t['5SsyFx'])
                                })
                            ]
                        }),
                        (0, r.jsx)(h.j7V, {
                            value: a || l,
                            disabled: l,
                            onChange: (e) => {
                                null != n && x.Z.setLimitedInteractionOverride(n.id, e);
                            },
                            hideBorder: !0
                        })
                    ]
                }),
            (0, r.jsxs)(e_, {
                children: [
                    (0, r.jsxs)('div', {
                        className: eu.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: ed.NW.string(ed.t['+eFXxs'])
                            }),
                            (0, r.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: ed.NW.string(ed.t.kivMAg)
                            })
                        ]
                    }),
                    (0, r.jsx)(h.j7V, {
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
function eW(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: s } = (function () {
            let e = (0, g.e7)([Y.Z], () => Y.Z.getStreamerActiveStreamMetadata()),
                t = (0, g.e7)(
                    [I.ZP],
                    () => {
                        let e = I.ZP.getVisibleGame();
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
        a = (0, Z.o4)('user_settings').overlayV3UI,
        l = (0, g.e7)([J.default], () => J.default.getCurrentUser());
    (0, O.ZP)(() => {
        if (er.isPlatformEmbedded) return (0, y.Ky)(), y.P7;
    });
    let c = ex(ef);
    return (m().isEqual(c, ef) || (et.default.track(ea.rMx.OVERLAY_SETTINGS_UPDATED, c), (ef = c)), null == l)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: ed.NW.string(ed.t['9cb1U1']),
                      children: [
                          a ? (0, r.jsx)(ew, {}) : null,
                          (0, r.jsxs)('div', {
                              className: eu.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eS, {
                                      runningGame: i,
                                      runningGameApplication: s
                                  }),
                                  (0, r.jsx)(ey, {}),
                                  (0, r.jsx)(eI, {})
                              ]
                          }),
                          (0, r.jsx)('div', { className: eu.settingsDivider })
                      ]
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsx)(ek, {
                              runningGame: i,
                              runningGameApplication: s
                          }),
                          (0, r.jsx)('div', { className: eu.settingsDivider })
                      ]
                  }),
                  (0, r.jsxs)(h.hjN, {
                      title: ed.NW.string(ed.t.r1TZfn),
                      children: [(0, r.jsx)(eZ, {}), (0, r.jsx)('div', { className: eu.settingsDivider })]
                  }),
                  (0, r.jsx)(h.hjN, { children: (0, r.jsx)(eR, {}) })
              ]
          });
}
