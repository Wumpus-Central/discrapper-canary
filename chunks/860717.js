n.d(t, { Z: () => et }), n(467055), n(388685), n(35282), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    s = n(911969),
    u = n(100527),
    d = n(906732),
    f = n(524995),
    g = n(812206),
    p = n(810568),
    b = n(168524),
    m = n(970184),
    h = n(197653),
    y = n(979372),
    v = n(676149),
    O = n(861529),
    j = n(768494),
    x = n(124347),
    P = n(929677),
    I = n(706454),
    w = n(314897),
    S = n(77498),
    E = n(823379),
    _ = n(785717),
    T = n(621853),
    C = n(750312),
    D = n(919498),
    k = n(388032),
    N = n(440653);
function A(e) {
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
function Z(e, t) {
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
let R = /{{(.*?)}}/g,
    G = [
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
                        content: "-# Highest Rank",
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
    return null != e && e.loadingState === s.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function M(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return F(t);
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
            return (0, r.jsx)(U, Z(A({}, i), { body: F(n) }));
        case "GRID":
            return (0, r.jsx)(W, { children: F(t.children) });
        case "FIELD":
            return (0, r.jsx)(H, {
                value: B(t.value),
                name: B(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(z, A({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(K, A({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(V, A({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(q, {});
    }
}
function B(e, t) {
    return (0, r.jsx)(M, { component: e }, t);
}
function F(e) {
    return e.map((e, t) => B(e, t));
}
function U(e) {
    let { title: t, body: n, image: i, imagePlaceholder: a } = e;
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
                    (0, r.jsx)(y.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            L(i)
                ? (0, r.jsx)("div", {
                      className: N.heroImageContainer,
                      children: (0, r.jsx)(x.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: N.heroImage,
                      }),
                  })
                : null != a
                  ? (0, r.jsx)("div", {
                        className: N.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: a,
                            alt: "",
                            className: N.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: N.heroImagePlaceholder }),
        ],
    });
}
function W(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: N.grid,
        children: t,
    });
}
function H(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function z(e) {
    let { content: t } = e,
        n = i.useId(),
        a = (0, y._)();
    return null != t
        ? (0, r.jsx)(O.Z, {
              type: s.re.TEXT_DISPLAY,
              id: n,
              content: t,
              className: N.text,
          })
        : (0, r.jsx)("div", { className: l()(N.textPlaceholder, a.className) });
}
function K(e) {
    let { content: t, image: n, imagePosition: i } = e,
        a = (0, y._)(),
        o = L(n)
            ? (0, r.jsx)("div", {
                  className: l()(N.image, a.className),
                  "data-position": i,
                  children: (0, r.jsx)(x.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, r.jsx)("div", { className: l()(N.imagePlaceholder, a.className) })
              : null;
    return (0, r.jsxs)("div", {
        className: N.textWithImage,
        children: [
            null != o && "left" === i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [o, " "],
                  })
                : null,
            (0, r.jsx)(z, { content: t }),
            null != o && "right" === i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [" ", o],
                  })
                : null,
        ],
    });
}
function V(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = i.useId();
    return (0, r.jsx)(v.Z, {
        type: s.re.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? s.US.LARGE : s.US.SMALL,
    });
}
function q() {
    let e = (function () {
            let e = i.useContext(Q);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = J(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(D.F, {
              className: N.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
function Y(e, t) {
    if (null == e) return null;
    let n = e.split(R);
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
function X(e, t) {
    var n, r;
    if (null == e || "skeleton" === t.mode) return null;
    let i = null == (r = e.match(R)) || null == (n = r[0]) ? void 0 : n.slice(2, -2);
    if (null == i) return null;
    let a = t.variables[i];
    return null == a || "unfurled_media" !== a.type ? null : a.media;
}
let Q = i.createContext(null);
function J(e) {
    return (0, o.cj)([g.Z, T.Z, S.Z], () => {
        let t = g.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? S.Z.getGameByApplication(t) : null,
            config: T.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function $(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(h.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(m.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(y.U, {
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
function ee(e) {
    return (0, r.jsxs)(c.Kqy, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: N.cta,
        children: [
            (0, r.jsxs)(c.Kqy, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: k.intl.string(k.t.zMUr6Z),
                        }),
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: e.heading,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
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
let et = Object.assign(
    function (e) {
        let { trackUserProfileAction: t } = (0, _.KZ)(),
            { user: n, widget: a, cta: s, subtle: g = !1 } = e,
            m = (0, o.e7)([w.default], () => w.default.getId()) === n.id,
            { application: h, game: y, config: v } = J(a),
            O = null == h ? void 0 : h.getIconURL(16),
            x = (0, P.O)(n.id).data,
            S = null == x ? void 0 : x.find((e) => e.application_id === a.applicationId),
            T = (0, b.Z)({
                location: "UserProfileApplicationWidget",
                applicationId: null == y ? void 0 : y.id,
                source: p.m1.UserProfile,
                sourceUserId: n.id,
                trackEntryPointImpression: !0,
            }),
            { fetched: D, hasAlreadyLinked: R, canStartAuthorization: L, startAuthorization: B } = (0, f.F)(h),
            { analyticsLocations: F } = (0, d.ZP)(u.Z.USER_PROFILE_APPLICATION_WIDGET),
            U = i.useCallback(() => {
                L &&
                    (t({
                        action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                        applicationId: a.applicationId,
                    }),
                    B({ analyticsLocations: F }));
            }, [L, B, t, a.applicationId, F]),
            W = null == s && D && !R && L,
            H = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != O
                        ? (0, r.jsx)("img", {
                              className: N.appIcon,
                              src: O,
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
            z =
                null == y
                    ? (0, r.jsx)("div", {
                          className: N.headerTitle,
                          children: H,
                      })
                    : (0, r.jsx)(c.P3F, {
                          className: l()(N.headerTitle, N.clickable),
                          onClick: T,
                          children: H,
                      }),
            K = (0, o.e7)([I.default], () => I.default.locale),
            V = i.useMemo(() => {
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
                                      A(
                                          { username: null == (r = e.profile) ? void 0 : r.username },
                                          null == (a = e.profile) || null == (i = a.data) ? void 0 : i.primary,
                                      ),
                                  )
                                      .filter(E.V5)
                                      .map((e) => {
                                          let [t, n] = e;
                                          if ("object" == typeof n) {
                                              if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                                  return [
                                                      t,
                                                      {
                                                          type: "unfurled_media",
                                                          media: (0, j.ym)(n),
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
                                      .filter(E.lm),
                              ),
                              config: t,
                              numberFormat: l,
                          };
                })(null != S ? S : null, null != v ? v : null, K);
                return G.map(function t(n) {
                    switch (n.type) {
                        case "HERO":
                            var r;
                            return {
                                type: "HERO",
                                body: n.body.map(t),
                                title: Y(n.title, e),
                                image: X(n.image, e),
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
                                content: Y(n.content, e),
                            };
                        case "TEXT_WITH_IMAGE":
                            return {
                                type: "TEXT_WITH_IMAGE",
                                content: Y(n.content, e),
                                image: X(n.image, e),
                                imagePosition: n.imagePosition,
                            };
                        case "SEPARATOR":
                        case "SOCIAL_PROOF":
                            return n;
                    }
                });
            }, [v, S, K]);
        return (0, r.jsxs)(
            C.Z,
            Z(A({}, e), {
                userId: n.id,
                widget: a,
                className: l()(N.widgetContainer, g && N.subtle),
                headerTitle: z,
                headerClassName: N.header,
                additionalManageWidgetMenuItems:
                    null != y
                        ? (0, r.jsx)(c.sNh, {
                              id: "view-game-profile",
                              label: "View Game Profile",
                              icon: c.iWm,
                              action: T,
                          })
                        : null,
                children: [
                    (0, r.jsx)(Q.Provider, {
                        value: e,
                        children: (0, r.jsx)($, {
                            widget: a,
                            children: (0, r.jsx)(M, { component: V }),
                        }),
                    }),
                    m &&
                        (0, r.jsxs)("div", {
                            className: N.footer,
                            children: [
                                null == x || null != S || W
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: N.stillSyncing,
                                          children: [
                                              (0, r.jsx)(c.wGF, { size: "xxs" }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: k.intl.string(k.t.z5K4Uv),
                                              }),
                                          ],
                                      }),
                                W
                                    ? (0, r.jsx)(ee, {
                                          heading: k.intl.string(k.t.UDPRLO),
                                          content: k.intl.string(k.t["OW/2al"]),
                                          buttons: (0, r.jsx)(c.Button, {
                                              text: k.intl.string(k.t.S0W8Z5),
                                              onClick: U,
                                          }),
                                      })
                                    : s,
                            ],
                        }),
                ],
            }),
        );
    },
    { Cta: ee },
);
