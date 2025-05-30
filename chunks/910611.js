n.d(t, {
    TS: () => L,
    ud: () => w,
    v0: () => k
}),
    n(388685);
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
    _ = n(699516),
    x = n(914010),
    y = n(594174),
    C = n(768581),
    v = n(63063),
    j = n(946734),
    O = n(99843),
    E = n(372564),
    I = n(984370),
    P = n(217314),
    S = n(981631),
    Z = n(921944),
    N = n(388032),
    T = n(100658);
function A(e) {
    var t;
    let { channel: n, children: i } = e,
        l = (0, u.q)(null == (t = n.linkedLobby) ? void 0 : t.application_id),
        [a, o] = (0, f.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let d = C.ZP.getApplicationIconURL({
            id: l.id,
            icon: l.icon,
            size: 14
        }),
        [p, h] =
            a !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [N.intl.string(N.t.XJVlf3), void 0]
                : [
                      (0, r.jsxs)(
                          'div',
                          {
                              className: T.linkedLobbyEducationTooltip,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: N.intl.string(N.t.YIVr4O)
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: N.intl.format(N.t['16agur'], { helpdeskArticle: v.Z.getArticleURL(S.BhN.CHANNEL_LINKED_LOBBIES) })
                                  }),
                                  (0, r.jsx)(c.P3F, {
                                      className: T.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => o(Z.L.USER_DISMISS),
                                      children: (0, r.jsx)(c.Dio, {
                                          className: T.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      N.intl.string(N.t.YIVr4O)
                  ];
    return (0, r.jsx)(
        c.ua7,
        {
            tooltipClassName: T.linkedLobbyEducationTooltipWrapper,
            position: 'bottom',
            align: 'left',
            text: p,
            'aria-label': h,
            forceOpen: a === s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (e) => {
                var t, n;
                return (0, r.jsxs)(
                    'div',
                    ((t = (function (e) {
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
                    })({ className: T.linkedLobbyTooltip }, e)),
                    (n = n =
                        {
                            children: [
                                i,
                                (0, r.jsxs)(c.Text, {
                                    className: T.linkedLobby,
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: [
                                        '\u2022',
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            src: d,
                                            className: T.linkedLobbyApplicationIcon
                                        }),
                                        l.name
                                    ]
                                })
                            ]
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }
        },
        a
    );
}
function w(e) {
    let { channel: t, channelName: n, parentChannel: l, guild: o, inSidebar: s = !1, handleClick: u, handleContextMenu: d, handleParentClick: f, handleParentContextMenu: m, renderFollowButton: g } = e,
        b = (0, h.KS)(t, o),
        { prefix: x, level: C } = (function (e, t) {
            var n, r;
            switch (e) {
                case S.d4z.DM:
                    return {
                        prefix: N.intl.string(N.t.EJRzg4),
                        level: 1
                    };
                case S.d4z.GROUP_DM:
                    return {
                        prefix: N.intl.string(N.t['e5y+go']),
                        level: 1
                    };
                case S.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null != (n = null == t ? void 0 : t.name) ? n : '',
                        level: 1
                    };
                case S.d4z.GUILD_ANNOUNCEMENT:
                case S.d4z.GUILD_TEXT:
                case S.d4z.GUILD_FORUM:
                case S.d4z.GUILD_MEDIA:
                case S.d4z.GUILD_STAGE_VOICE:
                case S.d4z.GUILD_VOICE:
                    return {
                        prefix: null != (r = null == t ? void 0 : t.name) ? r : '',
                        level: 1
                    };
                case S.d4z.ANNOUNCEMENT_THREAD:
                case S.d4z.PUBLIC_THREAD:
                case S.d4z.PRIVATE_THREAD:
                    return {
                        prefix: N.intl.string(N.t['7Xm5QE']),
                        level: 2
                    };
                default:
                    return {
                        prefix: null,
                        level: 1
                    };
            }
        })(t.type, o),
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                null != x
                    ? (0, r.jsxs)(c.nn4, {
                          children: [x, ':']
                      })
                    : null,
                ' ',
                n
            ]
        });
    switch (t.type) {
        case S.d4z.DM:
            return (0, r.jsx)(P.Z, {
                level: C,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case S.d4z.GROUP_DM:
            if (t.isManaged()) return v;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.nn4, { children: N.intl.string(N.t['e5y+go']) }),
                    (0, r.jsx)(
                        O.Z,
                        {
                            channel: t,
                            legacyIconClassName: T.avatar
                        },
                        'channel-'.concat(t.id)
                    )
                ]
            });
        case S.d4z.GUILD_ANNOUNCEMENT:
        case S.d4z.GUILD_TEXT:
        case S.d4z.GUILD_FORUM:
        case S.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, r.jsxs)(A, {
                      channel: t,
                      children: [
                          M(b, t.type === S.d4z.GUILD_ANNOUNCEMENT ? N.intl.string(N.t.l1dkSE) : N.intl.string(N.t.Pnajj4)),
                          (0, r.jsx)(I.Z.Title, {
                              level: C,
                              onContextMenu: d,
                              onClick: u,
                              children: v
                          })
                      ]
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          M(b, t.type === S.d4z.GUILD_ANNOUNCEMENT ? N.intl.string(N.t.l1dkSE) : N.intl.string(N.t.Pnajj4)),
                          (0, r.jsx)(I.Z.Title, {
                              level: C,
                              onContextMenu: d,
                              onClick: u,
                              children: v
                          }),
                          null != g ? g() : null
                      ]
                  });
        case S.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    M(b, N.intl.string(N.t.BVZqJi)),
                    (0, r.jsx)(I.Z.Title, {
                        level: C,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case S.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    M(b, N.intl.string(N.t.EErMzM)),
                    (0, r.jsx)(I.Z.Title, {
                        level: C,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case S.d4z.ANNOUNCEMENT_THREAD:
        case S.d4z.PUBLIC_THREAD:
        case S.d4z.PRIVATE_THREAD:
            let j = null;
            if (!s && null != l) {
                let e = (0, h.KS)(l, o);
                j = (0, r.jsxs)(i.Fragment, {
                    children: [
                        M(e, N.intl.string(N.t.Pnajj4)),
                        (0, r.jsx)(I.Z.Title, {
                            level: C,
                            onContextMenu: m,
                            onClick: f,
                            className: a()(T.parentChannelName, T.cursorPointer),
                            children: (0, p.F6)(l, y.default, _.Z)
                        }),
                        (0, r.jsx)(I.Z.Caret, {})
                    ]
                });
            }
            let E = (null == l ? void 0 : l.type) != null && S.TPd.GUILD_THREADS_ONLY.has(l.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    j,
                    M(E ? null : b, N.intl.string(N.t['7Xm5QE'])),
                    (0, r.jsx)(I.Z.Title, {
                        level: C,
                        onContextMenu: d,
                        onClick: u,
                        className: a()({
                            [T.cursorPointer]: s,
                            [T.forumPostTitle]: E
                        }),
                        children: v
                    })
                ]
            });
        case S.d4z.GUILD_DIRECTORY:
            let Z = (null == o ? void 0 : o.hasFeature(S.oNc.HUB)) ? N.intl.formatToPlainString(N.t.Dy2aho, { guildName: n }) : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== b
                        ? (0, r.jsx)(I.Z.Icon, {
                              iconClassName: T.__invalid_icon,
                              icon: b,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, r.jsxs)(I.Z.Title, {
                        level: C,
                        onContextMenu: d,
                        onClick: u,
                        children: [
                            null != x
                                ? (0, r.jsxs)(c.nn4, {
                                      children: [x, ':']
                                  })
                                : null,
                            ' ',
                            Z
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
let R = (e) => {
    let { channel: t } = e,
        n = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        i = (0, o.e7)([y.default], () => y.default.getUser(t.getRecipientId()));
    return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == i ? void 0 : i.isStaff()) ? (0, r.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM }) : null;
};
function k(e, t) {
    switch (e.type) {
        case S.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(R, { channel: e }), (0, r.jsx)(j.Z, { channel: e }, e.id)]
            });
        case S.d4z.GUILD_ANNOUNCEMENT:
        case S.d4z.GUILD_TEXT:
        case S.d4z.GUILD_VOICE:
        case S.d4z.GUILD_STAGE_VOICE:
        case S.d4z.GROUP_DM:
            return null != t
                ? (0, r.jsx)(
                      E.Z,
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
function M(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(I.Z.Icon, {
                    iconClassName: T.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, r.jsx)(c.nn4, { children: t })
        ]
    });
}
function L(e) {
    let { guild: t, channel: n, caretPosition: i = 'left' } = e,
        l = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        s = (0, g.D)();
    return (l === S.I_8 || s) && null != t
        ? (0, r.jsxs)('div', {
              className: T.guildBreadcrumbContainer,
              children: [
                  'left' === i && (0, r.jsx)(I.Z.Caret, { direction: 'left' }),
                  (0, r.jsx)(m.Z, {
                      guild: t,
                      size: m.Z.Sizes.SMALLER,
                      className: T.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, r.jsx)(I.Z.Title, {
                      onClick: () => {
                          (0, b.XU)(t.id, n.id);
                      },
                      className: a()(T.parentChannelName, T.cursorPointer),
                      children: t.name
                  }),
                  'right' === i && (0, r.jsx)(I.Z.Caret, { direction: 'right' })
              ]
          })
        : null;
}
