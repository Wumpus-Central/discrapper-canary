n.d(t, { f: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(541716),
    o = n(419922),
    c = n(665906),
    d = n(271383),
    u = n(430824),
    m = n(496675),
    _ = n(594174),
    h = n(838440),
    p = n(779139),
    g = n(981631),
    f = n(388032),
    x = n(443017);
let C = (e) => {
        let { channel: t, message: n } = e,
            [a, c] = l.useState(!1),
            d = (0, p.y6)(n.id),
            u = l.useCallback(() => {
                (0, h.v)({
                    type: s.Ie.FORM,
                    content: '',
                    channel: t
                }).then((e) => {
                    let { valid: i } = e;
                    i && (0, p.TZ)(t, n, d.id);
                });
            }, [t, n, d]);
        return (0, i.jsx)('div', {
            className: x.welcomeCTA,
            children: (0, i.jsxs)(r.zxk, {
                className: x.welcomeCTAButtonOuter,
                innerClassName: x.welcomeCTAButton,
                color: r.Ttl.PRIMARY,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                onClick: u,
                children: [
                    (0, i.jsx)(o.ZP, {
                        className: x.welcomeCTASticker,
                        isInteracting: a,
                        sticker: d,
                        size: 28
                    }),
                    f.intl.string(f.t['7Tj6HR'])
                ]
            })
        });
    },
    E = (e) => {
        let { message: t, channel: n } = e,
            l = n.getGuildId(),
            r = (0, a.e7)([_.default, m.Z, u.Z, d.ZP], () => {
                var e;
                let i = _.default.getCurrentUser(),
                    a = (0, c.xl)(n),
                    r = m.Z.can(g.Plq.SEND_MESSAGES, n),
                    s = null != l && null != i && (null === (e = d.ZP.getMember(l, i.id)) || void 0 === e ? void 0 : e.isPending),
                    o = t.author.bot,
                    h = u.Z.getGuild(l),
                    p = null != h && (h.systemChannelFlags & g.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return r && !a && !s && !o && p;
            });
        return null != l && r
            ? (0, i.jsx)(C, {
                  message: t,
                  channel: n
              })
            : null;
    };
