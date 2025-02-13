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
    Z = l(984933),
    I = l(375954),
    p = l(496675),
    j = l(451478),
    N = l(768581),
    b = l(526120),
    E = l(689981),
    A = l(825334),
    M = l(981631),
    y = l(388032),
    w = l(21799),
    S = l(663362),
    k = l(931057);
function P(e) {
    let n,
        l,
        { firstMedia: i, channelId: t } = e,
        d = (0, s.e7)([v.Z], () => v.Z.getChannel(t)),
        [o, c] = (0, g.hL)({
            media: i,
            channel: d
        }),
        h = (0, g.MC)(c),
        f = (0, s.e7)([j.Z], () => j.Z.isFocused()),
        C = (0, m.d$)(i.src),
        Z = _.QK.useSetting(),
        { src: I, width: p, height: N, alt: b } = i;
    return (
        N > p ? (l = 72) : (n = 72),
        (0, a.jsxs)('div', {
            className: w.media,
            children: [
                (0, x.Yi)({
                    src: I,
                    maxHeight: n,
                    maxWidth: l,
                    width: p,
                    height: N,
                    alt: null != b && o && null != h ? h : b,
                    autoPlay: Z,
                    animated: C && !o && f,
                    containerClassName: w.thumbnailContainer,
                    imageClassName: r()({ [w.obscured]: o }),
                    analyticsSource: 'ResourceChannelMedia'
                }),
                o &&
                    (0, a.jsx)(u.Z, {
                        obscureReason: c,
                        iconClassname: w.obscuredTag
                    })
            ]
        })
    );
}
function R(e) {
    let { resource: n } = e,
        l = (0, s.e7)([v.Z], () => v.Z.getChannel(n.channelId)),
        t = (0, s.e7)([I.Z], () => I.Z.getMessages(n.channelId)),
        u = (0, s.e7)([p.Z], () => p.Z.can(M.Plq.VIEW_CHANNEL, l)),
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
    let Z = N.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon
        }),
        j = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(d.P3F, {
        className: w.row,
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
                className: w.content,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: w.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    j &&
                        null != g &&
                        (0, a.jsx)(d.Text, {
                            className: w.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(g, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        }),
                    !j &&
                        (0, a.jsx)(d.Text, {
                            className: r()(w.messageContent, S.markup),
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
            null != n.icon && null != Z
                ? (0, a.jsx)('div', {
                      className: w.media,
                      children: (0, a.jsx)('img', {
                          src: Z,
                          className: w.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == Z && null != f
                ? (0, a.jsx)(P, {
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
                  className: w.emptyContainer,
                  children: [
                      (0, a.jsx)(d.X6q, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: y.intl.string(y.t.owvC9f)
                      }),
                      (0, a.jsx)('img', {
                          className: w.emptyStateImage,
                          src: k,
                          alt: ''
                      }),
                      (0, a.jsx)(d.zxk, {
                          className: w.emptyStateButton,
                          onClick: () => {
                              let e = Z.ZP.getDefaultChannel(n.id);
                              null != e && (0, f.uL)(M.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: y.intl.string(y.t['3iCBUl'])
                      })
                  ]
              })
        : (0, a.jsxs)('div', {
              className: w.container,
              children: [
                  (0, a.jsx)(d.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: y.intl.string(y.t.xwY4LS)
                  }),
                  i.map((e) => (0, a.jsx)(R, { resource: e }, e.channelId))
              ]
          });
}
