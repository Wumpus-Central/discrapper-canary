t.d(n, { ZP: () => D }), t(388685), t(953529);
var r = t(200651),
    l = t(192379),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    o = t(481060),
    c = t(904245),
    d = t(368844),
    u = t(73315),
    m = t(454585),
    h = t(406432),
    f = t(169525),
    g = t(524444),
    p = t(703656),
    x = t(6025),
    b = t(695346),
    j = t(592125),
    C = t(984933),
    v = t(375954),
    _ = t(496675),
    I = t(451478),
    Z = t(768581),
    N = t(526120),
    y = t(689981),
    O = t(825334),
    P = t(981631),
    w = t(388032),
    E = t(79341),
    S = t(73433),
    k = t(931057);
function A(e) {
    let n,
        t,
        { firstMedia: l, channelId: a } = e,
        o = (0, s.e7)([j.Z], () => j.Z.getChannel(a)),
        [c, d] = (0, f.hL)({
            media: l,
            channel: o
        }),
        m = (0, f.MC)(d),
        p = (0, s.e7)([I.Z], () => I.Z.isFocused()),
        x = (0, h.d$)(l.src),
        C = b.QK.useSetting(),
        { src: v, width: _, height: Z, alt: N } = l;
    return (
        Z > _ ? (t = 72) : (n = 72),
        (0, r.jsxs)('div', {
            className: E.media,
            children: [
                (0, g.Yi)({
                    src: v,
                    maxHeight: n,
                    maxWidth: t,
                    width: _,
                    height: Z,
                    alt: null != N && c && null != m ? m : N,
                    autoPlay: C,
                    animated: x && !c && p,
                    containerClassName: E.thumbnailContainer,
                    imageClassName: i()({ [E.obscured]: c }),
                    analyticsSource: 'ResourceChannelMedia'
                }),
                c &&
                    (0, r.jsx)(u.Z, {
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
        a = (0, s.e7)([v.Z], () => v.Z.getMessages(n.channelId)),
        u = (0, s.e7)([_.Z], () => _.Z.can(P.Plq.VIEW_CHANNEL, t)),
        h = a.first(),
        f = (0, y.Z)(h),
        g = (0, d.zy)(h, !1),
        p = (null == g ? void 0 : g.length) > 0 ? g[0] : null,
        b = null != t && null == a.first() && !a.loadingMore && !a.ready && !a.hasFetched && u;
    if (
        (l.useEffect(() => {
            b &&
                c.Z.fetchMessages({
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
        I = null == n.description || 0 === n.description.length;
    return (0, r.jsxs)(o.P3F, {
        className: E.row,
        onClick: (e) => {
            null != t &&
                (e.shiftKey
                    ? (0, N.C3)(t.guild_id, t.id)
                    : x.Z.openResourceChannelAsSidebar({
                          guildId: t.guild_id,
                          channelId: t.id
                      }));
        },
        children: [
            (0, r.jsxs)('div', {
                className: E.content,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: E.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    I &&
                        null != f &&
                        (0, r.jsx)(o.Text, {
                            className: E.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: m.Z.parse(f, !0, {
                                guildId: t.guild_id,
                                channelId: t.id
                            })
                        }),
                    !I &&
                        (0, r.jsx)(o.Text, {
                            className: i()(E.messageContent, S.markup),
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
            null != n.icon && null != C
                ? (0, r.jsx)('div', {
                      className: E.media,
                      children: (0, r.jsx)('img', {
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
                ? (0, r.jsx)(A, {
                      firstMedia: p,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function D(e) {
    let { guild: n, isNewMember: t } = e,
        l = (0, O.Z)(n.id);
    return 0 === l.length
        ? t
            ? null
            : (0, r.jsxs)('div', {
                  className: E.emptyContainer,
                  children: [
                      (0, r.jsx)(o.X6q, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: w.NW.string(w.t.owvC9f)
                      }),
                      (0, r.jsx)('img', {
                          className: E.emptyStateImage,
                          src: k,
                          alt: ''
                      }),
                      (0, r.jsx)(o.zxk, {
                          className: E.emptyStateButton,
                          onClick: () => {
                              let e = C.ZP.getDefaultChannel(n.id);
                              null != e && (0, p.uL)(P.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: w.NW.string(w.t['3iCBUl'])
                      })
                  ]
              })
        : (0, r.jsxs)('div', {
              className: E.container,
              children: [
                  (0, r.jsx)(o.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: w.NW.string(w.t.xwY4LS)
                  }),
                  l.map((e) => (0, r.jsx)(M, { resource: e }, e.channelId))
              ]
          });
}
