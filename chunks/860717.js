n.d(t, { Z: () => U }), n(415506);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(911969),
    d = n(812206),
    g = n(810568),
    f = n(970184),
    p = n(197653),
    b = n(979372),
    m = n(676149),
    O = n(861529),
    y = n(768494),
    j = n(124347),
    h = n(929677),
    v = n(77498),
    x = n(621853),
    _ = n(750312),
    P = n(919498),
    w = n(388032),
    I = n(895652);
function E(e) {
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
function S(e, t) {
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
function T(e) {
    return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function D(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return A(t);
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
            return (0, r.jsx)(C, S(E({}, i), { body: A(n) }));
        case "GRID":
            return (0, r.jsx)(k, { children: A(t.children) });
        case "FIELD":
            return (0, r.jsx)(R, {
                value: N(t.value),
                name: N(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(Z, E({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(L, E({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(G, E({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(B, {});
    }
}
function N(e, t) {
    return (0, r.jsx)(D, { component: e }, t);
}
function A(e) {
    return e.map((e, t) => N(e, t));
}
function C(e) {
    let { title: t, body: n, image: i, imagePlaceholder: o } = e;
    return (0, r.jsxs)("div", {
        className: I.heroSection,
        children: [
            (0, r.jsxs)("div", {
                className: I.heroBody,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-lg/medium",
                        className: I.heroTitle,
                        children: null != t ? t : (0, r.jsx)("div", { className: I.textPlaceholder }),
                    }),
                    (0, r.jsx)(b.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            T(i)
                ? (0, r.jsx)("div", {
                      className: I.heroImageContainer,
                      children: (0, r.jsx)(j.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: I.heroImage,
                      }),
                  })
                : null != o
                  ? (0, r.jsx)("div", {
                        className: I.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: o,
                            alt: "",
                            className: I.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: I.heroImagePlaceholder }),
        ],
    });
}
function k(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: I.grid,
        children: t,
    });
}
function R(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function Z(e) {
    let { content: t } = e,
        n = i.useId(),
        o = (0, b._)();
    return null != t
        ? (0, r.jsx)(O.Z, {
              type: u.re.TEXT_DISPLAY,
              id: n,
              content: t,
          })
        : (0, r.jsx)("div", { className: a()(I.textPlaceholder, o.className) });
}
function L(e) {
    let { content: t, image: n, imagePosition: i } = e,
        o = (0, b._)(),
        l = T(n)
            ? (0, r.jsx)("div", {
                  className: a()(I.image, o.className),
                  children: (0, r.jsx)(j.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : (0, r.jsx)("div", { className: a()(I.imagePlaceholder, o.className) });
    return (0, r.jsxs)("div", {
        className: I.textWithImage,
        children: ["left" === i ? l : null, (0, r.jsx)(Z, { content: t }), "right" === i ? l : null],
    });
}
function G(e) {
    let { size: t = "small", divider: n = !1 } = e,
        o = i.useId();
    return (0, r.jsx)(m.Z, {
        type: u.re.SEPARATOR,
        id: o,
        divider: n,
        spacing: "large" === t ? u.US.LARGE : u.US.SMALL,
    });
}
function B() {
    let e = (function () {
            let e = i.useContext(F);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = H(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(P.Z, {
              className: I.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
let F = i.createContext(null);
function H(e) {
    return (0, l.cj)([d.Z, x.Z, v.Z], () => {
        let t = d.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? v.Z.getGameByApplication(t) : null,
            config: x.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function M(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(p.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(f.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(b.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: I.container,
                    children: t,
                }),
            }),
        }),
    });
}
function U(e) {
    var t, i, o;
    let { user: l, widget: u, containerClassName: d } = e,
        { application: f, game: p, config: b } = H(u),
        m = null == f ? void 0 : f.getIconURL(16),
        O = (0, h.O)(l.id).data,
        j = null == O ? void 0 : O.find((e) => e.application_id === u.applicationId),
        v = null == j || null == (i = j.profile) || null == (t = i.data) ? void 0 : t.primary;
    function x() {
        null != p &&
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("89311"), n.e("20074")]).then(n.bind(n, 644941));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        E(
                            {
                                applicationId: p.id,
                                source: g.m1.ApplicationWidget,
                            },
                            t,
                        ),
                    );
            });
    }
    let P = (0, r.jsxs)(r.Fragment, {
            children: [
                null != m
                    ? (0, r.jsx)("img", {
                          className: I.appIcon,
                          src: m,
                          width: 16,
                          height: 16,
                          alt: "",
                      })
                    : (0, r.jsx)("span", { className: I.appIconPlaceholder }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    children:
                        (null == f ? void 0 : f.name) != null
                            ? f.name
                            : (0, r.jsx)("div", { className: I.textPlaceholder }),
                }),
            ],
        }),
        T =
            null == p
                ? (0, r.jsx)("div", {
                      className: I.header,
                      children: P,
                  })
                : (0, r.jsx)(c.u, {
                      asContainer: !0,
                      text: w.intl.string(w.t.ajHoOj),
                      children: (0, r.jsx)(s.P3F, {
                          className: a()(I.header, I.headerClickable),
                          onClick: x,
                          "aria-label": w.intl.string(w.t.ajHoOj),
                          children: P,
                      }),
                  }),
        N = [
            {
                type: "HERO",
                title: null == j || null == (o = j.profile) ? void 0 : o.username,
                image:
                    (null == v ? void 0 : v.featured_played_character_image) != null
                        ? (0, y.ym)(v.featured_played_character_image)
                        : null,
                imagePlaceholder: null == b ? void 0 : b.hero_placeholder_image,
                body: [
                    {
                        type: "TEXT_WITH_IMAGE",
                        content:
                            (null == v ? void 0 : v.highest_rank) != null
                                ? null == v
                                    ? void 0
                                    : v.highest_rank
                                : void 0,
                        image:
                            (null == v ? void 0 : v.highest_rank_image) != null
                                ? (0, y.ym)(v.highest_rank_image)
                                : void 0,
                        imagePosition: "right",
                    },
                    {
                        type: "TEXT",
                        content:
                            (null == v ? void 0 : v.featured_played_character) != null
                                ? "Top Hero: ".concat(null == v ? void 0 : v.featured_played_character)
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
                                (null == v ? void 0 : v.rank_name) != null
                                    ? "**".concat(null == v ? void 0 : v.rank_name, "**")
                                    : void 0,
                            image: (null == v ? void 0 : v.rank_image) != null ? (0, y.ym)(v.rank_image) : void 0,
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
                                (null == v ? void 0 : v.playtime_hours) != null
                                    ? "**".concat(v.playtime_hours.toLocaleString(), " Hours**")
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
                                (null == v ? void 0 : v.total_games) != null
                                    ? "**".concat(v.total_games.toLocaleString(), "**")
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
                                (null == v ? void 0 : v.total_wins) != null
                                    ? "**".concat(v.total_wins.toLocaleString(), "**")
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
                                (null == v ? void 0 : v.total_kills) != null
                                    ? "**".concat(v.total_kills.toLocaleString(), "**")
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
                                (null == v ? void 0 : v.total_assists) != null
                                    ? "**".concat(v.total_assists.toLocaleString(), "**")
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
        _.Z,
        S(E({}, e), {
            userId: l.id,
            widget: u,
            className: a()(d, I.widgetContainer),
            headerTitle: T,
            dragHandleAdditionalMenuItems:
                null != p
                    ? (0, r.jsx)(s.sNh, {
                          id: "view-game-profile",
                          label: "View Game Profile",
                          icon: s.iWm,
                          action: x,
                      })
                    : null,
            children: [
                (0, r.jsx)(F.Provider, {
                    value: e,
                    children: (0, r.jsx)(M, {
                        widget: u,
                        children: (0, r.jsx)(D, { component: N }),
                    }),
                }),
                null == j
                    ? (0, r.jsxs)("div", {
                          className: I.stillSyncing,
                          children: [
                              (0, r.jsx)(s.wGF, { size: "xxs" }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-secondary",
                                  children: w.intl.string(w.t.z5K4Ul),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    );
}
