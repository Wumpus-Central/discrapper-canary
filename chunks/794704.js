n.d(t, { Z: () => eO }), n(266796), n(47120);
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
    q = n(823379),
    X = n(358085),
    J = n(13140),
    Q = n(145597),
    $ = n(981631),
    ee = n(921944),
    et = n(987650),
    en = n(501787),
    er = n(388032),
    ei = n(747401),
    es = n(131970),
    ea = n(730462);
function el(e) {
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
function eo(e, t) {
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
let ec = ed(null);
function ed(e) {
    var t;
    let n = Y.default.getNotificationPositionMode(),
        r = n !== $._vf.DISABLED,
        i = H.ZP.getOverlayKeybind(),
        s = H.ZP.getOverlayChatKeybind();
    return {
        enabled: z.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: Y.default.getTextChatNotificationMode(),
        hotkey: null != i ? (0, J.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, J.BB)(s.shortcut) : null,
        text_opacity_slider: Y.default.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : z.default.enabled
    };
}
function eu(e) {
    let { children: t, title: n } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: ei.formItemTitle,
                    children: n
                }),
            (0, r.jsx)('div', {
                className: ei.rowContainer,
                children: t
            })
        ]
    });
}
function em(e) {
    let { header: t, icon: n, title: i, description: s, action: l, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, r.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: a()(ei.groupContainer, u),
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: ei.groupHeader,
                    children: t
                }),
            (0, r.jsxs)('div', {
                className: ei.groupContent,
                children: [
                    null != n &&
                        (0, r.jsx)('div', {
                            className: ei.groupIcon,
                            children: n
                        }),
                    (0, r.jsxs)('div', {
                        className: ei.groupMainContent,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: ei.groupTitle,
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
                        className: ei.groupAction,
                        children: l
                    })
                ]
            })
        ]
    });
}
function eg(e) {
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
        className: a()(ei.collapseable),
        collapsibleContent: (0, r.jsx)('div', {
            className: ei.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                em,
                eo(el({}, l), {
                    onClick: (e) => {
                        d(!o), null == t || t(e);
                    },
                    className: a()(ei.mainCollapseableContainer, n),
                    action: (0, r.jsxs)('div', {
                        className: ei.groupCollapsedAction,
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
let ep = new Set([_.mM.INITIALIZING, _.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, _.mM.WAITING_FOR_MODULE_TRACKING, _.mM.WAITING_FOR_OVERLAY_OPEN]),
    eh = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ef(e) {
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
        k = !(0, Q.supportsOutOfProcess)(),
        { legacyEnabled: W, oopEnabled: L } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        B = (e, t, n) => {
            var r, i, s;
            if ((eh(n), null == a)) return;
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
            if ((eh(n), null == a)) return;
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
        J = (null == d ? void 0 : d.state) != null && ep.has(d.state) && !q,
        $ = (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcess || (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcessLimitedInteraction,
        ee = (null == d ? void 0 : d.overlayMethod) === _.gl.Hook,
        et = (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED_DISABLED,
        en = !b && !v,
        [es, ea] = (() => {
            switch (!0) {
                case X && $:
                    return [
                        er.NW.format(er.t.hFVBIi, {
                            overlayMethod: er.NW.string(er.t.a3eXS0),
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
                        er.NW.format(er.t.hFVBIi, {
                            overlayMethod: er.NW.string(er.t.bvlpDQ),
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
                                    return er.NW.string(er.t.mJmbeH);
                                case k:
                                    return er.NW.string(er.t.C7bLTU);
                                case !(null !== (e = null == d ? void 0 : d.oopEnabled) && void 0 !== e && e):
                                    return er.NW.string(er.t.WiY24u);
                                case !L:
                                    return er.NW.string(er.t.cAFVsL);
                                case !(null !== (t = null == d ? void 0 : d.supportsOutOfProcess) && void 0 !== t && t):
                                    return er.NW.string(er.t.XcGEcn);
                                default:
                                    return er.NW.string(er.t.bJXH2t);
                            }
                        })()
                    ];
                case et:
                    return [er.NW.string(er.t.OFC2a2), null];
                case H:
                    return [er.NW.string(er.t.m7X4a2), null];
                case z:
                    return [er.NW.string(er.t['9DUS5u']), null];
                case en:
                    return [er.NW.string(er.t.nQ9EdH), null];
                case Y:
                case K:
                    return [er.NW.string(er.t.VWUn0d), null];
                case J:
                    if ($) return [er.NW.string(er.t['s8+CFh']), null];
                    if (ee) return [er.NW.string(er.t.JEEdqq), null];
                    return [er.NW.string(er.t['2Xhy9v']), null];
                case null == d:
                    return [er.NW.string(er.t.vwHPRk), null];
                default:
                    return [er.NW.string(er.t.ONovPz), null];
            }
        })();
    return ((0, j.ZP)(() => {
        f.Z.getDetectableGames();
    }),
    null == a)
        ? null
        : (0, r.jsxs)(eg, {
              onExpand: R,
              className: P ? ei.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !== (s = null !== (n = null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : null == p ? void 0 : p.name) && void 0 !== n ? n : null == a ? void 0 : a.gameName) && void 0 !== s ? s : '',
                      null != p && p.verified
                          ? (0, r.jsx)(h.ua7, {
                                text: er.NW.string(er.t['4PJP5u']),
                                children: (e) =>
                                    (0, r.jsx)(
                                        y.Z,
                                        eo(
                                            el(
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
              hint: null != ea ? ea : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      X || J
                          ? (0, r.jsx)(h.pzj, {
                                size: 'xxs',
                                color: J ? h.TVs.colors.TEXT_MUTED.css : $ ? h.TVs.colors.TEXT_POSITIVE.css : h.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, r.jsx)('div', { className: ei.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: er.NW.string(er.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, r.jsx)(I.Z, {
                  game: l,
                  pid: null == a ? void 0 : a.pid,
                  size: I.Z.Sizes.MEDIUM
              }),
              'aria-label': er.NW.string(er.t['87O5GB']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eh(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (b && L) || (v && W),
                      disabled: H,
                      onChange: (e, t) => {
                          F(e, V(e, (b && L) || (v && W)), t);
                      }
                  })
              }),
              children: [
                  (0, r.jsx)(em, {
                      title: er.NW.string(er.t['7BlVIi']),
                      description: er.NW.string(er.t.ndgADA),
                      hint: L ? void 0 : er.NW.string(er.t.cAFVsL),
                      'aria-label': er.NW.string(er.t['7BlVIi']),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: b && L,
                                  disabled: k,
                                  onChange: (e, t) => {
                                      e && !L ? B(e, A.AE.OOP, t) : B(e, A.AE.OOP_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: ei.emptySpacer })
                          ]
                      })
                  }),
                  (0, r.jsx)(em, {
                      title: er.NW.string(er.t.BfFpW1),
                      description: er.NW.string(er.t.OzInYm),
                      hint: W ? void 0 : er.NW.string(er.t['3sYHXl']),
                      'aria-label': er.NW.string(er.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: v && W,
                                  disabled: w,
                                  onChange: (e, t) => {
                                      e && !W ? B(e, A.AE.LEGACY, t) : B(e, A.AE.LEGACY_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: ei.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function eb(e) {
    let { game: t, gameApplication: n } = e,
        s = i.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]);
    return (0, r.jsx)(I.Z, {
        game: n,
        pid: s,
        size: I.Z.Sizes.SMALL
    });
}
function eN(e) {
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
        if ((eh(n), f(e), l(e, d, u), r)) {
            var i, s;
            (0, Z.l)(o, null !== (s = null !== (i = d.id) && void 0 !== i ? i : null == t ? void 0 : t.id) && void 0 !== s ? s : null);
        }
    };
    return (0, r.jsx)(em, {
        title: t.name,
        icon: (0, r.jsx)(eb, {
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
                (0, r.jsx)('div', { className: ei.emptySpacer })
            ]
        })
    });
}
function ex() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = (0, g.Wu)([S.ZP], () => S.ZP.getGamesSeen(!0)),
        l = (0, O.Z)(a.map((e) => e.id)),
        o = (0, C.$1)(),
        c = (e, t) => {
            var r, i;
            eh(t), N.Z.setEnabled(e, s);
            let a = null !== (i = null === (r = S.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, A.ou)(e, A.AE.LEGACY, a), !e && n && (0, Z.l)(A.AE.LEGACY, a);
        },
        d = (e, t, n) => {
            let { enabledOOP: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (et.iP ? (o ? er.NW.string(er.t.r9jEV1) : er.NW.string(er.t.OzInYm)) : er.NW.string(er.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, r.jsx)(em, {
              title: er.NW.string(er.t.BfFpW1),
              description: u,
              'aria-label': er.NW.string(er.t.BfFpW1),
              className: ei.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      et.iP && (0, r.jsx)('div', { className: ei.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(eg, {
              onExpand: t,
              className: e ? ei.expandedContainer : void 0,
              title: er.NW.string(er.t.BfFpW1),
              description: u,
              'aria-label': er.NW.string(er.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eh(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: ei.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: er.NW.string(er.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ei.scroller,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              eN,
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
                                  ariaLabel: er.NW.format(er.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function e_() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = !(0, Q.supportsOutOfProcess)(),
        l = (0, g.Wu)([S.ZP], () => S.ZP.getGamesSeen(!0)),
        o = (0, O.Z)(l.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            eh(t);
            let a = !e && n;
            N.Z.setEnabled(s, e);
            let l = null !== (i = null === (r = S.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, A.ou)(e, A.AE.OOP, l), a && (0, Z.l)(A.AE.OOP, l);
        },
        d = (e, t, n) => {
            let { enabledLegacy: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (et.iP ? (a ? er.NW.string(er.t.C7bLTU) : er.NW.string(er.t.ndgADA)) : er.NW.string(er.t.m7X4a2)), [a]);
    return 0 === l.length
        ? (0, r.jsx)(em, {
              title: er.NW.string(er.t['7BlVIi']),
              description: u,
              'aria-label': er.NW.string(er.t['7BlVIi']),
              className: ei.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      et.iP && (0, r.jsx)('div', { className: ei.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(eg, {
              onExpand: t,
              className: e ? ei.expandedContainer : void 0,
              title: er.NW.string(er.t['7BlVIi']),
              description: u,
              'aria-label': er.NW.string(er.t['7BlVIi']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eh(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: ei.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: er.NW.string(er.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ei.scroller,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              eN,
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
                                  ariaLabel: er.NW.format(er.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eE() {
    let e = (0, g.e7)([H.ZP], () => H.ZP.getOverlayKeybind()),
        t = (0, C.$1)(),
        n = !(0, Q.supportsOutOfProcess)(),
        [i, s] = (0, g.Wu)([S.ZP], () => [S.ZP.canShowAdminWarning, S.ZP.getVisibleGame()], []),
        a = null != s && s.elevated && i;
    return (0, r.jsx)(eu, {
        children: (0, r.jsxs)('div', {
            className: ei.keybindMainContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: ei.keybindContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: ei.keybindHeaderContainer,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: er.NW.string(er.t.VsAZcH)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: ei.keybindRecorderContainer,
                            children: (0, r.jsx)(x.Z, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    d()(null != e, 'Keybind should never be undefined'), b.Z.setKeybind(eo(el({}, e), { shortcut: t }));
                                }
                            })
                        })
                    ]
                }),
                a &&
                    (0, r.jsx)(h.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-warning',
                        className: ei.keybindAdminWarning,
                        children: er.NW.string(er.t.NsowVV)
                    })
            ]
        })
    });
}
function ej(e) {
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
function eC() {
    let [e, t] = (0, v.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(ee.L.DISMISS);
        };
    return ((0, j.ZP)(() => () => {
        t(ee.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)('div', {
              className: ei.overlaySettingsNux,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: es.Z,
                          alt: er.NW.string(er.t.mdXZh4),
                          className: ei.nuxFirstImage
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: ei.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: er.NW.string(er.t.jzjJQk)
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: er.NW.string(er.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: ea.Z,
                          alt: er.NW.string(er.t.mdXZh4),
                          className: ei.nuxUserSettingsImage
                      })
                  }),
                  (0, r.jsx)(h.zxk, {
                      className: ei.closeCircleButton,
                      onClick: () => n(),
                      children: er.NW.string(er.t.Q26diI)
                  }),
                  (0, r.jsx)('div', { className: ei.nuxDivider })
              ]
          });
}
function eO(e) {
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
        } = (0, g.cj)([Y.default], () => ({
            avatarSizeMode: Y.default.getAvatarSizeMode(),
            displayNameMode: Y.default.getDisplayNameMode(),
            displayUserMode: Y.default.getDisplayUserMode(),
            notificationPositionMode: Y.default.getNotificationPositionMode(),
            textChatNotificationMode: Y.default.getTextChatNotificationMode(),
            disableClickableRegions: Y.default.disableClickableRegions,
            shouldShowKeybindIndicators: Y.default.showKeybindIndicators
        })),
        b = (0, P.o4)('user_settings').overlayV3UI,
        x = (0, g.e7)([F.default], () => F.default.getCurrentUser()),
        _ = (0, R.Z)({ location: 'overlay_user_settings' });
    (0, j.ZP)(() => {
        if (X.isPlatformEmbedded) return (0, T.Ky)(), T.P7;
    }),
        (function () {
            let e = ed(ec);
            m().isEqual(e, ec) || (K.default.track($.rMx.OVERLAY_SETTINGS_UPDATED, e), (ec = e));
        })();
    let [E] = i.useState(() => [ej(er.NW.string(er.t.C0ZDvr), !0, !1), ej(er.NW.string(er.t.iOtj8P), !1, !1, !0), ej(er.NW.string(er.t['0oqNgI']), !1, !0)]),
        C = (0, g.e7)([V.Z], () => V.Z.getWidgetsForLayout(en.OVERLAY_V3_LAYOUT_ID).find((e) => e.type === $.Odu.VOICE_V3)),
        O = [
            null != x
                ? (function (e) {
                      let t = ej(e.username);
                      return (t.user = e), t;
                  })(x)
                : null,
            ...E
        ].filter(q.lm),
        v = [new Map(O.map((e) => [e.user.id, e])), O.map((e) => e.user.id)];
    return null == x
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: er.NW.string(er.t['9cb1U1']),
                      children: [
                          b ? (0, r.jsx)(eC, {}) : null,
                          (0, r.jsxs)('div', {
                              className: ei.overlayEnabledSettingsContainer,
                              children: [(0, r.jsx)(ef, {}), (0, r.jsx)(e_, {}), (0, r.jsx)(ex, {})]
                          }),
                          (0, r.jsx)('div', { className: ei.settingsDivider })
                      ]
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: ei.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eE, {}),
                                  _ &&
                                      (0, r.jsx)(eu, {
                                          children: (0, r.jsx)(h.j7V, {
                                              value: f,
                                              onChange: (e) => N.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: er.NW.string(er.t.XZTl9v)
                                          })
                                      }),
                                  (0, r.jsxs)(eu, {
                                      children: [
                                          (0, r.jsx)(h.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: er.NW.string(er.t.Fy5kPj)
                                          }),
                                          (0, r.jsx)(h.j7V, {
                                              value: d !== $._vf.DISABLED && u === $.Ypu.ENABLED,
                                              disabled: d === $._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = $.Ypu;
                                                  N.Z.setTextChatNotificationMode(u === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)(eu, {
                                      children: [
                                          (0, r.jsx)(h.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: er.NW.string(er.t['+eFXxs'])
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
                          (0, r.jsx)('div', { className: ei.settingsDivider })
                      ]
                  }),
                  (0, r.jsx)(h.hjN, {
                      title: 'Voice Widget',
                      children: (0, r.jsxs)('div', {
                          className: ei.voiceSettingsContainer,
                          children: [
                              (0, r.jsx)(eu, {
                                  title: er.NW.string(er.t.dnvZSk),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: er.NW.string(er.t.YcOxtr),
                                              value: $.ipw.LARGE
                                          },
                                          {
                                              label: er.NW.string(er.t.BKIKq6),
                                              value: $.ipw.SMALL
                                          }
                                      ],
                                      className: ei.select,
                                      onChange: (e) => N.Z.setAvatarSizeMode(e),
                                      value: l
                                  })
                              }),
                              (0, r.jsx)(eu, {
                                  title: er.NW.string(er.t.J0dpcH),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: er.NW.string(er.t.nBmDra),
                                              value: $.wC$.ALWAYS
                                          },
                                          {
                                              label: er.NW.string(er.t['2OvIZW']),
                                              value: $.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: er.NW.string(er.t.ekjlPD),
                                              value: $.wC$.NEVER
                                          }
                                      ],
                                      className: ei.select,
                                      onChange: (e) => N.Z.setDisplayNameMode(e),
                                      value: o
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: ei.widgetContainer,
                                  children:
                                      b &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: ei.voiceWidgetContainer,
                                                  children: (0, r.jsx)(w.k, {
                                                      id: 'voice-widget',
                                                      title: er.NW.string(er.t.KNJ6Vl),
                                                      channel: (0, W.kt)({
                                                          id: '123',
                                                          name: 'Test Channel',
                                                          type: $.d4z.GUILD_VOICE,
                                                          guild_id: '456'
                                                      }),
                                                      overlayVoiceStates: v,
                                                      displayNameMode: o,
                                                      displayUserMode: c,
                                                      avatarSizeMode: l,
                                                      widget: $.Odu.VOICE,
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
                                                  className: ei.widgetHeaderContainer,
                                                  children: [
                                                      (0, r.jsx)(k.PI, { children: er.NW.string(er.t.KNJ6Vl) }),
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
                              (0, r.jsx)(eu, {
                                  title: er.NW.string(er.t.swsWWF),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: er.NW.string(er.t.nBmDra),
                                              value: $.OYC.ALWAYS
                                          },
                                          {
                                              label: er.NW.string(er.t['2OvIZW']),
                                              value: $.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: ei.select,
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
