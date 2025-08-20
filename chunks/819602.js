t.d(n, {
    E3: () => N,
    ZP: () => E,
    tH: () => C,
}),
    t(539854);
var r = t(951288);
t(647438);
var o = t(120356),
    l = t.n(o),
    i = t(692547),
    c = t(780384),
    a = t(481060),
    s = t(99690),
    d = t(726542),
    u = t(367907),
    f = t(122021),
    m = t(275759),
    p = t(888496),
    b = t(753194),
    g = t(749681),
    x = t(258971),
    h = t(598077),
    j = t(671533),
    v = t(49012),
    _ = t(652853),
    y = t(981631),
    I = t(856651),
    O = t(49898),
    P = t(388032),
    Z = t(455392);
function T(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function A(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function N(e) {
    var n, t;
    let o,
        s,
        g,
        {
            connectedAccount: x,
            theme: h,
            locale: _,
            userId: O,
            className: N,
            showMetadata: C,
            showInvisibleIcon: E,
        } = e;
    null == C && (C = !0);
    let S = null != (t = x.metadata) ? t : {},
        w = C ? (0, m.FI)(S[I.PC.CREATED_AT], _) : null,
        B = (0, a.dQu)(i.Z.unsafe_rawColors.TWITTER).hex(),
        D = P.intl.string(P.t["6H6h1t"]);
    if (C)
        switch (x.type) {
            case y.ABu.REDDIT:
                o = (0, p.oP)(S);
                break;
            case y.ABu.STEAM:
                o = (0, p.Dq)(S);
                break;
            case y.ABu.BLUESKY:
            case y.ABu.MASTODON:
            case y.ABu.TWITTER:
                (o = (0, p.rJ)(S)), "1" === S[I.PC.TWITTER_VERIFIED] && ((s = B), (D = P.intl.string(P.t.Jebrw8)));
                break;
            case y.ABu.PAYPAL:
                o = (0, p.li)(S);
                break;
            case y.ABu.EBAY:
                o = (0, p.ul)(S);
                break;
            case y.ABu.TIKTOK:
                o = (0, p.hf)(S);
        }
    let L = d.Z.get((0, f.rR)(x.type)),
        R = null == L || null == (n = L.getPlatformUserUrl) ? void 0 : n.call(L, x);
    null != E && E
        ? (g = (0, r.jsx)(a.kZF, {
              size: "md",
              color: "currentColor",
              className: l()(Z.__invalid_connectedAccountOpenIconContainer, Z.connectedAccountHideIcon),
          }))
        : null != R &&
          (g = (0, r.jsx)(a.eee, {
              href: R,
              "aria-label":
                  (null == L ? void 0 : L.name) != null
                      ? "".concat(L.name, ", ").concat(x.name, ", ").concat(P.intl.string(P.t.q5jLJC))
                      : "".concat(x.name, ", ").concat(P.intl.string(P.t.q5jLJC)),
              onClick: (e) => {
                  var n;
                  (n = x.type),
                      (0, u.yw)(y.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: O,
                      }),
                      (0, v.q)(
                          {
                              href: R,
                              trusted: (null == L ? void 0 : L.type) !== y.ABu.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, r.jsx)(j.Z, {
                  className: Z.connectedAccountOpenIcon,
                  direction: j.Z.Directions.RIGHT,
              }),
          }));
    let U = (0, a.dQu)(i.Z.colors.INTERACTIVE_MUTED).hex(),
        M = (0, a.dQu)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
        k = x.verified
            ? (0, r.jsx)(b.Z, {
                  className: Z.connectedAccountVerifiedIcon,
                  color: null != s ? s : U,
                  forcedIconColor: M,
                  size: 16,
                  tooltipText: D,
              })
            : null;
    return (0, r.jsxs)("li", {
        className: l()(
            Z.connectedAccountContainer,
            (null != o && o.length > 0) || null != w ? Z.connectedAccountContainerWithMetadata : null,
            N,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: Z.connectedAccount,
                children: [
                    (0, r.jsx)(a.ua7, {
                        text: null == L ? void 0 : L.name,
                        children: (e) =>
                            (0, r.jsx)(
                                "img",
                                A(T({}, e), {
                                    alt: P.intl.formatToPlainString(P.t.rtm15O, { name: null == L ? void 0 : L.name }),
                                    className: Z.connectedAccountIcon,
                                    src: (0, c.wj)(h)
                                        ? null == L
                                            ? void 0
                                            : L.icon.darkSVG
                                        : null == L
                                          ? void 0
                                          : L.icon.lightSVG,
                                }),
                            ),
                    }),
                    (0, r.jsxs)("div", {
                        className: Z.connectedAccountNameContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: Z.connectedAccountName,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: Z.connectedAccountNameTextContainer,
                                        children: [
                                            (0, r.jsx)(a.ua7, {
                                                overflowOnly: !0,
                                                text: x.name,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        a.Text,
                                                        A(T({}, e), {
                                                            variant: "text-sm/medium",
                                                            color: "interactive-active",
                                                            className: Z.connectedAccountNameText,
                                                            children: x.name,
                                                        }),
                                                    ),
                                            }),
                                            k,
                                        ],
                                    }),
                                    g,
                                ],
                            }),
                            null != w
                                ? (0, r.jsx)(a.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      children: P.intl.format(P.t["9rfonp"], { date: w }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != o && o.length > 0
                ? (0, r.jsx)("div", {
                      className: Z.connectedAccountChildren,
                      children: o,
                  })
                : null,
        ],
    });
}
function C(e) {
    let { applicationRoleConnection: n, className: t, locale: o, onApplicationClicked: i, selectedGuildId: c } = e,
        d = (0, p.rm)(n, void 0, o),
        u = () => {
            null == i || i(),
                (0, g.transitionToGlobalDiscovery)({
                    tab: O.GlobalDiscoveryTab.APPS,
                    applicationId: n.application.id,
                    newSessionState: {
                        entrypoint: { name: x.xF.APPLICATION_DIRECTORY_URL },
                        guildId: c,
                    },
                });
        };
    return (0, r.jsxs)("li", {
        className: l()(
            Z.connectedAccountContainer,
            null != d && d.length > 0 ? Z.connectedAccountContainerWithMetadata : null,
            t,
        ),
        children: [
            (0, r.jsx)("div", {
                className: Z.connectedAccount,
                children: (0, r.jsxs)(a.P3F, {
                    className: l()(Z.connectedAccountNameContainer, Z.connectedAccountNameContainerClickable),
                    onClick: u,
                    children: [
                        null != n.platform_name
                            ? (0, r.jsx)(a.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-normal",
                                  children: n.platform_name,
                              })
                            : null,
                        null != n.platform_username
                            ? (0, r.jsx)("div", {
                                  className: Z.connectedAccountName,
                                  children: (0, r.jsx)("div", {
                                      className: Z.connectedAccountNameTextContainer,
                                      children: (0, r.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-active",
                                          className: Z.connectedAccountNameText,
                                          children: n.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != d && d.length > 0
                ? (0, r.jsx)("div", {
                      className: l()(Z.connectedAccountChildren, Z.connectedAccountChildrenNoIcon),
                      children: d,
                  })
                : null,
            (0, r.jsx)("div", {
                children: (0, r.jsx)(a.P3F, {
                    className: Z.connectedAccountPoweredBy,
                    onClick: u,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: P.intl.format(P.t.zIT9YG, {
                            applicationHook: () =>
                                (0, r.jsxs)("div", {
                                    className: Z.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, r.jsx)(s.Z, {
                                                  user: new h.Z(n.application.bot),
                                                  size: a.EFr.SIZE_16,
                                              })
                                            : null,
                                        (0, r.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: n.application.name,
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
function E(e) {
    let { connectedAccounts: n, locale: t, className: o, userId: i } = e,
        { theme: c } = (0, _.z)();
    if (null == n || 0 === n.length) return null;
    let a = n.map((e) =>
            (0, r.jsx)(
                N,
                {
                    connectedAccount: e,
                    theme: c,
                    locale: t,
                    userId: i,
                },
                "".concat(e.type, ":").concat(e.id),
            ),
        ),
        s = [],
        d = [];
    for (let e = 0; e < a.length; e++) {
        let n = a[e];
        e % 2 == 0 ? s.push(n) : d.push(n);
    }
    return (0, r.jsxs)("ul", {
        className: l()(Z.connectedAccounts, o),
        children: [
            (0, r.jsx)("div", {
                className: Z.connectedAccountsColumn,
                children: s,
            }),
            (0, r.jsx)("div", {
                className: Z.connectedAccountsColumn,
                children: d,
            }),
        ],
    });
}
