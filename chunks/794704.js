n.d(t, { Z: () => ej }), n(266796), n(47120);
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
    Z = n(243487),
    w = n(430561),
    k = n(131704),
    W = n(598077),
    L = n(189786),
    B = n(199902),
    M = n(77498),
    U = n(355863),
    V = n(283595),
    G = n(594174),
    F = n(556296),
    H = n(808506),
    z = n(237997),
    Y = n(626135),
    K = n(358085),
    q = n(13140),
    X = n(145597),
    J = n(981631),
    Q = n(921944),
    $ = n(987650),
    ee = n(501787),
    et = n(388032),
    en = n(747401),
    er = n(131970),
    ei = n(730462);
function es(e) {
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
function ea(e, t) {
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
let el = eo(null);
function eo(e) {
    var t;
    let n = z.Z.getNotificationPositionMode(),
        r = n !== J._vf.DISABLED,
        i = F.ZP.getOverlayKeybind(),
        s = F.ZP.getOverlayChatKeybind();
    return {
        enabled: H.Z.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: z.Z.getTextChatNotificationMode(),
        hotkey: null != i ? (0, q.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, q.BB)(s.shortcut) : null,
        text_opacity_slider: z.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : H.Z.enabled
    };
}
function ec(e) {
    let { children: t, title: n } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: en.formItemTitle,
                    children: n
                }),
            (0, r.jsx)('div', {
                className: en.rowContainer,
                children: t
            })
        ]
    });
}
function ed(e) {
    let { header: t, icon: n, title: i, description: s, action: l, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, r.jsxs)(h.kL8, {
        'aria-label': d,
        onClick: c,
        className: a()(en.groupContainer, u),
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: en.groupHeader,
                    children: t
                }),
            (0, r.jsxs)('div', {
                className: en.groupContent,
                children: [
                    null != n &&
                        (0, r.jsx)('div', {
                            className: en.groupIcon,
                            children: n
                        }),
                    (0, r.jsxs)('div', {
                        className: en.groupMainContent,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: en.groupTitle,
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
                        className: en.groupAction,
                        children: l
                    })
                ]
            })
        ]
    });
}
function eu(e) {
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
        className: a()(en.collapseable),
        collapsibleContent: (0, r.jsx)('div', {
            className: en.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                ed,
                ea(es({}, l), {
                    onClick: (e) => {
                        d(!o), null == t || t(e);
                    },
                    className: a()(en.mainCollapseableContainer, n),
                    action: (0, r.jsxs)('div', {
                        className: en.groupCollapsedAction,
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
let em = new Set([_.mM.INITIALIZING, _.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, _.mM.WAITING_FOR_MODULE_TRACKING, _.mM.WAITING_FOR_OVERLAY_OPEN]),
    eg = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ep(e) {
    var t, n, s;
    let { runningGame: a, runningGameApplication: l } = (function () {
            let e = (0, g.e7)([B.Z], () => B.Z.getStreamerActiveStreamMetadata()),
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
            [M.Z, V.Z],
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
                return (0, S.b6)(a, !1, [M.Z, V.Z]);
            },
            [a, d]
        ),
        p = (0, g.e7)([S.ZP, M.Z, V.Z], () => (null == a ? null : (0, S.FZ)(a, [S.ZP, M.Z, V.Z])), [a], o()),
        [b, N] = i.useState(m),
        [x, v] = i.useState(u),
        [T, A] = i.useState(!1);
    i.useEffect(() => {
        N(m), v(u);
    }, [m, u]);
    let P = (0, C.$1)(),
        R = !(0, X.VS)(),
        { legacyEnabled: Z, oopEnabled: w } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        k = (e, t, n) => {
            eg(n), null != a && (f.Z.toggleOverlay(a, e, t), N(t), v(e));
        },
        W = P && R,
        L = !Z && !w,
        U = !b && !Z && x && !P,
        G = !x && !w && b && !R,
        F = (null == d ? void 0 : d.overlayMethod) === _.gl.Disabled,
        H = (null == d ? void 0 : d.state) === _.mM.OVERLAY_RENDERING && !F,
        z = (null == d ? void 0 : d.state) != null && em.has(d.state) && !F,
        Y = (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcess || (null == d ? void 0 : d.overlayMethod) === _.gl.OutOfProcessLimitedInteraction,
        K = (null == d ? void 0 : d.overlayMethod) === _.gl.Hook,
        q = (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED || (null == d ? void 0 : d.state) === _.mM.OVERLAY_CRASHED_DISABLED,
        J = !b && !x,
        [Q, $] = (() => {
            switch (!0) {
                case H && Y:
                    return [
                        et.NW.format(et.t.hFVBIi, {
                            overlayMethod: et.NW.string(et.t.a3eXS0),
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
                case H && K:
                    return [
                        et.NW.format(et.t.hFVBIi, {
                            overlayMethod: et.NW.string(et.t.bvlpDQ),
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
                                    return et.NW.string(et.t.mJmbeH);
                                case R:
                                    return et.NW.string(et.t.C7bLTU);
                                case !(null !== (e = null == d ? void 0 : d.oopEnabled) && void 0 !== e && e):
                                    return et.NW.string(et.t.WiY24u);
                                case !w:
                                    return et.NW.string(et.t.cAFVsL);
                                case !(null !== (t = null == d ? void 0 : d.supportsOutOfProcess) && void 0 !== t && t):
                                    return et.NW.string(et.t.XcGEcn);
                                default:
                                    return et.NW.string(et.t.bJXH2t);
                            }
                        })()
                    ];
                case q:
                    return [et.NW.string(et.t.OFC2a2), null];
                case W:
                    return [et.NW.string(et.t.m7X4a2), null];
                case L:
                    return [et.NW.string(et.t['9DUS5u']), null];
                case J:
                    return [et.NW.string(et.t.nQ9EdH), null];
                case U:
                case G:
                    return [et.NW.string(et.t.VWUn0d), null];
                case z:
                    if (Y) return [et.NW.string(et.t['s8+CFh']), null];
                    if (K) return [et.NW.string(et.t.JEEdqq), null];
                    return [et.NW.string(et.t['2Xhy9v']), null];
                case null == d:
                    return [et.NW.string(et.t.vwHPRk), null];
                default:
                    return [et.NW.string(et.t.ONovPz), null];
            }
        })();
    return ((0, j.ZP)(() => {
        f.Z.getDetectableGames();
    }),
    null == a)
        ? null
        : (0, r.jsxs)(eu, {
              onExpand: A,
              className: T ? en.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !== (s = null !== (n = null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : null == p ? void 0 : p.name) && void 0 !== n ? n : null == a ? void 0 : a.gameName) && void 0 !== s ? s : '',
                      null != p && p.verified
                          ? (0, r.jsx)(h.ua7, {
                                text: et.NW.string(et.t['4PJP5u']),
                                children: (e) =>
                                    (0, r.jsx)(
                                        y.Z,
                                        ea(
                                            es(
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
              description: Q,
              hint: null != $ ? $ : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      H || z
                          ? (0, r.jsx)(h.pzj, {
                                size: 'xxs',
                                color: z ? h.TVs.colors.TEXT_MUTED.css : Y ? h.TVs.colors.TEXT_POSITIVE.css : h.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, r.jsx)('div', { className: en.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: et.NW.string(et.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, r.jsx)(I.Z, {
                  game: l,
                  pid: null == a ? void 0 : a.pid,
                  size: I.Z.Sizes.MEDIUM
              }),
              'aria-label': et.NW.string(et.t['87O5GB']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eg(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: b || x,
                      disabled: W || L || U || G,
                      onChange: (e, t) => k(e, e, t)
                  })
              }),
              children: [
                  (0, r.jsx)(ed, {
                      title: et.NW.string(et.t['7BlVIi']),
                      description: et.NW.string(et.t.ndgADA),
                      hint: w ? void 0 : et.NW.string(et.t.cAFVsL),
                      'aria-label': et.NW.string(et.t['7BlVIi']),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: b,
                                  disabled: R || !w,
                                  onChange: (e, t) => k(x, e, t)
                              }),
                              (0, r.jsx)('div', { className: en.emptySpacer })
                          ]
                      })
                  }),
                  (0, r.jsx)(ed, {
                      title: et.NW.string(et.t.BfFpW1),
                      description: et.NW.string(et.t.OzInYm),
                      hint: Z ? void 0 : et.NW.string(et.t['3sYHXl']),
                      'aria-label': et.NW.string(et.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: x,
                                  disabled: P || !Z,
                                  onChange: (e, t) => k(e, b, t)
                              }),
                              (0, r.jsx)('div', { className: en.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function eh(e) {
    let { game: t, gameApplication: n } = e,
        s = i.useMemo(() => (null == t ? null : 'pid' in t ? t.pid : null), [t]);
    return (0, r.jsx)(I.Z, {
        game: n,
        pid: s,
        size: I.Z.Sizes.SMALL
    });
}
function ef(e) {
    let { rawGame: t, gameApplication: n, supportDisabled: s, getEnabledFromStatus: a, onChange: l, ariaLabel: o } = e,
        c = (0, g.cj)([S.ZP, M.Z, V.Z], () => (0, S.FZ)(t, [S.ZP, M.Z, V.Z])),
        d = (0, g.cj)([M.Z, V.Z], () => (0, S.b6)(t, !1, [M.Z, V.Z]), [t]),
        u = a(d),
        [m, p] = i.useState(u);
    i.useEffect(() => {
        p(u);
    }, [u]);
    let f = (e, t) => {
        eg(t), p(e), l(e, c, d);
    };
    return (0, r.jsx)(ed, {
        title: t.name,
        icon: (0, r.jsx)(eh, {
            game: c,
            gameApplication: n
        }),
        'aria-label': o,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.rsf, {
                    checked: m,
                    disabled: s,
                    onChange: (e, t) => f(e, t)
                }),
                (0, r.jsx)('div', { className: en.emptySpacer })
            ]
        })
    });
}
function eb() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = (0, g.Wu)([S.ZP], () => S.ZP.getGamesSeen(!0)),
        l = (0, O.Z)(a.map((e) => e.id)),
        o = (0, C.$1)(),
        c = (e, t) => {
            var n, r;
            eg(t), N.Z.setEnabled(e, s), (0, A.ou)(e, A.AE.LEGACY, null !== (r = null === (n = S.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null);
        },
        d = (e, t, n) => {
            let { enabledOOP: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => ($.iP ? (o ? et.NW.string(et.t.r9jEV1) : et.NW.string(et.t.OzInYm)) : et.NW.string(et.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, r.jsx)(ed, {
              title: et.NW.string(et.t.BfFpW1),
              description: u,
              'aria-label': et.NW.string(et.t.BfFpW1),
              className: en.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      $.iP && (0, r.jsx)('div', { className: en.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(eu, {
              onExpand: t,
              className: e ? en.expandedContainer : void 0,
              title: et.NW.string(et.t.BfFpW1),
              description: u,
              'aria-label': et.NW.string(et.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eg(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: en.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: et.NW.string(et.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: en.scroller,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              ef,
                              {
                                  rawGame: e,
                                  supportDisabled: o,
                                  gameApplication: l[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: et.NW.format(et.t.hvPYsL, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eN() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, g.cj)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = !(0, X.VS)(),
        l = (0, g.Wu)([S.ZP], () => S.ZP.getGamesSeen(!0)),
        o = (0, O.Z)(l.map((e) => e.id)),
        c = (e, t) => {
            var n, r;
            eg(t), N.Z.setEnabled(s, e), (0, A.ou)(e, A.AE.OOP, null !== (r = null === (n = S.ZP.getCurrentGameForAnalytics()) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null);
        },
        d = (e, t, n) => {
            let { enabledLegacy: r } = n;
            f.Z.toggleOverlay(t, e, r);
        },
        u = i.useMemo(() => ($.iP ? (a ? et.NW.string(et.t.C7bLTU) : et.NW.string(et.t.ndgADA)) : et.NW.string(et.t.m7X4a2)), [a]);
    return 0 === l.length
        ? (0, r.jsx)(ed, {
              title: et.NW.string(et.t['7BlVIi']),
              description: u,
              'aria-label': et.NW.string(et.t['7BlVIi']),
              className: en.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      $.iP && (0, r.jsx)('div', { className: en.emptySpacer })
                  ]
              })
          })
        : (0, r.jsxs)(eu, {
              onExpand: t,
              className: e ? en.expandedContainer : void 0,
              title: et.NW.string(et.t['7BlVIi']),
              description: u,
              'aria-label': et.NW.string(et.t['7BlVIi']),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eg(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, r.jsx)('div', {
                      className: en.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: et.NW.string(et.t.FzoWRk)
                      })
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: en.scroller,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              ef,
                              {
                                  rawGame: e,
                                  gameApplication: o[t],
                                  supportDisabled: a,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: et.NW.format(et.t.nByTd3, { gameName: e.name }).toString()
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function ex() {
    let e = (0, g.e7)([F.ZP], () => F.ZP.getOverlayKeybind()),
        t = (0, C.$1)(),
        n = !(0, X.VS)(),
        [i, s] = (0, g.Wu)([S.ZP], () => [S.ZP.canShowAdminWarning, S.ZP.getVisibleGame()], []),
        a = null != s && s.elevated && i;
    return (0, r.jsx)(ec, {
        children: (0, r.jsxs)('div', {
            className: en.keybindMainContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: en.keybindContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: en.keybindHeaderContainer,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: et.NW.string(et.t.VsAZcH)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: en.keybindRecorderContainer,
                            children: (0, r.jsx)(x.Z, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    d()(null != e, 'Keybind should never be undefined'), b.Z.setKeybind(ea(es({}, e), { shortcut: t }));
                                }
                            })
                        })
                    ]
                }),
                a &&
                    (0, r.jsx)(h.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-warning',
                        className: en.keybindAdminWarning,
                        children: et.NW.string(et.t.NsowVV)
                    })
            ]
        })
    });
}
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new L.Z({
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
        user: new W.Z({
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
function eE() {
    let [e, t] = (0, v.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(Q.L.DISMISS);
        };
    return ((0, j.ZP)(() => () => {
        t(Q.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)('div', {
              className: en.overlaySettingsNux,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: er.Z,
                          alt: et.NW.string(et.t.mdXZh4),
                          className: en.nuxFirstImage
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: en.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: et.NW.string(et.t.jzjJQk)
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: et.NW.string(et.t['5dOfxc'])
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('img', {
                          src: ei.Z,
                          alt: et.NW.string(et.t.mdXZh4),
                          className: en.nuxUserSettingsImage
                      })
                  }),
                  (0, r.jsx)(h.zxk, {
                      className: en.closeCircleButton,
                      onClick: () => n(),
                      children: et.NW.string(et.t.Q26diI)
                  }),
                  (0, r.jsx)('div', { className: en.nuxDivider })
              ]
          });
}
function ej(e) {
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
        } = (0, g.cj)([z.Z], () => ({
            avatarSizeMode: z.Z.getAvatarSizeMode(),
            displayNameMode: z.Z.getDisplayNameMode(),
            displayUserMode: z.Z.getDisplayUserMode(),
            notificationPositionMode: z.Z.getNotificationPositionMode(),
            textChatNotificationMode: z.Z.getTextChatNotificationMode(),
            disableClickableRegions: z.Z.disableClickableRegions,
            shouldShowKeybindIndicators: z.Z.showKeybindIndicators
        })),
        b = (0, P.o4)('user_settings').overlayV3UI,
        x = (0, g.e7)([G.default], () => G.default.getCurrentUser()),
        _ = (0, R.Z)({ location: 'overlay_user_settings' });
    (0, j.ZP)(() => {
        if (K.isPlatformEmbedded) return (0, T.Ky)(), T.P7;
    }),
        (function () {
            let e = eo(el);
            m().isEqual(e, el) || (Y.default.track(J.rMx.OVERLAY_SETTINGS_UPDATED, e), (el = e));
        })();
    let [E] = i.useState(() => [e_(et.NW.string(et.t.C0ZDvr), !0, !1), e_(et.NW.string(et.t.iOtj8P), !1, !1, !0), e_(et.NW.string(et.t['0oqNgI']), !1, !0)]),
        C = (0, g.e7)([U.Z], () => U.Z.getWidgetsForLayout(ee.OVERLAY_V3_LAYOUT_ID).find((e) => e.type === J.Odu.VOICE_V3));
    return null == x
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: et.NW.string(et.t['9cb1U1']),
                      children: [
                          b ? (0, r.jsx)(eE, {}) : null,
                          (0, r.jsxs)('div', {
                              className: en.overlayEnabledSettingsContainer,
                              children: [(0, r.jsx)(ep, {}), (0, r.jsx)(eN, {}), (0, r.jsx)(eb, {})]
                          }),
                          (0, r.jsx)('div', { className: en.settingsDivider })
                      ]
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: en.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(ex, {}),
                                  _ &&
                                      (0, r.jsx)(ec, {
                                          children: (0, r.jsx)(h.j7V, {
                                              value: f,
                                              onChange: (e) => N.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: et.NW.string(et.t.XZTl9v)
                                          })
                                      }),
                                  (0, r.jsxs)(ec, {
                                      children: [
                                          (0, r.jsx)(h.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: et.NW.string(et.t.Fy5kPj)
                                          }),
                                          (0, r.jsx)(h.j7V, {
                                              value: d !== J._vf.DISABLED && u === J.Ypu.ENABLED,
                                              disabled: d === J._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = J.Ypu;
                                                  N.Z.setTextChatNotificationMode(u === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)(ec, {
                                      children: [
                                          (0, r.jsx)(h.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: et.NW.string(et.t['+eFXxs'])
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
                          (0, r.jsx)('div', { className: en.settingsDivider })
                      ]
                  }),
                  (0, r.jsx)(h.hjN, {
                      title: 'Voice Widget',
                      children: (0, r.jsxs)('div', {
                          className: en.voiceSettingsContainer,
                          children: [
                              (0, r.jsx)(ec, {
                                  title: et.NW.string(et.t.dnvZSk),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: et.NW.string(et.t.YcOxtr),
                                              value: J.ipw.LARGE
                                          },
                                          {
                                              label: et.NW.string(et.t.BKIKq6),
                                              value: J.ipw.SMALL
                                          }
                                      ],
                                      className: en.select,
                                      onChange: (e) => N.Z.setAvatarSizeMode(e),
                                      value: l
                                  })
                              }),
                              (0, r.jsx)(ec, {
                                  title: et.NW.string(et.t.J0dpcH),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: et.NW.string(et.t.nBmDra),
                                              value: J.wC$.ALWAYS
                                          },
                                          {
                                              label: et.NW.string(et.t['2OvIZW']),
                                              value: J.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: et.NW.string(et.t.ekjlPD),
                                              value: J.wC$.NEVER
                                          }
                                      ],
                                      className: en.select,
                                      onChange: (e) => N.Z.setDisplayNameMode(e),
                                      value: o
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: en.widgetContainer,
                                  children:
                                      b &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: en.voiceWidgetContainer,
                                                  children: (0, r.jsx)(Z.k, {
                                                      id: 'voice-widget',
                                                      title: et.NW.string(et.t.KNJ6Vl),
                                                      channel: (0, k.kt)({
                                                          id: '123',
                                                          name: 'Test Channel',
                                                          type: J.d4z.GUILD_VOICE,
                                                          guild_id: '456'
                                                      }),
                                                      sortedVoiceStates: [
                                                          (function (e) {
                                                              let t = e_(e.username);
                                                              return (t.user = e), t;
                                                          })(x),
                                                          ...E
                                                      ],
                                                      displayNameMode: o,
                                                      displayUserMode: c,
                                                      avatarSizeMode: l,
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
                                              (0, r.jsxs)('div', {
                                                  className: en.widgetHeaderContainer,
                                                  children: [
                                                      (0, r.jsx)(w.PI, { children: et.NW.string(et.t.KNJ6Vl) }),
                                                      (0, r.jsx)(w.ls, {}),
                                                      (0, r.jsx)(w.RT, {
                                                          id: null !== (t = null == C ? void 0 : C.id) && void 0 !== t ? t : 'voice-widget',
                                                          pinned: null !== (n = null == C ? void 0 : C.pinned) && void 0 !== n && n
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                              }),
                              (0, r.jsx)(ec, {
                                  title: et.NW.string(et.t.swsWWF),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: et.NW.string(et.t.nBmDra),
                                              value: J.OYC.ALWAYS
                                          },
                                          {
                                              label: et.NW.string(et.t['2OvIZW']),
                                              value: J.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: en.select,
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
