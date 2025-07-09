(t.d(n, { ZP: () => L }), t(388685), t(953529));
var l = t(255367),
    r = t(73800),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    c = t(755721),
    o = t(481060),
    d = t(904245),
    u = t(368844),
    h = t(73315),
    m = t(454585),
    f = t(406432),
    g = t(169525),
    p = t(524444),
    x = t(703656),
    b = t(6025),
    j = t(695346),
    C = t(592125),
    _ = t(984933),
    v = t(375954),
    I = t(496675),
    Z = t(451478),
    y = t(768581),
    N = t(526120),
    O = t(689981),
    w = t(825334),
    P = t(981631),
    E = t(388032),
    S = t(79341),
    A = t(73433),
    k = t(931057);
function M(e) {
    let n,
        t,
        { firstMedia: r, channelId: a } = e,
        c = (0, s.e7)([C.Z], () => C.Z.getChannel(a)),
        [o, d] = (0, g.hL)({
            media: r,
            channel: c
        }),
        u = (0, g.MC)(d),
        m = (0, s.e7)([Z.Z], () => Z.Z.isFocused()),
        x = (0, f.d$)(r.src),
        b = j.QK.useSetting(),
        { src: _, width: v, height: I, alt: y } = r;
    return (
        I > v ? (t = 72) : (n = 72),
        (0, l.jsxs)('div', {
            className: S.media,
            children: [
                (0, p.Yi)({
                    src: _,
                    maxHeight: n,
                    maxWidth: t,
                    width: v,
                    height: I,
                    alt: null != y && o && null != u ? u : y,
                    autoPlay: b,
                    animated: x && !o && m,
                    containerClassName: S.thumbnailContainer,
                    imageClassName: i()({ [S.obscured]: o }),
                    analyticsSource: 'ResourceChannelMedia'
                }),
                o &&
                    (0, l.jsx)(h.Z, {
                        obscureReason: d,
                        iconClassname: S.obscuredTag
                    })
            ]
        })
    );
}
function D(e) {
    let { resource: n } = e,
        t = (0, s.e7)([C.Z], () => C.Z.getChannel(n.channelId)),
        a = (0, s.e7)([v.Z], () => v.Z.getMessages(n.channelId)),
        c = (0, s.e7)([I.Z], () => I.Z.can(P.Plq.VIEW_CHANNEL, t)),
        h = a.first(),
        f = (0, O.Z)(h),
        g = (0, u.zy)(h, !1),
        p = (null == g ? void 0 : g.length) > 0 ? g[0] : null,
        x = null != t && null == a.first() && !a.loadingMore && !a.ready && !a.hasFetched && c;
    if (
        (r.useEffect(() => {
            x &&
                d.Z.fetchMessages({
                    channelId: n.channelId,
                    after: n.channelId,
                    limit: 5
                });
        }, [n.channelId, x]),
        null == t || null == t.guild_id)
    )
        return null;
    let j = y.ZP.getResourceChannelIconURL({
            channelId: t.id,
            icon: n.icon
        }),
        _ = null == n.description || 0 === n.description.length;
    return (0, l.jsxs)(o.P3F, {
        className: S.row,
        onClick: (e) => {
            null != t &&
                (e.shiftKey
                    ? (0, N.C3)(t.guild_id, t.id)
                    : b.Z.openResourceChannelAsSidebar({
                          guildId: t.guild_id,
                          channelId: t.id
                      }));
        },
        children: [
            (0, l.jsxs)('div', {
                className: S.content,
                children: [
                    (0, l.jsx)(o.Text, {
                        className: S.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    _ &&
                        null != f &&
                        (0, l.jsx)(o.Text, {
                            className: S.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: m.Z.parse(f, !0, {
                                guildId: t.guild_id,
                                channelId: t.id
                            })
                        }),
                    !_ &&
                        (0, l.jsx)(o.Text, {
                            className: i()(S.messageContent, A.markup),
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: m.Z.parse(n.description, !0, {
                                guildId: t.guild_id,
                                channelId: t.id
                            })
                        })
                ]
            }),
            null != n.icon && null != j
                ? (0, l.jsx)('div', {
                      className: S.media,
                      children: (0, l.jsx)('img', {
                          src: j,
                          className: S.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == j && null != p
                ? (0, l.jsx)(M, {
                      firstMedia: p,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function L(e) {
    let { guild: n, isNewMember: t } = e,
        r = (0, w.Z)(n.id);
    return 0 === r.length
        ? t
            ? null
            : (0, l.jsxs)('div', {
                  className: S.emptyContainer,
                  children: [
                      (0, l.jsx)(o.X6q, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: E.intl.string(E.t.owvC9f)
                      }),
                      (0, l.jsx)('img', {
                          className: S.emptyStateImage,
                          src: k,
                          alt: ''
                      }),
                      (0, l.jsx)(c.zx, {
                          className: S.emptyStateButton,
                          onClick: () => {
                              let e = _.ZP.getDefaultChannel(n.id);
                              null != e && (0, x.uL)(P.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: E.intl.string(E.t['3iCBUl'])
                      })
                  ]
              })
        : (0, l.jsxs)('div', {
              className: S.container,
              children: [
                  (0, l.jsx)(o.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: E.intl.string(E.t.xwY4LS)
                  }),
                  r.map((e) => (0, l.jsx)(D, { resource: e }, e.channelId))
              ]
          });
}
