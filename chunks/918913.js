n.d(t, { A: () => tv });
var i,
    l = n(627968);
n(321073);
var a = n(64700),
    r = n(17928),
    s = n(834730),
    o = n(138175),
    c = n(192308),
    d = n(287809),
    u = n(562153),
    _ = n(652215),
    m = n(985018),
    h = n(783198);
function p(e, t, n) {
    switch (t) {
        case _.xL.LISTEN:
            return m.intl.formatToPlainString(m.t["/8czH4"], { name: e });
        case _.xL.WATCH:
            return m.intl.formatToPlainString(m.t.BBJXVk, { name: e });
        case _.xL.JOIN:
            return n ? void 0 : m.intl.string(m.t.pkq6Vq);
        case _.xL.STREAM_REQUEST:
            return m.intl.string(h.default.DKHhec);
        case _.xL.JOIN_REQUEST:
        default:
            return m.intl.string(m.t.Ckxb6j);
    }
}
function g(e, t, n) {
    return e.author.id === n
        ? m.intl.string(h.default["8B3U5O"])
        : m.intl.formatToPlainString(h.default["d/qbC0"], { username: (0, u.mG)(t.guild_id, t.id, e.author) });
}
function f(e, t, n, i, l) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = d.default.getUser(n.getRecipientId());
            if (null != e)
                return l
                    ? m.intl.formatToPlainString(m.t.JddpN2, { username: e.globalName, appName: t })
                    : m.intl.formatToPlainString(m.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return l
            ? m.intl.formatToPlainString(m.t["2N1kNS"], { appName: t })
            : m.intl.formatToPlainString(m.t.IA6uDV, { appName: t });
    }
    return l
        ? m.intl.formatToPlainString(m.t.XE8axA, { username: e.author.globalName, appName: t })
        : m.intl.formatToPlainString(m.t.hgcjOn, { username: e.author.globalName, appName: t });
}
var x = n(793574),
    A = n(688810),
    C = n(572211),
    v = n(354287),
    I = n(112150),
    E = n(328153),
    b = n(560595),
    y = n(616356),
    T = n(760751),
    j = n(763827),
    N = n(486020),
    S = n(723702),
    k = n(935208),
    L = n(820672),
    R = n(768349);
function w(e) {
    let { currentUserId: t, message: i, application: a, channel: s, analyticsLocations: o, onView: d } = e,
        { staticBannerSrc: u, videoBannerSrc: _, bannerAspectRatio: p } = (0, I.f)(a),
        f = N.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }),
        w = (0, r.bG)([E.Ay, T.A], () =>
            E.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === a.id) return !0;
                let n = T.A.getGameByApplication(a);
                return null != n && t === n.id;
            }),
        ),
        P = (0, r.bG)([y.A], () => y.A.getCurrentUserActiveStream()),
        D = (0, r.bG)([j.A], () => j.A.getChannelId()),
        M = k.default.extractTimestamp(i.id) + L.M < Date.now(),
        O = (0, l.jsx)(l.Fragment, { children: g(i, s, t) }),
        { analyticsLocations: U } = (0, A.Ay)(o, x.A.REQUEST_TO_STREAM_INVITE_EMBED),
        G = m.intl.string(h.default["5+172e"]),
        B = !1;
    return (
        M
            ? ((G = m.intl.string(h.default.u4QmWl)), (B = !0))
            : null != P
              ? ((G = m.intl.string(h.default.P0wwmM)), (B = !0))
              : D !== s.id
                ? ((G = m.intl.string(h.default.qRXats)), (B = !0))
                : null == w && ((G = m.intl.string(h.default["43zohO"])), (B = !0)),
        (0, l.jsx)(C.h, {
            header: m.intl.string(h.default.nAyuPp),
            title: a.name,
            staticBannerSrc: u,
            videoBannerSrc: _,
            bannerAspectRatio: p,
            iconSrc: f ?? void 0,
            info: O,
            actions:
                i.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: v.kY.STREAM,
                              disabled: B,
                              onClick: () => {
                                  null != w &&
                                      ((0, S.isWindows)()
                                          ? (0, b.A)(w.pid)
                                          : (0, c.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("27713"),
                                                    n.e("31344"),
                                                ]).then(n.bind(n, 301400));
                                                return (t) => (0, l.jsx)(e, { ...t, analyticsLocations: U });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: a.id,
                linkType: R.J.REQUEST_TO_STREAM,
                guildId: s.guild_id,
                channelId: s.id,
                messageId: i.id,
                onView: d,
                isDeadEnd: M,
            },
        })
    );
}
var P = n(666176),
    D = n(495544),
    M = n(629016),
    O = n(375492),
    U = n(290863),
    G = n(461213),
    B = n(454292);
function V(e) {
    return e.activity?.type === _.xL.JOIN_REQUEST;
}
var F = n(125017),
    H = n(104171),
    z = n(554146),
    W = n(43105),
    Y = n(414499),
    K = n(116833),
    q = n(735991),
    Z = n(945810);
let J = (0, Z.mj)({
        name: "2025-12-game-invite-account-linking-entry-point",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    Q = (0, Z.mj)({
        name: "2026-04-require-account-link-game-invite",
        kind: "user",
        defaultConfig: { required: !1 },
        variations: { 0: { required: !1 }, 1: { required: !0 } },
    });
var X = n(691540),
    $ = n(97483),
    ee = n(475743),
    et = n(942370),
    en = n(311350);
let ei = "in-game-auth-check-modal";
var el = n(46225),
    ea = n(587895),
    er = n(574660),
    es = n(379848),
    eo = n(409626),
    ec = n(692969),
    ed = n(928550),
    eu = n(232835),
    e_ = n(970928);
let em = 2 * n(927813).A.Millis.HOUR;
function eh(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        l = null != i && e.party?.id !== i,
        a = k.default.extractTimestamp(t.id) + em < Date.now(),
        r = null != e.application_id && e.application_id !== n;
    return !l && !a && !r;
}
var ep = n(737393),
    eg = n(835517),
    ef = n(228366),
    ex = n(635377);
let eA = new (n.n(ex)())({ max: 500 });
class eC extends r.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return eA.get(t);
    }
}
let ev = new eC(ef.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (eA.get(t) === n) return !1;
        eA.set(t, n);
    },
});
var eI = n(503698),
    eE = n.n(eI),
    eb = n(349288),
    ey = n(141628),
    eT = n(780907),
    ej = n(137177),
    eN = n(763754),
    eS = n(447215),
    ek = n(888675),
    eL = n(110259),
    eR = n(139286);
function ew(e, t) {
    (0, eR.A)(
        { name: eL.ImpressionNames.CLOUD_PLAY_CTA, type: eL.ImpressionTypes.VIEW, properties: { location_stack: t } },
        { disableTrack: !e },
    );
}
var eP = n(193018),
    eD = n(444282);
function eM(e) {
    let { message: t, applicationName: n, iconSrc: i, channel: a, currentUserId: r, viewAction: o } = e,
        c = (0, eN.Ay)(t),
        d = (0, eS.P)({ user: t.author, channelId: a.id, guildId: a.guild_id, messageId: t.id })(c);
    return (0, l.jsx)(ek.A, {
        compact: !1,
        children: m.intl.format(r === t.author.id ? m.t.anvg2q : m.t.AxVbYF, {
            username: c.nick,
            usernameHook: d,
            applicationHook: () => {
                let e = null != o ? eb.Anchor : "div";
                return (0, l.jsxs)(e, {
                    onClick: o,
                    className: eP.Lf,
                    children: [
                        (0, l.jsx)("img", {
                            alt: m.intl.string(m.t["2B/phM"]),
                            src: i,
                            className: eE()(eD.Gt, ej.M.XSMALL),
                        }),
                        (0, l.jsx)(s.E, { variant: "text-sm/semibold", color: "text-muted", children: n }),
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
            header: c,
            currentUserId: d,
            launchableAppId: u,
            isEmbeddedApplication: h,
            tryWithGdnAction: p,
            staticBannerSrc: x,
            onClickContent: A,
            iconSrc: I,
            onView: E,
            presenceActivity: b,
            analyticsLocations: y,
            showAuthButton: T,
            requireAccountLink: j,
            startAuthorization: N,
            accountLinkButtonRef: S,
            renderAccountLinkUpsell: k,
        } = e,
        L = (0, r.bG)([eu.A], () => eu.A.getMessages(o.id)),
        { actions: w, hasAccountLinkButton: P } = a.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (j && null != u
                    ? ((e = [
                          {
                              label: m.intl.string(m.t.lw71Nf),
                              trackingArea: v.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  N({ analyticsLocations: y });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != u
                      ? (e = [
                            {
                                label: m.intl.string(m.t["s+J8Dl"]),
                                trackingArea: v.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    eT.Ay.launch({ applicationId: u, embedded: h });
                                },
                            },
                        ])
                      : null != p && ((e = [p]), (i = !1)),
                e.length > 0)
            ) {
                var a, r;
                if (
                    ((a = t.id),
                    (r = n.id),
                    L.hasAnyAfter(
                        a,
                        (e) =>
                            null != e.activity &&
                            e.application?.id === r &&
                            e.activity.type === _.xL.JOIN &&
                            !eh(b, e, r),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                T &&
                    i &&
                    (e.push({
                        label: m.intl.string(m.t.lw71Nf),
                        trackingArea: v.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            N({ analyticsLocations: y });
                        },
                        icon: ey.A,
                        iconButton: !0,
                        buttonRef: S,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [j, h, u, p, L, b, n.id, t.id, T, N, y, S]);
    ew(
        w.some((e) => e.trackingArea === v.kY.CLOUD_PLAY),
        y,
    );
    let D = w.length > 0,
        M = a.useMemo(
            () =>
                (0, l.jsx)(s.E, {
                    variant: "text-xs/medium",
                    className: eP.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (function (e, t, n, i, l) {
                        switch (e.activity?.type) {
                            case _.xL.LISTEN:
                            case _.xL.WATCH:
                            case _.xL.JOIN:
                                return m.intl.string(l ? m.t.x1UXGR : m.t["Ek+51n"]);
                            case _.xL.STREAM_REQUEST:
                                return g(e, n, i);
                            case _.xL.JOIN_REQUEST:
                            default:
                                return f(e, t, n, i, !0);
                        }
                    })(t, i, o, d, D),
                }),
            [t, i, o, d, D],
        );
    return 0 === w.length
        ? (0, l.jsx)(eM, { message: t, applicationName: i, iconSrc: I, channel: o, currentUserId: d, viewAction: A })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(C.h, {
                      header: c,
                      title: i,
                      staticBannerSrc: x,
                      onClickBanner: A,
                      bannerAspectRatio: C.u.ACTIVITY,
                      iconSrc: I ?? void 0,
                      info: M,
                      actions: w,
                      primaryActionFirst: !0,
                      onClickContent: A,
                      trackingConfig: {
                          id: n.id,
                          linkType: R.J.RICH_PRESENCE_INVITE,
                          onView: E,
                          referrerId: t.author.id,
                          guildId: o.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  P ? k() : null,
              ],
          });
}
var eU = n(379834),
    eG = n(738678),
    eB = n(27989),
    eV = n(646270),
    eF = n(610509),
    eH = n(22363),
    ez = n(802516),
    eW = n(31300),
    eY = n(687966),
    eK = n(825860),
    eq = n(308368),
    eZ = n(729937),
    eJ = n(85451),
    eQ = n(583846),
    eX = n(375802),
    e$ = n(205184),
    e0 = n(689168),
    e1 = n(403362),
    e2 = n(206589);
n(938796);
var e3 = n(665260),
    e7 = n(574381),
    e5 = n(134861),
    e8 = n(528767),
    e9 = n(182892),
    e4 = n(833349),
    e6 = n(287613),
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
_.yTV.DESKTOP,
    _.yTV.ANDROID,
    _.yTV.IOS,
    _.yTV.XBOX,
    _.yTV.PS4,
    _.yTV.PS5,
    _.yTV.SAMSUNG,
    _.yTV.EMBEDDED,
    _.yTV.META_QUEST;
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
function ta(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: i } = e,
        r = (function (e) {
            let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
            return a.useMemo(
                () =>
                    (function (e) {
                        let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                            l = new Set(t),
                            a = [];
                        return null == t || 0 === t.length || (null != n && l.has(n) && i)
                            ? ti
                            : (l.has(_.yTV.ANDROID) && l.has(_.yTV.IOS)
                                  ? a.push("mobile")
                                  : l.has(_.yTV.ANDROID)
                                    ? a.push("android")
                                    : l.has(_.yTV.IOS) && a.push("ios"),
                              (l.has(_.yTV.PS4) || l.has(_.yTV.PS5)) && a.push("playstation"),
                              l.has(_.yTV.XBOX) && a.push("xbox"),
                              l.has(_.yTV.DESKTOP) && a.push("desktop"),
                              l.has(_.yTV.META_QUEST) && a.push("vr"),
                              a);
                    })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
                [n, t, i],
            );
        })({ platforms: t?.supported_platforms, currentPlatform: _.yTV.DESKTOP, isGameLaunchable: i }),
        o = a.useMemo(
            () =>
                r
                    .map((e) => {
                        switch (e) {
                            case tn.MOBILE:
                                return (0, l.jsx)(eV.u, { size: "xxs", color: "currentColor" });
                            case tn.ANDROID:
                                return (0, l.jsx)(tl, { width: eB.E.xxs, height: eB.E.xxs, color: "currentColor" });
                            case tn.IOS:
                                return (0, l.jsx)(eF.z, { size: "xxs", color: "currentColor" });
                            case tn.PLAYSTATION:
                                return (0, l.jsx)(eH.X, { size: "xxs", color: "currentColor" });
                            case tn.XBOX:
                                return (0, l.jsx)(ez.Y, { size: "xxs", color: "currentColor" });
                            case tn.VR:
                                return (0, l.jsx)(eG.G, { size: "xxs", color: "currentColor" });
                            case tn.DESKTOP:
                                return (0, l.jsx)(eW.k, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(e1.Vq),
            [r],
        );
    if (!(null != n || o.length > 0)) return null;
    let c =
        null != n
            ? (function (e) {
                  switch (e) {
                      case _.yTV.DESKTOP:
                          return m.intl.string(m.t.aqN8U9);
                      case _.yTV.IOS:
                          return m.intl.string(m.t.CyQ5ia);
                      case _.yTV.ANDROID:
                          return m.intl.string(m.t.fMs6uW);
                      case _.yTV.XBOX:
                          return m.intl.string(m.t.o0hjdt);
                      case _.yTV.PS4:
                      case _.yTV.PS5:
                          return m.intl.string(m.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : m.intl.string(m.t["4dGUP0"]);
    return (0, l.jsxs)("div", {
        className: eP.qr,
        children: [
            (0, l.jsx)("div", {
                className: eP.E6,
                children: o.map((e, t) => (0, l.jsx)("div", { className: eP.F2, children: e }, t)),
            }),
            (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "currentColor", className: eP.kB, children: c }),
        ],
    });
}
function tr(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: o,
            header: c,
            currentUserId: d,
            launchableAppId: u,
            isEmbeddedApplication: h,
            tryWithGdnAction: p,
            staticBannerSrc: g,
            onClickContent: x,
            iconSrc: A,
            onView: I,
            presenceActivity: E,
            currentUserPresenceActivity: b,
            hideParty: y,
            partyStatusElement: T,
            analyticsLocations: j,
            showAuthButton: N,
            requireAccountLink: k,
            canPromptAuth: L,
            startAuthorization: w,
            accountLinkButtonRef: P,
            renderAccountLinkUpsell: D,
        } = e,
        M = E?.timestamps?.start ?? E?.created_at,
        O = a.useMemo(
            () =>
                null != M
                    ? (0, l.jsxs)("div", {
                          className: eP.Ym,
                          children: [
                              (0, l.jsx)(eY._, { size: "xxs", color: "currentColor" }),
                              (0, l.jsx)(eJ.z, {
                                  entry: { start: M, end: E?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [M, E?.timestamps?.end],
        ),
        U = V(t),
        G = (0, e$.s)(n.id),
        B = a.useMemo(
            () =>
                G.some((e) => (0, eQ.CZ)(e) === eU.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(eK.Y, { size: "xxs", color: "currentColor" }),
                              m.intl.string(m.t.TsWCdW),
                          ],
                      })
                    : null,
            [G],
        ),
        H = a.useMemo(
            () =>
                (0, l.jsxs)(s.E, {
                    variant: "text-xs/normal",
                    className: eP.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [U ? f(t, i, o, d, !1) : O, U ? null : B],
                }),
            [U, t, i, o, d, O, B],
        ),
        z = a.useMemo(() => {
            let e = E?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [E?.details]),
        W = a.useMemo(
            () => (0, l.jsxs)("div", { className: eP.pq, children: [z, H, y || U ? null : T] }),
            [H, y, U, T, z],
        ),
        Y = !!u,
        K = (0, eX.e)(n),
        { canJoin: q, remoteJoinPlatform: Z } = (function (e) {
            let {
                presenceActivity: t,
                currentUserPresenceActivity: n,
                currentUserId: i,
                message: l,
                application: a,
                isEmbeddedApplication: r,
                isFrameApplication: s,
                isGameLaunchable: o,
            } = e;
            if (l.author.id === i || !eh(t, l, a.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let c = (0, F._)(t);
            if (!(0, e6.A)(c) || (0, te.U)(c) || (0, e2.w)(n, t) || V(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (r && s) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === _.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, e3.Lt)(e.flags ?? 0, _.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = e8.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, e9.e)(n) ||
                        (null != n.application_id &&
                            (e5.A.isConnected(n.application_id) ||
                                (function (e) {
                                    let { platform: t } = e;
                                    return (0, e7.m0)() ? t === _.yTV.ANDROID : !!(0, e7.un)() && t === _.yTV.IOS;
                                })(n)))
                        ? null
                        : (0, e3.Lt)(n.flags ?? 0, _.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
                          ? (n.platform ?? null)
                          : null;
                })(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
            }
            return (0, S.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: E,
            currentUserPresenceActivity: b,
            currentUserId: d,
            message: t,
            application: n,
            isEmbeddedApplication: h,
            isFrameApplication: K,
            isGameLaunchable: Y,
        }),
        J = !(null == E || !eh(E, t, n.id) || !(0, e4.A)(E, _.jUm.SYNC) || !S.isPlatformEmbedded || (0, e2.w)(b, E)),
        Q = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !eh(e, t, n.id) ||
                t.activity?.type !== _.xL.JOIN_REQUEST ||
                !(0, e4.A)(e, _.jUm.JOIN)
            )
                return !1;
            let l = (0, F._)(e);
            return !(!(0, e6.A)(l) || (0, te.U)(l));
        })(E, t, n, d),
        X = (0, e2.w)(b, E),
        $ = null != E && (0, e4.A)(E, _.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        ee = (0, r.bG)(
            [e0.A],
            () => null != E && null != E.application_id && e0.A.getState(E.application_id, _.xL.JOIN) === _.eAD.LOADING,
        ),
        { actions: et, hasAccountLinkButton: en } = a.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            q && k
                ? ((e = {
                      label: m.intl.string(m.t.lw71Nf),
                      trackingArea: v.kY.CONNECT_ACCOUNT,
                      onClick: () => {
                          w({ analyticsLocations: j });
                      },
                  }),
                  (n = !1))
                : q
                  ? (e = {
                        label: m.intl.string(m.t.VJlc0S),
                        trackingArea: v.kY.JOIN,
                        submitting: ee,
                        onClick: () => {
                            eT.Ay.join({
                                userId: t.author.id,
                                sessionId: E.session_id,
                                applicationId: E.application_id,
                                channelId: o.id,
                                messageId: t.id,
                                source: _.ThZ.MESSAGE_EMBED,
                                analyticsLocations: j,
                                embedded: (0, e4.A)(E, _.jUm.EMBEDDED),
                                remotePartyId: null != Z ? E.party?.id : void 0,
                            }),
                                (0, tt.A)({
                                    type: _.UqL.JOIN,
                                    source: _.ThZ.MESSAGE_EMBED,
                                    userId: t.author.id,
                                    guildId: o.guild_id,
                                    channelId: o.id,
                                    applicationId: E.application_id,
                                    partyId: E.party?.id,
                                    messageId: t.id,
                                    analyticsLocations: j,
                                    remoteJoinPlatform: Z,
                                });
                        },
                    })
                  : $ && L
                    ? ((e = {
                          label: m.intl.string(m.t.lw71Nf),
                          trackingArea: v.kY.CONNECT_ACCOUNT,
                          onClick: () => {
                              w({ analyticsLocations: j });
                          },
                      }),
                      (n = !1))
                    : J
                      ? ((e = {
                            label: m.intl.string(m.t.VJlc0S),
                            trackingArea: v.kY.SYNC,
                            onClick: () => {
                                null != E && eZ.OH(E, t.author.id);
                            },
                        }),
                        (n = !1))
                      : Q
                        ? (e = {
                              label: m.intl.string(m.t["hC/Zey"]),
                              trackingArea: v.kY.INVITE,
                              onClick: () => {
                                  null != E &&
                                      eq.A.sendActivityInvite({
                                          type: _.xL.JOIN,
                                          channelId: o.id,
                                          activity: E,
                                          location: _.ThZ.MESSAGE_EMBED,
                                      });
                              },
                              disabled: t.author.id === d,
                              disabledReason: t.author.id === d ? m.intl.string(m.t.IBl8ID) : void 0,
                          })
                        : X
                          ? (e = {
                                label: m.intl.string(m.t.KC26NR),
                                trackingArea: v.kY.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            })
                          : null != p && ((e = p), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    N &&
                        n &&
                        (l.push({
                            label: m.intl.string(m.t.lw71Nf),
                            trackingArea: v.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                w({ analyticsLocations: j });
                            },
                            icon: ey.A,
                            iconButton: !0,
                            buttonRef: P,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [q, k, J, Q, X, p, t.author.id, t.id, E, o.id, o.guild_id, j, Z, d, ee, N, w, P, L, $]);
    ew(
        et.some((e) => e.trackingArea === v.kY.CLOUD_PLAY),
        j,
    );
    let ei = a.useMemo(
        () => (X ? null : (0, l.jsx)(ta, { presenceActivity: E, remoteJoinPlatform: Z, isGameLaunchable: Y })),
        [X, E, Z, Y],
    );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(C.h, {
                header: c,
                title: i,
                staticBannerSrc: g,
                onClickBanner: x,
                bannerAspectRatio: C.u.ACTIVITY,
                iconSrc: A ?? void 0,
                info: W,
                actions: et,
                primaryActionFirst: !0,
                onClickContent: x,
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
var ts = n(49999);
function to(e) {
    var t, i;
    let s,
        o,
        {
            analyticsLocations: d,
            application: u,
            channel: h,
            currentUserId: g,
            currentUserPresenceActivity: f,
            hideParty: x,
            message: A,
            onView: C,
            partyStatusElement: I,
            presenceActivity: E,
        } = e,
        b = (0, q.Ag)(u),
        { iconSrc: y, name: j } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, e_.uD)(t.id, e.activity?.icon_override) : null) ??
                    N.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(A, u),
        k =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: l, imageURL: s } = (0, r.cf)(
                        [ev],
                        () =>
                            ((e) => {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = ev.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let a = 600 * (0, eg.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, e_.uD)(n.application_id, n.assets.invite_cover_image, a)
                                            : null) ??
                                        l ??
                                        i.getCoverImageURL(a) ??
                                        null;
                                return { cachedImageURL: l, imageURL: r };
                            })({ messageId: t, presenceActivity: n, application: i }),
                        [t, n, i],
                    );
                return (
                    a.useEffect(() => {
                        l !== s &&
                            (function (e) {
                                let { messageId: t, coverImageURL: n } = e;
                                ef.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: s });
                    }, [l, s, t]),
                    s
                );
            })({ messageId: A.id, presenceActivity: E, application: u }) ?? void 0,
        { openGameProfileModal: L, launchableAppId: R } =
            ((t = u.id),
            (i = A.author.id),
            (s = (0, ed.d)(t)),
            (o = (0, r.bG)([ea.A, T.A], () => {
                let e = ea.A.getApplication(t);
                return null != e ? T.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, ec.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: o?.id ?? void 0,
                    source: eo.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: i,
                }),
                launchableAppId: s,
            }),
        w = (0, ep.A)({ application: u, analyticsLocations: d }),
        P = a.useMemo(() => {
            if (null != w)
                return { label: m.intl.string(m.t["jaYS/h"]), icon: Y.h, trackingArea: v.kY.CLOUD_PLAY, onClick: w };
        }, [w]),
        D = (0, er.F)(u),
        M = a.useMemo(() => (null != L ? L : null != D && b ? D : void 0), [b, L, D]),
        O = J.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        U = Q.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: G, hasAlreadyLinked: B, startAuthorization: V } = (0, el.RD)(u),
        F = (function (e, t) {
            let { showInGameModal: i = !0, showToastOnSuccess: r = !0 } =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                [s, o] = a.useState(!1),
                d = a.useCallback(
                    function () {
                        for (var t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                        o(!0);
                        let s = e(...a);
                        return (
                            s === et._.RPC &&
                                i &&
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                        return (t) => (0, l.jsx)(e, { ...t });
                                    },
                                    { modalKey: ei },
                                ),
                            s
                        );
                    },
                    [e, o, i],
                ),
                u = (0, ee.A)(t);
            return (
                a.useEffect(() => {
                    if (s && !1 === u && !0 === t) {
                        if (((0, c.closeModal)(ei), o(!1), !r)) return;
                        let e = () => {
                            (0, X.P0)({
                                id: "account-linked-toast",
                                message: m.intl.string(en.default.uG6teD),
                                type: $.Ck.SUCCESS,
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
                }, [s, t, u, r]),
                d
            );
        })(V, B),
        H = S.isPlatformEmbedded && U.required && G && !B,
        Z = !eh(E, A, u.id),
        em = p(j, A.activity?.type, Z),
        ex = a.useRef(null),
        eA = (0, r.bG)([eu.A], () => eu.A.getMessages(h.id)),
        eC = () => {
            var e;
            let t = [];
            return (
                (e = A.id),
                !eA.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === _.xL.JOIN, 25) &&
                    G &&
                    !B &&
                    O.enabled &&
                    t.push(z.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, l.jsx)(es.Ay, {
                    contentTypes: t,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === z.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, l.jsx)(W.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: K.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: u },
                                },
                                title: m.intl.formatToPlainString(m.t["lo6H6+"], { gameName: u.name }),
                                body: m.intl.string(m.t.qYAzOp),
                                targetElementRef: ex,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(ts.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return Z
        ? (0, l.jsx)(eO, {
              message: A,
              application: u,
              applicationName: j,
              channel: h,
              header: em,
              currentUserId: g,
              launchableAppId: R,
              isEmbeddedApplication: b,
              tryWithGdnAction: P,
              staticBannerSrc: k,
              onClickContent: M,
              iconSrc: y,
              onView: C,
              presenceActivity: E,
              analyticsLocations: d,
              showAuthButton: G && !B && O.enabled,
              requireAccountLink: H,
              startAuthorization: F,
              accountLinkButtonRef: ex,
              renderAccountLinkUpsell: eC,
          })
        : (0, l.jsx)(tr, {
              message: A,
              application: u,
              applicationName: j,
              channel: h,
              header: em,
              currentUserId: g,
              launchableAppId: R,
              isEmbeddedApplication: b,
              tryWithGdnAction: P,
              staticBannerSrc: k,
              onClickContent: M,
              iconSrc: y,
              onView: C,
              presenceActivity: E,
              currentUserPresenceActivity: f,
              hideParty: x,
              partyStatusElement: I,
              analyticsLocations: d,
              showAuthButton: G && !B && O.enabled,
              requireAccountLink: H,
              canPromptAuth: G && !B,
              startAuthorization: F,
              accountLinkButtonRef: ex,
              renderAccountLinkUpsell: eC,
          });
}
var tc = n(172710);
function td(e) {
    let { application: t, message: n, header: i, onClickContent: r, onView: o, guildId: c } = e,
        d = a.useMemo(
            () =>
                (0, l.jsx)(s.E, {
                    variant: "text-xs/medium",
                    className: eP.h_,
                    color: "none",
                    lineClamp: 1,
                    children: m.intl.string(m.t["84qx9r"]),
                }),
            [],
        );
    return (0, l.jsx)(C.h, {
        header: i,
        title: t.name,
        iconSrc: P.HT.getWhiteIconURL(),
        info: d,
        onClickContent: r,
        trackingConfig: {
            id: t.id,
            linkType: R.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: c,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var tu = n(432017),
    t_ = n(353411),
    tm = n(360469);
function th(e) {
    var t;
    let {
            application: n,
            message: i,
            header: r,
            presenceActivity: o,
            hideParty: c,
            partyStatusElement: d,
            currentUserPresenceActivity: u,
            onClickContent: _,
            onView: h,
            guildId: p,
        } = e,
        g = (0, e2.w)(u, o),
        f = (0, t_.Gq)(o, i.author, "Invite Embed"),
        x = a.useMemo(() => {
            let e = [];
            return (
                g ||
                    e.push({
                        label: f.label ?? m.intl.string(m.t.VJlc0S),
                        trackingArea: v.kY.SYNC,
                        onClick: () => {
                            f.onClick();
                        },
                        disabled: f.disabled,
                        disabledReason: f.disabled ? f.tooltip : void 0,
                    }),
                e
            );
        }, [g, f]),
        A =
            null != o && null != o.details && null != o.state
                ? m.intl.formatToPlainString(m.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        I = o?.timestamps?.start ?? o?.created_at,
        E = a.useMemo(
            () =>
                null != I
                    ? (0, l.jsxs)("div", {
                          className: eP.Ym,
                          children: [
                              (0, l.jsx)(tu.T, { size: "xxs", color: "currentColor" }),
                              (0, l.jsx)(eJ.z, {
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
        b = a.useMemo(
            () =>
                (0, l.jsxs)("div", {
                    className: eP.pq,
                    children: [
                        (0, l.jsx)(s.E, {
                            variant: "text-xs/normal",
                            className: eP.dS,
                            color: "none",
                            lineClamp: 1,
                            children: E,
                        }),
                        c ? null : d,
                    ],
                }),
            [E, c, d],
        );
    return (0, l.jsx)(C.h, {
        header: r,
        title: A,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, e_.uD)(t, o.assets.large_image, [tm.Ig, tm.Ig])) ?? void 0),
        info: b,
        actions: x,
        onClickContent: _,
        trackingConfig: {
            id: n.id,
            linkType: R.J.RICH_PRESENCE_INVITE,
            onView: h,
            referrerId: i.author.id,
            guildId: p,
            channelId: i.channel_id,
            messageId: i.id,
        },
    });
}
function tp(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: i,
            message: r,
            onView: s,
            partyStatusElement: o,
            presenceActivity: c,
            guildId: d,
        } = e,
        u = !eh(c, r, t.id),
        _ = p(t.name, r.activity?.type, u),
        m = a.useMemo(() => {
            if (null != c) return () => (0, tc.Mp)(c);
        }, [c]);
    return u
        ? (0, l.jsx)(td, { application: t, message: r, header: _, onClickContent: m, onView: s, guildId: d })
        : (0, l.jsx)(th, {
              application: t,
              message: r,
              header: _,
              presenceActivity: c,
              hideParty: i,
              partyStatusElement: o,
              currentUserPresenceActivity: n,
              onClickContent: m,
              onView: s,
              guildId: d,
          });
}
var tg = n(272984);
function tf(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: r } = e,
        o = (function (e) {
            let { activityActionType: t, maxPartySize: n, partySize: i } = e;
            return t === _.xL.STREAM_REQUEST
                ? ""
                : t === _.xL.LISTEN
                  ? n > 0
                      ? m.intl.formatToPlainString(m.t.Zogoou, { partySize: i, maxPartySize: n })
                      : m.intl.formatToPlainString(m.t.UGei0j, { partySize: i })
                  : n > 0
                    ? m.intl.formatToPlainString(m.t.gLu7NU, { partySize: i, maxPartySize: n })
                    : m.intl.formatToPlainString(m.t["65JnWC"], { partySize: i });
        })({ maxPartySize: i, partySize: Math.max(n, t.length), activityActionType: r }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(H.mt);
    for (; c.length < i && c.length < 8; ) c.push(null);
    return (0, l.jsxs)("div", {
        className: eP.UF,
        children: [
            c.length > 0 &&
                (0, l.jsx)(H.Ay, {
                    guildId: a,
                    users: c,
                    max: i > 0 ? Math.min(i, 8) : 8,
                    size: H.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, l.jsx)(s.E, { variant: "text-xs/medium", color: "none", children: o }),
        ],
    });
}
function tx(e) {
    let { analyticsLocations: t, app: n, channel: i, message: s, hideParty: c, onView: u } = e,
        m = (0, o.b)(n),
        h = (0, r.bG)([D.default], () => D.default.getId()),
        p = (0, r.bG)([U.A], () => {
            if (null == s.application) return U.A.findActivity(s.author.id, (e) => e.type === _.$pd.LISTENING);
            {
                let e = s.author.id;
                return (
                    V(s) && (e = e === h && i.isPrivate() ? i.getRecipientId() : h),
                    U.A.getApplicationActivity(e, s.application.id)
                );
            }
        }, [s, i, h]),
        g = (0, r.bG)([O.A, G.A], () => (0, B.A)(O.A, G.A, m.id), [m.id]),
        f = (0, r.yK)([M.A], () => (null == p || null == p.party ? [] : Array.from(M.A.getParty(p.party.id) ?? [])), [
            p,
        ]),
        { partySize: x, maxPartySize: A } = (0, F._)(p),
        C = a.useMemo(
            () =>
                f.map((e) => {
                    let t = d.default.getUser(e);
                    return null != t ? t : H.mt;
                }),
            [f],
        ),
        v = a.useMemo(
            () =>
                (0, l.jsx)(tf, {
                    partyMembers: C,
                    partySize: x,
                    maxPartySize: A,
                    guildId: i.guild_id,
                    activityActionType: s.activity?.type,
                }),
            [C, x, A, i.guild_id, s.activity?.type],
        );
    return (0, tg.pH)(p?.party?.id) || m.id === P.HT.id
        ? (0, l.jsx)(tp, {
              application: m,
              currentUserPresenceActivity: g,
              hideParty: c,
              message: s,
              onView: u,
              partyStatusElement: v,
              presenceActivity: p,
              guildId: i.guild_id,
          })
        : s.activity?.type === _.xL.STREAM_REQUEST
          ? (0, l.jsx)(w, { analyticsLocations: t, application: m, channel: i, currentUserId: h, message: s })
          : (0, l.jsx)(to, {
                analyticsLocations: t,
                application: m,
                channel: i,
                currentUserId: h,
                currentUserPresenceActivity: g,
                hideParty: c,
                message: s,
                onView: u,
                partyStatusElement: v,
                presenceActivity: p,
            });
}
var tA = n(627363),
    tC = n(395671);
let tv = (e) => {
    let { channel: t, message: n, hideParty: i } = e,
        { analyticsLocations: a } = (0, A.Ay)(x.A.INVITE_EMBED),
        r =
            null != n.application
                ? tC.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, tg.pH)(n.activity.party_id)
                  ? P.HT
                  : void 0,
        { data: s } = (0, tA.YY)(n.application?.id),
        o = s ?? r;
    return null == o ? null : (0, l.jsx)(tx, { app: o, channel: t, message: n, hideParty: i, analyticsLocations: a });
};
