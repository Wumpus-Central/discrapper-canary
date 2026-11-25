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
    x = e(765379),
    m = e(672979),
    f = e(960076),
    g = e(793574),
    p = e(688810),
    _ = e(47167),
    I = e(325158),
    E = e(662010),
    T = e(623671),
    N = e(365185),
    h = e(915089),
    C = e(932413),
    v = e(345942),
    y = e(82149),
    S = e(92240),
    j = e(257367),
    O = e(770689),
    P = e(53257),
    L = e(100663),
    R = e(939496),
    b = e(964195),
    M = e(855986),
    U = e(55730),
    G = e(682261),
    D = e(874546),
    V = e(141639),
    Y = e(61330),
    w = e(73963),
    k = e(359549),
    W = e(540185),
    z = e(454908),
    B = e(289173),
    H = e(735321),
    $ = e(527212),
    F = e(993401),
    X = e(46653),
    Q = e(518477),
    J = e(792996);
function Z(t) {
    let { application: n, onAction: e, onClose: a } = t,
        r = (0, M.bG)([X.default], () => X.default.getId()),
        s = (0, $.Ay)(r, null),
        o = n.getCanonicalGameId(),
        { data: c } = (0, z.I)(o),
        u = i.useMemo(
            () =>
                !(
                    null == c ||
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof B.Yy && t.type === W.x.CURRENT_GAMES && t.games?.some((t) => t.gameId === o),
                    )
                ) && (0, H.XX)(c),
            [o, s?.widgets, c],
        ),
        d = i.useCallback(
            (t) => {
                null != o &&
                    (t.stopPropagation(),
                    e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, H.ew)({ widgetType: W.x.CURRENT_GAMES, game: { gameId: o }, ignoreMaxGames: !0 }),
                    (0, L.openUserProfileModal)({
                        userId: r,
                        tabSection: Q.RP.WIDGETS,
                        scrollTarget: W.x.CURRENT_GAMES,
                    }),
                    a?.());
            },
            [o, r, e, a],
        );
    return u ? (0, l.jsx)(F.FD, { text: J.intl.string(J.t.BjYzmC), onClick: d, fullWidth: !0 }) : null;
}
var q = e(607781),
    K = e(660298),
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
        { themeType: a } = (0, R.E)();
    if (e?.buttons == null || e.buttons.length < 1) return null;
    let r = (0, A.A)(e);
    return a === tr.d.MODAL_V2
        ? (0, l.jsx)("div", {
              className: ts.fO,
              children: e.buttons.map((t, a) =>
                  (0, l.jsx)(
                      F.FD,
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
                      F.FD,
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
    tx = e(687966),
    tm = e(273626),
    tf = e(429913),
    tg = e(860204),
    tp = e(366430),
    t_ = e(928550),
    tI = e(513772),
    tE = e(695311);
function tT(t) {
    let { user: n, activity: e, onAction: i, onClose: a } = t,
        { themeType: r } = (0, R.E)(),
        s = (0, tE.A)({ applicationId: e?.application_id, onClose: a }),
        o = (0, tI.l)({ activity: e ?? void 0, embeddedActivity: void 0, user: n, onClose: a }),
        c = (0, t_.dB)(e?.application_id),
        u = (0, tf.h)(e?.application_id);
    if (null == o && null != e && (0, x.A)(e))
        return (0, l.jsx)(F.FD, {
            icon: tu.AppsIcon,
            text: J.intl.string(J.t.RscU7I),
            fullWidth: r !== tr.d.MODAL_V2,
            onClick: (t) => {
                (t.stopPropagation(),
                    null != u && (0, tp.U4)(u)
                        ? (i?.({ action: "PRESS_PLAY_BUTTON" }),
                          a?.(),
                          (0, tg.A)({ application: u, userId: n.id, activity: e }))
                        : null != c
                          ? tm.A.launchGame({ applicationId: c })
                          : (i?.({ action: "PRESS_PLAY_BUTTON" }), s()));
            },
        });
    if (null == o) return null;
    let { isJoining: d, handleJoinRequest: A, buttonCTA: m, tooltip: f, isEnabled: g, isEmbedded: p } = o,
        _ = r !== tr.d.MODAL_V2;
    return (0, l.jsx)("div", {
        className: _ ? ts.Ij : void 0,
        children: (0, l.jsx)(td.m, {
            text: f,
            asContainer: !g,
            children: (0, l.jsx)(F.FD, {
                icon: p ? tA.DoorEnterIcon : tx.GameControllerIcon,
                text: m,
                disabled: !g,
                loading: d,
                fullWidth: _,
                onClick: (t) => {
                    (t.stopPropagation(), i?.({ action: p ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), A());
                },
            }),
        }),
    });
}
var tN = e(141628);
function th(t) {
    let { startAuthorization: n, onAction: e } = t,
        { newestAnalyticsLocation: i } = (0, p.Ay)(),
        { themeType: a } = (0, R.E)(),
        r = a === tr.d.MODAL_V2;
    return (0, l.jsx)(F.FD, {
        icon: () => (0, l.jsx)(tN.ExperimentalGameControllerLinkIcon, {}),
        text: J.intl.string(J.t.sbdnpw),
        fullWidth: !r,
        onClick: (t) => {
            (t.stopPropagation(), e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), n({ analyticsLocations: [i] }));
        },
    });
}
var tC = e(626584),
    tv = e(652215);
function ty(t) {
    let { user: n, activity: e, onAction: i } = t,
        { themeType: a } = (0, R.E)(),
        r = a === tr.d.MODAL_V2;
    return (0, U.A)(e, tv.jUm.INSTANCE)
        ? (0, l.jsx)(F.FD, {
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
var tS = e(573648),
    tj = e(522978),
    tO = e(417869);
function tP(t) {
    let { platformType: n, icon: e, onAction: i } = t,
        { newestAnalyticsLocation: a } = (0, p.Ay)(),
        { themeType: r } = (0, R.E)(),
        s = r === tr.d.MODAL_V2;
    return (0, M.bG)([tO.A], () => null != tO.A.getAccount(null, n))
        ? null
        : (0, l.jsx)(F.FD, {
              icon: e,
              text: J.intl.formatToPlainString(J.t.XWSHTb, { platform: tS.A.get(n).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let e = n === tv.fg2.XBOX;
                  (i?.({ action: e ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, tj.A)({ platformType: n, location: a }));
              },
          });
}
var tL = e(890615),
    tR = e(378570),
    tb = e(129095),
    tM = e(734057),
    tU = e(576705),
    tG = e(977997);
function tD(t) {
    let { activity: n, onAction: e, onClose: i } = t,
        { themeType: a } = (0, R.E)(),
        r = a === tr.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, y.UW)(n) ?? {},
        c = (0, M.bG)([tG.A], () => null != s && tG.A.isInChannel(s), [s]),
        u = (0, M.bG)(
            [tM.A, tU.A],
            () => {
                let t = tM.A.getBasicChannel(s);
                return null != t && (0, tL.A)(t, tU.A);
            },
            [s],
        );
    return (0, y.Cy)(n) && u && null != o && null != s
        ? (0, l.jsx)(F.FD, {
              text: J.intl.string(J.t.ZYO5OK),
              fullWidth: !r,
              disabled: c,
              onClick: function (t) {
                  null != o &&
                      null != s &&
                      (t.stopPropagation(),
                      e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      tb.CH(o, s),
                      (0, tR.iN)(s),
                      i?.());
              },
          })
        : null;
}
var tV = e(908289);
function tY(t) {
    let { activity: n, onAction: e } = t,
        { themeType: i } = (0, R.E)(),
        a = i === tr.d.MODAL_V2,
        r = (0, tV.A)(n);
    return (0, f.A)(n) && null != r
        ? (0, l.jsx)(F.FD, {
              text: J.intl.string(J.t.I6JG46),
              fullWidth: !a,
              onClick: (t) => (t.stopPropagation(), e?.({ action: "PRESS_WATCH_BUTTON" }), window.open(r)),
          })
        : null;
}
var tw = e(985629);
function tk(t) {
    let { user: n, activity: e, onAction: i, onClose: a, application: r, containerClassName: o } = t,
        { themeType: c } = (0, R.E)(),
        u = (0, M.bG)([X.default], () => X.default.getId() === n.id),
        d = (0, k.JC)(r),
        A = (0, tt.o)(e?.application_id ?? r?.id) || (0, U.A)(e, tv.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: m } = (0, p.Ay)(g.A.USER_PROFILE_ACTIVITY_BUTTONS),
        _ = (0, w.A)(e?.application_id),
        { fetched: I, canStartAuthorization: E, hasAlreadyLinked: T, startAuthorization: N } = (0, K.RD)(r),
        h = c === tr.d.MODAL || c === tr.d.MODAL_V2,
        C = c === tr.d.POPOUT,
        v = c === tr.d.MODAL_V2 ? ts.g6 : ts.Zu,
        S =
            _.length > 0
                ? (0, l.jsx)(q.A, {
                      distributorCTAConfigs: _,
                      applicationId: e?.application_id ?? "",
                      analyticsLocations: m,
                      buttonVariant: "secondary",
                      fullWidth: c !== tr.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: i,
                      onClose: a,
                  })
                : null,
        j = (function () {
            if (u)
                return C && e?.type === s.$.PLAYING && null != r
                    ? (0, l.jsx)(Z, { application: r, onAction: i, onClose: a })
                    : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
                return null != S
                    ? (0, l.jsxs)("div", {
                          className: v,
                          children: [(0, l.jsx)(tc, { user: n, activity: e, onAction: i }), S],
                      })
                    : (0, l.jsx)(tc, { user: n, activity: e, onAction: i });
            if (!A && d && null != r && !h) {
                let t = (0, l.jsx)(tw.A, { application: r, onAction: i, onClose: a, analyticsLocations: m });
                return null != S ? (0, l.jsxs)("div", { className: v, children: [t, S] }) : t;
            }
            if ((0, x.A)(e) || ((0, D.Ay)(e) && A)) {
                let t = (0, l.jsx)(tT, { user: n, activity: e, onAction: i, onClose: a });
                return null != S ? (0, l.jsxs)("div", { className: v, children: [t, S] }) : t;
            }
            if (I && E && !T) {
                let t = (0, l.jsx)(th, { startAuthorization: N, onAction: i });
                return null != S ? (0, l.jsxs)("div", { className: v, children: [t, S] }) : t;
            }
            if (null != S) return S;
            if (!(0, G.A)(e)) {
                if ((0, Y.A)(e))
                    return (0, l.jsx)(tP, { platformType: tv.fg2.XBOX, icon: () => (0, l.jsx)(te.A, {}), onAction: i });
                if ((0, V.A)(e))
                    return (0, l.jsx)(tP, {
                        platformType: tv.fg2.PLAYSTATION,
                        icon: () => (0, l.jsx)(tn.A, {}),
                        onAction: i,
                    });
            }
            return (0, f.A)(e)
                ? (0, l.jsx)(tY, { activity: e, onAction: i })
                : (0, D.Ay)(e)
                  ? (0, l.jsx)(tT, { user: n, activity: e, onAction: i, onClose: a })
                  : (0, U.A)(e, tv.jUm.INSTANCE)
                    ? (0, l.jsx)(ty, { user: n, activity: e, onAction: i })
                    : (0, y.Cy)(e)
                      ? (0, l.jsx)(tD, { activity: e, onAction: i, onClose: a })
                      : null;
        })();
    return null == j ? null : (0, l.jsx)("div", { className: o, children: j });
}
var tW = e(282197),
    tz = e(624951),
    tB = e(584904),
    tH = e(351638),
    t$ = e(531648),
    tF = e(910607),
    tX = e(753713),
    tQ = e(285909),
    tJ = e(409626),
    tZ = e(692969),
    tq = e(534465),
    tK = e(487887);
function t0(t) {
    let {
            user: n,
            currentUser: e,
            activity: i,
            application: a,
            voiceGuild: M,
            voiceChannel: U,
            className: G,
            onClose: D,
            appContext: V,
        } = t,
        Y = (0, h.GV)(),
        w = (0, h.GV)(),
        { analyticsLocations: k } = (0, p.Ay)(g.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: W } = (0, R.E)(),
        z = (0, N.A)({ activity: i, user: n }),
        B = (0, S.A)({ display: "live", user: n, activity: i, entry: z, analyticsLocations: k }),
        H = (0, j.A)({ userId: n.id, onAction: B }),
        $ = (0, _.Ay)(U),
        F = (0, O.A)(i),
        X = null != F.text && "" !== F.text,
        { largeImage: Z, smallImage: q } = (0, I.XN)(i, a, "user_profile_activity_card"),
        K = (function (t) {
            let { location: n, user: e, currentUser: l, activity: i, application: a, entry: r, onClose: s } = t,
                o = (0, tZ.A)({
                    location: n,
                    source: tJ.GameProfileSources.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, tq.UE)({ user: e, activity: i, entry: r }),
                }),
                c = (0, tE.A)({ applicationId: a?.id, onClose: s }),
                u = (0, x.A)(i);
            return u && null != a
                ? c
                : !u && (0, m.A)(i)
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
            entry: z,
            onClose: D,
        });
    function tt() {
        return (0, f.A)(i) && null != U
            ? (0, l.jsxs)("div", {
                  className: ts.FH,
                  children: [
                      (0, l.jsx)(c.VoiceNormalIcon, { size: "xxs", color: u.A.colors.TEXT_DEFAULT, className: ts.Ow }),
                      (0, l.jsx)(t$.Q, { variant: "heading-xs/semibold", text: $, id: Y }),
                  ],
              })
            : (0, m.A)(i) || (0, y.Cy)(i)
              ? (0, l.jsx)(t$.Q, { variant: "heading-xs/semibold", text: i.name, id: Y })
              : null != i.details
                ? (0, l.jsx)(E.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(t$.Q, { variant: "heading-xs/semibold", text: i.details, id: Y }),
                  })
                : (0, l.jsx)(t$.Q, { variant: "heading-xs/semibold", text: i.name, id: Y });
    }
    function tn() {
        return i.type === s.$.HANG_STATUS
            ? null
            : (0, f.A)(i) && null != M
              ? (0, l.jsx)(t$.A, {
                    variant: "body-xs/normal",
                    text: J.intl.formatToPlainString(J.t["hq/Qze"], { guildName: M.name }),
                    onClick: () => {
                        ((0, v.u)(M.id), B({ action: "OPEN_VOICE_GUILD" }), D?.());
                    },
                })
              : (0, m.A)(i)
                ? (0, l.jsx)(E.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(t$.A, { variant: "body-xs/normal", text: i.details }),
                  })
                : (0, y.Cy)(i)
                  ? (0, l.jsx)(t$.A, { variant: "body-xs/normal", text: i?.assets?.small_text })
                  : (0, l.jsx)(E.O, {
                        href: i.state_url,
                        children: (0, l.jsx)(t$.A, { variant: "body-xs/normal", text: i.state }),
                    });
    }
    function te() {
        if (i.type === s.$.WATCHING) return null;
        if ((0, m.A)(i))
            return i.party?.size == null && i.application_id === tK.I4
                ? (0, l.jsxs)("div", {
                      className: ts.CI,
                      children: [
                          (0, l.jsx)(E.O, {
                              href: i.state_url,
                              children: (0, l.jsx)(t$.A, { variant: "body-xs/normal", text: i.state }),
                          }),
                          (0, l.jsx)(t$.A, {
                              variant: "body-xs/normal",
                              text: J.intl.formatToPlainString(J.t["u//9By"], {
                                  count: "0",
                                  max: a?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, x.A)(i) && i.party?.size != null && i.party?.size.length >= 2
                  ? (0, l.jsxs)("div", {
                        className: ts.CI,
                        children: [
                            (0, l.jsx)(E.O, {
                                href: i.state_url,
                                children: (0, l.jsx)(t$.A, { variant: "body-xs/normal", text: i.state }),
                            }),
                            (0, l.jsx)(t$.A, {
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
                    ? (0, l.jsx)(E.O, {
                          href: i.state_url,
                          children: (0, l.jsx)(t$.A, { variant: "body-xs/normal", text: i.state }),
                      })
                    : null;
        if ((0, y.Cy)(i) && i.party?.size != null && i.party?.size.length >= 2) {
            let t = J.intl.formatToPlainString(J.t["JC/3xw"], {
                numSpeakers: i.party?.size[0],
                numListeners: i.party?.size[1] - i.party?.size[0],
            });
            return (0, l.jsx)(t$.A, { variant: "body-xs/normal", text: t });
        }
        return i.assets?.large_text != null
            ? (0, l.jsx)(E.O, {
                  href: i.assets?.large_url,
                  children: (0, l.jsx)(t$.A, { text: i.assets?.large_text, variant: "body-xs/normal" }),
              })
            : null;
    }
    function tl() {
        return (0, l.jsx)(tk, {
            containerClassName: ts.o1,
            activity: i,
            user: n,
            onAction: B,
            onClose: D,
            application: a,
        });
    }
    return (0, l.jsx)(p.f5, {
        value: k,
        children: (0, l.jsxs)(tB.A, {
            ref: H,
            className: r()(ts.Nr, G),
            onAction: B,
            onClose: D,
            "aria-labelledby": X ? `${w} ${Y}` : Y,
            children: [
                (0, l.jsx)(tH.A, {
                    textId: w,
                    ...F,
                    contextMenu: (0, l.jsx)(tQ.A, {
                        display: "live",
                        user: n,
                        activity: i,
                        entry: z,
                        onClose: D,
                        appContext: V,
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
                                            (a = W === tr.d.MODAL_V2 ? T.w.SIZE_100 : T.w.SIZE_60),
                                            null == K
                                                ? (0, l.jsx)(T.d, {
                                                      image: Z,
                                                      smallImage: q,
                                                      size: a,
                                                      aspectRatio: e,
                                                      className: ts.Sl,
                                                  })
                                                : (0, l.jsx)(T.d, {
                                                      image: Z,
                                                      smallImage: q,
                                                      size: a,
                                                      className: ts.mM,
                                                      aspectRatio: e,
                                                      onClick: (t) => {
                                                          (B({ action: "PRESS_IMAGE" }), K(t));
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
                                                              (B({ action: "PRESS_TEXT" }), K(t));
                                                          },
                                                          children: [tt(), tn(), te()],
                                                      }),
                                                !n.bot && (0, l.jsx)(tW.A, { user: n, activity: i, className: ts.jp }),
                                                (function () {
                                                    if (!(0, P.A)(i)) return null;
                                                    let { start: t, end: n } = i.timestamps;
                                                    return (0, l.jsx)(tX.A, { start: t, end: n });
                                                })(),
                                                W === tr.d.MODAL_V2 && tl(),
                                            ],
                                        }),
                                        W === tr.d.MODAL && tl(),
                                    ],
                                }),
                                null == M || null == U
                                    ? null
                                    : (0, l.jsx)(tF.A, { user: n, guild: M, channel: U, onAction: B, onClose: D }),
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
                                        B({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        D?.(),
                                        (0, L.openUserProfileModal)({ userId: n.id, tabSection: Q.RP.WIDGETS }));
                                },
                            }),
                        ],
                    }),
                (0, l.jsx)(tz.A, { applicationId: a?.id, onAction: B, onClose: D, activity: i }),
            ],
        }),
    });
}
