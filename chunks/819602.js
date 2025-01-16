t.d(n, {
    E3: function () {
        return j;
    },
    OA: function () {
        return R;
    },
    tH: function () {
        return P;
    }
}),
    t(653041);
var c = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    i = t(692547),
    r = t(780384),
    s = t(481060),
    u = t(99690),
    d = t(726542),
    T = t(367907),
    m = t(132871),
    E = t(147890),
    A = t(122021),
    N = t(275759),
    x = t(888496),
    _ = t(753194),
    h = t(598077),
    v = t(671533),
    p = t(49012),
    C = t(981631),
    I = t(856651),
    O = t(388032),
    f = t(196161);
function j(e) {
    var n, t;
    let l,
        a,
        u,
        { connectedAccount: m, theme: E, locale: h, userId: j, className: P, showMetadata: R, showInvisibleIcon: L } = e;
    null == R && (R = !0);
    let b = null !== (t = m.metadata) && void 0 !== t ? t : {},
        D = R ? (0, N.FI)(b[I.PC.CREATED_AT], h) : null,
        g = (0, s.useToken)(i.Z.unsafe_rawColors.TWITTER).hex(),
        U = O.intl.string(O.t['6H6h1t']);
    if (R)
        switch (m.type) {
            case C.ABu.REDDIT:
                l = (0, x.oP)(b);
                break;
            case C.ABu.STEAM:
                l = (0, x.Dq)(b);
                break;
            case C.ABu.BLUESKY:
            case C.ABu.MASTODON:
            case C.ABu.TWITTER:
                (l = (0, x.rJ)(b)), '1' === b[I.PC.TWITTER_VERIFIED] && ((a = g), (U = O.intl.string(O.t.Jebrw8)));
                break;
            case C.ABu.PAYPAL:
                l = (0, x.li)(b);
                break;
            case C.ABu.EBAY:
                l = (0, x.ul)(b);
                break;
            case C.ABu.TIKTOK:
                l = (0, x.hf)(b);
        }
    let y = d.Z.get((0, A.rR)(m.type)),
        M = null == y ? void 0 : null === (n = y.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(y, m);
    null != L && L
        ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: o()(f.__invalid_connectedAccountOpenIconContainer, f.connectedAccountHideIcon)
          }))
        : null != M &&
          (u = (0, c.jsx)(s.Anchor, {
              href: M,
              onClick: (e) => {
                  var n, t;
                  (n = m.type),
                      (t = j),
                      (0, T.yw)(C.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: t
                      }),
                      (0, p.q)(
                          {
                              href: M,
                              trusted: (null == y ? void 0 : y.type) !== C.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(v.Z, {
                  className: f.connectedAccountOpenIcon,
                  direction: v.Z.Directions.RIGHT
              })
          }));
    let S = (0, s.useToken)(i.Z.colors.INTERACTIVE_MUTED).hex(),
        k = (0, s.useToken)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
        w = m.verified
            ? (0, c.jsx)(_.Z, {
                  className: f.connectedAccountVerifiedIcon,
                  color: null != a ? a : S,
                  forcedIconColor: k,
                  size: 16,
                  tooltipText: U
              })
            : null;
    return (0, c.jsxs)('div', {
        className: o()(f.connectedAccountContainer, (null != l && l.length > 0) || null != D ? f.connectedAccountContainerWithMetadata : null, P),
        children: [
            (0, c.jsxs)('div', {
                className: f.connectedAccount,
                children: [
                    (0, c.jsx)(s.Tooltip, {
                        text: null == y ? void 0 : y.name,
                        children: (e) =>
                            (0, c.jsx)('img', {
                                ...e,
                                alt: O.intl.formatToPlainString(O.t.rtm15O, { name: null == y ? void 0 : y.name }),
                                className: f.connectedAccountIcon,
                                src: (0, r.wj)(E) ? (null == y ? void 0 : y.icon.darkSVG) : null == y ? void 0 : y.icon.lightSVG
                            })
                    }),
                    (0, c.jsxs)('div', {
                        className: f.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)('div', {
                                className: f.connectedAccountName,
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: f.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(s.Tooltip, {
                                                overflowOnly: !0,
                                                text: m.name,
                                                children: (e) =>
                                                    (0, c.jsx)(s.Text, {
                                                        ...e,
                                                        variant: 'text-md/semibold',
                                                        color: 'interactive-active',
                                                        className: f.connectedAccountNameText,
                                                        children: m.name
                                                    })
                                            }),
                                            w
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != D
                                ? (0, c.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: O.intl.format(O.t['9rfonp'], { date: D })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != l && l.length > 0
                ? (0, c.jsx)('div', {
                      className: f.connectedAccountChildren,
                      children: l
                  })
                : null
        ]
    });
}
function P(e) {
    let { applicationRoleConnection: n, className: t, locale: l, onApplicationClicked: a, selectedGuildId: i } = e,
        r = (0, x.rm)(n, void 0, l),
        d = () => {
            null == a || a(),
                (0, E.goToAppDirectory)({
                    view: m.ApplicationDirectoryViews.APPLICATION,
                    applicationId: n.application.id,
                    guildId: i,
                    entrypoint: { name: m.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, c.jsxs)('div', {
        className: o()(f.connectedAccountContainer, null != r && r.length > 0 ? f.connectedAccountContainerWithMetadata : null, t),
        children: [
            (0, c.jsx)('div', {
                className: f.connectedAccount,
                children: (0, c.jsxs)(s.Clickable, {
                    className: o()(f.connectedAccountNameContainer, f.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != n.platform_name
                            ? (0, c.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: n.platform_name
                              })
                            : null,
                        null != n.platform_username
                            ? (0, c.jsx)('div', {
                                  className: f.connectedAccountName,
                                  children: (0, c.jsx)('div', {
                                      className: f.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(s.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'interactive-active',
                                          className: f.connectedAccountNameText,
                                          children: n.platform_username
                                      })
                                  })
                              })
                            : null
                    ]
                })
            }),
            null != r && r.length > 0
                ? (0, c.jsx)('div', {
                      className: o()(f.connectedAccountChildren, f.connectedAccountChildrenNoIcon),
                      children: r
                  })
                : null,
            (0, c.jsx)('div', {
                children: (0, c.jsx)(s.Clickable, {
                    className: f.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: O.intl.format(O.t.zIT9YG, {
                            applicationHook: () =>
                                (0, c.jsxs)('div', {
                                    className: f.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, c.jsx)(u.Z, {
                                                  user: new h.Z(n.application.bot),
                                                  size: s.AvatarSizes.SIZE_16
                                              })
                                            : null,
                                        (0, c.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-normal',
                                            children: n.application.name
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
let R = l.forwardRef(function (e, n) {
    let { connectedAccounts: t, theme: l, locale: a, className: i, userId: r } = e;
    if (null == t || 0 === t.length) return null;
    let s = t
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
                (0, c.jsx)(
                    j,
                    {
                        connectedAccount: e,
                        theme: l,
                        locale: a,
                        userId: r
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        T = [];
    for (let e = 0; e < s.length; e++) {
        let n = s[e];
        e % 2 == 0 ? u.push(n) : T.push(n);
    }
    return (0, c.jsxs)('div', {
        ref: n,
        className: o()(f.connectedAccounts, i),
        children: [
            (0, c.jsx)('div', {
                className: f.connectedAccountsColumn,
                children: u
            }),
            (0, c.jsx)('div', {
                className: f.connectedAccountsColumn,
                children: T
            })
        ]
    });
});
