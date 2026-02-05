n.d(t, { A: () => eC });
var i,
    r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(110259),
    d = n(311907),
    c = n(554146),
    u = n(827734),
    A = n(990078),
    h = n(397927),
    _ = n(956793),
    m = n(492684),
    p = n(212245),
    g = n(573648),
    E = n(447031),
    f = n(908289),
    I = n(682261),
    C = n(672979),
    N = n(90644),
    T = n(960076),
    S = n(847177),
    x = n(359549),
    v = n(793574),
    b = n(688810),
    y = n(139286),
    L = n(627363),
    O = n(587895),
    R = n(47167),
    P = n(402216),
    j = n(939341),
    D = n(681827),
    w = n(755395),
    M = n(826673),
    U = n(609425),
    G = n(73392),
    k = n(769015),
    V = n(279250),
    B = n(607407),
    H = n(290987),
    F = n(928550),
    Y = n(594262),
    W = n(378570),
    q = n(345942),
    z = n(804980),
    K = n(260509),
    $ = n(961350),
    Q = n(734057),
    X = n(287809),
    Z = n(879945),
    J = n(266080),
    ee = n(139675),
    et = n(403362),
    en = n(427262),
    ei = n(281489),
    er = n(652215),
    ea = n(985018),
    el = n(270582);
let es = [14, 14, 12, 12, 10, 8, 6],
    eo = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, r.jsx)(h.Text, { className: s()(el.P_, t), variant: "text-sm/semibold", children: e });
    },
    ed = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, r.jsx)(h.Text, {
            className: s()(el.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e,
        });
    },
    ec = (0, m.A)((e) => {
        let { message: t } = e;
        return (0, r.jsx)("div", { className: el.__invalid_timestamp, children: t });
    }),
    eu = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("section", { className: el.uW, children: t });
    },
    eA = (e) => {
        let { inset: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(el.me, { [el.C5]: t }, n) });
    },
    eh = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, y.A)({
                name: o.ImpressionNames.CLOUD_PLAY_CTA,
                type: o.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, r.jsx)(A.m, {
                text: ea.intl.string(ea.t.JVwWva),
                children: (0, r.jsx)(h.Button, {
                    size: "sm",
                    variant: "primary",
                    icon: h.hpF,
                    text: ea.intl.string(ea.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    e_ = (e) => {
        let { activity: t, user: n } = e,
            i = (0, Y.l)({ activity: t, user: n, supportsAskToJoin: !1 }),
            r = null != i;
        return { isJoinActivityButtonShown: r, joinActivityButtonAction: i, hasButton: r };
    },
    em = (e) => {
        let { activity: t, user: n } = e,
            { joinActivityButtonAction: i, isJoinActivityButtonShown: a } = e_({ activity: t, user: n });
        if (a && null != i) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: a, isEnabled: l } = i;
            return (0, r.jsx)(A.m, {
                text: a,
                asContainer: !l,
                children: (0, r.jsx)(h.Button, {
                    size: "sm",
                    variant: "secondary",
                    icon: h._xR,
                    text: n,
                    disabled: !l,
                    loading: e,
                    onClick: (e) => {
                        e.stopPropagation(), t();
                    },
                }),
            });
        }
        return null;
    },
    ep = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: i, name: a } = t,
            { data: l } = (0, L.YY)(i),
            s = (0, x.A)({ application: l, analyticsLocations: n }),
            o = (0, M.JZ)(c.M.CLOUD_PLAY_NEW_BADGE),
            d = (0, F.L)(i);
        return null == s || d
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(eA, { className: el.gi }),
                      (0, r.jsxs)("div", {
                          className: el.DK,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: el.tJ,
                                  children: [
                                      o
                                          ? null
                                          : (0, r.jsx)(h.LpS, {
                                                text: ea.intl.string(ea.t.y2b7CA),
                                                color: u.A.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, r.jsx)(h.Text, {
                                          variant: "text-xs/medium",
                                          children: ea.intl.formatToPlainString(ea.t.RmiYF3, { gameName: a }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(eh, { onCloudPlayClick: s, analyticsLocations: n }),
                          ],
                      }),
                  ],
              });
    };
var eg = (((i = eg || {}).XBOX = "XBOX"), (i.SPOTIFY = "SPOTIFY"), (i.MULTIPLE = "MULTIPLE"), i);
let eE = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: a } = e;
    switch (n) {
        case "XBOX":
            t = (0, r.jsx)(J.A, { className: el.nr, color: u.A.unsafe_rawColors.PRIMARY_300.css });
            break;
        case "SPOTIFY":
            t = (0, r.jsx)(Z.A, { className: el.nr, color: u.A.unsafe_rawColors.SPOTIFY.css });
            break;
        case "MULTIPLE":
            t = (0, r.jsx)("div", {
                className: el.XQ,
                children: (0, r.jsx)(h._xR, {
                    size: "md",
                    className: s()(el.nr, el.iY),
                    color: u.A.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, r.jsx)("img", { src: n ?? void 0, alt: "", className: el.nr });
    }
    return null != i || null != a
        ? (0, r.jsx)(h.DUT, { onClick: i, className: s()(null != i ? el.vk : ""), onContextMenu: a, children: t })
        : t;
};
eE.Src = eg;
let ef = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: i,
            icon: a,
            onSubtitleClick: l,
            onIconClick: o,
            onContextMenu: d,
            guildId: c,
            displayNameFont: u,
        } = e,
        A = (0, r.jsx)(h.Text, { className: el.P_, variant: "text-sm/normal", color: "text-muted", children: i });
    return (0, r.jsxs)("header", {
        className: null != a ? el.dI : el.sk,
        children: [
            (0, r.jsx)(h.euF, {
                src: t.user.getAvatarURL(c, 32),
                "aria-label": t.user.username,
                size: h._3J.SIZE_32,
                className: el.Nw,
                status: t.status,
                onContextMenu: d,
            }),
            (0, r.jsxs)("div", {
                className: el.__invalid_headerDetails,
                children: [
                    (0, r.jsx)(h.Text, { className: s()(el.P_, u), variant: "text-md/semibold", children: n }),
                    null != l ? (0, r.jsx)(h.DUT, { className: el.vk, onClick: l, children: A }) : A,
                ],
            }),
            null != a && null != o ? (0, r.jsx)(h.DUT, { className: el.vk, onClick: o, children: a }) : a,
        ],
    });
};
ef.Icon = eE;
let eI = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, r.jsx)(h.vN3, {
        children: (0, r.jsx)(w.A, { noBackground: !0, className: s()(n, el.iE), padded: !1, ...i, children: t }),
    });
};
(eI.Header = ef),
    (eI.Body = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(w.A, { inset: !0, padded: !1, className: el.rf, children: t });
    }),
    (eI.Separator = eA),
    (eI.VoiceSection = (e) => {
        let { guild: t, channel: n, partySize: i, members: l, onChannelContextMenu: o } = e,
            d = a.useRef(null),
            c = (0, R.Ay)(n, !0),
            u = (0, K.Iv)(t, 32),
            A = (0, K.Rb)(t);
        return (0, r.jsx)(eu, {
            children: (0, r.jsxs)("div", {
                className: el.iO,
                ref: d,
                onContextMenu: (e) => o(e, n),
                children: [
                    (0, r.jsx)(h.DUT, {
                        onClick: () => (0, q.u)(t.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, r.jsxs)("div", {
                            className: el.J4,
                            children: [
                                null != u
                                    ? (0, r.jsx)("img", { alt: "", src: u, className: s()(el.y8, el.p8) })
                                    : (0, r.jsx)("div", {
                                          className: el.I,
                                          children: (0, r.jsx)("div", {
                                              className: el.lB,
                                              style: { fontSize: es[A.length] ?? es[es.length - 1] },
                                              children: A,
                                          }),
                                      }),
                                (0, r.jsx)("div", {
                                    className: el._s,
                                    children: (0, r.jsx)(h.HKD, {
                                        size: "md",
                                        color: "currentColor",
                                        className: el.ZS,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(h.DUT, {
                        onClick: () => {
                            _.default.selectVoiceChannel(n.id), (0, W.iN)(n.id);
                        },
                        focusProps: { ringTarget: d },
                        children: (0, r.jsxs)("div", { className: el.U6, children: [eo(t.name, el.BJ), ed(c, el.BJ)] }),
                    }),
                    (0, r.jsx)(ei.A, { partySize: i, members: l, guildId: t.id }),
                ],
            }),
        });
    }),
    (eI.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: a, activity: l } = e,
            { analyticsLocations: s } = (0, b.Ay)(v.A.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, r.jsxs)(eu, {
            children: [
                (0, r.jsxs)("div", {
                    className: el.yn,
                    children: [
                        null != t ? (0, r.jsx)("img", { alt: "", src: t, className: el.RZ }) : null,
                        (0, r.jsxs)("div", {
                            children: [
                                eo(n),
                                ed(ea.intl.formatToPlainString(ea.t.C4WXvc, { memberCount: i.totalSize })),
                            ],
                        }),
                        (0, r.jsx)(ei.A, { partySize: i, members: a }),
                    ],
                }),
                (0, r.jsx)(ep, { activity: l, analyticsLocations: s }),
            ],
        });
    }),
    (eI.RichPresenceSection = (e) => {
        let { activity: t, getAssetImage: i, user: a } = e,
            { analyticsLocations: l } = (0, b.Ay)(v.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: o } = (0, L.YY)(t.application_id),
            { assets: d, details: c, state: u, application_id: A } = t,
            { hasButton: h } = e_({ activity: t, user: a }),
            _ = (0, j.C4)(o)?.src ?? n(960648),
            m = (0, x.A)({ application: o, analyticsLocations: l });
        return null != t.assets || (0, I.A)(t) || null != m
            ? (0, r.jsxs)(eu, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: s()(el.tL, { [el._2]: h }),
                          children: [
                              null != d && 0 !== Object.keys(d).length
                                  ? (0, r.jsxs)("div", {
                                        className: el.YY,
                                        children: [
                                            (0, r.jsx)("img", {
                                                alt: d.large_text ?? "",
                                                src: i(A, d.large_image, [160, 160]) ?? _,
                                                className: s()(el.nX, { [el.p8]: null != d.small_image }),
                                            }),
                                            null != d.small_image
                                                ? (0, r.jsx)("img", {
                                                      alt: d.small_text ?? "",
                                                      src: i(A, d.small_image, [64, 64]),
                                                      className: el.rp,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, r.jsx)("div", {
                                        className: el.YY,
                                        children: (0, r.jsx)("img", { alt: "", src: _, className: el.nX }),
                                    }),
                              (0, r.jsxs)("div", {
                                  className: el.JD,
                                  children: [
                                      eo(null != c && "" !== c ? c : t.name),
                                      null != u ? ed(u) : null,
                                      (() => {
                                          let { timestamps: e } = t;
                                          return null == e || !(0, C.A)(t) || (0, N.A)(t)
                                              ? null
                                              : ed(
                                                    (0, I.A)(t)
                                                        ? (0, r.jsx)(ec, { timestamps: e })
                                                        : (0, r.jsx)(H.Ay, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: H.Ay.Locations.USER_ACTIVITY,
                                                              className: el.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, r.jsx)(em, { activity: t, user: a }),
                          ],
                      }),
                      (0, r.jsx)(ep, { activity: t, analyticsLocations: l }),
                  ],
              })
            : null;
    }),
    (eI.XboxSection = (e) => {
        let { title: t } = e;
        return (0, r.jsx)(eu, {
            children: (0, r.jsxs)("div", {
                className: el.oc,
                children: [
                    (0, r.jsx)(J.A, { className: el.Ai }),
                    (0, r.jsxs)("div", {
                        className: el.__invalid_xboxSectionDetails,
                        children: [eo(t), ed(ea.intl.string(ea.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (eI.SpotifySection = (e) => {
        let {
            activity: { assets: t, details: n, state: i, application_id: a },
            partySize: l,
            members: o,
            isSolo: d,
            getAssetImage: c,
        } = e;
        return (0, r.jsx)(eu, {
            children: (0, r.jsxs)("div", {
                className: el.uy,
                children: [
                    null != t
                        ? (0, r.jsxs)("div", {
                              className: el.YY,
                              children: [
                                  (0, r.jsx)("img", {
                                      alt: t.large_text ?? "",
                                      src: c(a, t.large_image, [160, 160]),
                                      className: s()(el.nX, el.Dy, { [el.p8]: null != t.small_image }),
                                  }),
                                  d
                                      ? null
                                      : (0, r.jsx)(Z.A, { className: el.rp, color: u.A.unsafe_rawColors.SPOTIFY.css }),
                              ],
                          })
                        : (0, r.jsx)("div", {}),
                    (0, r.jsxs)("div", {
                        children: [null != n ? eo(n) : null, null != i ? ed(i.replace(/; /g, ", ")) : null],
                    }),
                    (0, r.jsx)(ei.A, { minAvatarsShown: d ? 2 : 1, partySize: l, members: o }),
                ],
            }),
        });
    }),
    (eI.TwitchSection = (e) => {
        let t,
            { activity: i, user: a, getAssetImage: l, guildId: o } = e,
            { name: d, details: c, assets: u, application_id: A } = i;
        return (
            null != u &&
                (0, T.A)(i) &&
                (t = (0, r.jsx)(D.A, {
                    className: el.E6,
                    aspectRatio: 16 / 9,
                    children: (0, r.jsxs)(h.DUT, {
                        href: (0, f.A)(i),
                        tag: "a",
                        target: "_blank",
                        children: [
                            (0, r.jsx)("img", {
                                alt: u.large_text ?? "",
                                src: l(A, u.large_image, [900, 500]),
                                className: el.ZB,
                            }),
                            (0, r.jsx)("img", { src: n(606621), className: el.vc, alt: "" }),
                        ],
                    }),
                })),
            (0, r.jsxs)(eu, {
                children: [
                    (0, r.jsxs)("div", {
                        className: s()({ [el.x5]: null == a, [el.Qh]: null != a }),
                        children: [
                            (0, r.jsx)("img", { alt: "", src: g.A.get(er.fg2.TWITCH).icon.lightSVG, className: el.Gq }),
                            (0, r.jsxs)("div", { children: [eo(d), null != c ? ed(c) : null] }),
                            null != a
                                ? (0, r.jsx)(h.euF, {
                                      src: a.getAvatarURL(o, 24),
                                      "aria-label": a.username,
                                      className: el.AZ,
                                      size: h._3J.SIZE_24,
                                  })
                                : null,
                        ],
                    }),
                    t,
                ],
            })
        );
    }),
    (eI.ApplicationStreamingSection = (e) => {
        let { activity: t, user: n, applicationStream: i, onPreviewClick: a, guildId: l } = e,
            s = (0, d.bG)([Q.A], () => Q.A.getChannel(i.channelId)),
            [o, c] = (0, V.zP)(s),
            u = (0, r.jsxs)(h.DUT, {
                onClick: o ? a : void 0,
                className: el.q_,
                children: [
                    (0, r.jsx)(B.A, { stream: i, className: el.IN }),
                    (0, r.jsx)(h.Text, {
                        className: el.Er,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, V.CT)(c),
                    }),
                ],
            }),
            A = (0, S.A)(t, i)?.activityText ?? ea.intl.string(ea.t.eXan7B),
            _ = (0, U.A)({ userId: n.id, guildId: l }),
            m = (0, G.a)({ displayNameStyles: _ });
        return (0, r.jsxs)(eu, {
            children: [
                (0, r.jsxs)("div", {
                    className: el.ME,
                    children: [
                        (0, r.jsx)(h.euF, {
                            size: h._3J.SIZE_32,
                            src: n.getAvatarURL(l, 32),
                            "aria-label": n.username,
                            className: el.OL,
                        }),
                        (0, r.jsxs)("div", { children: [eo(en.Ay.getName(n), m), ed(A)] }),
                        (0, r.jsx)(P.Ay, { size: P.Ay.Sizes.SMALL }),
                    ],
                }),
                u,
            ],
        });
    }),
    (eI.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: l } = e,
            [s, o] = a.useState(null),
            c = t.application_id;
        a.useEffect(() => {
            null != c &&
                (0, ee.RG)(c, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [c]);
        let u = (0, d.yK)([X.default, $.default], () =>
                Array.from(l)
                    .map((e) => ($.default.getId() === e ? null : X.default.getUser(e)))
                    .filter(et.Vq),
            ),
            A = (0, p.p)(),
            { analyticsLocations: _ } = (0, b.Ay)();
        if (null == c) return null;
        let m = O.A.getApplication(c);
        if (null == m) return null;
        let g = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            f = (0, ee.uD)(m.id, s, 300);
        return (0, r.jsxs)(eu, {
            children: [
                (0, r.jsxs)("div", {
                    className: el.h1,
                    children: [
                        (0, r.jsx)(k.A, { game: m, size: k.M.XSMALL, className: el.VZ }),
                        (0, r.jsx)("div", {
                            className: el.F0,
                            children: (0, r.jsx)(h.Text, { variant: "text-sm/semibold", children: m.name }),
                        }),
                        null != g
                            ? (0, r.jsx)("div", {
                                  className: el.T$,
                                  children: (0, r.jsx)(h.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, r.jsx)(ec, { timestamps: g }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: el.Kt,
                    children: [
                        null != f ? (0, r.jsx)("img", { src: f, alt: m.name, className: el.pV }) : null,
                        (0, r.jsxs)("div", {
                            className: el.d4,
                            children: [
                                (0, r.jsx)(z.LN, { users: u, guildId: i, channelId: n.id }),
                                (0, r.jsx)("div", {
                                    className: el.ZE,
                                    children: (0, r.jsx)(h.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ea.intl.string(ea.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, E.A)({
                                                    applicationId: c,
                                                    activityChannelId: n.id,
                                                    locationObject: A.location,
                                                    analyticsLocations: _,
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
let eC = eI;
