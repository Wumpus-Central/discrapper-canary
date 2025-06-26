n.d(t, {
    E3: () => g,
    ZP: () => S,
    tH: () => C
}),
    n(539854);
var c = n(255367);
n(73800);
var r = n(120356),
    a = n.n(r),
    l = n(692547),
    o = n(780384),
    i = n(481060),
    s = n(99690),
    u = n(726542),
    d = n(367907),
    O = n(122021),
    T = n(275759),
    m = n(888496),
    p = n(753194),
    E = n(749681),
    b = n(258971),
    A = n(598077),
    _ = n(671533),
    f = n(49012),
    y = n(652853),
    N = n(981631),
    h = n(856651),
    P = n(49898),
    v = n(388032),
    I = n(797892);
function x(e) {
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
function j(e, t) {
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
function g(e) {
    var t, n;
    let r,
        s,
        E,
        { connectedAccount: b, theme: A, locale: y, userId: P, className: g, showMetadata: C, showInvisibleIcon: S } = e;
    null == C && (C = !0);
    let D = null != (n = b.metadata) ? n : {},
        L = C ? (0, T.FI)(D[h.PC.CREATED_AT], y) : null,
        R = (0, i.dQu)(l.Z.unsafe_rawColors.TWITTER).hex(),
        w = v.intl.string(v.t['6H6h1t']);
    if (C)
        switch (b.type) {
            case N.ABu.REDDIT:
                r = (0, m.oP)(D);
                break;
            case N.ABu.STEAM:
                r = (0, m.Dq)(D);
                break;
            case N.ABu.BLUESKY:
            case N.ABu.MASTODON:
            case N.ABu.TWITTER:
                (r = (0, m.rJ)(D)), '1' === D[h.PC.TWITTER_VERIFIED] && ((s = R), (w = v.intl.string(v.t.Jebrw8)));
                break;
            case N.ABu.PAYPAL:
                r = (0, m.li)(D);
                break;
            case N.ABu.EBAY:
                r = (0, m.ul)(D);
                break;
            case N.ABu.TIKTOK:
                r = (0, m.hf)(D);
        }
    let U = u.Z.get((0, O.rR)(b.type)),
        G = null == U || null == (t = U.getPlatformUserUrl) ? void 0 : t.call(U, b);
    null != S && S
        ? (E = (0, c.jsx)(i.kZF, {
              size: 'md',
              color: 'currentColor',
              className: a()(I.__invalid_connectedAccountOpenIconContainer, I.connectedAccountHideIcon)
          }))
        : null != G &&
          (E = (0, c.jsx)(i.eee, {
              href: G,
              'aria-label': (null == U ? void 0 : U.name) != null ? ''.concat(U.name, ', ').concat(b.name, ', ').concat(v.intl.string(v.t.q5jLJC)) : ''.concat(b.name, ', ').concat(v.intl.string(v.t.q5jLJC)),
              onClick: (e) => {
                  var t;
                  (t = b.type),
                      (0, d.yw)(N.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: P
                      }),
                      (0, f.q)(
                          {
                              href: G,
                              trusted: (null == U ? void 0 : U.type) !== N.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(_.Z, {
                  className: I.connectedAccountOpenIcon,
                  direction: _.Z.Directions.RIGHT
              })
          }));
    let M = (0, i.dQu)(l.Z.colors.INTERACTIVE_MUTED).hex(),
        k = (0, i.dQu)(l.Z.colors.INTERACTIVE_ACTIVE).hex(),
        B = b.verified
            ? (0, c.jsx)(p.Z, {
                  className: I.connectedAccountVerifiedIcon,
                  color: null != s ? s : M,
                  forcedIconColor: k,
                  size: 16,
                  tooltipText: w
              })
            : null;
    return (0, c.jsxs)('li', {
        className: a()(I.connectedAccountContainer, (null != r && r.length > 0) || null != L ? I.connectedAccountContainerWithMetadata : null, g),
        children: [
            (0, c.jsxs)('div', {
                className: I.connectedAccount,
                children: [
                    (0, c.jsx)(i.ua7, {
                        text: null == U ? void 0 : U.name,
                        children: (e) =>
                            (0, c.jsx)(
                                'img',
                                j(x({}, e), {
                                    alt: v.intl.formatToPlainString(v.t.rtm15O, { name: null == U ? void 0 : U.name }),
                                    className: I.connectedAccountIcon,
                                    src: (0, o.wj)(A) ? (null == U ? void 0 : U.icon.darkSVG) : null == U ? void 0 : U.icon.lightSVG
                                })
                            )
                    }),
                    (0, c.jsxs)('div', {
                        className: I.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)('div', {
                                className: I.connectedAccountName,
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: I.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(i.ua7, {
                                                overflowOnly: !0,
                                                text: b.name,
                                                children: (e) =>
                                                    (0, c.jsx)(
                                                        i.Text,
                                                        j(x({}, e), {
                                                            variant: 'text-sm/medium',
                                                            color: 'interactive-active',
                                                            className: I.connectedAccountNameText,
                                                            children: b.name
                                                        })
                                                    )
                                            }),
                                            B
                                        ]
                                    }),
                                    E
                                ]
                            }),
                            null != L
                                ? (0, c.jsx)(i.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: v.intl.format(v.t['9rfonp'], { date: L })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != r && r.length > 0
                ? (0, c.jsx)('div', {
                      className: I.connectedAccountChildren,
                      children: r
                  })
                : null
        ]
    });
}
function C(e) {
    let { applicationRoleConnection: t, className: n, locale: r, onApplicationClicked: l, selectedGuildId: o } = e,
        u = (0, m.rm)(t, void 0, r),
        d = () => {
            null == l || l(),
                (0, E.transitionToGlobalDiscovery)({
                    tab: P.GlobalDiscoveryTab.APPS,
                    applicationId: t.application.id,
                    newSessionState: {
                        entrypoint: { name: b.xF.APPLICATION_DIRECTORY_URL },
                        guildId: o
                    }
                });
        };
    return (0, c.jsxs)('li', {
        className: a()(I.connectedAccountContainer, null != u && u.length > 0 ? I.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, c.jsx)('div', {
                className: I.connectedAccount,
                children: (0, c.jsxs)(i.P3F, {
                    className: a()(I.connectedAccountNameContainer, I.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != t.platform_name
                            ? (0, c.jsx)(i.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: t.platform_name
                              })
                            : null,
                        null != t.platform_username
                            ? (0, c.jsx)('div', {
                                  className: I.connectedAccountName,
                                  children: (0, c.jsx)('div', {
                                      className: I.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(i.Text, {
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
            null != u && u.length > 0
                ? (0, c.jsx)('div', {
                      className: a()(I.connectedAccountChildren, I.connectedAccountChildrenNoIcon),
                      children: u
                  })
                : null,
            (0, c.jsx)('div', {
                children: (0, c.jsx)(i.P3F, {
                    className: I.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: v.intl.format(v.t.zIT9YG, {
                            applicationHook: () =>
                                (0, c.jsxs)('div', {
                                    className: I.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, c.jsx)(s.Z, {
                                                  user: new A.Z(t.application.bot),
                                                  size: i.EFr.SIZE_16
                                              })
                                            : null,
                                        (0, c.jsx)(i.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-default',
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
function S(e) {
    let { connectedAccounts: t, locale: n, className: r, userId: l } = e,
        { theme: o } = (0, y.z)();
    if (null == t || 0 === t.length) return null;
    let i = t.map((e) =>
            (0, c.jsx)(
                g,
                {
                    connectedAccount: e,
                    theme: o,
                    locale: n,
                    userId: l
                },
                ''.concat(e.type, ':').concat(e.id)
            )
        ),
        s = [],
        u = [];
    for (let e = 0; e < i.length; e++) {
        let t = i[e];
        e % 2 == 0 ? s.push(t) : u.push(t);
    }
    return (0, c.jsxs)('ul', {
        className: a()(I.connectedAccounts, r),
        children: [
            (0, c.jsx)('div', {
                className: I.connectedAccountsColumn,
                children: s
            }),
            (0, c.jsx)('div', {
                className: I.connectedAccountsColumn,
                children: u
            })
        ]
    });
}
