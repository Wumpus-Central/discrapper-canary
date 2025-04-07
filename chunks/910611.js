n.d(t, {
    TS: () => M,
    ud: () => A,
    v0: () => R
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
    g = n(703656),
    b = n(699516),
    _ = n(914010),
    C = n(594174),
    y = n(768581),
    x = n(63063),
    v = n(946734),
    j = n(99843),
    O = n(372564),
    E = n(984370),
    N = n(217314),
    I = n(981631),
    P = n(921944),
    S = n(388032),
    Z = n(100658);
function T(e) {
    var t;
    let { channel: n, children: i } = e,
        l = (0, u.q)(null == (t = n.linkedLobby) ? void 0 : t.application_id),
        [o, a] = (0, f.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let d = y.ZP.getApplicationIconURL({
            id: l.id,
            icon: l.icon,
            size: 14
        }),
        [p, h] =
            o !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [S.NW.string(S.t.XJVlf3), void 0]
                : [
                      (0, r.jsxs)(
                          'div',
                          {
                              className: Z.linkedLobbyEducationTooltip,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: S.NW.string(S.t.YIVr4O)
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: S.NW.format(S.t['16agur'], { helpdeskArticle: x.Z.getArticleURL(I.BhN.CHANNEL_LINKED_LOBBIES) })
                                  }),
                                  (0, r.jsx)(c.P3F, {
                                      className: Z.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => a(P.L.USER_DISMISS),
                                      children: (0, r.jsx)(c.Dio, {
                                          className: Z.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      S.NW.string(S.t.YIVr4O)
                  ];
    return (0, r.jsx)(
        c.ua7,
        {
            tooltipClassName: Z.linkedLobbyEducationTooltipWrapper,
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
                    })({ className: Z.linkedLobbyTooltip }, e)),
                    (n = n =
                        {
                            children: [
                                i,
                                (0, r.jsxs)(c.Text, {
                                    className: Z.linkedLobby,
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: [
                                        '\u2022',
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            src: d,
                                            className: Z.linkedLobbyApplicationIcon
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
function A(e) {
    let { channel: t, channelName: n, parentChannel: l, guild: a, inSidebar: s = !1, handleClick: u, handleContextMenu: d, handleParentClick: f, handleParentContextMenu: m, renderFollowButton: g } = e,
        _ = (0, h.KS)(t, a),
        { prefix: y, level: x } = (function (e, t) {
            var n, r;
            switch (e) {
                case I.d4z.DM:
                    return {
                        prefix: S.NW.string(S.t.EJRzg4),
                        level: 1
                    };
                case I.d4z.GROUP_DM:
                    return {
                        prefix: S.NW.string(S.t['e5y+go']),
                        level: 1
                    };
                case I.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null != (n = null == t ? void 0 : t.name) ? n : '',
                        level: 1
                    };
                case I.d4z.GUILD_ANNOUNCEMENT:
                case I.d4z.GUILD_TEXT:
                case I.d4z.GUILD_FORUM:
                case I.d4z.GUILD_MEDIA:
                case I.d4z.GUILD_STAGE_VOICE:
                case I.d4z.GUILD_VOICE:
                    return {
                        prefix: null != (r = null == t ? void 0 : t.name) ? r : '',
                        level: 1
                    };
                case I.d4z.ANNOUNCEMENT_THREAD:
                case I.d4z.PUBLIC_THREAD:
                case I.d4z.PRIVATE_THREAD:
                    return {
                        prefix: S.NW.string(S.t['7Xm5QE']),
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
        case I.d4z.DM:
            return (0, r.jsx)(N.Z, {
                level: x,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case I.d4z.GROUP_DM:
            if (t.isManaged()) return v;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.nn4, { children: S.NW.string(S.t['e5y+go']) }),
                    (0, r.jsx)(
                        j.Z,
                        {
                            channel: t,
                            legacyIconClassName: Z.avatar
                        },
                        'channel-'.concat(t.id)
                    )
                ]
            });
        case I.d4z.GUILD_ANNOUNCEMENT:
        case I.d4z.GUILD_TEXT:
        case I.d4z.GUILD_FORUM:
        case I.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, r.jsxs)(T, {
                      channel: t,
                      children: [
                          k(_, t.type === I.d4z.GUILD_ANNOUNCEMENT ? S.NW.string(S.t.l1dkSE) : S.NW.string(S.t.Pnajj4)),
                          (0, r.jsx)(E.Z.Title, {
                              level: x,
                              onContextMenu: d,
                              onClick: u,
                              children: v
                          })
                      ]
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          k(_, t.type === I.d4z.GUILD_ANNOUNCEMENT ? S.NW.string(S.t.l1dkSE) : S.NW.string(S.t.Pnajj4)),
                          (0, r.jsx)(E.Z.Title, {
                              level: x,
                              onContextMenu: d,
                              onClick: u,
                              children: v
                          }),
                          null != g ? g() : null
                      ]
                  });
        case I.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    k(_, S.NW.string(S.t.BVZqJi)),
                    (0, r.jsx)(E.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case I.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    k(_, S.NW.string(S.t.EErMzM)),
                    (0, r.jsx)(E.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case I.d4z.ANNOUNCEMENT_THREAD:
        case I.d4z.PUBLIC_THREAD:
        case I.d4z.PRIVATE_THREAD:
            let O = null;
            if (!s && null != l) {
                let e = (0, h.KS)(l, a);
                O = (0, r.jsxs)(i.Fragment, {
                    children: [
                        k(e, S.NW.string(S.t.Pnajj4)),
                        (0, r.jsx)(E.Z.Title, {
                            level: x,
                            onContextMenu: m,
                            onClick: f,
                            className: o()(Z.parentChannelName, Z.cursorPointer),
                            children: (0, p.F6)(l, C.default, b.Z)
                        }),
                        (0, r.jsx)(E.Z.Caret, {})
                    ]
                });
            }
            let P = (null == l ? void 0 : l.type) != null && I.TPd.GUILD_THREADS_ONLY.has(l.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    O,
                    k(P ? null : _, S.NW.string(S.t['7Xm5QE'])),
                    (0, r.jsx)(E.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        className: o()({
                            [Z.cursorPointer]: s,
                            [Z.forumPostTitle]: P
                        }),
                        children: v
                    })
                ]
            });
        case I.d4z.GUILD_DIRECTORY:
            let A = (null == a ? void 0 : a.hasFeature(I.oNc.HUB)) ? S.NW.formatToPlainString(S.t.Dy2aho, { guildName: n }) : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== _
                        ? (0, r.jsx)(E.Z.Icon, {
                              iconClassName: Z.__invalid_icon,
                              icon: _,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, r.jsxs)(E.Z.Title, {
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
                            A
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
let w = (e) => {
    let { channel: t } = e,
        n = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
        i = (0, a.e7)([C.default], () => C.default.getUser(t.getRecipientId()));
    return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == i ? void 0 : i.isStaff()) ? (0, r.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM }) : null;
};
function R(e, t) {
    switch (e.type) {
        case I.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(w, { channel: e }), (0, r.jsx)(v.Z, { channel: e }, e.id)]
            });
        case I.d4z.GUILD_ANNOUNCEMENT:
        case I.d4z.GUILD_TEXT:
        case I.d4z.GUILD_VOICE:
        case I.d4z.GUILD_STAGE_VOICE:
        case I.d4z.GROUP_DM:
            return null != t
                ? (0, r.jsx)(
                      O.Z,
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
function k(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(E.Z.Icon, {
                    iconClassName: Z.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, r.jsx)(c.nn4, { children: t })
        ]
    });
}
function M(e) {
    let { guild: t, channel: n, caretPosition: i = 'left' } = e;
    return (0, a.e7)([_.Z], () => _.Z.getGuildId()) !== I.I_8 || null == t
        ? null
        : (0, r.jsxs)('div', {
              className: Z.guildBreadcrumbContainer,
              children: [
                  'left' === i && (0, r.jsx)(E.Z.Caret, { direction: 'left' }),
                  (0, r.jsx)(m.Z, {
                      guild: t,
                      size: m.Z.Sizes.SMALLER,
                      className: Z.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, r.jsx)(E.Z.Title, {
                      onClick: () => {
                          (0, g.XU)(t.id, n.id);
                      },
                      className: o()(Z.parentChannelName, Z.cursorPointer),
                      children: t.name
                  }),
                  'right' === i && (0, r.jsx)(E.Z.Caret, { direction: 'right' })
              ]
          });
}
