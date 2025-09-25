n.d(t, { Z: () => B }), n(415506);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    c = n(481060),
    s = n(911969),
    u = n(812206),
    d = n(970184),
    f = n(197653),
    g = n(979372),
    p = n(676149),
    b = n(861529),
    m = n(768494),
    O = n(124347),
    y = n(929677),
    j = n(77498),
    v = n(750312),
    h = n(919498),
    x = n(895652);
function _(e) {
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
function w(e) {
    return null != e && e.loadingState === s.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function I(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return S(t);
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
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(t, ["body"]);
            return (0, r.jsx)(T, P(_({}, i), { body: S(n) }));
        case "GRID":
            return (0, r.jsx)(D, { children: S(t.children) });
        case "FIELD":
            return (0, r.jsx)(N, {
                value: E(t.value),
                name: E(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(A, _({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(k, _({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(C, _({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(R, {});
    }
}
function E(e, t) {
    return (0, r.jsx)(I, { component: e }, t);
}
function S(e) {
    return e.map((e, t) => E(e, t));
}
function T(e) {
    let { title: t, body: n, image: i } = e;
    return (0, r.jsxs)("div", {
        className: x.heroSection,
        style: { "--custom-filter-opacity": "opacity(0.5)" },
        children: [
            (0, r.jsxs)("div", {
                className: x.heroBody,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-lg/medium",
                        children: null != t ? t : (0, r.jsx)("div", { className: x.textPlaceholder }),
                    }),
                    (0, r.jsx)(g.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            w(i)
                ? (0, r.jsx)("div", {
                      className: x.heroImageContainer,
                      children: (0, r.jsx)(O.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: x.heroImage,
                      }),
                  })
                : (0, r.jsx)("div", { className: x.heroImagePlaceholder }),
        ],
    });
}
function D(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: x.grid,
        children: t,
    });
}
function N(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function A(e) {
    let { content: t } = e,
        n = i.useId(),
        o = (0, g._)();
    return null != t
        ? (0, r.jsx)(b.Z, {
              type: s.re.TEXT_DISPLAY,
              id: n,
              content: t,
          })
        : (0, r.jsx)("div", { className: a()(x.textPlaceholder, o.className) });
}
function k(e) {
    let { content: t, image: n, imagePosition: i } = e,
        o = (0, g._)(),
        l = w(n)
            ? (0, r.jsx)("div", {
                  className: a()(x.image, o.className),
                  children: (0, r.jsx)(O.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : (0, r.jsx)("div", { className: a()(x.imagePlaceholder, o.className) });
    return (0, r.jsxs)("div", {
        className: x.textWithImage,
        children: ["left" === i ? l : null, (0, r.jsx)(A, { content: t }), "right" === i ? l : null],
    });
}
function C(e) {
    let { size: t = "small", divider: n = !1 } = e,
        o = i.useId();
    return (0, r.jsx)(p.Z, {
        type: s.re.SEPARATOR,
        id: o,
        divider: n,
        spacing: "large" === t ? s.US.LARGE : s.US.SMALL,
    });
}
function R() {
    let e = (function () {
            let e = i.useContext(Z);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = L(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(h.Z, {
              className: x.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
let Z = i.createContext(null);
function L(e) {
    let t = (0, l.e7)([u.Z], () => u.Z.getApplication(e.applicationId)),
        n = (0, l.e7)([j.Z], () => (null != t ? j.Z.getGameByApplication(t) : null));
    return {
        application: t,
        game: n,
    };
}
function G(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(f.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(d.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(g.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: x.container,
                    children: t,
                }),
            }),
        }),
    });
}
function B(e) {
    var t, n, i;
    let { user: o, widget: l, containerClassName: s } = e,
        { application: u } = L(l),
        d = null == u ? void 0 : u.getIconURL(16),
        f = (0, y.O)(o.id).data,
        g = null == f ? void 0 : f.find((e) => e.application_id === l.applicationId),
        p = null == g || null == (n = g.profile) || null == (t = n.data) ? void 0 : t.primary,
        b = (0, r.jsxs)("div", {
            className: x.header,
            children: [
                null != d
                    ? (0, r.jsx)("img", {
                          className: x.appIcon,
                          src: d,
                          width: 16,
                          height: 16,
                          alt: "",
                      })
                    : (0, r.jsx)("span", { className: x.appIconPlaceholder }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children:
                        (null == u ? void 0 : u.name) != null
                            ? u.name
                            : (0, r.jsx)("div", { className: x.textPlaceholder }),
                }),
            ],
        }),
        O = [
            {
                type: "HERO",
                title: null == g || null == (i = g.profile) ? void 0 : i.username,
                image:
                    (null == p ? void 0 : p.featured_played_character_image) != null
                        ? (0, m.ym)(p.featured_played_character_image)
                        : void 0,
                body: [
                    {
                        type: "TEXT_WITH_IMAGE",
                        content:
                            (null == p ? void 0 : p.highest_rank) != null
                                ? null == p
                                    ? void 0
                                    : p.highest_rank
                                : void 0,
                        image:
                            (null == p ? void 0 : p.highest_rank_image) != null
                                ? (0, m.ym)(p.highest_rank_image)
                                : void 0,
                        imagePosition: "right",
                    },
                    {
                        type: "TEXT",
                        content:
                            (null == p ? void 0 : p.featured_played_character) != null
                                ? "Top Hero: ".concat(null == p ? void 0 : p.featured_played_character)
                                : void 0,
                    },
                    { type: "SOCIAL_PROOF" },
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
                                (null == p ? void 0 : p.rank_name) != null
                                    ? "**".concat(null == p ? void 0 : p.rank_name, "**")
                                    : void 0,
                            image: (null == p ? void 0 : p.rank_image) != null ? (0, m.ym)(p.rank_image) : void 0,
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
                                (null == p ? void 0 : p.playtime_hours) != null
                                    ? "**".concat(p.playtime_hours.toLocaleString(), " Hours**")
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
                                (null == p ? void 0 : p.total_games) != null
                                    ? "**".concat(p.total_games.toLocaleString(), "**")
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
                                (null == p ? void 0 : p.total_wins) != null
                                    ? "**".concat(p.total_wins.toLocaleString(), "**")
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
                                (null == p ? void 0 : p.total_kills) != null
                                    ? "**".concat(p.total_kills.toLocaleString(), "**")
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
                                (null == p ? void 0 : p.total_assists) != null
                                    ? "**".concat(p.total_assists.toLocaleString(), "**")
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
    return (0, r.jsx)(
        v.Z,
        P(_({}, e), {
            userId: o.id,
            widget: l,
            className: a()(s, x.widgetContainer),
            headerTitle: b,
            children: (0, r.jsx)(Z.Provider, {
                value: e,
                children: (0, r.jsx)(G, {
                    widget: l,
                    children: (0, r.jsx)(I, { component: O }),
                }),
            }),
        }),
    );
}
