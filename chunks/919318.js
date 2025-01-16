l.d(n, {
    ZP: function () {
        return R;
    }
}),
    l(47120);
var a = l(200651),
    i = l(192379),
    t = l(120356),
    r = l.n(t),
    s = l(442837),
    d = l(481060),
    o = l(904245),
    c = l(368844),
    u = l(73315),
    h = l(454585),
    m = l(406432),
    g = l(169525),
    x = l(524444),
    f = l(703656),
    C = l(6025),
    v = l(695346),
    I = l(592125),
    p = l(984933),
    Z = l(375954),
    j = l(496675),
    N = l(451478),
    _ = l(768581),
    b = l(526120),
    A = l(689981),
    E = l(825334),
    S = l(981631),
    M = l(388032),
    y = l(288622),
    k = l(665162),
    w = l(931057);
function P(e) {
    let n,
        l,
        { firstMedia: i, channelId: t } = e,
        d = (0, s.e7)([I.Z], () => I.Z.getChannel(t)),
        [o, c] = (0, g.hL)({
            media: i,
            channel: d
        }),
        h = (0, g.MC)(c),
        f = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        C = (0, m.d$)(i.src),
        p = v.QK.useSetting(),
        { src: Z, width: j, height: _, alt: b } = i;
    return (
        _ > j ? (l = 72) : (n = 72),
        (0, a.jsxs)('div', {
            className: y.media,
            children: [
                (0, x.Yi)({
                    src: Z,
                    maxHeight: n,
                    maxWidth: l,
                    width: j,
                    height: _,
                    alt: null != b && o && null != h ? h : b,
                    autoPlay: p,
                    animated: C && !o && f,
                    containerClassName: y.thumbnailContainer,
                    imageClassName: r()({ [y.obscured]: o }),
                    analyticsSource: 'ResourceChannelMedia'
                }),
                o &&
                    (0, a.jsx)(u.Z, {
                        obscureReason: c,
                        iconClassname: y.obscuredTag
                    })
            ]
        })
    );
}
function B(e) {
    let { resource: n } = e,
        l = (0, s.e7)([I.Z], () => I.Z.getChannel(n.channelId)),
        t = (0, s.e7)([Z.Z], () => Z.Z.getMessages(n.channelId)),
        u = (0, s.e7)([j.Z], () => j.Z.can(S.Plq.VIEW_CHANNEL, l)),
        m = t.first(),
        g = (0, A.Z)(m),
        x = (0, c.zy)(m, !1),
        f = (null == x ? void 0 : x.length) > 0 ? x[0] : null,
        v = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && u;
    i.useEffect(() => {
        v &&
            o.Z.fetchMessages({
                channelId: n.channelId,
                after: n.channelId,
                limit: 5
            });
    }, [n.channelId, v]);
    if (null == l || null == l.guild_id) return null;
    let p = _.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon
        }),
        N = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(d.Clickable, {
        className: y.row,
        onClick: (e) => {
            null != l &&
                (e.shiftKey
                    ? (0, b.C3)(l.guild_id, l.id)
                    : C.Z.openResourceChannelAsSidebar({
                          guildId: l.guild_id,
                          channelId: l.id
                      }));
        },
        children: [
            (0, a.jsxs)('div', {
                className: y.content,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: y.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    N &&
                        null != g &&
                        (0, a.jsx)(d.Text, {
                            className: y.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(g, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        }),
                    !N &&
                        (0, a.jsx)(d.Text, {
                            className: r()(y.messageContent, k.markup),
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(n.description, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        })
                ]
            }),
            null != n.icon && null != p
                ? (0, a.jsx)('div', {
                      className: y.media,
                      children: (0, a.jsx)('img', {
                          src: p,
                          className: y.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == p && null != f
                ? (0, a.jsx)(P, {
                      firstMedia: f,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function R(e) {
    let { guild: n, isNewMember: l } = e,
        i = (0, E.Z)(n.id);
    if (0 === i.length)
        return l
            ? null
            : (0, a.jsxs)('div', {
                  className: y.emptyContainer,
                  children: [
                      (0, a.jsx)(d.Heading, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: M.intl.string(M.t.owvC9f)
                      }),
                      (0, a.jsx)('img', {
                          className: y.emptyStateImage,
                          src: w,
                          alt: ''
                      }),
                      (0, a.jsx)(d.Button, {
                          className: y.emptyStateButton,
                          onClick: () => {
                              let e = p.ZP.getDefaultChannel(n.id);
                              null != e && (0, f.uL)(S.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: M.intl.string(M.t['3iCBUl'])
                      })
                  ]
              });
    return (0, a.jsxs)('div', {
        className: y.container,
        children: [
            (0, a.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                color: 'header-primary',
                children: M.intl.string(M.t.xwY4LS)
            }),
            i.map((e) => (0, a.jsx)(B, { resource: e }, e.channelId))
        ]
    });
}
