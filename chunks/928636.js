n.d(t, { A: () => eR });
var i,
    s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(110259),
    c = n(141628),
    d = n(311907),
    u = n(554146),
    m = n(827734),
    A = n(990078),
    h = n(834730),
    x = n(821609),
    p = n(414499),
    g = n(687966),
    N = n(777666),
    f = n(939249),
    _ = n(97808),
    I = n(778712),
    v = n(983851),
    j = n(187322),
    C = n(956793),
    y = n(492684),
    S = n(212245),
    E = n(573648),
    T = n(447031),
    b = n(908289),
    P = n(682261),
    L = n(672979),
    R = n(90644),
    D = n(960076),
    O = n(847177),
    k = n(359549),
    F = n(793574),
    w = n(688810),
    G = n(139286),
    M = n(362490),
    U = n(627363),
    V = n(587895),
    Y = n(47167),
    $ = n(402216),
    H = n(939341),
    W = n(681827),
    z = n(755395),
    q = n(826673),
    B = n(609425),
    X = n(73392),
    Q = n(769015),
    K = n(279250),
    Z = n(607407),
    J = n(290987),
    ee = n(928550),
    et = n(594262),
    en = n(378570),
    ei = n(345942),
    es = n(804980),
    el = n(260509),
    ea = n(961350),
    er = n(734057),
    eo = n(287809),
    ec = n(879945),
    ed = n(266080),
    eu = n(139675),
    em = n(403362),
    eA = n(427262),
    eh = n(281489),
    ex = n(652215),
    ep = n(985018),
    eg = n(492213);
let eN = [14, 14, 12, 12, 10, 8, 6],
    ef = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, s.jsx)(h.E, { className: r()(eg.P_, t), variant: "text-sm/semibold", children: e });
    },
    e_ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, s.jsx)(h.E, {
            className: r()(eg.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e,
        });
    },
    eI = (0, y.A)((e) => {
        let { message: t } = e;
        return (0, s.jsx)("div", { className: eg.__invalid_timestamp, children: t });
    }),
    ev = (e) => {
        let { children: t } = e;
        return (0, s.jsx)("section", { className: eg.uW, children: t });
    },
    ej = (e) => {
        let { inset: t, className: n } = e;
        return (0, s.jsx)("div", { className: r()(eg.me, { [eg.C5]: t }, n) });
    },
    eC = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, G.A)({
                name: o.ImpressionNames.CLOUD_PLAY_CTA,
                type: o.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, s.jsx)(A.m, {
                text: ep.intl.string(ep.t.JVwWva),
                children: (0, s.jsx)(x.$, {
                    size: "sm",
                    variant: "primary",
                    icon: p.h,
                    text: ep.intl.string(ep.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    ey = (e) => {
        let { activity: t, user: n } = e,
            i = (0, et.l)({ activity: t, user: n, supportsAskToJoin: !1 }),
            s = null != i,
            { data: l } = (0, U.YY)(t.application_id),
            { fetched: a, hasAlreadyLinked: r, canStartAuthorization: o, startAuthorization: c } = (0, M.RD)(l),
            d = !s && a && o && !r;
        return {
            isJoinActivityButtonShown: s,
            joinActivityButtonAction: i,
            isLinkAccountButtonShown: d,
            startAuthorization: c,
            hasButton: s || d,
        };
    },
    eS = (e) => {
        let { activity: t, user: n } = e,
            {
                joinActivityButtonAction: i,
                isJoinActivityButtonShown: l,
                isLinkAccountButtonShown: a,
                startAuthorization: r,
            } = ey({ activity: t, user: n }),
            { newestAnalyticsLocation: o } = (0, w.Ay)();
        if (l && null != i) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: l, isEnabled: a } = i;
            return (0, s.jsx)(A.m, {
                text: l,
                asContainer: !a,
                children: (0, s.jsx)(x.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: g._,
                    text: n,
                    disabled: !a,
                    loading: e,
                    onClick: (e) => {
                        e.stopPropagation(), t();
                    },
                }),
            });
        }
        return a
            ? (0, s.jsx)(x.$, {
                  size: "sm",
                  variant: "secondary",
                  icon: c.A,
                  text: ep.intl.string(ep.t.sbdnpw),
                  onClick: (e) => {
                      e.stopPropagation(), r({ analyticsLocations: [o] });
                  },
              })
            : null;
    },
    eE = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: i, name: l } = t,
            { data: a } = (0, U.YY)(i),
            r = (0, k.A)({ application: a, analyticsLocations: n }),
            o = (0, q.JZ)(u.M.CLOUD_PLAY_NEW_BADGE),
            c = (0, ee.L)(i);
        return null == r || c
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(ej, { className: eg.gi }),
                      (0, s.jsxs)("div", {
                          className: eg.DK,
                          children: [
                              (0, s.jsxs)("div", {
                                  className: eg.tJ,
                                  children: [
                                      o
                                          ? null
                                          : (0, s.jsx)(N.Lp, {
                                                text: ep.intl.string(ep.t.y2b7CA),
                                                color: m.A.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, s.jsx)(h.E, {
                                          variant: "text-xs/medium",
                                          children: ep.intl.formatToPlainString(ep.t.RmiYF3, { gameName: l }),
                                      }),
                                  ],
                              }),
                              (0, s.jsx)(eC, { onCloudPlayClick: r, analyticsLocations: n }),
                          ],
                      }),
                  ],
              });
    };
var eT = (((i = eT || {}).XBOX = "XBOX"), (i.SPOTIFY = "SPOTIFY"), (i.MULTIPLE = "MULTIPLE"), i);
let eb = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, s.jsx)(ed.A, { className: eg.nr, color: m.A.unsafe_rawColors.PRIMARY_300.css });
            break;
        case "SPOTIFY":
            t = (0, s.jsx)(ec.A, { className: eg.nr, color: m.A.unsafe_rawColors.PLATFORM_SPOTIFY.css });
            break;
        case "MULTIPLE":
            t = (0, s.jsx)("div", {
                className: eg.XQ,
                children: (0, s.jsx)(g._, {
                    size: "md",
                    className: r()(eg.nr, eg.iY),
                    color: m.A.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, s.jsx)("img", { src: n ?? void 0, alt: "", className: eg.nr });
    }
    return null != i || null != l
        ? (0, s.jsx)(f.D, { onClick: i, className: r()(null != i ? eg.vk : ""), onContextMenu: l, children: t })
        : t;
};
eb.Src = eT;
let eP = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: i,
            icon: l,
            onSubtitleClick: a,
            onIconClick: o,
            onContextMenu: c,
            guildId: d,
            displayNameFont: u,
        } = e,
        m = (0, s.jsx)(h.E, { className: eg.P_, variant: "text-sm/normal", color: "text-muted", children: i });
    return (0, s.jsxs)("header", {
        className: null != l ? eg.dI : eg.sk,
        children: [
            (0, s.jsx)(_.eu, {
                src: t.user.getAvatarURL(d, 32),
                "aria-label": t.user.username,
                size: I._3.SIZE_32,
                className: eg.Nw,
                status: t.status,
                onContextMenu: c,
            }),
            (0, s.jsxs)("div", {
                className: eg.__invalid_headerDetails,
                children: [
                    (0, s.jsx)(h.E, { className: r()(eg.P_, u), variant: "text-md/semibold", children: n }),
                    null != a ? (0, s.jsx)(f.D, { className: eg.vk, onClick: a, children: m }) : m,
                ],
            }),
            null != l && null != o ? (0, s.jsx)(f.D, { className: eg.vk, onClick: o, children: l }) : l,
        ],
    });
};
eP.Icon = eb;
let eL = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, s.jsx)(j.vN, {
        children: (0, s.jsx)(z.A, { noBackground: !0, className: r()(n, eg.iE), padded: !1, ...i, children: t }),
    });
};
(eL.Header = eP),
    (eL.Body = (e) => {
        let { children: t } = e;
        return (0, s.jsx)(z.A, { inset: !0, padded: !1, className: eg.rf, children: t });
    }),
    (eL.Separator = ej),
    (eL.VoiceSection = (e) => {
        let { guild: t, channel: n, partySize: i, members: a, onChannelContextMenu: o } = e,
            c = l.useRef(null),
            d = (0, Y.Ay)(n, !0),
            u = (0, el.Iv)(t, 32),
            m = (0, el.Rb)(t);
        return (0, s.jsx)(ev, {
            children: (0, s.jsxs)("div", {
                className: eg.iO,
                ref: c,
                onContextMenu: (e) => o(e, n),
                children: [
                    (0, s.jsx)(f.D, {
                        onClick: () => (0, ei.u)(t.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, s.jsxs)("div", {
                            className: eg.J4,
                            children: [
                                null != u
                                    ? (0, s.jsx)("img", { alt: "", src: u, className: r()(eg.y8, eg.p8) })
                                    : (0, s.jsx)("div", {
                                          className: eg.I,
                                          children: (0, s.jsx)("div", {
                                              className: eg.lB,
                                              style: { fontSize: eN[m.length] ?? eN[eN.length - 1] },
                                              children: m,
                                          }),
                                      }),
                                (0, s.jsx)("div", {
                                    className: eg._s,
                                    children: (0, s.jsx)(v.H, { size: "md", color: "currentColor", className: eg.ZS }),
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsx)(f.D, {
                        onClick: () => {
                            C.default.selectVoiceChannel(n.id), (0, en.iN)(n.id);
                        },
                        focusProps: { ringTarget: c },
                        children: (0, s.jsxs)("div", { className: eg.U6, children: [ef(t.name, eg.BJ), e_(d, eg.BJ)] }),
                    }),
                    (0, s.jsx)(eh.A, { partySize: i, members: a, guildId: t.id }),
                ],
            }),
        });
    }),
    (eL.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: l, activity: a } = e,
            { analyticsLocations: r } = (0, w.Ay)(F.A.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, s.jsxs)(ev, {
            children: [
                (0, s.jsxs)("div", {
                    className: eg.yn,
                    children: [
                        null != t ? (0, s.jsx)("img", { alt: "", src: t, className: eg.RZ }) : null,
                        (0, s.jsxs)("div", {
                            children: [
                                ef(n),
                                e_(ep.intl.formatToPlainString(ep.t.C4WXvc, { memberCount: i.totalSize })),
                            ],
                        }),
                        (0, s.jsx)(eh.A, { partySize: i, members: l }),
                    ],
                }),
                (0, s.jsx)(eE, { activity: a, analyticsLocations: r }),
            ],
        });
    }),
    (eL.RichPresenceSection = (e) => {
        let { activity: t, getAssetImage: i, user: l } = e,
            { analyticsLocations: a } = (0, w.Ay)(F.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: o } = (0, U.YY)(t.application_id),
            { assets: c, details: d, state: u, application_id: m } = t,
            { hasButton: A } = ey({ activity: t, user: l }),
            h = (0, H.C4)(o)?.src ?? n(960648),
            x = (0, k.A)({ application: o, analyticsLocations: a });
        return null != t.assets || (0, P.A)(t) || null != x
            ? (0, s.jsxs)(ev, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: r()(eg.tL, { [eg._2]: A }),
                          children: [
                              null != c && 0 !== Object.keys(c).length
                                  ? (0, s.jsxs)("div", {
                                        className: eg.YY,
                                        children: [
                                            (0, s.jsx)("img", {
                                                alt: c.large_text ?? "",
                                                src: i(m, c.large_image, [160, 160]) ?? h,
                                                className: r()(eg.nX, { [eg.p8]: null != c.small_image }),
                                            }),
                                            null != c.small_image
                                                ? (0, s.jsx)("img", {
                                                      alt: c.small_text ?? "",
                                                      src: i(m, c.small_image, [64, 64]),
                                                      className: eg.rp,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, s.jsx)("div", {
                                        className: eg.YY,
                                        children: (0, s.jsx)("img", { alt: "", src: h, className: eg.nX }),
                                    }),
                              (0, s.jsxs)("div", {
                                  className: eg.JD,
                                  children: [
                                      ef(null != d && "" !== d ? d : t.name),
                                      null != u ? e_(u) : null,
                                      (() => {
                                          let { timestamps: e } = t;
                                          return null == e || !(0, L.A)(t) || (0, R.A)(t)
                                              ? null
                                              : e_(
                                                    (0, P.A)(t)
                                                        ? (0, s.jsx)(eI, { timestamps: e })
                                                        : (0, s.jsx)(J.Ay, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: J.Ay.Locations.USER_ACTIVITY,
                                                              className: eg.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, s.jsx)(eS, { activity: t, user: l }),
                          ],
                      }),
                      (0, s.jsx)(eE, { activity: t, analyticsLocations: a }),
                  ],
              })
            : null;
    }),
    (eL.XboxSection = (e) => {
        let { title: t } = e;
        return (0, s.jsx)(ev, {
            children: (0, s.jsxs)("div", {
                className: eg.oc,
                children: [
                    (0, s.jsx)(ed.A, { className: eg.Ai }),
                    (0, s.jsxs)("div", {
                        className: eg.__invalid_xboxSectionDetails,
                        children: [ef(t), e_(ep.intl.string(ep.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (eL.SpotifySection = (e) => {
        let {
            activity: { assets: t, details: n, state: i, application_id: l },
            partySize: a,
            members: o,
            isSolo: c,
            getAssetImage: d,
        } = e;
        return (0, s.jsx)(ev, {
            children: (0, s.jsxs)("div", {
                className: eg.uy,
                children: [
                    null != t
                        ? (0, s.jsxs)("div", {
                              className: eg.YY,
                              children: [
                                  (0, s.jsx)("img", {
                                      alt: t.large_text ?? "",
                                      src: d(l, t.large_image, [160, 160]),
                                      className: r()(eg.nX, eg.Dy, { [eg.p8]: null != t.small_image }),
                                  }),
                                  c
                                      ? null
                                      : (0, s.jsx)(ec.A, {
                                            className: eg.rp,
                                            color: m.A.unsafe_rawColors.PLATFORM_SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, s.jsx)("div", {}),
                    (0, s.jsxs)("div", {
                        children: [null != n ? ef(n) : null, null != i ? e_(i.replace(/; /g, ", ")) : null],
                    }),
                    (0, s.jsx)(eh.A, { minAvatarsShown: c ? 2 : 1, partySize: a, members: o }),
                ],
            }),
        });
    }),
    (eL.TwitchSection = (e) => {
        let t,
            { activity: i, user: l, getAssetImage: a, guildId: o } = e,
            { name: c, details: d, assets: u, application_id: m } = i;
        return (
            null != u &&
                (0, D.A)(i) &&
                (t = (0, s.jsx)(W.A, {
                    className: eg.E6,
                    aspectRatio: 16 / 9,
                    children: (0, s.jsxs)(f.D, {
                        href: (0, b.A)(i),
                        tag: "a",
                        target: "_blank",
                        children: [
                            (0, s.jsx)("img", {
                                alt: u.large_text ?? "",
                                src: a(m, u.large_image, [900, 500]),
                                className: eg.ZB,
                            }),
                            (0, s.jsx)("img", { src: n(606621), className: eg.vc, alt: "" }),
                        ],
                    }),
                })),
            (0, s.jsxs)(ev, {
                children: [
                    (0, s.jsxs)("div", {
                        className: r()({ [eg.x5]: null == l, [eg.Qh]: null != l }),
                        children: [
                            (0, s.jsx)("img", { alt: "", src: E.A.get(ex.fg2.TWITCH).icon.lightSVG, className: eg.Gq }),
                            (0, s.jsxs)("div", { children: [ef(c), null != d ? e_(d) : null] }),
                            null != l
                                ? (0, s.jsx)(_.eu, {
                                      src: l.getAvatarURL(o, 24),
                                      "aria-label": l.username,
                                      className: eg.AZ,
                                      size: I._3.SIZE_24,
                                  })
                                : null,
                        ],
                    }),
                    t,
                ],
            })
        );
    }),
    (eL.ApplicationStreamingSection = (e) => {
        let { activity: t, user: n, applicationStream: i, onPreviewClick: l, guildId: a } = e,
            r = (0, d.bG)([er.A], () => er.A.getChannel(i.channelId)),
            [o, c] = (0, K.zP)(r),
            u = (0, s.jsxs)(f.D, {
                onClick: o ? l : void 0,
                className: eg.q_,
                children: [
                    (0, s.jsx)(Z.A, { stream: i, className: eg.IN }),
                    (0, s.jsx)(h.E, {
                        className: eg.Er,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, K.CT)(c),
                    }),
                ],
            }),
            m = (0, O.A)(t, i)?.activityText ?? ep.intl.string(ep.t.eXan7B),
            A = (0, B.A)({ userId: n.id, guildId: a }),
            x = (0, X.a)({ displayNameStyles: A });
        return (0, s.jsxs)(ev, {
            children: [
                (0, s.jsxs)("div", {
                    className: eg.ME,
                    children: [
                        (0, s.jsx)(_.eu, {
                            size: I._3.SIZE_32,
                            src: n.getAvatarURL(a, 32),
                            "aria-label": n.username,
                            className: eg.OL,
                        }),
                        (0, s.jsxs)("div", { children: [ef(eA.Ay.getName(n), x), e_(m)] }),
                        (0, s.jsx)($.Ay, { size: $.Ay.Sizes.SMALL }),
                    ],
                }),
                u,
            ],
        });
    }),
    (eL.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: a } = e,
            [r, o] = l.useState(null),
            c = t.application_id;
        l.useEffect(() => {
            null != c &&
                (0, eu.RG)(c, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [c]);
        let u = (0, d.yK)([eo.default, ea.default], () =>
                Array.from(a)
                    .map((e) => (ea.default.getId() === e ? null : eo.default.getUser(e)))
                    .filter(em.Vq),
            ),
            m = (0, S.p)(),
            { analyticsLocations: A } = (0, w.Ay)();
        if (null == c) return null;
        let p = V.A.getApplication(c);
        if (null == p) return null;
        let g = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            N = (0, eu.uD)(p.id, r, 300);
        return (0, s.jsxs)(ev, {
            children: [
                (0, s.jsxs)("div", {
                    className: eg.h1,
                    children: [
                        (0, s.jsx)(Q.A, { game: p, size: Q.M.XSMALL, className: eg.VZ }),
                        (0, s.jsx)("div", {
                            className: eg.F0,
                            children: (0, s.jsx)(h.E, { variant: "text-sm/semibold", children: p.name }),
                        }),
                        null != g
                            ? (0, s.jsx)("div", {
                                  className: eg.T$,
                                  children: (0, s.jsx)(h.E, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, s.jsx)(eI, { timestamps: g }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: eg.Kt,
                    children: [
                        null != N ? (0, s.jsx)("img", { src: N, alt: p.name, className: eg.pV }) : null,
                        (0, s.jsxs)("div", {
                            className: eg.d4,
                            children: [
                                (0, s.jsx)(es.LN, { users: u, guildId: i, channelId: n.id }),
                                (0, s.jsx)("div", {
                                    className: eg.ZE,
                                    children: (0, s.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ep.intl.string(ep.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, T.A)({
                                                    applicationId: c,
                                                    activityChannelId: n.id,
                                                    locationObject: m.location,
                                                    analyticsLocations: A,
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
let eR = eL;
