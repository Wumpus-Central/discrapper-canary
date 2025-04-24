n.d(t, { Z: () => eL }), n(953529), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(348327),
    o = n.n(a),
    c = n(512722),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    p = n(442837),
    g = n(704215),
    h = n(481060),
    f = n(224706),
    b = n(660216),
    _ = n(765250),
    x = n(13245),
    E = n(825209),
    C = n(615287),
    j = n(593472),
    O = n(493773),
    S = n(887278),
    v = n(812206),
    T = n(835473),
    I = n(243778),
    N = n(594190),
    y = n(320724),
    A = n(925329),
    P = n(297700),
    R = n(444295),
    D = n(486016),
    Z = n(32300),
    w = n(809357),
    k = n(371651),
    L = n(829907),
    B = n(624864),
    M = n(610394),
    U = n(957148),
    V = n(340101),
    G = n(243487),
    F = n(430561),
    H = n(131704),
    z = n(598077),
    W = n(189786),
    Y = n(199902),
    K = n(77498),
    q = n(355863),
    X = n(283595),
    Q = n(594174),
    J = n(556296),
    $ = n(808506),
    ee = n(237997),
    et = n(626135),
    en = n(823379),
    ei = n(358085),
    er = n(13140),
    es = n(145597),
    el = n(981631),
    ea = n(921944),
    eo = n(987650),
    ec = n(501787),
    ed = n(388032),
    eu = n(91481),
    em = n(131970),
    ep = n(730462);
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
function eh(e, t) {
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
let ef = ex(null),
    eb = 'voice-widget-display-users',
    e_ = [0, 5, 10, 15, 20, 25];
function ex(e) {
    var t;
    let n = ee.default.getNotificationPositionMode(),
        i = n !== el._vf.DISABLED,
        r = J.ZP.getOverlayKeybind(),
        s = J.ZP.getOverlayChatKeybind();
    return {
        enabled: $.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: B.Z.isNotificationDisabled(D.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        hotkey: null != r ? (0, er.BB)(r.shortcut) : null,
        text_activation_hotkey: null != s ? (0, er.BB)(s.shortcut) : null,
        text_opacity_slider: ee.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : $.default.enabled
    };
}
function eE(e) {
    let { children: t, title: n, className: r, titleId: s } = e;
    return (0, i.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, i.jsx)(h.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: eu.formItemTitle,
                    id: s,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: l()(eu.rowContainer, r),
                children: t
            })
        ]
    });
}
function eC(e) {
    let { header: t, icon: n, title: r, description: s, action: a, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: l()(eu.groupContainer, u),
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: eu.groupHeader,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: eu.groupContent,
                children: [
                    null != n &&
                        (0, i.jsx)('div', {
                            className: eu.groupIcon,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: eu.groupMainContent,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: eu.groupTitle,
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
                        className: eu.groupAction,
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
        className: eu.collapseable,
        collapsibleContent: (0, i.jsx)('div', {
            className: eu.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(
                eC,
                eh(eg({}, a), {
                    onClick: (e) => {
                        d(!o), null == t || t(e);
                    },
                    className: l()(eu.mainCollapseableContainer, n),
                    action: (0, i.jsxs)('div', {
                        className: eu.groupCollapsedAction,
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
let eO = new Set([C.mM.INITIALIZING, C.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, C.mM.WAITING_FOR_MODULE_TRACKING, C.mM.WAITING_FOR_OVERLAY_OPEN]),
    eS = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ev(e) {
    var t, n, s;
    let { runningGame: l, runningGameApplication: a } = e,
        c = null == l ? void 0 : l.pid,
        d = (0, p.e7)([k.default], () => (null == l || null == c ? null : k.default.getTrackedGameByPid(c)), [l, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, p.cj)(
            [K.Z, X.Z],
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
                return (0, N.b6)(l, !1, [K.Z, X.Z]);
            },
            [l, d]
        ),
        g = (0, p.e7)([N.ZP, K.Z, X.Z], () => (null == l ? null : (0, N.FZ)(l, [N.ZP, K.Z, X.Z])), [l], o()),
        [b, _] = r.useState(m),
        [E, v] = r.useState(u),
        [T, I] = r.useState(!1);
    r.useEffect(() => {
        _(m), v(u);
    }, [m, u]);
    let y = (0, S.$1)(),
        D = !(0, es.supportsOutOfProcess)(),
        { legacyEnabled: Z, oopEnabled: w } = (0, p.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        L = (e, t, n) => {
            var i, r, s;
            if ((eS(n), null == l)) return;
            let a = !1,
                o = !1;
            switch (t) {
                case R.AE.LEGACY_GAME:
                    v(e), f.Z.toggleOverlay(l, e, b), (a = !e && E);
                    break;
                case R.AE.OOP_GAME:
                    _(e), f.Z.toggleOverlay(l, E, e), (o = !e && b);
                    break;
                case R.AE.LEGACY:
                    x.Z.setEnabled(e, w), (0, R.ou)(e, R.AE.LEGACY, null != (i = l.id) ? i : null);
                    break;
                case R.AE.OOP:
                    x.Z.setEnabled(Z, e), (0, R.ou)(e, R.AE.OOP, null != (r = l.id) ? r : null);
            }
            (a || o) && (0, U.l)(a ? R.AE.LEGACY_GAME : R.AE.OOP_GAME, null != (s = l.id) ? s : null);
        },
        B = (e, t) => {
            let n = !t && e,
                i = !w && b,
                r = !Z && E,
                s = !b && w,
                l = !E && Z;
            switch (!0) {
                case n && (i || r) && (s || l):
                    return 'both';
                case n && (i || r):
                    return 'global';
                default:
                    return 'game';
            }
        },
        M = (e, t, n) => {
            if ((eS(n), null == l)) return;
            let i = !1,
                r = !1;
            switch (t) {
                case 'game':
                    f.Z.toggleOverlay(l, e, e), v(e), _(e), (i = !e && E), (r = !e && b);
                    break;
                case 'global':
                    x.Z.setEnabled(e, e), (i = !e && Z), (r = !e && w);
                    break;
                case 'both':
                    x.Z.setEnabled(e, e), f.Z.toggleOverlay(l, e, e), v(e), _(e), (i = (!e && Z) || (!e && E)), (r = (!e && w) || (!e && b));
            }
            let s = null;
            if ((i ? (s = 'game' === t ? R.AE.LEGACY_GAME : R.AE.LEGACY) : r && (s = 'game' === t ? R.AE.OOP_GAME : R.AE.OOP), null != s)) {
                var a;
                (0, U.l)(s, null != (a = l.id) ? a : null);
            }
        },
        V = y && D,
        G = !Z && !w,
        F = !b && !Z && E && !y,
        H = !E && !w && b && !D,
        z = (null == d ? void 0 : d.overlayMethod) === C.gl.Disabled,
        W = (null == d ? void 0 : d.state) === C.mM.OVERLAY_RENDERING && !z,
        Y = (null == d ? void 0 : d.state) != null && eO.has(d.state) && !z,
        q = (null == d ? void 0 : d.overlayMethod) === C.gl.OutOfProcess,
        Q = (null == d ? void 0 : d.overlayMethod) === C.gl.OutOfProcessLimitedInteraction,
        J = (null == d ? void 0 : d.overlayMethod) === C.gl.Hook,
        $ = (null == d ? void 0 : d.state) === C.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === C.mM.OVERLAY_CRASHED_DISABLED,
        ee = !b && !E,
        [et, en] = (() => {
            switch (!0) {
                case W && q:
                    return [
                        ed.intl.format(ed.t.hFVBIi, {
                            overlayMethod: ed.intl.string(ed.t.a3eXS0),
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
                case W && Q:
                    return [
                        ed.intl.format(ed.t.hFVBIi, {
                            overlayMethod: ed.intl.string(ed.t['506AbW']),
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
                case W && J:
                    return [
                        ed.intl.format(ed.t.hFVBIi, {
                            overlayMethod: ed.intl.string(ed.t.bvlpDQ),
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
                                case (null == d ? void 0 : d.fullscreenType) !== j.Jx.BORDERLESS_FULLSCREEN:
                                    return ed.intl.string(ed.t.mJmbeH);
                                case D:
                                    return ed.intl.string(ed.t.C7bLTU);
                                case !(null != (e = null == d ? void 0 : d.oopEnabled) && e):
                                    return ed.intl.string(ed.t.WiY24u);
                                case !w:
                                    return ed.intl.string(ed.t.cAFVsL);
                                case !(null != (t = null == d ? void 0 : d.supportsOutOfProcess) && t):
                                    return ed.intl.string(ed.t.XcGEcn);
                                default:
                                    return ed.intl.string(ed.t.bJXH2t);
                            }
                        })()
                    ];
                case $:
                    return [ed.intl.string(ed.t.OFC2a2), null];
                case V:
                    return [ed.intl.string(ed.t.m7X4a2), null];
                case G:
                    return [ed.intl.string(ed.t['9DUS5u']), null];
                case ee:
                    return [ed.intl.string(ed.t.nQ9EdH), null];
                case F:
                case H:
                    return [ed.intl.string(ed.t.VWUn0d), null];
                case Y:
                    if (q) return [ed.intl.string(ed.t['s8+CFh']), null];
                    if (J) return [ed.intl.string(ed.t.JEEdqq), null];
                    if (Q) return [ed.intl.string(ed.t.pzBMwc), null];
                    return [ed.intl.string(ed.t['2Xhy9v']), null];
                case null == d:
                    return [ed.intl.string(ed.t.vwHPRk), null];
                default:
                    return [ed.intl.string(ed.t.ONovPz), null];
            }
        })();
    (0, O.ZP)(() => {
        f.Z.getDetectableGames();
    });
    let [ei, er] = r.useMemo(() => (Y ? ['text-muted', h.TVs.colors.TEXT_MUTED.css] : W && Q ? ['text-warning', h.TVs.colors.TEXT_WARNING.css] : W && q ? ['text-positive', h.TVs.colors.TEXT_POSITIVE.css] : W && J ? ['text-primary', h.TVs.colors.TEXT_PRIMARY.css] : ['interactive-normal', h.TVs.colors.INTERACTIVE_NORMAL.css]), [Y, W, Q, q, J]);
    return null == l
        ? null
        : (0, i.jsxs)(ej, {
              onExpand: I,
              className: T ? eu.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != (s = null != (n = null != (t = null == a ? void 0 : a.name) ? t : null == g ? void 0 : g.name) ? n : null == l ? void 0 : l.gameName) ? s : '',
                      null != g && g.verified
                          ? (0, i.jsx)(h.ua7, {
                                text: ed.intl.string(ed.t['4PJP5u']),
                                children: (e) =>
                                    (0, i.jsx)(
                                        P.Z,
                                        eh(
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
              description: et,
              hint: null != en ? en : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      W || Y
                          ? (0, i.jsx)(h.pzj, {
                                size: 'xxs',
                                color: er
                            })
                          : (0, i.jsx)('div', { className: eu.playingDot }),
                      (0, i.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: ei,
                          children: ed.intl.string(ed.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, i.jsx)(A.Z, {
                  game: a,
                  pid: null == l ? void 0 : l.pid,
                  size: A.Z.Sizes.MEDIUM
              }),
              'aria-label': ed.intl.string(ed.t['87O5GB']),
              action: (0, i.jsx)(h.P3F, {
                  onClick: (e) => eS(e),
                  children: (0, i.jsx)(h.rsf, {
                      checked: (b && w) || (E && Z),
                      disabled: V,
                      onChange: (e, t) => {
                          M(e, B(e, (b && w) || (E && Z)), t);
                      }
                  })
              }),
              children: [
                  (0, i.jsx)(eC, {
                      title: ed.intl.string(ed.t['7BlVIi']),
                      description: ed.intl.string(ed.t.ndgADA),
                      hint: w ? void 0 : ed.intl.string(ed.t.cAFVsL),
                      'aria-label': ed.intl.string(ed.t['7BlVIi']),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.rsf, {
                                  checked: b && w,
                                  disabled: D,
                                  onChange: (e, t) => {
                                      e && !w ? L(e, R.AE.OOP, t) : L(e, R.AE.OOP_GAME, t);
                                  }
                              }),
                              (0, i.jsx)('div', { className: eu.emptySpacer })
                          ]
                      })
                  }),
                  (0, i.jsx)(eC, {
                      title: ed.intl.string(ed.t.BfFpW1),
                      description: ed.intl.string(ed.t.OzInYm),
                      hint: Z ? void 0 : ed.intl.string(ed.t['3sYHXl']),
                      'aria-label': ed.intl.string(ed.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.rsf, {
                                  checked: E && Z,
                                  disabled: y,
                                  onChange: (e, t) => {
                                      e && !Z ? L(e, R.AE.LEGACY, t) : L(e, R.AE.LEGACY_GAME, t);
                                  }
                              }),
                              (0, i.jsx)('div', { className: eu.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function eT(e) {
    let { game: t, gameApplication: n } = e,
        s = r.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]),
        l = (0, p.e7)([v.Z], () => (null != n ? n : v.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, i.jsx)(A.Z, {
        game: l,
        pid: s,
        size: A.Z.Sizes.SMALL
    });
}
function eI(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: l, onChange: a, clientSettingType: o, ariaLabel: c } = e,
        d = (0, p.cj)([N.ZP, K.Z, X.Z], () => (0, N.FZ)(t, [N.ZP, K.Z, X.Z])),
        u = (0, p.cj)([K.Z, X.Z], () => (0, N.b6)(t, !1, [K.Z, X.Z]), [t]),
        m = l(u),
        [g, f] = r.useState(m);
    r.useEffect(() => {
        f(m);
    }, [m]);
    let b = (e, n) => {
        let i = !e && g;
        if ((eS(n), f(e), a(e, d, u), i)) {
            var r, s;
            (0, U.l)(o, null != (s = null != (r = d.id) ? r : null == t ? void 0 : t.id) ? s : null);
        }
    };
    return (0, i.jsx)(eC, {
        title: t.name,
        icon: (0, i.jsx)(eT, {
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
                (0, i.jsx)('div', { className: eu.emptySpacer })
            ]
        })
    });
}
function eN() {
    let [e, t] = r.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, p.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        l = (0, p.Wu)([N.ZP], () => N.ZP.getGamesSeen(!0)),
        a = (0, T.Z)(l.map((e) => e.id)),
        o = (0, S.$1)(),
        c = (e, t) => {
            var i, r;
            eS(t), x.Z.setEnabled(e, s);
            let l = null != (r = null == (i = N.ZP.getCurrentGameForAnalytics()) ? void 0 : i.id) ? r : null;
            (0, R.ou)(e, R.AE.LEGACY, l), !e && n && (0, U.l)(R.AE.LEGACY, l);
        },
        d = (e, t, n) => {
            let { enabledOOP: i } = n;
            f.Z.toggleOverlay(t, e, i);
        },
        u = r.useMemo(() => (eo.iP ? (o ? ed.intl.string(ed.t.r9jEV1) : ed.intl.string(ed.t.OzInYm)) : ed.intl.string(ed.t['8Ox6/P'])), [o]);
    return 0 === l.length
        ? (0, i.jsx)(eC, {
              title: ed.intl.string(ed.t.BfFpW1),
              description: u,
              'aria-label': ed.intl.string(ed.t.BfFpW1),
              className: eu.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      eo.iP && (0, i.jsx)('div', { className: eu.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ej, {
              onExpand: t,
              className: e ? eu.expandedContainer : void 0,
              title: ed.intl.string(ed.t.BfFpW1),
              description: u,
              'aria-label': ed.intl.string(ed.t.BfFpW1),
              action: (0, i.jsx)(h.P3F, {
                  onClick: (e) => eS(e),
                  children: (0, i.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: eu.subtitleContainer,
                      children: (0, i.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ed.intl.string(ed.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(h.zJl, {
                      className: eu.scroller,
                      children: l.map((e, t) =>
                          (0, i.jsx)(
                              eI,
                              {
                                  rawGame: e,
                                  clientSettingType: R.AE.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: a[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: ed.intl.format(ed.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ey() {
    let [e, t] = r.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, p.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        l = !(0, es.supportsOutOfProcess)(),
        a = (0, p.Wu)([N.ZP], () => N.ZP.getGamesSeen(!0)),
        o = (0, T.Z)(a.map((e) => e.id)),
        c = (e, t) => {
            var i, r;
            eS(t);
            let l = !e && n;
            x.Z.setEnabled(s, e);
            let a = null != (r = null == (i = N.ZP.getCurrentGameForAnalytics()) ? void 0 : i.id) ? r : null;
            (0, R.ou)(e, R.AE.OOP, a), l && (0, U.l)(R.AE.OOP, a);
        },
        d = (e, t, n) => {
            let { enabledLegacy: i } = n;
            f.Z.toggleOverlay(t, e, i);
        },
        u = r.useMemo(() => (eo.iP ? (l ? ed.intl.string(ed.t.C7bLTU) : ed.intl.string(ed.t.ndgADA)) : ed.intl.string(ed.t.m7X4a2)), [l]);
    return 0 === a.length
        ? (0, i.jsx)(eC, {
              title: ed.intl.string(ed.t['7BlVIi']),
              description: u,
              'aria-label': ed.intl.string(ed.t['7BlVIi']),
              className: eu.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e, t) => c(e, t)
                      }),
                      eo.iP && (0, i.jsx)('div', { className: eu.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)(ej, {
              onExpand: t,
              className: e ? eu.expandedContainer : void 0,
              title: ed.intl.string(ed.t['7BlVIi']),
              description: u,
              'aria-label': ed.intl.string(ed.t['7BlVIi']),
              action: (0, i.jsx)(h.P3F, {
                  onClick: (e) => eS(e),
                  children: (0, i.jsx)(h.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: eu.subtitleContainer,
                      children: (0, i.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ed.intl.string(ed.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(h.zJl, {
                      className: eu.scroller,
                      children: a.map((e, t) =>
                          (0, i.jsx)(
                              eI,
                              {
                                  rawGame: e,
                                  clientSettingType: R.AE.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: l,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: ed.intl.format(ed.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eA() {
    let e = (0, p.e7)([J.ZP], () => J.ZP.getOverlayKeybind()),
        t = (0, S.$1)(),
        n = !(0, es.supportsOutOfProcess)(),
        [r, s] = (0, p.Wu)([N.ZP], () => [N.ZP.canShowAdminWarning, N.ZP.getVisibleGame()], []),
        l = null != s && s.elevated && r;
    return (0, i.jsx)(eE, {
        children: (0, i.jsx)('div', {
            className: eu.keybindMainContainer,
            children: (0, i.jsxs)('div', {
                className: eu.keybindContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: eu.keybindHeaderContainer,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: ed.intl.string(ed.t.VsAZcH)
                            }),
                            l &&
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-warning',
                                    className: eu.keybindAdminWarning,
                                    children: ed.intl.string(ed.t.NsowVV)
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: eu.keybindRecorderContainer,
                        children: (0, i.jsx)(E.Z, {
                            disabled: t && n,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                d()(null != e, 'Keybind should never be undefined'), b.Z.setKeybind(eh(eg({}, e), { shortcut: t }));
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
        r = (e) => (t) => {
            x.Z.setNotificationDisabledSetting(e, !t);
        },
        s = (0, p.e7)([B.Z], () => B.Z.getDisabledNotifications());
    return (0, i.jsxs)('div', {
        className: eu.notificationSettingsContainer,
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: ed.intl.string(ed.t.xOE5bG)
            }),
            n.map((e) =>
                (0, i.jsxs)(
                    eE,
                    {
                        className: eu.notificationItem,
                        children: [
                            (0, i.jsxs)('div', {
                                className: eu.notificationDescriptionContainer,
                                children: [
                                    (0, i.jsx)(h.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: ed.intl.string(e.title)
                                    }),
                                    (0, i.jsx)(h.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ed.intl.string(e.description)
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
function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new W.Z({
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
        user: new z.Z({
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
function eZ() {
    var e, t, n, s;
    let {
            avatarSizeMode: l,
            displayNameMode: a,
            displayUserMode: o
        } = (0, p.cj)([ee.default], () => ({
            avatarSizeMode: ee.default.getAvatarSizeMode(),
            displayNameMode: ee.default.getDisplayNameMode(),
            displayUserMode: ee.default.getDisplayUserMode()
        })),
        c = (0, p.e7)([Q.default], () => Q.default.getCurrentUser()),
        [d] = r.useState(() => [eD(ed.intl.string(ed.t.C0ZDvr), !0, !1), eD(ed.intl.string(ed.t.iOtj8P), !1, !1, !0), eD(ed.intl.string(ed.t['0oqNgI']), !1, !0)]),
        u = (0, p.e7)([M.ZP, q.Z], () => {
            let e = M.ZP.getWidgetByType(el.Odu.VOICE_V3);
            if (null == e) return null;
            let t = q.Z.getWidget(e.id);
            return null != t && (0, V.Aw)(t) ? t : null;
        }),
        m = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : ec.At,
        g = [
            null != c
                ? (function (e) {
                      let t = eD(e.username);
                      return (t.user = e), t;
                  })(c)
                : null,
            ...d
        ].filter(en.lm),
        f = [new Map(g.map((e) => [e.user.id, e])), g.map((e) => e.user.id)];
    return (0, i.jsxs)('div', {
        className: eu.voiceSettingsContainer,
        children: [
            (0, i.jsx)(eE, {
                title: ed.intl.string(ed.t.dnvZSk),
                children: (0, i.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.intl.string(ed.t.YcOxtr),
                            value: el.ipw.LARGE
                        },
                        {
                            label: ed.intl.string(ed.t.BKIKq6),
                            value: el.ipw.SMALL
                        }
                    ],
                    className: eu.select,
                    onChange: (e) => x.Z.setAvatarSizeMode(e),
                    value: l
                })
            }),
            (0, i.jsx)(eE, {
                title: ed.intl.string(ed.t.J0dpcH),
                children: (0, i.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.intl.string(ed.t.nBmDra),
                            value: el.wC$.ALWAYS
                        },
                        {
                            label: ed.intl.string(ed.t['2OvIZW']),
                            value: el.wC$.ONLY_WHILE_SPEAKING
                        },
                        {
                            label: ed.intl.string(ed.t.ekjlPD),
                            value: el.wC$.NEVER
                        }
                    ],
                    className: eu.select,
                    onChange: (e) => x.Z.setDisplayNameMode(e),
                    value: a
                })
            }),
            (0, i.jsxs)('div', {
                className: eu.widgetContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: eu.voiceWidgetContainer,
                        children: (0, i.jsx)(G.kI, {
                            id: 'voice-widget',
                            title: ed.intl.string(ed.t.KNJ6Vl),
                            channel: (0, H.kt)({
                                id: '123',
                                name: 'Test Channel',
                                type: el.d4z.GUILD_VOICE,
                                guild_id: '456'
                            }),
                            overlayVoiceStates: f,
                            displayNameMode: a,
                            displayUserMode: o,
                            avatarSizeMode: l,
                            widget: el.Odu.VOICE,
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
                        className: eu.widgetHeaderContainer,
                        children: [
                            (0, i.jsx)(F.PI, { children: ed.intl.string(ed.t.KNJ6Vl) }),
                            (0, i.jsx)(F.ls, {}),
                            (0, i.jsx)(F.RT, {
                                id: null != (n = null == u ? void 0 : u.id) ? n : 'voice-widget',
                                pinned: null != (s = null == u ? void 0 : u.pinned) && s
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(eE, {
                title: ed.intl.string(ed.t.swsWWF),
                children: (0, i.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.intl.string(ed.t.nBmDra),
                            value: el.OYC.ALWAYS
                        },
                        {
                            label: ed.intl.string(ed.t['2OvIZW']),
                            value: el.OYC.ONLY_WHILE_SPEAKING
                        }
                    ],
                    className: eu.select,
                    onChange: (e) => x.Z.setDisplayUserMode(e),
                    value: o
                })
            }),
            (0, i.jsx)(eE, {
                title: ed.intl.string(ed.t['X/Uyzc']),
                titleId: eb,
                children: (0, i.jsx)('div', {
                    className: eu.sliderContainer,
                    children: (0, i.jsx)(h.iRW, {
                        initialValue: m,
                        onValueRender: (e) => (e < 1 ? ed.intl.string(ed.t.nrUzFB) : ''.concat(Math.floor(e))),
                        minValue: 0,
                        maxValue: 25,
                        onValueChange: function (e) {
                            null != u && (e < 1 ? (0, _.zG)(u.id, { voiceStatesMaxShown: ec.Og }) : (0, _.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
                        },
                        markers: e_,
                        barStyles: { background: h.TVs.colors.BG_MOD_STRONG.css },
                        fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                        'aria-labelledby': eb,
                        onMarkerRender: (e) => (e < 1 ? ed.intl.string(ed.t.nrUzFB) : ''.concat(Math.floor(e)))
                    })
                })
            })
        ]
    });
}
function ew() {
    let [e, t] = (0, I.US)([g.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(ea.L.DISMISS);
        };
    return ((0, O.ZP)(() => () => {
        t(ea.L.AUTO_DISMISS);
    }),
    e !== g.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)('div', {
              className: eu.overlaySettingsNux,
              children: [
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)('img', {
                          src: em.Z,
                          alt: ed.intl.string(ed.t.mdXZh4),
                          className: eu.nuxFirstImage
                      })
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                          className: eu.mainTitleContainer,
                          children: [
                              (0, i.jsx)(h.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: ed.intl.string(ed.t.jzjJQk)
                              }),
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: ed.intl.string(ed.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)('img', {
                          src: ep.Z,
                          alt: ed.intl.string(ed.t.mdXZh4),
                          className: eu.nuxUserSettingsImage
                      })
                  }),
                  (0, i.jsx)(h.zxk, {
                      className: eu.closeCircleButton,
                      onClick: () => n(),
                      children: ed.intl.string(ed.t.Q26diI)
                  }),
                  (0, i.jsx)('div', { className: eu.nuxDivider })
              ]
          });
}
function ek(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        s = null == n ? void 0 : n.id,
        l = (0, p.e7)([B.Z], () => B.Z.isLimitedInteractionOverrideEnabled(s), [s]),
        a = r.useMemo(() => null != t && (0, L.H8)(t.pid), [t]),
        o = (0, w.Z)({ location: 'overlay_user_settings' }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: d } = (0, p.cj)([ee.default], () => ({
            disableClickableRegions: ee.default.disableClickableRegions,
            shouldShowKeybindIndicators: ee.default.showKeybindIndicators
        }));
    return (0, i.jsxs)('div', {
        className: eu.overlayEnabledSettingsContainer,
        children: [
            (0, i.jsx)(eA, {}),
            o &&
                (0, i.jsx)(eE, {
                    children: (0, i.jsx)(h.j7V, {
                        value: d,
                        onChange: (e) => x.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: ed.intl.string(ed.t.XZTl9v)
                    })
                }),
            null != s &&
                (0, i.jsxs)(eE, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: eu.limitedInteractionOverrideContainer,
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: ed.intl.string(ed.t.wgVQND)
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: ed.intl.string(ed.t['5SsyFx'])
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
            (0, i.jsxs)(eE, {
                children: [
                    (0, i.jsxs)('div', {
                        className: eu.limitedInteractionOverrideContainer,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: ed.intl.string(ed.t['+eFXxs'])
                            }),
                            (0, i.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: ed.intl.string(ed.t.kivMAg)
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
function eL(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: r, runningGameApplication: s } = (function () {
            let e = (0, p.e7)([Y.Z], () => Y.Z.getStreamerActiveStreamMetadata()),
                t = (0, p.e7)(
                    [N.ZP],
                    () => {
                        let e = N.ZP.getVisibleGame();
                        return null == e ? null : e;
                    },
                    [],
                    o()
                ),
                [n] = (0, T.Z)([null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0]);
            return {
                runningGame: t,
                runningGameApplication: n
            };
        })(),
        l = (0, Z.o4)('user_settings').overlayV3UI,
        a = (0, p.e7)([Q.default], () => Q.default.getCurrentUser());
    (0, O.ZP)(() => {
        if (ei.isPlatformEmbedded) return (0, y.Ky)(), y.P7;
    });
    let c = ex(ef);
    return (m().isEqual(c, ef) || (et.default.track(el.rMx.OVERLAY_SETTINGS_UPDATED, c), (ef = c)), null == a)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: ed.intl.string(ed.t['9cb1U1']),
                      children: [
                          l ? (0, i.jsx)(ew, {}) : null,
                          (0, i.jsxs)('div', {
                              className: eu.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(ev, {
                                      runningGame: r,
                                      runningGameApplication: s
                                  }),
                                  (0, i.jsx)(ey, {}),
                                  (0, i.jsx)(eN, {})
                              ]
                          }),
                          (0, i.jsx)('div', { className: eu.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(h.hjN, {
                      children: [
                          (0, i.jsx)(ek, {
                              runningGame: r,
                              runningGameApplication: s
                          }),
                          (0, i.jsx)('div', { className: eu.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(h.hjN, {
                      title: ed.intl.string(ed.t.r1TZfn),
                      children: [(0, i.jsx)(eZ, {}), (0, i.jsx)('div', { className: eu.settingsDivider })]
                  }),
                  (0, i.jsx)(h.hjN, { children: (0, i.jsx)(eR, {}) })
              ]
          });
}
