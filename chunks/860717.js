n.d(t, { Z: () => M }), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(911969),
    d = n(812206),
    f = n(810568),
    g = n(970184),
    p = n(197653),
    b = n(979372),
    m = n(676149),
    O = n(861529),
    y = n(768494),
    j = n(124347),
    h = n(929677),
    v = n(77498),
    x = n(750312),
    _ = n(919498),
    P = n(388032),
    w = n(18827);
function I(e) {
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
function E(e, t) {
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
function S(e) {
    return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function T(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return N(t);
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
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++)
                            (n = a[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(t, ["body"]);
            return (0, r.jsx)(A, E(I({}, i), { body: N(n) }));
        case "GRID":
            return (0, r.jsx)(k, { children: N(t.children) });
        case "FIELD":
            return (0, r.jsx)(C, {
                value: D(t.value),
                name: D(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(R, I({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(Z, I({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(L, I({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(G, {});
    }
}
function D(e, t) {
    return (0, r.jsx)(T, { component: e }, t);
}
function N(e) {
    return e.map((e, t) => D(e, t));
}
function A(e) {
    let { title: t, body: n, image: i } = e;
    return (0, r.jsxs)("div", {
        className: w.heroSection,
        style: { "--custom-filter-opacity": "opacity(0.5)" },
        children: [
            (0, r.jsxs)("div", {
                className: w.heroBody,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-lg/medium",
                        children: null != t ? t : (0, r.jsx)("div", { className: w.textPlaceholder }),
                    }),
                    (0, r.jsx)(b.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            S(i)
                ? (0, r.jsx)("div", {
                      className: w.heroImageContainer,
                      children: (0, r.jsx)(j.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: w.heroImage,
                      }),
                  })
                : (0, r.jsx)("div", { className: w.heroImagePlaceholder }),
        ],
    });
}
function k(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: w.grid,
        children: t,
    });
}
function C(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function R(e) {
    let { content: t } = e,
        n = i.useId(),
        a = (0, b._)();
    return null != t
        ? (0, r.jsx)(O.Z, {
              type: u.re.TEXT_DISPLAY,
              id: n,
              content: t,
          })
        : (0, r.jsx)("div", { className: o()(w.textPlaceholder, a.className) });
}
function Z(e) {
    let { content: t, image: n, imagePosition: i } = e,
        a = (0, b._)(),
        l = S(n)
            ? (0, r.jsx)("div", {
                  className: o()(w.image, a.className),
                  children: (0, r.jsx)(j.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : (0, r.jsx)("div", { className: o()(w.imagePlaceholder, a.className) });
    return (0, r.jsxs)("div", {
        className: w.textWithImage,
        children: ["left" === i ? l : null, (0, r.jsx)(R, { content: t }), "right" === i ? l : null],
    });
}
function L(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = i.useId();
    return (0, r.jsx)(m.Z, {
        type: u.re.SEPARATOR,
        id: a,
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
        { game: t } = F(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(_.Z, {
              className: w.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
let B = i.createContext(null);
function F(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.getApplication(e.applicationId)),
        n = (0, l.e7)([v.Z], () => (null != t ? v.Z.getGameByApplication(t) : null));
    return {
        application: t,
        game: n,
    };
}
function H(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(p.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(g.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(b.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: w.container,
                    children: t,
                }),
            }),
        }),
    });
}
function M(e) {
    var t, i, a;
    let { user: l, widget: u, containerClassName: d } = e,
        { application: g, game: p } = F(u),
        b = null == g ? void 0 : g.getIconURL(16),
        m = (0, h.O)(l.id).data,
        O = null == m ? void 0 : m.find((e) => e.application_id === u.applicationId),
        j = null == O || null == (i = O.profile) || null == (t = i.data) ? void 0 : t.primary;
    function v() {
        null != p &&
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("89311"), n.e("83123")]).then(n.bind(n, 644941));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        I(
                            {
                                applicationId: p.id,
                                source: f.m1.ApplicationWidget,
                            },
                            t,
                        ),
                    );
            });
    }
    let _ = (0, r.jsxs)(r.Fragment, {
            children: [
                null != b
                    ? (0, r.jsx)("img", {
                          className: w.appIcon,
                          src: b,
                          width: 16,
                          height: 16,
                          alt: "",
                      })
                    : (0, r.jsx)("span", { className: w.appIconPlaceholder }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    children:
                        (null == g ? void 0 : g.name) != null
                            ? g.name
                            : (0, r.jsx)("div", { className: w.textPlaceholder }),
                }),
            ],
        }),
        S =
            null == p
                ? (0, r.jsx)("div", {
                      className: w.header,
                      children: _,
                  })
                : (0, r.jsx)(c.u, {
                      asContainer: !0,
                      text: P.intl.string(P.t.ajHoOj),
                      children: (0, r.jsx)(s.P3F, {
                          className: o()(w.header, w.headerClickable),
                          onClick: v,
                          "aria-label": P.intl.string(P.t.ajHoOj),
                          children: _,
                      }),
                  }),
        D = [
            {
                type: "HERO",
                title: null == O || null == (a = O.profile) ? void 0 : a.username,
                image:
                    (null == j ? void 0 : j.featured_played_character_image) != null
                        ? (0, y.ym)(j.featured_played_character_image)
                        : void 0,
                body: [
                    {
                        type: "TEXT_WITH_IMAGE",
                        content:
                            (null == j ? void 0 : j.highest_rank) != null
                                ? null == j
                                    ? void 0
                                    : j.highest_rank
                                : void 0,
                        image:
                            (null == j ? void 0 : j.highest_rank_image) != null
                                ? (0, y.ym)(j.highest_rank_image)
                                : void 0,
                        imagePosition: "right",
                    },
                    {
                        type: "TEXT",
                        content:
                            (null == j ? void 0 : j.featured_played_character) != null
                                ? "Top Hero: ".concat(null == j ? void 0 : j.featured_played_character)
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
                                (null == j ? void 0 : j.rank_name) != null
                                    ? "**".concat(null == j ? void 0 : j.rank_name, "**")
                                    : void 0,
                            image: (null == j ? void 0 : j.rank_image) != null ? (0, y.ym)(j.rank_image) : void 0,
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
                                (null == j ? void 0 : j.playtime_hours) != null
                                    ? "**".concat(j.playtime_hours.toLocaleString(), " Hours**")
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
                                (null == j ? void 0 : j.total_games) != null
                                    ? "**".concat(j.total_games.toLocaleString(), "**")
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
                                (null == j ? void 0 : j.total_wins) != null
                                    ? "**".concat(j.total_wins.toLocaleString(), "**")
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
                                (null == j ? void 0 : j.total_kills) != null
                                    ? "**".concat(j.total_kills.toLocaleString(), "**")
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
                                (null == j ? void 0 : j.total_assists) != null
                                    ? "**".concat(j.total_assists.toLocaleString(), "**")
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
        x.Z,
        E(I({}, e), {
            userId: l.id,
            widget: u,
            className: o()(d, w.widgetContainer),
            headerTitle: S,
            dragHandleAdditionalMenuItems:
                null != p
                    ? (0, r.jsx)(s.sNh, {
                          id: "view-game-profile",
                          label: "View Game Profile",
                          icon: s.iWm,
                          action: v,
                      })
                    : null,
            children: (0, r.jsx)(B.Provider, {
                value: e,
                children: (0, r.jsx)(H, {
                    widget: u,
                    children: (0, r.jsx)(T, { component: D }),
                }),
            }),
        }),
    );
}
