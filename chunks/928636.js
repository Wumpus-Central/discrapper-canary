n.d(t, { A: () => eN });
var i,
    a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(110259),
    d = n(141628),
    c = n(311907),
    u = n(554146),
    A = n(827734),
    h = n(990078),
    _ = n(397927),
    m = n(956793),
    p = n(492684),
    g = n(212245),
    E = n(573648),
    I = n(447031),
    f = n(908289),
    C = n(682261),
    T = n(672979),
    N = n(90644),
    S = n(960076),
    x = n(847177),
    v = n(359549),
    b = n(793574),
    y = n(688810),
    O = n(139286),
    L = n(362490),
    R = n(627363),
    P = n(587895),
    D = n(47167),
    M = n(402216),
    j = n(939341),
    w = n(681827),
    U = n(755395),
    G = n(826673),
    k = n(609425),
    V = n(73392),
    B = n(769015),
    H = n(279250),
    F = n(607407),
    Y = n(290987),
    W = n(928550),
    K = n(594262),
    q = n(378570),
    z = n(345942),
    $ = n(804980),
    Q = n(260509),
    X = n(961350),
    Z = n(734057),
    J = n(287809),
    ee = n(879945),
    et = n(266080),
    en = n(139675),
    ei = n(403362),
    ea = n(427262),
    el = n(281489),
    er = n(652215),
    es = n(985018),
    eo = n(103781);
let ed = [14, 14, 12, 12, 10, 8, 6],
    ec = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, a.jsx)(_.Text, { className: s()(eo.P_, t), variant: "text-sm/semibold", children: e });
    },
    eu = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, a.jsx)(_.Text, {
            className: s()(eo.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e,
        });
    },
    eA = (0, p.A)((e) => {
        let { message: t } = e;
        return (0, a.jsx)("div", { className: eo.__invalid_timestamp, children: t });
    }),
    eh = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("section", { className: eo.uW, children: t });
    },
    e_ = (e) => {
        let { inset: t, className: n } = e;
        return (0, a.jsx)("div", { className: s()(eo.me, { [eo.C5]: t }, n) });
    },
    em = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, O.A)({
                name: o.ImpressionNames.CLOUD_PLAY_CTA,
                type: o.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, a.jsx)(h.m, {
                text: es.intl.string(es.t.JVwWva),
                children: (0, a.jsx)(_.Button, {
                    size: "sm",
                    variant: "primary",
                    icon: _.hpF,
                    text: es.intl.string(es.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    ep = (e) => {
        let { activity: t, user: n } = e,
            i = (0, K.l)({ activity: t, user: n, supportsAskToJoin: !1 }),
            a = null != i,
            { data: l } = (0, R.YY)(t.application_id),
            { fetched: r, hasAlreadyLinked: s, canStartAuthorization: o, startAuthorization: d } = (0, L.RD)(l),
            c = !a && r && o && !s;
        return {
            isJoinActivityButtonShown: a,
            joinActivityButtonAction: i,
            isLinkAccountButtonShown: c,
            startAuthorization: d,
            hasButton: a || c,
        };
    },
    eg = (e) => {
        let { activity: t, user: n } = e,
            {
                joinActivityButtonAction: i,
                isJoinActivityButtonShown: l,
                isLinkAccountButtonShown: r,
                startAuthorization: s,
            } = ep({ activity: t, user: n }),
            { newestAnalyticsLocation: o } = (0, y.Ay)();
        if (l && null != i) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: l, isEnabled: r } = i;
            return (0, a.jsx)(h.m, {
                text: l,
                asContainer: !r,
                children: (0, a.jsx)(_.Button, {
                    size: "sm",
                    variant: "secondary",
                    icon: _._xR,
                    text: n,
                    disabled: !r,
                    loading: e,
                    onClick: (e) => {
                        e.stopPropagation(), t();
                    },
                }),
            });
        }
        return r
            ? (0, a.jsx)(_.Button, {
                  size: "sm",
                  variant: "secondary",
                  icon: d.A,
                  text: es.intl.string(es.t.sbdnpw),
                  onClick: (e) => {
                      e.stopPropagation(), s({ analyticsLocations: [o] });
                  },
              })
            : null;
    },
    eE = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: i, name: l } = t,
            { data: r } = (0, R.YY)(i),
            s = (0, v.A)({ application: r, analyticsLocations: n }),
            o = (0, G.JZ)(u.M.CLOUD_PLAY_NEW_BADGE),
            d = (0, W.L)(i);
        return null == s || d
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(e_, { className: eo.gi }),
                      (0, a.jsxs)("div", {
                          className: eo.DK,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: eo.tJ,
                                  children: [
                                      o
                                          ? null
                                          : (0, a.jsx)(_.LpS, {
                                                text: es.intl.string(es.t.y2b7CA),
                                                color: A.A.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, a.jsx)(_.Text, {
                                          variant: "text-xs/medium",
                                          children: es.intl.formatToPlainString(es.t.RmiYF3, { gameName: l }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(em, { onCloudPlayClick: s, analyticsLocations: n }),
                          ],
                      }),
                  ],
              });
    };
var eI = (((i = eI || {}).XBOX = "XBOX"), (i.SPOTIFY = "SPOTIFY"), (i.MULTIPLE = "MULTIPLE"), i);
let ef = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, a.jsx)(et.A, { className: eo.nr, color: A.A.unsafe_rawColors.PRIMARY_300.css });
            break;
        case "SPOTIFY":
            t = (0, a.jsx)(ee.A, { className: eo.nr, color: A.A.unsafe_rawColors.SPOTIFY.css });
            break;
        case "MULTIPLE":
            t = (0, a.jsx)("div", {
                className: eo.XQ,
                children: (0, a.jsx)(_._xR, {
                    size: "md",
                    className: s()(eo.nr, eo.iY),
                    color: A.A.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, a.jsx)("img", { src: n ?? void 0, alt: "", className: eo.nr });
    }
    return null != i || null != l
        ? (0, a.jsx)(_.DUT, { onClick: i, className: s()(null != i ? eo.vk : ""), onContextMenu: l, children: t })
        : t;
};
ef.Src = eI;
let eC = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: i,
            icon: l,
            onSubtitleClick: r,
            onIconClick: o,
            onContextMenu: d,
            guildId: c,
            displayNameFont: u,
        } = e,
        A = (0, a.jsx)(_.Text, { className: eo.P_, variant: "text-sm/normal", color: "text-muted", children: i });
    return (0, a.jsxs)("header", {
        className: null != l ? eo.dI : eo.sk,
        children: [
            (0, a.jsx)(_.euF, {
                src: t.user.getAvatarURL(c, 32),
                "aria-label": t.user.username,
                size: _._3J.SIZE_32,
                className: eo.Nw,
                status: t.status,
                onContextMenu: d,
            }),
            (0, a.jsxs)("div", {
                className: eo.__invalid_headerDetails,
                children: [
                    (0, a.jsx)(_.Text, { className: s()(eo.P_, u), variant: "text-md/semibold", children: n }),
                    null != r ? (0, a.jsx)(_.DUT, { className: eo.vk, onClick: r, children: A }) : A,
                ],
            }),
            null != l && null != o ? (0, a.jsx)(_.DUT, { className: eo.vk, onClick: o, children: l }) : l,
        ],
    });
};
eC.Icon = ef;
let eT = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, a.jsx)(_.vN3, {
        children: (0, a.jsx)(U.A, { noBackground: !0, className: s()(n, eo.iE), padded: !1, ...i, children: t }),
    });
};
(eT.Header = eC),
    (eT.Body = (e) => {
        let { children: t } = e;
        return (0, a.jsx)(U.A, { inset: !0, padded: !1, className: eo.rf, children: t });
    }),
    (eT.Separator = e_),
    (eT.VoiceSection = (e) => {
        let { guild: t, channel: n, partySize: i, members: r, onChannelContextMenu: o } = e,
            d = l.useRef(null),
            c = (0, D.Ay)(n, !0),
            u = (0, Q.Iv)(t, 32),
            A = (0, Q.Rb)(t);
        return (0, a.jsx)(eh, {
            children: (0, a.jsxs)("div", {
                className: eo.iO,
                ref: d,
                onContextMenu: (e) => o(e, n),
                children: [
                    (0, a.jsx)(_.DUT, {
                        onClick: () => (0, z.u)(t.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, a.jsxs)("div", {
                            className: eo.J4,
                            children: [
                                null != u
                                    ? (0, a.jsx)("img", { alt: "", src: u, className: s()(eo.y8, eo.p8) })
                                    : (0, a.jsx)("div", {
                                          className: eo.I,
                                          children: (0, a.jsx)("div", {
                                              className: eo.lB,
                                              style: { fontSize: ed[A.length] ?? ed[ed.length - 1] },
                                              children: A,
                                          }),
                                      }),
                                (0, a.jsx)("div", {
                                    className: eo._s,
                                    children: (0, a.jsx)(_.HKD, {
                                        size: "md",
                                        color: "currentColor",
                                        className: eo.ZS,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, a.jsx)(_.DUT, {
                        onClick: () => {
                            m.default.selectVoiceChannel(n.id), (0, q.iN)(n.id);
                        },
                        focusProps: { ringTarget: d },
                        children: (0, a.jsxs)("div", { className: eo.U6, children: [ec(t.name, eo.BJ), eu(c, eo.BJ)] }),
                    }),
                    (0, a.jsx)(el.A, { partySize: i, members: r, guildId: t.id }),
                ],
            }),
        });
    }),
    (eT.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: l, activity: r } = e,
            { analyticsLocations: s } = (0, y.Ay)(b.A.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, a.jsxs)(eh, {
            children: [
                (0, a.jsxs)("div", {
                    className: eo.yn,
                    children: [
                        null != t ? (0, a.jsx)("img", { alt: "", src: t, className: eo.RZ }) : null,
                        (0, a.jsxs)("div", {
                            children: [
                                ec(n),
                                eu(es.intl.formatToPlainString(es.t.C4WXvc, { memberCount: i.totalSize })),
                            ],
                        }),
                        (0, a.jsx)(el.A, { partySize: i, members: l }),
                    ],
                }),
                (0, a.jsx)(eE, { activity: r, analyticsLocations: s }),
            ],
        });
    }),
    (eT.RichPresenceSection = (e) => {
        let { activity: t, getAssetImage: i, user: l } = e,
            { analyticsLocations: r } = (0, y.Ay)(b.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: o } = (0, R.YY)(t.application_id),
            { assets: d, details: c, state: u, application_id: A } = t,
            { hasButton: h } = ep({ activity: t, user: l }),
            _ = (0, j.C4)(o)?.src ?? n(960648),
            m = (0, v.A)({ application: o, analyticsLocations: r });
        return null != t.assets || (0, C.A)(t) || null != m
            ? (0, a.jsxs)(eh, {
                  children: [
                      (0, a.jsxs)("div", {
                          className: s()(eo.tL, { [eo._2]: h }),
                          children: [
                              null != d && 0 !== Object.keys(d).length
                                  ? (0, a.jsxs)("div", {
                                        className: eo.YY,
                                        children: [
                                            (0, a.jsx)("img", {
                                                alt: d.large_text ?? "",
                                                src: i(A, d.large_image, [160, 160]) ?? _,
                                                className: s()(eo.nX, { [eo.p8]: null != d.small_image }),
                                            }),
                                            null != d.small_image
                                                ? (0, a.jsx)("img", {
                                                      alt: d.small_text ?? "",
                                                      src: i(A, d.small_image, [64, 64]),
                                                      className: eo.rp,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, a.jsx)("div", {
                                        className: eo.YY,
                                        children: (0, a.jsx)("img", { alt: "", src: _, className: eo.nX }),
                                    }),
                              (0, a.jsxs)("div", {
                                  className: eo.JD,
                                  children: [
                                      ec(null != c && "" !== c ? c : t.name),
                                      null != u ? eu(u) : null,
                                      (() => {
                                          let { timestamps: e } = t;
                                          return null == e || !(0, T.A)(t) || (0, N.A)(t)
                                              ? null
                                              : eu(
                                                    (0, C.A)(t)
                                                        ? (0, a.jsx)(eA, { timestamps: e })
                                                        : (0, a.jsx)(Y.Ay, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: Y.Ay.Locations.USER_ACTIVITY,
                                                              className: eo.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, a.jsx)(eg, { activity: t, user: l }),
                          ],
                      }),
                      (0, a.jsx)(eE, { activity: t, analyticsLocations: r }),
                  ],
              })
            : null;
    }),
    (eT.XboxSection = (e) => {
        let { title: t } = e;
        return (0, a.jsx)(eh, {
            children: (0, a.jsxs)("div", {
                className: eo.oc,
                children: [
                    (0, a.jsx)(et.A, { className: eo.Ai }),
                    (0, a.jsxs)("div", {
                        className: eo.__invalid_xboxSectionDetails,
                        children: [ec(t), eu(es.intl.string(es.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (eT.SpotifySection = (e) => {
        let {
            activity: { assets: t, details: n, state: i, application_id: l },
            partySize: r,
            members: o,
            isSolo: d,
            getAssetImage: c,
        } = e;
        return (0, a.jsx)(eh, {
            children: (0, a.jsxs)("div", {
                className: eo.uy,
                children: [
                    null != t
                        ? (0, a.jsxs)("div", {
                              className: eo.YY,
                              children: [
                                  (0, a.jsx)("img", {
                                      alt: t.large_text ?? "",
                                      src: c(l, t.large_image, [160, 160]),
                                      className: s()(eo.nX, eo.Dy, { [eo.p8]: null != t.small_image }),
                                  }),
                                  d
                                      ? null
                                      : (0, a.jsx)(ee.A, { className: eo.rp, color: A.A.unsafe_rawColors.SPOTIFY.css }),
                              ],
                          })
                        : (0, a.jsx)("div", {}),
                    (0, a.jsxs)("div", {
                        children: [null != n ? ec(n) : null, null != i ? eu(i.replace(/; /g, ", ")) : null],
                    }),
                    (0, a.jsx)(el.A, { minAvatarsShown: d ? 2 : 1, partySize: r, members: o }),
                ],
            }),
        });
    }),
    (eT.TwitchSection = (e) => {
        let t,
            { activity: i, user: l, getAssetImage: r, guildId: o } = e,
            { name: d, details: c, assets: u, application_id: A } = i;
        return (
            null != u &&
                (0, S.A)(i) &&
                (t = (0, a.jsx)(w.A, {
                    className: eo.E6,
                    aspectRatio: 16 / 9,
                    children: (0, a.jsxs)(_.DUT, {
                        href: (0, f.A)(i),
                        tag: "a",
                        target: "_blank",
                        children: [
                            (0, a.jsx)("img", {
                                alt: u.large_text ?? "",
                                src: r(A, u.large_image, [900, 500]),
                                className: eo.ZB,
                            }),
                            (0, a.jsx)("img", { src: n(606621), className: eo.vc, alt: "" }),
                        ],
                    }),
                })),
            (0, a.jsxs)(eh, {
                children: [
                    (0, a.jsxs)("div", {
                        className: s()({ [eo.x5]: null == l, [eo.Qh]: null != l }),
                        children: [
                            (0, a.jsx)("img", { alt: "", src: E.A.get(er.fg2.TWITCH).icon.lightSVG, className: eo.Gq }),
                            (0, a.jsxs)("div", { children: [ec(d), null != c ? eu(c) : null] }),
                            null != l
                                ? (0, a.jsx)(_.euF, {
                                      src: l.getAvatarURL(o, 24),
                                      "aria-label": l.username,
                                      className: eo.AZ,
                                      size: _._3J.SIZE_24,
                                  })
                                : null,
                        ],
                    }),
                    t,
                ],
            })
        );
    }),
    (eT.ApplicationStreamingSection = (e) => {
        let { activity: t, user: n, applicationStream: i, onPreviewClick: l, guildId: r } = e,
            s = (0, c.bG)([Z.A], () => Z.A.getChannel(i.channelId)),
            [o, d] = (0, H.zP)(s),
            u = (0, a.jsxs)(_.DUT, {
                onClick: o ? l : void 0,
                className: eo.q_,
                children: [
                    (0, a.jsx)(F.A, { stream: i, className: eo.IN }),
                    (0, a.jsx)(_.Text, {
                        className: eo.Er,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, H.CT)(d),
                    }),
                ],
            }),
            A = (0, x.A)(t, i)?.activityText ?? es.intl.string(es.t.eXan7B),
            h = (0, k.A)({ userId: n.id, guildId: r }),
            m = (0, V.a)({ displayNameStyles: h });
        return (0, a.jsxs)(eh, {
            children: [
                (0, a.jsxs)("div", {
                    className: eo.ME,
                    children: [
                        (0, a.jsx)(_.euF, {
                            size: _._3J.SIZE_32,
                            src: n.getAvatarURL(r, 32),
                            "aria-label": n.username,
                            className: eo.OL,
                        }),
                        (0, a.jsxs)("div", { children: [ec(ea.Ay.getName(n), m), eu(A)] }),
                        (0, a.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL }),
                    ],
                }),
                u,
            ],
        });
    }),
    (eT.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: r } = e,
            [s, o] = l.useState(null),
            d = t.application_id;
        l.useEffect(() => {
            null != d &&
                (0, en.RG)(d, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [d]);
        let u = (0, c.yK)([J.default, X.default], () =>
                Array.from(r)
                    .map((e) => (X.default.getId() === e ? null : J.default.getUser(e)))
                    .filter(ei.Vq),
            ),
            A = (0, g.p)(),
            { analyticsLocations: h } = (0, y.Ay)();
        if (null == d) return null;
        let m = P.A.getApplication(d);
        if (null == m) return null;
        let p = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            E = (0, en.uD)(m.id, s, 300);
        return (0, a.jsxs)(eh, {
            children: [
                (0, a.jsxs)("div", {
                    className: eo.h1,
                    children: [
                        (0, a.jsx)(B.A, { game: m, size: B.M.XSMALL, className: eo.VZ }),
                        (0, a.jsx)("div", {
                            className: eo.F0,
                            children: (0, a.jsx)(_.Text, { variant: "text-sm/semibold", children: m.name }),
                        }),
                        null != p
                            ? (0, a.jsx)("div", {
                                  className: eo.T$,
                                  children: (0, a.jsx)(_.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, a.jsx)(eA, { timestamps: p }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eo.Kt,
                    children: [
                        null != E ? (0, a.jsx)("img", { src: E, alt: m.name, className: eo.pV }) : null,
                        (0, a.jsxs)("div", {
                            className: eo.d4,
                            children: [
                                (0, a.jsx)($.LN, { users: u, guildId: i, channelId: n.id }),
                                (0, a.jsx)("div", {
                                    className: eo.ZE,
                                    children: (0, a.jsx)(_.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: es.intl.string(es.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, I.A)({
                                                    applicationId: d,
                                                    activityChannelId: n.id,
                                                    locationObject: A.location,
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
let eN = eT;
