n.d(t, { Z: () => $ }), n(467055), n(388685), n(35282), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    s = n(911969),
    u = n(535139),
    d = n(812206),
    f = n(810568),
    g = n(168524),
    p = n(970184),
    m = n(197653),
    b = n(979372),
    h = n(676149),
    y = n(861529),
    v = n(768494),
    O = n(124347),
    j = n(929677),
    x = n(706454),
    _ = n(314897),
    P = n(77498),
    I = n(823379),
    w = n(785717),
    S = n(621853),
    E = n(750312),
    T = n(919498),
    C = n(388032),
    D = n(18827);
function k(e) {
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
function N(e, t) {
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
let A = /{{(.*?)}}/g,
    Z = [
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
function R(e) {
    return null != e && e.loadingState === s.f.LOADED_SUCCESS && null != e.width && null != e.height;
}
function L(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return M(t);
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
            return (0, r.jsx)(B, N(k({}, i), { body: M(n) }));
        case "GRID":
            return (0, r.jsx)(F, { children: M(t.children) });
        case "FIELD":
            return (0, r.jsx)(U, {
                value: G(t.value),
                name: G(t.name),
            });
        case "TEXT":
            return (0, r.jsx)(W, k({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(H, k({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(z, k({}, t));
        case "SOCIAL_PROOF":
            return (0, r.jsx)(K, {});
    }
}
function G(e, t) {
    return (0, r.jsx)(L, { component: e }, t);
}
function M(e) {
    return e.map((e, t) => G(e, t));
}
function B(e) {
    let { title: t, body: n, image: i, imagePlaceholder: a } = e;
    return (0, r.jsxs)("div", {
        className: D.heroSection,
        children: [
            (0, r.jsxs)("div", {
                className: D.heroBody,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-lg/medium",
                        className: D.heroTitle,
                        children: null != t ? t : (0, r.jsx)("div", { className: D.textPlaceholder }),
                    }),
                    (0, r.jsx)(b.U, {
                        color: "muted",
                        children: n,
                    }),
                ],
            }),
            R(i)
                ? (0, r.jsx)("div", {
                      className: D.heroImageContainer,
                      children: (0, r.jsx)(O.ZP, {
                          src: i.proxyUrl,
                          alt: "",
                          width: i.width,
                          height: i.height,
                          responsive: !0,
                          className: D.heroImage,
                      }),
                  })
                : null != a
                  ? (0, r.jsx)("div", {
                        className: D.heroImageContainer,
                        children: (0, r.jsx)("img", {
                            src: a,
                            alt: "",
                            className: D.heroImage,
                        }),
                    })
                  : (0, r.jsx)("div", { className: D.heroImagePlaceholder }),
        ],
    });
}
function F(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: D.grid,
        children: t,
    });
}
function U(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        children: [n, t],
    });
}
function W(e) {
    let { content: t } = e,
        n = i.useId(),
        a = (0, b._)();
    return null != t
        ? (0, r.jsx)(y.Z, {
              type: s.re.TEXT_DISPLAY,
              id: n,
              content: t,
              className: D.text,
          })
        : (0, r.jsx)("div", { className: l()(D.textPlaceholder, a.className) });
}
function H(e) {
    let { content: t, image: n, imagePosition: i } = e,
        a = (0, b._)(),
        o = R(n)
            ? (0, r.jsx)("div", {
                  className: l()(D.image, a.className),
                  "data-position": i,
                  children: (0, r.jsx)(O.ZP, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, r.jsx)("div", { className: l()(D.imagePlaceholder, a.className) })
              : null;
    return (0, r.jsxs)("div", {
        className: D.textWithImage,
        children: [
            null != o && "left" === i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [o, " "],
                  })
                : null,
            (0, r.jsx)(W, { content: t }),
            null != o && "right" === i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [" ", o],
                  })
                : null,
        ],
    });
}
function z(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = i.useId();
    return (0, r.jsx)(h.Z, {
        type: s.re.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? s.US.LARGE : s.US.SMALL,
    });
}
function K() {
    let e = (function () {
            let e = i.useContext(Y);
            if (null == e) throw Error("ApplicationWidgetContext provider not found");
            return e;
        })(),
        { game: t } = X(e.widget);
    return null == t
        ? null
        : (0, r.jsx)(T.Z, {
              className: D.socialProof,
              applicationId: t.id,
              guildId: e.guildId,
              channelId: e.channelId,
          });
}
function q(e, t) {
    if (null == e) return null;
    let n = e.split(A);
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
function V(e, t) {
    var n, r;
    if (null == e || "skeleton" === t.mode) return null;
    let i = null == (r = e.match(A)) || null == (n = r[0]) ? void 0 : n.slice(2, -2);
    if (null == i) return null;
    let a = t.variables[i];
    return null == a || "unfurled_media" !== a.type ? null : a.media;
}
let Y = i.createContext(null);
function X(e) {
    return (0, o.cj)([d.Z, S.Z, P.Z], () => {
        let t = d.Z.getApplication(e.applicationId);
        return {
            application: t,
            game: null != t ? P.Z.getGameByApplication(t) : null,
            config: S.Z.getApplicationWidgetApplicationConfig(e.applicationId),
        };
    });
}
function Q(e) {
    let { children: t, widget: n } = e;
    return (0, r.jsx)(m.am.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(p.Il, {
            applicationWidget: n,
            children: (0, r.jsx)(b.U, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: D.container,
                    children: t,
                }),
            }),
        }),
    });
}
function J(e) {
    return (0, r.jsxs)(c.Kqy, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: D.cta,
        children: [
            (0, r.jsxs)(c.Kqy, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: C.intl.string(C.t.zMUr6Z),
                        }),
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: e.heading,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-secondary",
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
let $ = Object.assign(
    function (e) {
        let { trackUserProfileAction: t } = (0, w.KZ)(),
            { user: n, widget: a, cta: s, subtle: d = !1 } = e,
            p = (0, o.e7)([_.default], () => _.default.getId()) === n.id,
            { application: m, game: b, config: h } = X(a),
            y = null == m ? void 0 : m.getIconURL(16),
            O = (0, j.O)(n.id).data,
            P = null == O ? void 0 : O.find((e) => e.application_id === a.applicationId),
            S = (0, g.Z)({
                location: "UserProfileApplicationWidget",
                applicationId: null == b ? void 0 : b.id,
                source: f.m1.UserProfile,
                sourceUserId: n.id,
                trackEntryPointImpression: !0,
            }),
            { fetched: T, hasAlreadyLinked: A, canStartAuthorization: R, startAuthorization: G } = (0, u.F)(m),
            M = i.useCallback(() => {
                R &&
                    (t({
                        action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                        applicationId: a.applicationId,
                    }),
                    G());
            }, [R, G, t, a.applicationId]),
            B = null == s && T && !A && R,
            F = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != y
                        ? (0, r.jsx)("img", {
                              className: D.appIcon,
                              src: y,
                              width: 16,
                              height: 16,
                              alt: "",
                          })
                        : (0, r.jsx)("span", { className: D.appIconPlaceholder }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children:
                            (null == m ? void 0 : m.name) != null
                                ? m.name
                                : (0, r.jsx)("div", { className: D.textPlaceholder }),
                    }),
                ],
            }),
            U =
                null == b
                    ? (0, r.jsx)("div", {
                          className: D.headerTitle,
                          children: F,
                      })
                    : (0, r.jsx)(c.P3F, {
                          className: l()(D.headerTitle, D.clickable),
                          onClick: S,
                          children: F,
                      }),
            W = (0, o.e7)([x.default], () => x.default.locale),
            H = i.useMemo(() => {
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
                                      k(
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
                                                          media: (0, v.ym)(n),
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
                })(null != P ? P : null, null != h ? h : null, W);
                return Z.map(function t(n) {
                    switch (n.type) {
                        case "HERO":
                            var r;
                            return {
                                type: "HERO",
                                body: n.body.map(t),
                                title: q(n.title, e),
                                image: V(n.image, e),
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
                                content: q(n.content, e),
                            };
                        case "TEXT_WITH_IMAGE":
                            return {
                                type: "TEXT_WITH_IMAGE",
                                content: q(n.content, e),
                                image: V(n.image, e),
                                imagePosition: n.imagePosition,
                            };
                        case "SEPARATOR":
                        case "SOCIAL_PROOF":
                            return n;
                    }
                });
            }, [h, P, W]);
        return (0, r.jsxs)(
            E.Z,
            N(k({}, e), {
                userId: n.id,
                widget: a,
                className: l()(D.widgetContainer, d && D.subtle),
                headerTitle: U,
                headerClassName: D.header,
                additionalManageWidgetMenuItems:
                    null != b
                        ? (0, r.jsx)(c.sNh, {
                              id: "view-game-profile",
                              label: "View Game Profile",
                              icon: c.iWm,
                              action: S,
                          })
                        : null,
                children: [
                    (0, r.jsx)(Y.Provider, {
                        value: e,
                        children: (0, r.jsx)(Q, {
                            widget: a,
                            children: (0, r.jsx)(L, { component: H }),
                        }),
                    }),
                    p &&
                        (0, r.jsxs)("div", {
                            className: D.footer,
                            children: [
                                null == O || null != P || B
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: D.stillSyncing,
                                          children: [
                                              (0, r.jsx)(c.wGF, { size: "xxs" }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-secondary",
                                                  children: C.intl.string(C.t.z5K4Uv),
                                              }),
                                          ],
                                      }),
                                B
                                    ? (0, r.jsx)(J, {
                                          heading: C.intl.string(C.t.UDPRLO),
                                          content: C.intl.string(C.t["OW/2al"]),
                                          buttons: (0, r.jsx)(c.Button, {
                                              text: C.intl.string(C.t.S0W8Z5),
                                              onClick: M,
                                          }),
                                      })
                                    : s,
                            ],
                        }),
                ],
            }),
        );
    },
    { Cta: J },
);
