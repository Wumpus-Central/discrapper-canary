n.d(t, {
    Z: () => ed,
    e: () => ec
}),
    n(47120);
var r = n(200651),
    i = n(192379),
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
    C = n(909820),
    y = n(493010),
    x = n(71127),
    v = n(185935),
    j = n(522651),
    O = n(540059),
    E = n(788983),
    N = n(928518),
    I = n(703656),
    P = n(493754),
    S = n(880831),
    Z = n(73563),
    T = n(800965),
    A = n(107169),
    w = n(891551),
    R = n(314897),
    M = n(979696),
    k = n(430824),
    L = n(496675),
    D = n(944486),
    W = n(358085),
    U = n(998502),
    B = n(922482),
    H = n(431328),
    F = n(501655),
    G = n(427679),
    V = n(513449),
    z = n(153349),
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
let ei = 'HasBeenInStageChannel',
    el = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, I.XU)(n, t), E.hP(e);
    },
    eo = () => {
        d.Z.wait(() => E.xv(ee.KJ3.CHANNEL_CALL_POPOUT));
    },
    ea = (e) => {
        (0, j.v)(m.Z.VOICE_CONTROL_TRAY, j.d.STAY_ON_TOP, e), E.hY(ee.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function es(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: o, popoutWindowAlwaysOnTop: a, selectedParticipant: c } = e,
        { parentAnalyticsLocation: u } = (0, g.ZP)(),
        d = t.getGuildId(),
        p = (0, s.e7)([D.Z], () => D.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = R.default.getId(),
        f = !(0, s.e7)([b.Z], () => b.Z.isFullscreenInContext(n)) && (!W.isPlatformEmbedded || (W.isPlatformEmbedded && U.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== et.fO.ACTIVITY && c.user.id !== h,
        C = i.useMemo(() => {
            var e;
            return null != (e = null == o ? void 0 : o.window) ? e : window;
        }, [o]),
        y = (0, J.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: o,
            currentWindow: C
        }),
        x = n === ee.IlC.POPOUT && W.isPlatformEmbedded && U.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m
                ? (0, r.jsx)(w.Z, {
                      context: (0, _.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: C,
                      sliderClassName: er.volumeSlider,
                      location: u
                  })
                : null,
            x
                ? (0, r.jsx)(A.Z, {
                      className: er.rightTrayIcon,
                      popoutWindowAlwaysOnTop: a,
                      onToggleStayOnTop: ea
                  })
                : null,
            f
                ? (0, r.jsx)(T.Z, {
                      className: er.rightTrayIcon,
                      popoutOpen: l,
                      onOpenPopout: () => {
                          (0, j.v)(u, j.d.POPOUT, !0), el(t, p)();
                      },
                      onClosePopout: () => {
                          (0, j.v)(u, j.d.POPOUT, !1), eo();
                      }
                  })
                : null,
            y
        ]
    });
}
function ec(e) {
    let { channel: t } = e,
        n = (0, f.bp)(),
        i = (0, s.e7)([L.Z], () => L.Z.can(ee.Plq.CREATE_INSTANT_INVITE, t)),
        l = (0, s.e7)([k.Z], () => k.Z.getGuild(t.guild_id)),
        o = (0, s.e7)([G.Z], () => G.Z.getStageInstanceByChannel(t.id)),
        a = i || (null == o ? void 0 : o.invite_code) != null,
        c = (0, O.Q3)('StageChannelInviteButton');
    return null != l && a
        ? (0, r.jsx)(P.Z, {
              size: c ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL,
              color: c ? u.zxk.Colors.TRANSPARENT : er.customInviteButtonColors,
              channel: t,
              appContext: n,
              className: er.__invalid_leftTrayIcon,
              analyticsLocation: ee.ZY5.GUILD_CHANNEL
          })
        : null;
}
function eu(e) {
    let t,
        { channel: n, toggleRequestToSpeakSidebar: l, showRequestToSpeakSidebar: c, popoutWindow: d, popoutWindowAlwaysOnTop: p, popoutOpen: h, chatOpen: _ } = e,
        { analyticsLocations: y } = (0, g.ZP)(m.Z.VOICE_CONTROL_TRAY),
        x = (0, f.bp)(),
        v = (0, s.e7)([D.Z], () => D.Z.getVoiceChannelId() === n.id, [n.id]),
        j = (0, s.e7)([L.Z], () => L.Z.can(ee.Plq.CONNECT, n)),
        E = (0, H.w8)(n.id, F.pV.SPEAKER),
        N = (0, s.e7)([b.Z], () => b.Z.getSelectedParticipant(n.id)),
        I = h && x !== ee.IlC.POPOUT,
        P = (0, O.Q3)('StageChannelCallContent'),
        [T, A] = i.useState(0),
        w = (0, u._q$)('StageChannelCall'),
        { isOnStartStageScreen: R } = (0, V.ZP)();
    (0, V.MV)(n);
    let k = (0, s.e7)([M.Z], () => M.Z.getToastsEnabled(n.id)),
        W = (0, $.Z)(n) ? (null != N ? '84px' : '124px') : null != N ? '0px' : '48px';
    return (
        w && R && (W = '0px'),
        (t = R
            ? (0, r.jsx)(Q.Z, {
                  channel: n,
                  onContinueClick: () => {
                      (0, V.Ku)(!1), v || (0, B.TM)(n);
                  }
              })
            : v
              ? (0, r.jsx)(K.Z, {
                    channel: n,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, a.debounce)(() => A(t), 1000, { leading: !0 })();
                    }
                })
              : (0, r.jsx)(Y.Z, {
                    participants: E,
                    channel: n,
                    hasConnectPermission: j
                })),
        (0, r.jsx)(Z.Z, {
            style: {
                height: 'calc(100% - '.concat(W, ')'),
                paddingTop: W
            },
            disableGradients: (!!P && !v) || (0 === T && Z.e.TOP),
            renderBottomLeft: () =>
                P
                    ? null
                    : (0, r.jsx)(g.Gt, {
                          value: y,
                          children: (0, r.jsx)(ec, { channel: n })
                      }),
            renderBottomCenter: () =>
                v
                    ? (0, r.jsx)(g.Gt, {
                          value: y,
                          children: (0, r.jsx)(X.Z, {
                              channel: n,
                              isOnStartStageScreen: R
                          })
                      })
                    : null,
            renderBottomRight: () =>
                v
                    ? (0, r.jsx)(g.Gt, {
                          value: y,
                          children: (0, r.jsx)(es, {
                              channel: n,
                              appContext: x,
                              popoutOpen: h,
                              popoutWindow: d,
                              popoutWindowAlwaysOnTop: p,
                              selectedParticipant: N
                          })
                      })
                    : null,
            renderHeader: () =>
                (0, r.jsx)(q.Z, {
                    inPopout: x === ee.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: l,
                    showRequestToSpeakSidebar: c,
                    channel: n
                }),
            renderChatToasts: () =>
                !k || _ || I
                    ? null
                    : (0, r.jsx)(C.ZP, {
                          children: (0, r.jsx)(S.Z, {
                              className: o()(er.chatToasts, { [er.rtsSidebarOpen]: c }),
                              channelId: n.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: I ? { mainText: en.NW.string(en.t.J5bXZW) } : null,
            idle: !1,
            children: !I && t
        })
    );
}
function ed(e) {
    let { channel: t } = e,
        [l, a] = i.useState(!1),
        d = i.useCallback(() => {
            a(!l);
        }, [l, a]),
        { popoutWindow: _, popoutWindowAlwaysOnTop: j } = (0, s.cj)([N.Z], () => ({
            popoutWindow: N.Z.getWindow(ee.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: N.Z.getIsAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT)
        })),
        O = null != _ && !_.closed,
        { analyticsLocations: E } = (0, g.ZP)(m.Z.STAGE_CHANNEL_CALL),
        I = (0, f.bp)(),
        { chatOpen: P, participantsListOpen: S } = (0, s.cj)(
            [b.Z],
            () => ({
                chatOpen: b.Z.getChatOpen(t.id),
                participantsListOpen: b.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        Z = (0, s.e7)([k.Z], () => k.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: T } = (0, v.Z)({ location: 'StageChannelCall' });
    (0, h.ZP)(() => {
        null == c.K.get(ei) &&
            ((0, u.ZDy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
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
                        })({}, t)
                    );
            }),
            c.K.set(ei, Date.now()));
    });
    let { width: A = 0, ref: w } = (0, p.Z)(),
        R = A - 550,
        M = !O || (O && I === ee.IlC.POPOUT);
    return (0, r.jsx)(g.Gt, {
        value: E,
        children: (0, r.jsxs)(C.B2, {
            children: [
                (0, r.jsxs)('div', {
                    className: er.container,
                    ref: w,
                    children: [
                        (0, r.jsx)(u.f6W, {
                            theme: ee.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    className: o()(er.callContainer, e, {
                                        [er.sidebarVisible]: l,
                                        [er.sidebarOrChatVisible]: l || P || S
                                    }),
                                    children: (0, r.jsx)(eu, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: d,
                                        showRequestToSpeakSidebar: l,
                                        popoutWindow: _,
                                        popoutWindowAlwaysOnTop: j,
                                        popoutOpen: O,
                                        chatOpen: P
                                    })
                                })
                        }),
                        l
                            ? (0, r.jsx)(z.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: P
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: er.channelChatWrapper,
                            children: [
                                P &&
                                    M &&
                                    (0, r.jsx)(y.Z, {
                                        channel: t,
                                        guild: Z,
                                        maxWidth: R
                                    }),
                                S &&
                                    T &&
                                    M &&
                                    (0, r.jsx)(x.Z, {
                                        channel: t,
                                        maxWidth: R
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(C.H_, {})
            ]
        })
    });
}
