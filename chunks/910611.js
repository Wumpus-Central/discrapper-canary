(n.d(t, {
    TS: () => W,
    ud: () => Z,
    v0: () => H
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(835473),
    d = n(385499),
    f = n(933557),
    _ = n(471445),
    p = n(243778),
    h = n(565138),
    m = n(370774),
    g = n(703656),
    E = n(621853),
    b = n(484459),
    y = n(699516),
    O = n(914010),
    v = n(594174),
    I = n(768581),
    T = n(63063),
    S = n(374386),
    A = n(946734),
    N = n(99843),
    C = n(372564),
    R = n(984370),
    P = n(217314),
    w = n(981631),
    D = n(921944),
    L = n(388032),
    x = n(100658);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            }));
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = 14;
function B(e) {
    var t;
    let { channel: n, children: i } = e,
        o = (0, u.q)(null == (t = n.linkedLobby) ? void 0 : t.application_id),
        [a, s] = (0, p.US)([l.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == o) return null;
    let d = I.ZP.getApplicationIconURL({
            id: o.id,
            icon: o.icon,
            size: G
        }),
        [f, _] = (function () {
            return a !== l.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [L.intl.string(L.t.XJVlf3), void 0]
                : [
                      (0, r.jsxs)(
                          'div',
                          {
                              className: x.linkedLobbyEducationTooltip,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: L.intl.string(L.t.YIVr4O)
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: L.intl.format(L.t['16agur'], { helpdeskArticle: T.Z.getArticleURL(w.BhN.LINKED_LOBBIES) })
                                  }),
                                  (0, r.jsx)(c.P3F, {
                                      className: x.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => s(D.L.USER_DISMISS),
                                      children: (0, r.jsx)(c.Dio, {
                                          className: x.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      L.intl.string(L.t.YIVr4O)
                  ];
        })();
    return (0, r.jsx)(
        c.ua7,
        {
            tooltipClassName: x.linkedLobbyEducationTooltipWrapper,
            position: 'bottom',
            align: 'left',
            text: f,
            'aria-label': _,
            forceOpen: a === l.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (e) =>
                (0, r.jsxs)(
                    'div',
                    U(k({ className: x.linkedLobbyTooltip }, e), {
                        children: [
                            i,
                            (0, r.jsxs)(c.Text, {
                                className: x.linkedLobby,
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                children: [
                                    '\u2022',
                                    (0, r.jsx)('img', {
                                        alt: '',
                                        src: d,
                                        className: x.linkedLobbyApplicationIcon
                                    }),
                                    o.name
                                ]
                            })
                        ]
                    })
                )
        },
        a
    );
}
function Z(e) {
    let { channel: t, channelName: n, parentChannel: o, guild: s, inSidebar: l = !1, handleClick: u, handleContextMenu: d, handleParentClick: p, handleParentContextMenu: h, renderFollowButton: m } = e,
        g = (0, _.KS)(t, s),
        { prefix: E, level: b } = K(t.type, s),
        O = (0, r.jsxs)(r.Fragment, {
            children: [
                null != E
                    ? (0, r.jsxs)(c.nn4, {
                          children: [E, ':']
                      })
                    : null,
                ' ',
                n
            ]
        });
    switch (t.type) {
        case w.d4z.DM:
            return (0, r.jsx)(P.Z, {
                level: b,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case w.d4z.GROUP_DM:
            if (t.isManaged()) return O;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(c.nn4, { children: L.intl.string(L.t['e5y+go']) }), (0, r.jsx)(N.j, { channel: t }, 'channel-'.concat(t.id))]
            });
        case w.d4z.GUILD_ANNOUNCEMENT:
        case w.d4z.GUILD_TEXT:
        case w.d4z.GUILD_FORUM:
        case w.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, r.jsxs)(B, {
                      channel: t,
                      children: [
                          Y(g, t.type === w.d4z.GUILD_ANNOUNCEMENT ? L.intl.string(L.t.l1dkSE) : L.intl.string(L.t.Pnajj4)),
                          (0, r.jsx)(R.Z.Title, {
                              level: b,
                              onContextMenu: d,
                              onClick: u,
                              children: O
                          })
                      ]
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          Y(g, t.type === w.d4z.GUILD_ANNOUNCEMENT ? L.intl.string(L.t.l1dkSE) : L.intl.string(L.t.Pnajj4)),
                          (0, r.jsx)(R.Z.Title, {
                              level: b,
                              onContextMenu: d,
                              onClick: u,
                              children: O
                          }),
                          null != m ? m() : null
                      ]
                  });
        case w.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    Y(g, L.intl.string(L.t.BVZqJi)),
                    (0, r.jsx)(R.Z.Title, {
                        level: b,
                        onContextMenu: d,
                        onClick: u,
                        children: O
                    })
                ]
            });
        case w.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    Y(g, L.intl.string(L.t.EErMzM)),
                    (0, r.jsx)(R.Z.Title, {
                        level: b,
                        onContextMenu: d,
                        onClick: u,
                        children: O
                    })
                ]
            });
        case w.d4z.ANNOUNCEMENT_THREAD:
        case w.d4z.PUBLIC_THREAD:
        case w.d4z.PRIVATE_THREAD:
            let I = null;
            if (!l && null != o) {
                let e = (0, _.KS)(o, s);
                I = (0, r.jsxs)(i.Fragment, {
                    children: [
                        Y(e, L.intl.string(L.t.Pnajj4)),
                        (0, r.jsx)(R.Z.Title, {
                            level: b,
                            onContextMenu: h,
                            onClick: p,
                            className: a()(x.parentChannelName, x.cursorPointer),
                            children: (0, f.F6)(o, v.default, y.Z)
                        }),
                        (0, r.jsx)(R.Z.Caret, {})
                    ]
                });
            }
            let T = (null == o ? void 0 : o.type) != null && w.TPd.GUILD_THREADS_ONLY.has(o.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    I,
                    Y(T ? null : g, L.intl.string(L.t['7Xm5QE'])),
                    (0, r.jsx)(R.Z.Title, {
                        level: b,
                        onContextMenu: d,
                        onClick: u,
                        className: a()({
                            [x.cursorPointer]: l,
                            [x.forumPostTitle]: T,
                            [x.forumPostSidebarTitle]: l && T
                        }),
                        children: O
                    })
                ]
            });
        case w.d4z.GUILD_DIRECTORY:
            let S = (null == s ? void 0 : s.features.has(w.oNc.HUB)) ? L.intl.formatToPlainString(L.t.Dy2aho, { guildName: n }) : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== g
                        ? (0, r.jsx)(R.Z.ChannelIcon, {
                              icon: g,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, r.jsxs)(R.Z.Title, {
                        level: b,
                        onContextMenu: d,
                        onClick: u,
                        children: [
                            null != E
                                ? (0, r.jsxs)(c.nn4, {
                                      children: [E, ':']
                                  })
                                : null,
                            ' ',
                            S
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
function F(e) {
    var t, n;
    return null != (n = null == (t = e.badges) ? void 0 : t.some((e) => e.id.startsWith('staff'))) && n;
}
let V = (e) => {
    var t;
    let { channel: n } = e,
        o = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        a = (0, s.e7)([v.default], () => v.default.getUser(n.getRecipientId())),
        l = (0, S.G)(),
        c = (0, s.e7)([E.Z], () => (null != a ? E.Z.getUserProfile(a.id) : null)),
        u = null != c && (null != (t = null == c ? void 0 : c.fetchEndedAt) ? t : 0) > 0;
    return (i.useEffect(() => {
        (null == o ? void 0 : o.isStaff()) &&
            null != a &&
            !a.isStaff() &&
            (0, b.Z)(a.id, a.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0
            });
    }, [o, a]),
    n.isDM() && (null == o ? void 0 : o.isStaff()) && null != a)
        ? a.isStaff()
            ? (0, r.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM })
            : l && u && !F(c)
              ? (0, r.jsx)(d.Z, { type: d.Z.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function H(e, t) {
    switch (e.type) {
        case w.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(V, { channel: e }), (0, r.jsx)(A.Z, { channel: e }, e.id)]
            });
        case w.d4z.GUILD_ANNOUNCEMENT:
        case w.d4z.GUILD_TEXT:
        case w.d4z.GUILD_VOICE:
        case w.d4z.GUILD_STAGE_VOICE:
        case w.d4z.GROUP_DM:
            return null != t
                ? (0, r.jsx)(
                      C.Z,
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
function Y(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(R.Z.ChannelIcon, {
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, r.jsx)(c.nn4, { children: t })
        ]
    });
}
function W(e) {
    let { guild: t, channel: n, caretPosition: o = 'left' } = e,
        a = (0, s.e7)([O.Z], () => O.Z.getGuildId()),
        l = (0, m.D)(),
        u = i.useRef(null);
    if ((a !== w.I_8 && !l) || null == t) return null;
    let d = () => {
        (0, g.XU)(t.id, n.id);
    };
    return (0, r.jsx)(c.ua7, {
        text: t.name,
        targetElementRef: u,
        position: 'bottom',
        children: (e) =>
            (0, r.jsxs)(
                c.P3F,
                U(k({}, e), {
                    onClick: d,
                    className: x.guildBreadcrumbContainer,
                    children: [
                        'left' === o && (0, r.jsx)(R.Z.Caret, { direction: 'left' }),
                        (0, r.jsx)('div', {
                            ref: u,
                            children: (0, r.jsx)(h.Z, {
                                guild: t,
                                size: h.Z.Sizes.SMALLER,
                                className: x.guildBreadcrumbIcon,
                                active: !0
                            })
                        }),
                        'right' === o && (0, r.jsx)(R.Z.Caret, { direction: 'right' })
                    ]
                })
            )
    });
}
function K(e, t) {
    var n, r;
    switch (e) {
        case w.d4z.DM:
            return {
                prefix: L.intl.string(L.t.EJRzg4),
                level: 1
            };
        case w.d4z.GROUP_DM:
            return {
                prefix: L.intl.string(L.t['e5y+go']),
                level: 1
            };
        case w.d4z.GUILD_DIRECTORY:
            return {
                prefix: null != (n = null == t ? void 0 : t.name) ? n : '',
                level: 1
            };
        case w.d4z.GUILD_ANNOUNCEMENT:
        case w.d4z.GUILD_TEXT:
        case w.d4z.GUILD_FORUM:
        case w.d4z.GUILD_MEDIA:
        case w.d4z.GUILD_STAGE_VOICE:
        case w.d4z.GUILD_VOICE:
            return {
                prefix: null != (r = null == t ? void 0 : t.name) ? r : '',
                level: 1
            };
        case w.d4z.ANNOUNCEMENT_THREAD:
        case w.d4z.PUBLIC_THREAD:
        case w.d4z.PRIVATE_THREAD:
            return {
                prefix: L.intl.string(L.t['7Xm5QE']),
                level: 2
            };
        default:
            return {
                prefix: null,
                level: 1
            };
    }
}
