n.d(t, {
    TS: () => U,
    ud: () => R,
    v0: () => L
}),
    n(388685);
var r = n(200651),
    i = n(192379),
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
    g = n(982168),
    b = n(703656),
    _ = n(699516),
    y = n(914010),
    C = n(594174),
    x = n(768581),
    v = n(63063),
    j = n(946734),
    O = n(99843),
    E = n(372564),
    I = n(984370),
    P = n(217314),
    S = n(981631),
    Z = n(921944),
    N = n(388032),
    T = n(776571),
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
                ? [N.intl.string(N.t.XJVlf3), void 0]
                : [
                      (0, r.jsxs)(
                          'div',
                          {
                              className: A.linkedLobbyEducationTooltip,
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
                                      className: A.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => a(Z.L.USER_DISMISS),
                                      children: (0, r.jsx)(c.Dio, {
                                          className: A.linkedLobbyEducationTooltipCloseIcon,
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
    let { channel: t, channelName: n, parentChannel: l, guild: a, inSidebar: s = !1, handleClick: u, handleContextMenu: d, handleParentClick: f, handleParentContextMenu: m, renderFollowButton: b } = e,
        y = (0, h.KS)(t, a),
        { prefix: x, level: v } = (function (e, t) {
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
        })(t.type, a),
        j = (0, g.gT)(t),
        E = (0, r.jsxs)(r.Fragment, {
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
                level: v,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case S.d4z.GROUP_DM:
            if (t.isManaged()) return E;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.nn4, { children: N.intl.string(N.t['e5y+go']) }),
                    (0, r.jsx)(
                        O.Z,
                        {
                            channel: t,
                            legacyIconClassName: A.avatar
                        },
                        'channel-'.concat(t.id)
                    )
                ]
            });
        case S.d4z.GUILD_ANNOUNCEMENT:
        case S.d4z.GUILD_TEXT:
        case S.d4z.GUILD_FORUM:
        case S.d4z.GUILD_MEDIA:
            if (j)
                return (0, r.jsx)(k, {
                    level: v,
                    handleContextMenu: d,
                    handleClick: u
                });
            return null != t.linkedLobby
                ? (0, r.jsxs)(w, {
                      channel: t,
                      children: [
                          D(y, t.type === S.d4z.GUILD_ANNOUNCEMENT ? N.intl.string(N.t.l1dkSE) : N.intl.string(N.t.Pnajj4)),
                          (0, r.jsx)(I.Z.Title, {
                              level: v,
                              onContextMenu: d,
                              onClick: u,
                              children: E
                          })
                      ]
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          D(y, t.type === S.d4z.GUILD_ANNOUNCEMENT ? N.intl.string(N.t.l1dkSE) : N.intl.string(N.t.Pnajj4)),
                          (0, r.jsx)(I.Z.Title, {
                              level: v,
                              onContextMenu: d,
                              onClick: u,
                              children: E
                          }),
                          null != b ? b() : null
                      ]
                  });
        case S.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    D(y, N.intl.string(N.t.BVZqJi)),
                    (0, r.jsx)(I.Z.Title, {
                        level: v,
                        onContextMenu: d,
                        onClick: u,
                        children: E
                    })
                ]
            });
        case S.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    D(y, N.intl.string(N.t.EErMzM)),
                    (0, r.jsx)(I.Z.Title, {
                        level: v,
                        onContextMenu: d,
                        onClick: u,
                        children: E
                    })
                ]
            });
        case S.d4z.ANNOUNCEMENT_THREAD:
        case S.d4z.PUBLIC_THREAD:
        case S.d4z.PRIVATE_THREAD:
            let Z = null;
            if (!s && j)
                Z = (0, r.jsxs)(i.Fragment, {
                    children: [
                        (0, r.jsx)(k, {
                            level: v,
                            handleContextMenu: m,
                            handleClick: f
                        }),
                        (0, r.jsx)(I.Z.Caret, {})
                    ]
                });
            else if (!s && null != l) {
                let e = (0, h.KS)(l, a);
                Z = (0, r.jsxs)(i.Fragment, {
                    children: [
                        D(e, N.intl.string(N.t.Pnajj4)),
                        (0, r.jsx)(I.Z.Title, {
                            level: v,
                            onContextMenu: m,
                            onClick: f,
                            className: o()(A.parentChannelName, A.cursorPointer),
                            children: (0, p.F6)(l, C.default, _.Z)
                        }),
                        (0, r.jsx)(I.Z.Caret, {})
                    ]
                });
            }
            let T = (null == l ? void 0 : l.type) != null && S.TPd.GUILD_THREADS_ONLY.has(l.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    Z,
                    D(T ? null : y, N.intl.string(N.t['7Xm5QE'])),
                    (0, r.jsx)(I.Z.Title, {
                        level: v,
                        onContextMenu: d,
                        onClick: u,
                        className: o()({
                            [A.cursorPointer]: s,
                            [A.forumPostTitle]: T
                        }),
                        children: E
                    })
                ]
            });
        case S.d4z.GUILD_DIRECTORY:
            let R = (null == a ? void 0 : a.hasFeature(S.oNc.HUB)) ? N.intl.formatToPlainString(N.t.Dy2aho, { guildName: n }) : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== y
                        ? (0, r.jsx)(I.Z.Icon, {
                              iconClassName: A.__invalid_icon,
                              icon: y,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, r.jsxs)(I.Z.Title, {
                        level: v,
                        onContextMenu: d,
                        onClick: u,
                        children: [
                            null != x
                                ? (0, r.jsxs)(c.nn4, {
                                      children: [x, ':']
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
let k = (e) => {
        let { level: t, handleContextMenu: n, handleClick: l } = e;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                D(c._XJ, N.intl.string(N.t.Pnajj4)),
                (0, r.jsx)(I.Z.Title, {
                    level: t,
                    onContextMenu: n,
                    onClick: l,
                    children: N.intl.string(T.default['kI3X9/'])
                })
            ]
        });
    },
    M = (e) => {
        let { channel: t } = e,
            n = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
            i = (0, a.e7)([C.default], () => C.default.getUser(t.getRecipientId()));
        return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == i ? void 0 : i.isStaff()) ? (0, r.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM }) : null;
    };
function L(e, t) {
    switch (e.type) {
        case S.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(M, { channel: e }), (0, r.jsx)(j.Z, { channel: e }, e.id)]
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
function D(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(I.Z.Icon, {
                    iconClassName: A.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, r.jsx)(c.nn4, { children: t })
        ]
    });
}
function U(e) {
    let { guild: t, channel: n, caretPosition: i = 'left' } = e;
    return (0, a.e7)([y.Z], () => y.Z.getGuildId()) !== S.I_8 || null == t
        ? null
        : (0, r.jsxs)('div', {
              className: A.guildBreadcrumbContainer,
              children: [
                  'left' === i && (0, r.jsx)(I.Z.Caret, { direction: 'left' }),
                  (0, r.jsx)(m.Z, {
                      guild: t,
                      size: m.Z.Sizes.SMALLER,
                      className: A.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, r.jsx)(I.Z.Title, {
                      onClick: () => {
                          (0, b.XU)(t.id, n.id);
                      },
                      className: o()(A.parentChannelName, A.cursorPointer),
                      children: t.name
                  }),
                  'right' === i && (0, r.jsx)(I.Z.Caret, { direction: 'right' })
              ]
          });
}
