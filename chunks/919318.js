l.d(n, { ZP: () => T }), l(47120);
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
    _ = l(695346),
    v = l(592125),
    I = l(984933),
    Z = l(375954),
    j = l(496675),
    p = l(451478),
    N = l(768581),
    b = l(526120),
    E = l(689981),
    A = l(825334),
    M = l(981631),
    y = l(388032),
    k = l(21799),
    S = l(663362),
    w = l(931057);
function R(e) {
    let n,
        l,
        { firstMedia: i, channelId: t } = e,
        d = (0, s.e7)([v.Z], () => v.Z.getChannel(t)),
        [o, c] = (0, g.hL)({
            media: i,
            channel: d
        }),
        h = (0, g.MC)(c),
        f = (0, s.e7)([p.Z], () => p.Z.isFocused()),
        C = (0, m.d$)(i.src),
        I = _.QK.useSetting(),
        { src: Z, width: j, height: N, alt: b } = i;
    return (
        N > j ? (l = 72) : (n = 72),
        (0, a.jsxs)('div', {
            className: k.media,
            children: [
                (0, x.Yi)({
                    src: Z,
                    maxHeight: n,
                    maxWidth: l,
                    width: j,
                    height: N,
                    alt: null != b && o && null != h ? h : b,
                    autoPlay: I,
                    animated: C && !o && f,
                    containerClassName: k.thumbnailContainer,
                    imageClassName: r()({ [k.obscured]: o }),
                    analyticsSource: 'ResourceChannelMedia'
                }),
                o &&
                    (0, a.jsx)(u.Z, {
                        obscureReason: c,
                        iconClassname: k.obscuredTag
                    })
            ]
        })
    );
}
function P(e) {
    let { resource: n } = e,
        l = (0, s.e7)([v.Z], () => v.Z.getChannel(n.channelId)),
        t = (0, s.e7)([Z.Z], () => Z.Z.getMessages(n.channelId)),
        u = (0, s.e7)([j.Z], () => j.Z.can(M.Plq.VIEW_CHANNEL, l)),
        m = t.first(),
        g = (0, E.Z)(m),
        x = (0, c.zy)(m, !1),
        f = (null == x ? void 0 : x.length) > 0 ? x[0] : null,
        _ = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && u;
    if (
        (i.useEffect(() => {
            _ &&
                o.Z.fetchMessages({
                    channelId: n.channelId,
                    after: n.channelId,
                    limit: 5
                });
        }, [n.channelId, _]),
        null == l || null == l.guild_id)
    )
        return null;
    let I = N.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon
        }),
        p = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(d.P3F, {
        className: k.row,
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
                className: k.content,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: k.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    p &&
                        null != g &&
                        (0, a.jsx)(d.Text, {
                            className: k.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(g, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        }),
                    !p &&
                        (0, a.jsx)(d.Text, {
                            className: r()(k.messageContent, S.markup),
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
            null != n.icon && null != I
                ? (0, a.jsx)('div', {
                      className: k.media,
                      children: (0, a.jsx)('img', {
                          src: I,
                          className: k.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == I && null != f
                ? (0, a.jsx)(R, {
                      firstMedia: f,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function T(e) {
    let { guild: n, isNewMember: l } = e,
        i = (0, A.Z)(n.id);
    return 0 === i.length
        ? l
            ? null
            : (0, a.jsxs)('div', {
                  className: k.emptyContainer,
                  children: [
                      (0, a.jsx)(d.X6q, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: y.intl.string(y.t.owvC9f)
                      }),
                      (0, a.jsx)('img', {
                          className: k.emptyStateImage,
                          src: w,
                          alt: ''
                      }),
                      (0, a.jsx)(d.zxk, {
                          className: k.emptyStateButton,
                          onClick: () => {
                              let e = I.ZP.getDefaultChannel(n.id);
                              null != e && (0, f.uL)(M.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: y.intl.string(y.t['3iCBUl'])
                      })
                  ]
              })
        : (0, a.jsxs)('div', {
              className: k.container,
              children: [
                  (0, a.jsx)(d.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: y.intl.string(y.t.xwY4LS)
                  }),
                  i.map((e) => (0, a.jsx)(P, { resource: e }, e.channelId))
              ]
          });
}
