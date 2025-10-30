n.d(t, { Z: () => Q }), n(467055), n(388685), n(35282), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(911969),
    d = n(535139),
    f = n(812206),
    g = n(810568),
    p = n(168524),
    m = n(970184),
    b = n(197653),
    y = n(979372),
    h = n(676149),
    v = n(861529),
    O = n(768494),
    j = n(124347),
    x = n(929677),
    _ = n(77498),
    P = n(823379),
    I = n(621853),
    w = n(750312),
    S = n(919498),
    E = n(388032),
    T = n(895652);
function C(e) {
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
function D(e, t) {
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
let k = /{{(.*?)}}/g,
    N = [
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
function A(e) {
    return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function Z(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return G(t);
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
            return (0, r.jsx)(B, D(C({}, i), { body: G(n) }));
        case "GRID":
            return (0, r.jsx)(L, { children: G(t.children) });
        case "FIELD":
            return (0, r.jsx)(M, {
                value: R(t.value),
                name: R(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(U, C({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(F, C({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(W, C({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(H, {});
    }
}
function R(e, t) {
    return (0, r.jsx)(Z, { component: e }, t);
}
function G(e) {
    return e.map((e, t) => R(e, t));
}
function B(e) {
    let { title: t, body: n, image: i, imagePlaceholder: a } = e;
    return (0, r.jsxs)("div", {
        className: T.heroSection,
        children: [
            (0, r.jsxs)("div", {
                className: T.heroBody,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-lg/medium",
                        className: T.heroTitle,
                        children: null != t ? t : (0, r.jsx)("div", { className: T.textPlaceholder }),
                    }),
                    (0, r.jsx)(y.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            A(i)
                ? (0, r.jsx)("div", {
                      className: T.heroImageContainer,
                      children: (0, r.jsx)(j.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: T.heroImage,
                      }),
                  })
                : null != a
                  ? (0, r.jsx)("div", {
                        className: T.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: a,
                            alt: "",
                            className: T.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: T.heroImagePlaceholder }),
        ],
    });
}
function L(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: T.grid,
        children: t,
    });
}
function M(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function U(e) {
    let { content: t } = e,
        n = i.useId(),
        a = (0, y._)();
    return null != t
        ? (0, r.jsx)(v.Z, {
              type: u.re.TEXT_DISPLAY,
              id: n,
              content: t,
          })
        : (0, r.jsx)("div", { className: l()(T.textPlaceholder, a.className) });
}
function F(e) {
    let { content: t, image: n, imagePosition: i } = e,
        a = (0, y._)(),
        o = A(n)
            ? (0, r.jsx)("div", {
                  className: l()(T.image, a.className),
                  children: (0, r.jsx)(j.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, r.jsx)("div", { className: l()(T.imagePlaceholder, a.className) })
              : null;
    return (0, r.jsxs)("div", {
        className: T.textWithImage,
        children: ["left" === i ? o : null, (0, r.jsx)(U, { content: t }), "right" === i ? o : null],
    });
}
function W(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = i.useId();
    return (0, r.jsx)(h.Z, {
        type: u.re.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? u.US.LARGE : u.US.SMALL,
    });
}
function H() {
    let e = (function () {
            let e = i.useContext(V);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = Y(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(S.Z, {
              className: T.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
function z(e, t) {
    if (null == e) return null;
    let n = e.split(k);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let r = "";
    for (let e = 0; e < n.length; e++) {
        let i = n[e];
        if (e % 2 == 0) {
            r += i;
            continue;
        }
        let a = t.variables[i];
        null == a
            ? (r += "\u2013\u2013")
            : "unfurled_media" === a.type
              ? (r += a.media.url)
              : "number" === a.type
                ? (r += a.value.toLocaleString())
                : "string" === a.type && (r += a.value);
    }
    return r;
}
function K(e, t) {
    var n, r;
    if (null == e || "skeleton" === t.mode) return null;
    let i = null == (r = e.match(k)) || null == (n = r[0]) ? void 0 : n.slice(2, -2);
    if (null == i) return null;
    let a = t.variables[i];
    return null == a || "unfurled_media" !== a.type ? null : a.media;
}
let V = i.createContext(null);
function Y(e) {
    return (0, o.cj)([f.Z, I.Z, _.Z], () => {
        let t = f.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? _.Z.getGameByApplication(t) : null,
            config: I.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function q(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(b.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(m.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(y.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: T.container,
                    children: t,
                }),
            }),
        }),
    });
}
function X(e) {
    return (0, r.jsxs)(s.Kqy, {
        direction: "horizontal",
        gap: 24,
        padding: 16,
        fullWidth: !1,
        className: T.cta,
        children: [
            (0, r.jsxs)(s.Kqy, {
                gap: 4,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: e.heading,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: e.content,
                    }),
                ],
            }),
            (0, r.jsx)(s.Kqy, {
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
let Q = Object.assign(
    function (e) {
        let { user: t, widget: n, cta: a } = e,
            { application: o, game: u, config: f } = Y(n),
            m = null == o ? void 0 : o.getIconURL(16),
            b = (0, x.O)(t.id).data,
            y = null == b ? void 0 : b.find((e) => e.application_id === n.applicationId),
            h = (0, p.Z)({
                location: "UserProfileApplicationWidget",
                applicationId: null == u ? void 0 : u.id,
                source: g.m1.UserProfile,
                sourceUserId: t.id,
                trackEntryPointImpression: !0,
            }),
            { fetched: v, hasAlreadyLinked: j, canStartAuthorization: _, startAuthorization: I } = (0, d.F)(o),
            S = null == a && v && !j && _,
            k = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != m
                        ? (0, r.jsx)("img", {
                              className: T.appIcon,
                              src: m,
                              width: 16,
                              height: 16,
                              alt: "",
                          })
                        : (0, r.jsx)("span", { className: T.appIconPlaceholder }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        children:
                            (null == o ? void 0 : o.name) != null
                                ? o.name
                                : (0, r.jsx)("div", { className: T.textPlaceholder }),
                    }),
                ],
            }),
            A =
                null == u
                    ? (0, r.jsx)("div", {
                          className: T.header,
                          children: k,
                      })
                    : (0, r.jsx)(c.u, {
                          asContainer: !0,
                          text: E.intl.string(E.t.ajHoOr),
                          children: (0, r.jsx)(s.P3F, {
                              className: l()(T.header, T.headerClickable),
                              onClick: h,
                              "aria-label": E.intl.string(E.t.ajHoOr),
                              children: k,
                          }),
                      }),
            R = i.useMemo(() => {
                var e, t, n, r, i;
                let a =
                    ((e = null != y ? y : null),
                    (t = null != f ? f : null),
                    null == e
                        ? {
                              mode: "skeleton",
                              config: t,
                          }
                        : {
                              mode: "from_data",
                              variables: Object.fromEntries(
                                  Object.entries(
                                      C(
                                          { username: null == (n = e.profile) ? void 0 : n.username },
                                          null == (i = e.profile) || null == (r = i.data) ? void 0 : r.primary,
                                      ),
                                  )
                                      .filter(P.V5)
                                      .map((e) => {
                                          let [t, n] = e;
                                          if ("object" == typeof n) {
                                              if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                                  return [
                                                      t,
                                                      {
                                                          type: "unfurled_media",
                                                          media: (0, O.ym)(n),
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
                                      .filter(P.lm),
                              ),
                              config: t,
                          });
                return N.map(function e(t) {
                    switch (t.type) {
                        case "HERO":
                            var n;
                            return {
                                type: "HERO",
                                body: t.body.map(e),
                                title: z(t.title, a),
                                image: K(t.image, a),
                                imagePlaceholder: null == (n = a.config) ? void 0 : n.hero_placeholder_image,
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
                                content: z(t.content, a),
                            };
                        case "TEXT_WITH_IMAGE":
                            return {
                                type: "TEXT_WITH_IMAGE",
                                content: z(t.content, a),
                                image: K(t.image, a),
                                imagePosition: t.imagePosition,
                            };
                        case "SEPARATOR":
                        case "SOCIAL_PROOF":
                            return t;
                    }
                });
            }, [f, y]);
        return (0, r.jsxs)(
            w.Z,
            D(C({}, e), {
                userId: t.id,
                widget: n,
                className: T.widgetContainer,
                headerTitle: A,
                dragHandleAdditionalMenuItems:
                    null != u
                        ? (0, r.jsx)(s.sNh, {
                              id: "view-game-profile",
                              label: "View Game Profile",
                              icon: s.iWm,
                              action: h,
                          })
                        : null,
                children: [
                    (0, r.jsx)(V.Provider, {
                        value: e,
                        children: (0, r.jsx)(q, {
                            widget: n,
                            children: (0, r.jsx)(Z, { component: R }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: T.footer,
                        children: [
                            null != y || S
                                ? null
                                : (0, r.jsxs)("div", {
                                      className: T.stillSyncing,
                                      children: [
                                          (0, r.jsx)(s.wGF, { size: "xxs" }),
                                          (0, r.jsx)(s.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-secondary",
                                              children: E.intl.string(E.t.z5K4Uv),
                                          }),
                                      ],
                                  }),
                            S
                                ? (0, r.jsx)(X, {
                                      heading: E.intl.string(E.t.UDPRLO),
                                      content: E.intl.string(E.t["OW/2al"]),
                                      buttons: (0, r.jsx)(s.Button, {
                                          text: E.intl.string(E.t.S0W8Z5),
                                          onClick: I,
                                      }),
                                  })
                                : a,
                        ],
                    }),
                ],
            }),
        );
    },
    { Cta: X },
);
