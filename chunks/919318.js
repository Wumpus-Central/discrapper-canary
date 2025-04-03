l.d(n, { ZP: () => W }), l(47120), l(266796);
var t = l(200651),
    r = l(192379),
    a = l(120356),
    i = l.n(a),
    s = l(442837),
    c = l(481060),
    o = l(904245),
    d = l(368844),
    u = l(73315),
    m = l(454585),
    h = l(406432),
    g = l(169525),
    f = l(524444),
    x = l(703656),
    p = l(6025),
    b = l(695346),
    j = l(592125),
    C = l(984933),
    _ = l(375954),
    v = l(496675),
    I = l(451478),
    Z = l(768581),
    N = l(526120),
    y = l(689981),
    O = l(825334),
    P = l(981631),
    w = l(388032),
    E = l(79341),
    S = l(73433),
    k = l(931057);
function A(e) {
    let n,
        l,
        { firstMedia: r, channelId: a } = e,
        c = (0, s.e7)([j.Z], () => j.Z.getChannel(a)),
        [o, d] = (0, g.hL)({
            media: r,
            channel: c
        }),
        m = (0, g.MC)(d),
        x = (0, s.e7)([I.Z], () => I.Z.isFocused()),
        p = (0, h.d$)(r.src),
        C = b.QK.useSetting(),
        { src: _, width: v, height: Z, alt: N } = r;
    return (
        Z > v ? (l = 72) : (n = 72),
        (0, t.jsxs)('div', {
            className: E.media,
            children: [
                (0, f.Yi)({
                    src: _,
                    maxHeight: n,
                    maxWidth: l,
                    width: v,
                    height: Z,
                    alt: null != N && o && null != m ? m : N,
                    autoPlay: C,
                    animated: p && !o && x,
                    containerClassName: E.thumbnailContainer,
                    imageClassName: i()({ [E.obscured]: o }),
                    analyticsSource: 'ResourceChannelMedia'
                }),
                o &&
                    (0, t.jsx)(u.Z, {
                        obscureReason: d,
                        iconClassname: E.obscuredTag
                    })
            ]
        })
    );
}
function M(e) {
    let { resource: n } = e,
        l = (0, s.e7)([j.Z], () => j.Z.getChannel(n.channelId)),
        a = (0, s.e7)([_.Z], () => _.Z.getMessages(n.channelId)),
        u = (0, s.e7)([v.Z], () => v.Z.can(P.Plq.VIEW_CHANNEL, l)),
        h = a.first(),
        g = (0, y.Z)(h),
        f = (0, d.zy)(h, !1),
        x = (null == f ? void 0 : f.length) > 0 ? f[0] : null,
        b = null != l && null == a.first() && !a.loadingMore && !a.ready && !a.hasFetched && u;
    if (
        (r.useEffect(() => {
            b &&
                o.Z.fetchMessages({
                    channelId: n.channelId,
                    after: n.channelId,
                    limit: 5
                });
        }, [n.channelId, b]),
        null == l || null == l.guild_id)
    )
        return null;
    let C = Z.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon
        }),
        I = null == n.description || 0 === n.description.length;
    return (0, t.jsxs)(c.P3F, {
        className: E.row,
        onClick: (e) => {
            null != l &&
                (e.shiftKey
                    ? (0, N.C3)(l.guild_id, l.id)
                    : p.Z.openResourceChannelAsSidebar({
                          guildId: l.guild_id,
                          channelId: l.id
                      }));
        },
        children: [
            (0, t.jsxs)('div', {
                className: E.content,
                children: [
                    (0, t.jsx)(c.Text, {
                        className: E.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    I &&
                        null != g &&
                        (0, t.jsx)(c.Text, {
                            className: E.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: m.Z.parse(g, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        }),
                    !I &&
                        (0, t.jsx)(c.Text, {
                            className: i()(E.messageContent, S.markup),
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: m.Z.parse(n.description, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        })
                ]
            }),
            null != n.icon && null != C
                ? (0, t.jsx)('div', {
                      className: E.media,
                      children: (0, t.jsx)('img', {
                          src: C,
                          className: E.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == C && null != x
                ? (0, t.jsx)(A, {
                      firstMedia: x,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function W(e) {
    let { guild: n, isNewMember: l } = e,
        r = (0, O.Z)(n.id);
    return 0 === r.length
        ? l
            ? null
            : (0, t.jsxs)('div', {
                  className: E.emptyContainer,
                  children: [
                      (0, t.jsx)(c.X6q, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: w.NW.string(w.t.owvC9f)
                      }),
                      (0, t.jsx)('img', {
                          className: E.emptyStateImage,
                          src: k,
                          alt: ''
                      }),
                      (0, t.jsx)(c.zxk, {
                          className: E.emptyStateButton,
                          onClick: () => {
                              let e = C.ZP.getDefaultChannel(n.id);
                              null != e && (0, x.uL)(P.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: w.NW.string(w.t['3iCBUl'])
                      })
                  ]
              })
        : (0, t.jsxs)('div', {
              className: E.container,
              children: [
                  (0, t.jsx)(c.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: w.NW.string(w.t.xwY4LS)
                  }),
                  r.map((e) => (0, t.jsx)(M, { resource: e }, e.channelId))
              ]
          });
}
