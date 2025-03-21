n.d(t, { Z: () => ey }), n(266796), n(47120);
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
    x = n(660216),
    N = n(13245),
    b = n(825209),
    _ = n(615287),
    E = n(593472),
    j = n(493773),
    C = n(887278),
    O = n(812206),
    v = n(835473),
    S = n(243778),
    T = n(594190),
    I = n(320724),
    y = n(925329),
    A = n(297700),
    P = n(444295),
    R = n(486016),
    D = n(32300),
    Z = n(809357),
    w = n(371651),
    k = n(829907),
    W = n(624864),
    L = n(610394),
    B = n(957148),
    M = n(243487),
    U = n(430561),
    V = n(131704),
    G = n(598077),
    F = n(189786),
    H = n(199902),
    z = n(77498),
    Y = n(283595),
    K = n(594174),
    q = n(556296),
    X = n(808506),
    J = n(237997),
    Q = n(626135),
    $ = n(823379),
    ee = n(358085),
    et = n(13140),
    en = n(145597),
    er = n(981631),
    ei = n(921944),
    es = n(987650),
    ea = n(388032),
    el = n(301883),
    eo = n(131970),
    ec = n(730462);
function ed(e) {
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
function eu(e, t) {
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
let em = eg(null);
function eg(e) {
    var t;
    let n = J.default.getNotificationPositionMode(),
        r = n !== er._vf.DISABLED,
        i = q.ZP.getOverlayKeybind(),
        s = q.ZP.getOverlayChatKeybind();
    return {
        enabled: X.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: W.Z.isNotificationDisabled(R.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        hotkey: null != i ? (0, et.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, et.BB)(s.shortcut) : null,
        text_opacity_slider: J.default.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : X.default.enabled
    };
}
function ep(e) {
    let { children: t, title: n, className: i } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: el.formItemTitle,
                    children: n
                }),
            (0, r.jsx)('div', {
                className: a()(el.rowContainer, i),
                children: t
            })
        ]
    });
}
function eh(e) {
    let { header: t, icon: n, title: i, description: s, action: l, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, r.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: a()(el.groupContainer, u),
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: el.groupHeader,
                    children: t
                }),
            (0, r.jsxs)('div', {
                className: el.groupContent,
                children: [
                    null != n &&
                        (0, r.jsx)('div', {
                            className: el.groupIcon,
                            children: n
                        }),
                    (0, r.jsxs)('div', {
                        className: el.groupMainContent,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: el.groupTitle,
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
                        className: el.groupAction,
                        children: l
                    })
                ]
            })
        ]
    });
}
function ef(e) {
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
        className: el.collapseable,
        collapsibleContent: (0, r.jsx)('div', {
            className: el.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eh,
                eu(ed({}, l), {
                    onClick: (e) => {
                        d(!o), null == t || t(e);
                    },
                    className: a()(el.mainCollapseableContainer, n),
                    action: (0, r.jsxs)('div', {
                        className: el.groupCollapsedAction,
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
let ex = new Set([_.mM.INITIALIZING, _.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, _.mM.WAITING_FOR_MODULE_TRACKING, _.mM.WAITING_FOR_OVERLAY_OPEN]),
    eN = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eb(e) {
    var t, n, s;
    let { runningGame: a, runningGameApplication: l } = e,
        c = null == a ? void 0 : a.pid,
        d = (0, g.e7)([w.default], () => (null == a || null == c ? null : w.default.getTrackedGameByPid(c)), [a, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, g.cj)(
            [z.Z, Y.Z],
            () => {
                if (null == a && null == d)
                    return {
                        enabledLegacy: !1,
                        enabledOOP: !1
                    };
                if (null == a) {
                    var e, t;
                    return {
                        enabledLegacy: null !== (e = null == d ? void 0 : d.legacyEnabled) && void 0 !== e && e,
                        enabledOOP: null !== (t = null == d ? void 0 : d.oopEnabled) && void 0 !== t && t
                    };
                }
                return (0, T.b6)(a, !1, [z.Z, Y.Z]);
            },
            [a, d]
        ),
        p = (0, g.e7)([T.ZP, z.Z, Y.Z], () => (null == a ? null : (0, T.FZ)(a, [T.ZP, z.Z, Y.Z])), [a], o()),
        [x, b] = i.useState(m),
        [O, v] = i.useState(u),
        [S, I] = i.useState(!1);
    i.useEffect(() => {
        b(m), v(u);
    }, [m, u]);
    let R = (0, C.$1)(),
        D = !(0, en.supportsOutOfProcess)(),
        { legacyEnabled: Z, oopEnabled: k } = (0, g.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        W = (e, t, n) => {
            var r, i, s;
            if ((eN(n), null == a)) return;
            let l = !1,
                o = !1;
            switch (t) {
                case P.AE.LEGACY_GAME:
                    v(e), f.Z.toggleOverlay(a, e, x), (l = !e && O);
                    break;
                case P.AE.OOP_GAME:
                    b(e), f.Z.toggleOverlay(a, O, e), (o = !e && x);
                    break;
                case P.AE.LEGACY:
                    N.Z.setEnabled(e, k), (0, P.ou)(e, P.AE.LEGACY, null !== (r = a.id) && void 0 !== r ? r : null);
                    break;
                case P.AE.OOP:
                    N.Z.setEnabled(Z, e), (0, P.ou)(e, P.AE.OOP, null !== (i = a.id) && void 0 !== i ? i : null);
            }
            (l || o) && (0, B.l)(l ? P.AE.LEGACY_GAME : P.AE.OOP_GAME, null !== (s = a.id) && void 0 !== s ? s : null);
        },
        L = (e, t) => {
            let n = !t && e,
                r = !k && x,
                i = !Z && O,
                s = !x && k,
                a = !O && Z;
            switch (!0) {
                case n && (r || i) && (s || a):
                    return 'both';
                case n && (r || i):
                    return 'global';
                default:
                    return 'game';
            }
        },
        M = (e, t, n) => {
            if ((eN(n), null == a)) return;
            let r = !1,
                i = !1;
            switch (t) {
                case 'game':
                    f.Z.toggleOverlay(a, e, e), v(e), b(e), (r = !e && O), (i = !e && x);
                    break;
                case 'global':
                    N.Z.setEnabled(e, e), (r = !e && Z), (i = !e && k);
                    break;
                case 'both':
                    N.Z.setEnabled(e, e), f.Z.toggleOverlay(a, e, e), v(e), b(e), (r = (!e && Z) || (!e && O)), (i = (!e && k) || (!e && x));
            }
            let s = null;
            if ((r ? (s = 'game' === t ? P.AE.LEGACY_GAME : P.AE.LEGACY) : i && (s = 'game' === t ? P.AE.OOP_GAME : P.AE.OOP), null != s)) {
                var l;
                (0, B.l)(s, null !== (l = a.id) && void 0 !== l ? l : null);
            }
        },
        U = R && D,
        V = !Z && !k,
        G = !x && !Z && O && !R,
        F = !O && !k && x && !D,
        H = (null == d ? void 0 : d.overlayMethod) === _.gl.Disabled,
        K = (null == d ? void 0 : d.state) === _.mM.OVERLAY_RENDERING && !H,
        q = (null == d ? void 0 : d.state) != null && ex.has(d.state) && !H,
        X = (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcess,
        J = (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcessLimitedInteraction,
        Q = (null == d ? void 0 : d.overlayMethod) === _.gl.Hook,
        $ = (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED_DISABLED,
        ee = !x && !O,
        [et, er] = (() => {
            switch (!0) {
                case K && X:
                    return [
                        ea.NW.format(ea.t.hFVBIi, {
                            overlayMethod: ea.NW.string(ea.t.a3eXS0),
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
                case K && J:
                    return [
                        ea.NW.format(ea.t.hFVBIi, {
                            overlayMethod: ea.NW.string(ea.t['506AbW']),
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
                case K && Q:
                    return [
                        ea.NW.format(ea.t.hFVBIi, {
                            overlayMethod: ea.NW.string(ea.t.bvlpDQ),
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
                                case (null == d ? void 0 : d.fullscreenType) !== E.Jx.BORDERLESS_FULLSCREEN:
                                    return ea.NW.string(ea.t.mJmbeH);
                                case D:
                                    return ea.NW.string(ea.t.C7bLTU);
                                case !(null !== (e = null == d ? void 0 : d.oopEnabled) && void 0 !== e && e):
                                    return ea.NW.string(ea.t.WiY24u);
                                case !k:
                                    return ea.NW.string(ea.t.cAFVsL);
                                case !(null !== (t = null == d ? void 0 : d.supportsOutOfProcess) && void 0 !== t && t):
                                    return ea.NW.string(ea.t.XcGEcn);
                                default:
                                    return ea.NW.string(ea.t.bJXH2t);
                            }
                        })()
                    ];
                case $:
                    return [ea.NW.string(ea.t.OFC2a2), null];
                case U:
                    return [ea.NW.string(ea.t.m7X4a2), null];
                case V:
                    return [ea.NW.string(ea.t['9DUS5u']), null];
                case ee:
                    return [ea.NW.string(ea.t.nQ9EdH), null];
                case G:
                case F:
                    return [ea.NW.string(ea.t.VWUn0d), null];
                case q:
                    if (X) return [ea.NW.string(ea.t['s8+CFh']), null];
                    if (Q) return [ea.NW.string(ea.t.JEEdqq), null];
                    if (J) return [ea.NW.string(ea.t.pzBMwc), null];
                    return [ea.NW.string(ea.t['2Xhy9v']), null];
                case null == d:
                    return [ea.NW.string(ea.t.vwHPRk), null];
                default:
                    return [ea.NW.string(ea.t.ONovPz), null];
            }
        })();
    (0, j.ZP)(() => {
        f.Z.getDetectableGames();
    });
    let [ei, es] = i.useMemo(() => (q ? ['text-muted', h.TVs.colors.TEXT_MUTED.css] : K && J ? ['text-warning', h.TVs.colors.TEXT_WARNING.css] : K && X ? ['text-positive', h.TVs.colors.TEXT_POSITIVE.css] : K && Q ? ['text-primary', h.TVs.colors.TEXT_PRIMARY.css] : ['interactive-normal', h.TVs.colors.INTERACTIVE_NORMAL.css]), [q, K, J, X, Q]);
    return null == a
        ? null
        : (0, r.jsxs)(ef, {
              onExpand: I,
              className: S ? el.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !== (s = null !== (n = null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : null == p ? void 0 : p.name) && void 0 !== n ? n : null == a ? void 0 : a.gameName) && void 0 !== s ? s : '',
                      null != p && p.verified
                          ? (0, r.jsx)(h.ua7, {
                                text: ea.NW.string(ea.t['4PJP5u']),
                                children: (e) =>
                                    (0, r.jsx)(
                                        A.Z,
                                        eu(
                                            ed(
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
              hint: null != er ? er : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      K || q
                          ? (0, r.jsx)(h.pzj, {
                                size: 'xxs',
                                color: es
                            })
                          : (0, r.jsx)('div', { className: el.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: ei,
                          children: ea.NW.string(ea.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, r.jsx)(y.Z, {
                  game: l,
                  pid: null == a ? void 0 : a.pid,
                  size: y.Z.Sizes.MEDIUM
              }),
              'aria-label': ea.NW.string(ea.t['87O5GB']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eN(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (x && k) || (O && Z),
                      disabled: U,
                      onChange: (e, t) => {
                          M(e, L(e, (x && k) || (O && Z)), t);
                      }
                  })
              }),
              children: [
                  (0, r.jsx)(eh, {
                      title: ea.NW.string(ea.t['7BlVIi']),
                      description: ea.NW.string(ea.t.ndgADA),
                      hint: k ? void 0 : ea.NW.string(ea.t.cAFVsL),
                      'aria-label': ea.NW.string(ea.t['7BlVIi']),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: x && k,
                                  disabled: D,
                                  onChange: (e, t) => {
                                      e && !k ? W(e, P.AE.OOP, t) : W(e, P.AE.OOP_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: el.emptySpacer })
                          ]
                      })
                  }),
                  (0, r.jsx)(eh, {
                      title: ea.NW.string(ea.t.BfFpW1),
                      description: ea.NW.string(ea.t.OzInYm),
                      hint: Z ? void 0 : ea.NW.string(ea.t['3sYHXl']),
                      'aria-label': ea.NW.string(ea.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: O && Z,
                                  disabled: R,
                                  onChange: (e, t) => {
                                      e && !Z ? W(e, P.AE.LEGACY, t) : W(e, P.AE.LEGACY_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: el.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function e_(e) {
    let { game: t, gameApplication: n } = e,
        s = i.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]),
        a = (0, g.e7)([O.Z], () => (null != n ? n : O.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(y.Z, {
        game: a,
        pid: s,
        size: y.Z.Sizes.SMALL
    });
}
function eE(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: a, onChange: l, clientSettingType: o, ariaLabel: c } = e,
        d = (0, g.cj)([T.ZP, z.Z, Y.Z], () => (0, T.FZ)(t, [T.ZP, z.Z, Y.Z])),
        u = (0, g.cj)([z.Z, Y.Z], () => (0, T.b6)(t, !1, [z.Z, Y.Z]), [t]),
        m = a(u),
        [p, f] = i.useState(m);
    i.useEffect(() => {
        f(m);
    }, [m]);
    let x = (e, n) => {
        let r = !e && p;
        if ((eN(n), f(e), l(e, d, u), r)) {
            var i, s;
            (0, B.l)(o, null !== (s = null !== (i = d.id) && void 0 !== i ? i : null == t ? void 0 : t.id) && void 0 !== s ? s : null);
        }
    };
    return (0, r.jsx)(eh, {
        title: t.name,
        icon: (0, r.jsx)(e_, {
            game: d,
            gameApplication: n
        }),
        'aria-label': c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.rsf, {
                    checked: p,
                    disabled: s,
                    onChange: (e, t) => x(e, t)
                }),
                (0, r.jsx)('div', { className: el.emptySpacer })
            ]
        })
    });
}
function ej() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, g.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        a = (0, g.Wu)([T.ZP], () => T.ZP.getGamesSeen(!0)),
        l = (0, v.Z)(a.map((e) => e.id)),
        o = (0, C.$1)(),
        c = (e, t) => {
            var r, i;
            eN(t), N.Z.setEnabled(e, s);
            let a = null !== (i = null === (r = T.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, P.ou)(e, P.AE.LEGACY, a), !e && n && (0, B.l)(P.AE.LEGACY, a);
        },
        d = (e, t, n) => {
            let { enabledOOP: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (es.iP ? (o ? ea.NW.string(ea.t.r9jEV1) : ea.NW.string(ea.t.OzInYm)) : ea.NW.string(ea.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, r.jsx)(eh, {
              title: ea.NW.string(ea.t.BfFpW1),
              description: u,
              'aria-label': ea.NW.string(ea.t.BfFpW1),
              className: el.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      es.iP && (0, r.jsx)('div', { className: el.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(ef, {
              onExpand: t,
              className: e ? el.expandedContainer : void 0,
              title: ea.NW.string(ea.t.BfFpW1),
              description: u,
              'aria-label': ea.NW.string(ea.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eN(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: el.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ea.NW.string(ea.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: el.scroller,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              eE,
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
                                  ariaLabel: ea.NW.format(ea.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eC() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, g.cj)([w.default], () => w.default.getGlobalEnabledStatus()),
        a = !(0, en.supportsOutOfProcess)(),
        l = (0, g.Wu)([T.ZP], () => T.ZP.getGamesSeen(!0)),
        o = (0, v.Z)(l.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            eN(t);
            let a = !e && n;
            N.Z.setEnabled(s, e);
            let l = null !== (i = null === (r = T.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, P.ou)(e, P.AE.OOP, l), a && (0, B.l)(P.AE.OOP, l);
        },
        d = (e, t, n) => {
            let { enabledLegacy: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (es.iP ? (a ? ea.NW.string(ea.t.C7bLTU) : ea.NW.string(ea.t.ndgADA)) : ea.NW.string(ea.t.m7X4a2)), [a]);
    return 0 === l.length
        ? (0, r.jsx)(eh, {
              title: ea.NW.string(ea.t['7BlVIi']),
              description: u,
              'aria-label': ea.NW.string(ea.t['7BlVIi']),
              className: el.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      es.iP && (0, r.jsx)('div', { className: el.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(ef, {
              onExpand: t,
              className: e ? el.expandedContainer : void 0,
              title: ea.NW.string(ea.t['7BlVIi']),
              description: u,
              'aria-label': ea.NW.string(ea.t['7BlVIi']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eN(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: el.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: ea.NW.string(ea.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: el.scroller,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              eE,
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
                                  ariaLabel: ea.NW.format(ea.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eO() {
    let e = (0, g.e7)([q.ZP], () => q.ZP.getOverlayKeybind()),
        t = (0, C.$1)(),
        n = !(0, en.supportsOutOfProcess)(),
        [i, s] = (0, g.Wu)([T.ZP], () => [T.ZP.canShowAdminWarning, T.ZP.getVisibleGame()], []),
        a = null != s && s.elevated && i;
    return (0, r.jsx)(ep, {
        children: (0, r.jsxs)('div', {
            className: el.keybindMainContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: el.keybindContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: el.keybindHeaderContainer,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: ea.NW.string(ea.t.VsAZcH)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: el.keybindRecorderContainer,
                            children: (0, r.jsx)(b.Z, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    d()(null != e, 'Keybind should never be undefined'), x.Z.setKeybind(eu(ed({}, e), { shortcut: t }));
                                }
                            })
                        })
                    ]
                }),
                a &&
                    (0, r.jsx)(h.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-warning',
                        className: el.keybindAdminWarning,
                        children: ea.NW.string(ea.t.NsowVV)
                    })
            ]
        })
    });
}
let ev = (e, t) =>
    [
        {
            title: ea.t.eVE4LS,
            description: ea.t['72WNqq'],
            disabledSetting: R.OverlayNotificationDisabledSetting.TEXT_CHAT
        },
        {
            title: ea.t.hqsZJS,
            description: ea.t.kHjdqa,
            disabledSetting: R.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE
        },
        e && {
            title: ea.t.sop3rq,
            description: ea.t.pjgffX,
            disabledSetting: R.OverlayNotificationDisabledSetting.GAME_ACTIVITY
        },
        t && {
            title: ea.t['2QVhbW'],
            description: ea.t.wQ4ilJ,
            disabledSetting: R.OverlayNotificationDisabledSetting.NOW_PLAYING
        }
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eS() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, D.o4)('user_settings'),
        n = ev(e, t),
        i = (e) => (t) => {
            N.Z.setNotificationDisabledSetting(e, !t);
        },
        s = (0, g.e7)([W.Z], () => W.Z.getDisabledNotifications());
    return (0, r.jsxs)('div', {
        className: el.notificationSettingsContainer,
        children: [
            (0, r.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: ea.NW.string(ea.t.xOE5bG)
            }),
            n.map((e) =>
                (0, r.jsxs)(
                    ep,
                    {
                        className: el.notificationItem,
                        children: [
                            (0, r.jsxs)('div', {
                                className: el.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: ea.NW.string(e.title)
                                    }),
                                    (0, r.jsx)(h.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ea.NW.string(e.description)
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
function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new F.Z({
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
        user: new G.Z({
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
            colorString: '#000000'
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0
    };
}
function eI() {
    let [e, t] = (0, S.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(ei.L.DISMISS);
        };
    return ((0, j.ZP)(() => () => {
        t(ei.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)('div', {
              className: el.overlaySettingsNux,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: eo.Z,
                          alt: ea.NW.string(ea.t.mdXZh4),
                          className: el.nuxFirstImage
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: el.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: ea.NW.string(ea.t.jzjJQk)
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: ea.NW.string(ea.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: ec.Z,
                          alt: ea.NW.string(ea.t.mdXZh4),
                          className: el.nuxUserSettingsImage
                      })
                  }),
                  (0, r.jsx)(h.zxk, {
                      className: el.closeCircleButton,
                      onClick: () => n(),
                      children: ea.NW.string(ea.t.Q26diI)
                  }),
                  (0, r.jsx)('div', { className: el.nuxDivider })
              ]
          });
}
function ey(e) {
    var t, n;
    let { className: s, showHeader: a } = e,
        {
            avatarSizeMode: l,
            displayNameMode: c,
            displayUserMode: d,
            disableClickableRegions: u,
            shouldShowKeybindIndicators: p
        } = (0, g.cj)([J.default], () => ({
            avatarSizeMode: J.default.getAvatarSizeMode(),
            displayNameMode: J.default.getDisplayNameMode(),
            displayUserMode: J.default.getDisplayUserMode(),
            disableClickableRegions: J.default.disableClickableRegions,
            shouldShowKeybindIndicators: J.default.showKeybindIndicators
        })),
        { runningGame: f, runningGameApplication: x } = (function () {
            let e = (0, g.e7)([H.Z], () => H.Z.getStreamerActiveStreamMetadata()),
                t = (0, g.e7)(
                    [T.ZP],
                    () => {
                        let e = T.ZP.getVisibleGame();
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
        b = null == x ? void 0 : x.id,
        _ = (0, g.e7)([W.Z], () => W.Z.isLimitedInteractionOverrideEnabled(b), [b]),
        E = i.useMemo(() => null != f && (0, k.H8)(f.pid), [f]),
        C = (0, D.o4)('user_settings').overlayV3UI,
        O = (0, g.e7)([K.default], () => K.default.getCurrentUser()),
        S = (0, Z.Z)({ location: 'overlay_user_settings' });
    (0, j.ZP)(() => {
        if (ee.isPlatformEmbedded) return (0, I.Ky)(), I.P7;
    }),
        (function () {
            let e = eg(em);
            m().isEqual(e, em) || (Q.default.track(er.rMx.OVERLAY_SETTINGS_UPDATED, e), (em = e));
        })();
    let [y] = i.useState(() => [eT(ea.NW.string(ea.t.C0ZDvr), !0, !1), eT(ea.NW.string(ea.t.iOtj8P), !1, !1, !0), eT(ea.NW.string(ea.t['0oqNgI']), !1, !0)]),
        A = (0, g.e7)([L.ZP], () => L.ZP.getWidgetByType(er.Odu.VOICE_V3)),
        P = [
            null != O
                ? (function (e) {
                      let t = eT(e.username);
                      return (t.user = e), t;
                  })(O)
                : null,
            ...y
        ].filter($.lm),
        R = [new Map(P.map((e) => [e.user.id, e])), P.map((e) => e.user.id)];
    return null == O
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: ea.NW.string(ea.t['9cb1U1']),
                      children: [
                          C ? (0, r.jsx)(eI, {}) : null,
                          (0, r.jsxs)('div', {
                              className: el.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eb, {
                                      runningGame: f,
                                      runningGameApplication: x
                                  }),
                                  (0, r.jsx)(eC, {}),
                                  (0, r.jsx)(ej, {})
                              ]
                          }),
                          (0, r.jsx)('div', { className: el.settingsDivider })
                      ]
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: el.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eO, {}),
                                  S &&
                                      (0, r.jsx)(ep, {
                                          children: (0, r.jsx)(h.j7V, {
                                              value: p,
                                              onChange: (e) => N.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: ea.NW.string(ea.t.XZTl9v)
                                          })
                                      }),
                                  null != b &&
                                      (0, r.jsxs)(ep, {
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: el.limitedInteractionOverrideContainer,
                                                  children: [
                                                      (0, r.jsx)(h.Text, {
                                                          variant: 'text-md/semibold',
                                                          color: 'header-primary',
                                                          children: ea.NW.string(ea.t.wgVQND)
                                                      }),
                                                      (0, r.jsx)(h.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: ea.NW.string(ea.t['5SsyFx'])
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(h.j7V, {
                                                  value: _ || E,
                                                  disabled: E,
                                                  onChange: (e) => {
                                                      var t;
                                                      return (t = e), void (null != x && N.Z.setLimitedInteractionOverride(x.id, t));
                                                  },
                                                  hideBorder: !0
                                              })
                                          ]
                                      }),
                                  (0, r.jsxs)(ep, {
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: el.limitedInteractionOverrideContainer,
                                              children: [
                                                  (0, r.jsx)(h.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: ea.NW.string(ea.t['+eFXxs'])
                                                  }),
                                                  (0, r.jsx)(h.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-muted',
                                                      children: ea.NW.string(ea.t.kivMAg)
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(h.j7V, {
                                              value: !u,
                                              onChange: function () {
                                                  N.Z.setDisableClickableRegions(!u);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', { className: el.settingsDivider })
                      ]
                  }),
                  (0, r.jsxs)(h.hjN, {
                      title: ea.NW.string(ea.t.r1TZfn),
                      children: [
                          (0, r.jsxs)('div', {
                              className: el.voiceSettingsContainer,
                              children: [
                                  (0, r.jsx)(ep, {
                                      title: ea.NW.string(ea.t.dnvZSk),
                                      children: (0, r.jsx)(h.q4e, {
                                          options: [
                                              {
                                                  label: ea.NW.string(ea.t.YcOxtr),
                                                  value: er.ipw.LARGE
                                              },
                                              {
                                                  label: ea.NW.string(ea.t.BKIKq6),
                                                  value: er.ipw.SMALL
                                              }
                                          ],
                                          className: el.select,
                                          onChange: (e) => N.Z.setAvatarSizeMode(e),
                                          value: l
                                      })
                                  }),
                                  (0, r.jsx)(ep, {
                                      title: ea.NW.string(ea.t.J0dpcH),
                                      children: (0, r.jsx)(h.q4e, {
                                          options: [
                                              {
                                                  label: ea.NW.string(ea.t.nBmDra),
                                                  value: er.wC$.ALWAYS
                                              },
                                              {
                                                  label: ea.NW.string(ea.t['2OvIZW']),
                                                  value: er.wC$.ONLY_WHILE_SPEAKING
                                              },
                                              {
                                                  label: ea.NW.string(ea.t.ekjlPD),
                                                  value: er.wC$.NEVER
                                              }
                                          ],
                                          className: el.select,
                                          onChange: (e) => N.Z.setDisplayNameMode(e),
                                          value: c
                                      })
                                  }),
                                  (0, r.jsx)('div', {
                                      className: el.widgetContainer,
                                      children:
                                          C &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: el.voiceWidgetContainer,
                                                      children: (0, r.jsx)(M.k, {
                                                          id: 'voice-widget',
                                                          title: ea.NW.string(ea.t.KNJ6Vl),
                                                          channel: (0, V.kt)({
                                                              id: '123',
                                                              name: 'Test Channel',
                                                              type: er.d4z.GUILD_VOICE,
                                                              guild_id: '456'
                                                          }),
                                                          overlayVoiceStates: R,
                                                          displayNameMode: c,
                                                          displayUserMode: d,
                                                          avatarSizeMode: l,
                                                          widget: er.Odu.VOICE,
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
                                                  (0, r.jsxs)('div', {
                                                      className: el.widgetHeaderContainer,
                                                      children: [
                                                          (0, r.jsx)(U.PI, { children: ea.NW.string(ea.t.KNJ6Vl) }),
                                                          (0, r.jsx)(U.ls, {}),
                                                          (0, r.jsx)(U.RT, {
                                                              id: null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : 'voice-widget',
                                                              pinned: null !== (n = null == A ? void 0 : A.pinned) && void 0 !== n && n
                                                          })
                                                      ]
                                                  })
                                              ]
                                          })
                                  }),
                                  (0, r.jsx)(ep, {
                                      title: ea.NW.string(ea.t.swsWWF),
                                      children: (0, r.jsx)(h.q4e, {
                                          options: [
                                              {
                                                  label: ea.NW.string(ea.t.nBmDra),
                                                  value: er.OYC.ALWAYS
                                              },
                                              {
                                                  label: ea.NW.string(ea.t['2OvIZW']),
                                                  value: er.OYC.ONLY_WHILE_SPEAKING
                                              }
                                          ],
                                          className: el.select,
                                          onChange: (e) => N.Z.setDisplayUserMode(e),
                                          value: d
                                      })
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', { className: el.settingsDivider })
                      ]
                  }),
                  (0, r.jsx)(h.hjN, { children: (0, r.jsx)(eS, {}) })
              ]
          });
}
