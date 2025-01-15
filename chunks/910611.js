n.d(t, {
    TS: function () {
        return D;
    },
    ud: function () {
        return R;
    },
    v0: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(835473),
    u = n(385499),
    h = n(933557),
    p = n(471445),
    m = n(243778),
    f = n(266076),
    g = n(565138),
    C = n(703656),
    x = n(699516),
    v = n(914010),
    _ = n(594174),
    I = n(768581),
    E = n(63063),
    b = n(946734),
    Z = n(99843),
    N = n(372564),
    S = n(984370),
    T = n(217314),
    j = n(981631),
    A = n(921944),
    y = n(388032),
    P = n(302133);
function M(e) {
    var t;
    let { channel: n, children: l } = e,
        r = (0, d.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id),
        [a, s] = (0, m.US)([o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == r) return null;
    let u = I.ZP.getApplicationIconURL({
            id: r.id,
            icon: r.icon,
            size: 14
        }),
        [h, p] =
            a !== o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [y.intl.string(y.t.XJVlf3), void 0]
                : [
                      (0, i.jsxs)(
                          'div',
                          {
                              className: P.linkedLobbyEducationTooltip,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: y.intl.string(y.t.YIVr4O)
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: y.intl.format(y.t['16agur'], { helpdeskArticle: E.Z.getArticleURL(j.BhN.CHANNEL_LINKED_LOBBIES) })
                                  }),
                                  (0, i.jsx)(c.Clickable, {
                                      className: P.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => s(A.L.USER_DISMISS),
                                      children: (0, i.jsx)(c.XSmallIcon, {
                                          className: P.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      y.intl.string(y.t.YIVr4O)
                  ];
    return (0, i.jsx)(
        c.Tooltip,
        {
            tooltipClassName: P.linkedLobbyEducationTooltipWrapper,
            position: 'bottom',
            align: 'left',
            text: h,
            'aria-label': p,
            forceOpen: a === o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: P.linkedLobbyTooltip,
                    ...e,
                    children: [
                        l,
                        (0, i.jsxs)(c.Text, {
                            className: P.linkedLobby,
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: [
                                '\u2022',
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: u,
                                    className: P.linkedLobbyApplicationIcon
                                }),
                                r.name
                            ]
                        })
                    ]
                })
        },
        a
    );
}
function R(e) {
    let { channel: t, channelName: n, parentChannel: r, guild: s, inSidebar: o = !1, handleClick: d, handleContextMenu: u, handleParentClick: m, handleParentContextMenu: g, renderFollowButton: C } = e,
        v = (0, p.KS)(t, s),
        { prefix: I, level: E } = (function (e, t) {
            var n, i;
            switch (e) {
                case j.d4z.DM:
                    return {
                        prefix: y.intl.string(y.t.EJRzg4),
                        level: 1
                    };
                case j.d4z.GROUP_DM:
                    return {
                        prefix: y.intl.string(y.t['e5y+go']),
                        level: 1
                    };
                case j.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '',
                        level: 1
                    };
                case j.d4z.GUILD_ANNOUNCEMENT:
                case j.d4z.GUILD_TEXT:
                case j.d4z.GUILD_FORUM:
                case j.d4z.GUILD_MEDIA:
                case j.d4z.GUILD_STAGE_VOICE:
                case j.d4z.GUILD_VOICE:
                    return {
                        prefix: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : '',
                        level: 1
                    };
                case j.d4z.ANNOUNCEMENT_THREAD:
                case j.d4z.PUBLIC_THREAD:
                case j.d4z.PRIVATE_THREAD:
                    return {
                        prefix: y.intl.string(y.t['7Xm5QE']),
                        level: 2
                    };
                default:
                    return {
                        prefix: null,
                        level: 1
                    };
            }
        })(t.type, s),
        b = (0, i.jsxs)(i.Fragment, {
            children: [
                null != I
                    ? (0, i.jsxs)(c.HiddenVisually, {
                          children: [I, ':']
                      })
                    : null,
                ' ',
                n
            ]
        });
    switch (t.type) {
        case j.d4z.DM:
            return (0, i.jsx)(T.Z, {
                level: E,
                channel: t,
                handleClick: d,
                handleContextMenu: u
            });
        case j.d4z.GROUP_DM:
            if (t.isManaged()) return b;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)(c.HiddenVisually, { children: y.intl.string(y.t['e5y+go']) }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(f.Z, {
                            'aria-hidden': !0,
                            channel: t,
                            size: c.AvatarSizes.SIZE_24,
                            facepileSizeOverride: c.AvatarSizes.SIZE_32,
                            experimentLocation: 'header_bar',
                            className: P.avatar
                        })
                    }),
                    (0, i.jsx)(Z.Z, { channel: t }, 'channel-'.concat(t.id))
                ]
            });
        case j.d4z.GUILD_ANNOUNCEMENT:
        case j.d4z.GUILD_TEXT:
        case j.d4z.GUILD_FORUM:
        case j.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, i.jsxs)(M, {
                      channel: t,
                      children: [
                          O(v, t.type === j.d4z.GUILD_ANNOUNCEMENT ? y.intl.string(y.t.l1dkSE) : y.intl.string(y.t.Pnajj4)),
                          (0, i.jsx)(S.Z.Title, {
                              level: E,
                              onContextMenu: u,
                              onClick: d,
                              children: b
                          })
                      ]
                  })
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          O(v, t.type === j.d4z.GUILD_ANNOUNCEMENT ? y.intl.string(y.t.l1dkSE) : y.intl.string(y.t.Pnajj4)),
                          (0, i.jsx)(S.Z.Title, {
                              level: E,
                              onContextMenu: u,
                              onClick: d,
                              children: b
                          }),
                          null != C ? C() : null
                      ]
                  });
        case j.d4z.GUILD_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    O(v, y.intl.string(y.t.BVZqJi)),
                    (0, i.jsx)(S.Z.Title, {
                        level: E,
                        onContextMenu: u,
                        onClick: d,
                        children: b
                    })
                ]
            });
        case j.d4z.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    O(v, y.intl.string(y.t.EErMzM)),
                    (0, i.jsx)(S.Z.Title, {
                        level: E,
                        onContextMenu: u,
                        onClick: d,
                        children: b
                    })
                ]
            });
        case j.d4z.ANNOUNCEMENT_THREAD:
        case j.d4z.PUBLIC_THREAD:
        case j.d4z.PRIVATE_THREAD:
            let N = null;
            if (!o && null != r) {
                let e = (0, p.KS)(r, s);
                N = (0, i.jsxs)(l.Fragment, {
                    children: [
                        O(e, y.intl.string(y.t.Pnajj4)),
                        (0, i.jsx)(S.Z.Title, {
                            level: E,
                            onContextMenu: g,
                            onClick: m,
                            className: a()(P.parentChannelName, P.cursorPointer),
                            children: (0, h.F6)(r, _.default, x.Z)
                        }),
                        (0, i.jsx)(S.Z.Caret, {})
                    ]
                });
            }
            let A = (null == r ? void 0 : r.type) != null && j.TPd.GUILD_THREADS_ONLY.has(r.type);
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    N,
                    O(A ? null : v, y.intl.string(y.t['7Xm5QE'])),
                    (0, i.jsx)(S.Z.Title, {
                        level: E,
                        onContextMenu: u,
                        onClick: d,
                        className: a()({
                            [P.cursorPointer]: o,
                            [P.forumPostTitle]: A
                        }),
                        children: b
                    })
                ]
            });
        case j.d4z.GUILD_DIRECTORY:
            let R = (null == s ? void 0 : s.hasFeature(j.oNc.HUB)) ? y.intl.formatToPlainString(y.t.Dy2aho, { guildName: n }) : n;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    null !== v
                        ? (0, i.jsx)(S.Z.Icon, {
                              iconClassName: P.__invalid_icon,
                              icon: v,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, i.jsxs)(S.Z.Title, {
                        level: E,
                        onContextMenu: u,
                        onClick: d,
                        children: [
                            null != I
                                ? (0, i.jsxs)(c.HiddenVisually, {
                                      children: [I, ':']
                                  })
                                : null,
                            ' ',
                            R
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
let L = (e) => {
    let { channel: t } = e,
        n = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        l = (0, s.e7)([_.default], () => _.default.getUser(t.getRecipientId()));
    return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == l ? void 0 : l.isStaff()) ? (0, i.jsx)(u.Z, { type: u.Z.Types.STAFF_ONLY_DM }) : null;
};
function k(e, t) {
    switch (e.type) {
        case j.d4z.DM:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(L, { channel: e }), (0, i.jsx)(b.Z, { channel: e }, e.id)]
            });
        case j.d4z.GUILD_ANNOUNCEMENT:
        case j.d4z.GUILD_TEXT:
        case j.d4z.GUILD_VOICE:
        case j.d4z.GUILD_STAGE_VOICE:
        case j.d4z.GROUP_DM:
            return null != t
                ? (0, i.jsx)(
                      N.Z,
                      {
                          channel: e,
                          guild: t
                      },
                      e.id
                  )
                : null;
        default:
            return null;
    }
}
function O(e, t) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null !== e &&
                (0, i.jsx)(S.Z.Icon, {
                    iconClassName: P.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, i.jsx)(c.HiddenVisually, { children: t })
        ]
    });
}
function D(e) {
    let { guild: t, channel: n, caretPosition: l = 'left' } = e;
    return (0, s.e7)([v.Z], () => v.Z.getGuildId()) !== j.I_8 || null == t
        ? null
        : (0, i.jsxs)('div', {
              className: P.guildBreadcrumbContainer,
              children: [
                  'left' === l && (0, i.jsx)(S.Z.Caret, { direction: 'left' }),
                  (0, i.jsx)(g.Z, {
                      guild: t,
                      size: g.Z.Sizes.SMALLER,
                      className: P.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, i.jsx)(S.Z.Title, {
                      onClick: () => {
                          (0, C.XU)(t.id, n.id);
                      },
                      className: a()(P.parentChannelName, P.cursorPointer),
                      children: t.name
                  }),
                  'right' === l && (0, i.jsx)(S.Z.Caret, { direction: 'right' })
              ]
          });
}
