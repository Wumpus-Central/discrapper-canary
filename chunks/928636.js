n.d(t, {
    A: () => eO,
}),
    n(747238),
    n(812715),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(110259),
    c = n(311907),
    u = n(554146),
    d = n(827734),
    p = n(990078),
    f = n(397927),
    h = n(956793),
    A = n(492684),
    g = n(212245),
    m = n(573648),
    b = n(447031),
    _ = n(908289),
    E = n(682261),
    O = n(672979),
    y = n(90644),
    I = n(960076),
    v = n(847177),
    S = n(359549),
    C = n(793574),
    N = n(688810),
    T = n(139286),
    j = n(627363),
    x = n(587895),
    P = n(47167),
    w = n(402216),
    L = n(939341),
    R = n(681827),
    D = n(755395),
    M = n(826673),
    k = n(609425),
    U = n(73392),
    G = n(769015),
    V = n(279250),
    B = n(607407),
    H = n(290987),
    F = n(928550),
    Y = n(594262),
    K = n(378570),
    z = n(345942),
    W = n(804980),
    q = n(260509),
    Q = n(961350),
    X = n(734057),
    Z = n(287809),
    J = n(879945),
    $ = n(266080),
    ee = n(139675),
    et = n(403362),
    en = n(427262),
    er = n(281489),
    ei = n(652215),
    el = n(985018),
    ea = n(270582);
let es = [14, 14, 12, 12, 10, 8, 6],
    eo = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(f.Text, {
            className: s()(ea.P_, t),
            variant: "text-sm/semibold",
            children: e,
        });
    },
    ec = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(f.Text, {
            className: s()(ea.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e,
        });
    },
    eu = (0, A.A)((e) => {
        let { message: t } = e;
        return (0, i.jsx)("div", {
            className: ea.__invalid_timestamp,
            children: t,
        });
    }),
    ed = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("section", {
            className: ea.uW,
            children: t,
        });
    },
    ep = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)("div", {
            className: s()(
                ea.me,
                {
                    [ea.C5]: t,
                },
                n,
            ),
        });
    },
    ef = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, T.A)({
                name: o.ImpressionNames.CLOUD_PLAY_CTA,
                type: o.ImpressionTypes.VIEW,
                properties: {
                    location_stack: n,
                },
            }),
            (0, i.jsx)(p.m, {
                text: el.intl.string(el.t.JVwWva),
                children: (0, i.jsx)(f.Button, {
                    size: "sm",
                    variant: "primary",
                    icon: f.hpF,
                    text: el.intl.string(el.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    eh = (e) => {
        let { activity: t, user: n } = e,
            r = (0, Y.l)({
                activity: t,
                user: n,
                supportsAskToJoin: !1,
            }),
            i = null != r;
        return {
            isJoinActivityButtonShown: i,
            joinActivityButtonAction: r,
            hasButton: i,
        };
    },
    eA = (e) => {
        let { activity: t, user: n } = e,
            { joinActivityButtonAction: r, isJoinActivityButtonShown: l } = eh({
                activity: t,
                user: n,
            });
        if (l && null != r) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: l, isEnabled: a } = r;
            return (0, i.jsx)(p.m, {
                text: l,
                asContainer: !a,
                children: (0, i.jsx)(f.Button, {
                    size: "sm",
                    variant: "secondary",
                    icon: f._xR,
                    text: n,
                    disabled: !a,
                    loading: e,
                    onClick: (e) => {
                        e.stopPropagation(), t();
                    },
                }),
            });
        }
        return null;
    },
    eg = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: r, name: l } = t,
            { data: a } = (0, j.YY)(r),
            s = (0, S.A)({
                application: a,
                analyticsLocations: n,
            }),
            o = (0, M.JZ)(u.M.CLOUD_PLAY_NEW_BADGE),
            c = (0, F.L)(r);
        return null == s || c
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ep, {
                          className: ea.gi,
                      }),
                      (0, i.jsxs)("div", {
                          className: ea.DK,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ea.tJ,
                                  children: [
                                      o
                                          ? null
                                          : (0, i.jsx)(f.LpS, {
                                                text: el.intl.string(el.t.y2b7CA),
                                                color: d.A.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, i.jsx)(f.Text, {
                                          variant: "text-xs/medium",
                                          children: el.intl.formatToPlainString(el.t.RmiYF3, {
                                              gameName: l,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(ef, {
                                  onCloudPlayClick: s,
                                  analyticsLocations: n,
                              }),
                          ],
                      }),
                  ],
              });
    };
var em = (((r = em || {}).XBOX = "XBOX"), (r.SPOTIFY = "SPOTIFY"), (r.MULTIPLE = "MULTIPLE"), r);
let eb = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, i.jsx)($.A, {
                className: ea.nr,
                color: d.A.unsafe_rawColors.PRIMARY_300.css,
            });
            break;
        case "SPOTIFY":
            t = (0, i.jsx)(J.A, {
                className: ea.nr,
                color: d.A.unsafe_rawColors.SPOTIFY.css,
            });
            break;
        case "MULTIPLE":
            t = (0, i.jsx)("div", {
                className: ea.XQ,
                children: (0, i.jsx)(f._xR, {
                    size: "md",
                    className: s()(ea.nr, ea.iY),
                    color: d.A.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, i.jsx)("img", {
                src: null != n ? n : void 0,
                alt: "",
                className: ea.nr,
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(f.DUT, {
              onClick: r,
              className: s()(null != r ? ea.vk : ""),
              onContextMenu: l,
              children: t,
          })
        : t;
};
eb.Src = em;
let e_ = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: r,
            icon: l,
            onSubtitleClick: a,
            onIconClick: o,
            onContextMenu: c,
            guildId: u,
            displayNameFont: d,
        } = e,
        p = (0, i.jsx)(f.Text, {
            className: ea.P_,
            variant: "text-sm/normal",
            color: "text-muted",
            children: r,
        });
    return (0, i.jsxs)("header", {
        className: null != l ? ea.dI : ea.sk,
        children: [
            (0, i.jsx)(f.euF, {
                src: t.user.getAvatarURL(u, 32),
                "aria-label": t.user.username,
                size: f._3J.SIZE_32,
                className: ea.Nw,
                status: t.status,
                onContextMenu: c,
            }),
            (0, i.jsxs)("div", {
                className: ea.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(f.Text, {
                        className: s()(ea.P_, d),
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, i.jsx)(f.DUT, {
                              className: ea.vk,
                              onClick: a,
                              children: p,
                          })
                        : p,
                ],
            }),
            null != l && null != o
                ? (0, i.jsx)(f.DUT, {
                      className: ea.vk,
                      onClick: o,
                      children: l,
                  })
                : l,
        ],
    });
};
e_.Icon = eb;
let eE = (e) => {
    var t, n;
    let { children: r, className: l } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["children", "className"]);
    return (0, i.jsx)(f.vN3, {
        children: (0, i.jsx)(
            D.A,
            ((t = (function (e) {
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
            })(
                {
                    noBackground: !0,
                    className: s()(l, ea.iE),
                    padded: !1,
                },
                a,
            )),
            (n = n =
                {
                    children: r,
                }),
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
        ),
    });
};
(eE.Header = e_),
    (eE.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(D.A, {
            inset: !0,
            padded: !1,
            className: ea.rf,
            children: t,
        });
    }),
    (eE.Separator = ep),
    (eE.VoiceSection = (e) => {
        var t;
        let { guild: n, channel: r, partySize: a, members: o, onChannelContextMenu: c } = e,
            u = l.useRef(null),
            d = (0, P.Ay)(r, !0),
            p = (0, q.Iv)(n, 32),
            A = (0, q.Rb)(n);
        return (0, i.jsx)(ed, {
            children: (0, i.jsxs)("div", {
                className: ea.iO,
                ref: u,
                onContextMenu: (e) => c(e, r),
                children: [
                    (0, i.jsx)(f.DUT, {
                        onClick: () => (0, z.u)(n.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)("div", {
                            className: ea.J4,
                            children: [
                                null != p
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          src: p,
                                          className: s()(ea.y8, ea.p8),
                                      })
                                    : (0, i.jsx)("div", {
                                          className: ea.I,
                                          children: (0, i.jsx)("div", {
                                              className: ea.lB,
                                              style: {
                                                  fontSize: null != (t = es[A.length]) ? t : es[es.length - 1],
                                              },
                                              children: A,
                                          }),
                                      }),
                                (0, i.jsx)("div", {
                                    className: ea._s,
                                    children: (0, i.jsx)(f.HKD, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ea.ZS,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(f.DUT, {
                        onClick: () => {
                            h.default.selectVoiceChannel(r.id), (0, K.iN)(r.id);
                        },
                        focusProps: {
                            ringTarget: u,
                        },
                        children: (0, i.jsxs)("div", {
                            className: ea.U6,
                            children: [eo(n.name, ea.BJ), ec(d, ea.BJ)],
                        }),
                    }),
                    (0, i.jsx)(er.A, {
                        partySize: a,
                        members: o,
                        guildId: n.id,
                    }),
                ],
            }),
        });
    }),
    (eE.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l, activity: a } = e,
            { analyticsLocations: s } = (0, N.Ay)(C.A.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, i.jsxs)(ed, {
            children: [
                (0, i.jsxs)("div", {
                    className: ea.yn,
                    children: [
                        null != t
                            ? (0, i.jsx)("img", {
                                  alt: "",
                                  src: t,
                                  className: ea.RZ,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                eo(n),
                                ec(
                                    el.intl.formatToPlainString(el.t.C4WXvc, {
                                        memberCount: r.totalSize,
                                    }),
                                ),
                            ],
                        }),
                        (0, i.jsx)(er.A, {
                            partySize: r,
                            members: l,
                        }),
                    ],
                }),
                (0, i.jsx)(eg, {
                    activity: a,
                    analyticsLocations: s,
                }),
            ],
        });
    }),
    (eE.RichPresenceSection = (e) => {
        var t, r, l, a, o;
        let { activity: c, getAssetImage: u, user: d } = e,
            { analyticsLocations: p } = (0, N.Ay)(C.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: f } = (0, j.YY)(c.application_id),
            { assets: h, details: A, state: g, application_id: m } = c,
            { hasButton: b } = eh({
                activity: c,
                user: d,
            }),
            _ = null != (t = null == (o = (0, L.C4)(f)) ? void 0 : o.src) ? t : n(960648),
            I = (0, S.A)({
                application: f,
                analyticsLocations: p,
            });
        return null != c.assets || (0, E.A)(c) || null != I
            ? (0, i.jsxs)(ed, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: s()(ea.tL, {
                              [ea._2]: b,
                          }),
                          children: [
                              null != h && 0 !== Object.keys(h).length
                                  ? (0, i.jsxs)("div", {
                                        className: ea.YY,
                                        children: [
                                            (0, i.jsx)("img", {
                                                alt: null != (r = h.large_text) ? r : "",
                                                src: null != (l = u(m, h.large_image, [160, 160])) ? l : _,
                                                className: s()(ea.nX, {
                                                    [ea.p8]: null != h.small_image,
                                                }),
                                            }),
                                            null != h.small_image
                                                ? (0, i.jsx)("img", {
                                                      alt: null != (a = h.small_text) ? a : "",
                                                      src: u(m, h.small_image, [64, 64]),
                                                      className: ea.rp,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, i.jsx)("div", {
                                        className: ea.YY,
                                        children: (0, i.jsx)("img", {
                                            alt: "",
                                            src: _,
                                            className: ea.nX,
                                        }),
                                    }),
                              (0, i.jsxs)("div", {
                                  className: ea.JD,
                                  children: [
                                      eo(null != A && "" !== A ? A : c.name),
                                      null != g ? ec(g) : null,
                                      (() => {
                                          let { timestamps: e } = c;
                                          return null == e || !(0, O.A)(c) || (0, y.A)(c)
                                              ? null
                                              : ec(
                                                    (0, E.A)(c)
                                                        ? (0, i.jsx)(eu, {
                                                              timestamps: e,
                                                          })
                                                        : (0, i.jsx)(H.Ay, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: H.Ay.Locations.USER_ACTIVITY,
                                                              className: ea.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, i.jsx)(eA, {
                                  activity: c,
                                  user: d,
                              }),
                          ],
                      }),
                      (0, i.jsx)(eg, {
                          activity: c,
                          analyticsLocations: p,
                      }),
                  ],
              })
            : null;
    }),
    (eE.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)(ed, {
            children: (0, i.jsxs)("div", {
                className: ea.oc,
                children: [
                    (0, i.jsx)($.A, {
                        className: ea.Ai,
                    }),
                    (0, i.jsxs)("div", {
                        className: ea.__invalid_xboxSectionDetails,
                        children: [eo(t), ec(el.intl.string(el.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (eE.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: o,
            members: c,
            isSolo: u,
            getAssetImage: p,
        } = e;
        return (0, i.jsx)(ed, {
            children: (0, i.jsxs)("div", {
                className: ea.uy,
                children: [
                    null != n
                        ? (0, i.jsxs)("div", {
                              className: ea.YY,
                              children: [
                                  (0, i.jsx)("img", {
                                      alt: null != (t = n.large_text) ? t : "",
                                      src: p(a, n.large_image, [160, 160]),
                                      className: s()(ea.nX, ea.Dy, {
                                          [ea.p8]: null != n.small_image,
                                      }),
                                  }),
                                  u
                                      ? null
                                      : (0, i.jsx)(J.A, {
                                            className: ea.rp,
                                            color: d.A.unsafe_rawColors.SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, i.jsx)("div", {}),
                    (0, i.jsxs)("div", {
                        children: [null != r ? eo(r) : null, null != l ? ec(l.replace(/; /g, ", ")) : null],
                    }),
                    (0, i.jsx)(er.A, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: o,
                        members: c,
                    }),
                ],
            }),
        });
    }),
    (eE.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: o } = e,
            { name: c, details: u, assets: d, application_id: p } = r;
        if (null != d && (0, I.A)(r)) {
            var h;
            t = (0, i.jsx)(R.A, {
                className: ea.E6,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(f.DUT, {
                    href: (0, _.A)(r),
                    tag: "a",
                    target: "_blank",
                    children: [
                        (0, i.jsx)("img", {
                            alt: null != (h = d.large_text) ? h : "",
                            src: a(p, d.large_image, [900, 500]),
                            className: ea.ZB,
                        }),
                        (0, i.jsx)("img", {
                            src: n(606621),
                            className: ea.vc,
                            alt: "",
                        }),
                    ],
                }),
            });
        }
        return (0, i.jsxs)(ed, {
            children: [
                (0, i.jsxs)("div", {
                    className: s()({
                        [ea.x5]: null == l,
                        [ea.Qh]: null != l,
                    }),
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: m.A.get(ei.fg2.TWITCH).icon.lightSVG,
                            className: ea.Gq,
                        }),
                        (0, i.jsxs)("div", {
                            children: [eo(c), null != u ? ec(u) : null],
                        }),
                        null != l
                            ? (0, i.jsx)(f.euF, {
                                  src: l.getAvatarURL(o, 24),
                                  "aria-label": l.username,
                                  className: ea.AZ,
                                  size: f._3J.SIZE_24,
                              })
                            : null,
                    ],
                }),
                t,
            ],
        });
    }),
    (eE.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: r, user: l, applicationStream: a, onPreviewClick: s, guildId: o } = e,
            u = (0, c.bG)([X.A], () => X.A.getChannel(a.channelId)),
            [d, p] = (0, V.zP)(u),
            h = (0, i.jsxs)(f.DUT, {
                onClick: d ? s : void 0,
                className: ea.q_,
                children: [
                    (0, i.jsx)(B.A, {
                        stream: a,
                        className: ea.IN,
                    }),
                    (0, i.jsx)(f.Text, {
                        className: ea.Er,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, V.CT)(p),
                    }),
                ],
            }),
            A = null != (t = null == (n = (0, v.A)(r, a)) ? void 0 : n.activityText) ? t : el.intl.string(el.t.eXan7B),
            g = (0, k.A)({
                userId: l.id,
                guildId: o,
            }),
            m = (0, U.a)({
                displayNameStyles: g,
            });
        return (0, i.jsxs)(ed, {
            children: [
                (0, i.jsxs)("div", {
                    className: ea.ME,
                    children: [
                        (0, i.jsx)(f.euF, {
                            size: f._3J.SIZE_32,
                            src: l.getAvatarURL(o, 32),
                            "aria-label": l.username,
                            className: ea.OL,
                        }),
                        (0, i.jsxs)("div", {
                            children: [eo(en.Ay.getName(l), m), ec(A)],
                        }),
                        (0, i.jsx)(w.Ay, {
                            size: w.Ay.Sizes.SMALL,
                        }),
                    ],
                }),
                h,
            ],
        });
    }),
    (eE.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [s, o] = l.useState(null),
            u = t.application_id;
        l.useEffect(() => {
            null != u &&
                (0, ee.RG)(u, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [u]);
        let d = (0, c.yK)([Z.default, Q.default], () =>
                Array.from(a)
                    .map((e) => (Q.default.getId() === e ? null : Z.default.getUser(e)))
                    .filter(et.Vq),
            ),
            p = (0, g.p)(),
            { analyticsLocations: h } = (0, N.Ay)();
        if (null == u) return null;
        let A = x.A.getApplication(u);
        if (null == A) return null;
        let m =
                null != t.created_at && t.created_at > 0
                    ? {
                          start: t.created_at,
                      }
                    : void 0,
            _ = (0, ee.uD)(A.id, s, 300);
        return (0, i.jsxs)(ed, {
            children: [
                (0, i.jsxs)("div", {
                    className: ea.h1,
                    children: [
                        (0, i.jsx)(G.A, {
                            game: A,
                            size: G.M.XSMALL,
                            className: ea.VZ,
                        }),
                        (0, i.jsx)("div", {
                            className: ea.F0,
                            children: (0, i.jsx)(f.Text, {
                                variant: "text-sm/semibold",
                                children: A.name,
                            }),
                        }),
                        null != m
                            ? (0, i.jsx)("div", {
                                  className: ea.T$,
                                  children: (0, i.jsx)(f.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, i.jsx)(eu, {
                                          timestamps: m,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ea.Kt,
                    children: [
                        null != _
                            ? (0, i.jsx)("img", {
                                  src: _,
                                  alt: A.name,
                                  className: ea.pV,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            className: ea.d4,
                            children: [
                                (0, i.jsx)(W.LN, {
                                    users: d,
                                    guildId: r,
                                    channelId: n.id,
                                }),
                                (0, i.jsx)("div", {
                                    className: ea.ZE,
                                    children: (0, i.jsx)(f.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: el.intl.string(el.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, b.A)({
                                                    applicationId: u,
                                                    activityChannelId: n.id,
                                                    locationObject: p.location,
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
let eO = eE;
