n.d(t, {
    TS: () => D,
    ud: () => M,
    v0: () => k
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(703656),
    C = n(699516),
    x = n(914010),
    v = n(594174),
    E = n(768581),
    I = n(63063),
    b = n(946734),
    Z = n(99843),
    N = n(372564),
    T = n(984370),
    S = n(217314),
    j = n(981631),
    y = n(921944),
    A = n(388032),
    P = n(3114);
function R(e) {
    var t;
    let { channel: n, children: l } = e,
        a = (0, d.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id),
        [r, s] = (0, m.US)([o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == a) return null;
    let u = E.ZP.getApplicationIconURL({
            id: a.id,
            icon: a.icon,
            size: 14
        }),
        [h, p] =
            r !== o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [A.intl.string(A.t.XJVlf3), void 0]
                : [
                      (0, i.jsxs)(
                          'div',
                          {
                              className: P.linkedLobbyEducationTooltip,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: A.intl.string(A.t.YIVr4O)
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: A.intl.format(A.t['16agur'], { helpdeskArticle: I.Z.getArticleURL(j.BhN.CHANNEL_LINKED_LOBBIES) })
                                  }),
                                  (0, i.jsx)(c.P3F, {
                                      className: P.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => s(y.L.USER_DISMISS),
                                      children: (0, i.jsx)(c.Dio, {
                                          className: P.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      A.intl.string(A.t.YIVr4O)
                  ];
    return (0, i.jsx)(
        c.ua7,
        {
            tooltipClassName: P.linkedLobbyEducationTooltipWrapper,
            position: 'bottom',
            align: 'left',
            text: h,
            'aria-label': p,
            forceOpen: r === o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
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
                                a.name
                            ]
                        })
                    ]
                })
        },
        r
    );
}
function M(e) {
    let { channel: t, channelName: n, parentChannel: a, guild: s, inSidebar: o = !1, handleClick: d, handleContextMenu: u, handleParentClick: m, handleParentContextMenu: g, renderFollowButton: _ } = e,
        x = (0, p.KS)(t, s),
        { prefix: E, level: I } = (function (e, t) {
            var n, i;
            switch (e) {
                case j.d4z.DM:
                    return {
                        prefix: A.intl.string(A.t.EJRzg4),
                        level: 1
                    };
                case j.d4z.GROUP_DM:
                    return {
                        prefix: A.intl.string(A.t['e5y+go']),
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
                        prefix: A.intl.string(A.t['7Xm5QE']),
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
                null != E
                    ? (0, i.jsxs)(c.nn4, {
                          children: [E, ':']
                      })
                    : null,
                ' ',
                n
            ]
        });
    switch (t.type) {
        case j.d4z.DM:
            return (0, i.jsx)(S.Z, {
                level: I,
                channel: t,
                handleClick: d,
                handleContextMenu: u
            });
        case j.d4z.GROUP_DM:
            if (t.isManaged()) return b;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)(c.nn4, { children: A.intl.string(A.t['e5y+go']) }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(f.Z, {
                            'aria-hidden': !0,
                            channel: t,
                            size: c.EFr.SIZE_24,
                            facepileSizeOverride: c.EFr.SIZE_32,
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
                ? (0, i.jsxs)(R, {
                      channel: t,
                      children: [
                          O(x, t.type === j.d4z.GUILD_ANNOUNCEMENT ? A.intl.string(A.t.l1dkSE) : A.intl.string(A.t.Pnajj4)),
                          (0, i.jsx)(T.Z.Title, {
                              level: I,
                              onContextMenu: u,
                              onClick: d,
                              children: b
                          })
                      ]
                  })
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          O(x, t.type === j.d4z.GUILD_ANNOUNCEMENT ? A.intl.string(A.t.l1dkSE) : A.intl.string(A.t.Pnajj4)),
                          (0, i.jsx)(T.Z.Title, {
                              level: I,
                              onContextMenu: u,
                              onClick: d,
                              children: b
                          }),
                          null != _ ? _() : null
                      ]
                  });
        case j.d4z.GUILD_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    O(x, A.intl.string(A.t.BVZqJi)),
                    (0, i.jsx)(T.Z.Title, {
                        level: I,
                        onContextMenu: u,
                        onClick: d,
                        children: b
                    })
                ]
            });
        case j.d4z.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    O(x, A.intl.string(A.t.EErMzM)),
                    (0, i.jsx)(T.Z.Title, {
                        level: I,
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
            if (!o && null != a) {
                let e = (0, p.KS)(a, s);
                N = (0, i.jsxs)(l.Fragment, {
                    children: [
                        O(e, A.intl.string(A.t.Pnajj4)),
                        (0, i.jsx)(T.Z.Title, {
                            level: I,
                            onContextMenu: g,
                            onClick: m,
                            className: r()(P.parentChannelName, P.cursorPointer),
                            children: (0, h.F6)(a, v.default, C.Z)
                        }),
                        (0, i.jsx)(T.Z.Caret, {})
                    ]
                });
            }
            let y = (null == a ? void 0 : a.type) != null && j.TPd.GUILD_THREADS_ONLY.has(a.type);
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    N,
                    O(y ? null : x, A.intl.string(A.t['7Xm5QE'])),
                    (0, i.jsx)(T.Z.Title, {
                        level: I,
                        onContextMenu: u,
                        onClick: d,
                        className: r()({
                            [P.cursorPointer]: o,
                            [P.forumPostTitle]: y
                        }),
                        children: b
                    })
                ]
            });
        case j.d4z.GUILD_DIRECTORY:
            let M = (null == s ? void 0 : s.hasFeature(j.oNc.HUB)) ? A.intl.formatToPlainString(A.t.Dy2aho, { guildName: n }) : n;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    null !== x
                        ? (0, i.jsx)(T.Z.Icon, {
                              iconClassName: P.__invalid_icon,
                              icon: x,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, i.jsxs)(T.Z.Title, {
                        level: I,
                        onContextMenu: u,
                        onClick: d,
                        children: [
                            null != E
                                ? (0, i.jsxs)(c.nn4, {
                                      children: [E, ':']
                                  })
                                : null,
                            ' ',
                            M
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
        n = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        l = (0, s.e7)([v.default], () => v.default.getUser(t.getRecipientId()));
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
                (0, i.jsx)(T.Z.Icon, {
                    iconClassName: P.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, i.jsx)(c.nn4, { children: t })
        ]
    });
}
function D(e) {
    let { guild: t, channel: n, caretPosition: l = 'left' } = e;
    return (0, s.e7)([x.Z], () => x.Z.getGuildId()) !== j.I_8 || null == t
        ? null
        : (0, i.jsxs)('div', {
              className: P.guildBreadcrumbContainer,
              children: [
                  'left' === l && (0, i.jsx)(T.Z.Caret, { direction: 'left' }),
                  (0, i.jsx)(g.Z, {
                      guild: t,
                      size: g.Z.Sizes.SMALLER,
                      className: P.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, i.jsx)(T.Z.Title, {
                      onClick: () => {
                          (0, _.XU)(t.id, n.id);
                      },
                      className: r()(P.parentChannelName, P.cursorPointer),
                      children: t.name
                  }),
                  'right' === l && (0, i.jsx)(T.Z.Caret, { direction: 'right' })
              ]
          });
}
