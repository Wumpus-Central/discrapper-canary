n.d(t, { Z: () => ed }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(348327),
    o = n.n(a),
    c = n(512722),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    h = n(442837),
    g = n(481060),
    _ = n(224706),
    x = n(660216),
    p = n(13245),
    E = n(825209),
    C = n(615287),
    f = n(593472),
    T = n(493773),
    N = n(887278),
    I = n(835473),
    S = n(442550),
    b = n(594190),
    v = n(320724),
    j = n(297700),
    A = n(809357),
    O = n(371651),
    R = n(243487),
    P = n(430561),
    D = n(131704),
    Z = n(598077),
    y = n(189786),
    k = n(77498),
    L = n(283595),
    B = n(594174),
    M = n(556296),
    w = n(808506),
    V = n(237997),
    U = n(626135),
    G = n(358085),
    F = n(13140),
    H = n(145597),
    z = n(981631),
    Y = n(987650),
    W = n(388032),
    K = n(601195);
let X = q(null);
function q(e) {
    var t;
    let n = V.Z.getNotificationPositionMode(),
        i = n !== z._vf.DISABLED,
        s = M.Z.getOverlayKeybind(),
        r = M.Z.getOverlayChatKeybind();
    return {
        enabled: w.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: V.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, F.BB)(s.shortcut) : null,
        text_activation_hotkey: null != r ? (0, F.BB)(r.shortcut) : null,
        text_opacity_slider: V.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : w.Z.enabled
    };
}
function J(e) {
    let { children: t, title: n } = e;
    return (0, i.jsxs)(g.xJW, {
        children: [
            null != n &&
                (0, i.jsx)(g.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: K.formItemTitle,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: K.rowContainer,
                children: t
            })
        ]
    });
}
function Q(e) {
    let { header: t, icon: n, title: s, description: r, action: a, hint: o, onClick: c, 'aria-label': d, className: u } = e;
    return (0, i.jsxs)(g.kL8, {
        'aria-label': d,
        onClick: c,
        className: l()(K.groupContainer, u),
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: K.groupHeader,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: K.groupContent,
                children: [
                    null != n &&
                        (0, i.jsx)('div', {
                            className: K.groupIcon,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: K.groupMainContent,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                className: K.groupTitle,
                                children: s
                            }),
                            null != r &&
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: r
                                }),
                            null != o &&
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-xxs/medium',
                                    color: 'text-muted',
                                    children: o
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: K.groupAction,
                        children: a
                    })
                ]
            })
        ]
    });
}
function $(e) {
    let { children: t, className: n, onExpand: r, ...a } = e,
        [o, c] = s.useState(!1),
        d = (e) => {
            c(e), null == r || r(e);
        };
    return (0, i.jsx)(g.zF9, {
        className: l()(K.collapseable),
        collapsibleContent: (0, i.jsx)('div', {
            className: K.groupCollapsedContainer,
            children: t
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(Q, {
                ...a,
                onClick: (e) => {
                    d(!o), null == t || t(e);
                },
                className: l()(K.mainCollapseableContainer, n),
                action: (0, i.jsxs)('div', {
                    className: K.groupCollapsedAction,
                    children: [
                        a.action,
                        o
                            ? (0, i.jsx)(g.CJ0, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'var(--interactive-active)'
                              })
                            : (0, i.jsx)(g.Fbu, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'var(--interactive-active)'
                              })
                    ]
                })
            });
        }
    });
}
let ee = new Set([C.mM.INITIALIZING, C.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, C.mM.WAITING_FOR_MODULE_TRACKING, C.mM.WAITING_FOR_OVERLAY_OPEN]),
    et = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function en(e) {
    var t, n;
    let r = (0, h.e7)(
            [b.ZP],
            () => {
                let e = b.ZP.getVisibleGame();
                return null == e ? null : e;
            },
            [],
            o()
        ),
        l = null == r ? void 0 : r.pid,
        a = (0, h.e7)([O.Z], () => (null == r || null == l ? null : O.Z.getTrackedGameByPid(l)), [r, l], o()),
        { enabledLegacy: c, enabledOOP: d } = (0, h.cj)(
            [k.Z, L.Z],
            () => {
                if (null == r && null == a)
                    return {
                        enabledLegacy: !1,
                        enabledOOP: !1
                    };
                if (null == r) {
                    var e, t;
                    return {
                        enabledLegacy: null !== (e = null == a ? void 0 : a.legacyEnabled) && void 0 !== e && e,
                        enabledOOP: null !== (t = null == a ? void 0 : a.oopEnabled) && void 0 !== t && t
                    };
                }
                return (0, b.b6)(r, !1, [k.Z, L.Z]);
            },
            [r, a]
        ),
        u = (0, h.e7)([b.ZP, k.Z, L.Z], () => (null == r ? null : (0, b.FZ)(r, [b.ZP, k.Z, L.Z])), [r], o()),
        [m, x] = s.useState(d),
        [p, E] = s.useState(c),
        [S, v] = s.useState(!1);
    s.useEffect(() => {
        x(d), E(c);
    }, [d, c]);
    let A = (0, N.$1)(),
        R = !(0, H.VS)(),
        { legacyEnabled: P, oopEnabled: D } = (0, h.cj)([O.Z], () => O.Z.getGlobalEnabledStatus()),
        [Z] = (0, I.Z)([null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : void 0]),
        y = (e, t, n) => {
            et(n), null != r && (_.Z.toggleOverlay(r, e, t), x(t), E(e));
        },
        B = A && R,
        M = !P && !D,
        w = !m && !P && p && !A,
        V = !p && !D && m && !R,
        U = (null == a ? void 0 : a.overlayMethod) === C.gl.Disabled,
        G = (null == a ? void 0 : a.state) === C.mM.OVERLAY_RENDERING && !U,
        F = (null == a ? void 0 : a.state) != null && ee.has(a.state) && !U,
        z = (null == a ? void 0 : a.overlayMethod) === C.gl.OutOfProcess || (null == a ? void 0 : a.overlayMethod) === C.gl.OutOfProcessLimitedInteraction,
        Y = (null == a ? void 0 : a.overlayMethod) === C.gl.Hook,
        X = (null == a ? void 0 : a.state) === C.mM.OVERLAY_CRASHED || (null == a ? void 0 : a.state) === C.mM.OVERLAY_CRASHED_DISABLED,
        q = !m && !p,
        [J, en] = (() => {
            switch (!0) {
                case G && z:
                    return [
                        W.intl.format(W.t.hFVBIi, {
                            overlayMethod: W.intl.string(W.t.a3eXS0),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    g.Text,
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
                case G && Y:
                    return [
                        W.intl.format(W.t.hFVBIi, {
                            overlayMethod: W.intl.string(W.t.bvlpDQ),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    g.Text,
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
                                case (null == a ? void 0 : a.fullscreenType) !== f.Jx.BORDERLESS_FULLSCREEN:
                                    return W.intl.string(W.t.mJmbeH);
                                case R:
                                    return W.intl.string(W.t.C7bLTU);
                                case !(null !== (e = null == a ? void 0 : a.oopEnabled) && void 0 !== e && e):
                                    return W.intl.string(W.t.WiY24u);
                                case !D:
                                    return W.intl.string(W.t.cAFVsL);
                                case !(null !== (t = null == a ? void 0 : a.supportsOutOfProcess) && void 0 !== t && t):
                                    return W.intl.string(W.t.XcGEcn);
                                default:
                                    return W.intl.string(W.t.bJXH2t);
                            }
                        })()
                    ];
                case X:
                    return [W.intl.string(W.t.OFC2a2), null];
                case B:
                    return [W.intl.string(W.t.m7X4a2), null];
                case M:
                    return [W.intl.string(W.t['9DUS5u']), null];
                case q:
                    return [W.intl.string(W.t.nQ9EdH), null];
                case w:
                case V:
                    return [W.intl.string(W.t.VWUn0d), null];
                case F:
                    if (z) return [W.intl.string(W.t['s8+CFh']), null];
                    if (Y) return [W.intl.string(W.t.JEEdqq), null];
                    return [W.intl.string(W.t['2Xhy9v']), null];
                case null == a:
                    return [W.intl.string(W.t.vwHPRk), null];
                default:
                    return [W.intl.string(W.t.ONovPz), null];
            }
        })();
    return ((0, T.ZP)(() => {
        _.Z.getDetectableGames();
    }),
    null == r)
        ? null
        : (0, i.jsxs)($, {
              onExpand: v,
              className: S ? K.expandedContainer : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      null !== (n = null == Z ? void 0 : Z.name) && void 0 !== n ? n : '',
                      null != u && u.verified
                          ? (0, i.jsx)(g.ua7, {
                                text: W.intl.string(W.t['4PJP5u']),
                                children: (e) =>
                                    (0, i.jsx)(j.Z, {
                                        size: 16,
                                        color: g.TVs.colors.BG_BRAND.css,
                                        ...e,
                                        children: (0, i.jsx)(g.kmB, {
                                            size: 'custom',
                                            width: 16,
                                            height: 16,
                                            color: g.TVs.colors.WHITE.css
                                        })
                                    })
                            })
                          : null
                  ]
              }),
              description: J,
              hint: null != en ? en : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      G || F
                          ? (0, i.jsx)(g.pzj, {
                                size: 'xxs',
                                color: F ? g.TVs.colors.TEXT_MUTED.css : z ? g.TVs.colors.TEXT_POSITIVE.css : g.TVs.colors.INTERACTIVE_NORMAL.css
                            })
                          : (0, i.jsx)('div', { className: K.playingDot }),
                      (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-positive',
                          children: W.intl.string(W.t.CDOx39)
                      })
                  ]
              }),
              icon: (0, i.jsx)(ei, { game: r }),
              'aria-label': W.intl.string(W.t['87O5GB']),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => et(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: m || p,
                      disabled: B || M || w || V,
                      onChange: (e, t) => y(e, e, t)
                  })
              }),
              children: [
                  (0, i.jsx)(Q, {
                      title: W.intl.string(W.t['7BlVIi']),
                      description: W.intl.string(W.t.ndgADA),
                      hint: D ? void 0 : W.intl.string(W.t.cAFVsL),
                      'aria-label': W.intl.string(W.t['7BlVIi']),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.rsf, {
                                  checked: m,
                                  disabled: R || !D,
                                  onChange: (e, t) => y(p, e, t)
                              }),
                              (0, i.jsx)('div', { className: K.emptySpacer })
                          ]
                      })
                  }),
                  (0, i.jsx)(Q, {
                      title: W.intl.string(W.t.BfFpW1),
                      description: W.intl.string(W.t.OzInYm),
                      hint: P ? void 0 : W.intl.string(W.t['3sYHXl']),
                      'aria-label': W.intl.string(W.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.rsf, {
                                  checked: p,
                                  disabled: A || !P,
                                  onChange: (e, t) => y(e, m, t)
                              }),
                              (0, i.jsx)('div', { className: K.emptySpacer })
                          ]
                      })
                  })
              ]
          });
}
function ei(e) {
    var t, n;
    let { game: s } = e,
        [r] = (0, I.Z)([null == s ? void 0 : s.id], !0),
        l = null !== (t = null == r ? void 0 : r.getIconURL(32)) && void 0 !== t ? t : void 0;
    return (0, i.jsx)(S.f, {
        src: l,
        size: 32,
        showTooltip: !1,
        alt: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : ''
    });
}
function es(e) {
    let { rawGame: t, legacySupportDisabled: n } = e,
        r = (0, h.cj)([b.ZP, k.Z, L.Z], () => (0, b.FZ)(t, [b.ZP, k.Z, L.Z])),
        { enabledLegacy: l, enabledOOP: a } = (0, h.cj)([k.Z, L.Z], () => (0, b.b6)(t, !1, [k.Z, L.Z]), [t]),
        [o, c] = s.useState(l);
    s.useEffect(() => {
        c(l);
    }, [l]);
    let d = (e, t) => {
        et(t), _.Z.toggleOverlay(r, e, a), c(e);
    };
    return (0, i.jsx)(Q, {
        title: t.name,
        icon: (0, i.jsx)(ei, { game: r }),
        'aria-label': W.intl.format(W.t.hvPYsL, { gameName: r.name }).toString(),
        action: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.rsf, {
                    checked: o,
                    disabled: n,
                    onChange: (e, t) => d(e, t)
                }),
                (0, i.jsx)('div', { className: K.emptySpacer })
            ]
        })
    });
}
function er(e) {
    let [t, n] = s.useState(!1),
        { legacyEnabled: r, oopEnabled: l } = (0, h.cj)([O.Z], () => O.Z.getGlobalEnabledStatus()),
        a = (0, h.Wu)([b.ZP], () => b.ZP.getGamesSeen(!0)),
        o = (0, N.$1)(),
        c = (e, t) => {
            et(t),
                p.Z.setEnabled(e, l),
                U.default.track(z.rMx.OVERLAY_TOGGLED, {
                    enabled: e,
                    setting_type: 'overlay toggled - legacy'
                });
        },
        d = s.useMemo(() => (Y.iP ? (o ? W.intl.string(W.t.r9jEV1) : W.intl.string(W.t.OzInYm)) : W.intl.string(W.t['8Ox6/P'])), [o]);
    return 0 === a.length
        ? (0, i.jsx)(Q, {
              title: W.intl.string(W.t.BfFpW1),
              description: d,
              'aria-label': W.intl.string(W.t.BfFpW1),
              className: K.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.rsf, {
                          checked: r,
                          disabled: o,
                          onChange: (e, t) => c(e, t)
                      }),
                      Y.iP && (0, i.jsx)('div', { className: K.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)($, {
              onExpand: n,
              className: t ? K.expandedContainer : void 0,
              title: W.intl.string(W.t.BfFpW1),
              description: d,
              'aria-label': W.intl.string(W.t.BfFpW1),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => et(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: r,
                      disabled: o,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: K.subtitleContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: W.intl.string(W.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(g.zJl, {
                      className: K.scroller,
                      children: a.map((e) =>
                          (0, i.jsx)(
                              es,
                              {
                                  rawGame: e,
                                  legacySupportDisabled: o
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function el(e) {
    let { rawGame: t, oopSupportDisabled: n } = e,
        r = (0, h.cj)([b.ZP, k.Z, L.Z], () => (0, b.FZ)(t, [b.ZP, k.Z, L.Z])),
        { enabledLegacy: l, enabledOOP: a } = (0, h.cj)([k.Z, L.Z], () => (0, b.b6)(t, !0, [k.Z, L.Z]), [t]),
        [o, c] = s.useState(a),
        d = (e, t) => {
            et(t), _.Z.toggleOverlay(r, l, e), c(e);
        };
    return (
        s.useEffect(() => {
            c(a);
        }, [a]),
        (0, i.jsx)(Q, {
            title: t.name,
            icon: (0, i.jsx)(ei, { game: r }),
            'aria-label': W.intl.format(W.t.nByTd3, { gameName: r.name }).toString(),
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.rsf, {
                        checked: o,
                        disabled: n,
                        onChange: (e, t) => d(e, t)
                    }),
                    (0, i.jsx)('div', { className: K.emptySpacer })
                ]
            })
        })
    );
}
function ea(e) {
    let [t, n] = s.useState(!1),
        { oopEnabled: r, legacyEnabled: l } = (0, h.cj)([O.Z], () => O.Z.getGlobalEnabledStatus()),
        a = !(0, H.VS)(),
        o = (0, h.Wu)([b.ZP], () => b.ZP.getGamesSeen(!0)),
        c = (e, t) => {
            et(t),
                p.Z.setEnabled(l, e),
                U.default.track(z.rMx.OVERLAY_TOGGLED, {
                    enabled: e,
                    setting_type: 'overlay toggled - oop'
                });
        },
        d = s.useMemo(() => (Y.iP ? (a ? W.intl.string(W.t.C7bLTU) : W.intl.string(W.t.ndgADA)) : W.intl.string(W.t.m7X4a2)), [a]);
    return 0 === o.length
        ? (0, i.jsx)(Q, {
              title: W.intl.string(W.t['7BlVIi']),
              description: d,
              'aria-label': W.intl.string(W.t['7BlVIi']),
              className: K.standaloneContainer,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.rsf, {
                          checked: r,
                          disabled: a,
                          onChange: (e, t) => c(e, t)
                      }),
                      Y.iP && (0, i.jsx)('div', { className: K.emptySpacer })
                  ]
              })
          })
        : (0, i.jsxs)($, {
              onExpand: n,
              className: t ? K.expandedContainer : void 0,
              title: W.intl.string(W.t['7BlVIi']),
              description: d,
              'aria-label': W.intl.string(W.t['7BlVIi']),
              action: (0, i.jsx)(g.P3F, {
                  onClick: (e) => et(e),
                  children: (0, i.jsx)(g.rsf, {
                      checked: r,
                      disabled: a,
                      onChange: (e, t) => c(e, t)
                  })
              }),
              children: [
                  (0, i.jsx)('div', {
                      className: K.subtitleContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: W.intl.string(W.t.FzoWRk)
                      })
                  }),
                  (0, i.jsx)(g.zJl, {
                      className: K.scroller,
                      children: o.map((e) =>
                          (0, i.jsx)(
                              el,
                              {
                                  rawGame: e,
                                  oopSupportDisabled: a
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
function eo() {
    let e = (0, h.e7)([M.Z], () => M.Z.getOverlayKeybind()),
        t = (0, N.$1)(),
        n = !(0, H.VS)();
    return (0, i.jsxs)(J, {
        children: [
            (0, i.jsx)(g.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: W.intl.string(W.t.VsAZcH)
            }),
            (0, i.jsx)('div', {
                className: K.keybindContainer,
                children: (0, i.jsx)(E.Z, {
                    disabled: t && n,
                    defaultValue: null != e ? e.shortcut : [],
                    onChange: function (t) {
                        d()(null != e, 'Keybind should never be undefined'),
                            x.Z.setKeybind({
                                ...e,
                                shortcut: t
                            });
                    }
                })
            })
        ]
    });
}
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = '456' + Math.floor(1000000 * Math.random());
    return {
        voiceState: new y.Z({
            channelId: '123',
            userId: s,
            sessionId: '789',
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i
        }),
        user: new Z.Z({
            id: s,
            username: e
        }),
        member: {
            nick: e,
            userId: s,
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
function ed(e) {
    let { className: t, showHeader: n } = e,
        {
            avatarSizeMode: r,
            displayNameMode: l,
            displayUserMode: a,
            notificationPositionMode: o,
            textChatNotificationMode: c,
            disableClickableRegions: d,
            shouldShowKeybindIndicators: u
        } = (0, h.cj)([V.Z], () => ({
            avatarSizeMode: V.Z.getAvatarSizeMode(),
            displayNameMode: V.Z.getDisplayNameMode(),
            displayUserMode: V.Z.getDisplayUserMode(),
            notificationPositionMode: V.Z.getNotificationPositionMode(),
            textChatNotificationMode: V.Z.getTextChatNotificationMode(),
            disableClickableRegions: V.Z.disableClickableRegions,
            shouldShowKeybindIndicators: V.Z.showKeybindIndicators
        })),
        _ = (0, h.e7)([B.default], () => B.default.getCurrentUser()),
        x = (0, A.Z)({ location: 'overlay_user_settings' });
    (0, T.ZP)(() => {
        if (G.isPlatformEmbedded) return (0, v.Ky)(), v.P7;
    }),
        (function () {
            let e = q(X);
            m().isEqual(e, X) || (U.default.track(z.rMx.OVERLAY_SETTINGS_UPDATED, e), (X = e));
        })();
    let [E] = s.useState(() =>
        null == _
            ? []
            : [
                  (function (e) {
                      let t = ec(e.username);
                      return (t.user = e), t;
                  })(_),
                  ec(W.intl.string(W.t.C0ZDvr), !0, !1),
                  ec(W.intl.string(W.t.iOtj8P), !1, !1, !0),
                  ec(W.intl.string(W.t['0oqNgI']), !1, !0)
              ]
    );
    return null == _
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(g.hjN, {
                      tag: g.RB0.H1,
                      title: W.intl.string(W.t['9cb1U1']),
                      children: [
                          (0, i.jsxs)('div', {
                              className: K.overlayEnabledSettingsContainer,
                              children: [(0, i.jsx)(en, {}), (0, i.jsx)(ea, {}), (0, i.jsx)(er, {})]
                          }),
                          (0, i.jsx)('div', { className: K.settingsDivider })
                      ]
                  }),
                  (0, i.jsxs)(g.hjN, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: K.overlayEnabledSettingsContainer,
                              children: [
                                  (0, i.jsx)(eo, {}),
                                  x &&
                                      (0, i.jsx)(J, {
                                          children: (0, i.jsx)(g.j7V, {
                                              value: u,
                                              onChange: (e) => p.Z.setShowKeybindIndicators(e),
                                              hideBorder: !0,
                                              children: W.intl.string(W.t.XZTl9v)
                                          })
                                      }),
                                  (0, i.jsxs)(J, {
                                      children: [
                                          (0, i.jsx)(g.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: W.intl.string(W.t.Fy5kPj)
                                          }),
                                          (0, i.jsx)(g.j7V, {
                                              value: o !== z._vf.DISABLED && c === z.Ypu.ENABLED,
                                              disabled: o === z._vf.DISABLED,
                                              onChange: function () {
                                                  let { ENABLED: e, DISABLED: t } = z.Ypu;
                                                  p.Z.setTextChatNotificationMode(c === e ? t : e);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)(J, {
                                      children: [
                                          (0, i.jsx)(g.Text, {
                                              variant: 'text-md/semibold',
                                              color: 'header-primary',
                                              children: W.intl.string(W.t['+eFXxs'])
                                          }),
                                          (0, i.jsx)(g.j7V, {
                                              value: !d,
                                              onChange: function () {
                                                  p.Z.setDisableClickableRegions(!d);
                                              },
                                              hideBorder: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', { className: K.settingsDivider })
                      ]
                  }),
                  (0, i.jsx)(g.hjN, {
                      title: 'Voice Widget',
                      children: (0, i.jsxs)('div', {
                          className: K.voiceSettingsContainer,
                          children: [
                              (0, i.jsx)(J, {
                                  title: W.intl.string(W.t.dnvZSk),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: W.intl.string(W.t.YcOxtr),
                                              value: z.ipw.LARGE
                                          },
                                          {
                                              label: W.intl.string(W.t.BKIKq6),
                                              value: z.ipw.SMALL
                                          }
                                      ],
                                      className: K.select,
                                      onChange: (e) => p.Z.setAvatarSizeMode(e),
                                      value: r
                                  })
                              }),
                              (0, i.jsx)(J, {
                                  title: W.intl.string(W.t.J0dpcH),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: W.intl.string(W.t.nBmDra),
                                              value: z.wC$.ALWAYS
                                          },
                                          {
                                              label: W.intl.string(W.t['2OvIZW']),
                                              value: z.wC$.ONLY_WHILE_SPEAKING
                                          },
                                          {
                                              label: W.intl.string(W.t.ekjlPD),
                                              value: z.wC$.NEVER
                                          }
                                      ],
                                      className: K.select,
                                      onChange: (e) => p.Z.setDisplayNameMode(e),
                                      value: l
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: K.widgetContainer,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: K.voiceWidgetContainer,
                                          children: (0, i.jsx)(R.k, {
                                              id: 'voice-widget',
                                              title: W.intl.string(W.t.KNJ6Vl),
                                              channel: (0, D.kt)({
                                                  id: '123',
                                                  name: 'Test Channel',
                                                  type: z.d4z.GUILD_VOICE,
                                                  guild_id: '456'
                                              }),
                                              sortedVoiceStates: E,
                                              displayNameMode: l,
                                              displayUserMode: a,
                                              avatarSizeMode: r,
                                              widget: z.Odu.VOICE,
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
                                      (0, i.jsxs)('div', {
                                          className: K.widgetHeaderContainer,
                                          children: [
                                              (0, i.jsx)(P.PI, { children: W.intl.string(W.t.KNJ6Vl) }),
                                              (0, i.jsx)(P.ls, {}),
                                              (0, i.jsx)(P.RT, {
                                                  id: 'voice-widget',
                                                  pinned: !0
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, i.jsx)(J, {
                                  title: W.intl.string(W.t.swsWWF),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: W.intl.string(W.t.nBmDra),
                                              value: z.OYC.ALWAYS
                                          },
                                          {
                                              label: W.intl.string(W.t['2OvIZW']),
                                              value: z.OYC.ONLY_WHILE_SPEAKING
                                          }
                                      ],
                                      className: K.select,
                                      onChange: (e) => p.Z.setDisplayUserMode(e),
                                      value: a
                                  })
                              })
                          ]
                      })
                  })
              ]
          });
}
