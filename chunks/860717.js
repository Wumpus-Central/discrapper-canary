n.d(t, { Z: () => X }), n(467055), n(388685), n(35282), n(415506);
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
    S = n(823379),
    C = n(621853),
    T = n(750312),
    N = n(919498),
    j = n(388032),
    P = n(18827);
function x(e) {
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
function A(e, t) {
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
let Z = /{{(.*?)}}/g,
    w = [
        {
            type: "HERO",
            title: "{{username}}",
            image: "{{featured_played_character_image}}",
            body: [
                {
                    type: "TEXT_WITH_IMAGE",
                    content: "{{season}}: {{rank_name}}",
                    image: "{{rank_image}}",
                    imagePosition: "right",
                },
                {
                    type: "TEXT",
                    content: "Top Hero: {{featured_played_character}}",
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
                        content: "**{{highest_rank}}**",
                        image: "{{highest_rank_image}}",
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
                        content: "**{{playtime_hours}} Hours**",
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
                        content: "**{{total_games}}**",
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
                        content: "**{{total_wins}}**",
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
                        content: "**{{total_kills}}**",
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
                        content: "**{{total_assists}}**",
                    },
                    name: {
                        type: "TEXT",
                        content: "-# Assists",
                    },
                },
            ],
        },
    ];
function L(e) {
    return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function R(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return k(t);
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
            return (0, r.jsx)(M, A(x({}, i), { body: k(n) }));
        case "GRID":
            return (0, r.jsx)(U, { children: k(t.children) });
        case "FIELD":
            return (0, r.jsx)(G, {
                value: D(t.value),
                name: D(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(B, x({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(H, x({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(V, x({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(F, {});
    }
}
function D(e, t) {
    return (0, r.jsx)(R, { component: e }, t);
}
function k(e) {
    return e.map((e, t) => D(e, t));
}
function M(e) {
    let { title: t, body: n, image: i, imagePlaceholder: l } = e;
    return (0, r.jsxs)("div", {
        className: P.heroSection,
        children: [
            (0, r.jsxs)("div", {
                className: P.heroBody,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-lg/medium",
                        className: P.heroTitle,
                        children: null != t ? t : (0, r.jsx)("div", { className: P.textPlaceholder }),
                    }),
                    (0, r.jsx)(b.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            L(i)
                ? (0, r.jsx)("div", {
                      className: P.heroImageContainer,
                      children: (0, r.jsx)(v.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: P.heroImage,
                      }),
                  })
                : null != l
                  ? (0, r.jsx)("div", {
                        className: P.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: l,
                            alt: "",
                            className: P.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: P.heroImagePlaceholder }),
        ],
    });
}
function U(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: P.grid,
        children: t,
    });
}
function G(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function B(e) {
    let { content: t } = e,
        n = i.useId(),
        l = (0, b._)();
    return null != t
        ? (0, r.jsx)(O.Z, {
              type: u.re.TEXT_DISPLAY,
              id: n,
              content: t,
          })
        : (0, r.jsx)("div", { className: a()(P.textPlaceholder, l.className) });
}
function H(e) {
    let { content: t, image: n, imagePosition: i } = e,
        l = (0, b._)(),
        o = L(n)
            ? (0, r.jsx)("div", {
                  className: a()(P.image, l.className),
                  children: (0, r.jsx)(v.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, r.jsx)("div", { className: a()(P.imagePlaceholder, l.className) })
              : null;
    return (0, r.jsxs)("div", {
        className: P.textWithImage,
        children: ["left" === i ? o : null, (0, r.jsx)(B, { content: t }), "right" === i ? o : null],
    });
}
function V(e) {
    let { size: t = "small", divider: n = !1 } = e,
        l = i.useId();
    return (0, r.jsx)(_.Z, {
        type: u.re.SEPARATOR,
        id: l,
        divider: n,
        spacing: "large" === t ? u.US.LARGE : u.US.SMALL,
    });
}
function F() {
    let e = (function () {
            let e = i.useContext(Y);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = q(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(N.Z, {
              className: P.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
function z(e, t) {
    if (null == e) return null;
    let n = e.split(Z);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let r = "";
    for (let e = 0; e < n.length; e++) {
        let i = n[e];
        if (e % 2 == 0) {
            r += i;
            continue;
        }
        let l = t.variables[i];
        null == l
            ? (r += "\u2013\u2013")
            : "unfurled_media" === l.type
              ? (r += l.media.url)
              : "number" === l.type
                ? (r += l.value.toLocaleString())
                : "string" === l.type && (r += l.value);
    }
    return r;
}
function W(e, t) {
    var n, r;
    if (null == e || "skeleton" === t.mode) return null;
    let i = null == (r = e.match(Z)) || null == (n = r[0]) ? void 0 : n.slice(2, -2);
    if (null == i) return null;
    let l = t.variables[i];
    return null == l || "unfurled_media" !== l.type ? null : l.media;
}
let Y = i.createContext(null);
function q(e) {
    return (0, o.cj)([p.Z, C.Z, I.Z], () => {
        let t = p.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? I.Z.getGameByApplication(t) : null,
            config: C.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function K(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(m.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(g.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(b.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: P.container,
                    children: t,
                }),
            }),
        }),
    });
}
function Q(e) {
    return (0, r.jsxs)(c.Kqy, {
        direction: "horizontal",
        gap: 24,
        padding: 16,
        fullWidth: !1,
        className: P.cta,
        children: [
            (0, r.jsxs)(c.Kqy, {
                gap: 4,
                children: [
                    (0, r.jsx)(c.Heading, {
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
let X = Object.assign(
    function (e) {
        let { user: t, widget: n, containerClassName: l, cta: o } = e,
            { application: u, game: p, config: g } = q(n),
            m = null == u ? void 0 : u.getIconURL(16),
            b = (0, y.O)(t.id).data,
            _ = null == b ? void 0 : b.find((e) => e.application_id === n.applicationId),
            O = (0, h.Z)({
                location: "UserProfileApplicationWidget",
                applicationId: null == p ? void 0 : p.id,
                source: f.m1.UserProfile,
                sourceUserId: t.id,
                trackEntryPointImpression: !0,
            }),
            { fetched: v, hasAlreadyLinked: I, canStartAuthorization: C, startAuthorization: N } = (0, d.FG)(u),
            Z = null == o && v && !I && C,
            L = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != m
                        ? (0, r.jsx)("img", {
                              className: P.appIcon,
                              src: m,
                              width: 16,
                              height: 16,
                              alt: "",
                          })
                        : (0, r.jsx)("span", { className: P.appIconPlaceholder }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children:
                            (null == u ? void 0 : u.name) != null
                                ? u.name
                                : (0, r.jsx)("div", { className: P.textPlaceholder }),
                    }),
                ],
            }),
            D =
                null == p
                    ? (0, r.jsx)("div", {
                          className: P.header,
                          children: L,
                      })
                    : (0, r.jsx)(s.u, {
                          asContainer: !0,
                          text: j.intl.string(j.t.ajHoOj),
                          children: (0, r.jsx)(c.P3F, {
                              className: a()(P.header, P.headerClickable),
                              onClick: O,
                              "aria-label": j.intl.string(j.t.ajHoOj),
                              children: L,
                          }),
                      }),
            k = i.useMemo(() => {
                var e, t, n, r, i;
                let l =
                    ((e = null != _ ? _ : null),
                    (t = null != g ? g : null),
                    null == e
                        ? {
                              mode: "skeleton",
                              config: t,
                          }
                        : {
                              mode: "from_data",
                              variables: Object.fromEntries(
                                  Object.entries(
                                      x(
                                          { username: null == (n = e.profile) ? void 0 : n.username },
                                          null == (i = e.profile) || null == (r = i.data) ? void 0 : r.primary,
                                      ),
                                  )
                                      .filter(S.V5)
                                      .map((e) => {
                                          let [t, n] = e;
                                          if ("object" == typeof n) {
                                              if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                                  return [
                                                      t,
                                                      {
                                                          type: "unfurled_media",
                                                          media: (0, E.ym)(n),
                                                      },
                                                  ];
                                          } else if ("string" == typeof n)
                                              return [
                                                  t,
                                                  {
                                                      type: "string",
                                                      value: n,
                                                  },
                                              ];
                                          else if ("number" == typeof n)
                                              return [
                                                  t,
                                                  {
                                                      type: "number",
                                                      value: n,
                                                  },
                                              ];
                                          return null;
                                      })
                                      .filter(S.lm),
                              ),
                              config: t,
                          });
                return w.map(function e(t) {
                    switch (t.type) {
                        case "HERO":
                            var n;
                            return {
                                type: "HERO",
                                body: t.body.map(e),
                                title: z(t.title, l),
                                image: W(t.image, l),
                                imagePlaceholder: null == (n = l.config) ? void 0 : n.hero_placeholder_image,
                            };
                        case "GRID":
                            return {
                                type: "GRID",
                                children: t.children.map(e),
                            };
                        case "FIELD":
                            return {
                                type: "FIELD",
                                name: e(t.name),
                                value: e(t.value),
                            };
                        case "TEXT":
                            return {
                                type: "TEXT",
                                content: z(t.content, l),
                            };
                        case "TEXT_WITH_IMAGE":
                            return {
                                type: "TEXT_WITH_IMAGE",
                                content: z(t.content, l),
                                image: W(t.image, l),
                                imagePosition: t.imagePosition,
                            };
                        case "SEPARATOR":
                        case "SOCIAL_PROOF":
                            return t;
                    }
                });
            }, [g, _]);
        return (0, r.jsxs)(
            T.Z,
            A(x({}, e), {
                userId: t.id,
                widget: n,
                className: a()(l, P.widgetContainer),
                headerTitle: D,
                dragHandleAdditionalMenuItems:
                    null != p
                        ? (0, r.jsx)(c.sNh, {
                              id: "view-game-profile",
                              label: "View Game Profile",
                              icon: c.iWm,
                              action: O,
                          })
                        : null,
                children: [
                    (0, r.jsx)(Y.Provider, {
                        value: e,
                        children: (0, r.jsx)(K, {
                            widget: n,
                            children: (0, r.jsx)(R, { component: k }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: P.footer,
                        children: [
                            null != _ || Z
                                ? null
                                : (0, r.jsxs)("div", {
                                      className: P.stillSyncing,
                                      children: [
                                          (0, r.jsx)(c.wGF, { size: "xxs" }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-secondary",
                                              children: j.intl.string(j.t.z5K4Ul),
                                          }),
                                      ],
                                  }),
                            Z
                                ? (0, r.jsx)(Q, {
                                      heading: j.intl.string(j.t.UDPRLC),
                                      content: j.intl.string(j.t["OW/2am"]),
                                      buttons: (0, r.jsx)(c.Button, {
                                          text: j.intl.string(j.t.S0W8Z2),
                                          onClick: N,
                                      }),
                                  })
                                : o,
                        ],
                    }),
                ],
            }),
        );
    },
    { Cta: Q },
);
