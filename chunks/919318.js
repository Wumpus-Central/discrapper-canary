t.d(n, { ZP: () => D }), t(388685), t(953529);
var l = t(255367),
    r = t(73800),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    c = t(481060),
    o = t(904245),
    d = t(368844),
    u = t(73315),
    h = t(454585),
    m = t(406432),
    f = t(169525),
    g = t(524444),
    p = t(703656),
    x = t(6025),
    b = t(695346),
    j = t(592125),
    C = t(984933),
    _ = t(375954),
    I = t(496675),
    v = t(451478),
    Z = t(768581),
    y = t(526120),
    N = t(689981),
    O = t(825334),
    P = t(981631),
    w = t(388032),
    E = t(79341),
    S = t(73433),
    k = t(931057);
function A(e) {
    let n,
        t,
        { firstMedia: r, channelId: a } = e,
        c = (0, s.e7)([j.Z], () => j.Z.getChannel(a)),
        [o, d] = (0, f.hL)({
            media: r,
            channel: c
        }),
        h = (0, f.MC)(d),
        p = (0, s.e7)([v.Z], () => v.Z.isFocused()),
        x = (0, m.d$)(r.src),
        C = b.QK.useSetting(),
        { src: _, width: I, height: Z, alt: y } = r;
    return (
        Z > I ? (t = 72) : (n = 72),
        (0, l.jsxs)('div', {
            className: E.media,
            children: [
                (0, g.Yi)({
                    src: _,
                    maxHeight: n,
                    maxWidth: t,
                    width: I,
                    height: Z,
                    alt: null != y && o && null != h ? h : y,
                    autoPlay: C,
                    animated: x && !o && p,
                    containerClassName: E.thumbnailContainer,
                    imageClassName: i()({ [E.obscured]: o }),
                    analyticsSource: 'ResourceChannelMedia'
                }),
                o &&
                    (0, l.jsx)(u.Z, {
                        obscureReason: d,
                        iconClassname: E.obscuredTag
                    })
            ]
        })
    );
}
function M(e) {
    let { resource: n } = e,
        t = (0, s.e7)([j.Z], () => j.Z.getChannel(n.channelId)),
        a = (0, s.e7)([_.Z], () => _.Z.getMessages(n.channelId)),
        u = (0, s.e7)([I.Z], () => I.Z.can(P.Plq.VIEW_CHANNEL, t)),
        m = a.first(),
        f = (0, N.Z)(m),
        g = (0, d.zy)(m, !1),
        p = (null == g ? void 0 : g.length) > 0 ? g[0] : null,
        b = null != t && null == a.first() && !a.loadingMore && !a.ready && !a.hasFetched && u;
    if (
        (r.useEffect(() => {
            b &&
                o.Z.fetchMessages({
                    channelId: n.channelId,
                    after: n.channelId,
                    limit: 5
                });
        }, [n.channelId, b]),
        null == t || null == t.guild_id)
    )
        return null;
    let C = Z.ZP.getResourceChannelIconURL({
            channelId: t.id,
            icon: n.icon
        }),
        v = null == n.description || 0 === n.description.length;
    return (0, l.jsxs)(c.P3F, {
        className: E.row,
        onClick: (e) => {
            null != t &&
                (e.shiftKey
                    ? (0, y.C3)(t.guild_id, t.id)
                    : x.Z.openResourceChannelAsSidebar({
                          guildId: t.guild_id,
                          channelId: t.id
                      }));
        },
        children: [
            (0, l.jsxs)('div', {
                className: E.content,
                children: [
                    (0, l.jsx)(c.Text, {
                        className: E.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    v &&
                        null != f &&
                        (0, l.jsx)(c.Text, {
                            className: E.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(f, !0, {
                                guildId: t.guild_id,
                                channelId: t.id
                            })
                        }),
                    !v &&
                        (0, l.jsx)(c.Text, {
                            className: i()(E.messageContent, S.markup),
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(n.description, !0, {
                                guildId: t.guild_id,
                                channelId: t.id
                            })
                        })
                ]
            }),
            null != n.icon && null != C
                ? (0, l.jsx)('div', {
                      className: E.media,
                      children: (0, l.jsx)('img', {
                          src: C,
                          className: E.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == C && null != p
                ? (0, l.jsx)(A, {
                      firstMedia: p,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function D(e) {
    let { guild: n, isNewMember: t } = e,
        r = (0, O.Z)(n.id);
    return 0 === r.length
        ? t
            ? null
            : (0, l.jsxs)('div', {
                  className: E.emptyContainer,
                  children: [
                      (0, l.jsx)(c.X6q, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: w.intl.string(w.t.owvC9f)
                      }),
                      (0, l.jsx)('img', {
                          className: E.emptyStateImage,
                          src: k,
                          alt: ''
                      }),
                      (0, l.jsx)(c.zxk, {
                          className: E.emptyStateButton,
                          onClick: () => {
                              let e = C.ZP.getDefaultChannel(n.id);
                              null != e && (0, p.uL)(P.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: w.intl.string(w.t['3iCBUl'])
                      })
                  ]
              })
        : (0, l.jsxs)('div', {
              className: E.container,
              children: [
                  (0, l.jsx)(c.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: w.intl.string(w.t.xwY4LS)
                  }),
                  r.map((e) => (0, l.jsx)(M, { resource: e }, e.channelId))
              ]
          });
}
