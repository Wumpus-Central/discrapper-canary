e.d(n, { A: () => t0 });
var l = e(477900),
    i = e(582128),
    a = e(503698),
    r = e.n(a),
    s = e(350835),
    o = e(696292),
    c = e(983851),
    u = e(646514),
    d = e(939249),
    A = e(541806),
    f = e(765379),
    g = e(672979),
    m = e(960076),
    p = e(793574),
    x = e(688810),
    I = e(47167),
    _ = e(325158),
    N = e(662010),
    E = e(623671),
    T = e(365185),
    h = e(915089),
    C = e(932413),
    S = e(345942),
    y = e(82149),
    v = e(92240),
    O = e(257367),
    j = e(770689),
    P = e(53257),
    R = e(702476),
    L = e(939496),
    b = e(964195),
    M = e(855986),
    U = e(55730),
    D = e(682261),
    G = e(874546),
    Y = e(141639),
    V = e(61330),
    w = e(73963),
    k = e(359549),
    W = e(540185),
    B = e(454908),
    H = e(289173),
    z = e(735321),
    X = e(527212),
    $ = e(993401),
    F = e(46653),
    Q = e(518477),
    J = e(792996);
function q(t) {
    let { application: n, onAction: e, onClose: a } = t,
        r = (0, M.bG)([F.default], () => F.default.getId()),
        s = (0, X.Ay)(r, null),
        o = n.getCanonicalGameId(),
        { data: c } = (0, B.I)(o),
        u = i.useMemo(
            () =>
                !(
                    null == c ||
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof H.Yy && t.type === W.x.CURRENT_GAMES && t.games?.some((t) => t.gameId === o),
                    )
                ) && (0, z.XX)(c),
            [o, s?.widgets, c],
        ),
        d = i.useCallback(
            (t) => {
                null != o &&
                    (t.stopPropagation(),
                    e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, z.ew)({ widgetType: W.x.CURRENT_GAMES, game: { gameId: o }, ignoreMaxGames: !0 }),
                    (0, R.openUserProfileModal)({
                        userId: r,
                        tabSection: Q.RP.WIDGETS,
                        scrollTarget: W.x.CURRENT_GAMES,
                    }),
                    a?.());
            },
            [o, r, e, a],
        );
    return u ? (0, l.jsx)($.FD, { text: J.intl.string(J.t.BjYzmC), onClick: d, fullWidth: !0 }) : null;
}
var Z = e(607781),
    K = e(724302),
    tt = e(308335),
    tn = e(790381),
    te = e(266080),
    tl = e(729937),
    ti = e(889558),
    ta = e(998218),
    tr = e(996988),
    ts = e(260155);
async function to(t) {
    let { activity: n, user: e, index: l } = t;
    try {
        let t = await (0, tl.yb)(n, e.id);
        if (t.button_urls.length <= l) return;
        let i = t.button_urls[l];
        if ("string" != typeof i) return;
        let a = ta.A.safeParseWithQuery(i);
        if (a?.protocol == null || a?.hostname == null) return;
        (0, ti.h)({ href: ta.A.format(a), trusted: !1 });
    } catch (t) {}
}
function tc(t) {
    let { user: n, activity: e, onAction: i } = t,
        { themeType: a } = (0, L.E)();
    if (e?.buttons == null || e.buttons.length < 1) return null;
    let r = (0, A.A)(e);
    return a === tr.d.MODAL_V2
        ? (0, l.jsx)("div", {
              className: ts.fO,
              children: e.buttons.map((t, a) =>
                  (0, l.jsx)(
                      $.FD,
                      {
                          text: r ? J.intl.string(J.t.I6JG46) : t,
                          onClick: (t) => {
                              (t.stopPropagation(),
                                  i?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  to({ user: n, activity: e, index: a }));
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, l.jsx)("div", {
              className: ts.fO,
              children: e.buttons.map((t, a) =>
                  (0, l.jsx)(
                      $.FD,
                      {
                          text: r ? J.intl.string(J.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              (t.stopPropagation(),
                                  i?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  to({ user: n, activity: e, index: a }));
                          },
                      },
                      a,
                  ),
              ),
          });
}
var tu = e(323384),
    td = e(866665),
    tA = e(808666),
    tf = e(687966),
    tg = e(273626),
    tm = e(429913),
    tp = e(860204),
    tx = e(366430),
    tI = e(928550),
    t_ = e(513772),
    tN = e(695311);
function tE(t) {
    let { user: n, activity: e, onAction: i, onClose: a } = t,
        { themeType: r } = (0, L.E)(),
        s = (0, tN.A)({ applicationId: e?.application_id, onClose: a }),
        o = (0, t_.l)({ activity: e ?? void 0, embeddedActivity: void 0, user: n, onClose: a }),
        c = (0, tI.dB)(e?.application_id),
        u = (0, tm.h)(e?.application_id);
    if (null == o && null != e && (0, f.A)(e))
        return (0, l.jsx)($.FD, {
            icon: tu.AppsIcon,
            text: J.intl.string(J.t.RscU7I),
            fullWidth: r !== tr.d.MODAL_V2,
            onClick: (t) => {
                (t.stopPropagation(),
                    null != u && (0, tx.U4)(u)
                        ? (i?.({ action: "PRESS_PLAY_BUTTON" }),
                          a?.(),
                          (0, tp.A)({ application: u, userId: n.id, activity: e }))
                        : null != c
                          ? tg.A.launchGame({ applicationId: c })
                          : (i?.({ action: "PRESS_PLAY_BUTTON" }), s()));
            },
        });
    if (null == o) return null;
    let { isJoining: d, handleJoinRequest: A, buttonCTA: g, tooltip: m, isEnabled: p, isEmbedded: x } = o,
        I = r !== tr.d.MODAL_V2;
    return (0, l.jsx)("div", {
        className: I ? ts.Ij : void 0,
        children: (0, l.jsx)(td.m, {
            text: m,
            asContainer: !p,
            children: (0, l.jsx)($.FD, {
                icon: x ? tA.DoorEnterIcon : tf.GameControllerIcon,
                text: g,
                disabled: !p,
                loading: d,
                fullWidth: I,
                onClick: (t) => {
                    (t.stopPropagation(), i?.({ action: x ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), A());
                },
            }),
        }),
    });
}
var tT = e(141628);
function th(t) {
    let { startAuthorization: n, onAction: e } = t,
        { newestAnalyticsLocation: i } = (0, x.Ay)(),
        { themeType: a } = (0, L.E)(),
        r = a === tr.d.MODAL_V2;
    return (0, l.jsx)($.FD, {
        icon: () => (0, l.jsx)(tT.ExperimentalGameControllerLinkIcon, {}),
        text: J.intl.string(J.t.sbdnpw),
        fullWidth: !r,
        onClick: (t) => {
            (t.stopPropagation(), e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), n({ analyticsLocations: [i] }));
        },
    });
}
var tC = e(626584),
    tS = e(652215);
function ty(t) {
    let { user: n, activity: e, onAction: i } = t,
        { themeType: a } = (0, L.E)(),
        r = a === tr.d.MODAL_V2;
    return (0, U.A)(e, tS.jUm.INSTANCE)
        ? (0, l.jsx)($.FD, {
              text: J.intl.string(J.t.vwl1PK),
              fullWidth: !r,
              onClick: (t) => {
                  (t.stopPropagation(),
                      i?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new tC.A("UserActivityActions").log("notify", n.id, e));
              },
          })
        : null;
}
var tv = e(573648),
    tO = e(522978),
    tj = e(417869);
function tP(t) {
    let { platformType: n, icon: e, onAction: i } = t,
        { newestAnalyticsLocation: a } = (0, x.Ay)(),
        { themeType: r } = (0, L.E)(),
        s = r === tr.d.MODAL_V2;
    return (0, M.bG)([tj.A], () => null != tj.A.getAccount(null, n))
        ? null
        : (0, l.jsx)($.FD, {
              icon: e,
              text: J.intl.formatToPlainString(J.t.XWSHTb, { platform: tv.A.get(n).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let e = n === tS.fg2.XBOX;
                  (i?.({ action: e ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, tO.A)({ platformType: n, location: a }));
              },
          });
}
var tR = e(890615),
    tL = e(378570),
    tb = e(129095),
    tM = e(734057),
    tU = e(576705),
    tD = e(977997);
function tG(t) {
    let { activity: n, onAction: e, onClose: i } = t,
        { themeType: a } = (0, L.E)(),
        r = a === tr.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, y.UW)(n) ?? {},
        c = (0, M.bG)([tD.A], () => null != s && tD.A.isInChannel(s), [s]),
        u = (0, M.bG)(
            [tM.A, tU.A],
            () => {
                let t = tM.A.getBasicChannel(s);
                return null != t && (0, tR.A)(t, tU.A);
            },
            [s],
        );
    return (0, y.Cy)(n) && u && null != o && null != s
        ? (0, l.jsx)($.FD, {
              text: J.intl.string(J.t.ZYO5OK),
              fullWidth: !r,
              disabled: c,
              onClick: function (t) {
                  null != o &&
                      null != s &&
                      (t.stopPropagation(),
                      e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      tb.CH(o, s),
                      (0, tL.iN)(s),
                      i?.());
              },
          })
        : null;
}
var tY = e(908289);
function tV(t) {
    let { activity: n, onAction: e } = t,
        { themeType: i } = (0, L.E)(),
        a = i === tr.d.MODAL_V2,
        r = (0, tY.A)(n);
    return (0, m.A)(n) && null != r
        ? (0, l.jsx)($.FD, {
              text: J.intl.string(J.t.I6JG46),
              fullWidth: !a,
              onClick: (t) => (t.stopPropagation(), e?.({ action: "PRESS_WATCH_BUTTON" }), window.open(r)),
          })
        : null;
}
var tw = e(985629);
function tk(t) {
    let { user: n, activity: e, onAction: i, onClose: a, application: r, containerClassName: o } = t,
        { themeType: c } = (0, L.E)(),
        u = (0, M.bG)([F.default], () => F.default.getId() === n.id),
        d = (0, k.JC)(r),
        A = (0, tt.o)(e?.application_id ?? r?.id) || (0, U.A)(e, tS.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: g } = (0, x.Ay)(p.A.USER_PROFILE_ACTIVITY_BUTTONS),
        I = (0, w.A)(e?.application_id),
        { fetched: _, canStartAuthorization: N, hasAlreadyLinked: E, startAuthorization: T } = (0, K.RD)(r),
        h = c === tr.d.MODAL || c === tr.d.MODAL_V2,
        C = c === tr.d.POPOUT,
        S = c === tr.d.MODAL_V2 ? ts.g6 : ts.Zu,
        v =
            I.length > 0
                ? (0, l.jsx)(Z.A, {
                      distributorCTAConfigs: I,
                      applicationId: e?.application_id ?? "",
                      analyticsLocations: g,
                      buttonVariant: "secondary",
                      fullWidth: c !== tr.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: i,
                      onClose: a,
                  })
                : null,
        O = (function () {
            if (u)
                return C && e?.type === s.$.PLAYING && null != r
                    ? (0, l.jsx)(q, { application: r, onAction: i, onClose: a })
                    : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
                return null != v
                    ? (0, l.jsxs)("div", {
                          className: S,
                          children: [(0, l.jsx)(tc, { user: n, activity: e, onAction: i }), v],
                      })
                    : (0, l.jsx)(tc, { user: n, activity: e, onAction: i });
            if (!A && d && null != r && !h) {
                let t = (0, l.jsx)(tw.A, { application: r, onAction: i, onClose: a, analyticsLocations: g });
                return null != v ? (0, l.jsxs)("div", { className: S, children: [t, v] }) : t;
            }
            if ((0, f.A)(e) || ((0, G.Ay)(e) && A)) {
                let t = (0, l.jsx)(tE, { user: n, activity: e, onAction: i, onClose: a });
                return null != v ? (0, l.jsxs)("div", { className: S, children: [t, v] }) : t;
            }
            if (_ && N && !E) {
                let t = (0, l.jsx)(th, { startAuthorization: T, onAction: i });
                return null != v ? (0, l.jsxs)("div", { className: S, children: [t, v] }) : t;
            }
            if (null != v) return v;
            if (!(0, D.A)(e)) {
                if ((0, V.A)(e))
                    return (0, l.jsx)(tP, { platformType: tS.fg2.XBOX, icon: () => (0, l.jsx)(te.A, {}), onAction: i });
                if ((0, Y.A)(e))
                    return (0, l.jsx)(tP, {
                        platformType: tS.fg2.PLAYSTATION,
                        icon: () => (0, l.jsx)(tn.A, {}),
                        onAction: i,
                    });
            }
            return (0, m.A)(e)
                ? (0, l.jsx)(tV, { activity: e, onAction: i })
                : (0, G.Ay)(e)
                  ? (0, l.jsx)(tE, { user: n, activity: e, onAction: i, onClose: a })
                  : (0, U.A)(e, tS.jUm.INSTANCE)
                    ? (0, l.jsx)(ty, { user: n, activity: e, onAction: i })
                    : (0, y.Cy)(e)
                      ? (0, l.jsx)(tG, { activity: e, onAction: i, onClose: a })
                      : null;
        })();
    return null == O ? null : (0, l.jsx)("div", { className: o, children: O });
}
var tW = e(282197),
    tB = e(624951),
    tH = e(584904),
    tz = e(351638),
    tX = e(531648),
    t$ = e(910607),
    tF = e(753713),
    tQ = e(285909),
    tJ = e(409626),
    tq = e(692969),
    tZ = e(534465),
    tK = e(487887);
function t0(t) {
    let {
            user: n,
            currentUser: e,
            activity: i,
            application: a,
            voiceGuild: M,
            voiceChannel: U,
            className: D,
            onClose: G,
            appContext: Y,
        } = t,
        V = (0, h.GV)(),
        w = (0, h.GV)(),
        { analyticsLocations: k } = (0, x.Ay)(p.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: W } = (0, L.E)(),
        B = (0, T.A)({ activity: i, user: n }),
        H = (0, v.A)({ display: "live", user: n, activity: i, entry: B, analyticsLocations: k }),
        z = (0, O.A)({ userId: n.id, onAction: H }),
        X = (0, I.Ay)(U),
        $ = (0, j.A)(i),
        F = null != $.text && "" !== $.text,
        { largeImage: q, smallImage: Z } = (0, _.XN)(i, a, "user_profile_activity_card"),
        K = (function (t) {
            let { location: n, user: e, currentUser: l, activity: i, application: a, entry: r, onClose: s } = t,
                o = (0, tq.A)({
                    location: n,
                    source: tJ.GameProfileSources.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, tZ.UE)({ user: e, activity: i, entry: r }),
                }),
                c = (0, tN.A)({ applicationId: a?.id, onClose: s }),
                u = (0, f.A)(i);
            return u && null != a
                ? c
                : !u && (0, g.A)(i)
                  ? o
                  : (0, A.A)(i) && e.id !== l.id
                    ? () => to({ activity: i, user: e, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: n,
            currentUser: e,
            activity: i,
            application: a,
            entry: B,
            onClose: G,
        });
    function tt() {
        return (0, m.A)(i) && null != U
            ? (0, l.jsxs)("div", {
                  className: ts.FH,
                  children: [
                      (0, l.jsx)(c.VoiceNormalIcon, { size: "xxs", color: u.A.colors.TEXT_DEFAULT, className: ts.Ow }),
                      (0, l.jsx)(tX.Q, { variant: "heading-xs/semibold", text: X, id: V }),
                  ],
              })
            : (0, g.A)(i) || (0, y.Cy)(i)
              ? (0, l.jsx)(tX.Q, { variant: "heading-xs/semibold", text: i.name, id: V })
              : null != i.details
                ? (0, l.jsx)(N.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(tX.Q, { variant: "heading-xs/semibold", text: i.details, id: V }),
                  })
                : (0, l.jsx)(tX.Q, { variant: "heading-xs/semibold", text: i.name, id: V });
    }
    function tn() {
        return i.type === s.$.HANG_STATUS
            ? null
            : (0, m.A)(i) && null != M
              ? (0, l.jsx)(tX.A, {
                    variant: "body-xs/normal",
                    text: J.intl.formatToPlainString(J.t["hq/Qze"], { guildName: M.name }),
                    onClick: () => {
                        ((0, S.u)(M.id), H({ action: "OPEN_VOICE_GUILD" }), G?.());
                    },
                })
              : (0, g.A)(i)
                ? (0, l.jsx)(N.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(tX.A, { variant: "body-xs/normal", text: i.details }),
                  })
                : (0, y.Cy)(i)
                  ? (0, l.jsx)(tX.A, { variant: "body-xs/normal", text: i?.assets?.small_text })
                  : (0, l.jsx)(N.O, {
                        href: i.state_url,
                        children: (0, l.jsx)(tX.A, { variant: "body-xs/normal", text: i.state }),
                    });
    }
    function te() {
        if (i.type === s.$.WATCHING) return null;
        if ((0, g.A)(i))
            return i.party?.size == null && i.application_id === tK.I4
                ? (0, l.jsxs)("div", {
                      className: ts.CI,
                      children: [
                          (0, l.jsx)(N.O, {
                              href: i.state_url,
                              children: (0, l.jsx)(tX.A, { variant: "body-xs/normal", text: i.state }),
                          }),
                          (0, l.jsx)(tX.A, {
                              variant: "body-xs/normal",
                              text: J.intl.formatToPlainString(J.t["u//9By"], {
                                  count: "0",
                                  max: a?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, f.A)(i) && i.party?.size != null && i.party?.size.length >= 2
                  ? (0, l.jsxs)("div", {
                        className: ts.CI,
                        children: [
                            (0, l.jsx)(N.O, {
                                href: i.state_url,
                                children: (0, l.jsx)(tX.A, { variant: "body-xs/normal", text: i.state }),
                            }),
                            (0, l.jsx)(tX.A, {
                                variant: "body-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? J.intl.formatToPlainString(J.t.IM4J4e, { count: i.party.size[0] })
                                        : J.intl.formatToPlainString(J.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, l.jsx)(N.O, {
                          href: i.state_url,
                          children: (0, l.jsx)(tX.A, { variant: "body-xs/normal", text: i.state }),
                      })
                    : null;
        if ((0, y.Cy)(i) && i.party?.size != null && i.party?.size.length >= 2) {
            let t = J.intl.formatToPlainString(J.t["JC/3xw"], {
                numSpeakers: i.party?.size[0],
                numListeners: i.party?.size[1] - i.party?.size[0],
            });
            return (0, l.jsx)(tX.A, { variant: "body-xs/normal", text: t });
        }
        return i.assets?.large_text != null
            ? (0, l.jsx)(N.O, {
                  href: i.assets?.large_url,
                  children: (0, l.jsx)(tX.A, { text: i.assets?.large_text, variant: "body-xs/normal" }),
              })
            : null;
    }
    function tl() {
        return (0, l.jsx)(tk, {
            containerClassName: ts.o1,
            activity: i,
            user: n,
            onAction: H,
            onClose: G,
            application: a,
        });
    }
    return (0, l.jsx)(x.f5, {
        value: k,
        children: (0, l.jsxs)(tH.A, {
            ref: z,
            className: r()(ts.Nr, D),
            onAction: H,
            onClose: G,
            "aria-labelledby": F ? `${w} ${V}` : V,
            children: [
                (0, l.jsx)(tz.A, {
                    textId: w,
                    ...$,
                    contextMenu: (0, l.jsx)(tQ.A, {
                        display: "live",
                        user: n,
                        activity: i,
                        entry: B,
                        onClose: G,
                        appContext: Y,
                    }),
                }),
                (0, l.jsx)(C.A, {
                    applicationId: a?.id,
                    questContent: o.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let e, a;
                        return (0, l.jsxs)("div", {
                            className: ts.rf,
                            ref: t,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: ts.Qs,
                                    children: [
                                        !n.bot &&
                                            ((e = (0, A.A)(i) ? "crunchyroll" : "default"),
                                            (a = W === tr.d.MODAL_V2 ? E.w.SIZE_100 : E.w.SIZE_60),
                                            null == K
                                                ? (0, l.jsx)(E.d, {
                                                      image: q,
                                                      smallImage: Z,
                                                      size: a,
                                                      aspectRatio: e,
                                                      className: ts.Sl,
                                                  })
                                                : (0, l.jsx)(E.d, {
                                                      image: q,
                                                      smallImage: Z,
                                                      size: a,
                                                      className: ts.mM,
                                                      aspectRatio: e,
                                                      onClick: (t) => {
                                                          (H({ action: "PRESS_IMAGE" }), K(t));
                                                      },
                                                  })),
                                        (0, l.jsxs)("div", {
                                            className: ts.zH,
                                            children: [
                                                null == K
                                                    ? (0, l.jsxs)("div", { children: [tt(), tn(), te()] })
                                                    : (0, l.jsxs)(d.D, {
                                                          className: ts.sd,
                                                          onClick: (t) => {
                                                              (H({ action: "PRESS_TEXT" }), K(t));
                                                          },
                                                          children: [tt(), tn(), te()],
                                                      }),
                                                !n.bot && (0, l.jsx)(tW.A, { user: n, activity: i, className: ts.jp }),
                                                (function () {
                                                    if (!(0, P.A)(i)) return null;
                                                    let { start: t, end: n } = i.timestamps;
                                                    return (0, l.jsx)(tF.A, { start: t, end: n });
                                                })(),
                                                W === tr.d.MODAL_V2 && tl(),
                                            ],
                                        }),
                                        W === tr.d.MODAL && tl(),
                                    ],
                                }),
                                null == M || null == U
                                    ? null
                                    : (0, l.jsx)(t$.A, { user: n, guild: M, channel: U, onAction: H, onClose: G }),
                            ],
                        });
                    },
                }),
                W !== tr.d.MODAL &&
                    W !== tr.d.MODAL_V2 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            tl(),
                            (0, l.jsx)(b.A, {
                                className: ts.AB,
                                userId: n.id,
                                activityApplication: a,
                                onClickViewMore: (t) => {
                                    (t.stopPropagation(),
                                        H({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        G?.(),
                                        (0, R.openUserProfileModal)({ userId: n.id, tabSection: Q.RP.WIDGETS }));
                                },
                            }),
                        ],
                    }),
                (0, l.jsx)(tB.A, { applicationId: a?.id, onAction: H, onClose: G, activity: i }),
            ],
        }),
    });
}
