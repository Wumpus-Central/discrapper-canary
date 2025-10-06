n.d(t, { Z: () => F }), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(681715),
    c = n(481060),
    u = n(911969),
    d = n(812206),
    p = n(810568),
    f = n(168524),
    h = n(970184),
    g = n(197653),
    m = n(979372),
    b = n(676149),
    _ = n(861529),
    O = n(768494),
    E = n(124347),
    v = n(929677),
    y = n(77498),
    I = n(621853),
    S = n(750312),
    C = n(919498),
    T = n(388032),
    N = n(895652);
function j(e) {
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
function P(e, t) {
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
function x(e) {
    return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function A(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return w(t);
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
            return (0, r.jsx)(L, P(j({}, i), { body: w(n) }));
        case "GRID":
            return (0, r.jsx)(R, { children: w(t.children) });
        case "FIELD":
            return (0, r.jsx)(D, {
                value: Z(t.value),
                name: Z(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(k, j({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(M, j({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(U, j({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(G, {});
    }
}
function Z(e, t) {
    return (0, r.jsx)(A, { component: e }, t);
}
function w(e) {
    return e.map((e, t) => Z(e, t));
}
function L(e) {
    let { title: t, body: n, image: i, imagePlaceholder: l } = e;
    return (0, r.jsxs)("div", {
        className: N.heroSection,
        children: [
            (0, r.jsxs)("div", {
                className: N.heroBody,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-lg/medium",
                        className: N.heroTitle,
                        children: null != t ? t : (0, r.jsx)("div", { className: N.textPlaceholder }),
                    }),
                    (0, r.jsx)(m.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            x(i)
                ? (0, r.jsx)("div", {
                      className: N.heroImageContainer,
                      children: (0, r.jsx)(E.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: N.heroImage,
                      }),
                  })
                : null != l
                  ? (0, r.jsx)("div", {
                        className: N.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: l,
                            alt: "",
                            className: N.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: N.heroImagePlaceholder }),
        ],
    });
}
function R(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: N.grid,
        children: t,
    });
}
function D(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function k(e) {
    let { content: t } = e,
        n = i.useId(),
        l = (0, m._)();
    return null != t
        ? (0, r.jsx)(_.Z, {
              type: u.re.TEXT_DISPLAY,
              id: n,
              content: t,
          })
        : (0, r.jsx)("div", { className: a()(N.textPlaceholder, l.className) });
}
function M(e) {
    let { content: t, image: n, imagePosition: i } = e,
        l = (0, m._)(),
        o = x(n)
            ? (0, r.jsx)("div", {
                  className: a()(N.image, l.className),
                  children: (0, r.jsx)(E.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : (0, r.jsx)("div", { className: a()(N.imagePlaceholder, l.className) });
    return (0, r.jsxs)("div", {
        className: N.textWithImage,
        children: ["left" === i ? o : null, (0, r.jsx)(k, { content: t }), "right" === i ? o : null],
    });
}
function U(e) {
    let { size: t = "small", divider: n = !1 } = e,
        l = i.useId();
    return (0, r.jsx)(b.Z, {
        type: u.re.SEPARATOR,
        id: l,
        divider: n,
        spacing: "large" === t ? u.US.LARGE : u.US.SMALL,
    });
}
function G() {
    let e = (function () {
            let e = i.useContext(B);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = H(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(C.Z, {
              className: N.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
let B = i.createContext(null);
function H(e) {
    return (0, o.cj)([d.Z, I.Z, y.Z], () => {
        let t = d.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? y.Z.getGameByApplication(t) : null,
            config: I.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function V(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(g.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(h.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(m.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: N.container,
                    children: t,
                }),
            }),
        }),
    });
}
function F(e) {
    var t, n, i;
    let { user: l, widget: o, containerClassName: u, cta: d } = e,
        { application: h, game: g, config: m } = H(o),
        b = null == h ? void 0 : h.getIconURL(16),
        _ = (0, v.O)(l.id).data,
        E = null == _ ? void 0 : _.find((e) => e.application_id === o.applicationId),
        y = null == E || null == (n = E.profile) || null == (t = n.data) ? void 0 : t.primary,
        I = (0, f.Z)({
            location: "UserProfileApplicationWidget",
            applicationId: null == g ? void 0 : g.id,
            source: p.m1.UserProfile,
            sourceUserId: l.id,
            trackEntryPointImpression: !0,
        }),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                null != b
                    ? (0, r.jsx)("img", {
                          className: N.appIcon,
                          src: b,
                          width: 16,
                          height: 16,
                          alt: "",
                      })
                    : (0, r.jsx)("span", { className: N.appIconPlaceholder }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children:
                        (null == h ? void 0 : h.name) != null
                            ? h.name
                            : (0, r.jsx)("div", { className: N.textPlaceholder }),
                }),
            ],
        }),
        x =
            null == g
                ? (0, r.jsx)("div", {
                      className: N.header,
                      children: C,
                  })
                : (0, r.jsx)(s.u, {
                      asContainer: !0,
                      text: T.intl.string(T.t.ajHoOj),
                      children: (0, r.jsx)(c.P3F, {
                          className: a()(N.header, N.headerClickable),
                          onClick: I,
                          "aria-label": T.intl.string(T.t.ajHoOj),
                          children: C,
                      }),
                  }),
        Z = [
            {
                type: "HERO",
                title: null == E || null == (i = E.profile) ? void 0 : i.username,
                image:
                    (null == y ? void 0 : y.featured_played_character_image) != null
                        ? (0, O.ym)(y.featured_played_character_image)
                        : null,
                imagePlaceholder: null == m ? void 0 : m.hero_placeholder_image,
                body: [
                    {
                        type: "TEXT_WITH_IMAGE",
                        content:
                            (null == y ? void 0 : y.highest_rank) != null
                                ? null == y
                                    ? void 0
                                    : y.highest_rank
                                : void 0,
                        image:
                            (null == y ? void 0 : y.highest_rank_image) != null
                                ? (0, O.ym)(y.highest_rank_image)
                                : void 0,
                        imagePosition: "right",
                    },
                    {
                        type: "TEXT",
                        content:
                            (null == y ? void 0 : y.featured_played_character) != null
                                ? "Top Hero: ".concat(null == y ? void 0 : y.featured_played_character)
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
                                (null == y ? void 0 : y.rank_name) != null
                                    ? "**".concat(null == y ? void 0 : y.rank_name, "**")
                                    : void 0,
                            image: (null == y ? void 0 : y.rank_image) != null ? (0, O.ym)(y.rank_image) : void 0,
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
                                (null == y ? void 0 : y.playtime_hours) != null
                                    ? "**".concat(y.playtime_hours.toLocaleString(), " Hours**")
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
                                (null == y ? void 0 : y.total_games) != null
                                    ? "**".concat(y.total_games.toLocaleString(), "**")
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
                                (null == y ? void 0 : y.total_wins) != null
                                    ? "**".concat(y.total_wins.toLocaleString(), "**")
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
                                (null == y ? void 0 : y.total_kills) != null
                                    ? "**".concat(y.total_kills.toLocaleString(), "**")
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
                                (null == y ? void 0 : y.total_assists) != null
                                    ? "**".concat(y.total_assists.toLocaleString(), "**")
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
        S.Z,
        P(j({}, e), {
            userId: l.id,
            widget: o,
            className: a()(u, N.widgetContainer),
            headerTitle: x,
            dragHandleAdditionalMenuItems:
                null != g
                    ? (0, r.jsx)(c.sNh, {
                          id: "view-game-profile",
                          label: "View Game Profile",
                          icon: c.iWm,
                          action: I,
                      })
                    : null,
            children: [
                (0, r.jsx)(B.Provider, {
                    value: e,
                    children: (0, r.jsx)(V, {
                        widget: o,
                        children: (0, r.jsx)(A, { component: Z }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: N.footer,
                    children: [
                        null == E
                            ? (0, r.jsxs)("div", {
                                  className: N.stillSyncing,
                                  children: [
                                      (0, r.jsx)(c.wGF, { size: "xxs" }),
                                      (0, r.jsx)(c.Text, {
                                          variant: "text-sm/medium",
                                          color: "text-secondary",
                                          children: T.intl.string(T.t.z5K4Ul),
                                      }),
                                  ],
                              })
                            : null,
                        d,
                    ],
                }),
            ],
        }),
    );
}
