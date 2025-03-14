n.d(t, { Z: () => eS }), n(266796), n(47120);
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
    w = n(829907),
    k = n(624864),
    W = n(610394),
    L = n(957148),
    B = n(243487),
    M = n(430561),
    U = n(131704),
    V = n(598077),
    G = n(189786),
    F = n(199902),
    H = n(77498),
    z = n(283595),
    Y = n(594174),
    K = n(556296),
    q = n(808506),
    X = n(237997),
    J = n(626135),
    Q = n(823379),
    $ = n(358085),
    ee = n(13140),
    et = n(145597),
    en = n(981631),
    er = n(921944),
    ei = n(987650),
    es = n(388032),
    ea = n(301883),
    el = n(131970),
    eo = n(730462);
function ec(e) {
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
function ed(e, t) {
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
let eu = em(null);
function em(e) {
    var t;
    let n = X.default.getNotificationPositionMode(),
        r = n !== en._vf.DISABLED,
        i = K.ZP.getOverlayKeybind(),
        s = K.ZP.getOverlayChatKeybind();
    return {
        enabled: q.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: X.default.getTextChatNotificationMode(),
        hotkey: null != i ? (0, ee.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, ee.BB)(s.shortcut) : null,
        text_opacity_slider: X.default.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : q.default.enabled
    };
}
function eg(e) {
    let { children: t, title: n } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: ea.formItemTitle,
                    children: n
                }),
            (0, r.jsx)('div', {
                className: ea.rowContainer,
                children: t
            })
        ]
    });
}
function ep(e) {
    let { header: t, icon: n, title: i, description: s, action: l, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, r.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: a()(ea.groupContainer, u),
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: ea.groupHeader,
                    children: t
                }),
            (0, r.jsxs)('div', {
                className: ea.groupContent,
                children: [
                    null != n &&
                        (0, r.jsx)('div', {
                            className: ea.groupIcon,
                            children: n
                        }),
                    (0, r.jsxs)('div', {
                        className: ea.groupMainContent,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: ea.groupTitle,
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
                        className: ea.groupAction,
                        children: l
                    })
                ]
            })
        ]
    });
}
function eh(e) {
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
        className: ea.collapseable,
        collapsibleContent: (0, r.jsx)('div', {
            className: ea.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                ep,
                ed(ec({}, l), {
                    onClick: (e) => {
                        d(!o), null == t || t(e);
                    },
                    className: a()(ea.mainCollapseableContainer, n),
                    action: (0, r.jsxs)('div', {
                        className: ea.groupCollapsedAction,
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
let ef = new Set([_.mM.INITIALIZING, _.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, _.mM.WAITING_FOR_MODULE_TRACKING, _.mM.WAITING_FOR_OVERLAY_OPEN]),
    ex = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eb(e) {
    var t, n, s;
    let { runningGame: a, runningGameApplication: l } = e,
        c = null == a ? void 0 : a.pid,
        d = (0, g.e7)([Z.default], () => (null == a || null == c ? null : Z.default.getTrackedGameByPid(c)), [a, c], o()),
        { enabledLegacy: u, enabledOOP: m } = (0, g.cj)(
            [H.Z, z.Z],
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
                return (0, T.b6)(a, !1, [H.Z, z.Z]);
            },
            [a, d]
        ),
        p = (0, g.e7)([T.ZP, H.Z, z.Z], () => (null == a ? null : (0, T.FZ)(a, [T.ZP, H.Z, z.Z])), [a], o()),
        [x, N] = i.useState(m),
        [O, v] = i.useState(u),
        [S, I] = i.useState(!1);
    i.useEffect(() => {
        N(m), v(u);
    }, [m, u]);
    let R = (0, C.$1)(),
        D = !(0, et.supportsOutOfProcess)(),
        { legacyEnabled: w, oopEnabled: k } = (0, g.cj)([Z.default], () => Z.default.getGlobalEnabledStatus()),
        W = (e, t, n) => {
            var r, i, s;
            if ((ex(n), null == a)) return;
            let l = !1,
                o = !1;
            switch (t) {
                case P.AE.LEGACY_GAME:
                    v(e), f.Z.toggleOverlay(a, e, x), (l = !e && O);
                    break;
                case P.AE.OOP_GAME:
                    N(e), f.Z.toggleOverlay(a, O, e), (o = !e && x);
                    break;
                case P.AE.LEGACY:
                    b.Z.setEnabled(e, k), (0, P.ou)(e, P.AE.LEGACY, null !== (r = a.id) && void 0 !== r ? r : null);
                    break;
                case P.AE.OOP:
                    b.Z.setEnabled(w, e), (0, P.ou)(e, P.AE.OOP, null !== (i = a.id) && void 0 !== i ? i : null);
            }
            (l || o) && (0, L.l)(l ? P.AE.LEGACY_GAME : P.AE.OOP_GAME, null !== (s = a.id) && void 0 !== s ? s : null);
        },
        B = (e, t) => {
            let n = !t && e,
                r = !k && x,
                i = !w && O,
                s = !x && k,
                a = !O && w;
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
            if ((ex(n), null == a)) return;
            let r = !1,
                i = !1;
            switch (t) {
                case 'game':
                    f.Z.toggleOverlay(a, e, e), v(e), N(e), (r = !e && O), (i = !e && x);
                    break;
                case 'global':
                    b.Z.setEnabled(e, e), (r = !e && w), (i = !e && k);
                    break;
                case 'both':
                    b.Z.setEnabled(e, e), f.Z.toggleOverlay(a, e, e), v(e), N(e), (r = (!e && w) || (!e && O)), (i = (!e && k) || (!e && x));
            }
            let s = null;
            if ((r ? (s = 'game' === t ? P.AE.LEGACY_GAME : P.AE.LEGACY) : i && (s = 'game' === t ? P.AE.OOP_GAME : P.AE.OOP), null != s)) {
                var l;
                (0, L.l)(s, null !== (l = a.id) && void 0 !== l ? l : null);
            }
        },
        U = R && D,
        V = !w && !k,
        G = !x && !w && O && !R,
        F = !O && !k && x && !D,
        Y = (null == d ? void 0 : d.overlayMethod) === _.gl.Disabled,
        K = (null == d ? void 0 : d.state) === _.mM.OVERLAY_RENDERING && !Y,
        q = (null == d ? void 0 : d.state) != null && ef.has(d.state) && !Y,
        X = (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcess,
        J = (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcessLimitedInteraction,
        Q = (null == d ? void 0 : d.overlayMethod) === _.gl.Hook,
        $ = (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED_DISABLED,
        ee = !x && !O,
        [en, er] = (() => {
            switch (!0) {
                case K && X:
                    return [
                        es.NW.format(es.t.hFVBIi, {
                            overlayMethod: es.NW.string(es.t.a3eXS0),
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
                        es.NW.format(es.t.hFVBIi, {
                            overlayMethod: es.NW.string(es.t['506AbW']),
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
                        es.NW.format(es.t.hFVBIi, {
                            overlayMethod: es.NW.string(es.t.bvlpDQ),
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
                                    return es.NW.string(es.t.mJmbeH);
                                case D:
                                    return es.NW.string(es.t.C7bLTU);
                                case !(null !== (e = null == d ? void 0 : d.oopEnabled) && void 0 !== e && e):
                                    return es.NW.string(es.t.WiY24u);
                                case !k:
                                    return es.NW.string(es.t.cAFVsL);
                                case !(null !== (t = null == d ? void 0 : d.supportsOutOfProcess) && void 0 !== t && t):
                                    return es.NW.string(es.t.XcGEcn);
                                default:
                                    return es.NW.string(es.t.bJXH2t);
                            }
                        })()
                    ];
                case $:
                    return [es.NW.string(es.t.OFC2a2), null];
                case U:
                    return [es.NW.string(es.t.m7X4a2), null];
                case V:
                    return [es.NW.string(es.t['9DUS5u']), null];
                case ee:
                    return [es.NW.string(es.t.nQ9EdH), null];
                case G:
                case F:
                    return [es.NW.string(es.t.VWUn0d), null];
                case q:
                    if (X) return [es.NW.string(es.t['s8+CFh']), null];
                    if (Q) return [es.NW.string(es.t.JEEdqq), null];
                    if (J) return [es.NW.string(es.t.pzBMwc), null];
                    return [es.NW.string(es.t['2Xhy9v']), null];
                case null == d:
                    return [es.NW.string(es.t.vwHPRk), null];
                default:
                    return [es.NW.string(es.t.ONovPz), null];
            }
        })();
    (0, j.ZP)(() => {
        f.Z.getDetectableGames();
    });
    let [ei, el] = i.useMemo(() => (q ? ['text-muted', h.TVs.colors.TEXT_MUTED.css] : K && J ? ['text-warning', h.TVs.colors.TEXT_WARNING.css] : K && X ? ['text-positive', h.TVs.colors.TEXT_POSITIVE.css] : K && Q ? ['text-primary', h.TVs.colors.TEXT_PRIMARY.css] : ['interactive-normal', h.TVs.colors.INTERACTIVE_NORMAL.css]), [q, K, J, X, Q]);
    return null == a
        ? null
        : (0, r.jsxs)(eh, {
              onExpand: I,
              className: S ? ea.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !== (s = null !== (n = null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : null == p ? void 0 : p.name) && void 0 !== n ? n : null == a ? void 0 : a.gameName) && void 0 !== s ? s : '',
                      null != p && p.verified
                          ? (0, r.jsx)(h.ua7, {
                                text: es.NW.string(es.t['4PJP5u']),
                                children: (e) =>
                                    (0, r.jsx)(
                                        A.Z,
                                        ed(
                                            ec(
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
              description: en,
              hint: null != er ? er : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      K || q
                          ? (0, r.jsx)(h.pzj, {
                                size: 'xxs',
                                color: el
                            })
                          : (0, r.jsx)('div', { className: ea.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: ei,
                          children: es.NW.string(es.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, r.jsx)(y.Z, {
                  game: l,
                  pid: null == a ? void 0 : a.pid,
                  size: y.Z.Sizes.MEDIUM
              }),
              'aria-label': es.NW.string(es.t['87O5GB']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ex(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (x && k) || (O && w),
                      disabled: U,
                      onChange: (e, t) => {
                          M(e, B(e, (x && k) || (O && w)), t);
                      }
                  })
              }),
              children: [
                  (0, r.jsx)(ep, {
                      title: es.NW.string(es.t['7BlVIi']),
                      description: es.NW.string(es.t.ndgADA),
                      hint: k ? void 0 : es.NW.string(es.t.cAFVsL),
                      'aria-label': es.NW.string(es.t['7BlVIi']),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: x && k,
                                  disabled: D,
                                  onChange: (e, t) => {
                                      e && !k ? W(e, P.AE.OOP, t) : W(e, P.AE.OOP_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: ea.emptySpacer })
                          ]
                      })
                  }),
                  (0, r.jsx)(ep, {
                      title: es.NW.string(es.t.BfFpW1),
                      description: es.NW.string(es.t.OzInYm),
                      hint: w ? void 0 : es.NW.string(es.t['3sYHXl']),
                      'aria-label': es.NW.string(es.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: O && w,
                                  disabled: R,
                                  onChange: (e, t) => {
                                      e && !w ? W(e, P.AE.LEGACY, t) : W(e, P.AE.LEGACY_GAME, t);
                                  }
                              }),
                              (0, r.jsx)('div', { className: ea.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function eN(e) {
    let { game: t, gameApplication: n } = e,
        s = i.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]),
        a = (0, g.e7)([O.Z], () => (null != n ? n : O.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(y.Z, {
        game: a,
        pid: s,
        size: y.Z.Sizes.SMALL
    });
}
function e_(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: a, onChange: l, clientSettingType: o, ariaLabel: c } = e,
        d = (0, g.cj)([T.ZP, H.Z, z.Z], () => (0, T.FZ)(t, [T.ZP, H.Z, z.Z])),
        u = (0, g.cj)([H.Z, z.Z], () => (0, T.b6)(t, !1, [H.Z, z.Z]), [t]),
        m = a(u),
        [p, f] = i.useState(m);
    i.useEffect(() => {
        f(m);
    }, [m]);
    let x = (e, n) => {
        let r = !e && p;
        if ((ex(n), f(e), l(e, d, u), r)) {
            var i, s;
            (0, L.l)(o, null !== (s = null !== (i = d.id) && void 0 !== i ? i : null == t ? void 0 : t.id) && void 0 !== s ? s : null);
        }
    };
    return (0, r.jsx)(ep, {
        title: t.name,
        icon: (0, r.jsx)(eN, {
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
                (0, r.jsx)('div', { className: ea.emptySpacer })
            ]
        })
    });
}
function eE() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, g.cj)([Z.default], () => Z.default.getGlobalEnabledStatus()),
        a = (0, g.Wu)([T.ZP], () => T.ZP.getGamesSeen(!0)),
        l = (0, v.Z)(a.map((e) => e.id)),
        o = (0, C.$1)(),
        c = (e, t) => {
            var r, i;
            ex(t), b.Z.setEnabled(e, s);
            let a = null !== (i = null === (r = T.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, P.ou)(e, P.AE.LEGACY, a), !e && n && (0, L.l)(P.AE.LEGACY, a);
        },
        d = (e, t, n) => {
            let { enabledOOP: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (ei.iP ? (o ? es.NW.string(es.t.r9jEV1) : es.NW.string(es.t.OzInYm)) : es.NW.string(es.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, r.jsx)(ep, {
              title: es.NW.string(es.t.BfFpW1),
              description: u,
              'aria-label': es.NW.string(es.t.BfFpW1),
              className: ea.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      ei.iP && (0, r.jsx)('div', { className: ea.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(eh, {
              onExpand: t,
              className: e ? ea.expandedContainer : void 0,
              title: es.NW.string(es.t.BfFpW1),
              description: u,
              'aria-label': es.NW.string(es.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ex(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: ea.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: es.NW.string(es.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ea.scroller,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              e_,
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
                                  ariaLabel: es.NW.format(es.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ej() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, g.cj)([Z.default], () => Z.default.getGlobalEnabledStatus()),
        a = !(0, et.supportsOutOfProcess)(),
        l = (0, g.Wu)([T.ZP], () => T.ZP.getGamesSeen(!0)),
        o = (0, v.Z)(l.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            ex(t);
            let a = !e && n;
            b.Z.setEnabled(s, e);
            let l = null !== (i = null === (r = T.ZP.getCurrentGameForAnalytics()) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : null;
            (0, P.ou)(e, P.AE.OOP, l), a && (0, L.l)(P.AE.OOP, l);
        },
        d = (e, t, n) => {
            let { enabledLegacy: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => (ei.iP ? (a ? es.NW.string(es.t.C7bLTU) : es.NW.string(es.t.ndgADA)) : es.NW.string(es.t.m7X4a2)), [a]);
    return 0 === l.length
        ? (0, r.jsx)(ep, {
              title: es.NW.string(es.t['7BlVIi']),
              description: u,
              'aria-label': es.NW.string(es.t['7BlVIi']),
              className: ea.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      ei.iP && (0, r.jsx)('div', { className: ea.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(eh, {
              onExpand: t,
              className: e ? ea.expandedContainer : void 0,
              title: es.NW.string(es.t['7BlVIi']),
              description: u,
              'aria-label': es.NW.string(es.t['7BlVIi']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ex(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: ea.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: es.NW.string(es.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ea.scroller,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              e_,
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
                                  ariaLabel: es.NW.format(es.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eC() {
    let e = (0, g.e7)([K.ZP], () => K.ZP.getOverlayKeybind()),
        t = (0, C.$1)(),
        n = !(0, et.supportsOutOfProcess)(),
        [i, s] = (0, g.Wu)([T.ZP], () => [T.ZP.canShowAdminWarning, T.ZP.getVisibleGame()], []),
        a = null != s && s.elevated && i;
    return (0, r.jsx)(eg, {
        children: (0, r.jsxs)('div', {
            className: ea.keybindMainContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: ea.keybindContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: ea.keybindHeaderContainer,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: es.NW.string(es.t.VsAZcH)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: ea.keybindRecorderContainer,
                            children: (0, r.jsx)(N.Z, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    d()(null != e, 'Keybind should never be undefined'), x.Z.setKeybind(ed(ec({}, e), { shortcut: t }));
                                }
                            })
                        })
                    ]
                }),
                a &&
                    (0, r.jsx)(h.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-warning',
                        className: ea.keybindAdminWarning,
                        children: es.NW.string(es.t.NsowVV)
                    })
            ]
        })
    });
}
function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new G.Z({
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
        user: new V.Z({
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
function ev() {
    let [e, t] = (0, S.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(er.L.DISMISS);
        };
    return ((0, j.ZP)(() => () => {
        t(er.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)('div', {
              className: ea.overlaySettingsNux,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: el.Z,
                          alt: es.NW.string(es.t.mdXZh4),
                          className: ea.nuxFirstImage
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: ea.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: es.NW.string(es.t.jzjJQk)
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: es.NW.string(es.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: eo.Z,
                          alt: es.NW.string(es.t.mdXZh4),
                          className: ea.nuxUserSettingsImage
                      })
                  }),
                  (0, r.jsx)(h.zxk, {
                      className: ea.closeCircleButton,
                      onClick: () => n(),
                      children: es.NW.string(es.t.Q26diI)
                  }),
                  (0, r.jsx)('div', { className: ea.nuxDivider })
              ]
          });
}
function eS(e) {
    var t, n;
    let { className: s, showHeader: a } = e,
        {
            avatarSizeMode: l,
            displayNameMode: c,
            displayUserMode: d,
            notificationPositionMode: u,
            textChatNotificationMode: p,
            disableClickableRegions: f,
            shouldShowKeybindIndicators: x
        } = (0, g.cj)([X.default], () => ({
            avatarSizeMode: X.default.getAvatarSizeMode(),
            displayNameMode: X.default.getDisplayNameMode(),
            displayUserMode: X.default.getDisplayUserMode(),
            notificationPositionMode: X.default.getNotificationPositionMode(),
            textChatNotificationMode: X.default.getTextChatNotificationMode(),
            disableClickableRegions: X.default.disableClickableRegions,
            shouldShowKeybindIndicators: X.default.showKeybindIndicators
        })),
        { runningGame: N, runningGameApplication: _ } = (function () {
            let e = (0, g.e7)([F.Z], () => F.Z.getStreamerActiveStreamMetadata()),
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
        E = null == _ ? void 0 : _.id,
        C = (0, g.e7)([k.Z], () => k.Z.isLimitedInteractionOverrideEnabled(E), [E]),
        O = i.useMemo(() => null != N && (0, w.H8)(N.pid), [N]),
        S = (0, R.o4)('user_settings').overlayV3UI,
        y = (0, g.e7)([Y.default], () => Y.default.getCurrentUser()),
        A = (0, D.Z)({ location: 'overlay_user_settings' });
    (0, j.ZP)(() => {
        if ($.isPlatformEmbedded) return (0, I.Ky)(), I.P7;
    }),
        (function () {
            let e = em(eu);
            m().isEqual(e, eu) || (J.default.track(en.rMx.OVERLAY_SETTINGS_UPDATED, e), (eu = e));
        })();
    let [P] = i.useState(() => [eO(es.NW.string(es.t.C0ZDvr), !0, !1), eO(es.NW.string(es.t.iOtj8P), !1, !1, !0), eO(es.NW.string(es.t['0oqNgI']), !1, !0)]),
        Z = (0, g.e7)([W.ZP], () => W.ZP.getWidgetByType(en.Odu.VOICE_V3)),
        L = [
            null != y
                ? (function (e) {
                      let t = eO(e.username);
                      return (t.user = e), t;
                  })(y)
                : null,
            ...P
        ].filter(Q.lm),
        V = [new Map(L.map((e) => [e.user.id, e])), L.map((e) => e.user.id)];
    return null == y
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: es.NW.string(es.t['9cb1U1']),
                      children: [
                          S ? (0, r.jsx)(ev, {}) : null,
                          (0, r.jsxs)('div', {
                              className: ea.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eb, {
                                      runningGame: N,
                                      runningGameApplication: _
                                  }),
                                  (0, r.jsx)(ej, {}),
                                  (0, r.jsx)(eE, {})
                              ]
                          }),
                          (0, r.jsx)('div', { className: ea.settingsDivider })
                      ]
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: ea.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eC, {}),
                                  A &&
                                      (0, r.jsx)(eg, {
                                          children: (0, r.jsx)(h.j7V, {
                                              value: x,
                                              onChange: (e) => b.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: es.NW.string(es.t.XZTl9v)
                                          })
                                      }),
                                  null != E &&
                                      (0, r.jsxs)(eg, {
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: ea.limitedInteractionOverrideContainer,
                                                  children: [
                                                      (0, r.jsx)(h.Text, {
                                                          variant: 'text-md/semibold',
                                                          color: 'header-primary',
                                                          children: es.NW.string(es.t.wgVQND)
                                                      }),
                                                      (0, r.jsx)(h.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: es.NW.string(es.t['5SsyFx'])
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(h.j7V, {
                                                  value: C || O,
                                                  disabled: O,
                                                  onChange: (e) => {
                                                      var t;
                                                      return (t = e), void (null != _ && b.Z.setLimitedInteractionOverride(_.id, t));
                                                  },
                                                  hideBorder: !0
                                              })
                                          ]
                                      }),
                                  (0, r.jsxs)(eg, {
                                      children: [
                                          (0, r.jsx)(h.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: es.NW.string(es.t.Fy5kPj)
                                          }),
                                          (0, r.jsx)(h.j7V, {
                                              value: u !== en._vf.DISABLED && p === en.Ypu.ENABLED,
                                              disabled: u === en._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = en.Ypu;
                                                  b.Z.setTextChatNotificationMode(p === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)(eg, {
                                      children: [
                                          (0, r.jsx)(h.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: es.NW.string(es.t['+eFXxs'])
                                          }),
                                          (0, r.jsx)(h.j7V, {
                                              value: !f,
                                              onChange: function () {
                                                  b.Z.setDisableClickableRegions(!f);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', { className: ea.settingsDivider })
                      ]
                  }),
                  (0, r.jsx)(h.hjN, {
                      title: 'Voice Widget',
                      children: (0, r.jsxs)('div', {
                          className: ea.voiceSettingsContainer,
                          children: [
                              (0, r.jsx)(eg, {
                                  title: es.NW.string(es.t.dnvZSk),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: es.NW.string(es.t.YcOxtr),
                                              value: en.ipw.LARGE
                                          },
                                          {
                                              label: es.NW.string(es.t.BKIKq6),
                                              value: en.ipw.SMALL
                                          }
                                      ],
                                      className: ea.select,
                                      onChange: (e) => b.Z.setAvatarSizeMode(e),
                                      value: l
                                  })
                              }),
                              (0, r.jsx)(eg, {
                                  title: es.NW.string(es.t.J0dpcH),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: es.NW.string(es.t.nBmDra),
                                              value: en.wC$.ALWAYS
                                          },
                                          {
                                              label: es.NW.string(es.t['2OvIZW']),
                                              value: en.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: es.NW.string(es.t.ekjlPD),
                                              value: en.wC$.NEVER
                                          }
                                      ],
                                      className: ea.select,
                                      onChange: (e) => b.Z.setDisplayNameMode(e),
                                      value: c
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: ea.widgetContainer,
                                  children:
                                      S &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: ea.voiceWidgetContainer,
                                                  children: (0, r.jsx)(B.k, {
                                                      id: 'voice-widget',
                                                      title: es.NW.string(es.t.KNJ6Vl),
                                                      channel: (0, U.kt)({
                                                          id: '123',
                                                          name: 'Test Channel',
                                                          type: en.d4z.GUILD_VOICE,
                                                          guild_id: '456'
                                                      }),
                                                      overlayVoiceStates: V,
                                                      displayNameMode: c,
                                                      displayUserMode: d,
                                                      avatarSizeMode: l,
                                                      widget: en.Odu.VOICE,
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
                                                  className: ea.widgetHeaderContainer,
                                                  children: [
                                                      (0, r.jsx)(M.PI, { children: es.NW.string(es.t.KNJ6Vl) }),
                                                      (0, r.jsx)(M.ls, {}),
                                                      (0, r.jsx)(M.RT, {
                                                          id: null !== (t = null == Z ? void 0 : Z.id) && void 0 !== t ? t : 'voice-widget',
                                                          pinned: null !== (n = null == Z ? void 0 : Z.pinned) && void 0 !== n && n
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                              }),
                              (0, r.jsx)(eg, {
                                  title: es.NW.string(es.t.swsWWF),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: es.NW.string(es.t.nBmDra),
                                              value: en.OYC.ALWAYS
                                          },
                                          {
                                              label: es.NW.string(es.t['2OvIZW']),
                                              value: en.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: ea.select,
                                      onChange: (e) => b.Z.setDisplayUserMode(e),
                                      value: d
                                  })
                              })
                          ]
                      })
                  })
              ]
          });
}
