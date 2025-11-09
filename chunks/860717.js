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
    g = n(812206),
    f = n(810568),
    p = n(168524),
    m = n(970184),
    b = n(197653),
    h = n(979372),
    y = n(676149),
    v = n(861529),
    O = n(768494),
    j = n(124347),
    x = n(929677),
    _ = n(706454),
    P = n(77498),
    I = n(823379),
    w = n(621853),
    S = n(750312),
    E = n(919498),
    T = n(388032),
    C = n(895652);
function D(e) {
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
function k(e, t) {
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
let N = /{{(.*?)}}/g,
    A = [
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
function Z(e) {
    return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function R(e) {
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
            return (0, r.jsx)(B, k(D({}, i), { body: L(n) }));
        case "GRID":
            return (0, r.jsx)(M, { children: L(t.children) });
        case "FIELD":
            return (0, r.jsx)(U, {
                value: G(t.value),
                name: G(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(F, D({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(H, D({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(W, D({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(z, {});
    }
}
function G(e, t) {
    return (0, r.jsx)(R, { component: e }, t);
}
function L(e) {
    return e.map((e, t) => G(e, t));
}
function B(e) {
    let { title: t, body: n, image: i, imagePlaceholder: a } = e;
    return (0, r.jsxs)("div", {
        className: C.heroSection,
        children: [
            (0, r.jsxs)("div", {
                className: C.heroBody,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-lg/medium",
                        className: C.heroTitle,
                        children: null != t ? t : (0, r.jsx)("div", { className: C.textPlaceholder }),
                    }),
                    (0, r.jsx)(h.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            Z(i)
                ? (0, r.jsx)("div", {
                      className: C.heroImageContainer,
                      children: (0, r.jsx)(j.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: C.heroImage,
                      }),
                  })
                : null != a
                  ? (0, r.jsx)("div", {
                        className: C.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: a,
                            alt: "",
                            className: C.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: C.heroImagePlaceholder }),
        ],
    });
}
function M(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: C.grid,
        children: t,
    });
}
function U(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function F(e) {
    let { content: t } = e,
        n = i.useId(),
        a = (0, h._)();
    return null != t
        ? (0, r.jsx)(v.Z, {
              type: u.re.TEXT_DISPLAY,
              id: n,
              content: t,
              className: C.text,
          })
        : (0, r.jsx)("div", { className: l()(C.textPlaceholder, a.className) });
}
function H(e) {
    let { content: t, image: n, imagePosition: i } = e,
        a = (0, h._)(),
        o = Z(n)
            ? (0, r.jsx)("div", {
                  className: l()(C.image, a.className),
                  "data-position": i,
                  children: (0, r.jsx)(j.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, r.jsx)("div", { className: l()(C.imagePlaceholder, a.className) })
              : null;
    return (0, r.jsxs)("div", {
        className: C.textWithImage,
        children: [
            null != o && "left" === i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [o, " "],
                  })
                : null,
            (0, r.jsx)(F, { content: t }),
            null != o && "right" === i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [" ", o],
                  })
                : null,
        ],
    });
}
function W(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = i.useId();
    return (0, r.jsx)(y.Z, {
        type: u.re.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? u.US.LARGE : u.US.SMALL,
    });
}
function z() {
    let e = (function () {
            let e = i.useContext(V);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = X(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(E.Z, {
              className: C.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
function K(e, t) {
    if (null == e) return null;
    let n = e.split(N);
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
                ? (r += t.numberFormat.format(a.value))
                : "string" === a.type && (r += a.value);
    }
    return r;
}
function Y(e, t) {
    var n, r;
    if (null == e || "skeleton" === t.mode) return null;
    let i = null == (r = e.match(N)) || null == (n = r[0]) ? void 0 : n.slice(2, -2);
    if (null == i) return null;
    let a = t.variables[i];
    return null == a || "unfurled_media" !== a.type ? null : a.media;
}
let V = i.createContext(null);
function X(e) {
    return (0, o.cj)([g.Z, w.Z, P.Z], () => {
        let t = g.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? P.Z.getGameByApplication(t) : null,
            config: w.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function q(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(b.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(m.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(h.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: C.container,
                    children: t,
                }),
            }),
        }),
    });
}
function J(e) {
    return (0, r.jsxs)(s.Kqy, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: C.cta,
        children: [
            (0, r.jsxs)(s.Kqy, {
                gap: 4,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: T.intl.string(T.t.zMUr6Z),
                    }),
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: e.heading,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-secondary",
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
        let { user: t, widget: n, cta: a, subtle: u = !1 } = e,
            { application: g, game: m, config: b } = X(n),
            h = null == g ? void 0 : g.getIconURL(16),
            y = (0, x.O)(t.id).data,
            v = null == y ? void 0 : y.find((e) => e.application_id === n.applicationId),
            j = (0, p.Z)({
                location: "UserProfileApplicationWidget",
                applicationId: null == m ? void 0 : m.id,
                source: f.m1.UserProfile,
                sourceUserId: t.id,
                trackEntryPointImpression: !0,
            }),
            { fetched: P, hasAlreadyLinked: w, canStartAuthorization: E, startAuthorization: N } = (0, d.F)(g),
            Z = null == a && P && !w && E,
            G = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != h
                        ? (0, r.jsx)("img", {
                              className: C.appIcon,
                              src: h,
                              width: 16,
                              height: 16,
                              alt: "",
                          })
                        : (0, r.jsx)("span", { className: C.appIconPlaceholder }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        children:
                            (null == g ? void 0 : g.name) != null
                                ? g.name
                                : (0, r.jsx)("div", { className: C.textPlaceholder }),
                    }),
                ],
            }),
            L =
                null == m
                    ? (0, r.jsx)("div", {
                          className: C.header,
                          children: G,
                      })
                    : (0, r.jsx)(c.u, {
                          asContainer: !0,
                          text: T.intl.string(T.t.ajHoOr),
                          children: (0, r.jsx)(s.P3F, {
                              className: l()(C.header, C.headerClickable),
                              onClick: j,
                              "aria-label": T.intl.string(T.t.ajHoOr),
                              children: G,
                          }),
                      }),
            B = (0, o.e7)([_.default], () => _.default.locale),
            M = i.useMemo(() => {
                let e = (function (e, t, n) {
                    var r, i, a;
                    let l = new Intl.NumberFormat(n, {
                        notation: "compact",
                        compactDisplay: "short",
                        roundingMode: "floor",
                    });
                    return null == e
                        ? {
                              mode: "skeleton",
                              config: t,
                              numberFormat: l,
                          }
                        : {
                              mode: "from_data",
                              variables: Object.fromEntries(
                                  Object.entries(
                                      D(
                                          { username: null == (r = e.profile) ? void 0 : r.username },
                                          null == (a = e.profile) || null == (i = a.data) ? void 0 : i.primary,
                                      ),
                                  )
                                      .filter(I.V5)
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
                                      .filter(I.lm),
                              ),
                              config: t,
                              numberFormat: l,
                          };
                })(null != v ? v : null, null != b ? b : null, B);
                return A.map(function t(n) {
                    switch (n.type) {
                        case "HERO":
                            var r;
                            return {
                                type: "HERO",
                                body: n.body.map(t),
                                title: K(n.title, e),
                                image: Y(n.image, e),
                                imagePlaceholder: null == (r = e.config) ? void 0 : r.hero_placeholder_image,
                            };
                        case "GRID":
                            return {
                                type: "GRID",
                                children: n.children.map(t),
                            };
                        case "FIELD":
                            return {
                                type: "FIELD",
                                name: t(n.name),
                                value: t(n.value),
                            };
                        case "TEXT":
                            return {
                                type: "TEXT",
                                content: K(n.content, e),
                            };
                        case "TEXT_WITH_IMAGE":
                            return {
                                type: "TEXT_WITH_IMAGE",
                                content: K(n.content, e),
                                image: Y(n.image, e),
                                imagePosition: n.imagePosition,
                            };
                        case "SEPARATOR":
                        case "SOCIAL_PROOF":
                            return n;
                    }
                });
            }, [b, v, B]);
        return (0, r.jsxs)(
            S.Z,
            k(D({}, e), {
                userId: t.id,
                widget: n,
                className: l()(C.widgetContainer, u && C.subtle),
                headerTitle: L,
                dragHandleAdditionalMenuItems:
                    null != m
                        ? (0, r.jsx)(s.sNh, {
                              id: "view-game-profile",
                              label: "View Game Profile",
                              icon: s.iWm,
                              action: j,
                          })
                        : null,
                children: [
                    (0, r.jsx)(V.Provider, {
                        value: e,
                        children: (0, r.jsx)(q, {
                            widget: n,
                            children: (0, r.jsx)(R, { component: M }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: C.footer,
                        children: [
                            null != v || Z
                                ? null
                                : (0, r.jsxs)("div", {
                                      className: C.stillSyncing,
                                      children: [
                                          (0, r.jsx)(s.wGF, { size: "xxs" }),
                                          (0, r.jsx)(s.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-secondary",
                                              children: T.intl.string(T.t.z5K4Uv),
                                          }),
                                      ],
                                  }),
                            Z
                                ? (0, r.jsx)(J, {
                                      heading: T.intl.string(T.t.UDPRLO),
                                      content: T.intl.string(T.t["OW/2al"]),
                                      buttons: (0, r.jsx)(s.Button, {
                                          text: T.intl.string(T.t.S0W8Z5),
                                          onClick: N,
                                      }),
                                  })
                                : a,
                        ],
                    }),
                ],
            }),
        );
    },
    { Cta: J },
);
