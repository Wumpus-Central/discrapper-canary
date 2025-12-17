t.d(n, {
    E3: () => P,
    ZP: () => _,
    tH: () => E,
}),
    t(539854);
var l = t(54381);
t(473749);
var i = t(120356),
    o = t.n(i),
    r = t(692547),
    a = t(28664),
    c = t(780384),
    s = t(481060),
    d = t(99690),
    u = t(726542),
    f = t(367907),
    m = t(122021),
    p = t(275759),
    x = t(888496),
    h = t(753194),
    v = t(749681),
    b = t(258971),
    j = t(598077),
    g = t(671533),
    I = t(49012),
    y = t(652853),
    Z = t(981631),
    O = t(856651),
    T = t(49898),
    N = t(388032),
    A = t(229688);
function P(e) {
    var n, t;
    let i,
        d,
        v,
        {
            connectedAccount: b,
            theme: j,
            locale: y,
            userId: T,
            className: P,
            showMetadata: E,
            showInvisibleIcon: _,
        } = e;
    null == E && (E = !0);
    let C = null != (t = b.metadata) ? t : {},
        S = E ? (0, p.FI)(C[O.PC.CREATED_AT], y) : null,
        w = (0, s.dQu)(r.Z.unsafe_rawColors.TWITTER).hex(),
        D = N.intl.string(N.t["6H6h1r"]);
    if (E)
        switch (b.type) {
            case Z.ABu.REDDIT:
                i = (0, x.oP)(C);
                break;
            case Z.ABu.STEAM:
                i = (0, x.Dq)(C);
                break;
            case Z.ABu.BLUESKY:
            case Z.ABu.MASTODON:
            case Z.ABu.TWITTER:
                (i = (0, x.rJ)(C)), "1" === C[O.PC.TWITTER_VERIFIED] && ((d = w), (D = N.intl.string(N.t.Jebrww)));
                break;
            case Z.ABu.PAYPAL:
                i = (0, x.li)(C);
                break;
            case Z.ABu.EBAY:
                i = (0, x.ul)(C);
                break;
            case Z.ABu.TIKTOK:
                i = (0, x.hf)(C);
        }
    let L = u.Z.get((0, m.rR)(b.type)),
        R = null == L || null == (n = L.getPlatformUserUrl) ? void 0 : n.call(L, b);
    null != _ && _
        ? (v = (0, l.jsx)(s.kZF, {
              size: "md",
              color: "currentColor",
              className: o()(A.__invalid_connectedAccountOpenIconContainer, A.connectedAccountHideIcon),
          }))
        : null != R &&
          (v = (0, l.jsx)(s.Anchor, {
              href: R,
              "aria-label":
                  (null == L ? void 0 : L.name) != null
                      ? "".concat(L.name, ", ").concat(b.name, ", ").concat(N.intl.string(N.t.q5jLJB))
                      : "".concat(b.name, ", ").concat(N.intl.string(N.t.q5jLJB)),
              onClick: (e) => {
                  var n;
                  (n = b.type),
                      (0, f.yw)(Z.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: T,
                      }),
                      (0, I.q)(
                          {
                              href: R,
                              trusted: (null == L ? void 0 : L.type) !== Z.ABu.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, l.jsx)(g.Z, {
                  className: A.connectedAccountOpenIcon,
                  direction: g.Z.Directions.RIGHT,
              }),
          }));
    let M = (0, s.dQu)(r.Z.colors.INTERACTIVE_MUTED).hex(),
        B = (0, s.dQu)(r.Z.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        U = b.verified
            ? (0, l.jsx)(h.Z, {
                  className: A.connectedAccountVerifiedIcon,
                  color: null != d ? d : M,
                  forcedIconColor: B,
                  size: 16,
                  tooltipText: D,
              })
            : null;
    return (0, l.jsxs)("li", {
        className: o()(
            A.connectedAccountContainer,
            (null != i && i.length > 0) || null != S ? A.connectedAccountContainerWithMetadata : null,
            P,
        ),
        children: [
            (0, l.jsxs)("div", {
                className: A.connectedAccount,
                children: [
                    (0, l.jsx)(a.u, {
                        __unsupportedReactNodeAsText: null == L ? void 0 : L.name,
                        children: (0, l.jsx)("img", {
                            alt: N.intl.formatToPlainString(N.t.rtm15P, { name: null == L ? void 0 : L.name }),
                            className: A.connectedAccountIcon,
                            src: (0, c.wj)(j)
                                ? null == L
                                    ? void 0
                                    : L.icon.darkSVG
                                : null == L
                                  ? void 0
                                  : L.icon.lightSVG,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: A.connectedAccountNameContainer,
                        children: [
                            (0, l.jsxs)("div", {
                                className: A.connectedAccountName,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: A.connectedAccountNameTextContainer,
                                        children: [
                                            (0, l.jsx)(a.u, {
                                                overflowOnly: !0,
                                                text: b.name,
                                                children: (0, l.jsx)(s.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "interactive-text-active",
                                                    className: A.connectedAccountNameText,
                                                    children: b.name,
                                                }),
                                            }),
                                            U,
                                        ],
                                    }),
                                    v,
                                ],
                            }),
                            null != S
                                ? (0, l.jsx)(s.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: N.intl.format(N.t["9rfonh"], { date: S }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != i && i.length > 0
                ? (0, l.jsx)("div", {
                      className: A.connectedAccountChildren,
                      children: i,
                  })
                : null,
        ],
    });
}
function E(e) {
    let { applicationRoleConnection: n, className: t, locale: i, onApplicationClicked: r, selectedGuildId: a } = e,
        c = (0, x.rm)(n, i),
        u = () => {
            null == r || r(),
                (0, v.transitionToGlobalDiscovery)({
                    tab: T.GlobalDiscoveryTab.APPS,
                    applicationId: n.application.id,
                    newSessionState: {
                        entrypoint: { name: b.xF.APPLICATION_DIRECTORY_URL },
                        guildId: a,
                    },
                });
        };
    return (0, l.jsxs)("li", {
        className: o()(
            A.connectedAccountContainer,
            null != c && c.length > 0 ? A.connectedAccountContainerWithMetadata : null,
            t,
        ),
        children: [
            (0, l.jsx)("div", {
                className: A.connectedAccount,
                children: (0, l.jsxs)(s.P3F, {
                    className: o()(A.connectedAccountNameContainer, A.connectedAccountNameContainerClickable),
                    onClick: u,
                    children: [
                        null != n.platform_name
                            ? (0, l.jsx)(s.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-text-default",
                                  children: n.platform_name,
                              })
                            : null,
                        null != n.platform_username
                            ? (0, l.jsx)("div", {
                                  className: A.connectedAccountName,
                                  children: (0, l.jsx)("div", {
                                      className: A.connectedAccountNameTextContainer,
                                      children: (0, l.jsx)(s.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-text-active",
                                          className: A.connectedAccountNameText,
                                          children: n.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != c && c.length > 0
                ? (0, l.jsx)("div", {
                      className: o()(A.connectedAccountChildren, A.connectedAccountChildrenNoIcon),
                      children: c,
                  })
                : null,
            (0, l.jsx)("div", {
                children: (0, l.jsx)(s.P3F, {
                    className: A.connectedAccountPoweredBy,
                    onClick: u,
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: N.intl.format(N.t.zIT9YA, {
                            applicationHook: () =>
                                (0, l.jsxs)("div", {
                                    className: A.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, l.jsx)(d.Z, {
                                                  user: new j.Z(n.application.bot),
                                                  size: s.EFr.SIZE_16,
                                              })
                                            : null,
                                        (0, l.jsx)(s.Text, {
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
function _(e) {
    let { connectedAccounts: n, locale: t, className: i, userId: r } = e,
        { theme: a } = (0, y.z)();
    if (null == n || 0 === n.length) return null;
    let c = n.map((e) =>
            (0, l.jsx)(
                P,
                {
                    connectedAccount: e,
                    theme: a,
                    locale: t,
                    userId: r,
                },
                "".concat(e.type, ":").concat(e.id),
            ),
        ),
        s = [],
        d = [];
    for (let e = 0; e < c.length; e++) {
        let n = c[e];
        e % 2 == 0 ? s.push(n) : d.push(n);
    }
    return (0, l.jsxs)("ul", {
        className: o()(A.connectedAccounts, i),
        children: [
            (0, l.jsx)("div", {
                className: A.connectedAccountsColumn,
                children: s,
            }),
            (0, l.jsx)("div", {
                className: A.connectedAccountsColumn,
                children: d,
            }),
        ],
    });
}
