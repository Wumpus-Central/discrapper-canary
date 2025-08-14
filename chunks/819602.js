n.d(t, {
    E3: () => y,
    ZP: () => D,
    tH: () => g,
}),
    n(539854);
var c = n(255367);
n(73800);
var a = n(120356),
    l = n.n(a),
    r = n(692547),
    o = n(780384),
    i = n(481060),
    s = n(99690),
    u = n(726542),
    d = n(367907),
    m = n(122021),
    T = n(275759),
    E = n(888496),
    O = n(753194),
    p = n(749681),
    A = n(258971),
    x = n(598077),
    N = n(671533),
    _ = n(49012),
    h = n(652853),
    b = n(981631),
    v = n(856651),
    j = n(49898),
    C = n(388032),
    f = n(455392);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            c.forEach(function (t) {
                var c;
                (c = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = c);
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
                      var c = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, c);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    var t, n;
    let a,
        s,
        p,
        {
            connectedAccount: A,
            theme: x,
            locale: h,
            userId: j,
            className: y,
            showMetadata: g,
            showInvisibleIcon: D,
        } = e;
    null == g && (g = !0);
    let L = null != (n = A.metadata) ? n : {},
        R = g ? (0, T.FI)(L[v.PC.CREATED_AT], h) : null,
        S = (0, i.dQu)(r.Z.unsafe_rawColors.TWITTER).hex(),
        M = C.intl.string(C.t["6H6h1t"]);
    if (g)
        switch (A.type) {
            case b.ABu.REDDIT:
                a = (0, E.oP)(L);
                break;
            case b.ABu.STEAM:
                a = (0, E.Dq)(L);
                break;
            case b.ABu.BLUESKY:
            case b.ABu.MASTODON:
            case b.ABu.TWITTER:
                (a = (0, E.rJ)(L)), "1" === L[v.PC.TWITTER_VERIFIED] && ((s = S), (M = C.intl.string(C.t.Jebrw8)));
                break;
            case b.ABu.PAYPAL:
                a = (0, E.li)(L);
                break;
            case b.ABu.EBAY:
                a = (0, E.ul)(L);
                break;
            case b.ABu.TIKTOK:
                a = (0, E.hf)(L);
        }
    let U = u.Z.get((0, m.rR)(A.type)),
        w = null == U || null == (t = U.getPlatformUserUrl) ? void 0 : t.call(U, A);
    null != D && D
        ? (p = (0, c.jsx)(i.kZF, {
              size: "md",
              color: "currentColor",
              className: l()(f.__invalid_connectedAccountOpenIconContainer, f.connectedAccountHideIcon),
          }))
        : null != w &&
          (p = (0, c.jsx)(i.eee, {
              href: w,
              "aria-label":
                  (null == U ? void 0 : U.name) != null
                      ? "".concat(U.name, ", ").concat(A.name, ", ").concat(C.intl.string(C.t.q5jLJC))
                      : "".concat(A.name, ", ").concat(C.intl.string(C.t.q5jLJC)),
              onClick: (e) => {
                  var t;
                  (t = A.type),
                      (0, d.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: j,
                      }),
                      (0, _.q)(
                          {
                              href: w,
                              trusted: (null == U ? void 0 : U.type) !== b.ABu.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, c.jsx)(N.Z, {
                  className: f.connectedAccountOpenIcon,
                  direction: N.Z.Directions.RIGHT,
              }),
          }));
    let k = (0, i.dQu)(r.Z.colors.INTERACTIVE_MUTED).hex(),
        K = (0, i.dQu)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
        B = A.verified
            ? (0, c.jsx)(O.Z, {
                  className: f.connectedAccountVerifiedIcon,
                  color: null != s ? s : k,
                  forcedIconColor: K,
                  size: 16,
                  tooltipText: M,
              })
            : null;
    return (0, c.jsxs)("li", {
        className: l()(
            f.connectedAccountContainer,
            (null != a && a.length > 0) || null != R ? f.connectedAccountContainerWithMetadata : null,
            y,
        ),
        children: [
            (0, c.jsxs)("div", {
                className: f.connectedAccount,
                children: [
                    (0, c.jsx)(i.ua7, {
                        text: null == U ? void 0 : U.name,
                        children: (e) =>
                            (0, c.jsx)(
                                "img",
                                P(I({}, e), {
                                    alt: C.intl.formatToPlainString(C.t.rtm15O, { name: null == U ? void 0 : U.name }),
                                    className: f.connectedAccountIcon,
                                    src: (0, o.wj)(x)
                                        ? null == U
                                            ? void 0
                                            : U.icon.darkSVG
                                        : null == U
                                          ? void 0
                                          : U.icon.lightSVG,
                                }),
                            ),
                    }),
                    (0, c.jsxs)("div", {
                        className: f.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)("div", {
                                className: f.connectedAccountName,
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: f.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(i.ua7, {
                                                overflowOnly: !0,
                                                text: A.name,
                                                children: (e) =>
                                                    (0, c.jsx)(
                                                        i.Text,
                                                        P(I({}, e), {
                                                            variant: "text-sm/medium",
                                                            color: "interactive-active",
                                                            className: f.connectedAccountNameText,
                                                            children: A.name,
                                                        }),
                                                    ),
                                            }),
                                            B,
                                        ],
                                    }),
                                    p,
                                ],
                            }),
                            null != R
                                ? (0, c.jsx)(i.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      children: C.intl.format(C.t["9rfonp"], { date: R }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != a && a.length > 0
                ? (0, c.jsx)("div", {
                      className: f.connectedAccountChildren,
                      children: a,
                  })
                : null,
        ],
    });
}
function g(e) {
    let { applicationRoleConnection: t, className: n, locale: a, onApplicationClicked: r, selectedGuildId: o } = e,
        u = (0, E.rm)(t, void 0, a),
        d = () => {
            null == r || r(),
                (0, p.transitionToGlobalDiscovery)({
                    tab: j.GlobalDiscoveryTab.APPS,
                    applicationId: t.application.id,
                    newSessionState: {
                        entrypoint: { name: A.xF.APPLICATION_DIRECTORY_URL },
                        guildId: o,
                    },
                });
        };
    return (0, c.jsxs)("li", {
        className: l()(
            f.connectedAccountContainer,
            null != u && u.length > 0 ? f.connectedAccountContainerWithMetadata : null,
            n,
        ),
        children: [
            (0, c.jsx)("div", {
                className: f.connectedAccount,
                children: (0, c.jsxs)(i.P3F, {
                    className: l()(f.connectedAccountNameContainer, f.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != t.platform_name
                            ? (0, c.jsx)(i.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-normal",
                                  children: t.platform_name,
                              })
                            : null,
                        null != t.platform_username
                            ? (0, c.jsx)("div", {
                                  className: f.connectedAccountName,
                                  children: (0, c.jsx)("div", {
                                      className: f.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(i.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-active",
                                          className: f.connectedAccountNameText,
                                          children: t.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != u && u.length > 0
                ? (0, c.jsx)("div", {
                      className: l()(f.connectedAccountChildren, f.connectedAccountChildrenNoIcon),
                      children: u,
                  })
                : null,
            (0, c.jsx)("div", {
                children: (0, c.jsx)(i.P3F, {
                    className: f.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: C.intl.format(C.t.zIT9YG, {
                            applicationHook: () =>
                                (0, c.jsxs)("div", {
                                    className: f.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, c.jsx)(s.Z, {
                                                  user: new x.Z(t.application.bot),
                                                  size: i.EFr.SIZE_16,
                                              })
                                            : null,
                                        (0, c.jsx)(i.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: t.application.name,
                                        }),
                                    ],
                                }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function D(e) {
    let { connectedAccounts: t, locale: n, className: a, userId: r } = e,
        { theme: o } = (0, h.z)();
    if (null == t || 0 === t.length) return null;
    let i = t.map((e) =>
            (0, c.jsx)(
                y,
                {
                    connectedAccount: e,
                    theme: o,
                    locale: n,
                    userId: r,
                },
                "".concat(e.type, ":").concat(e.id),
            ),
        ),
        s = [],
        u = [];
    for (let e = 0; e < i.length; e++) {
        let t = i[e];
        e % 2 == 0 ? s.push(t) : u.push(t);
    }
    return (0, c.jsxs)("ul", {
        className: l()(f.connectedAccounts, a),
        children: [
            (0, c.jsx)("div", {
                className: f.connectedAccountsColumn,
                children: s,
            }),
            (0, c.jsx)("div", {
                className: f.connectedAccountsColumn,
                children: u,
            }),
        ],
    });
}
