n.d(t, {
    E3: () => C,
    ZP: () => L,
    tH: () => D
}),
    n(539854);
var r = n(255367),
    c = n(73800),
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
    A = n(258971),
    _ = n(598077),
    f = n(671533),
    y = n(49012),
    N = n(652853),
    h = n(228168),
    v = n(981631),
    P = n(856651),
    x = n(49898),
    I = n(388032),
    j = n(797892);
function S(e) {
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
function g(e, t) {
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
function C(e) {
    var t, n;
    let c,
        a,
        u,
        { connectedAccount: b, theme: A, locale: _, userId: N, className: h, showMetadata: x, showInvisibleIcon: C } = e;
    null == x && (x = !0);
    let D = null != (n = b.metadata) ? n : {},
        L = x ? (0, p.FI)(D[P.PC.CREATED_AT], _) : null,
        R = (0, s.dQu)(o.Z.unsafe_rawColors.TWITTER).hex(),
        w = I.intl.string(I.t['6H6h1t']);
    if (x)
        switch (b.type) {
            case v.ABu.REDDIT:
                c = (0, m.oP)(D);
                break;
            case v.ABu.STEAM:
                c = (0, m.Dq)(D);
                break;
            case v.ABu.BLUESKY:
            case v.ABu.MASTODON:
            case v.ABu.TWITTER:
                (c = (0, m.rJ)(D)), '1' === D[P.PC.TWITTER_VERIFIED] && ((a = R), (w = I.intl.string(I.t.Jebrw8)));
                break;
            case v.ABu.PAYPAL:
                c = (0, m.li)(D);
                break;
            case v.ABu.EBAY:
                c = (0, m.ul)(D);
                break;
            case v.ABu.TIKTOK:
                c = (0, m.hf)(D);
        }
    let U = d.Z.get((0, T.rR)(b.type)),
        G = null == U || null == (t = U.getPlatformUserUrl) ? void 0 : t.call(U, b);
    null != C && C
        ? (u = (0, r.jsx)(s.kZF, {
              size: 'md',
              color: 'currentColor',
              className: l()(j.__invalid_connectedAccountOpenIconContainer, j.connectedAccountHideIcon)
          }))
        : null != G &&
          (u = (0, r.jsx)(s.eee, {
              href: G,
              onClick: (e) => {
                  var t;
                  (t = b.type),
                      (0, O.yw)(v.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: N
                      }),
                      (0, y.q)(
                          {
                              href: G,
                              trusted: (null == U ? void 0 : U.type) !== v.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, r.jsx)(f.Z, {
                  className: j.connectedAccountOpenIcon,
                  direction: f.Z.Directions.RIGHT
              })
          }));
    let M = (0, s.dQu)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        k = (0, s.dQu)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        B = b.verified
            ? (0, r.jsx)(E.Z, {
                  className: j.connectedAccountVerifiedIcon,
                  color: null != a ? a : M,
                  forcedIconColor: k,
                  size: 16,
                  tooltipText: w
              })
            : null;
    return (0, r.jsxs)('div', {
        className: l()(j.connectedAccountContainer, (null != c && c.length > 0) || null != L ? j.connectedAccountContainerWithMetadata : null, h),
        children: [
            (0, r.jsxs)('div', {
                className: j.connectedAccount,
                children: [
                    (0, r.jsx)(s.ua7, {
                        text: null == U ? void 0 : U.name,
                        children: (e) =>
                            (0, r.jsx)(
                                'img',
                                g(S({}, e), {
                                    alt: I.intl.formatToPlainString(I.t.rtm15O, { name: null == U ? void 0 : U.name }),
                                    className: j.connectedAccountIcon,
                                    src: (0, i.wj)(A) ? (null == U ? void 0 : U.icon.darkSVG) : null == U ? void 0 : U.icon.lightSVG
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: j.connectedAccountNameContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.connectedAccountName,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: j.connectedAccountNameTextContainer,
                                        children: [
                                            (0, r.jsx)(s.ua7, {
                                                overflowOnly: !0,
                                                text: b.name,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        s.Text,
                                                        g(S({}, e), {
                                                            variant: 'text-sm/medium',
                                                            color: 'interactive-active',
                                                            className: j.connectedAccountNameText,
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
                                ? (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: I.intl.format(I.t['9rfonp'], { date: L })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != c && c.length > 0
                ? (0, r.jsx)('div', {
                      className: j.connectedAccountChildren,
                      children: c
                  })
                : null
        ]
    });
}
function D(e) {
    let { applicationRoleConnection: t, className: n, locale: c, onApplicationClicked: a, selectedGuildId: o } = e,
        i = (0, m.rm)(t, void 0, c),
        d = () => {
            null == a || a(),
                (0, b.transitionToGlobalDiscovery)({
                    tab: x.GlobalDiscoveryTab.APPS,
                    applicationId: t.application.id,
                    newSessionState: {
                        entrypoint: { name: A.xF.APPLICATION_DIRECTORY_URL },
                        guildId: o
                    }
                });
        };
    return (0, r.jsxs)('div', {
        className: l()(j.connectedAccountContainer, null != i && i.length > 0 ? j.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, r.jsx)('div', {
                className: j.connectedAccount,
                children: (0, r.jsxs)(s.P3F, {
                    className: l()(j.connectedAccountNameContainer, j.connectedAccountNameContainerClickable),
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
                                  className: j.connectedAccountName,
                                  children: (0, r.jsx)('div', {
                                      className: j.connectedAccountNameTextContainer,
                                      children: (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'interactive-active',
                                          className: j.connectedAccountNameText,
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
                      className: l()(j.connectedAccountChildren, j.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, r.jsx)('div', {
                children: (0, r.jsx)(s.P3F, {
                    className: j.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: I.intl.format(I.t.zIT9YG, {
                            applicationHook: () =>
                                (0, r.jsxs)('div', {
                                    className: j.connectedAccountPoweredByText,
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
let L = c.forwardRef(function (e, t) {
    let { connectedAccounts: n, locale: c, className: a, userId: o } = e,
        { theme: i, themeType: s } = (0, N.z)();
    if (null == n || 0 === n.length) return null;
    let u = n
        .filter((e) => d.Z.isSupported(e.type))
        .map((e) =>
            (0, r.jsx)(
                C,
                {
                    connectedAccount: e,
                    theme: i,
                    locale: c,
                    userId: o
                },
                ''.concat(e.type, ':').concat(e.id)
            )
        );
    if (s === h.lY.MODAL_V2)
        return (0, r.jsx)('div', {
            ref: t,
            className: l()(j.connectedAccounts, a),
            children: u
        });
    let O = [],
        T = [];
    for (let e = 0; e < u.length; e++) {
        let t = u[e];
        e % 2 == 0 ? O.push(t) : T.push(t);
    }
    return (0, r.jsxs)('div', {
        ref: t,
        className: l()(j.connectedAccounts, a),
        children: [
            (0, r.jsx)('div', {
                className: j.connectedAccountsColumn,
                children: O
            }),
            (0, r.jsx)('div', {
                className: j.connectedAccountsColumn,
                children: T
            })
        ]
    });
});
