n.d(t, {
    f: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(541716),
    s = n(419922),
    c = n(665906),
    d = n(271383),
    u = n(430824),
    m = n(496675),
    h = n(594174),
    f = n(838440),
    p = n(779139),
    _ = n(981631),
    g = n(388032),
    E = n(134492);
let C = (e) => {
        let { channel: t, message: n } = e,
            [l, c] = r.useState(!1),
            d = (0, p.y6)(n.id),
            u = r.useCallback(() => {
                (0, f.v)({
                    type: o.Ie.FORM,
                    content: '',
                    channel: t
                }).then((e) => {
                    let { valid: i } = e;
                    if (!!i) (0, p.TZ)(t, n, d.id);
                });
            }, [t, n, d]);
        return (0, i.jsx)('div', {
            className: E.welcomeCTA,
            children: (0, i.jsxs)(a.Button, {
                className: E.welcomeCTAButtonOuter,
                innerClassName: E.welcomeCTAButton,
                color: a.ButtonColors.PRIMARY,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                onClick: u,
                children: [
                    (0, i.jsx)(s.ZP, {
                        className: E.welcomeCTASticker,
                        isInteracting: l,
                        sticker: d,
                        size: 28
                    }),
                    g.intl.string(g.t['7Tj6HR'])
                ]
            })
        });
    },
    I = (e) => {
        let { message: t, channel: n } = e,
            r = n.getGuildId(),
            a = (0, l.e7)([h.default, m.Z, u.Z, d.ZP], () => {
                var e;
                let i = h.default.getCurrentUser(),
                    l = (0, c.xl)(n),
                    a = m.Z.can(_.Plq.SEND_MESSAGES, n),
                    o = null != r && null != i && (null === (e = d.ZP.getMember(r, i.id)) || void 0 === e ? void 0 : e.isPending),
                    s = t.author.bot,
                    f = u.Z.getGuild(r),
                    p = null != f && (f.systemChannelFlags & _.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return a && !l && !o && !s && p;
            });
        return null != r && a
            ? (0, i.jsx)(C, {
                  message: t,
                  channel: n
              })
            : null;
    };
