n.d(t, {
    E3: () => I,
    ZP: () => D,
    tH: () => g,
}),
    n(539854);
var c = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(692547),
    o = n(780384),
    i = n(481060),
    s = n(99690),
    u = n(726542),
    d = n(367907),
    m = n(122021),
    T = n(275759),
    O = n(888496),
    p = n(753194),
    E = n(749681),
    b = n(258971),
    f = n(598077),
    h = n(671533),
    N = n(49012),
    x = n(652853),
    A = n(981631),
    _ = n(856651),
    j = n(49898),
    v = n(388032),
    P = n(455392);
function y(e) {
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
function C(e, t) {
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
function I(e) {
    var t, n;
    let r,
        s,
        E,
        {
            connectedAccount: b,
            theme: f,
            locale: x,
            userId: j,
            className: I,
            showMetadata: g,
            showInvisibleIcon: D,
        } = e;
    null == g && (g = !0);
    let L = null != (n = b.metadata) ? n : {},
        R = g ? (0, T.FI)(L[_.PC.CREATED_AT], x) : null,
        w = (0, i.dQu)(a.Z.unsafe_rawColors.TWITTER).hex(),
        S = v.intl.string(v.t["6H6h1t"]);
    if (g)
        switch (b.type) {
            case A.ABu.REDDIT:
                r = (0, O.oP)(L);
                break;
            case A.ABu.STEAM:
                r = (0, O.Dq)(L);
                break;
            case A.ABu.BLUESKY:
            case A.ABu.MASTODON:
            case A.ABu.TWITTER:
                (r = (0, O.rJ)(L)), "1" === L[_.PC.TWITTER_VERIFIED] && ((s = w), (S = v.intl.string(v.t.Jebrw8)));
                break;
            case A.ABu.PAYPAL:
                r = (0, O.li)(L);
                break;
            case A.ABu.EBAY:
                r = (0, O.ul)(L);
                break;
            case A.ABu.TIKTOK:
                r = (0, O.hf)(L);
        }
    let U = u.Z.get((0, m.rR)(b.type)),
        M = null == U || null == (t = U.getPlatformUserUrl) ? void 0 : t.call(U, b);
    null != D && D
        ? (E = (0, c.jsx)(i.kZF, {
              size: "md",
              color: "currentColor",
              className: l()(P.__invalid_connectedAccountOpenIconContainer, P.connectedAccountHideIcon),
          }))
        : null != M &&
          (E = (0, c.jsx)(i.eee, {
              href: M,
              "aria-label":
                  (null == U ? void 0 : U.name) != null
                      ? "".concat(U.name, ", ").concat(b.name, ", ").concat(v.intl.string(v.t.q5jLJC))
                      : "".concat(b.name, ", ").concat(v.intl.string(v.t.q5jLJC)),
              onClick: (e) => {
                  var t;
                  (t = b.type),
                      (0, d.yw)(A.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: j,
                      }),
                      (0, N.q)(
                          {
                              href: M,
                              trusted: (null == U ? void 0 : U.type) !== A.ABu.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, c.jsx)(h.Z, {
                  className: P.connectedAccountOpenIcon,
                  direction: h.Z.Directions.RIGHT,
              }),
          }));
    let k = (0, i.dQu)(a.Z.colors.INTERACTIVE_MUTED).hex(),
        F = (0, i.dQu)(a.Z.colors.INTERACTIVE_ACTIVE).hex(),
        B = b.verified
            ? (0, c.jsx)(p.Z, {
                  className: P.connectedAccountVerifiedIcon,
                  color: null != s ? s : k,
                  forcedIconColor: F,
                  size: 16,
                  tooltipText: S,
              })
            : null;
    return (0, c.jsxs)("li", {
        className: l()(
            P.connectedAccountContainer,
            (null != r && r.length > 0) || null != R ? P.connectedAccountContainerWithMetadata : null,
            I,
        ),
        children: [
            (0, c.jsxs)("div", {
                className: P.connectedAccount,
                children: [
                    (0, c.jsx)(i.ua7, {
                        text: null == U ? void 0 : U.name,
                        children: (e) =>
                            (0, c.jsx)(
                                "img",
                                C(y({}, e), {
                                    alt: v.intl.formatToPlainString(v.t.rtm15O, { name: null == U ? void 0 : U.name }),
                                    className: P.connectedAccountIcon,
                                    src: (0, o.wj)(f)
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
                        className: P.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)("div", {
                                className: P.connectedAccountName,
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: P.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(i.ua7, {
                                                overflowOnly: !0,
                                                text: b.name,
                                                children: (e) =>
                                                    (0, c.jsx)(
                                                        i.Text,
                                                        C(y({}, e), {
                                                            variant: "text-sm/medium",
                                                            color: "interactive-active",
                                                            className: P.connectedAccountNameText,
                                                            children: b.name,
                                                        }),
                                                    ),
                                            }),
                                            B,
                                        ],
                                    }),
                                    E,
                                ],
                            }),
                            null != R
                                ? (0, c.jsx)(i.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      children: v.intl.format(v.t["9rfonp"], { date: R }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != r && r.length > 0
                ? (0, c.jsx)("div", {
                      className: P.connectedAccountChildren,
                      children: r,
                  })
                : null,
        ],
    });
}
function g(e) {
    let { applicationRoleConnection: t, className: n, locale: r, onApplicationClicked: a, selectedGuildId: o } = e,
        u = (0, O.rm)(t, void 0, r),
        d = () => {
            null == a || a(),
                (0, E.transitionToGlobalDiscovery)({
                    tab: j.GlobalDiscoveryTab.APPS,
                    applicationId: t.application.id,
                    newSessionState: {
                        entrypoint: { name: b.xF.APPLICATION_DIRECTORY_URL },
                        guildId: o,
                    },
                });
        };
    return (0, c.jsxs)("li", {
        className: l()(
            P.connectedAccountContainer,
            null != u && u.length > 0 ? P.connectedAccountContainerWithMetadata : null,
            n,
        ),
        children: [
            (0, c.jsx)("div", {
                className: P.connectedAccount,
                children: (0, c.jsxs)(i.P3F, {
                    className: l()(P.connectedAccountNameContainer, P.connectedAccountNameContainerClickable),
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
                                  className: P.connectedAccountName,
                                  children: (0, c.jsx)("div", {
                                      className: P.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(i.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-active",
                                          className: P.connectedAccountNameText,
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
                      className: l()(P.connectedAccountChildren, P.connectedAccountChildrenNoIcon),
                      children: u,
                  })
                : null,
            (0, c.jsx)("div", {
                children: (0, c.jsx)(i.P3F, {
                    className: P.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: v.intl.format(v.t.zIT9YG, {
                            applicationHook: () =>
                                (0, c.jsxs)("div", {
                                    className: P.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, c.jsx)(s.Z, {
                                                  user: new f.Z(t.application.bot),
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
    let { connectedAccounts: t, locale: n, className: r, userId: a } = e,
        { theme: o } = (0, x.z)();
    if (null == t || 0 === t.length) return null;
    let i = t.map((e) =>
            (0, c.jsx)(
                I,
                {
                    connectedAccount: e,
                    theme: o,
                    locale: n,
                    userId: a,
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
        className: l()(P.connectedAccounts, r),
        children: [
            (0, c.jsx)("div", {
                className: P.connectedAccountsColumn,
                children: s,
            }),
            (0, c.jsx)("div", {
                className: P.connectedAccountsColumn,
                children: u,
            }),
        ],
    });
}
