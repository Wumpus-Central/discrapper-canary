n.d(t, { Z: () => eC }), n(266796), n(47120);
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
    N = n(13245),
    x = n(825209),
    _ = n(615287),
    E = n(593472),
    j = n(493773),
    C = n(887278),
    O = n(835473),
    v = n(243778),
    S = n(594190),
    T = n(320724),
    I = n(925329),
    y = n(297700),
    A = n(444295),
    P = n(32300),
    R = n(809357),
    D = n(371651),
    Z = n(957148),
    w = n(243487),
    k = n(430561),
    W = n(131704),
    L = n(598077),
    B = n(189786),
    M = n(199902),
    U = n(77498),
    V = n(355863),
    G = n(283595),
    F = n(594174),
    H = n(556296),
    z = n(808506),
    Y = n(237997),
    K = n(626135),
    q = n(358085),
    X = n(13140),
    J = n(145597),
    Q = n(981631),
    $ = n(921944),
    ee = n(987650),
    et = n(501787),
    en = n(388032),
    er = n(747401),
    ei = n(131970),
    es = n(730462);
function ea(e) {
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
function el(e, t) {
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
let eo = ec(null);
function ec(e) {
    var t;
    let n = Y.Z.getNotificationPositionMode(),
        r = n !== Q._vf.DISABLED,
        i = H.ZP.getOverlayKeybind(),
        s = H.ZP.getOverlayChatKeybind();
    return {
        enabled: z.Z.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: Y.Z.getTextChatNotificationMode(),
        hotkey: null != i ? (0, X.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, X.BB)(s.shortcut) : null,
        text_opacity_slider: Y.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : z.Z.enabled
    };
}
function ed(e) {
    let { children: t, title: n } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: er.formItemTitle,
                    children: n
                }),
            (0, r.jsx)('div', {
                className: er.rowContainer,
                children: t
            })
        ]
    });
}
function eu(e) {
    let { header: t, icon: n, title: i, description: s, action: l, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, r.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: a()(er.groupContainer, u),
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: er.groupHeader,
                    children: t
                }),
            (0, r.jsxs)('div', {
                className: er.groupContent,
                children: [
                    null != n &&
                        (0, r.jsx)('div', {
                            className: er.groupIcon,
                            children: n
                        }),
                    (0, r.jsxs)('div', {
                        className: er.groupMainContent,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: er.groupTitle,
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
                        className: er.groupAction,
                        children: l
                    })
                ]
            })
        ]
    });
}
function em(e) {
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
        className: a()(er.collapseable),
        collapsibleContent: (0, r.jsx)('div', {
            className: er.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eu,
                el(ea({}, l), {
                    onClick: (e) => {
                        d(!o), null == t || t(e);
                    },
                    className: a()(er.mainCollapseableContainer, n),
                    action: (0, r.jsxs)('div', {
                        className: er.groupCollapsedAction,
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
let eg = new Set([_.mM.INITIALIZING, _.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, _.mM.WAITING_FOR_MODULE_TRACKING, _.mM.WAITING_FOR_OVERLAY_OPEN]),
    ep = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eh(e) {
    var t, n, s;
    let { runningGame: a, runningGameApplication: l } = (function () {
            let e = (0, g.e7)([M.Z], () => M.Z.getStreamerActiveStreamMetadata()),
                t = (0, g.e7)(
                    [S.ZP],
                    () => {
                        let e = S.ZP.getVisibleGame();
                        return null == e ? null : e;
                    },
                    [],
                    o()
                ),
                [n] = (0, O.Z)([null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0]);
            return {
                runningGame: t,
                runningGameApplication: n
            };
        })(),
        c = null == a ? void 0 : a.pid,
        d = (0, g.e7)([D.default], () => (null == a || null == c ? null : D.default.getTrackedGameByPid(c)), [a, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, g.cj)(
            [U.Z, G.Z],
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
                return (0, S.b6)(a, !1, [U.Z, G.Z]);
            },
            [a, d]
        ),
        p = (0, g.e7)([S.ZP, U.Z, G.Z], () => (null == a ? null : (0, S.FZ)(a, [S.ZP, U.Z, G.Z])), [a], o()),
        [b, x] = i.useState(m),
        [v, T] = i.useState(u),
        [P, R] = i.useState(!1);
    i.useEffect(() => {
        x(m), T(u);
    }, [m, u]);
    let w = (0, C.$1)(),
        k = !(0, J.VS)(),
        { legacyEnabled: W, oopEnabled: L } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        B = (e, t, n) => {
            var r, i, s;
            if ((ep(n), null == a)) return;
            let l = !1,
                o = !1;
            switch (t) {
                case A.AE.LEGACY_GAME:
                    T(e), f.Z.toggleOverlay(a, e, b), (l = !e && v);
                    break;
                case A.AE.OOP_GAME:
                    x(e), f.Z.toggleOverlay(a, v, e), (o = !e && b);
                    break;
                case A.AE.LEGACY:
                    N.Z.setEnabled(e, L), (0, A.ou)(e, A.AE.LEGACY, null !== (r = a.id) && void 0 !== r ? r : null);
                    break;
                case A.AE.OOP:
                    N.Z.setEnabled(W, e), (0, A.ou)(e, A.AE.OOP, null !== (i = a.id) && void 0 !== i ? i : null);
            }
            (l || o) && (0, Z.l)(l ? A.AE.LEGACY_GAME : A.AE.OOP_GAME, null !== (s = a.id) && void 0 !== s ? s : null);
        },
        V = (e, t) => {
            let n = !t && e,
                r = !L && b,
                i = !W && v,
                s = !b && L,
                a = !v && W;
            switch (!0) {
                case n && (r || i) && (s || a):
                    return 'both';
                case n && (r || i):
                    return 'global';
                default:
                    return 'game';
            }
        },
        F = (e, t, n) => {
            if ((ep(n), null == a)) return;
            let r = !1,
                i = !1;
            switch (t) {
                case 'game':
                    f.Z.toggleOverlay(a, e, e), T(e), x(e), (r = !e && v), (i = !e && b);
                    break;
                case 'global':
                    N.Z.setEnabled(e, e), (r = !e && W), (i = !e && L);
                    break;
                case 'both':
                    N.Z.setEnabled(e, e), f.Z.toggleOverlay(a, e, e), T(e), x(e), (r = (!e && W) || (!e && v)), (i = (!e && L) || (!e && b));
            }
            let s = null;
            if ((r ? (s = 'game' === t ? A.AE.LEGACY_GAME : A.AE.LEGACY) : i && (s = 'game' === t ? A.AE.OOP_GAME : A.AE.OOP), null != s)) {
                var l;
                (0, Z.l)(s, null !== (l = a.id) && void 0 !== l ? l : null);
            }
        },
        H = w && k,
        z = !W && !L,
        Y = !b && !W && v && !w,
        K = !v && !L && b && !k,
        q = (null == d ? void 0 : d.overlayMethod) === _.gl.Disabled,
        X = (null == d ? void 0 : d.state) === _.mM.OVERLAY_RENDERING && !q,
        Q = (null == d ? void 0 : d.state) != null && eg.has(d.state) && !q,
        $ = (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcess || (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcessLimitedInteraction,
        ee = (null == d ? void 0 : d.overlayMethod) === _.gl.Hook,
        et = (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED_DISABLED,
        ei = !b && !v,
        [es, eo] = (() => {
            switch (!0) {
                case X && $:
                    return [
                        en.NW.format(en.t.hFVBIi, {
                            overlayMethod: en.NW.string(en.t.a3eXS0),
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
                case X && ee:
                    return [
                        en.NW.format(en.t.hFVBIi, {
                            overlayMethod: en.NW.string(en.t.bvlpDQ),
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
                                    return en.NW.string(en.t.mJmbeH);
                                case k:
                                    return en.NW.string(en.t.C7bLTU);
                                case !(null !== (e = null == d ? void 0 : d.oopEnabled) && void 0 !== e && e):
                                    return en.NW.string(en.t.WiY24u);
                                case !L:
                                    return en.NW.string(en.t.cAFVsL);
                                case !(null !== (t = null == d ? void 0 : d.supportsOutOfProcess) && void 0 !== t && t):
                                    return en.NW.string(en.t.XcGEcn);
                                default:
                                    return en.NW.string(en.t.bJXH2t);
                            }
                        })()
                    ];
                case et:
                    return [en.NW.string(en.t.OFC2a2), null];
                case H:
                    return [en.NW.string(en.t.m7X4a2), null];
                case z:
                    return [en.NW.string(en.t['9DUS5u']), null];
                case ei:
                    return [en.NW.string(en.t.nQ9EdH), null];
                case Y:
                case K:
                    return [en.NW.string(en.t.VWUn0d), null];
                case Q:
                    if ($) return [en.NW.string(en.t['s8+CFh']), null];
                    if (ee) return [en.NW.string(en.t.JEEdqq), null];
                    return [en.NW.string(en.t['2Xhy9v']), null];
                case null == d:
                    return [en.NW.string(en.t.vwHPRk), null];
                default:
                    return [en.NW.string(en.t.ONovPz), null];
            }
        })();
    return ((0, j.ZP)(() => {
        f.Z.getDetectableGames();
    }),
    null == a)
        ? null
        : (0, r.jsxs)(em, {
              onExpand: R,
              className: P ? er.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !== (s = null !== (n = null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : null == p ? void 0 : p.name) && void 0 !== n ? n : null == a ? void 0 : a.gameName) && void 0 !== s ? s : '',
                      null != p && p.verified
                          ? (0, r.jsx)(h.ua7, {
                                text: en.NW.string(en.t['4PJP5u']),
                                children: (e) =>
                                    (0, r.jsx)(
                                        y.Z,
                                        el(
                                            ea(
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
              description: es,
              hint: null != eo ? eo : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      X || Q
                          ? (0, r.jsx)(h.pzj, {
                                size: 'xxs',
                                color: Q ? h.TVs.colors.TEXT_MUTED.css : $ ? h.TVs.colors.TEXT_POSITIVE.css : h.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, r.jsx)('div', { className: er.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: en.NW.string(en.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, r.jsx)(I.Z, {
                  game: l,
                  pid: null == a ? void 0 : a.pid,
                  size: I.Z.Sizes.MEDIUM
              }),
              'aria-label': en.NW.string(en.t['87O5GB']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ep(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (b && L) || (v && W),
                      disabled: H,
                      onChange: (e, t) => {
                          F(e, V(e, (b && L) || (v && W)), t);
                      }
                  })
              }),
              children: [
                  (0, r.jsx)(eu, {
                      title: en.NW.string(en.t['7BlVIi']),
                      description: en.NW.string(en.t.ndgADA),
                      hint: L ? void 0 : en.NW.string(en.t.cAFVsL),
                      'aria-label': en.NW.string(en.t['7BlVIi']),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: b && L,
                                  disabled: k,
                                  onChange: (e, t) => {
                                      e && !L ? B(e, A.AE.OOP, t) : B(e, A.AE.OOP_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: er.emptySpacer })
                          ]
                      })
                  }),
                  (0, r.jsx)(eu, {
                      title: en.NW.string(en.t.BfFpW1),
                      description: en.NW.string(en.t.OzInYm),
                      hint: W ? void 0 : en.NW.string(en.t['3sYHXl']),
                      'aria-label': en.NW.string(en.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: v && W,
                                  disabled: w,
                                  onChange: (e, t) => {
                                      e && !W ? B(e, A.AE.LEGACY, t) : B(e, A.AE.LEGACY_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: er.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function ef(e) {
    let { game: t, gameApplication: n } = e,
        s = i.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]);
    return (0, r.jsx)(I.Z, {
        game: n,
        pid: s,
        size: I.Z.Sizes.SMALL
    });
}
function eb(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: a, onChange: l, clientSettingType: o, ariaLabel: c } = e,
        d = (0, g.cj)([S.ZP, U.Z, G.Z], () => (0, S.FZ)(t, [S.ZP, U.Z, G.Z])),
        u = (0, g.cj)([U.Z, G.Z], () => (0, S.b6)(t, !1, [U.Z, G.Z]), [t]),
        m = a(u),
        [p, f] = i.useState(m);
    i.useEffect(() => {
        f(m);
    }, [m]);
    let b = (e, n) => {
        let r = !e && p;
        if ((ep(n), f(e), l(e, d, u), r)) {
            var i, s;
            (0, Z.l)(o, null !== (s = null !== (i = d.id) && void 0 !== i ? i : null == t ? void 0 : t.id) && void 0 !== s ? s : null);
        }
    };
    return (0, r.jsx)(eu, {
        title: t.name,
        icon: (0, r.jsx)(ef, {
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
                (0, r.jsx)('div', { className: er.emptySpacer })
            ]
        })
    });
}
function eN() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = (0, g.Wu)([S.ZP], () => S.ZP.getGamesSeen(!0)),
        l = (0, O.Z)(a.map((e) => e.id)),
        o = (0, C.$1)(),
        c = (e, t) => {
            var r, i;
            ep(t), N.Z.setEnabled(e, s);
            let a = null !== (i = null === (r = S.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, A.ou)(e, A.AE.LEGACY, a), !e && n && (0, Z.l)(A.AE.LEGACY, a);
        },
        d = (e, t, n) => {
            let { enabledOOP: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (ee.iP ? (o ? en.NW.string(en.t.r9jEV1) : en.NW.string(en.t.OzInYm)) : en.NW.string(en.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, r.jsx)(eu, {
              title: en.NW.string(en.t.BfFpW1),
              description: u,
              'aria-label': en.NW.string(en.t.BfFpW1),
              className: er.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      ee.iP && (0, r.jsx)('div', { className: er.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(em, {
              onExpand: t,
              className: e ? er.expandedContainer : void 0,
              title: en.NW.string(en.t.BfFpW1),
              description: u,
              'aria-label': en.NW.string(en.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ep(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: er.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: en.NW.string(en.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: er.scroller,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              eb,
                              {
                                  rawGame: e,
                                  clientSettingType: A.AE.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: l[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: en.NW.format(en.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ex() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = !(0, J.VS)(),
        l = (0, g.Wu)([S.ZP], () => S.ZP.getGamesSeen(!0)),
        o = (0, O.Z)(l.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            ep(t);
            let a = !e && n;
            N.Z.setEnabled(s, e);
            let l = null !== (i = null === (r = S.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, A.ou)(e, A.AE.OOP, l), a && (0, Z.l)(A.AE.OOP, l);
        },
        d = (e, t, n) => {
            let { enabledLegacy: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (ee.iP ? (a ? en.NW.string(en.t.C7bLTU) : en.NW.string(en.t.ndgADA)) : en.NW.string(en.t.m7X4a2)), [a]);
    return 0 === l.length
        ? (0, r.jsx)(eu, {
              title: en.NW.string(en.t['7BlVIi']),
              description: u,
              'aria-label': en.NW.string(en.t['7BlVIi']),
              className: er.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      ee.iP && (0, r.jsx)('div', { className: er.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(em, {
              onExpand: t,
              className: e ? er.expandedContainer : void 0,
              title: en.NW.string(en.t['7BlVIi']),
              description: u,
              'aria-label': en.NW.string(en.t['7BlVIi']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ep(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: er.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: en.NW.string(en.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: er.scroller,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              eb,
                              {
                                  rawGame: e,
                                  clientSettingType: A.AE.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: a,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: en.NW.format(en.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function e_() {
    let e = (0, g.e7)([H.ZP], () => H.ZP.getOverlayKeybind()),
        t = (0, C.$1)(),
        n = !(0, J.VS)(),
        [i, s] = (0, g.Wu)([S.ZP], () => [S.ZP.canShowAdminWarning, S.ZP.getVisibleGame()], []),
        a = null != s && s.elevated && i;
    return (0, r.jsx)(ed, {
        children: (0, r.jsxs)('div', {
            className: er.keybindMainContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: er.keybindContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: er.keybindHeaderContainer,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: en.NW.string(en.t.VsAZcH)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: er.keybindRecorderContainer,
                            children: (0, r.jsx)(x.Z, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    d()(null != e, 'Keybind should never be undefined'), b.Z.setKeybind(el(ea({}, e), { shortcut: t }));
                                }
                            })
                        })
                    ]
                }),
                a &&
                    (0, r.jsx)(h.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-warning',
                        className: er.keybindAdminWarning,
                        children: en.NW.string(en.t.NsowVV)
                    })
            ]
        })
    });
}
function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new B.Z({
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
        user: new L.Z({
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
function ej() {
    let [e, t] = (0, v.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t($.L.DISMISS);
        };
    return ((0, j.ZP)(() => () => {
        t($.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)('div', {
              className: er.overlaySettingsNux,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: ei.Z,
                          alt: en.NW.string(en.t.mdXZh4),
                          className: er.nuxFirstImage
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: er.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: en.NW.string(en.t.jzjJQk)
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: en.NW.string(en.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: es.Z,
                          alt: en.NW.string(en.t.mdXZh4),
                          className: er.nuxUserSettingsImage
                      })
                  }),
                  (0, r.jsx)(h.zxk, {
                      className: er.closeCircleButton,
                      onClick: () => n(),
                      children: en.NW.string(en.t.Q26diI)
                  }),
                  (0, r.jsx)('div', { className: er.nuxDivider })
              ]
          });
}
function eC(e) {
    var t, n;
    let { className: s, showHeader: a } = e,
        {
            avatarSizeMode: l,
            displayNameMode: o,
            displayUserMode: c,
            notificationPositionMode: d,
            textChatNotificationMode: u,
            disableClickableRegions: p,
            shouldShowKeybindIndicators: f
        } = (0, g.cj)([Y.Z], () => ({
            avatarSizeMode: Y.Z.getAvatarSizeMode(),
            displayNameMode: Y.Z.getDisplayNameMode(),
            displayUserMode: Y.Z.getDisplayUserMode(),
            notificationPositionMode: Y.Z.getNotificationPositionMode(),
            textChatNotificationMode: Y.Z.getTextChatNotificationMode(),
            disableClickableRegions: Y.Z.disableClickableRegions,
            shouldShowKeybindIndicators: Y.Z.showKeybindIndicators
        })),
        b = (0, P.o4)('user_settings').overlayV3UI,
        x = (0, g.e7)([F.default], () => F.default.getCurrentUser()),
        _ = (0, R.Z)({ location: 'overlay_user_settings' });
    (0, j.ZP)(() => {
        if (q.isPlatformEmbedded) return (0, T.Ky)(), T.P7;
    }),
        (function () {
            let e = ec(eo);
            m().isEqual(e, eo) || (K.default.track(Q.rMx.OVERLAY_SETTINGS_UPDATED, e), (eo = e));
        })();
    let [E] = i.useState(() => [eE(en.NW.string(en.t.C0ZDvr), !0, !1), eE(en.NW.string(en.t.iOtj8P), !1, !1, !0), eE(en.NW.string(en.t['0oqNgI']), !1, !0)]),
        C = (0, g.e7)([V.Z], () => V.Z.getWidgetsForLayout(et.OVERLAY_V3_LAYOUT_ID).find((e) => e.type === Q.Odu.VOICE_V3));
    return null == x
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: en.NW.string(en.t['9cb1U1']),
                      children: [
                          b ? (0, r.jsx)(ej, {}) : null,
                          (0, r.jsxs)('div', {
                              className: er.overlayEnabledSettingsContainer,
                              children: [(0, r.jsx)(eh, {}), (0, r.jsx)(ex, {}), (0, r.jsx)(eN, {})]
                          }),
                          (0, r.jsx)('div', { className: er.settingsDivider })
                      ]
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: er.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(e_, {}),
                                  _ &&
                                      (0, r.jsx)(ed, {
                                          children: (0, r.jsx)(h.j7V, {
                                              value: f,
                                              onChange: (e) => N.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: en.NW.string(en.t.XZTl9v)
                                          })
                                      }),
                                  (0, r.jsxs)(ed, {
                                      children: [
                                          (0, r.jsx)(h.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: en.NW.string(en.t.Fy5kPj)
                                          }),
                                          (0, r.jsx)(h.j7V, {
                                              value: d !== Q._vf.DISABLED && u === Q.Ypu.ENABLED,
                                              disabled: d === Q._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = Q.Ypu;
                                                  N.Z.setTextChatNotificationMode(u === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)(ed, {
                                      children: [
                                          (0, r.jsx)(h.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: en.NW.string(en.t['+eFXxs'])
                                          }),
                                          (0, r.jsx)(h.j7V, {
                                              value: !p,
                                              onChange: function () {
                                                  N.Z.setDisableClickableRegions(!p);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', { className: er.settingsDivider })
                      ]
                  }),
                  (0, r.jsx)(h.hjN, {
                      title: 'Voice Widget',
                      children: (0, r.jsxs)('div', {
                          className: er.voiceSettingsContainer,
                          children: [
                              (0, r.jsx)(ed, {
                                  title: en.NW.string(en.t.dnvZSk),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: en.NW.string(en.t.YcOxtr),
                                              value: Q.ipw.LARGE
                                          },
                                          {
                                              label: en.NW.string(en.t.BKIKq6),
                                              value: Q.ipw.SMALL
                                          }
                                      ],
                                      className: er.select,
                                      onChange: (e) => N.Z.setAvatarSizeMode(e),
                                      value: l
                                  })
                              }),
                              (0, r.jsx)(ed, {
                                  title: en.NW.string(en.t.J0dpcH),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: en.NW.string(en.t.nBmDra),
                                              value: Q.wC$.ALWAYS
                                          },
                                          {
                                              label: en.NW.string(en.t['2OvIZW']),
                                              value: Q.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: en.NW.string(en.t.ekjlPD),
                                              value: Q.wC$.NEVER
                                          }
                                      ],
                                      className: er.select,
                                      onChange: (e) => N.Z.setDisplayNameMode(e),
                                      value: o
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: er.widgetContainer,
                                  children:
                                      b &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: er.voiceWidgetContainer,
                                                  children: (0, r.jsx)(w.k, {
                                                      id: 'voice-widget',
                                                      title: en.NW.string(en.t.KNJ6Vl),
                                                      channel: (0, W.kt)({
                                                          id: '123',
                                                          name: 'Test Channel',
                                                          type: Q.d4z.GUILD_VOICE,
                                                          guild_id: '456'
                                                      }),
                                                      sortedVoiceStates: [
                                                          (function (e) {
                                                              let t = eE(e.username);
                                                              return (t.user = e), t;
                                                          })(x),
                                                          ...E
                                                      ],
                                                      displayNameMode: o,
                                                      displayUserMode: c,
                                                      avatarSizeMode: l,
                                                      widget: Q.Odu.VOICE,
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
                                                  className: er.widgetHeaderContainer,
                                                  children: [
                                                      (0, r.jsx)(k.PI, { children: en.NW.string(en.t.KNJ6Vl) }),
                                                      (0, r.jsx)(k.ls, {}),
                                                      (0, r.jsx)(k.RT, {
                                                          id: null !== (t = null == C ? void 0 : C.id) && void 0 !== t ? t : 'voice-widget',
                                                          pinned: null !== (n = null == C ? void 0 : C.pinned) && void 0 !== n && n
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                              }),
                              (0, r.jsx)(ed, {
                                  title: en.NW.string(en.t.swsWWF),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: en.NW.string(en.t.nBmDra),
                                              value: Q.OYC.ALWAYS
                                          },
                                          {
                                              label: en.NW.string(en.t['2OvIZW']),
                                              value: Q.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: er.select,
                                      onChange: (e) => N.Z.setDisplayUserMode(e),
                                      value: c
                                  })
                              })
                          ]
                      })
                  })
              ]
          });
}
