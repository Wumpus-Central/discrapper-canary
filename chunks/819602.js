t.d(n, {
    E3: () => T,
    ZP: () => E,
    tH: () => P,
}),
    t(539854);
var l = t(54381);
t(473749);
var i = t(120356),
    o = t.n(i),
    r = t(692547),
    s = t(28664),
    a = t(780384),
    c = t(481060),
    d = t(99690),
    u = t(726542),
    m = t(367907),
    p = t(122021),
    f = t(275759),
    x = t(888496),
    h = t(753194),
    v = t(749681),
    j = t(258971),
    g = t(598077),
    b = t(671533),
    I = t(49012),
    y = t(652853),
    _ = t(981631),
    Z = t(856651),
    O = t(49898),
    N = t(388032),
    A = t(455392);
function T(e) {
    var n, t;
    let i,
        d,
        v,
        {
            connectedAccount: j,
            theme: g,
            locale: y,
            userId: O,
            className: T,
            showMetadata: P,
            showInvisibleIcon: E,
        } = e;
    null == P && (P = !0);
    let C = null != (t = j.metadata) ? t : {},
        S = P ? (0, f.FI)(C[Z.PC.CREATED_AT], y) : null,
        w = (0, c.dQu)(r.Z.unsafe_rawColors.TWITTER).hex(),
        D = N.intl.string(N.t["6H6h1r"]);
    if (P)
        switch (j.type) {
            case _.ABu.REDDIT:
                i = (0, x.oP)(C);
                break;
            case _.ABu.STEAM:
                i = (0, x.Dq)(C);
                break;
            case _.ABu.BLUESKY:
            case _.ABu.MASTODON:
            case _.ABu.TWITTER:
                (i = (0, x.rJ)(C)), "1" === C[Z.PC.TWITTER_VERIFIED] && ((d = w), (D = N.intl.string(N.t.Jebrww)));
                break;
            case _.ABu.PAYPAL:
                i = (0, x.li)(C);
                break;
            case _.ABu.EBAY:
                i = (0, x.ul)(C);
                break;
            case _.ABu.TIKTOK:
                i = (0, x.hf)(C);
        }
    let R = u.Z.get((0, p.rR)(j.type)),
        L = null == R || null == (n = R.getPlatformUserUrl) ? void 0 : n.call(R, j);
    null != E && E
        ? (v = (0, l.jsx)(c.kZF, {
              size: "md",
              color: "currentColor",
              className: o()(A.__invalid_connectedAccountOpenIconContainer, A.connectedAccountHideIcon),
          }))
        : null != L &&
          (v = (0, l.jsx)(c.Anchor, {
              href: L,
              "aria-label":
                  (null == R ? void 0 : R.name) != null
                      ? "".concat(R.name, ", ").concat(j.name, ", ").concat(N.intl.string(N.t.q5jLJB))
                      : "".concat(j.name, ", ").concat(N.intl.string(N.t.q5jLJB)),
              onClick: (e) => {
                  var n;
                  (n = j.type),
                      (0, m.yw)(_.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: O,
                      }),
                      (0, I.q)(
                          {
                              href: L,
                              trusted: (null == R ? void 0 : R.type) !== _.ABu.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, l.jsx)(b.Z, {
                  className: A.connectedAccountOpenIcon,
                  direction: b.Z.Directions.RIGHT,
              }),
          }));
    let M = (0, c.dQu)(r.Z.colors.INTERACTIVE_MUTED).hex(),
        B = (0, c.dQu)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
        U = j.verified
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
            T,
        ),
        children: [
            (0, l.jsxs)("div", {
                className: A.connectedAccount,
                children: [
                    (0, l.jsx)(s.u, {
                        __unsupportedReactNodeAsText: null == R ? void 0 : R.name,
                        children: (0, l.jsx)("img", {
                            alt: N.intl.formatToPlainString(N.t.rtm15P, { name: null == R ? void 0 : R.name }),
                            className: A.connectedAccountIcon,
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
                        className: A.connectedAccountNameContainer,
                        children: [
                            (0, l.jsxs)("div", {
                                className: A.connectedAccountName,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: A.connectedAccountNameTextContainer,
                                        children: [
                                            (0, l.jsx)(s.u, {
                                                overflowOnly: !0,
                                                text: j.name,
                                                children: (0, l.jsx)(c.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "interactive-active",
                                                    className: A.connectedAccountNameText,
                                                    children: j.name,
                                                }),
                                            }),
                                            U,
                                        ],
                                    }),
                                    v,
                                ],
                            }),
                            null != S
                                ? (0, l.jsx)(c.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
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
function P(e) {
    let { applicationRoleConnection: n, className: t, locale: i, onApplicationClicked: r, selectedGuildId: s } = e,
        a = (0, x.rm)(n, i),
        u = () => {
            null == r || r(),
                (0, v.transitionToGlobalDiscovery)({
                    tab: O.GlobalDiscoveryTab.APPS,
                    applicationId: n.application.id,
                    newSessionState: {
                        entrypoint: { name: j.xF.APPLICATION_DIRECTORY_URL },
                        guildId: s,
                    },
                });
        };
    return (0, l.jsxs)("li", {
        className: o()(
            A.connectedAccountContainer,
            null != a && a.length > 0 ? A.connectedAccountContainerWithMetadata : null,
            t,
        ),
        children: [
            (0, l.jsx)("div", {
                className: A.connectedAccount,
                children: (0, l.jsxs)(c.P3F, {
                    className: o()(A.connectedAccountNameContainer, A.connectedAccountNameContainerClickable),
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
                                  className: A.connectedAccountName,
                                  children: (0, l.jsx)("div", {
                                      className: A.connectedAccountNameTextContainer,
                                      children: (0, l.jsx)(c.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-active",
                                          className: A.connectedAccountNameText,
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
                      className: o()(A.connectedAccountChildren, A.connectedAccountChildrenNoIcon),
                      children: a,
                  })
                : null,
            (0, l.jsx)("div", {
                children: (0, l.jsx)(c.P3F, {
                    className: A.connectedAccountPoweredBy,
                    onClick: u,
                    children: (0, l.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: N.intl.format(N.t.zIT9YA, {
                            applicationHook: () =>
                                (0, l.jsxs)("div", {
                                    className: A.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, l.jsx)(d.Z, {
                                                  user: new g.Z(n.application.bot),
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
function E(e) {
    let { connectedAccounts: n, locale: t, className: i, userId: r } = e,
        { theme: s } = (0, y.z)();
    if (null == n || 0 === n.length) return null;
    let a = n.map((e) =>
            (0, l.jsx)(
                T,
                {
                    connectedAccount: e,
                    theme: s,
                    locale: t,
                    userId: r,
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
        className: o()(A.connectedAccounts, i),
        children: [
            (0, l.jsx)("div", {
                className: A.connectedAccountsColumn,
                children: c,
            }),
            (0, l.jsx)("div", {
                className: A.connectedAccountsColumn,
                children: d,
            }),
        ],
    });
}
