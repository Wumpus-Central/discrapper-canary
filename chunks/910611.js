n.d(t, {
    TS: () => L,
    ud: () => w,
    v0: () => M
}),
    n(47120);
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
    m = n(266076),
    g = n(565138),
    b = n(703656),
    _ = n(699516),
    C = n(914010),
    y = n(594174),
    x = n(768581),
    v = n(63063),
    j = n(946734),
    O = n(99843),
    E = n(372564),
    N = n(984370),
    I = n(217314),
    P = n(981631),
    S = n(921944),
    Z = n(388032),
    T = n(100658);
function A(e) {
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
                ? [Z.NW.string(Z.t.XJVlf3), void 0]
                : [
                      (0, r.jsxs)(
                          'div',
                          {
                              className: T.linkedLobbyEducationTooltip,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: Z.NW.string(Z.t.YIVr4O)
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: Z.NW.format(Z.t['16agur'], { helpdeskArticle: v.Z.getArticleURL(P.BhN.CHANNEL_LINKED_LOBBIES) })
                                  }),
                                  (0, r.jsx)(c.P3F, {
                                      className: T.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => a(S.L.USER_DISMISS),
                                      children: (0, r.jsx)(c.Dio, {
                                          className: T.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      Z.NW.string(Z.t.YIVr4O)
                  ];
    return (0, r.jsx)(
        c.ua7,
        {
            tooltipClassName: T.linkedLobbyEducationTooltipWrapper,
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
        o
    );
}
function w(e) {
    let { channel: t, channelName: n, parentChannel: l, guild: a, inSidebar: s = !1, handleClick: u, handleContextMenu: d, handleParentClick: f, handleParentContextMenu: g, renderFollowButton: b } = e,
        C = (0, h.KS)(t, a),
        { prefix: x, level: v } = (function (e, t) {
            var n, r;
            switch (e) {
                case P.d4z.DM:
                    return {
                        prefix: Z.NW.string(Z.t.EJRzg4),
                        level: 1
                    };
                case P.d4z.GROUP_DM:
                    return {
                        prefix: Z.NW.string(Z.t['e5y+go']),
                        level: 1
                    };
                case P.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null != (n = null == t ? void 0 : t.name) ? n : '',
                        level: 1
                    };
                case P.d4z.GUILD_ANNOUNCEMENT:
                case P.d4z.GUILD_TEXT:
                case P.d4z.GUILD_FORUM:
                case P.d4z.GUILD_MEDIA:
                case P.d4z.GUILD_STAGE_VOICE:
                case P.d4z.GUILD_VOICE:
                    return {
                        prefix: null != (r = null == t ? void 0 : t.name) ? r : '',
                        level: 1
                    };
                case P.d4z.ANNOUNCEMENT_THREAD:
                case P.d4z.PUBLIC_THREAD:
                case P.d4z.PRIVATE_THREAD:
                    return {
                        prefix: Z.NW.string(Z.t['7Xm5QE']),
                        level: 2
                    };
                default:
                    return {
                        prefix: null,
                        level: 1
                    };
            }
        })(t.type, a),
        j = (0, r.jsxs)(r.Fragment, {
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
        case P.d4z.DM:
            return (0, r.jsx)(I.Z, {
                level: v,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case P.d4z.GROUP_DM:
            if (t.isManaged()) return j;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(c.nn4, { children: Z.NW.string(Z.t['e5y+go']) }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(m.Z, {
                            'aria-hidden': !0,
                            channel: t,
                            size: c.EFr.SIZE_24,
                            facepileSizeOverride: c.EFr.SIZE_32,
                            experimentLocation: 'header_bar',
                            className: T.avatar
                        })
                    }),
                    (0, r.jsx)(O.Z, { channel: t }, 'channel-'.concat(t.id))
                ]
            });
        case P.d4z.GUILD_ANNOUNCEMENT:
        case P.d4z.GUILD_TEXT:
        case P.d4z.GUILD_FORUM:
        case P.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, r.jsxs)(A, {
                      channel: t,
                      children: [
                          k(C, t.type === P.d4z.GUILD_ANNOUNCEMENT ? Z.NW.string(Z.t.l1dkSE) : Z.NW.string(Z.t.Pnajj4)),
                          (0, r.jsx)(N.Z.Title, {
                              level: v,
                              onContextMenu: d,
                              onClick: u,
                              children: j
                          })
                      ]
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          k(C, t.type === P.d4z.GUILD_ANNOUNCEMENT ? Z.NW.string(Z.t.l1dkSE) : Z.NW.string(Z.t.Pnajj4)),
                          (0, r.jsx)(N.Z.Title, {
                              level: v,
                              onContextMenu: d,
                              onClick: u,
                              children: j
                          }),
                          null != b ? b() : null
                      ]
                  });
        case P.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    k(C, Z.NW.string(Z.t.BVZqJi)),
                    (0, r.jsx)(N.Z.Title, {
                        level: v,
                        onContextMenu: d,
                        onClick: u,
                        children: j
                    })
                ]
            });
        case P.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    k(C, Z.NW.string(Z.t.EErMzM)),
                    (0, r.jsx)(N.Z.Title, {
                        level: v,
                        onContextMenu: d,
                        onClick: u,
                        children: j
                    })
                ]
            });
        case P.d4z.ANNOUNCEMENT_THREAD:
        case P.d4z.PUBLIC_THREAD:
        case P.d4z.PRIVATE_THREAD:
            let E = null;
            if (!s && null != l) {
                let e = (0, h.KS)(l, a);
                E = (0, r.jsxs)(i.Fragment, {
                    children: [
                        k(e, Z.NW.string(Z.t.Pnajj4)),
                        (0, r.jsx)(N.Z.Title, {
                            level: v,
                            onContextMenu: g,
                            onClick: f,
                            className: o()(T.parentChannelName, T.cursorPointer),
                            children: (0, p.F6)(l, y.default, _.Z)
                        }),
                        (0, r.jsx)(N.Z.Caret, {})
                    ]
                });
            }
            let S = (null == l ? void 0 : l.type) != null && P.TPd.GUILD_THREADS_ONLY.has(l.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    E,
                    k(S ? null : C, Z.NW.string(Z.t['7Xm5QE'])),
                    (0, r.jsx)(N.Z.Title, {
                        level: v,
                        onContextMenu: d,
                        onClick: u,
                        className: o()({
                            [T.cursorPointer]: s,
                            [T.forumPostTitle]: S
                        }),
                        children: j
                    })
                ]
            });
        case P.d4z.GUILD_DIRECTORY:
            let w = (null == a ? void 0 : a.hasFeature(P.oNc.HUB)) ? Z.NW.formatToPlainString(Z.t.Dy2aho, { guildName: n }) : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== C
                        ? (0, r.jsx)(N.Z.Icon, {
                              iconClassName: T.__invalid_icon,
                              icon: C,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, r.jsxs)(N.Z.Title, {
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
                            w
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
        n = (0, a.e7)([y.default], () => y.default.getCurrentUser()),
        i = (0, a.e7)([y.default], () => y.default.getUser(t.getRecipientId()));
    return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == i ? void 0 : i.isStaff()) ? (0, r.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM }) : null;
};
function M(e, t) {
    switch (e.type) {
        case P.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(R, { channel: e }), (0, r.jsx)(j.Z, { channel: e }, e.id)]
            });
        case P.d4z.GUILD_ANNOUNCEMENT:
        case P.d4z.GUILD_TEXT:
        case P.d4z.GUILD_VOICE:
        case P.d4z.GUILD_STAGE_VOICE:
        case P.d4z.GROUP_DM:
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
function k(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(N.Z.Icon, {
                    iconClassName: T.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, r.jsx)(c.nn4, { children: t })
        ]
    });
}
function L(e) {
    let { guild: t, channel: n, caretPosition: i = 'left' } = e;
    return (0, a.e7)([C.Z], () => C.Z.getGuildId()) !== P.I_8 || null == t
        ? null
        : (0, r.jsxs)('div', {
              className: T.guildBreadcrumbContainer,
              children: [
                  'left' === i && (0, r.jsx)(N.Z.Caret, { direction: 'left' }),
                  (0, r.jsx)(g.Z, {
                      guild: t,
                      size: g.Z.Sizes.SMALLER,
                      className: T.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, r.jsx)(N.Z.Title, {
                      onClick: () => {
                          (0, b.XU)(t.id, n.id);
                      },
                      className: o()(T.parentChannelName, T.cursorPointer),
                      children: t.name
                  }),
                  'right' === i && (0, r.jsx)(N.Z.Caret, { direction: 'right' })
              ]
          });
}
