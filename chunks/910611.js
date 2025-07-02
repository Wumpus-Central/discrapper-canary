(n.d(t, {
    TS: () => F,
    ud: () => L,
    v0: () => U
}),
    n(388685));
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
    _ = n(484459),
    y = n(699516),
    C = n(914010),
    x = n(594174),
    v = n(768581),
    j = n(63063),
    O = n(374386),
    E = n(946734),
    S = n(99843),
    I = n(372564),
    P = n(984370),
    Z = n(217314),
    N = n(981631),
    T = n(921944),
    A = n(388032),
    w = n(100658);
function R(e) {
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
function k(e, t) {
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
function M(e) {
    var t;
    let { channel: n, children: i } = e,
        l = (0, u.q)(null == (t = n.linkedLobby) ? void 0 : t.application_id),
        [o, a] = (0, f.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let d = v.ZP.getApplicationIconURL({
            id: l.id,
            icon: l.icon,
            size: 14
        }),
        [p, h] =
            o !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [A.intl.string(A.t.XJVlf3), void 0]
                : [
                      (0, r.jsxs)(
                          'div',
                          {
                              className: w.linkedLobbyEducationTooltip,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: A.intl.string(A.t.YIVr4O)
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: A.intl.format(A.t['16agur'], { helpdeskArticle: j.Z.getArticleURL(N.BhN.LINKED_LOBBIES) })
                                  }),
                                  (0, r.jsx)(c.P3F, {
                                      className: w.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => a(T.L.USER_DISMISS),
                                      children: (0, r.jsx)(c.Dio, {
                                          className: w.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      A.intl.string(A.t.YIVr4O)
                  ];
    return (0, r.jsx)(
        c.ua7,
        {
            tooltipClassName: w.linkedLobbyEducationTooltipWrapper,
            position: 'bottom',
            align: 'left',
            text: p,
            'aria-label': h,
            forceOpen: o === s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (e) =>
                (0, r.jsxs)(
                    'div',
                    k(R({ className: w.linkedLobbyTooltip }, e), {
                        children: [
                            i,
                            (0, r.jsxs)(c.Text, {
                                className: w.linkedLobby,
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                children: [
                                    '\u2022',
                                    (0, r.jsx)('img', {
                                        alt: '',
                                        src: d,
                                        className: w.linkedLobbyApplicationIcon
                                    }),
                                    l.name
                                ]
                            })
                        ]
                    })
                )
        },
        o
    );
}
function L(e) {
    let { channel: t, channelName: n, parentChannel: l, guild: a, inSidebar: s = !1, handleClick: u, handleContextMenu: d, handleParentClick: f, handleParentContextMenu: m, renderFollowButton: g } = e,
        b = (0, h.KS)(t, a),
        { prefix: _, level: C } = (function (e, t) {
            var n, r;
            switch (e) {
                case N.d4z.DM:
                    return {
                        prefix: A.intl.string(A.t.EJRzg4),
                        level: 1
                    };
                case N.d4z.GROUP_DM:
                    return {
                        prefix: A.intl.string(A.t['e5y+go']),
                        level: 1
                    };
                case N.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null != (n = null == t ? void 0 : t.name) ? n : '',
                        level: 1
                    };
                case N.d4z.GUILD_ANNOUNCEMENT:
                case N.d4z.GUILD_TEXT:
                case N.d4z.GUILD_FORUM:
                case N.d4z.GUILD_MEDIA:
                case N.d4z.GUILD_STAGE_VOICE:
                case N.d4z.GUILD_VOICE:
                    return {
                        prefix: null != (r = null == t ? void 0 : t.name) ? r : '',
                        level: 1
                    };
                case N.d4z.ANNOUNCEMENT_THREAD:
                case N.d4z.PUBLIC_THREAD:
                case N.d4z.PRIVATE_THREAD:
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
        })(t.type, a),
        v = (0, r.jsxs)(r.Fragment, {
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
        case N.d4z.DM:
            return (0, r.jsx)(Z.Z, {
                level: C,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case N.d4z.GROUP_DM:
            if (t.isManaged()) return v;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.nn4, { children: A.intl.string(A.t['e5y+go']) }),
                    (0, r.jsx)(
                        S.Z,
                        {
                            channel: t,
                            legacyIconClassName: w.avatar
                        },
                        'channel-'.concat(t.id)
                    )
                ]
            });
        case N.d4z.GUILD_ANNOUNCEMENT:
        case N.d4z.GUILD_TEXT:
        case N.d4z.GUILD_FORUM:
        case N.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, r.jsxs)(M, {
                      channel: t,
                      children: [
                          B(b, t.type === N.d4z.GUILD_ANNOUNCEMENT ? A.intl.string(A.t.l1dkSE) : A.intl.string(A.t.Pnajj4)),
                          (0, r.jsx)(P.Z.Title, {
                              level: C,
                              onContextMenu: d,
                              onClick: u,
                              children: v
                          })
                      ]
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          B(b, t.type === N.d4z.GUILD_ANNOUNCEMENT ? A.intl.string(A.t.l1dkSE) : A.intl.string(A.t.Pnajj4)),
                          (0, r.jsx)(P.Z.Title, {
                              level: C,
                              onContextMenu: d,
                              onClick: u,
                              children: v
                          }),
                          null != g ? g() : null
                      ]
                  });
        case N.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    B(b, A.intl.string(A.t.BVZqJi)),
                    (0, r.jsx)(P.Z.Title, {
                        level: C,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case N.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    B(b, A.intl.string(A.t.EErMzM)),
                    (0, r.jsx)(P.Z.Title, {
                        level: C,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case N.d4z.ANNOUNCEMENT_THREAD:
        case N.d4z.PUBLIC_THREAD:
        case N.d4z.PRIVATE_THREAD:
            let j = null;
            if (!s && null != l) {
                let e = (0, h.KS)(l, a);
                j = (0, r.jsxs)(i.Fragment, {
                    children: [
                        B(e, A.intl.string(A.t.Pnajj4)),
                        (0, r.jsx)(P.Z.Title, {
                            level: C,
                            onContextMenu: m,
                            onClick: f,
                            className: o()(w.parentChannelName, w.cursorPointer),
                            children: (0, p.F6)(l, x.default, y.Z)
                        }),
                        (0, r.jsx)(P.Z.Caret, {})
                    ]
                });
            }
            let O = (null == l ? void 0 : l.type) != null && N.TPd.GUILD_THREADS_ONLY.has(l.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    j,
                    B(O ? null : b, A.intl.string(A.t['7Xm5QE'])),
                    (0, r.jsx)(P.Z.Title, {
                        level: C,
                        onContextMenu: d,
                        onClick: u,
                        className: o()({
                            [w.cursorPointer]: s,
                            [w.forumPostTitle]: O
                        }),
                        children: v
                    })
                ]
            });
        case N.d4z.GUILD_DIRECTORY:
            let E = (null == a ? void 0 : a.hasFeature(N.oNc.HUB)) ? A.intl.formatToPlainString(A.t.Dy2aho, { guildName: n }) : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== b
                        ? (0, r.jsx)(P.Z.Icon, {
                              iconClassName: w.__invalid_icon,
                              icon: b,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, r.jsxs)(P.Z.Title, {
                        level: C,
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
let D = (e) => {
    let { channel: t } = e,
        n = (0, a.e7)([x.default], () => x.default.getCurrentUser()),
        l = (0, a.e7)([x.default], () => x.default.getUser(t.getRecipientId())),
        o = (0, O.G)();
    return (i.useEffect(() => {
        (null == n ? void 0 : n.isStaff()) &&
            null != l &&
            !l.isStaff() &&
            (0, _.Z)(l.id, l.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0
            });
    }, [n, l]),
    t.isDM() && (null == n ? void 0 : n.isStaff()) && null != l)
        ? l.isStaff()
            ? (0, r.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM })
            : o
              ? (0, r.jsx)(d.Z, { type: d.Z.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function U(e, t) {
    switch (e.type) {
        case N.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(D, { channel: e }), (0, r.jsx)(E.Z, { channel: e }, e.id)]
            });
        case N.d4z.GUILD_ANNOUNCEMENT:
        case N.d4z.GUILD_TEXT:
        case N.d4z.GUILD_VOICE:
        case N.d4z.GUILD_STAGE_VOICE:
        case N.d4z.GROUP_DM:
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
function B(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(P.Z.Icon, {
                    iconClassName: w.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, r.jsx)(c.nn4, { children: t })
        ]
    });
}
function F(e) {
    let { guild: t, channel: n, caretPosition: l = 'left' } = e,
        o = (0, a.e7)([C.Z], () => C.Z.getGuildId()),
        s = (0, g.D)(),
        u = i.useRef(null);
    if ((o !== N.I_8 && !s) || null == t) return null;
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
                k(R({}, e), {
                    onClick: d,
                    className: w.guildBreadcrumbContainer,
                    children: [
                        'left' === l && (0, r.jsx)(P.Z.Caret, { direction: 'left' }),
                        (0, r.jsx)('div', {
                            ref: u,
                            children: (0, r.jsx)(m.Z, {
                                guild: t,
                                size: m.Z.Sizes.SMALLER,
                                className: w.guildBreadcrumbIcon,
                                active: !0
                            })
                        }),
                        'right' === l && (0, r.jsx)(P.Z.Caret, { direction: 'right' })
                    ]
                })
            )
    });
}
