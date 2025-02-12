n.d(t, {
    E3: () => P,
    OA: () => R,
    tH: () => L
}),
    n(653041);
var l = n(200651),
    a = n(192379),
    c = n(120356),
    o = n.n(c),
    i = n(692547),
    r = n(780384),
    s = n(481060),
    u = n(99690),
    d = n(726542),
    T = n(367907),
    E = n(132871),
    A = n(147890),
    _ = n(122021),
    p = n(275759),
    m = n(888496),
    I = n(753194),
    v = n(598077),
    O = n(671533),
    N = n(49012),
    h = n(981631),
    x = n(856651),
    C = n(388032),
    S = n(825965);
function P(e) {
    var t, n;
    let a,
        c,
        u,
        { connectedAccount: E, theme: A, locale: v, userId: P, className: L, showMetadata: R, showInvisibleIcon: f } = e;
    null == R && (R = !0);
    let b = null !== (n = E.metadata) && void 0 !== n ? n : {},
        y = R ? (0, p.FI)(b[x.PC.CREATED_AT], v) : null,
        g = (0, s.dQu)(i.Z.unsafe_rawColors.TWITTER).hex(),
        D = C.intl.string(C.t['6H6h1t']);
    if (R)
        switch (E.type) {
            case h.ABu.REDDIT:
                a = (0, m.oP)(b);
                break;
            case h.ABu.STEAM:
                a = (0, m.Dq)(b);
                break;
            case h.ABu.BLUESKY:
            case h.ABu.MASTODON:
            case h.ABu.TWITTER:
                (a = (0, m.rJ)(b)), '1' === b[x.PC.TWITTER_VERIFIED] && ((c = g), (D = C.intl.string(C.t.Jebrw8)));
                break;
            case h.ABu.PAYPAL:
                a = (0, m.li)(b);
                break;
            case h.ABu.EBAY:
                a = (0, m.ul)(b);
                break;
            case h.ABu.TIKTOK:
                a = (0, m.hf)(b);
        }
    let j = d.Z.get((0, _.rR)(E.type)),
        U = null == j ? void 0 : null === (t = j.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(j, E);
    null != f && f
        ? (u = (0, l.jsx)(s.kZF, {
              size: 'md',
              color: 'currentColor',
              className: o()(S.__invalid_connectedAccountOpenIconContainer, S.connectedAccountHideIcon)
          }))
        : null != U &&
          (u = (0, l.jsx)(s.eee, {
              href: U,
              onClick: (e) => {
                  var t;
                  (t = E.type),
                      (0, T.yw)(h.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: P
                      }),
                      (0, N.q)(
                          {
                              href: U,
                              trusted: (null == j ? void 0 : j.type) !== h.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, l.jsx)(O.Z, {
                  className: S.connectedAccountOpenIcon,
                  direction: O.Z.Directions.RIGHT
              })
          }));
    let G = (0, s.dQu)(i.Z.colors.INTERACTIVE_MUTED).hex(),
        M = (0, s.dQu)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
        B = E.verified
            ? (0, l.jsx)(I.Z, {
                  className: S.connectedAccountVerifiedIcon,
                  color: null != c ? c : G,
                  forcedIconColor: M,
                  size: 16,
                  tooltipText: D
              })
            : null;
    return (0, l.jsxs)('div', {
        className: o()(S.connectedAccountContainer, (null != a && a.length > 0) || null != y ? S.connectedAccountContainerWithMetadata : null, L),
        children: [
            (0, l.jsxs)('div', {
                className: S.connectedAccount,
                children: [
                    (0, l.jsx)(s.ua7, {
                        text: null == j ? void 0 : j.name,
                        children: (e) =>
                            (0, l.jsx)('img', {
                                ...e,
                                alt: C.intl.formatToPlainString(C.t.rtm15O, { name: null == j ? void 0 : j.name }),
                                className: S.connectedAccountIcon,
                                src: (0, r.wj)(A) ? (null == j ? void 0 : j.icon.darkSVG) : null == j ? void 0 : j.icon.lightSVG
                            })
                    }),
                    (0, l.jsxs)('div', {
                        className: S.connectedAccountNameContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: S.connectedAccountName,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: S.connectedAccountNameTextContainer,
                                        children: [
                                            (0, l.jsx)(s.ua7, {
                                                overflowOnly: !0,
                                                text: E.name,
                                                children: (e) =>
                                                    (0, l.jsx)(s.Text, {
                                                        ...e,
                                                        variant: 'text-sm/medium',
                                                        color: 'interactive-active',
                                                        className: S.connectedAccountNameText,
                                                        children: E.name
                                                    })
                                            }),
                                            B
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != y
                                ? (0, l.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: C.intl.format(C.t['9rfonp'], { date: y })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != a && a.length > 0
                ? (0, l.jsx)('div', {
                      className: S.connectedAccountChildren,
                      children: a
                  })
                : null
        ]
    });
}
function L(e) {
    let { applicationRoleConnection: t, className: n, locale: a, onApplicationClicked: c, selectedGuildId: i } = e,
        r = (0, m.rm)(t, void 0, a),
        d = () => {
            null == c || c(),
                (0, A.dx)({
                    view: E.eN.APPLICATION,
                    applicationId: t.application.id,
                    guildId: i,
                    entrypoint: { name: E.n3.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, l.jsxs)('div', {
        className: o()(S.connectedAccountContainer, null != r && r.length > 0 ? S.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, l.jsx)('div', {
                className: S.connectedAccount,
                children: (0, l.jsxs)(s.P3F, {
                    className: o()(S.connectedAccountNameContainer, S.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != t.platform_name
                            ? (0, l.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: t.platform_name
                              })
                            : null,
                        null != t.platform_username
                            ? (0, l.jsx)('div', {
                                  className: S.connectedAccountName,
                                  children: (0, l.jsx)('div', {
                                      className: S.connectedAccountNameTextContainer,
                                      children: (0, l.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'interactive-active',
                                          className: S.connectedAccountNameText,
                                          children: t.platform_username
                                      })
                                  })
                              })
                            : null
                    ]
                })
            }),
            null != r && r.length > 0
                ? (0, l.jsx)('div', {
                      className: o()(S.connectedAccountChildren, S.connectedAccountChildrenNoIcon),
                      children: r
                  })
                : null,
            (0, l.jsx)('div', {
                children: (0, l.jsx)(s.P3F, {
                    className: S.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, l.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: C.intl.format(C.t.zIT9YG, {
                            applicationHook: () =>
                                (0, l.jsxs)('div', {
                                    className: S.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, l.jsx)(u.Z, {
                                                  user: new v.Z(t.application.bot),
                                                  size: s.EFr.SIZE_16
                                              })
                                            : null,
                                        (0, l.jsx)(s.Text, {
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
let R = a.forwardRef(function (e, t) {
    let { connectedAccounts: n, theme: a, locale: c, className: i, userId: r } = e;
    if (null == n || 0 === n.length) return null;
    let s = n
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
                (0, l.jsx)(
                    P,
                    {
                        connectedAccount: e,
                        theme: a,
                        locale: c,
                        userId: r
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        T = [];
    for (let e = 0; e < s.length; e++) {
        let t = s[e];
        e % 2 == 0 ? u.push(t) : T.push(t);
    }
    return (0, l.jsxs)('div', {
        ref: t,
        className: o()(S.connectedAccounts, i),
        children: [
            (0, l.jsx)('div', {
                className: S.connectedAccountsColumn,
                children: u
            }),
            (0, l.jsx)('div', {
                className: S.connectedAccountsColumn,
                children: T
            })
        ]
    });
});
