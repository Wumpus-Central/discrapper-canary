(n.d(t, {
    TS: () => H,
    ud: () => L,
    v0: () => B
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(835473),
    d = n(385499),
    p = n(933557),
    h = n(471445),
    f = n(243778),
    m = n(565138),
    g = n(370774),
    b = n(703656),
    _ = n(621853),
    y = n(484459),
    C = n(699516),
    x = n(914010),
    v = n(594174),
    O = n(768581),
    j = n(63063),
    E = n(374386),
    S = n(946734),
    P = n(99843),
    I = n(372564),
    Z = n(984370),
    N = n(217314),
    T = n(981631),
    A = n(921944),
    w = n(388032),
    R = n(100658);
function M(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function D(e, t) {
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
function k(e) {
    var t;
    let { channel: n, children: i } = e,
        l = (0, u.q)(null == (t = n.linkedLobby) ? void 0 : t.application_id),
        [a, o] = (0, f.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let d = O.ZP.getApplicationIconURL({
            id: l.id,
            icon: l.icon,
            size: 14
        }),
        [p, h] =
            a !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [w.intl.string(w.t.XJVlf3), void 0]
                : [
                      (0, r.jsxs)(
                          'div',
                          {
                              className: R.linkedLobbyEducationTooltip,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: w.intl.string(w.t.YIVr4O)
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: w.intl.format(w.t['16agur'], { helpdeskArticle: j.Z.getArticleURL(T.BhN.LINKED_LOBBIES) })
                                  }),
                                  (0, r.jsx)(c.P3F, {
                                      className: R.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => o(A.L.USER_DISMISS),
                                      children: (0, r.jsx)(c.Dio, {
                                          className: R.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      w.intl.string(w.t.YIVr4O)
                  ];
    return (0, r.jsx)(
        c.ua7,
        {
            tooltipClassName: R.linkedLobbyEducationTooltipWrapper,
            position: 'bottom',
            align: 'left',
            text: p,
            'aria-label': h,
            forceOpen: a === s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (e) =>
                (0, r.jsxs)(
                    'div',
                    D(M({ className: R.linkedLobbyTooltip }, e), {
                        children: [
                            i,
                            (0, r.jsxs)(c.Text, {
                                className: R.linkedLobby,
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                children: [
                                    '\u2022',
                                    (0, r.jsx)('img', {
                                        alt: '',
                                        src: d,
                                        className: R.linkedLobbyApplicationIcon
                                    }),
                                    l.name
                                ]
                            })
                        ]
                    })
                )
        },
        a
    );
}
function L(e) {
    let { channel: t, channelName: n, parentChannel: l, guild: o, inSidebar: s = !1, handleClick: u, handleContextMenu: d, handleParentClick: f, handleParentContextMenu: m, renderFollowButton: g } = e,
        b = (0, h.KS)(t, o),
        { prefix: _, level: y } = (function (e, t) {
            var n, r;
            switch (e) {
                case T.d4z.DM:
                    return {
                        prefix: w.intl.string(w.t.EJRzg4),
                        level: 1
                    };
                case T.d4z.GROUP_DM:
                    return {
                        prefix: w.intl.string(w.t['e5y+go']),
                        level: 1
                    };
                case T.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null != (n = null == t ? void 0 : t.name) ? n : '',
                        level: 1
                    };
                case T.d4z.GUILD_ANNOUNCEMENT:
                case T.d4z.GUILD_TEXT:
                case T.d4z.GUILD_FORUM:
                case T.d4z.GUILD_MEDIA:
                case T.d4z.GUILD_STAGE_VOICE:
                case T.d4z.GUILD_VOICE:
                    return {
                        prefix: null != (r = null == t ? void 0 : t.name) ? r : '',
                        level: 1
                    };
                case T.d4z.ANNOUNCEMENT_THREAD:
                case T.d4z.PUBLIC_THREAD:
                case T.d4z.PRIVATE_THREAD:
                    return {
                        prefix: w.intl.string(w.t['7Xm5QE']),
                        level: 2
                    };
                default:
                    return {
                        prefix: null,
                        level: 1
                    };
            }
        })(t.type, o),
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                null != _
                    ? (0, r.jsxs)(c.nn4, {
                          children: [_, ':']
                      })
                    : null,
                ' ',
                n
            ]
        });
    switch (t.type) {
        case T.d4z.DM:
            return (0, r.jsx)(N.Z, {
                level: y,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case T.d4z.GROUP_DM:
            if (t.isManaged()) return x;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.nn4, { children: w.intl.string(w.t['e5y+go']) }),
                    (0, r.jsx)(
                        P.Z,
                        {
                            channel: t,
                            legacyIconClassName: R.avatar
                        },
                        'channel-'.concat(t.id)
                    )
                ]
            });
        case T.d4z.GUILD_ANNOUNCEMENT:
        case T.d4z.GUILD_TEXT:
        case T.d4z.GUILD_FORUM:
        case T.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, r.jsxs)(k, {
                      channel: t,
                      children: [
                          F(b, t.type === T.d4z.GUILD_ANNOUNCEMENT ? w.intl.string(w.t.l1dkSE) : w.intl.string(w.t.Pnajj4)),
                          (0, r.jsx)(Z.Z.Title, {
                              level: y,
                              onContextMenu: d,
                              onClick: u,
                              children: x
                          })
                      ]
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          F(b, t.type === T.d4z.GUILD_ANNOUNCEMENT ? w.intl.string(w.t.l1dkSE) : w.intl.string(w.t.Pnajj4)),
                          (0, r.jsx)(Z.Z.Title, {
                              level: y,
                              onContextMenu: d,
                              onClick: u,
                              children: x
                          }),
                          null != g ? g() : null
                      ]
                  });
        case T.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    F(b, w.intl.string(w.t.BVZqJi)),
                    (0, r.jsx)(Z.Z.Title, {
                        level: y,
                        onContextMenu: d,
                        onClick: u,
                        children: x
                    })
                ]
            });
        case T.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    F(b, w.intl.string(w.t.EErMzM)),
                    (0, r.jsx)(Z.Z.Title, {
                        level: y,
                        onContextMenu: d,
                        onClick: u,
                        children: x
                    })
                ]
            });
        case T.d4z.ANNOUNCEMENT_THREAD:
        case T.d4z.PUBLIC_THREAD:
        case T.d4z.PRIVATE_THREAD:
            let O = null;
            if (!s && null != l) {
                let e = (0, h.KS)(l, o);
                O = (0, r.jsxs)(i.Fragment, {
                    children: [
                        F(e, w.intl.string(w.t.Pnajj4)),
                        (0, r.jsx)(Z.Z.Title, {
                            level: y,
                            onContextMenu: m,
                            onClick: f,
                            className: a()(R.parentChannelName, R.cursorPointer),
                            children: (0, p.F6)(l, v.default, C.Z)
                        }),
                        (0, r.jsx)(Z.Z.Caret, {})
                    ]
                });
            }
            let j = (null == l ? void 0 : l.type) != null && T.TPd.GUILD_THREADS_ONLY.has(l.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    O,
                    F(j ? null : b, w.intl.string(w.t['7Xm5QE'])),
                    (0, r.jsx)(Z.Z.Title, {
                        level: y,
                        onContextMenu: d,
                        onClick: u,
                        className: a()({
                            [R.cursorPointer]: s,
                            [R.forumPostTitle]: j
                        }),
                        children: x
                    })
                ]
            });
        case T.d4z.GUILD_DIRECTORY:
            let E = (null == o ? void 0 : o.features.has(T.oNc.HUB)) ? w.intl.formatToPlainString(w.t.Dy2aho, { guildName: n }) : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== b
                        ? (0, r.jsx)(Z.Z.Icon, {
                              iconClassName: R.__invalid_icon,
                              icon: b,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, r.jsxs)(Z.Z.Title, {
                        level: y,
                        onContextMenu: d,
                        onClick: u,
                        children: [
                            null != _
                                ? (0, r.jsxs)(c.nn4, {
                                      children: [_, ':']
                                  })
                                : null,
                            ' ',
                            E
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
let U = (e) => {
    let { channel: t } = e,
        n = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        l = (0, o.e7)([v.default], () => v.default.getUser(t.getRecipientId())),
        a = (0, E.G)(),
        s = (0, o.e7)([_.Z], () => null != l && void 0 !== _.Z.getUserProfile(l.id));
    return (i.useEffect(() => {
        (null == n ? void 0 : n.isStaff()) &&
            null != l &&
            !l.isStaff() &&
            (0, y.Z)(l.id, l.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0
            });
    }, [n, l]),
    t.isDM() && (null == n ? void 0 : n.isStaff()) && null != l)
        ? l.isStaff()
            ? (0, r.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM })
            : a && s
              ? (0, r.jsx)(d.Z, { type: d.Z.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function B(e, t) {
    switch (e.type) {
        case T.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(U, { channel: e }), (0, r.jsx)(S.Z, { channel: e }, e.id)]
            });
        case T.d4z.GUILD_ANNOUNCEMENT:
        case T.d4z.GUILD_TEXT:
        case T.d4z.GUILD_VOICE:
        case T.d4z.GUILD_STAGE_VOICE:
        case T.d4z.GROUP_DM:
            return null != t
                ? (0, r.jsx)(
                      I.Z,
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
function F(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(Z.Z.Icon, {
                    iconClassName: R.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, r.jsx)(c.nn4, { children: t })
        ]
    });
}
function H(e) {
    let { guild: t, channel: n, caretPosition: l = 'left' } = e,
        a = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        s = (0, g.D)(),
        u = i.useRef(null);
    if ((a !== T.I_8 && !s) || null == t) return null;
    let d = () => {
        (0, b.XU)(t.id, n.id);
    };
    return (0, r.jsx)(c.ua7, {
        text: t.name,
        targetElementRef: u,
        position: 'bottom',
        children: (e) =>
            (0, r.jsxs)(
                c.P3F,
                D(M({}, e), {
                    onClick: d,
                    className: R.guildBreadcrumbContainer,
                    children: [
                        'left' === l && (0, r.jsx)(Z.Z.Caret, { direction: 'left' }),
                        (0, r.jsx)('div', {
                            ref: u,
                            children: (0, r.jsx)(m.Z, {
                                guild: t,
                                size: m.Z.Sizes.SMALLER,
                                className: R.guildBreadcrumbIcon,
                                active: !0
                            })
                        }),
                        'right' === l && (0, r.jsx)(Z.Z.Caret, { direction: 'right' })
                    ]
                })
            )
    });
}
