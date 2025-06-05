n.d(t, {
    E3: () => C,
    ZP: () => D,
    tH: () => S
}),
    n(539854);
var c = n(255367),
    r = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(692547),
    i = n(780384),
    s = n(481060),
    u = n(99690),
    d = n(726542),
    O = n(367907),
    T = n(122021),
    m = n(275759),
    p = n(888496),
    E = n(753194),
    b = n(749681),
    A = n(258971),
    _ = n(598077),
    f = n(671533),
    v = n(49012),
    y = n(652853),
    N = n(981631),
    h = n(856651),
    P = n(49898),
    I = n(388032),
    x = n(797892);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            c.forEach(function (t) {
                var c;
                (c = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = c);
            });
    }
    return e;
}
function g(e, t) {
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
function C(e) {
    var t, n;
    let r,
        a,
        u,
        { connectedAccount: b, theme: A, locale: _, userId: y, className: P, showMetadata: C, showInvisibleIcon: S } = e;
    null == C && (C = !0);
    let D = null != (n = b.metadata) ? n : {},
        L = C ? (0, m.FI)(D[h.PC.CREATED_AT], _) : null,
        R = (0, s.dQu)(o.Z.unsafe_rawColors.TWITTER).hex(),
        w = I.intl.string(I.t['6H6h1t']);
    if (C)
        switch (b.type) {
            case N.ABu.REDDIT:
                r = (0, p.oP)(D);
                break;
            case N.ABu.STEAM:
                r = (0, p.Dq)(D);
                break;
            case N.ABu.BLUESKY:
            case N.ABu.MASTODON:
            case N.ABu.TWITTER:
                (r = (0, p.rJ)(D)), '1' === D[h.PC.TWITTER_VERIFIED] && ((a = R), (w = I.intl.string(I.t.Jebrw8)));
                break;
            case N.ABu.PAYPAL:
                r = (0, p.li)(D);
                break;
            case N.ABu.EBAY:
                r = (0, p.ul)(D);
                break;
            case N.ABu.TIKTOK:
                r = (0, p.hf)(D);
        }
    let U = d.Z.get((0, T.rR)(b.type)),
        G = null == U || null == (t = U.getPlatformUserUrl) ? void 0 : t.call(U, b);
    null != S && S
        ? (u = (0, c.jsx)(s.kZF, {
              size: 'md',
              color: 'currentColor',
              className: l()(x.__invalid_connectedAccountOpenIconContainer, x.connectedAccountHideIcon)
          }))
        : null != G &&
          (u = (0, c.jsx)(s.eee, {
              href: G,
              'aria-label': (null == U ? void 0 : U.name) != null ? ''.concat(U.name, ', ').concat(b.name, ', ').concat(I.intl.string(I.t.q5jLJC)) : ''.concat(b.name, ', ').concat(I.intl.string(I.t.q5jLJC)),
              onClick: (e) => {
                  var t;
                  (t = b.type),
                      (0, O.yw)(N.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: y
                      }),
                      (0, v.q)(
                          {
                              href: G,
                              trusted: (null == U ? void 0 : U.type) !== N.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(f.Z, {
                  className: x.connectedAccountOpenIcon,
                  direction: f.Z.Directions.RIGHT
              })
          }));
    let M = (0, s.dQu)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        k = (0, s.dQu)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        B = b.verified
            ? (0, c.jsx)(E.Z, {
                  className: x.connectedAccountVerifiedIcon,
                  color: null != a ? a : M,
                  forcedIconColor: k,
                  size: 16,
                  tooltipText: w
              })
            : null;
    return (0, c.jsxs)('div', {
        className: l()(x.connectedAccountContainer, (null != r && r.length > 0) || null != L ? x.connectedAccountContainerWithMetadata : null, P),
        children: [
            (0, c.jsxs)('div', {
                className: x.connectedAccount,
                children: [
                    (0, c.jsx)(s.ua7, {
                        text: null == U ? void 0 : U.name,
                        children: (e) =>
                            (0, c.jsx)(
                                'img',
                                g(j({}, e), {
                                    alt: I.intl.formatToPlainString(I.t.rtm15O, { name: null == U ? void 0 : U.name }),
                                    className: x.connectedAccountIcon,
                                    src: (0, i.wj)(A) ? (null == U ? void 0 : U.icon.darkSVG) : null == U ? void 0 : U.icon.lightSVG
                                })
                            )
                    }),
                    (0, c.jsxs)('div', {
                        className: x.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)('div', {
                                className: x.connectedAccountName,
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: x.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(s.ua7, {
                                                overflowOnly: !0,
                                                text: b.name,
                                                children: (e) =>
                                                    (0, c.jsx)(
                                                        s.Text,
                                                        g(j({}, e), {
                                                            variant: 'text-sm/medium',
                                                            color: 'interactive-active',
                                                            className: x.connectedAccountNameText,
                                                            children: b.name
                                                        })
                                                    )
                                            }),
                                            B
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != L
                                ? (0, c.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: I.intl.format(I.t['9rfonp'], { date: L })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != r && r.length > 0
                ? (0, c.jsx)('div', {
                      className: x.connectedAccountChildren,
                      children: r
                  })
                : null
        ]
    });
}
function S(e) {
    let { applicationRoleConnection: t, className: n, locale: r, onApplicationClicked: a, selectedGuildId: o } = e,
        i = (0, p.rm)(t, void 0, r),
        d = () => {
            null == a || a(),
                (0, b.transitionToGlobalDiscovery)({
                    tab: P.GlobalDiscoveryTab.APPS,
                    applicationId: t.application.id,
                    newSessionState: {
                        entrypoint: { name: A.xF.APPLICATION_DIRECTORY_URL },
                        guildId: o
                    }
                });
        };
    return (0, c.jsxs)('div', {
        className: l()(x.connectedAccountContainer, null != i && i.length > 0 ? x.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, c.jsx)('div', {
                className: x.connectedAccount,
                children: (0, c.jsxs)(s.P3F, {
                    className: l()(x.connectedAccountNameContainer, x.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != t.platform_name
                            ? (0, c.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: t.platform_name
                              })
                            : null,
                        null != t.platform_username
                            ? (0, c.jsx)('div', {
                                  className: x.connectedAccountName,
                                  children: (0, c.jsx)('div', {
                                      className: x.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'interactive-active',
                                          className: x.connectedAccountNameText,
                                          children: t.platform_username
                                      })
                                  })
                              })
                            : null
                    ]
                })
            }),
            null != i && i.length > 0
                ? (0, c.jsx)('div', {
                      className: l()(x.connectedAccountChildren, x.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, c.jsx)('div', {
                children: (0, c.jsx)(s.P3F, {
                    className: x.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: I.intl.format(I.t.zIT9YG, {
                            applicationHook: () =>
                                (0, c.jsxs)('div', {
                                    className: x.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, c.jsx)(u.Z, {
                                                  user: new _.Z(t.application.bot),
                                                  size: s.EFr.SIZE_16
                                              })
                                            : null,
                                        (0, c.jsx)(s.Text, {
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
let D = r.forwardRef(function (e, t) {
    let { connectedAccounts: n, locale: r, className: a, userId: o } = e,
        { theme: i } = (0, y.z)();
    if (null == n || 0 === n.length) return null;
    let s = n.map((e) =>
            (0, c.jsx)(
                C,
                {
                    connectedAccount: e,
                    theme: i,
                    locale: r,
                    userId: o
                },
                ''.concat(e.type, ':').concat(e.id)
            )
        ),
        u = [],
        d = [];
    for (let e = 0; e < s.length; e++) {
        let t = s[e];
        e % 2 == 0 ? u.push(t) : d.push(t);
    }
    return (0, c.jsxs)('div', {
        ref: t,
        className: l()(x.connectedAccounts, a),
        children: [
            (0, c.jsx)('div', {
                className: x.connectedAccountsColumn,
                children: u
            }),
            (0, c.jsx)('div', {
                className: x.connectedAccountsColumn,
                children: d
            })
        ]
    });
});
