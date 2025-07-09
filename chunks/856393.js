(n.d(t, {
    Z: () => ep,
    e: () => eu
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(442837),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    p = n(393238),
    h = n(493773),
    f = n(40851),
    m = n(100527),
    g = n(906732),
    b = n(358221),
    _ = n(414910),
    y = n(909820),
    C = n(493010),
    x = n(71127),
    v = n(185935),
    O = n(522651),
    j = n(788983),
    E = n(928518),
    S = n(703656),
    I = n(493754),
    P = n(937995),
    Z = n(880831),
    N = n(73563),
    T = n(800965),
    A = n(107169),
    w = n(891551),
    R = n(314897),
    k = n(979696),
    M = n(430824),
    D = n(496675),
    L = n(944486),
    U = n(358085),
    B = n(998502),
    F = n(922482),
    H = n(431328),
    G = n(501655),
    V = n(427679),
    z = n(513449),
    W = n(153349),
    Y = n(901434),
    q = n(302270),
    K = n(308177),
    X = n(700483),
    Q = n(686468),
    J = n(801405),
    $ = n(903108),
    ee = n(981631),
    et = n(354459),
    en = n(388032),
    er = n(806176);
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let el = 'HasBeenInStageChannel',
    eo = (e, t) => () => {
        let n = e.getGuildId();
        (null != n && null != t && (0, S.XU)(n, t), j.hP(e));
    },
    ea = () => {
        d.Z.wait(() => j.xv(ee.KJ3.CHANNEL_CALL_POPOUT));
    },
    es = (e) => {
        ((0, O.v)(m.Z.VOICE_CONTROL_TRAY, O.d.STAY_ON_TOP, e), j.hY(ee.KJ3.CHANNEL_CALL_POPOUT, e));
    };
function ec(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: o, popoutWindowAlwaysOnTop: a, selectedParticipant: c } = e,
        { parentAnalyticsLocation: u } = (0, g.ZP)(),
        d = t.getGuildId(),
        p = (0, s.e7)([L.Z], () => L.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = R.default.getId(),
        f = !(0, s.e7)([b.Z], () => b.Z.isFullscreenInContext(n)) && (!U.isPlatformEmbedded || (U.isPlatformEmbedded && B.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== et.fO.ACTIVITY && c.user.id !== h,
        y = i.useMemo(() => {
            var e;
            return null != (e = null == o ? void 0 : o.window) ? e : window;
        }, [o]),
        C = (0, J.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: o,
            currentWindow: y
        }),
        x = n === ee.IlC.POPOUT && U.isPlatformEmbedded && B.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m
                ? (0, r.jsx)(w.Z, {
                      context: (0, _.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: y,
                      sliderClassName: er.volumeSlider,
                      location: u
                  })
                : null,
            x
                ? (0, r.jsx)(A.Z, {
                      className: er.rightTrayIcon,
                      popoutWindowAlwaysOnTop: a,
                      onToggleStayOnTop: es
                  })
                : null,
            f
                ? (0, r.jsx)(T.Z, {
                      className: er.rightTrayIcon,
                      popoutOpen: l,
                      onOpenPopout: () => {
                          ((0, O.v)(u, O.d.POPOUT, !0), eo(t, p)());
                      },
                      onClosePopout: () => {
                          ((0, O.v)(u, O.d.POPOUT, !1), ea());
                      }
                  })
                : null,
            C
        ]
    });
}
function eu(e) {
    let { channel: t } = e,
        n = (0, f.bp)(),
        i = (0, s.e7)([D.Z], () => D.Z.can(ee.Plq.CREATE_INSTANT_INVITE, t)),
        l = (0, s.e7)([M.Z], () => M.Z.getGuild(t.guild_id)),
        o = (0, s.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id)),
        a = i || (null == o ? void 0 : o.invite_code) != null;
    return null != l && a
        ? (0, r.jsx)(I.Z, {
              size: u.zxk.Sizes.MEDIUM,
              color: u.zxk.Colors.TRANSPARENT,
              channel: t,
              appContext: n,
              className: er.__invalid_leftTrayIcon,
              analyticsLocation: ee.ZY5.GUILD_CHANNEL
          })
        : null;
}
function ed(e) {
    var t, n;
    let l,
        { channel: c, toggleRequestToSpeakSidebar: u, showRequestToSpeakSidebar: d, popoutWindow: p, popoutWindowAlwaysOnTop: h, popoutOpen: _, chatOpen: C, idleProps: x } = e,
        { analyticsLocations: v } = (0, g.ZP)(m.Z.VOICE_CONTROL_TRAY),
        O = (0, f.bp)(),
        j = (0, s.e7)([L.Z], () => L.Z.getVoiceChannelId() === c.id, [c.id]),
        E = (0, s.e7)([D.Z], () => D.Z.can(ee.Plq.CONNECT, c)),
        S = (0, H.w8)(c.id, G.pV.SPEAKER),
        I = (0, s.e7)([b.Z], () => b.Z.getSelectedParticipant(c.id)),
        P = _ && O !== ee.IlC.POPOUT,
        [T, A] = i.useState(0),
        { isOnStartStageScreen: w } = (0, z.ZP)();
    (0, z.MV)(c);
    let R = (0, s.e7)([k.Z], () => k.Z.getToastsEnabled(c.id)),
        M = (0, $.Z)(c) ? (null != I ? '84px' : '124px') : null != I ? '0px' : '48px';
    return (
        w && (M = '0px'),
        (l = w
            ? (0, r.jsx)(Q.Z, {
                  channel: c,
                  onContinueClick: () => {
                      ((0, z.Ku)(!1), j || (0, F.TM)(c));
                  }
              })
            : j
              ? (0, r.jsx)(K.Z, {
                    channel: c,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, a.debounce)(() => A(t), 1000, { leading: !0 })();
                    }
                })
              : (0, r.jsx)(Y.Z, {
                    participants: S,
                    channel: c,
                    hasConnectPermission: E
                })),
        (0, r.jsx)(
            N.Z,
            ((t = ei(
                {
                    style: {
                        height: 'calc(100% - '.concat(M, ')'),
                        paddingTop: M
                    },
                    disableGradients: !j || (0 === T && N.e.TOP),
                    renderBottomCenter: () =>
                        j
                            ? (0, r.jsx)(g.Gt, {
                                  value: v,
                                  children: (0, r.jsx)(X.Z, {
                                      channel: c,
                                      isOnStartStageScreen: w
                                  })
                              })
                            : null,
                    renderBottomRight: () =>
                        j
                            ? (0, r.jsx)(g.Gt, {
                                  value: v,
                                  children: (0, r.jsx)(ec, {
                                      channel: c,
                                      appContext: O,
                                      popoutOpen: _,
                                      popoutWindow: p,
                                      popoutWindowAlwaysOnTop: h,
                                      selectedParticipant: I
                                  })
                              })
                            : null,
                    renderHeader: () =>
                        (0, r.jsx)(q.Z, {
                            toggleRequestToSpeakSidebar: u,
                            showRequestToSpeakSidebar: d,
                            channel: c
                        }),
                    renderChatToasts: () =>
                        !R || C || P
                            ? null
                            : (0, r.jsx)(y.ZP, {
                                  children: (0, r.jsx)(Z.Z, {
                                      className: o()(er.chatToasts, { [er.rtsSidebarOpen]: d }),
                                      channelId: c.id
                                  })
                              }),
                    screenMessage: P ? { mainText: en.intl.string(en.t.J5bXZW) } : null
                },
                x
            )),
            (n = n = { children: !P && l }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    );
}
function ep(e) {
    let { channel: t } = e,
        [l, a] = i.useState(!1),
        d = i.useCallback(() => {
            a(!l);
        }, [l, a]),
        { popoutWindow: _, popoutWindowAlwaysOnTop: O } = (0, s.cj)([E.Z], () => ({
            popoutWindow: E.Z.getWindow(ee.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: E.Z.getIsAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT)
        })),
        j = null != _ && !_.closed,
        { analyticsLocations: S } = (0, g.ZP)(m.Z.STAGE_CHANNEL_CALL),
        I = (0, f.bp)(),
        { chatOpen: Z, participantsListOpen: N } = (0, s.cj)(
            [b.Z],
            () => ({
                chatOpen: b.Z.getChatOpen(t.id),
                participantsListOpen: b.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        T = (0, s.e7)([M.Z], () => M.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: A } = (0, v.Z)({ location: 'StageChannelCall' });
    (0, h.ZP)(() => {
        null == c.K.get(el) &&
            ((0, u.ZDy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, r.jsx)(e, ei({}, t));
            }),
            c.K.set(el, Date.now()));
    });
    let { width: w = 0, ref: R } = (0, p.ZP)(),
        k = w - 550,
        D = !j || (j && I === ee.IlC.POPOUT);
    return (0, r.jsx)(g.Gt, {
        value: S,
        children: (0, r.jsxs)(y.B2, {
            children: [
                (0, r.jsxs)('div', {
                    className: er.container,
                    ref: R,
                    children: [
                        (0, r.jsx)(u.f6W, {
                            theme: ee.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    className: o()(er.callContainer, e, {
                                        [er.sidebarVisible]: l,
                                        [er.sidebarOrChatVisible]: l || Z || N
                                    }),
                                    children: (0, r.jsx)(P.ZP, {
                                        timeout: 2000,
                                        children: (e) =>
                                            (0, r.jsx)(ed, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: d,
                                                showRequestToSpeakSidebar: l,
                                                popoutWindow: _,
                                                popoutWindowAlwaysOnTop: O,
                                                popoutOpen: j,
                                                chatOpen: Z,
                                                idleProps: e
                                            })
                                    })
                                })
                        }),
                        l
                            ? (0, r.jsx)(W.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: Z
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: er.channelChatWrapper,
                            children: [
                                Z &&
                                    D &&
                                    (0, r.jsx)(C.Z, {
                                        channel: t,
                                        guild: T,
                                        maxWidth: k
                                    }),
                                N &&
                                    A &&
                                    D &&
                                    (0, r.jsx)(x.Z, {
                                        channel: t,
                                        maxWidth: k
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(y.H_, {})
            ]
        })
    });
}
