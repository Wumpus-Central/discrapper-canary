n.d(t, { Z: () => H }), n(388685), n(642613);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(114858),
    c = n(950035),
    u = n(442837),
    d = n(481060),
    h = n(235820),
    p = n(904245),
    f = n(45114),
    g = n(933557),
    m = n(471445),
    b = n(315174),
    y = n(739566),
    O = n(930282),
    v = n(318713),
    _ = n(123145),
    C = n(25015),
    j = n(178480),
    S = n(455199),
    E = n(703656),
    x = n(518950),
    P = n(592125),
    I = n(720202),
    w = n(430824),
    N = n(594174),
    Z = n(709054),
    T = n(846355),
    A = n(804350),
    R = n(987889),
    D = n(553984),
    L = n(333834),
    k = n(982183),
    M = n(981631),
    U = n(388032),
    G = n(21678);
function B(e) {
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
}
let V = {
    controller: new c.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: 88,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function H(e) {
    let { includePanelSpacing: t } = e,
        {
            messages: n,
            hasMore: l,
            loading: a,
            hasLoadedEver: c
        } = (0, u.cj)([S.Z], () => ({
            messages: S.Z.getMentions(),
            hasMore: S.Z.hasMore,
            loading: S.Z.loading,
            hasLoadedEver: S.Z.hasLoadedEver,
            guildFilter: S.Z.guildFilter,
            roleFilter: S.Z.roleFilter,
            everyoneFilter: S.Z.everyoneFilter
        })),
        [d, h] = i.useState(new Set());
    (0, i.useEffect)(() => {
        if (!c) return void F(null);
    }, [c]);
    let p = (0, u.e7)([N.default], () => N.default.getCurrentUser()),
        f = i.useMemo(() => {
            let e = (0, s.uniqBy)(
                [...(null != n ? n : [])].sort((e, t) => Z.default.compare(t.id, e.id)),
                'id'
            );
            if (0 === d.size) return e;
            let t = e;
            return (
                d.has(D.x.ANNOUNCEMENTS) &&
                    (t =
                        null == t
                            ? void 0
                            : t.filter((e) => {
                                  let t = P.Z.getChannel(e.channel_id);
                                  return (null == t ? void 0 : t.type) === M.d4z.GUILD_ANNOUNCEMENT;
                              })),
                d.has(D.x.MENTIONS) && (t = null == t ? void 0 : t.filter((e) => (null == p ? void 0 : p.id) != null && e.mentioned && e.mentions.includes(null == p ? void 0 : p.id))),
                t
            );
        }, [d, n, p]);
    return (0, r.jsxs)('nav', {
        className: o()(G.container, { [G.panelSpacing]: t }),
        children: [
            (0, r.jsx)(
                b.ZP,
                B(
                    {
                        hasSubheader: !0,
                        guild: k.F7
                    },
                    V
                )
            ),
            (0, r.jsx)(D.Z, {
                selectedFilters: d,
                setFilters: h
            }),
            (0, r.jsx)(L.ZP, {
                className: G.messageList,
                renderMessage: W,
                messages: f,
                loading: a,
                hasMore: l,
                analyticsName: 'Notifications Inbox',
                channel: null,
                listName: 'notifications-inbox',
                loadMore: function () {
                    F(null, null != n && n.length > 0 ? n[n.length - 1].id : null);
                },
                renderEmptyState: z
            })
        ]
    });
}
function F(e, t) {
    let n = S.Z.guildFilter,
        r = S.Z.roleFilter,
        i = S.Z.everyoneFilter,
        l = null;
    null != e && null != n && (l = n === M.NgX.ALL_SERVERS ? null : e.getGuildId()), h.Z.fetchRecentMentions(t, M.DJj, l, r, i);
}
function z() {
    return (0, r.jsx)(d.LZC, { size: 16 });
}
function W(e, t) {
    return (0, r.jsx)(
        Y,
        {
            message: e,
            goToSidebar: t
        },
        e.id
    );
}
function Y(e) {
    let { message: t, goToSidebar: n } = e,
        { params: i } = (0, a.$B)(),
        l = (0, u.e7)([P.Z], () => P.Z.getChannel(t.channel_id));
    return null == t || null == l
        ? null
        : (0, r.jsx)(d.P3F, {
              className: o()(G.messageClickableContainer, { [G.selected]: t.id === i.messageId }),
              onClick: () => {
                  p.Z.trackJump(l.id, t.id, 'Notifications Inbox'), f.In(t.channel_id, !0, void 0, t.id);
                  let e = n ? M.Z5c.NOTIFICATIONS_INBOX(l.id, t.id) : M.Z5c.CHANNEL(l.guild_id, l.id, t.id);
                  (0, E.uL)(e);
              },
              children: (0, r.jsx)(K, {
                  message: t,
                  channel: l,
                  isSelected: t.id === i.messageId
              })
          });
}
function K(e) {
    var t, n;
    let { message: l, channel: s, focusProps: a, isSelected: c } = e,
        { content: h } = (0, C.Z)(l, {
            hideSimpleEmbedContent: !0,
            allowList: !1,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !1,
            formatInline: !0,
            noStyleAndInteraction: !0
        }),
        p = '' === l.content && l.attachments.length > 0,
        f = 1 === l.attachments.length ? d.XBm : d.Ka2,
        b = (0, m.KS)(s, null),
        v = (0, g.ZP)(s, !1),
        j = (0, u.e7)([w.Z], () => w.Z.getGuild(s.getGuildId())),
        S = (0, u.e7)([T.Z], () => T.Z.unreadMessageIds),
        { nick: E, colorString: P } = (0, y.ZP)(l),
        {
            avatarDecorationSrc: N,
            avatarSrc: Z,
            eventHandlers: D
        } = (0, x.Z)({
            user: l.author,
            size: d.EFr.SIZE_32,
            guildId: null == j ? void 0 : j.id,
            animateOnHover: !0
        }),
        L = S.has(l.id),
        k = s.type !== M.d4z.GUILD_ANNOUNCEMENT || null == j;
    return (
        (0, i.useEffect)(() => {
            null != j && I.Z.requestMember(j.id, l.author.id);
        }, [j, l.author.id]),
        (0, r.jsx)(
            d.tEY,
            ((t = B({}, a)),
            (n = n =
                {
                    children: (0, r.jsxs)('div', {
                        onMouseLeave: D.onMouseLeave,
                        onMouseEnter: D.onMouseEnter,
                        className: G.messageContainer,
                        children: [
                            L && (0, r.jsx)('div', { className: G.unreadDot }),
                            (0, r.jsx)(d.Kqy, {
                                align: 'start',
                                style: {
                                    width: 'fit-content',
                                    marginTop: '4px'
                                },
                                children: k
                                    ? (0, r.jsx)(A.q, {
                                          'aria-label': 'User Avatar',
                                          src: Z,
                                          size: d.EFr.SIZE_32,
                                          cornerIconUrl: null != j ? j.getIconURL(24) : void 0,
                                          cornerIconOffsetX: 4,
                                          cornerIconOffsetY: 3,
                                          avatarDecoration: N
                                      })
                                    : (0, r.jsx)(A.E, {
                                          'aria-label': 'Guild Icon',
                                          src: j.getIconURL(32),
                                          size: d.EFr.SIZE_32,
                                          cornerIconUrl: l.author.getAvatarURL(j.id, 24),
                                          cornerIconOffsetX: 4,
                                          cornerIconOffsetY: 3
                                      })
                            }),
                            (0, r.jsxs)(d.Kqy, {
                                gap: 0,
                                style: { minWidth: 0 },
                                children: [
                                    (0, r.jsxs)(d.Kqy, {
                                        direction: 'horizontal',
                                        gap: 4,
                                        style: {
                                            whiteSpace: 'nowrap',
                                            minWidth: 0
                                        },
                                        children: [
                                            k
                                                ? (0, r.jsx)(_.Z, {
                                                      channel: s,
                                                      message: l,
                                                      compact: !0,
                                                      hideGuildTag: !0,
                                                      className: G.username
                                                  })
                                                : (0, r.jsx)(d.X6q, {
                                                      variant: 'text-md/semibold',
                                                      style: { color: P },
                                                      className: G.username,
                                                      children: j.name
                                                  }),
                                            (0, r.jsxs)(d.Kqy, {
                                                direction: 'horizontal',
                                                gap: 4,
                                                align: 'center',
                                                style: { width: 'fit-content' },
                                                children: [
                                                    (0, r.jsx)(R.Z, {
                                                        message: l,
                                                        channel: s,
                                                        isUnread: L
                                                    }),
                                                    (0, r.jsx)(q, { message: l })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(d.Kqy, {
                                        direction: 'horizontal',
                                        align: 'center',
                                        gap: 4,
                                        className: o()(G.channelName, {
                                            [G.unread]: L,
                                            [G.selected]: c
                                        }),
                                        children: [
                                            null !== b &&
                                                (0, r.jsx)(b, {
                                                    size: 'xxs',
                                                    className: G.inlineIcon
                                                }),
                                            (0, r.jsxs)(d.Text, {
                                                variant: 'text-sm/medium',
                                                lineClamp: 1,
                                                className: o()(G.channelName, {
                                                    [G.unread]: L,
                                                    [G.selected]: c
                                                }),
                                                children: [v, !k && ' \xB7 '.concat(E)]
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(d.Kqy, {
                                        direction: 'horizontal',
                                        gap: 4,
                                        align: 'center',
                                        children: [
                                            p &&
                                                (0, r.jsx)(f, {
                                                    size: 'xxs',
                                                    className: G.inlineIcon
                                                }),
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                lineClamp: 1,
                                                className: G.message,
                                                children: p
                                                    ? (0, r.jsx)('div', {
                                                          className: o()(G.message, {
                                                              [G.unread]: L,
                                                              [G.selected]: c
                                                          }),
                                                          children: l.attachments.length > 1 ? U.intl.formatToPlainString(U.t.rtfTKi, { count: l.attachments.length }) : U.intl.string(U.t.tCcq5u)
                                                      })
                                                    : (0, r.jsx)(O.ZP, {
                                                          content: h,
                                                          message: l,
                                                          compact: !1,
                                                          className: o()(G.message, {
                                                              [G.unread]: L,
                                                              [G.selected]: c
                                                          })
                                                      })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
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
        )
    );
}
function q(e) {
    let { message: t } = e,
        n = (0, j.a3)(t.timestamp.getTime());
    return (0, r.jsx)(v.Z, {
        timestamp: t.timestamp,
        className: G.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    });
}
