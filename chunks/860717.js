n.d(t, { Z: () => X }), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(911969),
    d = n(812206),
    g = n(810568),
    f = n(168524),
    p = n(970184),
    b = n(197653),
    m = n(979372),
    O = n(676149),
    y = n(861529),
    j = n(768494),
    h = n(124347),
    v = n(929677),
    x = n(77498),
    _ = n(621853),
    P = n(750312),
    w = n(919498),
    I = n(388032),
    E = n(895652);
function S(e) {
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
function T(e, t) {
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
function D(e) {
    return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function N(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return C(t);
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
            return (0, r.jsx)(k, T(S({}, i), { body: C(n) }));
        case "GRID":
            return (0, r.jsx)(R, { children: C(t.children) });
        case "FIELD":
            return (0, r.jsx)(Z, {
                value: A(t.value),
                name: A(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(L, S({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(G, S({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(B, S({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(F, {});
    }
}
function A(e, t) {
    return (0, r.jsx)(N, { component: e }, t);
}
function C(e) {
    return e.map((e, t) => A(e, t));
}
function k(e) {
    let { title: t, body: n, image: i, imagePlaceholder: a } = e;
    return (0, r.jsxs)("div", {
        className: E.heroSection,
        children: [
            (0, r.jsxs)("div", {
                className: E.heroBody,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-lg/medium",
                        className: E.heroTitle,
                        children: null != t ? t : (0, r.jsx)("div", { className: E.textPlaceholder }),
                    }),
                    (0, r.jsx)(m.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            D(i)
                ? (0, r.jsx)("div", {
                      className: E.heroImageContainer,
                      children: (0, r.jsx)(h.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: E.heroImage,
                      }),
                  })
                : null != a
                  ? (0, r.jsx)("div", {
                        className: E.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: a,
                            alt: "",
                            className: E.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: E.heroImagePlaceholder }),
        ],
    });
}
function R(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: E.grid,
        children: t,
    });
}
function Z(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function L(e) {
    let { content: t } = e,
        n = i.useId(),
        a = (0, m._)();
    return null != t
        ? (0, r.jsx)(y.Z, {
              type: u.re.TEXT_DISPLAY,
              id: n,
              content: t,
          })
        : (0, r.jsx)("div", { className: o()(E.textPlaceholder, a.className) });
}
function G(e) {
    let { content: t, image: n, imagePosition: i } = e,
        a = (0, m._)(),
        l = D(n)
            ? (0, r.jsx)("div", {
                  className: o()(E.image, a.className),
                  children: (0, r.jsx)(h.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : (0, r.jsx)("div", { className: o()(E.imagePlaceholder, a.className) });
    return (0, r.jsxs)("div", {
        className: E.textWithImage,
        children: ["left" === i ? l : null, (0, r.jsx)(L, { content: t }), "right" === i ? l : null],
    });
}
function B(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = i.useId();
    return (0, r.jsx)(O.Z, {
        type: u.re.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? u.US.LARGE : u.US.SMALL,
    });
}
function F() {
    let e = (function () {
            let e = i.useContext(H);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = M(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(w.Z, {
              className: E.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
let H = i.createContext(null);
function M(e) {
    return (0, l.cj)([d.Z, _.Z, x.Z], () => {
        let t = d.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? x.Z.getGameByApplication(t) : null,
            config: _.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function U(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(b.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(p.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(m.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: E.container,
                    children: t,
                }),
            }),
        }),
    });
}
function X(e) {
    var t, n, i;
    let { user: a, widget: l, containerClassName: u } = e,
        { application: d, game: p, config: b } = M(l),
        m = null == d ? void 0 : d.getIconURL(16),
        O = (0, v.O)(a.id).data,
        y = null == O ? void 0 : O.find((e) => e.application_id === l.applicationId),
        h = null == y || null == (n = y.profile) || null == (t = n.data) ? void 0 : t.primary,
        x = (0, f.Z)({
            location: "UserProfileApplicationWidget",
            applicationId: null == p ? void 0 : p.id,
            source: g.m1.UserProfile,
            sourceUserId: a.id,
            trackEntryPointImpression: !0,
        }),
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                null != m
                    ? (0, r.jsx)("img", {
                          className: E.appIcon,
                          src: m,
                          width: 16,
                          height: 16,
                          alt: "",
                      })
                    : (0, r.jsx)("span", { className: E.appIconPlaceholder }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    children:
                        (null == d ? void 0 : d.name) != null
                            ? d.name
                            : (0, r.jsx)("div", { className: E.textPlaceholder }),
                }),
            ],
        }),
        w =
            null == p
                ? (0, r.jsx)("div", {
                      className: E.header,
                      children: _,
                  })
                : (0, r.jsx)(c.u, {
                      asContainer: !0,
                      text: I.intl.string(I.t.ajHoOj),
                      children: (0, r.jsx)(s.P3F, {
                          className: o()(E.header, E.headerClickable),
                          onClick: x,
                          "aria-label": I.intl.string(I.t.ajHoOj),
                          children: _,
                      }),
                  }),
        D = [
            {
                type: "HERO",
                title: null == y || null == (i = y.profile) ? void 0 : i.username,
                image:
                    (null == h ? void 0 : h.featured_played_character_image) != null
                        ? (0, j.ym)(h.featured_played_character_image)
                        : null,
                imagePlaceholder: null == b ? void 0 : b.hero_placeholder_image,
                body: [
                    {
                        type: "TEXT_WITH_IMAGE",
                        content:
                            (null == h ? void 0 : h.highest_rank) != null
                                ? null == h
                                    ? void 0
                                    : h.highest_rank
                                : void 0,
                        image:
                            (null == h ? void 0 : h.highest_rank_image) != null
                                ? (0, j.ym)(h.highest_rank_image)
                                : void 0,
                        imagePosition: "right",
                    },
                    {
                        type: "TEXT",
                        content:
                            (null == h ? void 0 : h.featured_played_character) != null
                                ? "Top Hero: ".concat(null == h ? void 0 : h.featured_played_character)
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
                                (null == h ? void 0 : h.rank_name) != null
                                    ? "**".concat(null == h ? void 0 : h.rank_name, "**")
                                    : void 0,
                            image: (null == h ? void 0 : h.rank_image) != null ? (0, j.ym)(h.rank_image) : void 0,
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
                                (null == h ? void 0 : h.playtime_hours) != null
                                    ? "**".concat(h.playtime_hours.toLocaleString(), " Hours**")
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
                                (null == h ? void 0 : h.total_games) != null
                                    ? "**".concat(h.total_games.toLocaleString(), "**")
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
                                (null == h ? void 0 : h.total_wins) != null
                                    ? "**".concat(h.total_wins.toLocaleString(), "**")
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
                                (null == h ? void 0 : h.total_kills) != null
                                    ? "**".concat(h.total_kills.toLocaleString(), "**")
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
                                (null == h ? void 0 : h.total_assists) != null
                                    ? "**".concat(h.total_assists.toLocaleString(), "**")
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
        P.Z,
        T(S({}, e), {
            userId: a.id,
            widget: l,
            className: o()(u, E.widgetContainer),
            headerTitle: w,
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
                (0, r.jsx)(H.Provider, {
                    value: e,
                    children: (0, r.jsx)(U, {
                        widget: l,
                        children: (0, r.jsx)(N, { component: D }),
                    }),
                }),
                null == y
                    ? (0, r.jsxs)("div", {
                          className: E.stillSyncing,
                          children: [
                              (0, r.jsx)(s.wGF, { size: "xxs" }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-secondary",
                                  children: I.intl.string(I.t.z5K4Ul),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    );
}
