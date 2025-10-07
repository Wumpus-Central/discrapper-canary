n.d(t, { Z: () => W }), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(681715),
    c = n(481060),
    u = n(911969),
    d = n(20471),
    p = n(812206),
    f = n(810568),
    h = n(168524),
    g = n(970184),
    m = n(197653),
    b = n(979372),
    _ = n(676149),
    O = n(861529),
    E = n(768494),
    v = n(124347),
    y = n(929677),
    I = n(77498),
    S = n(621853),
    C = n(750312),
    T = n(919498),
    N = n(388032),
    j = n(18827);
function P(e) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function Z(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return L(t);
    switch (t.type) {
        case "HERO":
            let { body: n } = t,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(t, ["body"]);
            return (0, r.jsx)(R, x(P({}, i), { body: L(n) }));
        case "GRID":
            return (0, r.jsx)(D, { children: L(t.children) });
        case "FIELD":
            return (0, r.jsx)(k, {
                value: w(t.value),
                name: w(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(M, P({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(U, P({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(G, P({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(B, {});
    }
}
function w(e, t) {
    return (0, r.jsx)(Z, { component: e }, t);
}
function L(e) {
    return e.map((e, t) => w(e, t));
}
function R(e) {
    let { title: t, body: n, image: i, imagePlaceholder: l } = e;
    return (0, r.jsxs)("div", {
        className: j.heroSection,
        children: [
            (0, r.jsxs)("div", {
                className: j.heroBody,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-lg/medium",
                        className: j.heroTitle,
                        children: null != t ? t : (0, r.jsx)("div", { className: j.textPlaceholder }),
                    }),
                    (0, r.jsx)(b.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            A(i)
                ? (0, r.jsx)("div", {
                      className: j.heroImageContainer,
                      children: (0, r.jsx)(v.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: j.heroImage,
                      }),
                  })
                : null != l
                  ? (0, r.jsx)("div", {
                        className: j.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: l,
                            alt: "",
                            className: j.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: j.heroImagePlaceholder }),
        ],
    });
}
function D(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: j.grid,
        children: t,
    });
}
function k(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function M(e) {
    let { content: t } = e,
        n = i.useId(),
        l = (0, b._)();
    return null != t
        ? (0, r.jsx)(O.Z, {
              type: u.re.TEXT_DISPLAY,
              id: n,
              content: t,
          })
        : (0, r.jsx)("div", { className: a()(j.textPlaceholder, l.className) });
}
function U(e) {
    let { content: t, image: n, imagePosition: i } = e,
        l = (0, b._)(),
        o = A(n)
            ? (0, r.jsx)("div", {
                  className: a()(j.image, l.className),
                  children: (0, r.jsx)(v.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : (0, r.jsx)("div", { className: a()(j.imagePlaceholder, l.className) });
    return (0, r.jsxs)("div", {
        className: j.textWithImage,
        children: ["left" === i ? o : null, (0, r.jsx)(M, { content: t }), "right" === i ? o : null],
    });
}
function G(e) {
    let { size: t = "small", divider: n = !1 } = e,
        l = i.useId();
    return (0, r.jsx)(_.Z, {
        type: u.re.SEPARATOR,
        id: l,
        divider: n,
        spacing: "large" === t ? u.US.LARGE : u.US.SMALL,
    });
}
function B() {
    let e = (function () {
            let e = i.useContext(H);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = V(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(T.Z, {
              className: j.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
let H = i.createContext(null);
function V(e) {
    return (0, o.cj)([p.Z, S.Z, I.Z], () => {
        let t = p.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? I.Z.getGameByApplication(t) : null,
            config: S.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function F(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(m.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(g.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(b.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: j.container,
                    children: t,
                }),
            }),
        }),
    });
}
function z(e) {
    return (0, r.jsxs)(c.Kqy, {
        direction: "horizontal",
        gap: 24,
        padding: 16,
        fullWidth: !1,
        className: j.cta,
        children: [
            (0, r.jsxs)(c.Kqy, {
                gap: 4,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: e.heading,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: e.content,
                    }),
                ],
            }),
            (0, r.jsx)(c.Kqy, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                justify: "end",
                fullWidth: !1,
                children: e.buttons,
            }),
        ],
    });
}
let W = Object.assign(
    function (e) {
        var t, n, i;
        let { user: l, widget: o, containerClassName: u, cta: p } = e,
            { application: g, game: m, config: b } = V(o),
            _ = null == g ? void 0 : g.getIconURL(16),
            O = (0, y.O)(l.id).data,
            v = null == O ? void 0 : O.find((e) => e.application_id === o.applicationId),
            I = null == v || null == (n = v.profile) || null == (t = n.data) ? void 0 : t.primary,
            S = (0, h.Z)({
                location: "UserProfileApplicationWidget",
                applicationId: null == m ? void 0 : m.id,
                source: f.m1.UserProfile,
                sourceUserId: l.id,
                trackEntryPointImpression: !0,
            }),
            { loading: T, hasAlreadyLinked: A, canStartAuthorization: w, startAuthorization: L } = (0, d.FG)(g),
            R = null == p && !T && !A && w,
            D = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != _
                        ? (0, r.jsx)("img", {
                              className: j.appIcon,
                              src: _,
                              width: 16,
                              height: 16,
                              alt: "",
                          })
                        : (0, r.jsx)("span", { className: j.appIconPlaceholder }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children:
                            (null == g ? void 0 : g.name) != null
                                ? g.name
                                : (0, r.jsx)("div", { className: j.textPlaceholder }),
                    }),
                ],
            }),
            k =
                null == m
                    ? (0, r.jsx)("div", {
                          className: j.header,
                          children: D,
                      })
                    : (0, r.jsx)(s.u, {
                          asContainer: !0,
                          text: N.intl.string(N.t.ajHoOj),
                          children: (0, r.jsx)(c.P3F, {
                              className: a()(j.header, j.headerClickable),
                              onClick: S,
                              "aria-label": N.intl.string(N.t.ajHoOj),
                              children: D,
                          }),
                      }),
            M = [
                {
                    type: "HERO",
                    title: null == v || null == (i = v.profile) ? void 0 : i.username,
                    image:
                        (null == I ? void 0 : I.featured_played_character_image) != null
                            ? (0, E.ym)(I.featured_played_character_image)
                            : null,
                    imagePlaceholder: null == b ? void 0 : b.hero_placeholder_image,
                    body: [
                        {
                            type: "TEXT_WITH_IMAGE",
                            content:
                                (null == I ? void 0 : I.highest_rank) != null
                                    ? null == I
                                        ? void 0
                                        : I.highest_rank
                                    : void 0,
                            image:
                                (null == I ? void 0 : I.highest_rank_image) != null
                                    ? (0, E.ym)(I.highest_rank_image)
                                    : void 0,
                            imagePosition: "right",
                        },
                        {
                            type: "TEXT",
                            content:
                                (null == I ? void 0 : I.featured_played_character) != null
                                    ? "Top Hero: ".concat(null == I ? void 0 : I.featured_played_character)
                                    : void 0,
                        },
                    ],
                },
                {
                    type: "SEPARATOR",
                    divider: !1,
                },
                {
                    type: "SEPARATOR",
                    divider: !1,
                },
                {
                    type: "GRID",
                    children: [
                        {
                            type: "FIELD",
                            value: {
                                type: "TEXT_WITH_IMAGE",
                                content:
                                    (null == I ? void 0 : I.rank_name) != null
                                        ? "**".concat(null == I ? void 0 : I.rank_name, "**")
                                        : void 0,
                                image: (null == I ? void 0 : I.rank_image) != null ? (0, E.ym)(I.rank_image) : void 0,
                                imagePosition: "right",
                            },
                            name: {
                                type: "TEXT",
                                content: "-# Season High",
                            },
                        },
                        {
                            type: "FIELD",
                            value: {
                                type: "TEXT",
                                content:
                                    (null == I ? void 0 : I.playtime_hours) != null
                                        ? "**".concat(I.playtime_hours.toLocaleString(), " Hours**")
                                        : void 0,
                            },
                            name: {
                                type: "TEXT",
                                content: "-# Time Played",
                            },
                        },
                        {
                            type: "FIELD",
                            value: {
                                type: "TEXT",
                                content:
                                    (null == I ? void 0 : I.total_games) != null
                                        ? "**".concat(I.total_games.toLocaleString(), "**")
                                        : void 0,
                            },
                            name: {
                                type: "TEXT",
                                content: "-# Matches Played",
                            },
                        },
                    ],
                },
                {
                    type: "SEPARATOR",
                    divider: !1,
                },
                {
                    type: "SEPARATOR",
                    divider: !1,
                },
                {
                    type: "GRID",
                    children: [
                        {
                            type: "FIELD",
                            value: {
                                type: "TEXT",
                                content:
                                    (null == I ? void 0 : I.total_wins) != null
                                        ? "**".concat(I.total_wins.toLocaleString(), "**")
                                        : void 0,
                            },
                            name: {
                                type: "TEXT",
                                content: "-# Wins",
                            },
                        },
                        {
                            type: "FIELD",
                            value: {
                                type: "TEXT",
                                content:
                                    (null == I ? void 0 : I.total_kills) != null
                                        ? "**".concat(I.total_kills.toLocaleString(), "**")
                                        : void 0,
                            },
                            name: {
                                type: "TEXT",
                                content: "-# KOs",
                            },
                        },
                        {
                            type: "FIELD",
                            value: {
                                type: "TEXT",
                                content:
                                    (null == I ? void 0 : I.total_assists) != null
                                        ? "**".concat(I.total_assists.toLocaleString(), "**")
                                        : void 0,
                            },
                            name: {
                                type: "TEXT",
                                content: "-# Assists",
                            },
                        },
                    ],
                },
            ];
        return (0, r.jsxs)(
            C.Z,
            x(P({}, e), {
                userId: l.id,
                widget: o,
                className: a()(u, j.widgetContainer),
                headerTitle: k,
                dragHandleAdditionalMenuItems:
                    null != m
                        ? (0, r.jsx)(c.sNh, {
                              id: "view-game-profile",
                              label: "View Game Profile",
                              icon: c.iWm,
                              action: S,
                          })
                        : null,
                children: [
                    (0, r.jsx)(H.Provider, {
                        value: e,
                        children: (0, r.jsx)(F, {
                            widget: o,
                            children: (0, r.jsx)(Z, { component: M }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: j.footer,
                        children: [
                            null != v || R
                                ? null
                                : (0, r.jsxs)("div", {
                                      className: j.stillSyncing,
                                      children: [
                                          (0, r.jsx)(c.wGF, { size: "xxs" }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-secondary",
                                              children: N.intl.string(N.t.z5K4Ul),
                                          }),
                                      ],
                                  }),
                            R
                                ? (0, r.jsx)(z, {
                                      heading: N.intl.string(N.t.UDPRLC),
                                      content: N.intl.string(N.t["OW/2am"]),
                                      buttons: (0, r.jsx)(c.zxk, {
                                          text: N.intl.string(N.t.S0W8Z2),
                                          onClick: L,
                                      }),
                                  })
                                : p,
                        ],
                    }),
                ],
            }),
        );
    },
    { Cta: z },
);
