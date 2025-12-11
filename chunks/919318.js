t.d(n, { ZP: () => L }), t(388685), t(953529);
var a = t(54381),
    l = t(473749),
    r = t(120356),
    i = t.n(r),
    c = t(442837),
    s = t(481060),
    d = t(904245),
    o = t(368844),
    u = t(73315),
    m = t(454585),
    h = t(406432),
    f = t(169525),
    g = t(524444),
    b = t(703656),
    x = t(6025),
    p = t(695346),
    j = t(592125),
    C = t(984933),
    v = t(375954),
    Z = t(496675),
    I = t(451478),
    N = t(768581),
    y = t(526120),
    O = t(689981),
    _ = t(825334),
    P = t(981631),
    w = t(388032),
    E = t(858273),
    S = t(960324),
    A = t(931057);
function M(e) {
    let n,
        t,
        { firstMedia: l, channelId: r } = e,
        s = (0, c.e7)([j.Z], () => j.Z.getChannel(r)),
        [d, o] = (0, f.hL)({
            media: l,
            channel: s,
        }),
        m = (0, f.MC)(o),
        b = (0, c.e7)([I.Z], () => I.Z.isFocused()),
        x = (0, h.d$)(l.src),
        C = p.QK.useSetting(),
        { src: v, width: Z, height: N, alt: y } = l;
    return (
        N > Z ? (t = 72) : (n = 72),
        (0, a.jsxs)("div", {
            className: E.media,
            children: [
                (0, g.Yi)({
                    src: v,
                    maxHeight: n,
                    maxWidth: t,
                    width: Z,
                    height: N,
                    alt: null != y && d && null != m ? m : y,
                    autoPlay: C,
                    animated: x && !d && b,
                    containerClassName: E.thumbnailContainer,
                    imageClassName: i()({ [E.obscured]: d }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                d &&
                    (0, a.jsx)(u.Z, {
                        obscureReason: o,
                        iconClassname: E.obscuredTag,
                    }),
            ],
        })
    );
}
function k(e) {
    let { resource: n } = e,
        t = (0, c.e7)([j.Z], () => j.Z.getChannel(n.channelId)),
        r = (0, c.e7)([v.Z], () => v.Z.getMessages(n.channelId)),
        u = (0, c.e7)([Z.Z], () => Z.Z.can(P.Plq.VIEW_CHANNEL, t)),
        h = r.first(),
        f = (0, O.Z)(h),
        g = (0, o.zy)(h, !1),
        b = (null == g ? void 0 : g.length) > 0 ? g[0] : null,
        p = null != t && null == r.first() && !r.loadingMore && !r.ready && !r.hasFetched && u;
    if (
        (l.useEffect(() => {
            p &&
                d.Z.fetchMessages({
                    channelId: n.channelId,
                    after: n.channelId,
                    limit: 5,
                });
        }, [n.channelId, p]),
        null == t || null == t.guild_id)
    )
        return null;
    let C = N.ZP.getResourceChannelIconURL({
            channelId: t.id,
            icon: n.icon,
        }),
        I = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(s.P3F, {
        className: E.row,
        onClick: (e) => {
            null != t &&
                (e.shiftKey
                    ? (0, y.C3)(t.guild_id, t.id)
                    : x.Z.openResourceChannelAsSidebar({
                          guildId: t.guild_id,
                          channelId: t.id,
                      }));
        },
        children: [
            (0, a.jsxs)("div", {
                className: E.content,
                children: [
                    (0, a.jsx)(s.Text, {
                        className: E.title,
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    I &&
                        null != f &&
                        (0, a.jsx)(s.Text, {
                            className: E.messageContent,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: m.Z.parse(f, !0, {
                                guildId: t.guild_id,
                                channelId: t.id,
                            }),
                        }),
                    !I &&
                        (0, a.jsx)(s.Text, {
                            className: i()(E.messageContent, S.markup),
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: m.Z.parse(n.description, !0, {
                                guildId: t.guild_id,
                                channelId: t.id,
                            }),
                        }),
                ],
            }),
            null != n.icon && null != C
                ? (0, a.jsx)("div", {
                      className: E.media,
                      children: (0, a.jsx)("img", {
                          src: C,
                          className: E.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: "",
                          "aria-hidden": !0,
                      }),
                  })
                : null,
            null == C && null != b
                ? (0, a.jsx)(M, {
                      firstMedia: b,
                      channelId: n.channelId,
                  })
                : null,
        ],
    });
}
function L(e) {
    let { guild: n, isNewMember: t } = e,
        l = (0, _.Z)(n.id);
    return 0 === l.length
        ? t
            ? null
            : (0, a.jsxs)("div", {
                  className: E.emptyContainer,
                  children: [
                      (0, a.jsx)(s.Heading, {
                          variant: "heading-xl/bold",
                          color: "text-strong",
                          children: w.intl.string(w.t.owvC9U),
                      }),
                      (0, a.jsx)("img", {
                          className: E.emptyStateImage,
                          src: A,
                          alt: "",
                      }),
                      (0, a.jsx)("div", {
                          className: E.emptyStateButton,
                          children: (0, a.jsx)(s.Button, {
                              size: "md",
                              variant: "primary",
                              onClick: () => {
                                  let e = C.ZP.getDefaultChannel(n.id);
                                  null != e && (0, b.uL)(P.Z5c.CHANNEL(n.id, e.id));
                              },
                              fullWidth: !0,
                              text: w.intl.string(w.t["3iCBUn"]),
                          }),
                      }),
                  ],
              })
        : (0, a.jsxs)("div", {
              className: E.container,
              children: [
                  (0, a.jsx)(s.Heading, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: w.intl.string(w.t.xwY4La),
                  }),
                  l.map((e) => (0, a.jsx)(k, { resource: e }, e.channelId)),
              ],
          });
}
