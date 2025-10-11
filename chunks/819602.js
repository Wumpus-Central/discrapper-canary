t.d(n, {
    E3: () => A,
    ZP: () => S,
    tH: () => E,
}),
    t(539854);
var l = t(951288);
t(647438);
var i = t(120356),
    r = t.n(i),
    o = t(692547),
    s = t(28664),
    a = t(780384),
    c = t(481060),
    d = t(99690),
    u = t(726542),
    m = t(367907),
    p = t(122021),
    f = t(275759),
    h = t(888496),
    x = t(753194),
    j = t(749681),
    v = t(258971),
    g = t(598077),
    b = t(671533),
    y = t(49012),
    I = t(652853),
    Z = t(981631),
    O = t(856651),
    N = t(49898),
    P = t(388032),
    T = t(455392);
function A(e) {
    var n, t;
    let i,
        d,
        j,
        {
            connectedAccount: v,
            theme: g,
            locale: I,
            userId: N,
            className: A,
            showMetadata: E,
            showInvisibleIcon: S,
        } = e;
    null == E && (E = !0);
    let C = null != (t = v.metadata) ? t : {},
        _ = E ? (0, f.FI)(C[O.PC.CREATED_AT], I) : null,
        w = (0, c.dQu)(o.Z.unsafe_rawColors.TWITTER).hex(),
        D = P.intl.string(P.t["6H6h1t"]);
    if (E)
        switch (v.type) {
            case Z.ABu.REDDIT:
                i = (0, h.oP)(C);
                break;
            case Z.ABu.STEAM:
                i = (0, h.Dq)(C);
                break;
            case Z.ABu.BLUESKY:
            case Z.ABu.MASTODON:
            case Z.ABu.TWITTER:
                (i = (0, h.rJ)(C)), "1" === C[O.PC.TWITTER_VERIFIED] && ((d = w), (D = P.intl.string(P.t.Jebrw8)));
                break;
            case Z.ABu.PAYPAL:
                i = (0, h.li)(C);
                break;
            case Z.ABu.EBAY:
                i = (0, h.ul)(C);
                break;
            case Z.ABu.TIKTOK:
                i = (0, h.hf)(C);
        }
    let R = u.Z.get((0, p.rR)(v.type)),
        L = null == R || null == (n = R.getPlatformUserUrl) ? void 0 : n.call(R, v);
    null != S && S
        ? (j = (0, l.jsx)(c.kZF, {
              size: "md",
              color: "currentColor",
              className: r()(T.__invalid_connectedAccountOpenIconContainer, T.connectedAccountHideIcon),
          }))
        : null != L &&
          (j = (0, l.jsx)(c.Anchor, {
              href: L,
              "aria-label":
                  (null == R ? void 0 : R.name) != null
                      ? "".concat(R.name, ", ").concat(v.name, ", ").concat(P.intl.string(P.t.q5jLJC))
                      : "".concat(v.name, ", ").concat(P.intl.string(P.t.q5jLJC)),
              onClick: (e) => {
                  var n;
                  (n = v.type),
                      (0, m.yw)(Z.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: N,
                      }),
                      (0, y.q)(
                          {
                              href: L,
                              trusted: (null == R ? void 0 : R.type) !== Z.ABu.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, l.jsx)(b.Z, {
                  className: T.connectedAccountOpenIcon,
                  direction: b.Z.Directions.RIGHT,
              }),
          }));
    let M = (0, c.dQu)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        U = (0, c.dQu)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        B = v.verified
            ? (0, l.jsx)(x.Z, {
                  className: T.connectedAccountVerifiedIcon,
                  color: null != d ? d : M,
                  forcedIconColor: U,
                  size: 16,
                  tooltipText: D,
              })
            : null;
    return (0, l.jsxs)("li", {
        className: r()(
            T.connectedAccountContainer,
            (null != i && i.length > 0) || null != _ ? T.connectedAccountContainerWithMetadata : null,
            A,
        ),
        children: [
            (0, l.jsxs)("div", {
                className: T.connectedAccount,
                children: [
                    (0, l.jsx)(s.u, {
                        __unsupportedReactNodeAsText: null == R ? void 0 : R.name,
                        children: (0, l.jsx)("img", {
                            alt: P.intl.formatToPlainString(P.t.rtm15O, { name: null == R ? void 0 : R.name }),
                            className: T.connectedAccountIcon,
                            src: (0, a.wj)(g)
                                ? null == R
                                    ? void 0
                                    : R.icon.darkSVG
                                : null == R
                                  ? void 0
                                  : R.icon.lightSVG,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: T.connectedAccountNameContainer,
                        children: [
                            (0, l.jsxs)("div", {
                                className: T.connectedAccountName,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: T.connectedAccountNameTextContainer,
                                        children: [
                                            (0, l.jsx)(s.u, {
                                                overflowOnly: !0,
                                                text: v.name,
                                                children: (0, l.jsx)(c.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "interactive-active",
                                                    className: T.connectedAccountNameText,
                                                    children: v.name,
                                                }),
                                            }),
                                            B,
                                        ],
                                    }),
                                    j,
                                ],
                            }),
                            null != _
                                ? (0, l.jsx)(c.Text, {
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
                      className: T.connectedAccountChildren,
                      children: i,
                  })
                : null,
        ],
    });
}
function E(e) {
    let { applicationRoleConnection: n, className: t, locale: i, onApplicationClicked: o, selectedGuildId: s } = e,
        a = (0, h.rm)(n, i),
        u = () => {
            null == o || o(),
                (0, j.transitionToGlobalDiscovery)({
                    tab: N.GlobalDiscoveryTab.APPS,
                    applicationId: n.application.id,
                    newSessionState: {
                        entrypoint: { name: v.xF.APPLICATION_DIRECTORY_URL },
                        guildId: s,
                    },
                });
        };
    return (0, l.jsxs)("li", {
        className: r()(
            T.connectedAccountContainer,
            null != a && a.length > 0 ? T.connectedAccountContainerWithMetadata : null,
            t,
        ),
        children: [
            (0, l.jsx)("div", {
                className: T.connectedAccount,
                children: (0, l.jsxs)(c.P3F, {
                    className: r()(T.connectedAccountNameContainer, T.connectedAccountNameContainerClickable),
                    onClick: u,
                    children: [
                        null != n.platform_name
                            ? (0, l.jsx)(c.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-normal",
                                  children: n.platform_name,
                              })
                            : null,
                        null != n.platform_username
                            ? (0, l.jsx)("div", {
                                  className: T.connectedAccountName,
                                  children: (0, l.jsx)("div", {
                                      className: T.connectedAccountNameTextContainer,
                                      children: (0, l.jsx)(c.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-active",
                                          className: T.connectedAccountNameText,
                                          children: n.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != a && a.length > 0
                ? (0, l.jsx)("div", {
                      className: r()(T.connectedAccountChildren, T.connectedAccountChildrenNoIcon),
                      children: a,
                  })
                : null,
            (0, l.jsx)("div", {
                children: (0, l.jsx)(c.P3F, {
                    className: T.connectedAccountPoweredBy,
                    onClick: u,
                    children: (0, l.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: P.intl.format(P.t.zIT9YG, {
                            applicationHook: () =>
                                (0, l.jsxs)("div", {
                                    className: T.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, l.jsx)(d.Z, {
                                                  user: new g.default(n.application.bot),
                                                  size: c.EFr.SIZE_16,
                                              })
                                            : null,
                                        (0, l.jsx)(c.Text, {
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
function S(e) {
    let { connectedAccounts: n, locale: t, className: i, userId: o } = e,
        { theme: s } = (0, I.z)();
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
        className: r()(T.connectedAccounts, i),
        children: [
            (0, l.jsx)("div", {
                className: T.connectedAccountsColumn,
                children: c,
            }),
            (0, l.jsx)("div", {
                className: T.connectedAccountsColumn,
                children: d,
            }),
        ],
    });
}
