t.d(n, {
    E3: function () {
        return j;
    },
    OA: function () {
        return b;
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
    s = t(780384),
    r = t(481060),
    u = t(99690),
    d = t(726542),
    T = t(367907),
    m = t(132871),
    A = t(147890),
    E = t(122021),
    N = t(275759),
    x = t(888496),
    _ = t(753194),
    h = t(598077),
    v = t(671533),
    C = t(49012),
    p = t(981631),
    I = t(856651),
    O = t(388032),
    f = t(196161);
function j(e) {
    var n, t;
    let l,
        a,
        u,
        { connectedAccount: m, theme: A, locale: h, userId: j, className: P, showMetadata: b, showInvisibleIcon: L } = e;
    null == b && (b = !0);
    let R = null !== (t = m.metadata) && void 0 !== t ? t : {},
        D = b ? (0, N.FI)(R[I.PC.CREATED_AT], h) : null,
        g = (0, r.useToken)(i.Z.unsafe_rawColors.TWITTER).hex(),
        M = O.intl.string(O.t['6H6h1t']);
    if (b)
        switch (m.type) {
            case p.ABu.REDDIT:
                l = (0, x.oP)(R);
                break;
            case p.ABu.STEAM:
                l = (0, x.Dq)(R);
                break;
            case p.ABu.BLUESKY:
            case p.ABu.MASTODON:
            case p.ABu.TWITTER:
                (l = (0, x.rJ)(R)), '1' === R[I.PC.TWITTER_VERIFIED] && ((a = g), (M = O.intl.string(O.t.Jebrw8)));
                break;
            case p.ABu.PAYPAL:
                l = (0, x.li)(R);
                break;
            case p.ABu.EBAY:
                l = (0, x.ul)(R);
                break;
            case p.ABu.TIKTOK:
                l = (0, x.hf)(R);
        }
    let S = d.Z.get((0, E.rR)(m.type)),
        U = null == S ? void 0 : null === (n = S.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(S, m);
    null != L && L
        ? (u = (0, c.jsx)(r.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: o()(f.__invalid_connectedAccountOpenIconContainer, f.connectedAccountHideIcon)
          }))
        : null != U &&
          (u = (0, c.jsx)(r.Anchor, {
              href: U,
              onClick: (e) => {
                  var n, t;
                  (n = m.type),
                      (t = j),
                      (0, T.yw)(p.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: t
                      }),
                      (0, C.q)(
                          {
                              href: U,
                              trusted: (null == S ? void 0 : S.type) !== p.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(v.Z, {
                  className: f.connectedAccountOpenIcon,
                  direction: v.Z.Directions.RIGHT
              })
          }));
    let y = (0, r.useToken)(i.Z.colors.INTERACTIVE_MUTED).hex(),
        k = (0, r.useToken)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
        K = m.verified
            ? (0, c.jsx)(_.Z, {
                  className: f.connectedAccountVerifiedIcon,
                  color: null != a ? a : y,
                  forcedIconColor: k,
                  size: 16,
                  tooltipText: M
              })
            : null;
    return (0, c.jsxs)('div', {
        className: o()(f.connectedAccountContainer, (null != l && l.length > 0) || null != D ? f.connectedAccountContainerWithMetadata : null, P),
        children: [
            (0, c.jsxs)('div', {
                className: f.connectedAccount,
                children: [
                    (0, c.jsx)(r.Tooltip, {
                        text: null == S ? void 0 : S.name,
                        children: (e) =>
                            (0, c.jsx)('img', {
                                ...e,
                                alt: O.intl.formatToPlainString(O.t.rtm15O, { name: null == S ? void 0 : S.name }),
                                className: f.connectedAccountIcon,
                                src: (0, s.wj)(A) ? (null == S ? void 0 : S.icon.darkSVG) : null == S ? void 0 : S.icon.lightSVG
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
                                            (0, c.jsx)(r.Tooltip, {
                                                overflowOnly: !0,
                                                text: m.name,
                                                children: (e) =>
                                                    (0, c.jsx)(r.Text, {
                                                        ...e,
                                                        variant: 'text-sm/medium',
                                                        color: 'interactive-active',
                                                        className: f.connectedAccountNameText,
                                                        children: m.name
                                                    })
                                            }),
                                            K
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != D
                                ? (0, c.jsx)(r.Text, {
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
        s = (0, x.rm)(n, void 0, l),
        d = () => {
            null == a || a(),
                (0, A.dx)({
                    view: m.eN.APPLICATION,
                    applicationId: n.application.id,
                    guildId: i,
                    entrypoint: { name: m.n3.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, c.jsxs)('div', {
        className: o()(f.connectedAccountContainer, null != s && s.length > 0 ? f.connectedAccountContainerWithMetadata : null, t),
        children: [
            (0, c.jsx)('div', {
                className: f.connectedAccount,
                children: (0, c.jsxs)(r.Clickable, {
                    className: o()(f.connectedAccountNameContainer, f.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != n.platform_name
                            ? (0, c.jsx)(r.Text, {
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
                                      children: (0, c.jsx)(r.Text, {
                                          variant: 'text-sm/medium',
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
            null != s && s.length > 0
                ? (0, c.jsx)('div', {
                      className: o()(f.connectedAccountChildren, f.connectedAccountChildrenNoIcon),
                      children: s
                  })
                : null,
            (0, c.jsx)('div', {
                children: (0, c.jsx)(r.Clickable, {
                    className: f.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(r.Text, {
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
                                                  size: r.AvatarSizes.SIZE_16
                                              })
                                            : null,
                                        (0, c.jsx)(r.Text, {
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
let b = l.forwardRef(function (e, n) {
    let { connectedAccounts: t, theme: l, locale: a, className: i, userId: s } = e;
    if (null == t || 0 === t.length) return null;
    let r = t
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
                (0, c.jsx)(
                    j,
                    {
                        connectedAccount: e,
                        theme: l,
                        locale: a,
                        userId: s
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        T = [];
    for (let e = 0; e < r.length; e++) {
        let n = r[e];
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
