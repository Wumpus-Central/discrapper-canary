t.d(n, {
    E3: () => A,
    ZP: () => C,
    tH: () => S,
}),
    t(539854);
var l = t(951288);
t(647438);
var i = t(120356),
    r = t.n(i),
    o = t(692547),
    s = t(780384),
    a = t(481060),
    c = t(99690),
    d = t(726542),
    u = t(367907),
    m = t(122021),
    p = t(275759),
    f = t(888496),
    h = t(753194),
    j = t(749681),
    x = t(258971),
    v = t(598077),
    g = t(671533),
    b = t(49012),
    y = t(652853),
    O = t(981631),
    I = t(856651),
    Z = t(49898),
    P = t(388032),
    N = t(536356);
function T(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function E(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
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
    let i,
        c,
        j,
        {
            connectedAccount: x,
            theme: v,
            locale: y,
            userId: Z,
            className: A,
            showMetadata: S,
            showInvisibleIcon: C,
        } = e;
    null == S && (S = !0);
    let w = null != (t = x.metadata) ? t : {},
        _ = S ? (0, p.FI)(w[I.PC.CREATED_AT], y) : null,
        D = (0, a.dQu)(o.Z.unsafe_rawColors.TWITTER).hex(),
        R = P.intl.string(P.t["6H6h1t"]);
    if (S)
        switch (x.type) {
            case O.ABu.REDDIT:
                i = (0, f.oP)(w);
                break;
            case O.ABu.STEAM:
                i = (0, f.Dq)(w);
                break;
            case O.ABu.BLUESKY:
            case O.ABu.MASTODON:
            case O.ABu.TWITTER:
                (i = (0, f.rJ)(w)), "1" === w[I.PC.TWITTER_VERIFIED] && ((c = D), (R = P.intl.string(P.t.Jebrw8)));
                break;
            case O.ABu.PAYPAL:
                i = (0, f.li)(w);
                break;
            case O.ABu.EBAY:
                i = (0, f.ul)(w);
                break;
            case O.ABu.TIKTOK:
                i = (0, f.hf)(w);
        }
    let L = d.Z.get((0, m.rR)(x.type)),
        M = null == L || null == (n = L.getPlatformUserUrl) ? void 0 : n.call(L, x);
    null != C && C
        ? (j = (0, l.jsx)(a.kZF, {
              size: "md",
              color: "currentColor",
              className: r()(N.__invalid_connectedAccountOpenIconContainer, N.connectedAccountHideIcon),
          }))
        : null != M &&
          (j = (0, l.jsx)(a.eee, {
              href: M,
              "aria-label":
                  (null == L ? void 0 : L.name) != null
                      ? "".concat(L.name, ", ").concat(x.name, ", ").concat(P.intl.string(P.t.q5jLJC))
                      : "".concat(x.name, ", ").concat(P.intl.string(P.t.q5jLJC)),
              onClick: (e) => {
                  var n;
                  (n = x.type),
                      (0, u.yw)(O.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: Z,
                      }),
                      (0, b.q)(
                          {
                              href: M,
                              trusted: (null == L ? void 0 : L.type) !== O.ABu.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, l.jsx)(g.Z, {
                  className: N.connectedAccountOpenIcon,
                  direction: g.Z.Directions.RIGHT,
              }),
          }));
    let U = (0, a.dQu)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        k = (0, a.dQu)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        B = x.verified
            ? (0, l.jsx)(h.Z, {
                  className: N.connectedAccountVerifiedIcon,
                  color: null != c ? c : U,
                  forcedIconColor: k,
                  size: 16,
                  tooltipText: R,
              })
            : null;
    return (0, l.jsxs)("li", {
        className: r()(
            N.connectedAccountContainer,
            (null != i && i.length > 0) || null != _ ? N.connectedAccountContainerWithMetadata : null,
            A,
        ),
        children: [
            (0, l.jsxs)("div", {
                className: N.connectedAccount,
                children: [
                    (0, l.jsx)(a.ua7, {
                        text: null == L ? void 0 : L.name,
                        children: (e) =>
                            (0, l.jsx)(
                                "img",
                                E(T({}, e), {
                                    alt: P.intl.formatToPlainString(P.t.rtm15O, { name: null == L ? void 0 : L.name }),
                                    className: N.connectedAccountIcon,
                                    src: (0, s.wj)(v)
                                        ? null == L
                                            ? void 0
                                            : L.icon.darkSVG
                                        : null == L
                                          ? void 0
                                          : L.icon.lightSVG,
                                }),
                            ),
                    }),
                    (0, l.jsxs)("div", {
                        className: N.connectedAccountNameContainer,
                        children: [
                            (0, l.jsxs)("div", {
                                className: N.connectedAccountName,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: N.connectedAccountNameTextContainer,
                                        children: [
                                            (0, l.jsx)(a.ua7, {
                                                overflowOnly: !0,
                                                text: x.name,
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        a.Text,
                                                        E(T({}, e), {
                                                            variant: "text-sm/medium",
                                                            color: "interactive-active",
                                                            className: N.connectedAccountNameText,
                                                            children: x.name,
                                                        }),
                                                    ),
                                            }),
                                            B,
                                        ],
                                    }),
                                    j,
                                ],
                            }),
                            null != _
                                ? (0, l.jsx)(a.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      children: P.intl.format(P.t["9rfonp"], { date: _ }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != i && i.length > 0
                ? (0, l.jsx)("div", {
                      className: N.connectedAccountChildren,
                      children: i,
                  })
                : null,
        ],
    });
}
function S(e) {
    let { applicationRoleConnection: n, className: t, locale: i, onApplicationClicked: o, selectedGuildId: s } = e,
        d = (0, f.rm)(n, i),
        u = () => {
            null == o || o(),
                (0, j.transitionToGlobalDiscovery)({
                    tab: Z.GlobalDiscoveryTab.APPS,
                    applicationId: n.application.id,
                    newSessionState: {
                        entrypoint: { name: x.xF.APPLICATION_DIRECTORY_URL },
                        guildId: s,
                    },
                });
        };
    return (0, l.jsxs)("li", {
        className: r()(
            N.connectedAccountContainer,
            null != d && d.length > 0 ? N.connectedAccountContainerWithMetadata : null,
            t,
        ),
        children: [
            (0, l.jsx)("div", {
                className: N.connectedAccount,
                children: (0, l.jsxs)(a.P3F, {
                    className: r()(N.connectedAccountNameContainer, N.connectedAccountNameContainerClickable),
                    onClick: u,
                    children: [
                        null != n.platform_name
                            ? (0, l.jsx)(a.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-normal",
                                  children: n.platform_name,
                              })
                            : null,
                        null != n.platform_username
                            ? (0, l.jsx)("div", {
                                  className: N.connectedAccountName,
                                  children: (0, l.jsx)("div", {
                                      className: N.connectedAccountNameTextContainer,
                                      children: (0, l.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-active",
                                          className: N.connectedAccountNameText,
                                          children: n.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != d && d.length > 0
                ? (0, l.jsx)("div", {
                      className: r()(N.connectedAccountChildren, N.connectedAccountChildrenNoIcon),
                      children: d,
                  })
                : null,
            (0, l.jsx)("div", {
                children: (0, l.jsx)(a.P3F, {
                    className: N.connectedAccountPoweredBy,
                    onClick: u,
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: P.intl.format(P.t.zIT9YG, {
                            applicationHook: () =>
                                (0, l.jsxs)("div", {
                                    className: N.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, l.jsx)(c.Z, {
                                                  user: new v.Z(n.application.bot),
                                                  size: a.EFr.SIZE_16,
                                              })
                                            : null,
                                        (0, l.jsx)(a.Text, {
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
    let { connectedAccounts: n, locale: t, className: i, userId: o } = e,
        { theme: s } = (0, y.z)();
    if (null == n || 0 === n.length) return null;
    let a = n.map((e) =>
            (0, l.jsx)(
                A,
                {
                    connectedAccount: e,
                    theme: s,
                    locale: t,
                    userId: o,
                },
                "".concat(e.type, ":").concat(e.id),
            ),
        ),
        c = [],
        d = [];
    for (let e = 0; e < a.length; e++) {
        let n = a[e];
        e % 2 == 0 ? c.push(n) : d.push(n);
    }
    return (0, l.jsxs)("ul", {
        className: r()(N.connectedAccounts, i),
        children: [
            (0, l.jsx)("div", {
                className: N.connectedAccountsColumn,
                children: c,
            }),
            (0, l.jsx)("div", {
                className: N.connectedAccountsColumn,
                children: d,
            }),
        ],
    });
}
