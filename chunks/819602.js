t.d(n, {
    E3: () => A,
    ZP: () => C,
    tH: () => E,
}),
    t(539854);
var r = t(951288);
t(647438);
var l = t(120356),
    o = t.n(l),
    i = t(692547),
    c = t(780384),
    s = t(481060),
    a = t(99690),
    d = t(726542),
    u = t(367907),
    f = t(122021),
    m = t(275759),
    p = t(888496),
    h = t(753194),
    x = t(749681),
    b = t(258971),
    j = t(598077),
    g = t(671533),
    v = t(49012),
    y = t(652853),
    O = t(981631),
    I = t(856651),
    _ = t(49898),
    Z = t(388032),
    P = t(455392);
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
function N(e, n) {
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
function A(e) {
    var n, t;
    let l,
        a,
        x,
        {
            connectedAccount: b,
            theme: j,
            locale: y,
            userId: _,
            className: A,
            showMetadata: E,
            showInvisibleIcon: C,
        } = e;
    null == E && (E = !0);
    let S = null != (t = b.metadata) ? t : {},
        w = E ? (0, m.FI)(S[I.PC.CREATED_AT], y) : null,
        D = (0, s.dQu)(i.Z.unsafe_rawColors.TWITTER).hex(),
        L = Z.intl.string(Z.t["6H6h1t"]);
    if (E)
        switch (b.type) {
            case O.ABu.REDDIT:
                l = (0, p.oP)(S);
                break;
            case O.ABu.STEAM:
                l = (0, p.Dq)(S);
                break;
            case O.ABu.BLUESKY:
            case O.ABu.MASTODON:
            case O.ABu.TWITTER:
                (l = (0, p.rJ)(S)), "1" === S[I.PC.TWITTER_VERIFIED] && ((a = D), (L = Z.intl.string(Z.t.Jebrw8)));
                break;
            case O.ABu.PAYPAL:
                l = (0, p.li)(S);
                break;
            case O.ABu.EBAY:
                l = (0, p.ul)(S);
                break;
            case O.ABu.TIKTOK:
                l = (0, p.hf)(S);
        }
    let B = d.Z.get((0, f.rR)(b.type)),
        R = null == B || null == (n = B.getPlatformUserUrl) ? void 0 : n.call(B, b);
    null != C && C
        ? (x = (0, r.jsx)(s.kZF, {
              size: "md",
              color: "currentColor",
              className: o()(P.__invalid_connectedAccountOpenIconContainer, P.connectedAccountHideIcon),
          }))
        : null != R &&
          (x = (0, r.jsx)(s.eee, {
              href: R,
              "aria-label":
                  (null == B ? void 0 : B.name) != null
                      ? "".concat(B.name, ", ").concat(b.name, ", ").concat(Z.intl.string(Z.t.q5jLJC))
                      : "".concat(b.name, ", ").concat(Z.intl.string(Z.t.q5jLJC)),
              onClick: (e) => {
                  var n;
                  (n = b.type),
                      (0, u.yw)(O.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: _,
                      }),
                      (0, v.q)(
                          {
                              href: R,
                              trusted: (null == B ? void 0 : B.type) !== O.ABu.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, r.jsx)(g.Z, {
                  className: P.connectedAccountOpenIcon,
                  direction: g.Z.Directions.RIGHT,
              }),
          }));
    let U = (0, s.dQu)(i.Z.colors.INTERACTIVE_MUTED).hex(),
        M = (0, s.dQu)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
        k = b.verified
            ? (0, r.jsx)(h.Z, {
                  className: P.connectedAccountVerifiedIcon,
                  color: null != a ? a : U,
                  forcedIconColor: M,
                  size: 16,
                  tooltipText: L,
              })
            : null;
    return (0, r.jsxs)("li", {
        className: o()(
            P.connectedAccountContainer,
            (null != l && l.length > 0) || null != w ? P.connectedAccountContainerWithMetadata : null,
            A,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: P.connectedAccount,
                children: [
                    (0, r.jsx)(s.ua7, {
                        text: null == B ? void 0 : B.name,
                        children: (e) =>
                            (0, r.jsx)(
                                "img",
                                N(T({}, e), {
                                    alt: Z.intl.formatToPlainString(Z.t.rtm15O, { name: null == B ? void 0 : B.name }),
                                    className: P.connectedAccountIcon,
                                    src: (0, c.wj)(j)
                                        ? null == B
                                            ? void 0
                                            : B.icon.darkSVG
                                        : null == B
                                          ? void 0
                                          : B.icon.lightSVG,
                                }),
                            ),
                    }),
                    (0, r.jsxs)("div", {
                        className: P.connectedAccountNameContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: P.connectedAccountName,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: P.connectedAccountNameTextContainer,
                                        children: [
                                            (0, r.jsx)(s.ua7, {
                                                overflowOnly: !0,
                                                text: b.name,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        s.Text,
                                                        N(T({}, e), {
                                                            variant: "text-sm/medium",
                                                            color: "interactive-active",
                                                            className: P.connectedAccountNameText,
                                                            children: b.name,
                                                        }),
                                                    ),
                                            }),
                                            k,
                                        ],
                                    }),
                                    x,
                                ],
                            }),
                            null != w
                                ? (0, r.jsx)(s.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      children: Z.intl.format(Z.t["9rfonp"], { date: w }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != l && l.length > 0
                ? (0, r.jsx)("div", {
                      className: P.connectedAccountChildren,
                      children: l,
                  })
                : null,
        ],
    });
}
function E(e) {
    let { applicationRoleConnection: n, className: t, locale: l, onApplicationClicked: i, selectedGuildId: c } = e,
        d = (0, p.rm)(n, void 0, l),
        u = () => {
            null == i || i(),
                (0, x.transitionToGlobalDiscovery)({
                    tab: _.GlobalDiscoveryTab.APPS,
                    applicationId: n.application.id,
                    newSessionState: {
                        entrypoint: { name: b.xF.APPLICATION_DIRECTORY_URL },
                        guildId: c,
                    },
                });
        };
    return (0, r.jsxs)("li", {
        className: o()(
            P.connectedAccountContainer,
            null != d && d.length > 0 ? P.connectedAccountContainerWithMetadata : null,
            t,
        ),
        children: [
            (0, r.jsx)("div", {
                className: P.connectedAccount,
                children: (0, r.jsxs)(s.P3F, {
                    className: o()(P.connectedAccountNameContainer, P.connectedAccountNameContainerClickable),
                    onClick: u,
                    children: [
                        null != n.platform_name
                            ? (0, r.jsx)(s.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-normal",
                                  children: n.platform_name,
                              })
                            : null,
                        null != n.platform_username
                            ? (0, r.jsx)("div", {
                                  className: P.connectedAccountName,
                                  children: (0, r.jsx)("div", {
                                      className: P.connectedAccountNameTextContainer,
                                      children: (0, r.jsx)(s.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-active",
                                          className: P.connectedAccountNameText,
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
                      className: o()(P.connectedAccountChildren, P.connectedAccountChildrenNoIcon),
                      children: d,
                  })
                : null,
            (0, r.jsx)("div", {
                children: (0, r.jsx)(s.P3F, {
                    className: P.connectedAccountPoweredBy,
                    onClick: u,
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: Z.intl.format(Z.t.zIT9YG, {
                            applicationHook: () =>
                                (0, r.jsxs)("div", {
                                    className: P.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, r.jsx)(a.Z, {
                                                  user: new j.Z(n.application.bot),
                                                  size: s.EFr.SIZE_16,
                                              })
                                            : null,
                                        (0, r.jsx)(s.Text, {
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
function C(e) {
    let { connectedAccounts: n, locale: t, className: l, userId: i } = e,
        { theme: c } = (0, y.z)();
    if (null == n || 0 === n.length) return null;
    let s = n.map((e) =>
            (0, r.jsx)(
                A,
                {
                    connectedAccount: e,
                    theme: c,
                    locale: t,
                    userId: i,
                },
                "".concat(e.type, ":").concat(e.id),
            ),
        ),
        a = [],
        d = [];
    for (let e = 0; e < s.length; e++) {
        let n = s[e];
        e % 2 == 0 ? a.push(n) : d.push(n);
    }
    return (0, r.jsxs)("ul", {
        className: o()(P.connectedAccounts, l),
        children: [
            (0, r.jsx)("div", {
                className: P.connectedAccountsColumn,
                children: a,
            }),
            (0, r.jsx)("div", {
                className: P.connectedAccountsColumn,
                children: d,
            }),
        ],
    });
}
