n.d(t, { A: () => tv });
var i,
    l = n(627968);
n(321073);
var s = n(64700),
    a = n(17928),
    r = n(834730),
    o = n(138175),
    d = n(192308),
    c = n(287809),
    u = n(562153),
    m = n(652215),
    h = n(985018),
    g = n(783198);
function A(e, t, n) {
    switch (t) {
        case m.xL.LISTEN:
            return h.intl.formatToPlainString(h.t["/8czH4"], { name: e });
        case m.xL.WATCH:
            return h.intl.formatToPlainString(h.t.BBJXVk, { name: e });
        case m.xL.JOIN:
            return n ? void 0 : h.intl.string(h.t.pkq6Vq);
        case m.xL.STREAM_REQUEST:
            return h.intl.string(g.default.DKHhec);
        case m.xL.JOIN_REQUEST:
        default:
            return h.intl.string(h.t.Ckxb6j);
    }
}
function p(e, t, n) {
    return e.author.id === n
        ? h.intl.string(g.default["8B3U5O"])
        : h.intl.formatToPlainString(g.default["d/qbC0"], { username: (0, u.mG)(t.guild_id, t.id, e.author) });
}
function x(e, t, n, i, l) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = c.default.getUser(n.getRecipientId());
            if (null != e)
                return l
                    ? h.intl.formatToPlainString(h.t.JddpN2, { username: e.globalName, appName: t })
                    : h.intl.formatToPlainString(h.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return l
            ? h.intl.formatToPlainString(h.t["2N1kNS"], { appName: t })
            : h.intl.formatToPlainString(h.t.IA6uDV, { appName: t });
    }
    return l
        ? h.intl.formatToPlainString(h.t.XE8axA, { username: e.author.globalName, appName: t })
        : h.intl.formatToPlainString(h.t.hgcjOn, { username: e.author.globalName, appName: t });
}
var f = n(793574),
    C = n(688810),
    E = n(572211),
    v = n(354287),
    I = n(112150),
    _ = n(328153),
    j = n(560595),
    N = n(616356),
    T = n(760751),
    y = n(763827),
    S = n(486020),
    b = n(723702),
    k = n(935208),
    L = n(820672),
    R = n(768349);
function P(e) {
    let { currentUserId: t, message: i, application: s, channel: r, analyticsLocations: o, onView: c } = e,
        { staticBannerSrc: u, videoBannerSrc: m, bannerAspectRatio: A } = (0, I.f)(s),
        x = S.Ay.getApplicationIconURL({ id: s.id, icon: s.icon }),
        P = (0, a.bG)([_.Ay, T.A], () =>
            _.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === s.id) return !0;
                let n = T.A.getGameByApplication(s);
                return null != n && t === n.id;
            }),
        ),
        M = (0, a.bG)([N.A], () => N.A.getCurrentUserActiveStream()),
        D = (0, a.bG)([y.A], () => y.A.getChannelId()),
        w = k.default.extractTimestamp(i.id) + L.M < Date.now(),
        O = (0, l.jsx)(l.Fragment, { children: p(i, r, t) }),
        { analyticsLocations: U } = (0, C.Ay)(o, f.A.REQUEST_TO_STREAM_INVITE_EMBED),
        G = h.intl.string(g.default["5+172e"]),
        V = !1;
    return (
        w
            ? ((G = h.intl.string(g.default.u4QmWl)), (V = !0))
            : null != M
              ? ((G = h.intl.string(g.default.P0wwmM)), (V = !0))
              : D !== r.id
                ? ((G = h.intl.string(g.default.qRXats)), (V = !0))
                : null == P && ((G = h.intl.string(g.default["43zohO"])), (V = !0)),
        (0, l.jsx)(E.h, {
            header: h.intl.string(g.default.nAyuPp),
            title: s.name,
            staticBannerSrc: u,
            videoBannerSrc: m,
            bannerAspectRatio: A,
            iconSrc: x ?? void 0,
            info: O,
            actions:
                i.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: v.kY.STREAM,
                              disabled: V,
                              onClick: () => {
                                  null != P &&
                                      ((0, b.isWindows)()
                                          ? (0, j.A)(P.pid)
                                          : (0, d.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("77598"),
                                                    n.e("17918"),
                                                    n.e("98552"),
                                                    n.e("44801"),
                                                    n.e("38601"),
                                                    n.e("36946"),
                                                    n.e("6809"),
                                                    n.e("25241"),
                                                    n.e("44727"),
                                                    n.e("6565"),
                                                    n.e("14304"),
                                                    n.e("13337"),
                                                    n.e("82001"),
                                                    n.e("93609"),
                                                    n.e("90088"),
                                                ]).then(n.bind(n, 266536));
                                                return (t) => (0, l.jsx)(e, { ...t, analyticsLocations: U });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: s.id,
                linkType: R.J.REQUEST_TO_STREAM,
                guildId: r.guild_id,
                channelId: r.id,
                messageId: i.id,
                onView: c,
                isDeadEnd: w,
            },
        })
    );
}
var M = n(666176),
    D = n(495544),
    w = n(629016),
    O = n(375492),
    U = n(290863),
    G = n(461213),
    V = n(454292);
function B(e) {
    return e.activity?.type === m.xL.JOIN_REQUEST;
}
var H = n(125017),
    F = n(104171),
    z = n(554146),
    Y = n(43105),
    W = n(414499),
    K = n(116833),
    J = n(735991),
    q = n(945810);
let Z = (0, q.mj)({
        name: "2025-12-game-invite-account-linking-entry-point",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    X = (0, q.mj)({
        name: "2026-04-require-account-link-game-invite",
        kind: "user",
        defaultConfig: { required: !1 },
        variations: { 0: { required: !1 }, 1: { required: !0 } },
    });
var $ = n(691540),
    Q = n(97483),
    ee = n(475743),
    et = n(942370),
    en = n(311350);
let ei = "in-game-auth-check-modal";
var el = n(46225),
    es = n(587895),
    ea = n(574660),
    er = n(379848),
    eo = n(409626),
    ed = n(692969),
    ec = n(928550),
    eu = n(232835),
    em = n(970928);
let eh = 2 * n(927813).A.Millis.HOUR;
function eg(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        l = null != i && e.party?.id !== i,
        s = k.default.extractTimestamp(t.id) + eh < Date.now(),
        a = null != e.application_id && e.application_id !== n;
    return !l && !s && !a;
}
var eA = n(737393),
    ep = n(835517),
    ex = n(228366),
    ef = n(635377);
let eC = new (n.n(ef)())({ max: 500 });
class eE extends a.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return eC.get(t);
    }
}
let ev = new eE(ex.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (eC.get(t) === n) return !1;
        eC.set(t, n);
    },
});
var eI = n(503698),
    e_ = n.n(eI),
    ej = n(349288),
    eN = n(141628),
    eT = n(780907),
    ey = n(137177),
    eS = n(763754),
    eb = n(447215),
    ek = n(888675),
    eL = n(110259),
    eR = n(139286);
function eP(e, t) {
    (0, eR.A)(
        { name: eL.ImpressionNames.CLOUD_PLAY_CTA, type: eL.ImpressionTypes.VIEW, properties: { location_stack: t } },
        { disableTrack: !e },
    );
}
var eM = n(193018),
    eD = n(444282);
function ew(e) {
    let { message: t, applicationName: n, iconSrc: i, channel: s, currentUserId: a, viewAction: o } = e,
        d = (0, eS.Ay)(t),
        c = (0, eb.P)({ user: t.author, channelId: s.id, guildId: s.guild_id, messageId: t.id })(d);
    return (0, l.jsx)(ek.A, {
        compact: !1,
        children: h.intl.format(a === t.author.id ? h.t.anvg2q : h.t.AxVbYF, {
            username: d.nick,
            usernameHook: c,
            applicationHook: () => {
                let e = null != o ? ej.Anchor : "div";
                return (0, l.jsxs)(e, {
                    onClick: o,
                    className: eM.Lf,
                    children: [
                        (0, l.jsx)("img", {
                            alt: h.intl.string(h.t["2B/phM"]),
                            src: i,
                            className: e_()(eD.Gt, ey.M.XSMALL),
                        }),
                        (0, l.jsx)(r.E, { variant: "text-sm/semibold", color: "text-muted", children: n }),
                    ],
                });
            },
        }),
    });
}
function eO(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: o,
            header: d,
            currentUserId: c,
            launchableAppId: u,
            isEmbeddedApplication: g,
            tryWithGdnAction: A,
            staticBannerSrc: f,
            onClickContent: C,
            iconSrc: I,
            onView: _,
            presenceActivity: j,
            analyticsLocations: N,
            showAuthButton: T,
            requireAccountLink: y,
            startAuthorization: S,
            accountLinkButtonRef: b,
            renderAccountLinkUpsell: k,
        } = e,
        L = (0, a.bG)([eu.A], () => eu.A.getMessages(o.id)),
        { actions: P, hasAccountLinkButton: M } = s.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (y && null != u
                    ? ((e = [
                          {
                              label: h.intl.string(h.t.lw71Nf),
                              trackingArea: v.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  S({ analyticsLocations: N });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != u
                      ? (e = [
                            {
                                label: h.intl.string(h.t["s+J8Dl"]),
                                trackingArea: v.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    eT.Ay.launch({ applicationId: u, embedded: g });
                                },
                            },
                        ])
                      : null != A && ((e = [A]), (i = !1)),
                e.length > 0)
            ) {
                var s, a;
                if (
                    ((s = t.id),
                    (a = n.id),
                    L.hasAnyAfter(
                        s,
                        (e) =>
                            null != e.activity &&
                            e.application?.id === a &&
                            e.activity.type === m.xL.JOIN &&
                            !eg(j, e, a),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                T &&
                    i &&
                    (e.push({
                        label: h.intl.string(h.t.lw71Nf),
                        trackingArea: v.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            S({ analyticsLocations: N });
                        },
                        icon: eN.A,
                        iconButton: !0,
                        buttonRef: b,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [y, g, u, A, L, j, n.id, t.id, T, S, N, b]);
    eP(
        P.some((e) => e.trackingArea === v.kY.CLOUD_PLAY),
        N,
    );
    let D = P.length > 0,
        w = s.useMemo(
            () =>
                (0, l.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eM.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (function (e, t, n, i, l) {
                        switch (e.activity?.type) {
                            case m.xL.LISTEN:
                            case m.xL.WATCH:
                            case m.xL.JOIN:
                                return h.intl.string(l ? h.t.x1UXGR : h.t["Ek+51n"]);
                            case m.xL.STREAM_REQUEST:
                                return p(e, n, i);
                            case m.xL.JOIN_REQUEST:
                            default:
                                return x(e, t, n, i, !0);
                        }
                    })(t, i, o, c, D),
                }),
            [t, i, o, c, D],
        );
    return 0 === P.length
        ? (0, l.jsx)(ew, { message: t, applicationName: i, iconSrc: I, channel: o, currentUserId: c, viewAction: C })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(E.h, {
                      header: d,
                      title: i,
                      staticBannerSrc: f,
                      onClickBanner: C,
                      bannerAspectRatio: E.u.ACTIVITY,
                      iconSrc: I ?? void 0,
                      info: w,
                      actions: P,
                      primaryActionFirst: !0,
                      onClickContent: C,
                      trackingConfig: {
                          id: n.id,
                          linkType: R.J.RICH_PRESENCE_INVITE,
                          onView: _,
                          referrerId: t.author.id,
                          guildId: o.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  M ? k() : null,
              ],
          });
}
var eU = n(379834),
    eG = n(738678),
    eV = n(27989),
    eB = n(646270),
    eH = n(610509),
    eF = n(22363),
    ez = n(802516),
    eY = n(31300),
    eW = n(687966),
    eK = n(825860),
    eJ = n(308368),
    eq = n(729937),
    eZ = n(85451),
    eX = n(583846),
    e$ = n(375802),
    eQ = n(205184),
    e0 = n(689168),
    e1 = n(403362),
    e2 = n(206589);
n(938796);
var e3 = n(665260),
    e9 = n(574381),
    e4 = n(134861),
    e5 = n(528767),
    e6 = n(182892),
    e7 = n(833349),
    e8 = n(287613),
    te = n(702631),
    tt = n(946255),
    tn =
        (((i = {}).DESKTOP = "desktop"),
        (i.MOBILE = "mobile"),
        (i.ANDROID = "android"),
        (i.IOS = "ios"),
        (i.PLAYSTATION = "playstation"),
        (i.XBOX = "xbox"),
        (i.VR = "vr"),
        i);
m.yTV.DESKTOP,
    m.yTV.ANDROID,
    m.yTV.IOS,
    m.yTV.XBOX,
    m.yTV.PS4,
    m.yTV.PS5,
    m.yTV.SAMSUNG,
    m.yTV.EMBEDDED,
    m.yTV.META_QUEST;
let ti = [],
    tl = (e) => {
        let { width: t, height: n, color: i } = e;
        return (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            viewBox: "0 0 15 9",
            fill: "none",
            children: [
                (0, l.jsx)("path", {
                    fill: i,
                    d: "M14.41 7.85a6.97 6.97 0 0 0-1.983-3.898 7.003 7.003 0 0 0-1.234-.98l.008-.013.421-.727.412-.71.295-.51a.64.64 0 0 0-1.105-.643l-.296.51-.411.71-.422.728-.046.08-.063-.025a6.969 6.969 0 0 0-2.562-.457 6.972 6.972 0 0 0-2.47.477l-.042-.075-.421-.727-.412-.71-.296-.51a.638.638 0 1 0-1.105.642l.295.51.412.71.421.728.003.006a7.027 7.027 0 0 0-2.52 2.718 6.972 6.972 0 0 0-.748 2.473h13.908a7.015 7.015 0 0 0-.04-.307Z",
                }),
                (0, l.jsx)("path", {
                    fill: "#202124",
                    d: "M11.113 6.232c.278-.185.319-.614.09-.958-.228-.344-.639-.472-.917-.286-.278.185-.319.614-.09.957.228.344.639.472.917.287Zm-6.306-.286c.228-.343.188-.772-.09-.957-.279-.186-.69-.057-.918.286-.228.344-.188.773.09.958.279.185.69.057.918-.287Z",
                }),
            ],
        });
    };
function ts(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: i } = e,
        a = (function (e) {
            let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
            return s.useMemo(
                () =>
                    (function (e) {
                        let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                            l = new Set(t),
                            s = [];
                        return null == t || 0 === t.length || (null != n && l.has(n) && i)
                            ? ti
                            : (l.has(m.yTV.ANDROID) && l.has(m.yTV.IOS)
                                  ? s.push("mobile")
                                  : l.has(m.yTV.ANDROID)
                                    ? s.push("android")
                                    : l.has(m.yTV.IOS) && s.push("ios"),
                              (l.has(m.yTV.PS4) || l.has(m.yTV.PS5)) && s.push("playstation"),
                              l.has(m.yTV.XBOX) && s.push("xbox"),
                              l.has(m.yTV.DESKTOP) && s.push("desktop"),
                              l.has(m.yTV.META_QUEST) && s.push("vr"),
                              s);
                    })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
                [n, t, i],
            );
        })({ platforms: t?.supported_platforms, currentPlatform: m.yTV.DESKTOP, isGameLaunchable: i }),
        o = s.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case tn.MOBILE:
                                return (0, l.jsx)(eB.u, { size: "xxs", color: "currentColor" });
                            case tn.ANDROID:
                                return (0, l.jsx)(tl, { width: eV.E.xxs, height: eV.E.xxs, color: "currentColor" });
                            case tn.IOS:
                                return (0, l.jsx)(eH.z, { size: "xxs", color: "currentColor" });
                            case tn.PLAYSTATION:
                                return (0, l.jsx)(eF.X, { size: "xxs", color: "currentColor" });
                            case tn.XBOX:
                                return (0, l.jsx)(ez.Y, { size: "xxs", color: "currentColor" });
                            case tn.VR:
                                return (0, l.jsx)(eG.G, { size: "xxs", color: "currentColor" });
                            case tn.DESKTOP:
                                return (0, l.jsx)(eY.k, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(e1.Vq),
            [a],
        );
    if (!(null != n || o.length > 0)) return null;
    let d =
        null != n
            ? (function (e) {
                  switch (e) {
                      case m.yTV.DESKTOP:
                          return h.intl.string(h.t.aqN8U9);
                      case m.yTV.IOS:
                          return h.intl.string(h.t.CyQ5ia);
                      case m.yTV.ANDROID:
                          return h.intl.string(h.t.fMs6uW);
                      case m.yTV.XBOX:
                          return h.intl.string(h.t.o0hjdt);
                      case m.yTV.PS4:
                      case m.yTV.PS5:
                          return h.intl.string(h.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : h.intl.string(h.t["4dGUP0"]);
    return (0, l.jsxs)("div", {
        className: eM.qr,
        children: [
            (0, l.jsx)("div", {
                className: eM.E6,
                children: o.map((e, t) => (0, l.jsx)("div", { className: eM.F2, children: e }, t)),
            }),
            (0, l.jsx)(r.E, { variant: "text-sm/medium", color: "currentColor", className: eM.kB, children: d }),
        ],
    });
}
function ta(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: o,
            header: d,
            currentUserId: c,
            launchableAppId: u,
            isEmbeddedApplication: g,
            tryWithGdnAction: A,
            staticBannerSrc: p,
            onClickContent: f,
            iconSrc: C,
            onView: I,
            presenceActivity: _,
            currentUserPresenceActivity: j,
            hideParty: N,
            partyStatusElement: T,
            analyticsLocations: y,
            showAuthButton: S,
            requireAccountLink: k,
            canPromptAuth: L,
            startAuthorization: P,
            accountLinkButtonRef: M,
            renderAccountLinkUpsell: D,
        } = e,
        w = _?.timestamps?.start ?? _?.created_at,
        O = s.useMemo(
            () =>
                null != w
                    ? (0, l.jsxs)("div", {
                          className: eM.Ym,
                          children: [
                              (0, l.jsx)(eW._, { size: "xxs", color: "currentColor" }),
                              (0, l.jsx)(eZ.z, {
                                  entry: { start: w, end: _?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [w, _?.timestamps?.end],
        ),
        U = B(t),
        G = (0, eQ.s)(n.id),
        V = s.useMemo(
            () =>
                G.some((e) => (0, eX.CZ)(e) === eU.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(eK.Y, { size: "xxs", color: "currentColor" }),
                              h.intl.string(h.t.TsWCdW),
                          ],
                      })
                    : null,
            [G],
        ),
        F = s.useMemo(
            () =>
                (0, l.jsxs)(r.E, {
                    variant: "text-xs/normal",
                    className: eM.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [U ? x(t, i, o, c, !1) : O, U ? null : V],
                }),
            [U, t, i, o, c, O, V],
        ),
        z = s.useMemo(() => {
            let e = _?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(r.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [_?.details]),
        Y = s.useMemo(
            () => (0, l.jsxs)("div", { className: eM.pq, children: [z, F, N || U ? null : T] }),
            [F, N, U, T, z],
        ),
        W = !!u,
        K = (0, e$.e)(n),
        { canJoin: J, remoteJoinPlatform: q } = (function (e) {
            let {
                presenceActivity: t,
                currentUserPresenceActivity: n,
                currentUserId: i,
                message: l,
                application: s,
                isEmbeddedApplication: a,
                isFrameApplication: r,
                isGameLaunchable: o,
            } = e;
            if (l.author.id === i || !eg(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let d = (0, H._)(t);
            if (!(0, e8.A)(d) || (0, te.U)(d) || (0, e2.w)(n, t) || B(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (a && r) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === m.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, e3.Lt)(e.flags ?? 0, m.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = e5.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, e6.e)(n) ||
                        (null != n.application_id &&
                            (e4.A.isConnected(n.application_id) ||
                                (function (e) {
                                    let { platform: t } = e;
                                    return (0, e9.m0)() ? t === m.yTV.ANDROID : !!(0, e9.un)() && t === m.yTV.IOS;
                                })(n)))
                        ? null
                        : (0, e3.Lt)(n.flags ?? 0, m.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
                          ? (n.platform ?? null)
                          : null;
                })(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
            }
            return (0, b.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: _,
            currentUserPresenceActivity: j,
            currentUserId: c,
            message: t,
            application: n,
            isEmbeddedApplication: g,
            isFrameApplication: K,
            isGameLaunchable: W,
        }),
        Z = !(null == _ || !eg(_, t, n.id) || !(0, e7.A)(_, m.jUm.SYNC) || !b.isPlatformEmbedded || (0, e2.w)(j, _)),
        X = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !eg(e, t, n.id) ||
                t.activity?.type !== m.xL.JOIN_REQUEST ||
                !(0, e7.A)(e, m.jUm.JOIN)
            )
                return !1;
            let l = (0, H._)(e);
            return !(!(0, e8.A)(l) || (0, te.U)(l));
        })(_, t, n, c),
        $ = (0, e2.w)(j, _),
        Q = null != _ && (0, e7.A)(_, m.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        ee = (0, a.bG)(
            [e0.A],
            () => null != _ && null != _.application_id && e0.A.getState(_.application_id, m.xL.JOIN) === m.eAD.LOADING,
        ),
        { actions: et, hasAccountLinkButton: en } = s.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            J && k
                ? ((e = {
                      label: h.intl.string(h.t.lw71Nf),
                      trackingArea: v.kY.CONNECT_ACCOUNT,
                      onClick: () => {
                          P({ analyticsLocations: y });
                      },
                  }),
                  (n = !1))
                : J
                  ? (e = {
                        label: h.intl.string(h.t.VJlc0S),
                        trackingArea: v.kY.JOIN,
                        submitting: ee,
                        onClick: () => {
                            eT.Ay.join({
                                userId: t.author.id,
                                sessionId: _.session_id,
                                applicationId: _.application_id,
                                channelId: o.id,
                                messageId: t.id,
                                source: m.ThZ.MESSAGE_EMBED,
                                analyticsLocations: y,
                                embedded: (0, e7.A)(_, m.jUm.EMBEDDED),
                                remotePartyId: null != q ? _.party?.id : void 0,
                            }),
                                (0, tt.A)({
                                    type: m.UqL.JOIN,
                                    source: m.ThZ.MESSAGE_EMBED,
                                    userId: t.author.id,
                                    guildId: o.guild_id,
                                    channelId: o.id,
                                    applicationId: _.application_id,
                                    partyId: _.party?.id,
                                    messageId: t.id,
                                    analyticsLocations: y,
                                    remoteJoinPlatform: q,
                                });
                        },
                    })
                  : Q && L
                    ? ((e = {
                          label: h.intl.string(h.t.lw71Nf),
                          trackingArea: v.kY.CONNECT_ACCOUNT,
                          onClick: () => {
                              P({ analyticsLocations: y });
                          },
                      }),
                      (n = !1))
                    : Z
                      ? ((e = {
                            label: h.intl.string(h.t.VJlc0S),
                            trackingArea: v.kY.SYNC,
                            onClick: () => {
                                null != _ && eq.OH(_, t.author.id);
                            },
                        }),
                        (n = !1))
                      : X
                        ? (e = {
                              label: h.intl.string(h.t["hC/Zey"]),
                              trackingArea: v.kY.INVITE,
                              onClick: () => {
                                  null != _ &&
                                      eJ.A.sendActivityInvite({
                                          type: m.xL.JOIN,
                                          channelId: o.id,
                                          activity: _,
                                          location: m.ThZ.MESSAGE_EMBED,
                                      });
                              },
                              disabled: t.author.id === c,
                              disabledReason: t.author.id === c ? h.intl.string(h.t.IBl8ID) : void 0,
                          })
                        : $
                          ? (e = {
                                label: h.intl.string(h.t.KC26NR),
                                trackingArea: v.kY.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            })
                          : null != A && ((e = A), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    S &&
                        n &&
                        (l.push({
                            label: h.intl.string(h.t.lw71Nf),
                            trackingArea: v.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                P({ analyticsLocations: y });
                            },
                            icon: eN.A,
                            iconButton: !0,
                            buttonRef: M,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [J, k, Z, X, $, A, t.author.id, t.id, _, o.id, o.guild_id, y, q, c, ee, S, P, M, L, Q]);
    eP(
        et.some((e) => e.trackingArea === v.kY.CLOUD_PLAY),
        y,
    );
    let ei = s.useMemo(
        () => ($ ? null : (0, l.jsx)(ts, { presenceActivity: _, remoteJoinPlatform: q, isGameLaunchable: W })),
        [$, _, q, W],
    );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.h, {
                header: d,
                title: i,
                staticBannerSrc: p,
                onClickBanner: f,
                bannerAspectRatio: E.u.ACTIVITY,
                iconSrc: C ?? void 0,
                info: Y,
                actions: et,
                primaryActionFirst: !0,
                onClickContent: f,
                trackingConfig: {
                    id: n.id,
                    linkType: R.J.RICH_PRESENCE_INVITE,
                    onView: I,
                    referrerId: t.author.id,
                    guildId: o.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: ei,
            }),
            en ? D() : null,
        ],
    });
}
var tr = n(49999);
function to(e) {
    var t, i;
    let r,
        o,
        {
            analyticsLocations: c,
            application: u,
            channel: g,
            currentUserId: p,
            currentUserPresenceActivity: x,
            hideParty: f,
            message: C,
            onView: E,
            partyStatusElement: I,
            presenceActivity: _,
        } = e,
        j = (0, J.Ag)(u),
        { iconSrc: N, name: y } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, em.uD)(t.id, e.activity?.icon_override) : null) ??
                    S.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(C, u),
        k =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: l, imageURL: r } = (0, a.cf)(
                        [ev],
                        () =>
                            ((e) => {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = ev.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, ep.A)(),
                                    a =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, em.uD)(n.application_id, n.assets.invite_cover_image, s)
                                            : null) ??
                                        l ??
                                        i.getCoverImageURL(s) ??
                                        null;
                                return { cachedImageURL: l, imageURL: a };
                            })({ messageId: t, presenceActivity: n, application: i }),
                        [t, n, i],
                    );
                return (
                    s.useEffect(() => {
                        l !== r &&
                            (function (e) {
                                let { messageId: t, coverImageURL: n } = e;
                                ex.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: r });
                    }, [l, r, t]),
                    r
                );
            })({ messageId: C.id, presenceActivity: _, application: u }) ?? void 0,
        { openGameProfileModal: L, launchableAppId: R } =
            ((t = u.id),
            (i = C.author.id),
            (r = (0, ec.d)(t)),
            (o = (0, a.bG)([es.A, T.A], () => {
                let e = es.A.getApplication(t);
                return null != e ? T.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, ed.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: o?.id ?? void 0,
                    source: eo.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: i,
                }),
                launchableAppId: r,
            }),
        P = (0, eA.A)({ application: u, analyticsLocations: c }),
        M = s.useMemo(() => {
            if (null != P)
                return { label: h.intl.string(h.t["jaYS/h"]), icon: W.h, trackingArea: v.kY.CLOUD_PLAY, onClick: P };
        }, [P]),
        D = (0, ea.F)(u),
        w = s.useMemo(() => (null != L ? L : null != D && j ? D : void 0), [j, L, D]),
        O = Z.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        U = X.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: G, hasAlreadyLinked: V, startAuthorization: B } = (0, el.RD)(u),
        H = (function (e, t) {
            let { showInGameModal: i = !0, showToastOnSuccess: a = !0 } =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                [r, o] = s.useState(!1),
                c = s.useCallback(
                    function () {
                        for (var t = arguments.length, s = Array(t), a = 0; a < t; a++) s[a] = arguments[a];
                        o(!0);
                        let r = e(...s);
                        return (
                            r === et._.RPC &&
                                i &&
                                (0, d.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                        return (t) => (0, l.jsx)(e, { ...t });
                                    },
                                    { modalKey: ei },
                                ),
                            r
                        );
                    },
                    [e, o, i],
                ),
                u = (0, ee.A)(t);
            return (
                s.useEffect(() => {
                    if (r && !1 === u && !0 === t) {
                        if (((0, d.closeModal)(ei), o(!1), !a)) return;
                        let e = () => {
                            (0, $.P0)({
                                id: "account-linked-toast",
                                message: h.intl.string(en.default.uG6teD),
                                type: Q.Ck.SUCCESS,
                            });
                        };
                        if ("visible" === document.visibilityState) e();
                        else {
                            let t = () => {
                                "visible" === document.visibilityState &&
                                    (e(), document.removeEventListener("visibilitychange", t));
                            };
                            document.addEventListener("visibilitychange", t);
                        }
                    }
                }, [r, t, u, a]),
                c
            );
        })(B, V),
        F = b.isPlatformEmbedded && U.required && G && !V,
        q = !eg(_, C, u.id),
        eh = A(y, C.activity?.type, q),
        ef = s.useRef(null),
        eC = (0, a.bG)([eu.A], () => eu.A.getMessages(g.id)),
        eE = () => {
            var e;
            let t = [];
            return (
                (e = C.id),
                !eC.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === m.xL.JOIN, 25) &&
                    G &&
                    !V &&
                    O.enabled &&
                    t.push(z.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, l.jsx)(er.Ay, {
                    contentTypes: t,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === z.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, l.jsx)(Y.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: K.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: u },
                                },
                                title: h.intl.formatToPlainString(h.t["lo6H6+"], { gameName: u.name }),
                                body: h.intl.string(h.t.qYAzOp),
                                targetElementRef: ef,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(tr.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return q
        ? (0, l.jsx)(eO, {
              message: C,
              application: u,
              applicationName: y,
              channel: g,
              header: eh,
              currentUserId: p,
              launchableAppId: R,
              isEmbeddedApplication: j,
              tryWithGdnAction: M,
              staticBannerSrc: k,
              onClickContent: w,
              iconSrc: N,
              onView: E,
              presenceActivity: _,
              analyticsLocations: c,
              showAuthButton: G && !V && O.enabled,
              requireAccountLink: F,
              startAuthorization: H,
              accountLinkButtonRef: ef,
              renderAccountLinkUpsell: eE,
          })
        : (0, l.jsx)(ta, {
              message: C,
              application: u,
              applicationName: y,
              channel: g,
              header: eh,
              currentUserId: p,
              launchableAppId: R,
              isEmbeddedApplication: j,
              tryWithGdnAction: M,
              staticBannerSrc: k,
              onClickContent: w,
              iconSrc: N,
              onView: E,
              presenceActivity: _,
              currentUserPresenceActivity: x,
              hideParty: f,
              partyStatusElement: I,
              analyticsLocations: c,
              showAuthButton: G && !V && O.enabled,
              requireAccountLink: F,
              canPromptAuth: G && !V,
              startAuthorization: H,
              accountLinkButtonRef: ef,
              renderAccountLinkUpsell: eE,
          });
}
var td = n(172710);
function tc(e) {
    let { application: t, message: n, header: i, onClickContent: a, onView: o, guildId: d } = e,
        c = s.useMemo(
            () =>
                (0, l.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eM.h_,
                    color: "none",
                    lineClamp: 1,
                    children: h.intl.string(h.t["84qx9r"]),
                }),
            [],
        );
    return (0, l.jsx)(E.h, {
        header: i,
        title: t.name,
        iconSrc: M.HT.getWhiteIconURL(),
        info: c,
        onClickContent: a,
        trackingConfig: {
            id: t.id,
            linkType: R.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: d,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var tu = n(432017),
    tm = n(353411),
    th = n(360469);
function tg(e) {
    var t;
    let {
            application: n,
            message: i,
            header: a,
            presenceActivity: o,
            hideParty: d,
            partyStatusElement: c,
            currentUserPresenceActivity: u,
            onClickContent: m,
            onView: g,
            guildId: A,
        } = e,
        p = (0, e2.w)(u, o),
        x = (0, tm.Gq)(o, i.author, "Invite Embed"),
        f = s.useMemo(() => {
            let e = [];
            return (
                p ||
                    e.push({
                        label: x.label ?? h.intl.string(h.t.VJlc0S),
                        trackingArea: v.kY.SYNC,
                        onClick: () => {
                            x.onClick();
                        },
                        disabled: x.disabled,
                        disabledReason: x.disabled ? x.tooltip : void 0,
                    }),
                e
            );
        }, [p, x]),
        C =
            null != o && null != o.details && null != o.state
                ? h.intl.formatToPlainString(h.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        I = o?.timestamps?.start ?? o?.created_at,
        _ = s.useMemo(
            () =>
                null != I
                    ? (0, l.jsxs)("div", {
                          className: eM.Ym,
                          children: [
                              (0, l.jsx)(tu.T, { size: "xxs", color: "currentColor" }),
                              (0, l.jsx)(eZ.z, {
                                  entry: { start: I, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [I, o?.timestamps?.end],
        ),
        j = s.useMemo(
            () =>
                (0, l.jsxs)("div", {
                    className: eM.pq,
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-xs/normal",
                            className: eM.dS,
                            color: "none",
                            lineClamp: 1,
                            children: _,
                        }),
                        d ? null : c,
                    ],
                }),
            [_, d, c],
        );
    return (0, l.jsx)(E.h, {
        header: a,
        title: C,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, em.uD)(t, o.assets.large_image, [th.Ig, th.Ig])) ?? void 0),
        info: j,
        actions: f,
        onClickContent: m,
        trackingConfig: {
            id: n.id,
            linkType: R.J.RICH_PRESENCE_INVITE,
            onView: g,
            referrerId: i.author.id,
            guildId: A,
            channelId: i.channel_id,
            messageId: i.id,
        },
    });
}
function tA(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: i,
            message: a,
            onView: r,
            partyStatusElement: o,
            presenceActivity: d,
            guildId: c,
        } = e,
        u = !eg(d, a, t.id),
        m = A(t.name, a.activity?.type, u),
        h = s.useMemo(() => {
            if (null != d) return () => (0, td.Mp)(d);
        }, [d]);
    return u
        ? (0, l.jsx)(tc, { application: t, message: a, header: m, onClickContent: h, onView: r, guildId: c })
        : (0, l.jsx)(tg, {
              application: t,
              message: a,
              header: m,
              presenceActivity: d,
              hideParty: i,
              partyStatusElement: o,
              currentUserPresenceActivity: n,
              onClickContent: h,
              onView: r,
              guildId: c,
          });
}
var tp = n(272984);
function tx(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: s, activityActionType: a } = e,
        o = (function (e) {
            let { activityActionType: t, maxPartySize: n, partySize: i } = e;
            return t === m.xL.STREAM_REQUEST
                ? ""
                : t === m.xL.LISTEN
                  ? n > 0
                      ? h.intl.formatToPlainString(h.t.Zogoou, { partySize: i, maxPartySize: n })
                      : h.intl.formatToPlainString(h.t.UGei0j, { partySize: i })
                  : n > 0
                    ? h.intl.formatToPlainString(h.t.gLu7NU, { partySize: i, maxPartySize: n })
                    : h.intl.formatToPlainString(h.t["65JnWC"], { partySize: i });
        })({ maxPartySize: i, partySize: Math.max(n, t.length), activityActionType: a }),
        d = [...t];
    for (; d.length < n && d.length < 8; ) d.push(F.mt);
    for (; d.length < i && d.length < 8; ) d.push(null);
    return (0, l.jsxs)("div", {
        className: eM.UF,
        children: [
            d.length > 0 &&
                (0, l.jsx)(F.Ay, {
                    guildId: s,
                    users: d,
                    max: i > 0 ? Math.min(i, 8) : 8,
                    size: F.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, l.jsx)(r.E, { variant: "text-xs/medium", color: "none", children: o }),
        ],
    });
}
function tf(e) {
    let { analyticsLocations: t, app: n, channel: i, message: r, hideParty: d, onView: u } = e,
        h = (0, o.b)(n),
        g = (0, a.bG)([D.default], () => D.default.getId()),
        A = (0, a.bG)([U.A], () => {
            if (null == r.application) return U.A.findActivity(r.author.id, (e) => e.type === m.$pd.LISTENING);
            {
                let e = r.author.id;
                return (
                    B(r) && (e = e === g && i.isPrivate() ? i.getRecipientId() : g),
                    U.A.getApplicationActivity(e, r.application.id)
                );
            }
        }, [r, i, g]),
        p = (0, a.bG)([O.A, G.A], () => (0, V.A)(O.A, G.A, h.id), [h.id]),
        x = (0, a.yK)([w.A], () => (null == A || null == A.party ? [] : Array.from(w.A.getParty(A.party.id) ?? [])), [
            A,
        ]),
        { partySize: f, maxPartySize: C } = (0, H._)(A),
        E = s.useMemo(
            () =>
                x.map((e) => {
                    let t = c.default.getUser(e);
                    return null != t ? t : F.mt;
                }),
            [x],
        ),
        v = s.useMemo(
            () =>
                (0, l.jsx)(tx, {
                    partyMembers: E,
                    partySize: f,
                    maxPartySize: C,
                    guildId: i.guild_id,
                    activityActionType: r.activity?.type,
                }),
            [E, f, C, i.guild_id, r.activity?.type],
        );
    return (0, tp.pH)(A?.party?.id) || h.id === M.HT.id
        ? (0, l.jsx)(tA, {
              application: h,
              currentUserPresenceActivity: p,
              hideParty: d,
              message: r,
              onView: u,
              partyStatusElement: v,
              presenceActivity: A,
              guildId: i.guild_id,
          })
        : r.activity?.type === m.xL.STREAM_REQUEST
          ? (0, l.jsx)(P, { analyticsLocations: t, application: h, channel: i, currentUserId: g, message: r })
          : (0, l.jsx)(to, {
                analyticsLocations: t,
                application: h,
                channel: i,
                currentUserId: g,
                currentUserPresenceActivity: p,
                hideParty: d,
                message: r,
                onView: u,
                partyStatusElement: v,
                presenceActivity: A,
            });
}
var tC = n(627363),
    tE = n(395671);
let tv = (e) => {
    let { channel: t, message: n, hideParty: i } = e,
        { analyticsLocations: s } = (0, C.Ay)(f.A.INVITE_EMBED),
        a =
            null != n.application
                ? tE.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, tp.pH)(n.activity.party_id)
                  ? M.HT
                  : void 0,
        { data: r } = (0, tC.YY)(n.application?.id),
        o = r ?? a;
    return null == o ? null : (0, l.jsx)(tf, { app: o, channel: t, message: n, hideParty: i, analyticsLocations: s });
};
