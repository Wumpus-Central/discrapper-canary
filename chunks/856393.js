n.d(t, {
    Z: () => ep,
    e: () => ed,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(442837),
    c = n(433517),
    u = n(755721),
    d = n(481060),
    h = n(570140),
    p = n(393238),
    f = n(493773),
    g = n(40851),
    m = n(100527),
    b = n(906732),
    y = n(358221),
    x = n(414910),
    j = n(909820),
    _ = n(493010),
    O = n(71127),
    v = n(185935),
    C = n(522651),
    E = n(788983),
    S = n(928518),
    Z = n(703656),
    I = n(493754),
    P = n(937995),
    T = n(880831),
    N = n(73563),
    R = n(800965),
    w = n(107169),
    A = n(891551),
    D = n(314897),
    L = n(979696),
    k = n(430824),
    M = n(496675),
    U = n(944486),
    H = n(358085),
    G = n(998502),
    F = n(922482),
    B = n(431328),
    z = n(501655),
    V = n(427679),
    W = n(513449),
    Y = n(153349),
    q = n(901434),
    K = n(302270),
    Q = n(308177),
    X = n(700483),
    J = n(686468),
    $ = n(801405),
    ee = n(903108),
    et = n(981631),
    en = n(354459),
    er = n(388032),
    ei = n(806176);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let ea = "HasBeenInStageChannel",
    es = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, Z.XU)(n, t), E.hP(e);
    },
    eo = () => {
        h.Z.wait(() => E.xv(et.KJ3.CHANNEL_CALL_POPOUT));
    },
    ec = (e) => {
        (0, C.v)(m.Z.VOICE_CONTROL_TRAY, C.d.STAY_ON_TOP, e), E.hY(et.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function eu(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: s,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: u } = (0, b.ZP)(),
        d = t.getGuildId(),
        h = (0, o.e7)([U.Z], () => U.Z.getMostRecentSelectedTextChannelId(d), [d]),
        p = D.default.getId(),
        f =
            !(0, o.e7)([y.Z], () => y.Z.isFullscreenInContext(n)) &&
            (!H.isPlatformEmbedded || (H.isPlatformEmbedded && G.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS))),
        g = null != c && c.type !== en.fO.ACTIVITY && c.user.id !== p,
        m = i.useMemo(() => {
            var e;
            return null != (e = null == a ? void 0 : a.window) ? e : window;
        }, [a]),
        j = (0, $.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: a,
            currentWindow: m,
        }),
        _ = n === et.IlC.POPOUT && H.isPlatformEmbedded && G.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            g
                ? (0, r.jsx)(A.Z, {
                      context: (0, x.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: m,
                      sliderClassName: ei.volumeSlider,
                      location: u,
                  })
                : null,
            _
                ? (0, r.jsx)(w.Z, {
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: ec,
                  })
                : null,
            f
                ? (0, r.jsx)(R.Z, {
                      popoutOpen: l,
                      onOpenPopout: () => {
                          (0, C.v)(u, C.d.POPOUT, !0), es(t, h)();
                      },
                      onClosePopout: () => {
                          (0, C.v)(u, C.d.POPOUT, !1), eo();
                      },
                  })
                : null,
            j,
        ],
    });
}
function ed(e) {
    let { channel: t } = e,
        n = (0, g.bp)(),
        i = (0, o.e7)([M.Z], () => M.Z.can(et.Plq.CREATE_INSTANT_INVITE, t)),
        l = (0, o.e7)([k.Z], () => k.Z.getGuild(t.guild_id)),
        a = (0, o.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id)),
        s = i || (null == a ? void 0 : a.invite_code) != null;
    return null != l && s
        ? (0, r.jsx)(I.Z, {
              size: u.zx.Sizes.MEDIUM,
              color: u.zx.Colors.TRANSPARENT,
              channel: t,
              appContext: n,
              className: ei.__invalid_leftTrayIcon,
              analyticsLocation: et.ZY5.GUILD_CHANNEL,
          })
        : null;
}
function eh(e) {
    var t, n;
    let l,
        {
            channel: c,
            toggleRequestToSpeakSidebar: u,
            showRequestToSpeakSidebar: d,
            popoutWindow: h,
            popoutWindowAlwaysOnTop: p,
            popoutOpen: f,
            chatOpen: x,
            idleProps: _,
        } = e,
        { analyticsLocations: O } = (0, b.ZP)(m.Z.VOICE_CONTROL_TRAY),
        v = (0, g.bp)(),
        C = (0, o.e7)([U.Z], () => U.Z.getVoiceChannelId() === c.id, [c.id]),
        E = (0, o.e7)([M.Z], () => M.Z.can(et.Plq.CONNECT, c)),
        S = (0, B.w8)(c.id, z.pV.SPEAKER),
        Z = (0, o.e7)([y.Z], () => y.Z.getSelectedParticipant(c.id)),
        I = f && v !== et.IlC.POPOUT,
        [P, R] = i.useState(0),
        { isOnStartStageScreen: w } = (0, W.ZP)();
    (0, W.MV)(c);
    let A = (0, o.e7)([L.Z], () => L.Z.getToastsEnabled(c.id)),
        D = (0, ee.Z)(c) ? (null != Z ? "84px" : "124px") : null != Z ? "0px" : "48px";
    return (
        w && (D = "0px"),
        (l = w
            ? (0, r.jsx)(J.Z, {
                  channel: c,
                  onContinueClick: () => {
                      (0, W.Ku)(!1), C || (0, F.TM)(c);
                  },
              })
            : C
              ? (0, r.jsx)(Q.Z, {
                    channel: c,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, s.debounce)(() => R(t), 1000, { leading: !0 })();
                    },
                })
              : (0, r.jsx)(q.Z, {
                    participants: S,
                    channel: c,
                    hasConnectPermission: E,
                })),
        (0, r.jsx)(
            N.Z,
            ((t = el(
                {
                    style: {
                        height: "calc(100% - ".concat(D, ")"),
                        paddingTop: D,
                    },
                    disableGradients: !C || (0 === P && N.e.TOP),
                    renderBottomCenter: () =>
                        C
                            ? (0, r.jsx)(b.Gt, {
                                  value: O,
                                  children: (0, r.jsx)(X.Z, {
                                      channel: c,
                                      isOnStartStageScreen: w,
                                  }),
                              })
                            : null,
                    renderBottomRight: () =>
                        C
                            ? (0, r.jsx)(b.Gt, {
                                  value: O,
                                  children: (0, r.jsx)(eu, {
                                      channel: c,
                                      appContext: v,
                                      popoutOpen: f,
                                      popoutWindow: h,
                                      popoutWindowAlwaysOnTop: p,
                                      selectedParticipant: Z,
                                  }),
                              })
                            : null,
                    renderHeader: () =>
                        (0, r.jsx)(K.Z, {
                            toggleRequestToSpeakSidebar: u,
                            showRequestToSpeakSidebar: d,
                            channel: c,
                        }),
                    renderChatToasts: () =>
                        !A || x || I
                            ? null
                            : (0, r.jsx)(j.ZP, {
                                  children: (0, r.jsx)(T.Z, {
                                      className: a()(ei.chatToasts, { [ei.rtsSidebarOpen]: d }),
                                      channelId: c.id,
                                  }),
                              }),
                    screenMessage: I ? { mainText: er.intl.string(er.t.J5bXZW) } : null,
                },
                _,
            )),
            (n = n = { children: !I && l }),
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
            t),
        )
    );
}
function ep(e) {
    let { channel: t } = e,
        [l, s] = i.useState(!1),
        u = i.useCallback(() => {
            s(!l);
        }, [l, s]),
        { popoutWindow: h, popoutWindowAlwaysOnTop: x } = (0, o.cj)([S.Z], () => ({
            popoutWindow: S.Z.getWindow(et.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: S.Z.getIsAlwaysOnTop(et.KJ3.CHANNEL_CALL_POPOUT),
        })),
        C = null != h && !h.closed,
        { analyticsLocations: E } = (0, b.ZP)(m.Z.STAGE_CHANNEL_CALL),
        Z = (0, g.bp)(),
        { chatOpen: I, participantsListOpen: T } = (0, o.cj)(
            [y.Z],
            () => ({
                chatOpen: y.Z.getChatOpen(t.id),
                participantsListOpen: y.Z.getParticipantsListOpen(t.id),
            }),
            [t.id],
        ),
        N = (0, o.e7)([k.Z], () => k.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: R } = (0, v.Z)({ location: "StageChannelCall" });
    (0, f.ZP)(() => {
        null == c.K.get(ea) &&
            ((0, d.ZDy)(async () => {
                let { default: e } = await n.e("37194").then(n.bind(n, 947422));
                return (t) => (0, r.jsx)(e, el({}, t));
            }),
            c.K.set(ea, Date.now()));
    });
    let { width: w = 0, ref: A } = (0, p.ZP)(),
        D = w - 550,
        L = !C || (C && Z === et.IlC.POPOUT);
    return (0, r.jsx)(b.Gt, {
        value: E,
        children: (0, r.jsxs)(j.B2, {
            children: [
                (0, r.jsxs)("div", {
                    className: ei.container,
                    ref: A,
                    children: [
                        (0, r.jsx)(d.f6W, {
                            theme: et.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)("div", {
                                    className: a()(ei.callContainer, e, {
                                        [ei.sidebarVisible]: l,
                                        [ei.sidebarOrChatVisible]: l || I || T,
                                    }),
                                    children: (0, r.jsx)(P.ZP, {
                                        timeout: 2000,
                                        children: (e) =>
                                            (0, r.jsx)(eh, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: u,
                                                showRequestToSpeakSidebar: l,
                                                popoutWindow: h,
                                                popoutWindowAlwaysOnTop: x,
                                                popoutOpen: C,
                                                chatOpen: I,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        l
                            ? (0, r.jsx)(Y.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: u,
                                  chatOpen: I,
                              })
                            : null,
                        (0, r.jsxs)("div", {
                            className: ei.channelChatWrapper,
                            children: [
                                I &&
                                    L &&
                                    (0, r.jsx)(_.Z, {
                                        channel: t,
                                        guild: N,
                                        maxWidth: D,
                                    }),
                                T &&
                                    R &&
                                    L &&
                                    (0, r.jsx)(O.Z, {
                                        channel: t,
                                        maxWidth: D,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(j.H_, {}),
            ],
        }),
    });
}
