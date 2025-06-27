n.d(t, {
    TS: () => L,
    ud: () => R,
    v0: () => M
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
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
    y = n(914010),
    C = n(594174),
    x = n(768581),
    v = n(63063),
    j = n(374386),
    O = n(946734),
    E = n(99843),
    I = n(372564),
    S = n(984370),
    P = n(217314),
    Z = n(981631),
    N = n(921944),
    T = n(388032),
    A = n(100658);
function w(e) {
    var t;
    let { channel: n, children: i } = e,
        l = (0, u.q)(null == (t = n.linkedLobby) ? void 0 : t.application_id),
        [o, a] = (0, f.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let d = x.ZP.getApplicationIconURL({
            id: l.id,
            icon: l.icon,
            size: 14
        }),
        [p, h] =
            o !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [T.intl.string(T.t.XJVlf3), void 0]
                : [
                      (0, r.jsxs)(
                          'div',
                          {
                              className: A.linkedLobbyEducationTooltip,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: T.intl.string(T.t.YIVr4O)
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: T.intl.format(T.t['16agur'], { helpdeskArticle: v.Z.getArticleURL(Z.BhN.LINKED_LOBBIES) })
                                  }),
                                  (0, r.jsx)(c.P3F, {
                                      className: A.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => a(N.L.USER_DISMISS),
                                      children: (0, r.jsx)(c.Dio, {
                                          className: A.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      T.intl.string(T.t.YIVr4O)
                  ];
    return (0, r.jsx)(
        c.ua7,
        {
            tooltipClassName: A.linkedLobbyEducationTooltipWrapper,
            position: 'bottom',
            align: 'left',
            text: p,
            'aria-label': h,
            forceOpen: o === s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
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
                    })({ className: A.linkedLobbyTooltip }, e)),
                    (n = n =
                        {
                            children: [
                                i,
                                (0, r.jsxs)(c.Text, {
                                    className: A.linkedLobby,
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: [
                                        '\u2022',
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            src: d,
                                            className: A.linkedLobbyApplicationIcon
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
        o
    );
}
function R(e) {
    let { channel: t, channelName: n, parentChannel: l, guild: a, inSidebar: s = !1, handleClick: u, handleContextMenu: d, handleParentClick: f, handleParentContextMenu: m, renderFollowButton: g } = e,
        b = (0, h.KS)(t, a),
        { prefix: y, level: x } = (function (e, t) {
            var n, r;
            switch (e) {
                case Z.d4z.DM:
                    return {
                        prefix: T.intl.string(T.t.EJRzg4),
                        level: 1
                    };
                case Z.d4z.GROUP_DM:
                    return {
                        prefix: T.intl.string(T.t['e5y+go']),
                        level: 1
                    };
                case Z.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null != (n = null == t ? void 0 : t.name) ? n : '',
                        level: 1
                    };
                case Z.d4z.GUILD_ANNOUNCEMENT:
                case Z.d4z.GUILD_TEXT:
                case Z.d4z.GUILD_FORUM:
                case Z.d4z.GUILD_MEDIA:
                case Z.d4z.GUILD_STAGE_VOICE:
                case Z.d4z.GUILD_VOICE:
                    return {
                        prefix: null != (r = null == t ? void 0 : t.name) ? r : '',
                        level: 1
                    };
                case Z.d4z.ANNOUNCEMENT_THREAD:
                case Z.d4z.PUBLIC_THREAD:
                case Z.d4z.PRIVATE_THREAD:
                    return {
                        prefix: T.intl.string(T.t['7Xm5QE']),
                        level: 2
                    };
                default:
                    return {
                        prefix: null,
                        level: 1
                    };
            }
        })(t.type, a),
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                null != y
                    ? (0, r.jsxs)(c.nn4, {
                          children: [y, ':']
                      })
                    : null,
                ' ',
                n
            ]
        });
    switch (t.type) {
        case Z.d4z.DM:
            return (0, r.jsx)(P.Z, {
                level: x,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case Z.d4z.GROUP_DM:
            if (t.isManaged()) return v;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.nn4, { children: T.intl.string(T.t['e5y+go']) }),
                    (0, r.jsx)(
                        E.Z,
                        {
                            channel: t,
                            legacyIconClassName: A.avatar
                        },
                        'channel-'.concat(t.id)
                    )
                ]
            });
        case Z.d4z.GUILD_ANNOUNCEMENT:
        case Z.d4z.GUILD_TEXT:
        case Z.d4z.GUILD_FORUM:
        case Z.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, r.jsxs)(w, {
                      channel: t,
                      children: [
                          D(b, t.type === Z.d4z.GUILD_ANNOUNCEMENT ? T.intl.string(T.t.l1dkSE) : T.intl.string(T.t.Pnajj4)),
                          (0, r.jsx)(S.Z.Title, {
                              level: x,
                              onContextMenu: d,
                              onClick: u,
                              children: v
                          })
                      ]
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          D(b, t.type === Z.d4z.GUILD_ANNOUNCEMENT ? T.intl.string(T.t.l1dkSE) : T.intl.string(T.t.Pnajj4)),
                          (0, r.jsx)(S.Z.Title, {
                              level: x,
                              onContextMenu: d,
                              onClick: u,
                              children: v
                          }),
                          null != g ? g() : null
                      ]
                  });
        case Z.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    D(b, T.intl.string(T.t.BVZqJi)),
                    (0, r.jsx)(S.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case Z.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    D(b, T.intl.string(T.t.EErMzM)),
                    (0, r.jsx)(S.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case Z.d4z.ANNOUNCEMENT_THREAD:
        case Z.d4z.PUBLIC_THREAD:
        case Z.d4z.PRIVATE_THREAD:
            let j = null;
            if (!s && null != l) {
                let e = (0, h.KS)(l, a);
                j = (0, r.jsxs)(i.Fragment, {
                    children: [
                        D(e, T.intl.string(T.t.Pnajj4)),
                        (0, r.jsx)(S.Z.Title, {
                            level: x,
                            onContextMenu: m,
                            onClick: f,
                            className: o()(A.parentChannelName, A.cursorPointer),
                            children: (0, p.F6)(l, C.default, _.Z)
                        }),
                        (0, r.jsx)(S.Z.Caret, {})
                    ]
                });
            }
            let O = (null == l ? void 0 : l.type) != null && Z.TPd.GUILD_THREADS_ONLY.has(l.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    j,
                    D(O ? null : b, T.intl.string(T.t['7Xm5QE'])),
                    (0, r.jsx)(S.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        className: o()({
                            [A.cursorPointer]: s,
                            [A.forumPostTitle]: O
                        }),
                        children: v
                    })
                ]
            });
        case Z.d4z.GUILD_DIRECTORY:
            let I = (null == a ? void 0 : a.hasFeature(Z.oNc.HUB)) ? T.intl.formatToPlainString(T.t.Dy2aho, { guildName: n }) : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== b
                        ? (0, r.jsx)(S.Z.Icon, {
                              iconClassName: A.__invalid_icon,
                              icon: b,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, r.jsxs)(S.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: [
                            null != y
                                ? (0, r.jsxs)(c.nn4, {
                                      children: [y, ':']
                                  })
                                : null,
                            ' ',
                            I
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
let k = (e) => {
    let { channel: t } = e,
        n = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
        i = (0, a.e7)([C.default], () => C.default.getUser(t.getRecipientId())),
        l = (0, j.G)();
    return t.isDM() && (null == n ? void 0 : n.isStaff()) && null != i ? (i.isStaff() ? (0, r.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM }) : l ? (0, r.jsx)(d.Z, { type: d.Z.Types.NOT_STAFF_WARNING }) : null) : null;
};
function M(e, t) {
    switch (e.type) {
        case Z.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(k, { channel: e }), (0, r.jsx)(O.Z, { channel: e }, e.id)]
            });
        case Z.d4z.GUILD_ANNOUNCEMENT:
        case Z.d4z.GUILD_TEXT:
        case Z.d4z.GUILD_VOICE:
        case Z.d4z.GUILD_STAGE_VOICE:
        case Z.d4z.GROUP_DM:
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
function D(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(S.Z.Icon, {
                    iconClassName: A.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, r.jsx)(c.nn4, { children: t })
        ]
    });
}
function L(e) {
    let { guild: t, channel: n, caretPosition: i = 'left' } = e,
        l = (0, a.e7)([y.Z], () => y.Z.getGuildId()),
        s = (0, g.D)();
    return (l === Z.I_8 || s) && null != t
        ? (0, r.jsxs)('div', {
              className: A.guildBreadcrumbContainer,
              children: [
                  'left' === i && (0, r.jsx)(S.Z.Caret, { direction: 'left' }),
                  (0, r.jsx)(m.Z, {
                      guild: t,
                      size: m.Z.Sizes.SMALLER,
                      className: A.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, r.jsx)(S.Z.Title, {
                      onClick: () => {
                          (0, b.XU)(t.id, n.id);
                      },
                      className: o()(A.parentChannelName, A.cursorPointer),
                      children: t.name
                  }),
                  'right' === i && (0, r.jsx)(S.Z.Caret, { direction: 'right' })
              ]
          })
        : null;
}
