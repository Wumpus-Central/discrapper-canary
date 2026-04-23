n.r(t), n.d(t, { HeaderToolbar: () => i6, default: () => i4 }), n(323874), n(14289), n(35956);
var i,
    s,
    l,
    a = n(627968),
    r = n(64700),
    o = n(503698),
    c = n.n(o),
    d = n(873263),
    u = n(17928),
    m = n(777666),
    h = n(43990),
    A = n(214947),
    x = n(761508),
    p = n(228366),
    g = n(944791),
    N = n(711950),
    _ = n(726249),
    f = n(915089),
    I = n(586774),
    j = n(742589),
    v = n(95550),
    C = n(554146),
    y = n(364522),
    S = n(534514),
    E = n(820284),
    T = n(793574),
    b = n(688810),
    P = n(379848),
    L = n(834730),
    R = n(821609),
    D = n(290595),
    O = n(939249),
    k = n(516746);
function F(e) {
    let {
        padded: t = !0,
        inset: n = !1,
        active: i = !1,
        className: s,
        children: l,
        onClick: r,
        ref: o,
        noBackground: d = !1,
        ...u
    } = e;
    return null != r
        ? (0, a.jsx)(O.D, {
              innerRef: o,
              onClick: r,
              tabIndex: null != r ? 0 : -1,
              className: c()(s, { [k.A7]: !n, [k.C5]: n, [k.jC]: t, [k.vu]: i, [k.bG]: null != r, [k._$]: d }),
              ...u,
              children: l,
          })
        : (0, a.jsx)("div", {
              ref: o,
              className: c()(s, { [k.A7]: !n, [k.C5]: n, [k.jC]: t, [k.vu]: i, [k._$]: d }),
              ...u,
              children: l,
          });
}
var w = n(780964),
    G = n(858897),
    M = n(652215),
    U = n(49999),
    V = n(985018),
    Y = n(362288);
function $(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, a.jsxs)(F, {
        className: c()(Y.Nr, t),
        children: [
            (0, a.jsx)(S.D, { variant: "heading-md/semibold", className: Y.wx, children: V.intl.string(V.t.HcbnMM) }),
            (0, a.jsx)(L.E, {
                variant: "text-sm/normal",
                children: V.intl.format(V.t.NkFrzN, {
                    onPrivacyClick: () => {
                        (0, G.openUserSettings)(w.X.DATA_AND_PRIVACY_PANEL);
                    },
                }),
            }),
            (0, a.jsxs)("div", {
                className: Y.UD,
                children: [
                    (0, a.jsx)(R.$, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: V.intl.string(V.t.ebojgD),
                        onClick: () => (0, D.U)([M.YAq.PERSONALIZATION], []),
                    }),
                    (0, a.jsx)(R.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: V.intl.string(V.t.f3Pet9),
                        onClick: () => n(U.i.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
var H = n(153488),
    W = n(735438),
    z = n.n(W),
    q = n(111956),
    B = n.n(q),
    X = n(922016),
    Q = n(289873),
    K = n(829219),
    Z = n(859703),
    J = n(507107),
    ee = n(945810);
let et = (0, ee.mj)({
    name: "2026-01-now-playing-api-call-experiment",
    kind: "user",
    defaultConfig: { use_api_call: !1 },
    variations: {
        0: { use_api_call: !1 },
        1: { use_api_call: !1 },
        2: { use_api_call: !0 },
        3: { use_api_call: !0 },
        4: { use_api_call: !0 },
        5: { use_api_call: !0 },
        6: { use_api_call: !0 },
    },
});
var en = n(890687),
    ei = n(710969),
    es = n(639214),
    el = n(814793),
    ea = n(219271),
    er = n(427358),
    eo = n(287809),
    ec = n(943577),
    ed = n(954571),
    eu = n(927813),
    em = n(279877);
n(321073);
var eh = n(956793),
    eA = n(401843),
    ex = n(682261),
    ep = n(765379),
    eg = n(90644),
    eN = n(61330),
    e_ = n(960076),
    ef = n(834615),
    eI = n(970928),
    ej = n(516085),
    ev = n(110259),
    eC = n(141628),
    ey = n(661531),
    eS = n(990078),
    eE = n(414499),
    eT = n(687966),
    eb = n(97808),
    eP = n(778712),
    eL = n(983851),
    eR = n(187322),
    eD = n(492684),
    eO = n(212245),
    ek = n(573648),
    eF = n(62583),
    ew = n(908289),
    eG = n(672979),
    eM = n(440594);
function eU(e, t) {
    if (null != e && e.type === M.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== M.$pd.PLAYING ? V.intl.string(V.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, e_.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, ep.A)(e)) return (0, eM.A)(e.name);
    var n = e.type,
        i = e.name;
    switch (n) {
        case M.$pd.LISTENING:
        case M.$pd.WATCHING:
        case M.$pd.COMPETING:
        case M.$pd.STREAMING:
            return i;
        case M.$pd.CUSTOM_STATUS:
        case M.$pd.HANG_STATUS:
            return null;
        case M.$pd.PLAYING:
        default:
            return i;
    }
}
var eV = n(737393),
    eY = n(139286),
    e$ = n(46225),
    eH = n(627363),
    eW = n(587895),
    ez = n(47167),
    eq = n(402216),
    eB = n(939341),
    eX = n(681827),
    eQ = n(826673),
    eK = n(609425),
    eZ = n(73392),
    eJ = n(137177),
    e0 = n(279250),
    e1 = n(607407),
    e2 = n(290987),
    e3 = n(928550),
    e7 = n(594262),
    e5 = n(378570),
    e9 = n(345942),
    e8 = n(804980),
    e6 = n(260509),
    e4 = n(495544),
    te = n(734057),
    tt = n(879945),
    tn = n(266080),
    ti = n(403362),
    ts = n(427262),
    tl = n(336787),
    ta = n(492213);
let tr = [14, 14, 12, 12, 10, 8, 6],
    to = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, a.jsx)(L.E, { className: c()(ta.P_, t), variant: "text-sm/semibold", children: e });
    },
    tc = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, a.jsx)(L.E, {
            className: c()(ta.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e,
        });
    },
    td = (0, eD.A)((e) => {
        let { message: t } = e;
        return (0, a.jsx)("div", { className: ta.__invalid_timestamp, children: t });
    }),
    tu = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("section", { className: ta.uW, children: t });
    },
    tm = (e) => {
        let { inset: t, className: n } = e;
        return (0, a.jsx)("div", { className: c()(ta.me, { [ta.C5]: t }, n) });
    },
    th = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, eY.A)({
                name: ev.ImpressionNames.CLOUD_PLAY_CTA,
                type: ev.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, a.jsx)(eS.m, {
                text: V.intl.string(V.t.JVwWva),
                children: (0, a.jsx)(R.$, {
                    size: "sm",
                    variant: "primary",
                    icon: eE.h,
                    text: V.intl.string(V.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    tA = (e) => {
        let { activity: t, user: n } = e,
            i = (0, e7.l)({ activity: t, user: n, supportsAskToJoin: !1 }),
            s = null != i,
            { data: l } = (0, eH.YY)(t.application_id),
            { fetched: a, hasAlreadyLinked: r, canStartAuthorization: o, startAuthorization: c } = (0, e$.RD)(l),
            d = !s && a && o && !r;
        return {
            isJoinActivityButtonShown: s,
            joinActivityButtonAction: i,
            isLinkAccountButtonShown: d,
            startAuthorization: c,
            hasButton: s || d,
        };
    },
    tx = (e) => {
        let { activity: t, user: n } = e,
            {
                joinActivityButtonAction: i,
                isJoinActivityButtonShown: s,
                isLinkAccountButtonShown: l,
                startAuthorization: r,
            } = tA({ activity: t, user: n }),
            { newestAnalyticsLocation: o } = (0, b.Ay)();
        if (s && null != i) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: s, isEnabled: l } = i;
            return (0, a.jsx)(eS.m, {
                text: s,
                asContainer: !l,
                children: (0, a.jsx)(R.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: eT._,
                    text: n,
                    disabled: !l,
                    loading: e,
                    onClick: (e) => {
                        e.stopPropagation(), t();
                    },
                }),
            });
        }
        return l
            ? (0, a.jsx)(R.$, {
                  size: "sm",
                  variant: "secondary",
                  icon: eC.A,
                  text: V.intl.string(V.t.sbdnpw),
                  onClick: (e) => {
                      e.stopPropagation(), r({ analyticsLocations: [o] });
                  },
              })
            : null;
    },
    tp = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: i, name: s } = t,
            { data: l } = (0, eH.YY)(i),
            r = (0, eV.A)({ application: l, analyticsLocations: n }),
            o = (0, eQ.JZ)(C.M.CLOUD_PLAY_NEW_BADGE),
            c = (0, e3.L)(i);
        return null == r || c
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(tm, { className: ta.gi }),
                      (0, a.jsxs)("div", {
                          className: ta.DK,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: ta.tJ,
                                  children: [
                                      o
                                          ? null
                                          : (0, a.jsx)(m.Lp, {
                                                text: V.intl.string(V.t.y2b7CA),
                                                color: ey.A.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, a.jsx)(L.E, {
                                          variant: "text-xs/medium",
                                          children: V.intl.formatToPlainString(V.t.RmiYF3, { gameName: s }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(th, { onCloudPlayClick: r, analyticsLocations: n }),
                          ],
                      }),
                  ],
              });
    };
var tg = (((i = tg || {}).XBOX = "XBOX"), (i.SPOTIFY = "SPOTIFY"), (i.MULTIPLE = "MULTIPLE"), i);
let tN = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: s } = e;
    switch (n) {
        case "XBOX":
            t = (0, a.jsx)(tn.A, { className: ta.nr, color: ey.A.unsafe_rawColors.PRIMARY_300.css });
            break;
        case "SPOTIFY":
            t = (0, a.jsx)(tt.A, { className: ta.nr, color: ey.A.unsafe_rawColors.PLATFORM_SPOTIFY.css });
            break;
        case "MULTIPLE":
            t = (0, a.jsx)("div", {
                className: ta.XQ,
                children: (0, a.jsx)(eT._, {
                    size: "md",
                    className: c()(ta.nr, ta.iY),
                    color: ey.A.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, a.jsx)("img", { src: n ?? void 0, alt: "", className: ta.nr });
    }
    return null != i || null != s
        ? (0, a.jsx)(O.D, { onClick: i, className: c()(null != i ? ta.vk : ""), onContextMenu: s, children: t })
        : t;
};
tN.Src = tg;
let t_ = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: i,
            icon: s,
            onSubtitleClick: l,
            onIconClick: r,
            onContextMenu: o,
            guildId: d,
            displayNameFont: u,
        } = e,
        m = (0, a.jsx)(L.E, { className: ta.P_, variant: "text-sm/normal", color: "text-muted", children: i });
    return (0, a.jsxs)("header", {
        className: null != s ? ta.dI : ta.sk,
        children: [
            (0, a.jsx)(eb.eu, {
                src: t.user.getAvatarURL(d, 32),
                "aria-label": t.user.username,
                size: eP._3.SIZE_32,
                className: ta.Nw,
                status: t.status,
                onContextMenu: o,
            }),
            (0, a.jsxs)("div", {
                className: ta.__invalid_headerDetails,
                children: [
                    (0, a.jsx)(L.E, { className: c()(ta.P_, u), variant: "text-md/semibold", children: n }),
                    null != l ? (0, a.jsx)(O.D, { className: ta.vk, onClick: l, children: m }) : m,
                ],
            }),
            null != s && null != r ? (0, a.jsx)(O.D, { className: ta.vk, onClick: r, children: s }) : s,
        ],
    });
};
t_.Icon = tN;
let tf = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, a.jsx)(eR.vN, {
        children: (0, a.jsx)(F, { noBackground: !0, className: c()(n, ta.iE), padded: !1, ...i, children: t }),
    });
};
(tf.Header = t_),
    (tf.Body = (e) => {
        let { children: t } = e;
        return (0, a.jsx)(F, { inset: !0, padded: !1, className: ta.rf, children: t });
    }),
    (tf.Separator = tm),
    (tf.VoiceSection = (e) => {
        let { guild: t, channel: n, partySize: i, members: s, onChannelContextMenu: l } = e,
            o = r.useRef(null),
            d = (0, ez.Ay)(n, !0),
            u = (0, e6.Iv)(t, 32),
            m = (0, e6.Rb)(t);
        return (0, a.jsx)(tu, {
            children: (0, a.jsxs)("div", {
                className: ta.iO,
                ref: o,
                onContextMenu: (e) => l(e, n),
                children: [
                    (0, a.jsx)(O.D, {
                        onClick: () => (0, e9.u)(t.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, a.jsxs)("div", {
                            className: ta.J4,
                            children: [
                                null != u
                                    ? (0, a.jsx)("img", { alt: "", src: u, className: c()(ta.y8, ta.p8) })
                                    : (0, a.jsx)("div", {
                                          className: ta.I,
                                          children: (0, a.jsx)("div", {
                                              className: ta.lB,
                                              style: { fontSize: tr[m.length] ?? tr[tr.length - 1] },
                                              children: m,
                                          }),
                                      }),
                                (0, a.jsx)("div", {
                                    className: ta._s,
                                    children: (0, a.jsx)(eL.H, { size: "md", color: "currentColor", className: ta.ZS }),
                                }),
                            ],
                        }),
                    }),
                    (0, a.jsx)(O.D, {
                        onClick: () => {
                            eh.default.selectVoiceChannel(n.id), (0, e5.iN)(n.id);
                        },
                        focusProps: { ringTarget: o },
                        children: (0, a.jsxs)("div", { className: ta.U6, children: [to(t.name, ta.BJ), tc(d, ta.BJ)] }),
                    }),
                    (0, a.jsx)(tl.A, { partySize: i, members: s, guildId: t.id }),
                ],
            }),
        });
    }),
    (tf.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: s, activity: l } = e,
            { analyticsLocations: r } = (0, b.Ay)(T.A.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, a.jsxs)(tu, {
            children: [
                (0, a.jsxs)("div", {
                    className: ta.yn,
                    children: [
                        null != t ? (0, a.jsx)("img", { alt: "", src: t, className: ta.RZ }) : null,
                        (0, a.jsxs)("div", {
                            children: [to(n), tc(V.intl.formatToPlainString(V.t.C4WXvc, { memberCount: i.totalSize }))],
                        }),
                        (0, a.jsx)(tl.A, { partySize: i, members: s }),
                    ],
                }),
                (0, a.jsx)(tp, { activity: l, analyticsLocations: r }),
            ],
        });
    }),
    (tf.RichPresenceSection = (e) => {
        let { activity: t, getAssetImage: i, user: s } = e,
            { analyticsLocations: l } = (0, b.Ay)(T.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: r } = (0, eH.YY)(t.application_id),
            { assets: o, details: d, state: u, application_id: m } = t,
            { hasButton: h } = tA({ activity: t, user: s }),
            A = (0, eB.C4)(r)?.src ?? n(960648),
            x = (0, eV.A)({ application: r, analyticsLocations: l });
        return null != t.assets || (0, ex.A)(t) || null != x
            ? (0, a.jsxs)(tu, {
                  children: [
                      (0, a.jsxs)("div", {
                          className: c()(ta.tL, { [ta._2]: h }),
                          children: [
                              null != o && 0 !== Object.keys(o).length
                                  ? (0, a.jsxs)("div", {
                                        className: ta.YY,
                                        children: [
                                            (0, a.jsx)("img", {
                                                alt: o.large_text ?? "",
                                                src: i(m, o.large_image, [160, 160]) ?? A,
                                                className: c()(ta.nX, { [ta.p8]: null != o.small_image }),
                                            }),
                                            null != o.small_image
                                                ? (0, a.jsx)("img", {
                                                      alt: o.small_text ?? "",
                                                      src: i(m, o.small_image, [64, 64]),
                                                      className: ta.rp,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, a.jsx)("div", {
                                        className: ta.YY,
                                        children: (0, a.jsx)("img", { alt: "", src: A, className: ta.nX }),
                                    }),
                              (0, a.jsxs)("div", {
                                  className: ta.JD,
                                  children: [
                                      to(null != d && "" !== d ? d : t.name),
                                      null != u ? tc(u) : null,
                                      (() => {
                                          let { timestamps: e } = t;
                                          return null == e || !(0, eG.A)(t) || (0, eg.A)(t)
                                              ? null
                                              : tc(
                                                    (0, ex.A)(t)
                                                        ? (0, a.jsx)(td, { timestamps: e })
                                                        : (0, a.jsx)(e2.Ay, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: e2.Ay.Locations.USER_ACTIVITY,
                                                              className: ta.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, a.jsx)(tx, { activity: t, user: s }),
                          ],
                      }),
                      (0, a.jsx)(tp, { activity: t, analyticsLocations: l }),
                  ],
              })
            : null;
    }),
    (tf.XboxSection = (e) => {
        let { title: t } = e;
        return (0, a.jsx)(tu, {
            children: (0, a.jsxs)("div", {
                className: ta.oc,
                children: [
                    (0, a.jsx)(tn.A, { className: ta.Ai }),
                    (0, a.jsxs)("div", {
                        className: ta.__invalid_xboxSectionDetails,
                        children: [to(t), tc(V.intl.string(V.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (tf.SpotifySection = (e) => {
        let {
            activity: { assets: t, details: n, state: i, application_id: s },
            partySize: l,
            members: r,
            isSolo: o,
            getAssetImage: d,
        } = e;
        return (0, a.jsx)(tu, {
            children: (0, a.jsxs)("div", {
                className: ta.uy,
                children: [
                    null != t
                        ? (0, a.jsxs)("div", {
                              className: ta.YY,
                              children: [
                                  (0, a.jsx)("img", {
                                      alt: t.large_text ?? "",
                                      src: d(s, t.large_image, [160, 160]),
                                      className: c()(ta.nX, ta.Dy, { [ta.p8]: null != t.small_image }),
                                  }),
                                  o
                                      ? null
                                      : (0, a.jsx)(tt.A, {
                                            className: ta.rp,
                                            color: ey.A.unsafe_rawColors.PLATFORM_SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, a.jsx)("div", {}),
                    (0, a.jsxs)("div", {
                        children: [null != n ? to(n) : null, null != i ? tc(i.replace(/; /g, ", ")) : null],
                    }),
                    (0, a.jsx)(tl.A, { minAvatarsShown: o ? 2 : 1, partySize: l, members: r }),
                ],
            }),
        });
    }),
    (tf.TwitchSection = (e) => {
        let t,
            { activity: i, user: s, getAssetImage: l, guildId: r } = e,
            { name: o, details: d, assets: u, application_id: m } = i;
        return (
            null != u &&
                (0, e_.A)(i) &&
                (t = (0, a.jsx)(eX.A, {
                    className: ta.E6,
                    aspectRatio: 16 / 9,
                    children: (0, a.jsxs)(O.D, {
                        href: (0, ew.A)(i),
                        tag: "a",
                        target: "_blank",
                        children: [
                            (0, a.jsx)("img", {
                                alt: u.large_text ?? "",
                                src: l(m, u.large_image, [900, 500]),
                                className: ta.ZB,
                            }),
                            (0, a.jsx)("img", { src: n(606621), className: ta.vc, alt: "" }),
                        ],
                    }),
                })),
            (0, a.jsxs)(tu, {
                children: [
                    (0, a.jsxs)("div", {
                        className: c()({ [ta.x5]: null == s, [ta.Qh]: null != s }),
                        children: [
                            (0, a.jsx)("img", { alt: "", src: ek.A.get(M.fg2.TWITCH).icon.lightSVG, className: ta.Gq }),
                            (0, a.jsxs)("div", { children: [to(o), null != d ? tc(d) : null] }),
                            null != s
                                ? (0, a.jsx)(eb.eu, {
                                      src: s.getAvatarURL(r, 24),
                                      "aria-label": s.username,
                                      className: ta.AZ,
                                      size: eP._3.SIZE_24,
                                  })
                                : null,
                        ],
                    }),
                    t,
                ],
            })
        );
    }),
    (tf.ApplicationStreamingSection = (e) => {
        let { activity: t, user: n, applicationStream: i, onPreviewClick: s, guildId: l } = e,
            r = (0, u.bG)([te.A], () => te.A.getChannel(i.channelId)),
            [o, c] = (0, e0.zP)(r),
            d = (0, a.jsxs)(O.D, {
                onClick: o ? s : void 0,
                className: ta.q_,
                children: [
                    (0, a.jsx)(e1.A, { stream: i, className: ta.IN }),
                    (0, a.jsx)(L.E, {
                        className: ta.Er,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, e0.CT)(c),
                    }),
                ],
            }),
            m =
                (function (e, t) {
                    if (Array.isArray(e)) {
                        let n = e;
                        null != t && !1 !== t.discoverable && (n = [...n, null]);
                        let i = null;
                        for (let e of n) {
                            let n = eU(e, t);
                            if (null != n) return { activity: e, activityText: n };
                            e?.type === M.$pd.CUSTOM_STATUS && null != e.emoji && (i = e);
                        }
                        return i?.emoji != null ? { activity: i, activityText: null } : null;
                    }
                    return eU(e, t);
                })(t, i)?.activityText ?? V.intl.string(V.t.eXan7B),
            h = (0, eK.A)({ userId: n.id, guildId: l }),
            A = (0, eZ.a)({ displayNameStyles: h });
        return (0, a.jsxs)(tu, {
            children: [
                (0, a.jsxs)("div", {
                    className: ta.ME,
                    children: [
                        (0, a.jsx)(eb.eu, {
                            size: eP._3.SIZE_32,
                            src: n.getAvatarURL(l, 32),
                            "aria-label": n.username,
                            className: ta.OL,
                        }),
                        (0, a.jsxs)("div", { children: [to(ts.Ay.getName(n), A), tc(m)] }),
                        (0, a.jsx)(eq.Ay, { size: eq.Ay.Sizes.SMALL }),
                    ],
                }),
                d,
            ],
        });
    }),
    (tf.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: s } = e,
            [l, o] = r.useState(null),
            c = t.application_id;
        r.useEffect(() => {
            null != c &&
                (0, eI.RG)(c, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [c]);
        let d = (0, u.yK)([eo.default, e4.default], () =>
                Array.from(s)
                    .map((e) => (e4.default.getId() === e ? null : eo.default.getUser(e)))
                    .filter(ti.Vq),
            ),
            m = (0, eO.p)(),
            { analyticsLocations: h } = (0, b.Ay)();
        if (null == c) return null;
        let A = eW.A.getApplication(c);
        if (null == A) return null;
        let x = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            p = (0, eI.uD)(A.id, l, 300);
        return (0, a.jsxs)(tu, {
            children: [
                (0, a.jsxs)("div", {
                    className: ta.h1,
                    children: [
                        (0, a.jsx)(eJ.A, { game: A, size: eJ.M.XSMALL, className: ta.VZ }),
                        (0, a.jsx)("div", {
                            className: ta.F0,
                            children: (0, a.jsx)(L.E, { variant: "text-sm/semibold", children: A.name }),
                        }),
                        null != x
                            ? (0, a.jsx)("div", {
                                  className: ta.T$,
                                  children: (0, a.jsx)(L.E, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, a.jsx)(td, { timestamps: x }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: ta.Kt,
                    children: [
                        null != p ? (0, a.jsx)("img", { src: p, alt: A.name, className: ta.pV }) : null,
                        (0, a.jsxs)("div", {
                            className: ta.d4,
                            children: [
                                (0, a.jsx)(e8.LN, { users: d, guildId: i, channelId: n.id }),
                                (0, a.jsx)("div", {
                                    className: ta.ZE,
                                    children: (0, a.jsx)(R.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: V.intl.string(V.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, eF.A)({
                                                    applicationId: c,
                                                    activityChannelId: n.id,
                                                    locationObject: m.location,
                                                    analyticsLocations: h,
                                                });
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    });
var tI = n(812808);
function tj(e) {
    let { party: t, onChannelContextMenu: n, quest: i } = e,
        s = (0, tI.G)(),
        { voiceChannels: l, currentActivities: r, partiedMembers: o, applicationStreams: c, guildContext: d } = t,
        u = (0, en.sb)(i),
        m = [],
        h = (e) => {
            let { length: t } = m;
            m.push(e);
        };
    for (let { activity: e } of (l.length > 0 &&
        l.forEach((e) => {
            let { members: t, channel: i, guild: s } = e;
            h(
                (0, a.jsx)(
                    tf.VoiceSection,
                    {
                        guild: s,
                        channel: i,
                        members: t,
                        partySize: (function (e) {
                            let t = e.length;
                            return { knownSize: t, unknownSize: 0, totalSize: t + 0 };
                        })(t),
                        onChannelContextMenu: n,
                    },
                    `voice-${i.id}`,
                ),
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = ej.Fm(e);
            if (null != t) {
                h(t);
                break;
            }
        }
    return (
        c.length > 0 &&
            s &&
            c.forEach((e) => {
                let { stream: t, streamUser: n, activity: i } = e;
                h(
                    (0, a.jsx)(
                        tf.ApplicationStreamingSection,
                        {
                            guildId: d?.id,
                            user: n,
                            activity: i,
                            applicationStream: t,
                            onPreviewClick: () => {
                                eh.default.selectVoiceChannel(t.channelId), (0, eA.Nl)(t);
                            },
                        },
                        `application-stream-${t.ownerId}`,
                    ),
                );
            }),
        r.forEach((e, t) => {
            let { activity: n, game: s, playingMembers: c, activityUser: m } = e;
            if (null == n || null == n.type) return null;
            if (n.type === M.$pd.PLAYING)
                if (r.length > 1 && !(0, ex.A)(n) && null != s)
                    h(
                        (0, a.jsx)(
                            tf.GameSection,
                            {
                                icon: s.getIconURL(64),
                                name: s.name,
                                partySize: { knownSize: c.length, unknownSize: 0, totalSize: c.length },
                                members: c,
                                activity: n,
                            },
                            `game-${n.session_id ?? t}-${n.application_id ?? t}`,
                        ),
                    );
                else if ((0, ep.A)(n)) {
                    let e = new Set(c.map((e) => e.id)),
                        t = l.find((e) => null != e)?.channel;
                    null != t &&
                        h(
                            (0, a.jsx)(
                                tf.EmbeddedActivitySection,
                                { activity: n, participants: e, channel: t, guildId: t.guild_id },
                                `embedded-activity-${n.application_id}`,
                            ),
                        );
                } else
                    (0, eN.A)(n)
                        ? h((0, a.jsx)(tf.XboxSection, { title: s.name }, `xbox-${n.session_id ?? t}`))
                        : h(
                              (0, a.jsx)(
                                  tf.RichPresenceSection,
                                  { activity: n, getAssetImage: eI.uD, user: m },
                                  `rich-presence-${n.session_id ?? t}-${m.id}`,
                              ),
                          );
            else if ((0, e_.A)(n)) {
                let e = l.length > 0 && l[0].members.length > 1,
                    i = c.length > 1;
                h(
                    (0, a.jsx)(
                        tf.TwitchSection,
                        { guildId: d?.id, activity: n, user: e || i ? m : null, getAssetImage: eI.uD },
                        `streaming-${n.session_id ?? t}`,
                    ),
                );
            } else
                n.type === M.$pd.LISTENING &&
                    ((0, eg.A)(n)
                        ? h(
                              (0, a.jsx)(
                                  tf.SpotifySection,
                                  {
                                      activity: n,
                                      isSolo: 1 === o.length,
                                      partySize: { knownSize: c.length, unknownSize: 0, totalSize: c.length },
                                      getAssetImage: eI.uD,
                                      members: c,
                                  },
                                  `spotify-${n.session_id ?? t}-${m.id}`,
                              ),
                          )
                        : (null != n.assets || (0, ex.A)(n)) &&
                          h(
                              (0, a.jsx)(
                                  tf.RichPresenceSection,
                                  { activity: n, getAssetImage: eI.uD, user: m },
                                  `rich-presence-${n.session_id ?? t}-${m.id}`,
                              ),
                          ));
            u &&
                null != i &&
                null != s &&
                (0, es.zS)(n, i) &&
                (null == i.userStatus || !(0, ei.gO)(i.userStatus, J.uF.ACTIVITY_PANEL)) &&
                h((0, a.jsx)(ef.A, { quest: i }, `quest-${i.id}-${n.session_id ?? t}`));
        }),
        m.length > 0 ? (0, a.jsx)(tf.Body, { children: m }) : null
    );
}
n(595);
var tv = n(284009),
    tC = n.n(tv),
    ty = n(409626),
    tS = n(692969);
function tE(e) {
    let { party: t, onUserContextMenu: i } = e,
        { priorityMembers: s, partiedMembers: l, guildContext: r } = t,
        o = s[0],
        c = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                s = n.filter((e) => !i.has(e.id)),
                l = ts.Ay.getName(t[0].user),
                a = null != t[1] ? ts.Ay.getName(t[1].user) : null != s[0] ? ts.Ay.getName(s[0]) : null;
            switch (n.length) {
                case 1:
                    return l;
                case 2:
                    return V.intl.format(V.t.t1DyC1, { user1: l, user2: a });
                default:
                    return V.intl.format(V.t["5CSEcJ"], { user1: l, user2: a, extras: n.length - 2 });
            }
        })(t),
        { subtitle: d, icon: u } = (function (e) {
            let { priorityMembers: t, partiedMembers: i, voiceChannels: s, currentActivities: l } = e,
                r = t.length,
                o = i.length - r,
                c = l[0],
                d = c?.activity,
                u = c?.startedPlayingTime,
                m = { name: d?.name ?? "" };
            if ((0, ep.A)(d) && null != d)
                return {
                    subtitle: (0, a.jsx)(e2.Ay, {
                        start: u,
                        location: e2.Ay.Locations.ACTIVITY_FEED_NEW,
                        messageProps: m,
                    }),
                    icon: null,
                };
            if (r + o === 1 && null != c) {
                let { game: e } = c;
                if (null == d) return { subtitle: null, icon: null };
                let t = ej.Ij(d);
                if (null != t) return t;
                switch (d.type) {
                    case M.$pd.PLAYING:
                        if ((0, eN.A)(d))
                            return {
                                subtitle: V.intl.string(V.t.tO8wOx),
                                icon: (0, a.jsx)(tf.Header.Icon, { src: tf.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, a.jsx)(e2.Ay, {
                                start: u,
                                location: e2.Ay.Locations.ACTIVITY_FEED_NEW,
                                messageProps: m,
                            }),
                            icon:
                                null != e
                                    ? (0, a.jsx)(tf.Header.Icon, {
                                          src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648),
                                      })
                                    : null,
                        };
                    case M.$pd.STREAMING:
                        return {
                            subtitle: V.intl.string(V.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, a.jsx)(tf.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    case M.$pd.LISTENING:
                        let i;
                        return (
                            (i = (0, eg.A)(d)
                                ? (0, a.jsx)(tf.Header.Icon, { src: tf.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(64)
                                  ? (0, a.jsx)(tf.Header.Icon, { src: e.getIconURL(64) })
                                  : (0, a.jsx)(tf.Header.Icon, { src: n(960648) })),
                            { subtitle: V.intl.formatToPlainString(V.t.NF5xop, { name: d.name }), icon: i }
                        );
                    case M.$pd.WATCHING:
                        return {
                            subtitle: V.intl.formatToPlainString(V.t.pW3Ip3, { name: d.name }),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, a.jsx)(tf.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    default:
                        return { subtitle: V.intl.string(V.t.grGyaf), icon: null };
                }
            }
            if (0 === l.length) {
                if (s.length > 0) return { subtitle: V.intl.string(V.t.grGyaf), icon: null };
                let e = l[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = ej.Ij(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === M.$pd.LISTENING)
                        return {
                            subtitle: V.intl.string(V.t.rmnkz4),
                            icon: (0, a.jsx)(tf.Header.Icon, { src: tf.Header.Icon.Src.SPOTIFY }),
                        };
                }
            } else if (1 === l.length) {
                let e = l.find((e) => null != e.activity);
                if (null == e) return { subtitle: null, icon: null };
                let { activity: t, game: n, startedPlayingTime: i } = e;
                return (
                    tC()(null != t, "Activity was null somehow"),
                    {
                        subtitle: (0, a.jsx)(e2.Ay, {
                            start: i,
                            location: e2.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: m,
                        }),
                        icon:
                            null != n && null != n.getIconURL(64)
                                ? (0, a.jsx)(tf.Header.Icon, { src: n.getIconURL(64) })
                                : null,
                    }
                );
            }
            return {
                subtitle: V.intl.string(V.t.sau5tt),
                icon: (0, a.jsx)(tf.Header.Icon, { src: tf.Header.Icon.Src.MULTIPLE }),
            };
        })(t),
        m = (0, tS.A)({
            applicationId: t.currentActivities[0]?.activity?.application_id,
            location: "FriendsActivityFeed",
            source: ty.Ob.FriendsActivityFeed,
        }),
        h = (0, eK.A)({ userId: o.user.id, guildId: r?.id }),
        A = (0, eZ.a)({ displayNameStyles: h });
    return (0, a.jsx)(tf.Header, {
        priorityUser: o,
        guildId: r?.id,
        title: c,
        subtitle: d,
        icon: u,
        onSubtitleClick: m,
        onIconClick: m,
        onContextMenu: (e) => i(e, o.user),
        displayNameFont: 1 === l.length ? A : void 0,
    });
}
var tT = n(550079),
    tb = n(477782),
    tP = n(964486),
    tL = n(308368),
    tR = n(780907),
    tD = n(933958),
    tO = n(776677),
    tk = n(874546),
    tF = n(328153),
    tw = n(651743),
    tG = n(30370),
    tM = n(134861),
    tU = n(498642),
    tV = n(71393),
    tY = n(189081),
    t$ = n(375492),
    tH = n(576705),
    tW = n(994500),
    tz = n(309010),
    tq = n(461213),
    tB = n(977997),
    tX = n(689168),
    tQ = n(340829),
    tK = n(144914),
    tZ = n(715671);
let tJ = ek.A.get(M.fg2.XBOX).name;
var t0 = n(975732),
    t1 = n(297413),
    t2 = n(564450);
function t3(e) {
    let { user: t, status: n, guildId: i } = e;
    return (0, a.jsxs)("div", {
        className: t2.Ku,
        children: [
            (0, a.jsx)(eb.eu, {
                src: t.getAvatarURL(i, 24),
                className: t2.my,
                "aria-label": t.username,
                size: eP._3.SIZE_24,
                status: n,
            }),
            (0, a.jsx)(t1.A, { user: t, hideDiscriminator: !0 }),
        ],
    });
}
function t7(e) {
    let { label: t } = e;
    return (0, a.jsxs)("div", {
        className: t2.Ku,
        children: [(0, a.jsx)("div", { className: c()(t2.my, t2.L5) }), (0, a.jsx)("div", { children: t })],
    });
}
function t5(e) {
    let {
            priorityMembers: t,
            otherMembers: n,
            totalMembers: i,
            activity: s,
            guildId: l,
            sourceAnalyticsLocations: r,
        } = e,
        o = [];
    for (let { user: e, status: n } of t)
        o.push(
            (0, a.jsx)(tb.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, a.jsx)(t3, { ...t, user: e, status: n, guildId: l }),
                action: () => (0, t0.openUserProfileModal)({ userId: e.id, guildId: l, sourceAnalyticsLocations: r }),
            }),
        );
    for (let e of n)
        o.push(
            (0, a.jsx)(tb.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, a.jsx)(t3, { ...t, user: e, guildId: l }),
                action: () => (0, t0.openUserProfileModal)({ userId: e.id, guildId: l, sourceAnalyticsLocations: r }),
            }),
        );
    let c = i - o.length;
    return (
        c > 0 &&
            o.push(
                (0, a.jsx)(tb.Dr, {
                    id: `unknown-members-${s?.session_id}`,
                    render: (e) =>
                        (0, a.jsx)(t7, { ...e, label: V.intl.formatToPlainString(V.t["6Kqn9M"], { count: c }) }),
                }),
            ),
        o
    );
}
var t9 = n(308528),
    t8 = n(58149),
    t6 = n(855511);
function t4(e) {
    return {
        af_voice_chat: e.voiceChannels.length > 0,
        af_people_count: e.partiedMembers.length,
        af_rich_presence: e.currentActivities.some((e) => {
            let { activity: t } = e;
            return (0, ex.A)(t);
        }),
        game_platform: e.currentActivities.length > 0 ? (0, t6.A)(e.currentActivities[0].activity) : null,
    };
}
var ne = n(655116),
    nt = n(341335),
    nn = n(286617),
    ni = n(533207),
    ns = n(881335),
    nl = n(272984);
function na(e) {
    let t,
        n,
        i,
        { party: s, close: l, onSelect: o } = e,
        c = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                { priorityMembers: n, partiedMembers: i } = e,
                s = r.useContext(ed.AnalyticsContext),
                l = n.map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
                o = 1 === i.length && 1 === n.length,
                c = n.length - i.length > 0;
            return (o || t) && !c && 0 !== l.length
                ? (0, a.jsx)(tb.Dr, {
                      id: "message",
                      action: function () {
                          t9.A.openPrivateChannel({ recipientIds: l }).then((t) =>
                              t8.Ay.trackWithMetadata(M.HAw.ACTIVITY_FEED_DM_VISITED, {
                                  source: { ...s.location, object: M.ZSU.LIST_ITEM },
                                  channel_id: t,
                                  recipient_id: "string" == typeof l ? l : l[0],
                                  af_recently_played: !1,
                                  ...t4(e),
                              }),
                          );
                      },
                      label: V.intl.string(V.t["g33r/P"]),
                  })
                : null;
        })(s),
        d =
            ((t = r.useContext(ed.AnalyticsContext)),
            (n = s.voiceChannels[0]),
            (i = (0, u.bG)([tH.A], () => null != n && tH.A.can(M.xBc.CONNECT, n.channel))),
            null == n
                ? null
                : [
                      (0, a.jsx)(
                          tb.Dr,
                          {
                              id: "join-voice",
                              action: function () {
                                  (0, e5.iN)(n.channel.id),
                                      eh.default.selectVoiceChannel(n.channel.id),
                                      t8.Ay.trackWithMetadata(M.HAw.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                                          source: { ...t.location, object: M.ZSU.LIST_ITEM },
                                          guild_id: n.guild.id,
                                          channel_id: n.channel.id,
                                          ...t4(s),
                                      });
                              },
                              label: V.intl.string(V.t["8yOlh9"]),
                              disabled: !i,
                          },
                          "join-voice",
                      ),
                      (0, a.jsx)(
                          tb.Dr,
                          {
                              id: "goto-server",
                              action: function () {
                                  (0, e9.u)(n.guild.id),
                                      t8.Ay.trackWithMetadata(M.HAw.ACTIVITY_FEED_GUILD_VISITED, {
                                          source: { ...t.location, object: M.ZSU.LIST_ITEM },
                                          guild_id: n.guild.id,
                                          af_recently_played: !1,
                                          ...t4(s),
                                      });
                              },
                              label: V.intl.string(V.t.RGgqm1),
                          },
                          "goto-server",
                      ),
                  ]),
        m = (function (e) {
            let { applicationStreams: t } = e;
            return t.map((e) => {
                let { stream: t, streamUser: n } = e;
                return (0, a.jsx)(
                    tb.Dr,
                    {
                        id: `spectate-${t.ownerId}`,
                        action: () => {
                            eh.default.selectVoiceChannel(t.channelId), (0, eA.Nl)(t);
                        },
                        label: V.intl.formatToPlainString(V.t.m09d0T, { streamerName: ts.Ay.getName(n) }),
                    },
                    `spectate-${t.ownerId}`,
                );
            });
        })(s),
        h = (function (e) {
            let { currentActivities: t, isSpotifyActivity: n } = e,
                i = t[0],
                s = (function (e, t) {
                    let n = (0, u.bG)(
                        [ne.A, e4.default],
                        () => (null != t ? (0, nn.A)(ne.A, e4.default, t, e) : void 0),
                        [e, t],
                    );
                    if (null == n || null == e || null == t) return null;
                    let i = n.isCurrentUser || n.notPlayable || n.playingSameTrack,
                        s = n.isCurrentUser || n.syncingWithUser || n.syncingWithParty;
                    return [
                        (0, a.jsx)(
                            tb.Dr,
                            {
                                id: `spotify-play-${e.session_id}`,
                                action: () => (0, ns.A)(n, nl.Qp.USER_ACTIVITY_PLAY, void 0),
                                label: V.intl.string(V.t.rRffNz),
                                subtext: i ? (0, nt.A)(n, nl.Qp.USER_ACTIVITY_PLAY) : void 0,
                                disabled: i,
                            },
                            `spotify-play-${e.session_id}`,
                        ),
                        n.canPlaySpotify
                            ? (0, a.jsx)(
                                  tb.Dr,
                                  {
                                      id: `spotify-sync-${e.session_id}`,
                                      action: () => (0, ni.A)(n, nl.Qp.USER_ACTIVITY_SYNC, void 0),
                                      label: V.intl.string(V.t.eU3inB),
                                      subtext: s ? (0, nt.A)(n, nl.Qp.USER_ACTIVITY_SYNC) : void 0,
                                      disabled: s,
                                  },
                                  `spotify-sync-${e.session_id}`,
                              )
                            : null,
                    ];
                })(i?.activity, i?.activityUser);
            return n ? s : null;
        })(s),
        A = (function (e) {
            let { currentActivities: t } = e,
                n = t.length > 1,
                i = (function (e) {
                    let { currentActivities: t } = e,
                        n = t.some((e) => {
                            let { activity: t } = e;
                            return (0, ex.A)(t);
                        }),
                        i = (0, u.bG)([tG.A], () =>
                            tG.A.getAccounts().some((e) => e.type === ek.A.get(M.fg2.XBOX).type),
                        ),
                        s = t.filter((e) => {
                            let { activity: t } = e;
                            return (0, eN.A)(t);
                        }),
                        l = s.length > 0,
                        r = s.some((e) => {
                            let { activity: t } = e;
                            return (0, tk.Ay)(t);
                        });
                    return n || i || !l || r
                        ? null
                        : (0, a.jsx)(tb.Dr, {
                              id: "xbox-connect",
                              action: () => (0, G.openUserSettings)(w.X.CONNECTIONS_PANEL),
                              label: V.intl.formatToPlainString(V.t.XWSHTb, { platform: tJ }),
                          });
                })(e),
                s = (function (e) {
                    let { currentActivities: t } = e,
                        n = r.useContext(ed.AnalyticsContext);
                    return (0, u.yK)([
                        eo.default,
                        tY.A,
                        te.A,
                        tV.A,
                        tU.A,
                        tW.A,
                        tz.A,
                        tB.A,
                        tH.A,
                        t$.A,
                        tq.A,
                        tD.Ay,
                        tw.A,
                        tQ.A,
                        tM.A,
                        tF.Ay,
                        tX.A,
                    ], () => {
                        let e = eo.default.getCurrentUser();
                        return t
                            .filter((e) => !(0, ep.A)(e.activity))
                            .map((t) => {
                                let { activity: i, game: s, activityUser: l } = t,
                                    a = tY.A.getActiveLibraryApplication(s.id);
                                return {
                                    ...t,
                                    libraryApplication: a,
                                    activityJoinability: (0, tO.A)({
                                        user: l,
                                        activity: i,
                                        application: s,
                                        channelId: null,
                                        currentUser: e,
                                        isEmbedded: !1,
                                        ChannelStore: te.A,
                                        GuildStore: tV.A,
                                        GuildMemberCountStore: tU.A,
                                        RelationshipStore: tW.A,
                                        SelectedChannelStore: tz.A,
                                        VoiceStateStore: tB.A,
                                        PermissionStore: tH.A,
                                        LocalActivityStore: t$.A,
                                        SelfPresenceStore: tq.A,
                                        EmbeddedActivitiesStore: tD.Ay,
                                    }),
                                    canPlay: (0, tK.A)({
                                        LibraryApplicationStore: tY.A,
                                        LaunchableGameStore: tw.A,
                                        DispatchApplicationStore: tQ.A,
                                        ConnectedAppsStore: tM.A,
                                        applicationId: s.id,
                                        branchId: null != a ? a.branchId : null,
                                    }),
                                    isJoining: tX.A.getState(s.id, M.xL.JOIN) === M.eAD.LOADING,
                                    isLaunching: tw.A.launchingGames.has(s.id),
                                    isRunning: tF.Ay.getRunningVerifiedApplicationIds().includes(s.id),
                                    location: n.location,
                                };
                            });
                    }, [n.location, t]);
                })(e),
                l = [];
            for (let e of s) {
                let { activity: t } = e;
                null != t &&
                    null != t.type &&
                    l.push(
                        (function (e, t) {
                            let { activity: n, activityUser: i, game: s, activityJoinability: l, isJoining: r } = e;
                            if (null == n) return null;
                            if (l === tO.o.JOINED)
                                return (0, a.jsx)(tb.Dr, {
                                    id: `joined-game-${n.session_id}`,
                                    label: V.intl.string(V.t.KC26NR),
                                    subtext: n.name,
                                    disabled: !0,
                                });
                            if (l === tO.o.CAN_JOIN)
                                return (0, a.jsx)(tb.Dr, {
                                    id: `join-game-${n.session_id}`,
                                    label: r ? V.intl.string(V.t.bf6Ci7) : V.intl.string(V.t.VJlc0S),
                                    subtext: n.name,
                                    disabled: r,
                                    action: () => {
                                        tR.Ay.join({
                                            userId: i.id,
                                            sessionId: n.session_id,
                                            applicationId: s.id,
                                            channelId: null,
                                            messageId: null,
                                            source: M.ThZ.USER_ACTIVITY_ACTIONS,
                                        });
                                    },
                                });
                            if ((0, tk._C)(n)) {
                                async function o() {
                                    if (null == n) return;
                                    let e = await tL.A.sendActivityInviteUser({
                                        type: M.xL.JOIN_REQUEST,
                                        userId: i.id,
                                        activity: n,
                                        location: M.ThZ.USER_ACTIVITY_ACTIONS,
                                    });
                                    null != e && eh.default.selectPrivateChannel(e.id);
                                }
                                return (0, a.jsx)(tb.Dr, {
                                    id: `join-${n.session_id}`,
                                    label: t
                                        ? V.intl.formatToPlainString(V.t.wFAvxM, { name: i.toString() })
                                        : V.intl.string(V.t.OKsSCR),
                                    subtext: n.name,
                                    action: o,
                                });
                            }
                            return null;
                        })(e, n),
                        (function (e, t) {
                            let {
                                activity: n,
                                game: i,
                                libraryApplication: s,
                                location: l,
                                canPlay: r,
                                isRunning: o,
                                isLaunching: c,
                            } = e;
                            if (!r || null == n) return null;
                            let d = o
                                ? V.intl.formatToPlainString(V.t["gBme/4"], { name: i.name })
                                : c
                                  ? V.intl.formatToPlainString(V.t.WtSQwG, { name: i.name })
                                  : void 0;
                            return (0, a.jsx)(tb.Dr, {
                                id: `play-${n.session_id}`,
                                action: function () {
                                    (0, tZ.playApplication)(i.id, s, {
                                        analyticsParams: { location: { ...l, object: M.ZSU.LIST_ITEM } },
                                    });
                                },
                                label: t
                                    ? V.intl.formatToPlainString(V.t.ZDZEJN, { name: i.name })
                                    : V.intl.string(V.t.XKUw8m),
                                disabled: o || c,
                                subtext: d,
                            });
                        })(e, n),
                    );
            }
            return [...l, i];
        })(s),
        x = (function (e) {
            let { priorityMembers: t, partiedMembers: n, currentActivities: i, guildContext: s } = e,
                l = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                o = n.filter((e) => !l.has(e.id)),
                { analyticsLocations: c } = (0, b.Ay)(),
                d = r.useMemo(() => {
                    let e = i
                        .flatMap((e) => {
                            let { playingMembers: t } = e;
                            return t;
                        })
                        .map((e) => e.id);
                    return n.filter((t) => !e.includes(t.id));
                }, [n, i]);
            if (i.length <= 1 && 0 === d.length)
                return (0, a.jsx)(tb.rX, {
                    label: n.length > 1 ? V.intl.formatToPlainString(V.t.C4WXvc, { memberCount: n.length }) : void 0,
                    children: t5({
                        priorityMembers: t,
                        otherMembers: o,
                        totalMembers: n.length,
                        activity: i[0]?.activity ?? void 0,
                        guildId: s?.id,
                        sourceAnalyticsLocations: c,
                    }),
                });
            let u = i.map((e, n) => {
                    let { playingMembers: i, game: r, activity: o } = e,
                        d = new Set(i.map((e) => e.id));
                    return (0, a.jsx)(
                        tb.rX,
                        {
                            label: `${r.name} - ${i.length}`,
                            children: t5({
                                priorityMembers: t.filter((e) => {
                                    let { user: t } = e;
                                    return d.has(t.id);
                                }),
                                otherMembers: i.filter((e) => !l.has(e.id)),
                                totalMembers: i.length,
                                activity: o ?? void 0,
                                guildId: s?.id,
                                sourceAnalyticsLocations: c,
                            }),
                        },
                        n,
                    );
                }),
                m = d.map((e) => e.id);
            return [
                ...u,
                (0, a.jsx)(tb.rX, {
                    label: `${V.intl.string(V.t["mIx+gG"])} - ${d.length}`,
                    children: t5({
                        priorityMembers: t.filter((e) => {
                            let { user: t } = e;
                            return m.includes(t.id);
                        }),
                        otherMembers: d.filter((e) => !l.has(e.id)),
                        totalMembers: d.length,
                        guildId: s?.id,
                        sourceAnalyticsLocations: c,
                    }),
                }),
            ];
        })(s);
    return (
        (0, tP.Ay)(() => {
            let e = s.currentActivities
                .filter((e) => e.game?.name != null && (0, ed.isGameApplicationType)(e.game?.type))
                .map((e) => e.game.name);
            ed.default.track(M.HAw.OPEN_POPOUT, { type: "Now Playing Card Popout", games_detected: e });
        }),
        (0, a.jsxs)(tT.W, {
            "data-menu-migrated": !0,
            navId: "now-playing-menu",
            onClose: l,
            "aria-label": V.intl.string(V.t.ogxXGq),
            onSelect: o,
            children: [
                c,
                (0, a.jsxs)(tb.rX, { children: [d, m] }),
                (0, a.jsx)(tb.rX, { children: h }),
                (0, a.jsx)(tb.rX, { children: A }),
                x,
            ],
        })
    );
}
var nr = n(442433),
    no = n(707606),
    nc = n(654487),
    nd = n(522986);
let nu = 15 * eu.A.Millis.MINUTE,
    nm =
        ((s = function (e) {
            let { party: t, onUserContextMenu: n, onChannelContextMenu: i, quest: s } = e,
                l = r.useRef(null),
                o = (0, a.jsx)(tE, { party: t, onUserContextMenu: n }),
                c = (0, a.jsx)(tj, { party: t, onChannelContextMenu: i, quest: s }),
                { partiedMembers: d, applicationStreams: u, currentActivities: m, voiceChannels: h } = t,
                A = d.length,
                x = u.length,
                p = m.length,
                g = h.length > 0,
                N = r.useCallback(() => {
                    let e = m
                        .filter((e) => e.game?.name != null && (0, ed.isGameApplicationType)(e.game?.type))
                        .map((e) => e.game.name);
                    ed.default.track(M.HAw.NOW_PLAYING_CARD_HOVERED, {
                        num_users: A,
                        num_streams: x,
                        num_activities: p,
                        in_voice_channel: g,
                        games_detected: e,
                    });
                }, [A, x, p, g, m]),
                _ = r.useMemo(() => B()(N, nu), [N]);
            return null != o || null != c
                ? (0, a.jsx)(X.Y, {
                      targetElementRef: l,
                      position: "left",
                      renderPopout: (e) => {
                          let { closePopout: n } = e;
                          return (0, a.jsx)(na, { party: t, close: n });
                      },
                      spacing: 8,
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, a.jsx)(tf, {
                              ...e,
                              ref: l,
                              onMouseEnter: _,
                              "aria-haspopup": "menu",
                              className: nd.MP,
                              active: n,
                              children: (0, a.jsxs)("div", { children: [o, c] }),
                          });
                      },
                  })
                : null;
        }),
        (0, no.A)(
            class extends r.Component {
                render() {
                    return (0, a.jsx)(s, {
                        ...this.props,
                        onMessageUser: this.handleMessageUser,
                        onUserContextMenu: this.handleUserContextMenu,
                        onGuildContextMenu: this.handleGuildContextMenu,
                        onChannelContextMenu: this.handleChannelContextMenu,
                    });
                }
                handleMessageUser(e, t) {
                    return t9.A.openPrivateChannel({ recipientIds: t.id });
                }
                handleUserContextMenu(e, t, i) {
                    (0, nr.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, user: t });
                        },
                        { onClose: i },
                    );
                }
                handleGuildContextMenu(e, t) {
                    (0, nr.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("49681"),
                            n.e("96382"),
                            n.e("20044"),
                            n.e("28136"),
                            n.e("82486"),
                            n.e("77602"),
                            n.e("68587"),
                            n.e("22547"),
                            n.e("86546"),
                            n.e("15373"),
                            n.e("42749"),
                            n.e("56026"),
                            n.e("16301"),
                            n.e("22191"),
                            n.e("30501"),
                            n.e("25961"),
                            n.e("2736"),
                            n.e("13848"),
                            n.e("47810"),
                            n.e("46291"),
                            n.e("41068"),
                            n.e("32347"),
                            n.e("8458"),
                            n.e("15666"),
                            n.e("11810"),
                            n.e("95765"),
                            n.e("13337"),
                            n.e("65338"),
                            n.e("4788"),
                            n.e("27343"),
                        ]).then(n.bind(n, 860417));
                        return (n) => (0, a.jsx)(e, { ...n, guild: t });
                    });
                }
                handleChannelContextMenu(e, t) {
                    let i = tV.A.getGuild(t.getGuildId());
                    if (null == i) return null;
                    (0, nr.L3)(e, async () => {
                        let { default: e } = await n.e("67596").then(n.bind(n, 113255));
                        return (n) => (0, a.jsx)(e, { ...n, channel: t, guild: i });
                    });
                }
            },
        )),
    nh = z().throttle(() => ea.u(), 3e5);
function nA() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: i,
            currentUser: s,
        } = (0, u.cf)([ec.A, er.A, eo.default], () => ({
            nowPlayingCards: ec.A.nowPlayingCards,
            loaded: ec.A.loaded,
            needsRefresh: er.A.shouldFetch(),
            fetching: er.A.isFetching(),
            currentUser: eo.default.getCurrentUser(),
        })),
        l = (0, u.bG)([Z.A], () => Z.A.quests),
        o = (0, en.oH)(Array.from(l.values()));
    r.useEffect(
        () => (
            p.h.wait(() => em.O()),
            () => {
                p.h.wait(() => em.v());
            }
        ),
        [s?.id],
    ),
        r.useEffect(() => {
            n && !i && nh();
        }, [n, i]);
    let { use_api_call: c } = et.getConfig({ location: "NowPlaying" }),
        { questsByPartyId: d, questIdsByPartyId: m } = r.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                i = new Set(),
                s = (0, el.$e)(l, nc.B3);
            for (let l of e)
                l.party.currentActivities.forEach((e) => {
                    let { activity: a } = e;
                    if (null == a) return;
                    let r = (0, es.nq)(s, a);
                    null == r || i.has(r.id) || (t.set(l.party.id, r), i.add(r.id), n.set(l.party.id, r.id));
                });
            return { questsByPartyId: t, questIdsByPartyId: n };
        }, [e, l, o]),
        h = (0, u.bG)([Z.A], () => Z.A.earnedQuestForPlacement.get(J.uF.ACTIVITY_PANEL), []),
        A = r.useRef([]),
        x = r.useMemo(() => {
            let e = Array.from(m.values()),
                t = A.current;
            return t.length === e.length && e.every((e, n) => e === t[n]) ? t : ((A.current = e), e);
        }, [m]);
    r.useEffect(() => {
        c && 0 !== x.length && (0, K.yO)(x, J.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [x, c, h]);
    let g = r.useMemo(() => {
            if (!c) return d;
            if (null == h) return new Map();
            let e = new Map();
            for (let [t, n] of m.entries()) {
                let i = h.earnedDecisionByQuestId.get(n),
                    s = l.get(n);
                (0, ei.Oh)(i) && i.shouldDeliver && null != s && e.set(t, s);
            }
            return e;
        }, [h, m, d, c, l]),
        N = null;
    return t
        ? (N =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, a.jsx)(nm, { party: t, quest: g.get(t.id) }, t.id);
                    })
                  : (0, a.jsxs)("div", {
                        className: nd.aM,
                        children: [
                            (0, a.jsx)(S.D, {
                                variant: "heading-md/semibold",
                                className: nd.jU,
                                children: V.intl.string(V.t["ngJ/5u"]),
                            }),
                            (0, a.jsx)(L.E, {
                                color: "none",
                                className: nd.BI,
                                variant: "text-sm/normal",
                                children: V.intl.string(V.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, a.jsx)("div", { className: nd.aM, children: (0, a.jsx)(Q.y, {}) });
}
var nx = n(678428);
function np() {
    let { analyticsLocations: e } = (0, b.Ay)(T.A.ACTIVE_NOW_COLUMN),
        t = (0, u.bG)([H.A], () => H.A.hasConsented(M.YAq.PERSONALIZATION)) ? [] : [C.M.NOW_PLAYING_CONSENT_CARD],
        n = (0, f.GV)();
    return (0, a.jsx)(b.f5, {
        value: e,
        children: (0, a.jsx)(E.A, {
            section: M.JJy.ACTIVE_NOW_COLUMN,
            children: (0, a.jsx)("aside", {
                className: c()(nx.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, a.jsx)(y.Ip, {
                    className: nx.XG,
                    children: (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(S.D, {
                                variant: "heading-lg/semibold",
                                className: nx.wx,
                                id: n,
                                children: V.intl.string(V.t.F4Zggw),
                            }),
                            (0, a.jsx)(P.Ay, {
                                contentTypes: t,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === C.M.NOW_PLAYING_CONSENT_CARD)
                                        return (0, a.jsx)($, {
                                            className: nx.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, a.jsx)(nA, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
var ng = n(210714),
    nN = n(363195),
    n_ = n(595623),
    nf = n(912309),
    nI = n(573725),
    nj = n(49229),
    nv = n(953051),
    nC = n(395422),
    ny = n(650583),
    nS = n(235351),
    nE = n(818050);
let nT = n(892799),
    nb = { canSend: !1, hint: null, success: null, error: null },
    nP = (0, f.Ld)(),
    nL = `${nP}-decription`,
    nR = `${nP}-error`;
function nD(e, t) {
    switch (t.type) {
        case "RESET":
            return nb;
        case "SUCCESS":
            return { ...nb, success: t.text };
        case "HINT":
            return { ...nb, canSend: !0, hint: t.text };
        case "ERROR":
            return { ...e, canSend: !0, error: t.text };
    }
}
function nO(e) {
    let { placeholder: t = V.intl.string(V.t["Rn/sLl"]) } = e,
        n = r.useRef(null),
        i = r.useRef(null),
        [s, l] = r.useReducer(nD, nb),
        { canSend: o, hint: d, error: u, success: m } = s;
    return (
        r.useEffect(() => {
            null != m &&
                (tC()(null != n.current, "Input is submitting when not mounted"),
                (n.current.value = ""),
                n.current.focus());
        }, [m, n]),
        (0, a.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), tC()(null != n.current, "Input is submitted when not mounted");
                let t = n.current.value.trim();
                !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
                let i = (0, nC.Ty)(t);
                null != i
                    ? l({ type: "ERROR", text: i })
                    : nj.A.sendRequest({ discordTag: t, context: { location: "Add Friend" } }).then(
                          () => l({ type: "SUCCESS", text: V.intl.format(V.t.Rtl1Ep, { discordTag: t }) }),
                          (e) => l({ type: "ERROR", text: (0, nC.vU)(e.body?.code, t) }),
                      );
            },
            autoComplete: "off",
            children: [
                (0, a.jsxs)("div", {
                    className: nS.QR,
                    children: [
                        (0, a.jsx)(L.E, {
                            tag: "div",
                            variant: "heading-md/normal",
                            children: V.intl.string(V.t["Rn/sLl"]),
                        }),
                        (0, a.jsx)("img", { src: nT, alt: "Wumpus Waving" }),
                    ],
                }),
                (0, a.jsx)(eR.vN, {
                    focusTarget: n,
                    ringTarget: i,
                    ringClassName: nS.hN,
                    children: (0, a.jsxs)("div", {
                        ref: i,
                        className: c()(nS.fc, { [nS.kX]: m, [nS.z3]: u }),
                        children: [
                            (0, a.jsx)(nI.p, {
                                id: nP,
                                inputRef: n,
                                className: nS.QP,
                                inputClassName: nS.hF,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== ny.N$.Enter && t.includes("#")) {
                                        tC()(null != n.current, "Input is handling keypress when not mounted");
                                        let i = t.indexOf("#"),
                                            s = n.current.selectionStart,
                                            l =
                                                e.key === ny.N$.Backspace ||
                                                e.key === ny.N$.ArrowRight ||
                                                e.key === ny.N$.ArrowLeft,
                                            a = (0, nv.A)(e.key);
                                        null != s && s > i && /^(.+?#\d{4})$/.test(t) && !l
                                            ? e.preventDefault()
                                            : null == s || !(s > i) || a || l || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) return void l({ type: "RESET" });
                                    let t = "",
                                        [, n] = e.split("#");
                                    null != n && (t = e + M.RoK.slice(null != n ? n.length + 1 : 0)),
                                        l({ type: "HINT", text: t });
                                },
                                maxLength: 37,
                                autoFocus: !0,
                                autoComplete: "off",
                                name: "add-friend",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                                placeholder: t,
                                "aria-label": t,
                                "aria-invalid": null != u || void 0,
                                "aria-describedby": null != u ? nR : nL,
                            }),
                            null != d && (0, a.jsx)("div", { className: nS.dQ, "aria-hidden": !0, children: d }),
                            (0, a.jsx)(R.$, {
                                variant: "primary",
                                size: "sm",
                                text: V.intl.string(V.t["PMsq/b"]),
                                disabled: !o,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
                null != u &&
                    (0, a.jsx)("div", {
                        role: "alert",
                        children: (0, a.jsx)(L.E, {
                            id: nR,
                            variant: "text-sm/normal",
                            className: nE.Ot,
                            color: "text-feedback-critical",
                            children: u,
                        }),
                    }),
                null != m &&
                    (0, a.jsx)("div", {
                        role: "status",
                        children: (0, a.jsx)(L.E, {
                            variant: "text-sm/normal",
                            className: nE.Ot,
                            color: "text-feedback-positive",
                            children: m,
                        }),
                    }),
            ],
        })
    );
}
var nk = n(836480),
    nF = n(976860);
function nw(e) {
    let { color: t = "currentColor", ...n } = e;
    return (0, a.jsx)("svg", {
        ...n,
        fill: "none",
        height: "20",
        viewBox: "0 0 20 20",
        width: "20",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, a.jsx)("path", {
            clipRule: "evenodd",
            d: "m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z",
            fill: t,
            fillRule: "evenodd",
        }),
    });
}
var nG = n(505973);
function nM() {
    var e, t, n;
    return (0, a.jsxs)(r.Fragment, {
        children: [
            (0, a.jsxs)("header", {
                className: nG.wx,
                children: [
                    (0, a.jsx)(S.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.IuMx1Y),
                    }),
                    (0, a.jsx)(L.E, { tag: "div", variant: "heading-md/normal", children: V.intl.string(V.t.DwevPs) }),
                ],
            }),
            (0, a.jsx)("div", {
                className: nG.Vg,
                children:
                    ((e = nk.Q),
                    (t = V.intl.string(V.t.AhKnz4)),
                    (n = () => {
                        ed.default.track(M.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED),
                            (0, nF.pX)(M.BVt.GUILD_DISCOVERY);
                    }),
                    (0, a.jsxs)(
                        "button",
                        {
                            className: nG.kL,
                            onClick: n,
                            children: [
                                "function" == typeof e
                                    ? (0, a.jsx)("div", {
                                          className: nG.Kk,
                                          children: (0, a.jsx)(e, {
                                              className: nG.__invalid_iconInner,
                                              color: ey.A.colors.WHITE.css,
                                          }),
                                      })
                                    : (0, a.jsx)("img", { className: nG.Kk, alt: "", src: e }),
                                (0, a.jsx)(L.E, { className: nG.Qq, variant: "text-md/medium", children: t }),
                                (0, a.jsx)(nw, { className: nG.UE }),
                            ],
                        },
                        t,
                    )),
            }),
        ],
    });
}
var nU = n(739175);
function nV() {
    return (0, a.jsxs)("header", {
        className: nU.wx,
        children: [
            (0, a.jsx)(S.D, { variant: "heading-lg/semibold", className: nU.DD, children: V.intl.string(V.t.w5uwoI) }),
            (0, a.jsx)(nO, {}),
        ],
    });
}
let nY = function () {
    return (0, a.jsxs)(r.Fragment, { children: [(0, a.jsx)(nV, {}), (0, a.jsx)(nM, {})] });
};
var n$ = n(192308),
    nH = n(123292),
    nW = n(900797),
    nz = n(847374),
    nq = n(892547),
    nB = n(429913),
    nX = n(70730),
    nQ = n(45787),
    nK = n(275759),
    nZ = n(531685);
let nJ = (0, ee.mj)({
    kind: "user",
    name: "2026-03-post-friend-accept-cta",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var n0 = n(534890),
    n1 = n(530005),
    n2 = n(157559),
    n3 = n(3203),
    n7 = n(408278),
    n5 = n(597770),
    n9 = n(414711),
    n8 = n(397244),
    n6 = n(714114),
    n4 = n(729551),
    ie = n(501859);
let it = function (e) {
    let { hovered: t, activities: n, applicationStream: i, status: s, user: l, userIgnored: r } = e,
        { voiceChannel: o } = (0, n6.A)({ userId: l?.id });
    return r
        ? (0, a.jsx)("div", { className: ie.Q, children: V.intl.string(V.t.tFY5Zb) })
        : (0, n8.A)({ activities: n, status: s, applicationStream: i, voiceChannel: o })
          ? (0, a.jsx)(n4.A, {
                textClassName: ie.q,
                activities: n,
                applicationStream: i,
                voiceChannel: o,
                animateEmoji: t,
                user: l,
                textSize: "sm",
            })
          : (0, a.jsx)("div", { className: ie.Q, children: (0, ts.MU)(s) });
};
var ii = n(723690),
    is = n(751188);
n(646363);
var il = n(728552);
function ia(e) {
    let {
            ref: t,
            isFocused: i,
            isActive: s,
            status: l,
            activities: o,
            applicationStream: d,
            isGameRelationship: m,
            isMobile: h,
            isVR: x,
            onOtherHover: p,
            onClick: g,
            recipientUser: N,
            analyticsLocations: _,
            giftIntentType: f,
        } = e,
        { analyticsLocations: I } = (0, b.Ay)(T.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: j } = (0, n3.V)(),
        v = (0, u.bG)([nK.Ay], () => nK.Ay.getFriendAnniversaryYears(N.id)),
        { openGiftModal: C } = (0, is.$)({
            giftRecipient: N,
            analyticsLocations: I,
            analyticsLocation: M.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            analyticsObject: {
                page: M.liQ.FRIENDS_LIST,
                section: M.JJy.FRIENDS_LIST_FRIEND_ROW,
                object: M.ZSU.BUTTON_CTA,
                objectType: M.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-intent-friend-row",
        });
    r.useEffect(() => {
        let e = er.A.getUserAffinity(N.id);
        (0, eY.x)({
            name: ev.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: ev.ImpressionTypes.VIEW,
            properties: { gift_intent_type: f, affinity: e?.communicationProbability },
        });
    }, [N, f]);
    let y = (e) => {
        e.stopPropagation();
        let t = er.A.getUserAffinity(N.id);
        ed.default.track(M.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: f,
            affinity: t?.dmProbability,
            location_stack: I,
        }),
            C();
    };
    return (0, a.jsx)(n9.A, {
        ref: t,
        isFocused: i,
        isActive: s,
        user: N,
        analyticsLocations: _,
        onOtherHover: p,
        onClick: g,
        height: 72,
        children: (e) =>
            (0, a.jsxs)("div", {
                className: c()(il.a4, il.Z$),
                children: [
                    (0, a.jsx)(ii.A, {
                        className: il.Cv,
                        user: N,
                        status: l,
                        isMobile: h,
                        isVR: x,
                        subText: (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(it, {
                                    hovered: e,
                                    activities: o,
                                    applicationStream: d,
                                    status: l,
                                    user: N,
                                    userIgnored: tW.A.isIgnored(N.id),
                                }),
                                (0, a.jsxs)("div", {
                                    className: il.K3,
                                    children: [
                                        (0, a.jsx)(A.$, { size: "xxs", color: "currentColor" }),
                                        (0, a.jsx)(L.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: V.intl.formatToPlainString(V.t.S3fdq7, { numberOfYears: v }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !m && !N.isProvisional,
                    }),
                    (0, a.jsxs)("div", {
                        className: il.o1,
                        children: [
                            (0, a.jsx)(n7.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: j,
                                "aria-label": V.intl.string(V.t.I61IsE),
                                onClick: () => {
                                    ed.default.track(M.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: f,
                                        cta_type: "send_message",
                                        location_stack: I,
                                    }),
                                        (0, nQ.xs)(N.id),
                                        (0, n$.openModalLazy)(async () => {
                                            let { default: e } = await n.e("17882").then(n.bind(n, 367516));
                                            return (t) =>
                                                (0, a.jsx)(e, {
                                                    ...t,
                                                    giftIntentType: f ?? void 0,
                                                    analyticsLocationHistory: I,
                                                });
                                        });
                                },
                            }),
                            (0, a.jsx)(R.$, {
                                size: "sm",
                                text: V.intl.string(V.t.PEjaCx),
                                icon: n5.o,
                                "aria-label": V.intl.string(V.t.PEjaCx),
                                onClick: y,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
var ir = n(969341),
    io = n(22212),
    ic = n(430159),
    id = n(513297),
    iu = n(788868),
    im = n(731854);
function ih(e) {
    let { user: t, applicationId: n, isGameRelationship: i, onSelect: s } = e,
        l = r.useCallback(() => {
            (0, io.X9)({ targetUserId: t.id, tab: n_.Ay.getState().section }),
                t9.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        o = r.useCallback(() => {
            (0, io.Cf)({ targetUserId: t.id, tab: n_.Ay.getState().section }),
                t9.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        c = r.useCallback(() => {
            ic.A.removeFriend({ userId: t.id, applicationId: i ? n : null, location: "Friends" });
        }, [n, i, t.id]),
        d = r.useCallback(() => {
            let e = i ? V.intl.string(V.t.RLcE6x) : V.intl.string(V.t.cvSt1J);
            (0, io.lP)({ targetUserId: t.id, tab: n_.Ay.getState().section }),
                n2.A.show({
                    title: V.intl.formatToPlainString(V.t.fPLvZd, { name: ts.Ay.getName(t) }),
                    body: V.intl.formatToPlainString(V.t.l5FFq6, { name: ts.Ay.getName(t) }),
                    confirmText: e,
                    confirmVariant: "critical-primary",
                    cancelText: V.intl.string(V.t["ETE/oC"]),
                    onConfirm: c,
                });
        }, [c, i, t]),
        m = (0, u.bG)([ir.Ay], () => ir.Ay.supports(im.O5.VIDEO)),
        h = t.isProvisional,
        A = i ? V.intl.string(V.t.RLcE6x) : V.intl.string(V.t.cvSt1J);
    return (0, a.jsxs)(tT.W, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": V.intl.string(V.t.liqwPJ),
        onClose: nr.Z_,
        onSelect: s,
        children: [
            !h && m ? (0, a.jsx)(tb.Dr, { id: "start-video-call", label: V.intl.string(V.t.oCqlGG), action: o }) : null,
            !h && (0, a.jsx)(tb.Dr, { id: "start-voice-call", label: V.intl.string(V.t.focH1t), action: l }),
            (0, a.jsx)(tb.Dr, { id: "remove-friend", label: A, action: d, color: "danger" }),
        ],
    });
}
class iA extends r.PureComponent {
    peopleListItemRef = r.createRef();
    state = { isActiveRow: !1 };
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    openPrivateChannel = () => {
        let { user: e } = this.props,
            t = z().find(te.A.getMutablePrivateChannels(), (t) => t.type === M.rbe.DM && t.getRecipientId() === e.id);
        null != t ? (0, nF.pX)(M.BVt.CHANNEL(M.ME, t.id)) : t9.A.openPrivateChannel({ recipientIds: e.id });
    };
    handleRowClick = (e) => {
        e.stopPropagation(),
            (0, io.xF)({ targetUserId: this.props.user.id, tab: n_.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleMessageClick = (e) => {
        e.stopPropagation(),
            (0, io.WD)({ targetUserId: this.props.user.id, tab: n_.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: i } = this.props;
        (0, nr.jA)(e, (e) => (0, a.jsx)(ih, { ...e, user: t, applicationId: i, isGameRelationship: n }), {
            onClose: () => {
                this.setState({ isActiveRow: !1 });
            },
        }),
            this.setState({ isActiveRow: !0 });
    };
    render() {
        let {
                user: e,
                isFocused: t,
                analyticsLocations: n,
                activities: i,
                applicationStream: s,
                status: l,
                isMobile: r,
                isVR: o,
                isGameRelationship: c,
                giftIntentType: d,
                hasFriendAnniversarySection: u,
                sectionIndex: m,
            } = this.props,
            { isActiveRow: h } = this.state;
        return (0, nX.p)(T.A.FRIENDS_LIST) && d === iu.np.FRIEND_ANNIVERSARY && u && 0 === m
            ? (0, a.jsx)(ia, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: h,
                  recipientUser: e,
                  analyticsLocations: n,
                  onOtherHover: () => (h ? null : (0, nr.Z_)()),
                  onClick: this.handleRowClick,
                  giftIntentType: d,
                  status: l,
                  activities: i,
                  applicationStream: s,
                  isMobile: r,
                  isVR: o,
                  isGameRelationship: c,
              })
            : (0, a.jsx)(n9.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: h,
                  user: e,
                  analyticsLocations: n,
                  onOtherHover: () => (h ? null : (0, nr.Z_)()),
                  onClick: this.handleRowClick,
                  children: (t) =>
                      (0, a.jsxs)("div", {
                          className: il.a4,
                          children: [
                              (0, a.jsx)(ii.A, {
                                  user: e,
                                  status: l,
                                  isMobile: r,
                                  isVR: o,
                                  subText: (0, a.jsx)(it, {
                                      hovered: t,
                                      activities: i,
                                      applicationStream: s,
                                      status: l,
                                      user: e,
                                      userIgnored: tW.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !c && !e.isProvisional,
                              }),
                              (0, a.jsxs)("div", {
                                  className: il.o1,
                                  children: [
                                      (0, a.jsx)(id.A, {
                                          icon: n0.o,
                                          tooltip: V.intl.string(V.t["g33r/P"]),
                                          onClick: this.handleMessageClick,
                                          shouldHighlight: t,
                                      }),
                                      (0, a.jsx)(id.A, {
                                          icon: n1.F,
                                          tooltip: V.intl.string(V.t["UKOtz+"]),
                                          onClick: this.handleOpenActionsMenu,
                                          shouldHighlight: t,
                                      }),
                                  ],
                              }),
                          ],
                      }),
              });
    }
}
var ix = n(615300),
    ip = n(396478),
    ig = n(34275),
    iN = (((l = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS"), l);
let i_ = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(445451),
            darkSrc: n(642269),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, a.jsxs)(r.Fragment, {
                    children: [
                        (0, a.jsx)(ip.SG, { note: V.intl.string(V.t.Y4vMY8) }),
                        (0, a.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: ig.x6,
                            children: (0, a.jsx)(R.$, {
                                variant: "primary",
                                text: V.intl.string(V.t.w5uwoI),
                                onClick: e,
                            }),
                        }),
                    ],
                }),
        },
        SECTION_ONLINE: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, a.jsx)(ip.SG, { note: V.intl.string(V.t.v7HbiQ) }),
        },
        SECTION_BLOCKED: {
            lightSrc: n(751906),
            darkSrc: n(689818),
            width: 433,
            height: 232,
            renderContent: () => (0, a.jsx)(ip.SG, { note: V.intl.string(V.t["9xdyWB"]) }),
        },
        SECTION_PENDING: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, a.jsxs)("div", {
                    className: ig.y7,
                    children: [
                        (0, a.jsx)(ip.SG, { note: V.intl.string(V.t["aCYQ+P"]) }),
                        null != e &&
                            (0, a.jsx)(R.$, {
                                variant: "secondary",
                                text: t ? V.intl.string(V.t.R40bU2) : V.intl.string(V.t.rXl8fj),
                                onClick: e,
                                size: "sm",
                            }),
                    ],
                }),
        },
        SECTION_SUGGESTIONS: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: () => (0, a.jsx)(ip.SG, { note: V.intl.string(V.t["vgI/EF"]) }),
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, a.jsx)(ip.SG, { note: V.intl.string(V.t["7sW4h1"]) }),
        },
    }),
    iI = (e) => {
        let { theme: t } = e,
            n = V.intl.string(V.t["oi+B4p"]);
        return (0, a.jsx)(ip.pp, { theme: t, children: (0, a.jsx)(ip.SG, { note: n }) });
    };
class ij extends r.PureComponent {
    state = { opacity: new ix.A.Value(1) };
    componentWillEnter = (e) => {
        this.state.opacity.setValue(0), ix.A.timing(this.state.opacity, { toValue: 1, duration: 250 }).start(e);
    };
    componentWillLeave = (e) => {
        ix.A.timing(this.state.opacity, { toValue: 0, duration: 250 }).start(e);
    };
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            s = (function (e) {
                switch (e) {
                    case M.m3P.ADD_FRIEND:
                    case M.m3P.ALL:
                        return i_.SECTION_ALL;
                    case M.m3P.ONLINE:
                        return i_.SECTION_ONLINE;
                    case M.m3P.PENDING:
                        return i_.SECTION_PENDING;
                    case M.m3P.SUGGESTIONS:
                        return i_.SECTION_SUGGESTIONS;
                    case "SECTION_NO_RESULTS":
                        return i_.SECTION_NO_RESULTS;
                    default:
                        throw Error("FriendsEmptyState: Invalid empty state");
                }
            })(e);
        return e === M.m3P.ADD_FRIEND
            ? (0, a.jsx)(ix.A.div, { className: ig.VD, style: i, children: (0, a.jsx)(iI, { theme: n }) })
            : (0, a.jsx)(ix.A.div, {
                  className: ig.VD,
                  style: i,
                  children: (0, a.jsx)(ip.pp, { theme: n, children: s.renderContent(t) }),
              });
    }
}
let iv = u.Ay.connectStores([nN.A], () => ({ theme: nN.A.theme }), { forwardRef: !0 })(ij);
var iC = n(933832),
    iy = n(789645),
    iS = n(478016),
    iE = n(640708),
    iT = n(390848),
    ib = n(525075);
function iP(e) {
    let { user: t, applicationId: n, isGameRelationship: i, active: s, onAcceptFriendRequest: l } = e,
        [o, c] = r.useState(!1),
        d = eo.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: u, cancelFriendRequest: h } = (0, iT.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: i,
            location: "Friends",
            onFinally: () => {
                c(!1);
            },
        }),
        A = r.useCallback(
            (e) => {
                c(!0), e.stopPropagation(), l(), u();
            },
            [u, l],
        ),
        x = r.useCallback(
            (e) => {
                e.stopPropagation(), h();
            },
            [h],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            d &&
                (0, a.jsx)("div", {
                    className: ib.ou,
                    children: (0, a.jsx)(m.Lp, {
                        color: ey.A.unsafe_rawColors.BRAND_500.css,
                        text: V.intl.string(V.t.oMx98L),
                    }),
                }),
            (0, a.jsx)(id.A, {
                icon: iC.A,
                actionType: id.A.ActionTypes.ACCEPT,
                tooltip: V.intl.string(V.t.Zcibdf),
                onClick: A,
                shouldHighlight: s,
                loading: o,
            }),
            (0, a.jsx)(id.A, {
                icon: iy.P,
                actionType: id.A.ActionTypes.DENY,
                tooltip: V.intl.string(V.t.xuio0C),
                onClick: x,
                shouldHighlight: s,
            }),
        ],
    });
}
function iL(e) {
    let { userId: t, applicationId: n, isGameRelationship: i, active: s } = e,
        { cancelFriendRequest: l } = (0, iT.I)({
            userId: t,
            applicationId: n,
            isGameRelationship: i,
            location: "Friends",
        }),
        o = r.useCallback(
            (e) => {
                e.stopPropagation(), l();
            },
            [l],
        );
    return (0, a.jsx)(id.A, {
        icon: iy.P,
        actionType: id.A.ActionTypes.DENY,
        tooltip: V.intl.string(V.t.eaq81S),
        onClick: o,
        shouldHighlight: s,
    });
}
function iR(e) {
    let { isGameRelationship: t, applicationId: n, userTag: i, isProvisional: s } = e,
        l = r.useMemo(() => (t ? V.intl.string(V.t["Uv/eTx"]) : i), [t, i]),
        o = (0, u.bG)([eW.A], () => (null != n ? eW.A.getApplication(n) : null));
    return (0, a.jsxs)("div", {
        className: ib.P9,
        children: [
            !s && (0, a.jsx)(L.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
            null != o &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        !s && (0, a.jsx)(iE.A, { height: 2, width: 2 }),
                        (0, a.jsx)(eJ.A, { game: o, size: eJ.M.XXSMALL }),
                        (0, a.jsx)(L.E, { variant: "text-sm/medium", color: "text-subtle", children: o.name }),
                    ],
                }),
        ],
    });
}
function iD(e) {
    let { user: t, hovered: n, status: i, isGameRelationship: s, applicationId: l, isFriend: r } = e,
        o = ts.Ay.useUserTag(t);
    return (0, a.jsx)(ii.A, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !1,
        subText: r
            ? (0, a.jsxs)("div", {
                  className: ib.Tl,
                  children: [
                      (0, a.jsx)(iS.U, { size: "sm", color: ey.A.colors.ICON_FEEDBACK_POSITIVE }),
                      (0, a.jsx)(L.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: V.intl.string(V.t.bgL68y),
                      }),
                  ],
              })
            : (0, a.jsx)(iR, { isGameRelationship: s, isProvisional: t.isProvisional, applicationId: l, userTag: o }),
    });
}
function iO(e) {
    let {
            user: t,
            type: n,
            status: i,
            isFocused: s,
            applicationId: l,
            isGameRelationship: o,
            onAcceptFriendRequest: c,
        } = e,
        { analyticsLocations: d } = (0, b.Ay)(),
        m = i === M.clD.OFFLINE ? M.clD.UNKNOWN : i,
        h = (0, u.bG)([tW.A], () => tW.A.getRelationshipType(t.id)),
        A = r.useCallback(() => (0, t0.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: d }), [d, t.id]),
        x = (e) => {
            e.stopPropagation(),
                ed.default.track(M.HAw.FRIEND_REQUEST_ACCEPT_MESSAGE_CLICKED),
                t9.A.openPrivateChannel({ recipientIds: [t.id] });
        };
    return [M.eA$.PENDING_INCOMING, M.eA$.PENDING_OUTGOING, M.eA$.FRIEND].includes(h)
        ? (0, a.jsx)(n9.A, {
              isFocused: s,
              user: t,
              analyticsLocations: d,
              onClick: A,
              children: (e) =>
                  (0, a.jsxs)("div", {
                      className: ib.a4,
                      children: [
                          (0, a.jsx)(iD, {
                              user: t,
                              hovered: e,
                              status: m,
                              isGameRelationship: o,
                              applicationId: l,
                              isFriend: h === M.eA$.FRIEND,
                          }),
                          (0, a.jsx)("div", {
                              className: ib.o1,
                              children:
                                  h === M.eA$.FRIEND
                                      ? (0, a.jsx)(R.$, {
                                            text: "Message",
                                            variant: "secondary",
                                            icon: n0.o,
                                            onClick: x,
                                        })
                                      : n === M.eA$.PENDING_INCOMING
                                        ? (0, a.jsx)(iP, {
                                              user: t,
                                              applicationId: l,
                                              isGameRelationship: o,
                                              active: e,
                                              onAcceptFriendRequest: c,
                                          })
                                        : (0, a.jsx)(iL, {
                                              userId: t.id,
                                              applicationId: l,
                                              isGameRelationship: o,
                                              active: e,
                                          }),
                          }),
                      ],
                  }),
          })
        : null;
}
var ik = n(887129),
    iF = n(837381),
    iw = n(475825),
    iG = n(775602),
    iM = n(795733);
let iU = function (e) {
    let { rows: t, renderRow: n, renderSection: i, footer: s, sectionFilter: l, renderSectionFooter: o } = e,
        c = (e) => {
            let { section: i, row: s } = e,
                l = t[i];
            if (null == l || null == s) return null;
            let a = l[s];
            return null == a ? null : n(a, i);
        },
        d = r.useCallback(
            (e, n) => {
                let i = t[e]?.[n];
                return l === M.m3P.ALL && i?.giftIntentType === iu.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 61;
            },
            [t, l],
        ),
        m = r.useCallback(
            (e) => {
                let { section: t } = e;
                return i(t);
            },
            [i],
        ),
        h = r.useCallback((e) => (null == o ? null : o(e.section)), [o]),
        A = r.useCallback((e) => (null == o ? 0 : 48 * (null != o(e))), [o]),
        x = (0, u.bG)([iG.A], () => iG.A.keyboardModeEnabled),
        p = r.useRef(null),
        g = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = p.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        N = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = p.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        _ = r.useCallback((e) => {
            let t = document.querySelector(e),
                n = p.current;
            null != t && null != n && n.scrollIntoViewNode({ node: t, padding: 8, callback: () => t?.focus() });
        }, []),
        f = (0, ik.Ay)({ id: "people-list", isEnabled: x, scrollToStart: g, scrollToEnd: N, setFocus: _ }),
        I = r.useMemo(() => t.map((e) => e.length), [t]);
    return (0, a.jsx)(iF.hD, {
        navigator: f,
        children: (0, a.jsx)(iF.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(iw.Ei, {
                            ref: (e) => {
                                (p.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            renderRow: c,
                            rowHeight: d,
                            renderSection: m,
                            sectionHeight: 50,
                            renderFooter: h,
                            footerHeight: A,
                            sections: I,
                            className: iM.e3,
                            ...n,
                        }),
                        s,
                    ],
                });
            },
        }),
    });
};
var iV = n(73939);
let iY = function (e) {
    let {
            rows: t,
            renderRow: n,
            renderSection: i,
            hasSearchQuery: s,
            sectionFilter: l,
            footer: o,
            renderSectionFooter: c,
        } = e,
        d = (0, u.bG)([iG.A], () => iG.A.keyboardModeEnabled),
        m = (0, u.bG)([iG.A], () => iG.A.useReducedMotion),
        h = (0, ik.Ay)({ id: "people", isEnabled: d, async scrollToStart() {}, async scrollToEnd() {} }),
        A = l !== M.m3P.ONLINE && l !== M.m3P.ALL,
        x = m || s || A,
        p = r.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : x
                          ? (0, a.jsxs)("div", { children: [i(t), e.map((e) => n(e, t)), c?.(t)] }, t)
                          : (0, a.jsxs)(
                                iV.F,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [i(t), e.map((e) => n(e, t)), c?.(t)],
                                },
                                t,
                            ),
                ),
            [n, i, c, t, x],
        );
    return (0, a.jsx)(iF.hD, {
        navigator: h,
        children: (0, a.jsx)(iF.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsxs)(y.Ar, { ref: t, className: iM.e3, ...n, children: [p, o] });
            },
        }),
    });
};
function i$(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: i,
        isVirtualizedList: s,
        hasSearchQuery: l,
        sectionFilter: r,
        footer: o,
        renderSectionFooter: c,
    } = e;
    return s
        ? (0, a.jsx)(iU, {
              rows: t,
              renderRow: n,
              renderSection: i,
              footer: o,
              sectionFilter: r,
              renderSectionFooter: c,
          })
        : (0, a.jsx)(iY, {
              rows: t,
              renderRow: n,
              renderSection: i,
              sectionFilter: r,
              hasSearchQuery: l,
              footer: o,
              renderSectionFooter: c,
          });
}
var iH = n(932001),
    iW = n(866945),
    iz = n(835002),
    iq = n(613755);
function iB() {
    let [e, t] = (0, iH.kn)([C.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return r.useMemo(() => e === C.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, a.jsx)(iW.e, {
              label: V.t.zqv4nV,
              labelHook: () => {
                  (0, G.openUserSettings)(w.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY);
              },
              dismissNotice: () => t(U.i.USER_DISMISS),
              className: iq._,
              noticeType: iz.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
var iX = n(485947),
    iQ = n(490277);
function iK(e) {
    let { title: t, id: n } = e;
    return (0, a.jsx)(iX.A, { className: iQ.D, id: n, children: t });
}
var iZ = n(38910),
    iJ = n(648356);
function i0(e) {
    let { user: t, nickname: n, status: i, isFocused: s } = e,
        { analyticsLocations: l } = (0, b.Ay)(),
        r = (e) => {
            e?.stopPropagation(),
                nj.A.addRelationship({
                    userId: t.id,
                    context: { location: "Friends" },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        o = (e) => {
            e?.stopPropagation(), iZ.A.ignore(t.id);
        },
        c = i === M.clD.OFFLINE ? M.clD.UNKNOWN : i;
    return (0, a.jsx)(n9.A, {
        isFocused: s,
        user: t,
        analyticsLocations: l,
        onClick: () => (0, t0.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: l }),
        children: (e) => {
            let i = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(id.A, {
                        icon: iC.A,
                        actionType: id.A.ActionTypes.ACCEPT,
                        tooltip: V.intl.string(V.t.Zcibdf),
                        onClick: r,
                        shouldHighlight: e,
                    }),
                    (0, a.jsx)(id.A, {
                        icon: iy.P,
                        actionType: id.A.ActionTypes.DENY,
                        tooltip: V.intl.string(V.t.xuio0C),
                        onClick: o,
                        shouldHighlight: e,
                    }),
                ],
            });
            return (0, a.jsxs)("div", {
                className: iJ.a,
                children: [
                    (0, a.jsx)(ii.A, { user: t, hovered: e, status: c, subText: n, className: iJ.__invalid_userInfo }),
                    (0, a.jsx)("div", { className: iJ.o, children: i }),
                ],
            });
        },
    });
}
let i1 = [];
function i2() {
    N.A.transitionToSection(M.m3P.ADD_FRIEND, { explicit: !0 });
}
function i3() {
    (0, n$.openModalLazy)(async () => {
        let { default: e } = await n.e("50771").then(n.bind(n, 516259));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
function i7(e) {
    let { section: t, showSpamCta: n } = e,
        i = r.useMemo(() => (n ? i3 : t !== M.m3P.PENDING ? i2 : void 0), [n, t]);
    return (0, a.jsx)("div", { className: iM.y7, children: (0, a.jsx)(iv, { type: t, onClick: i }, t) });
}
let i5 = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, b.Ay)(T.A.FRIENDS_LIST),
        { rows: i, section: s } = (0, u.cf)([n_.Ay], () => n_.Ay.getState()),
        l = (0, u.bG)([nZ.A], () => nZ.A.isFocused()),
        { relationshipCount: o, hasBlockedOrIgnored: c } = (0, u.cf)([tW.A], () => ({
            relationshipCount: tW.A.getRelationshipCount(),
            hasBlockedOrIgnored: tW.A.getBlockedOrIgnoredIDs().length > 0,
        })),
        { enabled: d } = nJ.useConfig({ location: "PeopleList" }),
        [m, h] = r.useState([]),
        A = r.useCallback((e) => {
            let { enabled: t } = nJ.getConfig({ location: "Friend Request Accept" });
            t && h((t) => [...t, e]);
        }, []);
    s !== M.m3P.PENDING && m.length > 0 && h([]);
    let [x, p] = r.useState(() => {
            let e = {};
            for (let t of Object.values(M.m3P)) e[t] = "";
            return e;
        }),
        g = (0, nX.p)(T.A.FRIENDS_LIST),
        [N, _] = r.useState(!1),
        f = r.useCallback(
            (e, t) => {
                let { key: i, ...r } = e;
                switch (s) {
                    case M.m3P.PENDING:
                        return (0, a.jsx)(iO, { ...r, isFocused: l, onAcceptFriendRequest: () => A(e) }, i);
                    case M.m3P.SUGGESTIONS:
                        return (0, a.jsx)(i0, { ...r, isFocused: l }, i);
                    case M.m3P.ALL:
                        return (0, a.jsx)(
                            iA,
                            {
                                ...r,
                                isFocused: l,
                                analyticsLocations: n,
                                sectionIndex: t,
                                hasFriendAnniversarySection: g,
                            },
                            `${t}-${i}`,
                        );
                    case M.m3P.ONLINE:
                    default:
                        return (0, a.jsx)(iA, { ...r, isFocused: l, analyticsLocations: n }, i);
                }
            },
            [s, l, n, g, A],
        ),
        I = r.useCallback(
            (e) => {
                p({ ...x, [s]: e });
            },
            [x, s],
        ),
        j = r.useCallback(() => {
            p({ ...x, [s]: "" });
        }, [x, s]),
        v = r.useMemo(
            () =>
                s === M.m3P.PENDING && (i.filter(M.m3P.SPAM).length > 0 || i.filter(M.m3P.PENDING_IGNORED).length > 0),
            [i, s],
        ),
        C = r.useMemo(() => {
            let e = i.filter(s, x[s]);
            return (
                d &&
                    s === M.m3P.PENDING &&
                    "" === x[s] &&
                    (e = z()([...e, ...m])
                        .uniqBy("key")
                        .sortBy(
                            (e) => e.nickname?.toLowerCase() ?? e.user?.globalName?.toLowerCase() ?? e.usernameLower,
                        )
                        .value()),
                e
            );
        }, [m, d, i, x, s]),
        y = s === M.m3P.PENDING,
        S = r.useMemo(() => {
            if (!y) return i1;
            let e = [];
            return (
                C.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [y, C]);
    (0, nB.A)(S, y);
    let P = r.useMemo(
            () =>
                s === M.m3P.ALL && g && C.some((e) => e.giftIntentType === iu.np.FRIEND_ANNIVERSARY)
                    ? C.filter((e) => e.giftIntentType === iu.np.FRIEND_ANNIVERSARY).length
                    : 0,
            [C, s, g],
        ),
        L = r.useMemo(() => {
            switch (s) {
                case M.m3P.PENDING:
                    let e = [],
                        t = [];
                    return (
                        C.forEach((n) => {
                            n.type === M.eA$.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === M.eA$.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case M.m3P.ALL:
                    if (!(g && C.some((e) => e.giftIntentType === iu.np.FRIEND_ANNIVERSARY))) return [C];
                    {
                        let e = [];
                        return (
                            C.forEach((t) => {
                                t.giftIntentType === iu.np.FRIEND_ANNIVERSARY && e.push(t);
                            }),
                            e.sort((e, t) => er.A.compareByDmProbability(e.userId, t.userId)),
                            [N ? e : e.slice(0, nK.ZD), C]
                        );
                    }
                default:
                    return [C];
            }
        }, [C, s, N, g]),
        D = r.useMemo(() => C.filter((e) => e.type === M.eA$.PENDING_INCOMING).length, [C]),
        O = s === M.m3P.PENDING && D > 0 && D >= 5,
        k = r.useCallback(
            (e) => {
                e.stopPropagation(), nj.A.confirmClearPendingRelationships(D);
            },
            [D],
        ),
        F = r.useCallback(() => {
            _((e) => !e);
        }, []),
        w = r.useCallback(
            (e) => {
                let n = L[e],
                    i = (function (e, t, n, i) {
                        switch (e) {
                            case M.m3P.ONLINE:
                                return V.intl.formatToPlainString(V.t.BagU2U, { online: t.toString() });
                            case M.m3P.PENDING:
                                if (0 === n) return V.intl.formatToPlainString(V.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return V.intl.formatToPlainString(V.t.npJsRl, { count: t.toString() });
                                throw Error(`Unexpected pending friend requests section index: ${n}`);
                            case M.m3P.SUGGESTIONS:
                                return V.intl.formatToPlainString(V.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, nX.p)(T.A.FRIENDS_LIST) && i)
                                    if (0 === n) return V.intl.formatToPlainString(V.t.rrZTqK, { count: t.toString() });
                                    else if (1 === n);
                                    else throw Error(`Unexpected friends all section index: ${n}`);
                                return V.intl.formatToPlainString(V.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        s,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === iu.np.FRIEND_ANNIVERSARY),
                    );
                return s === M.m3P.PENDING && 0 === e
                    ? (0, a.jsxs)(
                          "div",
                          {
                              className: iM.Gf,
                              children: [
                                  (0, a.jsx)(iK, { id: t, title: i }),
                                  O &&
                                      (0, a.jsx)("div", {
                                          className: iM.mt,
                                          children: (0, a.jsx)(nH.Q, {
                                              text: V.intl.string(V.t.O8k7O4),
                                              onClick: k,
                                              "aria-label": V.intl.string(V.t.O8k7O4),
                                              textVariant: "text-sm/medium",
                                          }),
                                      }),
                              ],
                          },
                          i,
                      )
                    : (0, a.jsx)("div", { className: iM.Gf, children: (0, a.jsx)(iK, { id: t, title: i }) }, i);
            },
            [L, s, t, O, k],
        ),
        G = r.useCallback(
            (e) =>
                s === M.m3P.ALL && 0 === e && g && P > nK.ZD
                    ? (0, a.jsx)("div", {
                          className: iM.Nf,
                          children: (0, a.jsx)(R.$, {
                              icon: N ? nW.t : nz.a,
                              variant: "secondary",
                              size: "sm",
                              text: V.intl.string(N ? V.t["6MwJo/"] : V.t["37C26f"]),
                              onClick: F,
                              "aria-label": V.intl.string(N ? V.t["6MwJo/"] : V.t["37C26f"]),
                          }),
                      })
                    : null,
            [s, P, N, F, g],
        );
    if (
        (r.useEffect(() => {
            s === M.m3P.ALL && (0, nQ.Ad)();
        }, [s]),
        r.useEffect(() => {
            _(!1);
        }, [s, P]),
        0 === C.length && "" === x[s])
    )
        return (0, a.jsx)(i7, { section: s, showSpamCta: v });
    let U = "" !== x[s],
        Y = 0 === C.length && U;
    return (0, a.jsx)(b.f5, {
        value: n,
        children: (0, a.jsxs)(E.A, {
            section: M.JJy.FRIENDS_LIST,
            children: [
                c && (0, a.jsx)(iB, {}),
                (0, a.jsx)("div", {
                    className: iM.ON,
                    children: (0, a.jsx)(nq.I, { query: x[s], onChange: I, onClear: j }),
                }),
                (0, a.jsx)(i$, {
                    rows: L,
                    renderRow: f,
                    renderSection: w,
                    sectionFilter: s,
                    isVirtualizedList: o >= 64,
                    hasSearchQuery: U,
                    renderSectionFooter: G,
                    footer:
                        v && !Y
                            ? (0, a.jsx)("div", {
                                  className: iM.RE,
                                  children: (0, a.jsx)(nH.Q, {
                                      text: V.intl.string(V.t.R40bU2),
                                      onClick: i3,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                Y &&
                    (0, a.jsx)("div", {
                        className: iM.y7,
                        children: (0, a.jsx)(iv, { type: iN.SECTION_NO_RESULTS }, s),
                    }),
            ],
        }),
    });
};
var i9 = n(204925),
    i8 = n(465158);
function i6() {
    return (0, a.jsx)("div", {
        className: i8.N3,
        children: (0, a.jsx)(v.Ay, { tooltip: V.intl.string(V.t["HfOgA/"]) }),
    });
}
let i4 = function (e) {
    let { initialSection: t } = e,
        n = (0, d.zy)(),
        i = (0, d.W6)();
    r.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            p.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: i9.w_.DEEP_LINK_PROMPT }).then(() => {
                i.replace(M.BVt.ME);
            });
    }, [i, n]),
        r.useEffect(() => {
            g.I(M.BVt.FRIENDS), (0, ng.d)("friends");
        }, []);
    let s = (0, u.bG)([nN.A], () => nN.A.theme),
        l = (0, nf.kX)(),
        { section: o, rows: v } = (0, u.cf)([n_.Ay], () => n_.Ay.getState()),
        C = (0, u.bG)([I.A], () => I.A.getSuggestionCount()),
        y = r.useMemo(() => v.getRelationshipCounts(), [v]);
    r.useEffect(() => {
        null != t && N.A.setInitialSection(t),
            0 === y[M.eA$.FRIEND] &&
                0 === y[M.eA$.PENDING_INCOMING] &&
                0 === y[M.eA$.PENDING_OUTGOING] &&
                0 === y[M.eA$.BLOCKED] &&
                N.A.transitionToSection(M.m3P.ADD_FRIEND);
    }, [t, y]);
    let S = (e) => {
            N.A.transitionToSection(e, { explicit: !0 });
        },
        E = (0, f.GV)(),
        T = (0, f.GV)(),
        b = [
            {
                id: M.m3P.ONLINE,
                show: v.filter(M.m3P.ONLINE).length > 0,
                content: V.intl.string(V.t.b9w3bO),
                className: i8.AS,
            },
            { id: M.m3P.ALL, show: y[M.eA$.FRIEND] > 0, content: V.intl.string(V.t.PfjFjR), className: i8.AS },
            {
                id: M.m3P.PENDING,
                show: v.filter(M.m3P.PENDING).length > 0,
                content: (0, a.jsxs)(a.Fragment, {
                    children: [V.intl.string(V.t.p6IHGE), l > 0 && (0, a.jsx)(m.hV, { count: l, className: i8.qS })],
                }),
                ariaLabel: V.intl.formatToPlainString(V.t.OAC0Z4, { count: l.toString() }),
                className: i8.AS,
            },
            {
                id: M.m3P.SUGGESTIONS,
                show: C > 0,
                content: (0, a.jsxs)(a.Fragment, {
                    children: [V.intl.string(V.t["8rSi1/"]), (0, a.jsx)(m.hV, { count: C, className: i8.qS })],
                }),
                ariaLabel: V.intl.formatToPlainString(V.t.AbMQp7, { count: C.toString() }),
                className: i8.AS,
            },
            {
                id: M.m3P.ADD_FRIEND,
                show: !0,
                content: (0, a.jsx)("span", { children: V.intl.string(V.t.j0wbE5) }),
                ariaLabel: V.intl.string(V.t.j0wbE5),
                className: c()(i8.AS, i8.GU),
            },
        ],
        P = null,
        L = (0, a.jsx)("div", { className: i8.Xl, children: (0, a.jsx)(np, {}) });
    return (
        (P = o === M.m3P.ADD_FRIEND ? (0, a.jsx)(nY, {}) : (0, a.jsx)(i5, { titleId: T })),
        (0, a.jsxs)("main", {
            className: i8.kL,
            "aria-label": V.intl.string(V.t.TdEu5X),
            children: [
                (0, a.jsx)(_.HI, { location: V.intl.string(V.t.TdEu5X) }),
                (0, a.jsx)(h.N, {
                    theme: s,
                    children: (e) =>
                        (0, a.jsxs)(j.A, {
                            className: e,
                            toolbar: (0, a.jsx)(i6, {}),
                            role: "navigation",
                            "aria-labelledby": E,
                            scrollable: !0,
                            children: [
                                (0, a.jsx)(j.A.Icon, { icon: A.$, "aria-hidden": !0 }),
                                (0, a.jsx)(j.A.Title, { id: E, children: V.intl.string(V.t.TdEu5X) }),
                                (0, a.jsx)(j.A.Divider, {}),
                                (0, a.jsx)(x.V, {
                                    "aria-label": V.intl.string(V.t.TdEu5X),
                                    selectedItem: o,
                                    type: "top-pill",
                                    onItemSelect: S,
                                    className: i8.$H,
                                    children: b
                                        .filter((e) => e.show)
                                        .map((e) =>
                                            (0, a.jsx)(
                                                x.V.Item,
                                                {
                                                    id: e.id,
                                                    className: e.className,
                                                    "aria-label": e.ariaLabel,
                                                    children: e.content,
                                                },
                                                e.id,
                                            ),
                                        ),
                                }),
                            ],
                        }),
                }),
                (0, a.jsxs)("div", {
                    className: i8.MJ,
                    children: [
                        (0, a.jsx)(x.V.Panel, { id: o, className: i8.UL, "aria-labelledby": T, children: P }),
                        L,
                    ],
                }),
            ],
        })
    );
};
