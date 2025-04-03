n.d(t, {
    E3: () => S,
    OA: () => C,
    tH: () => g
}),
    n(653041);
var r = n(200651),
    c = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(692547),
    i = n(780384),
    s = n(481060),
    u = n(99690),
    d = n(726542),
    O = n(367907),
    T = n(122021),
    p = n(275759),
    m = n(888496),
    E = n(753194),
    b = n(749681),
    N = n(258971),
    A = n(598077),
    _ = n(671533),
    f = n(49012),
    y = n(981631),
    h = n(856651),
    v = n(49898),
    P = n(388032),
    I = n(797892);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
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
function S(e) {
    var t, n;
    let c,
        a,
        u,
        { connectedAccount: b, theme: N, locale: A, userId: v, className: S, showMetadata: g, showInvisibleIcon: C } = e;
    null == g && (g = !0);
    let D = null != (n = b.metadata) ? n : {},
        L = g ? (0, p.FI)(D[h.PC.CREATED_AT], A) : null,
        R = (0, s.dQu)(o.Z.unsafe_rawColors.TWITTER).hex(),
        w = P.NW.string(P.t['6H6h1t']);
    if (g)
        switch (b.type) {
            case y.ABu.REDDIT:
                c = (0, m.oP)(D);
                break;
            case y.ABu.STEAM:
                c = (0, m.Dq)(D);
                break;
            case y.ABu.BLUESKY:
            case y.ABu.MASTODON:
            case y.ABu.TWITTER:
                (c = (0, m.rJ)(D)), '1' === D[h.PC.TWITTER_VERIFIED] && ((a = R), (w = P.NW.string(P.t.Jebrw8)));
                break;
            case y.ABu.PAYPAL:
                c = (0, m.li)(D);
                break;
            case y.ABu.EBAY:
                c = (0, m.ul)(D);
                break;
            case y.ABu.TIKTOK:
                c = (0, m.hf)(D);
        }
    let U = d.Z.get((0, T.rR)(b.type)),
        G = null == U || null == (t = U.getPlatformUserUrl) ? void 0 : t.call(U, b);
    null != C && C
        ? (u = (0, r.jsx)(s.kZF, {
              size: 'md',
              color: 'currentColor',
              className: l()(I.__invalid_connectedAccountOpenIconContainer, I.connectedAccountHideIcon)
          }))
        : null != G &&
          (u = (0, r.jsx)(s.eee, {
              href: G,
              onClick: (e) => {
                  var t;
                  (t = b.type),
                      (0, O.yw)(y.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: v
                      }),
                      (0, f.q)(
                          {
                              href: G,
                              trusted: (null == U ? void 0 : U.type) !== y.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, r.jsx)(_.Z, {
                  className: I.connectedAccountOpenIcon,
                  direction: _.Z.Directions.RIGHT
              })
          }));
    let W = (0, s.dQu)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        M = (0, s.dQu)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        k = b.verified
            ? (0, r.jsx)(E.Z, {
                  className: I.connectedAccountVerifiedIcon,
                  color: null != a ? a : W,
                  forcedIconColor: M,
                  size: 16,
                  tooltipText: w
              })
            : null;
    return (0, r.jsxs)('div', {
        className: l()(I.connectedAccountContainer, (null != c && c.length > 0) || null != L ? I.connectedAccountContainerWithMetadata : null, S),
        children: [
            (0, r.jsxs)('div', {
                className: I.connectedAccount,
                children: [
                    (0, r.jsx)(s.ua7, {
                        text: null == U ? void 0 : U.name,
                        children: (e) =>
                            (0, r.jsx)(
                                'img',
                                j(x({}, e), {
                                    alt: P.NW.formatToPlainString(P.t.rtm15O, { name: null == U ? void 0 : U.name }),
                                    className: I.connectedAccountIcon,
                                    src: (0, i.wj)(N) ? (null == U ? void 0 : U.icon.darkSVG) : null == U ? void 0 : U.icon.lightSVG
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: I.connectedAccountNameContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: I.connectedAccountName,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: I.connectedAccountNameTextContainer,
                                        children: [
                                            (0, r.jsx)(s.ua7, {
                                                overflowOnly: !0,
                                                text: b.name,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        s.Text,
                                                        j(x({}, e), {
                                                            variant: 'text-sm/medium',
                                                            color: 'interactive-active',
                                                            className: I.connectedAccountNameText,
                                                            children: b.name
                                                        })
                                                    )
                                            }),
                                            k
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != L
                                ? (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: P.NW.format(P.t['9rfonp'], { date: L })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != c && c.length > 0
                ? (0, r.jsx)('div', {
                      className: I.connectedAccountChildren,
                      children: c
                  })
                : null
        ]
    });
}
function g(e) {
    let { applicationRoleConnection: t, className: n, locale: c, onApplicationClicked: a, selectedGuildId: o } = e,
        i = (0, m.rm)(t, void 0, c),
        d = () => {
            null == a || a(),
                (0, b.transitionToGlobalDiscovery)({
                    tab: v.GlobalDiscoveryTab.APPS,
                    applicationId: t.application.id,
                    newSessionState: {
                        entrypoint: { name: N.xF.APPLICATION_DIRECTORY_URL },
                        guildId: o
                    }
                });
        };
    return (0, r.jsxs)('div', {
        className: l()(I.connectedAccountContainer, null != i && i.length > 0 ? I.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, r.jsx)('div', {
                className: I.connectedAccount,
                children: (0, r.jsxs)(s.P3F, {
                    className: l()(I.connectedAccountNameContainer, I.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != t.platform_name
                            ? (0, r.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: t.platform_name
                              })
                            : null,
                        null != t.platform_username
                            ? (0, r.jsx)('div', {
                                  className: I.connectedAccountName,
                                  children: (0, r.jsx)('div', {
                                      className: I.connectedAccountNameTextContainer,
                                      children: (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'interactive-active',
                                          className: I.connectedAccountNameText,
                                          children: t.platform_username
                                      })
                                  })
                              })
                            : null
                    ]
                })
            }),
            null != i && i.length > 0
                ? (0, r.jsx)('div', {
                      className: l()(I.connectedAccountChildren, I.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, r.jsx)('div', {
                children: (0, r.jsx)(s.P3F, {
                    className: I.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: P.NW.format(P.t.zIT9YG, {
                            applicationHook: () =>
                                (0, r.jsxs)('div', {
                                    className: I.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, r.jsx)(u.Z, {
                                                  user: new A.Z(t.application.bot),
                                                  size: s.EFr.SIZE_16
                                              })
                                            : null,
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-normal',
                                            children: t.application.name
                                        })
                                    ]
                                })
                        })
                    })
                })
            })
        ]
    });
}
let C = c.forwardRef(function (e, t) {
    let { connectedAccounts: n, theme: c, locale: a, className: o, userId: i } = e;
    if (null == n || 0 === n.length) return null;
    let s = n
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
                (0, r.jsx)(
                    S,
                    {
                        connectedAccount: e,
                        theme: c,
                        locale: a,
                        userId: i
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        O = [];
    for (let e = 0; e < s.length; e++) {
        let t = s[e];
        e % 2 == 0 ? u.push(t) : O.push(t);
    }
    return (0, r.jsxs)('div', {
        ref: t,
        className: l()(I.connectedAccounts, o),
        children: [
            (0, r.jsx)('div', {
                className: I.connectedAccountsColumn,
                children: u
            }),
            (0, r.jsx)('div', {
                className: I.connectedAccountsColumn,
                children: O
            })
        ]
    });
});
