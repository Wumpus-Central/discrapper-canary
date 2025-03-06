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
    p = n(442837),
    g = n(704215),
    h = n(481060),
    f = n(224706),
    x = n(660216),
    b = n(13245),
    N = n(825209),
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
    R = n(32300),
    D = n(809357),
    Z = n(371651),
    w = n(610394),
    k = n(957148),
    W = n(243487),
    L = n(430561),
    B = n(131704),
    M = n(598077),
    U = n(189786),
    V = n(199902),
    G = n(77498),
    F = n(283595),
    H = n(594174),
    z = n(556296),
    Y = n(808506),
    K = n(237997),
    q = n(626135),
    X = n(823379),
    J = n(358085),
    Q = n(13140),
    $ = n(145597),
    ee = n(981631),
    et = n(921944),
    en = n(987650),
    er = n(388032),
    ei = n(301883),
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
    let n = K.default.getNotificationPositionMode(),
        r = n !== ee._vf.DISABLED,
        i = z.ZP.getOverlayKeybind(),
        s = z.ZP.getOverlayChatKeybind();
    return {
        enabled: Y.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: K.default.getTextChatNotificationMode(),
        hotkey: null != i ? (0, Q.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, Q.BB)(s.shortcut) : null,
        text_opacity_slider: K.default.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : Y.default.enabled
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
function ep(e) {
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
        className: ei.collapseable,
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
let eg = new Set([_.mM.INITIALIZING, _.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, _.mM.WAITING_FOR_MODULE_TRACKING, _.mM.WAITING_FOR_OVERLAY_OPEN]),
    eh = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ef(e) {
    var t, n, s;
    let { runningGame: a, runningGameApplication: l } = (function () {
            let e = (0, p.e7)([V.Z], () => V.Z.getStreamerActiveStreamMetadata()),
                t = (0, p.e7)(
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
        c = null == a ? void 0 : a.pid,
        d = (0, p.e7)([Z.default], () => (null == a || null == c ? null : Z.default.getTrackedGameByPid(c)), [a, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, p.cj)(
            [G.Z, F.Z],
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
                return (0, T.b6)(a, !1, [G.Z, F.Z]);
            },
            [a, d]
        ),
        g = (0, p.e7)([T.ZP, G.Z, F.Z], () => (null == a ? null : (0, T.FZ)(a, [T.ZP, G.Z, F.Z])), [a], o()),
        [x, N] = i.useState(m),
        [O, S] = i.useState(u),
        [I, R] = i.useState(!1);
    i.useEffect(() => {
        N(m), S(u);
    }, [m, u]);
    let D = (0, C.$1)(),
        w = !(0, $.supportsOutOfProcess)(),
        { legacyEnabled: W, oopEnabled: L } = (0, p.cj)([Z.default], () => Z.default.getGlobalEnabledStatus()),
        B = (e, t, n) => {
            var r, i, s;
            if ((eh(n), null == a)) return;
            let l = !1,
                o = !1;
            switch (t) {
                case P.AE.LEGACY_GAME:
                    S(e), f.Z.toggleOverlay(a, e, x), (l = !e && O);
                    break;
                case P.AE.OOP_GAME:
                    N(e), f.Z.toggleOverlay(a, O, e), (o = !e && x);
                    break;
                case P.AE.LEGACY:
                    b.Z.setEnabled(e, L), (0, P.ou)(e, P.AE.LEGACY, null !== (r = a.id) && void 0 !== r ? r : null);
                    break;
                case P.AE.OOP:
                    b.Z.setEnabled(W, e), (0, P.ou)(e, P.AE.OOP, null !== (i = a.id) && void 0 !== i ? i : null);
            }
            (l || o) && (0, k.l)(l ? P.AE.LEGACY_GAME : P.AE.OOP_GAME, null !== (s = a.id) && void 0 !== s ? s : null);
        },
        M = (e, t) => {
            let n = !t && e,
                r = !L && x,
                i = !W && O,
                s = !x && L,
                a = !O && W;
            switch (!0) {
                case n && (r || i) && (s || a):
                    return 'both';
                case n && (r || i):
                    return 'global';
                default:
                    return 'game';
            }
        },
        U = (e, t, n) => {
            if ((eh(n), null == a)) return;
            let r = !1,
                i = !1;
            switch (t) {
                case 'game':
                    f.Z.toggleOverlay(a, e, e), S(e), N(e), (r = !e && O), (i = !e && x);
                    break;
                case 'global':
                    b.Z.setEnabled(e, e), (r = !e && W), (i = !e && L);
                    break;
                case 'both':
                    b.Z.setEnabled(e, e), f.Z.toggleOverlay(a, e, e), S(e), N(e), (r = (!e && W) || (!e && O)), (i = (!e && L) || (!e && x));
            }
            let s = null;
            if ((r ? (s = 'game' === t ? P.AE.LEGACY_GAME : P.AE.LEGACY) : i && (s = 'game' === t ? P.AE.OOP_GAME : P.AE.OOP), null != s)) {
                var l;
                (0, k.l)(s, null !== (l = a.id) && void 0 !== l ? l : null);
            }
        },
        H = D && w,
        z = !W && !L,
        Y = !x && !W && O && !D,
        K = !O && !L && x && !w,
        q = (null == d ? void 0 : d.overlayMethod) === _.gl.Disabled,
        X = (null == d ? void 0 : d.state) === _.mM.OVERLAY_RENDERING && !q,
        J = (null == d ? void 0 : d.state) != null && eg.has(d.state) && !q,
        Q = (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcess || (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcessLimitedInteraction,
        ee = (null == d ? void 0 : d.overlayMethod) === _.gl.Hook,
        et = (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED_DISABLED,
        en = !x && !O,
        [es, ea] = (() => {
            switch (!0) {
                case X && Q:
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
                                case w:
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
                    if (Q) return [er.NW.string(er.t['s8+CFh']), null];
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
        : (0, r.jsxs)(ep, {
              onExpand: R,
              className: I ? ei.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !== (s = null !== (n = null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : null == g ? void 0 : g.name) && void 0 !== n ? n : null == a ? void 0 : a.gameName) && void 0 !== s ? s : '',
                      null != g && g.verified
                          ? (0, r.jsx)(h.ua7, {
                                text: er.NW.string(er.t['4PJP5u']),
                                children: (e) =>
                                    (0, r.jsx)(
                                        A.Z,
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
                                color: J ? h.TVs.colors.TEXT_MUTED.css : Q ? h.TVs.colors.TEXT_POSITIVE.css : h.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, r.jsx)('div', { className: ei.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: er.NW.string(er.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, r.jsx)(y.Z, {
                  game: l,
                  pid: null == a ? void 0 : a.pid,
                  size: y.Z.Sizes.MEDIUM
              }),
              'aria-label': er.NW.string(er.t['87O5GB']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eh(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (x && L) || (O && W),
                      disabled: H,
                      onChange: (e, t) => {
                          U(e, M(e, (x && L) || (O && W)), t);
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
                                  checked: x && L,
                                  disabled: w,
                                  onChange: (e, t) => {
                                      e && !L ? B(e, P.AE.OOP, t) : B(e, P.AE.OOP_GAME, t);
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
                                  checked: O && W,
                                  disabled: D,
                                  onChange: (e, t) => {
                                      e && !W ? B(e, P.AE.LEGACY, t) : B(e, P.AE.LEGACY_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: ei.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function ex(e) {
    let { game: t, gameApplication: n } = e,
        s = i.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]),
        a = (0, p.e7)([O.Z], () => (null != n ? n : O.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(y.Z, {
        game: a,
        pid: s,
        size: y.Z.Sizes.SMALL
    });
}
function eb(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: a, onChange: l, clientSettingType: o, ariaLabel: c } = e,
        d = (0, p.cj)([T.ZP, G.Z, F.Z], () => (0, T.FZ)(t, [T.ZP, G.Z, F.Z])),
        u = (0, p.cj)([G.Z, F.Z], () => (0, T.b6)(t, !1, [G.Z, F.Z]), [t]),
        m = a(u),
        [g, f] = i.useState(m);
    i.useEffect(() => {
        f(m);
    }, [m]);
    let x = (e, n) => {
        let r = !e && g;
        if ((eh(n), f(e), l(e, d, u), r)) {
            var i, s;
            (0, k.l)(o, null !== (s = null !== (i = d.id) && void 0 !== i ? i : null == t ? void 0 : t.id) && void 0 !== s ? s : null);
        }
    };
    return (0, r.jsx)(em, {
        title: t.name,
        icon: (0, r.jsx)(ex, {
            game: d,
            gameApplication: n
        }),
        'aria-label': c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.rsf, {
                    checked: g,
                    disabled: s,
                    onChange: (e, t) => x(e, t)
                }),
                (0, r.jsx)('div', { className: ei.emptySpacer })
            ]
        })
    });
}
function eN() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, p.cj)([Z.default], () => Z.default.getGlobalEnabledStatus()),
        a = (0, p.Wu)([T.ZP], () => T.ZP.getGamesSeen(!0)),
        l = (0, v.Z)(a.map((e) => e.id)),
        o = (0, C.$1)(),
        c = (e, t) => {
            var r, i;
            eh(t), b.Z.setEnabled(e, s);
            let a = null !== (i = null === (r = T.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, P.ou)(e, P.AE.LEGACY, a), !e && n && (0, k.l)(P.AE.LEGACY, a);
        },
        d = (e, t, n) => {
            let { enabledOOP: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (en.iP ? (o ? er.NW.string(er.t.r9jEV1) : er.NW.string(er.t.OzInYm)) : er.NW.string(er.t['8Ox6/P'])), [o]);
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
                      en.iP && (0, r.jsx)('div', { className: ei.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(ep, {
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
                              eb,
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
        { oopEnabled: n, legacyEnabled: s } = (0, p.cj)([Z.default], () => Z.default.getGlobalEnabledStatus()),
        a = !(0, $.supportsOutOfProcess)(),
        l = (0, p.Wu)([T.ZP], () => T.ZP.getGamesSeen(!0)),
        o = (0, v.Z)(l.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            eh(t);
            let a = !e && n;
            b.Z.setEnabled(s, e);
            let l = null !== (i = null === (r = T.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, P.ou)(e, P.AE.OOP, l), a && (0, k.l)(P.AE.OOP, l);
        },
        d = (e, t, n) => {
            let { enabledLegacy: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (en.iP ? (a ? er.NW.string(er.t.C7bLTU) : er.NW.string(er.t.ndgADA)) : er.NW.string(er.t.m7X4a2)), [a]);
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
                      en.iP && (0, r.jsx)('div', { className: ei.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(ep, {
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
                              eb,
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
    let e = (0, p.e7)([z.ZP], () => z.ZP.getOverlayKeybind()),
        t = (0, C.$1)(),
        n = !(0, $.supportsOutOfProcess)(),
        [i, s] = (0, p.Wu)([T.ZP], () => [T.ZP.canShowAdminWarning, T.ZP.getVisibleGame()], []),
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
                            children: (0, r.jsx)(N.Z, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    d()(null != e, 'Keybind should never be undefined'), x.Z.setKeybind(eo(el({}, e), { shortcut: t }));
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
        voiceState: new U.Z({
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
        user: new M.Z({
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
    let [e, t] = (0, S.US)([g.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(et.L.DISMISS);
        };
    return ((0, j.ZP)(() => () => {
        t(et.L.AUTO_DISMISS);
    }),
    e !== g.z.OVERLAY_OOP_SETTINGS_NUX)
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
            disableClickableRegions: g,
            shouldShowKeybindIndicators: f
        } = (0, p.cj)([K.default], () => ({
            avatarSizeMode: K.default.getAvatarSizeMode(),
            displayNameMode: K.default.getDisplayNameMode(),
            displayUserMode: K.default.getDisplayUserMode(),
            notificationPositionMode: K.default.getNotificationPositionMode(),
            textChatNotificationMode: K.default.getTextChatNotificationMode(),
            disableClickableRegions: K.default.disableClickableRegions,
            shouldShowKeybindIndicators: K.default.showKeybindIndicators
        })),
        x = (0, R.o4)('user_settings').overlayV3UI,
        N = (0, p.e7)([H.default], () => H.default.getCurrentUser()),
        _ = (0, D.Z)({ location: 'overlay_user_settings' });
    (0, j.ZP)(() => {
        if (J.isPlatformEmbedded) return (0, I.Ky)(), I.P7;
    }),
        (function () {
            let e = ed(ec);
            m().isEqual(e, ec) || (q.default.track(ee.rMx.OVERLAY_SETTINGS_UPDATED, e), (ec = e));
        })();
    let [E] = i.useState(() => [ej(er.NW.string(er.t.C0ZDvr), !0, !1), ej(er.NW.string(er.t.iOtj8P), !1, !1, !0), ej(er.NW.string(er.t['0oqNgI']), !1, !0)]),
        C = (0, p.e7)([w.ZP], () => w.ZP.getWidgetByType(ee.Odu.VOICE_V3)),
        O = [
            null != N
                ? (function (e) {
                      let t = ej(e.username);
                      return (t.user = e), t;
                  })(N)
                : null,
            ...E
        ].filter(X.lm),
        v = [new Map(O.map((e) => [e.user.id, e])), O.map((e) => e.user.id)];
    return null == N
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: er.NW.string(er.t['9cb1U1']),
                      children: [
                          x ? (0, r.jsx)(eC, {}) : null,
                          (0, r.jsxs)('div', {
                              className: ei.overlayEnabledSettingsContainer,
                              children: [(0, r.jsx)(ef, {}), (0, r.jsx)(e_, {}), (0, r.jsx)(eN, {})]
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
                                              onChange: (e) => b.Z.setShowKeybindIndicators(e),
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
                                              value: d !== ee._vf.DISABLED && u === ee.Ypu.ENABLED,
                                              disabled: d === ee._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = ee.Ypu;
                                                  b.Z.setTextChatNotificationMode(u === e ? t : e);
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
                                              value: !g,
                                              onChange: function () {
                                                  b.Z.setDisableClickableRegions(!g);
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
                                              value: ee.ipw.LARGE
                                          },
                                          {
                                              label: er.NW.string(er.t.BKIKq6),
                                              value: ee.ipw.SMALL
                                          }
                                      ],
                                      className: ei.select,
                                      onChange: (e) => b.Z.setAvatarSizeMode(e),
                                      value: l
                                  })
                              }),
                              (0, r.jsx)(eu, {
                                  title: er.NW.string(er.t.J0dpcH),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: er.NW.string(er.t.nBmDra),
                                              value: ee.wC$.ALWAYS
                                          },
                                          {
                                              label: er.NW.string(er.t['2OvIZW']),
                                              value: ee.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: er.NW.string(er.t.ekjlPD),
                                              value: ee.wC$.NEVER
                                          }
                                      ],
                                      className: ei.select,
                                      onChange: (e) => b.Z.setDisplayNameMode(e),
                                      value: o
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: ei.widgetContainer,
                                  children:
                                      x &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: ei.voiceWidgetContainer,
                                                  children: (0, r.jsx)(W.k, {
                                                      id: 'voice-widget',
                                                      title: er.NW.string(er.t.KNJ6Vl),
                                                      channel: (0, B.kt)({
                                                          id: '123',
                                                          name: 'Test Channel',
                                                          type: ee.d4z.GUILD_VOICE,
                                                          guild_id: '456'
                                                      }),
                                                      overlayVoiceStates: v,
                                                      displayNameMode: o,
                                                      displayUserMode: c,
                                                      avatarSizeMode: l,
                                                      widget: ee.Odu.VOICE,
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
                                                      (0, r.jsx)(L.PI, { children: er.NW.string(er.t.KNJ6Vl) }),
                                                      (0, r.jsx)(L.ls, {}),
                                                      (0, r.jsx)(L.RT, {
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
                                              value: ee.OYC.ALWAYS
                                          },
                                          {
                                              label: er.NW.string(er.t['2OvIZW']),
                                              value: ee.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: ei.select,
                                      onChange: (e) => b.Z.setDisplayUserMode(e),
                                      value: c
                                  })
                              })
                          ]
                      })
                  })
              ]
          });
}
