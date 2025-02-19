n.d(t, {
    E3: () => x,
    OA: () => C,
    tH: () => g
}),
    n(653041);
var r = n(200651),
    c = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(692547),
    i = n(780384),
    s = n(481060),
    u = n(99690),
    d = n(726542),
    p = n(367907),
    O = n(132871),
    T = n(147890),
    E = n(122021),
    m = n(275759),
    A = n(888496),
    v = n(753194),
    _ = n(598077),
    b = n(671533),
    N = n(49012),
    I = n(981631),
    f = n(856651),
    y = n(388032),
    P = n(313845);
function h(e) {
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
function S(e, t) {
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
function x(e) {
    var t, n;
    let c,
        l,
        u,
        { connectedAccount: O, theme: T, locale: _, userId: x, className: g, showMetadata: C, showInvisibleIcon: j } = e;
    null == C && (C = !0);
    let L = null !== (n = O.metadata) && void 0 !== n ? n : {},
        R = C ? (0, m.FI)(L[f.PC.CREATED_AT], _) : null,
        D = (0, s.dQu)(o.Z.unsafe_rawColors.TWITTER).hex(),
        w = y.NW.string(y.t['6H6h1t']);
    if (C)
        switch (O.type) {
            case I.ABu.REDDIT:
                c = (0, A.oP)(L);
                break;
            case I.ABu.STEAM:
                c = (0, A.Dq)(L);
                break;
            case I.ABu.BLUESKY:
            case I.ABu.MASTODON:
            case I.ABu.TWITTER:
                (c = (0, A.rJ)(L)), '1' === L[f.PC.TWITTER_VERIFIED] && ((l = D), (w = y.NW.string(y.t.Jebrw8)));
                break;
            case I.ABu.PAYPAL:
                c = (0, A.li)(L);
                break;
            case I.ABu.EBAY:
                c = (0, A.ul)(L);
                break;
            case I.ABu.TIKTOK:
                c = (0, A.hf)(L);
        }
    let U = d.Z.get((0, E.rR)(O.type)),
        G = null == U ? void 0 : null === (t = U.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(U, O);
    null != j && j
        ? (u = (0, r.jsx)(s.kZF, {
              size: 'md',
              color: 'currentColor',
              className: a()(P.__invalid_connectedAccountOpenIconContainer, P.connectedAccountHideIcon)
          }))
        : null != G &&
          (u = (0, r.jsx)(s.eee, {
              href: G,
              onClick: (e) => {
                  var t;
                  (t = O.type),
                      (0, p.yw)(I.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: x
                      }),
                      (0, N.q)(
                          {
                              href: G,
                              trusted: (null == U ? void 0 : U.type) !== I.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, r.jsx)(b.Z, {
                  className: P.connectedAccountOpenIcon,
                  direction: b.Z.Directions.RIGHT
              })
          }));
    let M = (0, s.dQu)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        B = (0, s.dQu)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        W = O.verified
            ? (0, r.jsx)(v.Z, {
                  className: P.connectedAccountVerifiedIcon,
                  color: null != l ? l : M,
                  forcedIconColor: B,
                  size: 16,
                  tooltipText: w
              })
            : null;
    return (0, r.jsxs)('div', {
        className: a()(P.connectedAccountContainer, (null != c && c.length > 0) || null != R ? P.connectedAccountContainerWithMetadata : null, g),
        children: [
            (0, r.jsxs)('div', {
                className: P.connectedAccount,
                children: [
                    (0, r.jsx)(s.ua7, {
                        text: null == U ? void 0 : U.name,
                        children: (e) =>
                            (0, r.jsx)(
                                'img',
                                S(h({}, e), {
                                    alt: y.NW.formatToPlainString(y.t.rtm15O, { name: null == U ? void 0 : U.name }),
                                    className: P.connectedAccountIcon,
                                    src: (0, i.wj)(T) ? (null == U ? void 0 : U.icon.darkSVG) : null == U ? void 0 : U.icon.lightSVG
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: P.connectedAccountNameContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: P.connectedAccountName,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: P.connectedAccountNameTextContainer,
                                        children: [
                                            (0, r.jsx)(s.ua7, {
                                                overflowOnly: !0,
                                                text: O.name,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        s.Text,
                                                        S(h({}, e), {
                                                            variant: 'text-sm/medium',
                                                            color: 'interactive-active',
                                                            className: P.connectedAccountNameText,
                                                            children: O.name
                                                        })
                                                    )
                                            }),
                                            W
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != R
                                ? (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: y.NW.format(y.t['9rfonp'], { date: R })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != c && c.length > 0
                ? (0, r.jsx)('div', {
                      className: P.connectedAccountChildren,
                      children: c
                  })
                : null
        ]
    });
}
function g(e) {
    let { applicationRoleConnection: t, className: n, locale: c, onApplicationClicked: l, selectedGuildId: o } = e,
        i = (0, A.rm)(t, void 0, c),
        d = () => {
            null == l || l(),
                (0, T.dx)({
                    view: O.eN.APPLICATION,
                    applicationId: t.application.id,
                    guildId: o,
                    entrypoint: { name: O.n3.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, r.jsxs)('div', {
        className: a()(P.connectedAccountContainer, null != i && i.length > 0 ? P.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, r.jsx)('div', {
                className: P.connectedAccount,
                children: (0, r.jsxs)(s.P3F, {
                    className: a()(P.connectedAccountNameContainer, P.connectedAccountNameContainerClickable),
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
                                  className: P.connectedAccountName,
                                  children: (0, r.jsx)('div', {
                                      className: P.connectedAccountNameTextContainer,
                                      children: (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'interactive-active',
                                          className: P.connectedAccountNameText,
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
                      className: a()(P.connectedAccountChildren, P.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, r.jsx)('div', {
                children: (0, r.jsx)(s.P3F, {
                    className: P.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: y.NW.format(y.t.zIT9YG, {
                            applicationHook: () =>
                                (0, r.jsxs)('div', {
                                    className: P.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, r.jsx)(u.Z, {
                                                  user: new _.Z(t.application.bot),
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
    let { connectedAccounts: n, theme: c, locale: l, className: o, userId: i } = e;
    if (null == n || 0 === n.length) return null;
    let s = n
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
                (0, r.jsx)(
                    x,
                    {
                        connectedAccount: e,
                        theme: c,
                        locale: l,
                        userId: i
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        p = [];
    for (let e = 0; e < s.length; e++) {
        let t = s[e];
        e % 2 == 0 ? u.push(t) : p.push(t);
    }
    return (0, r.jsxs)('div', {
        ref: t,
        className: a()(P.connectedAccounts, o),
        children: [
            (0, r.jsx)('div', {
                className: P.connectedAccountsColumn,
                children: u
            }),
            (0, r.jsx)('div', {
                className: P.connectedAccountsColumn,
                children: p
            })
        ]
    });
});
