n.d(t, { f: () => y });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(159691),
    s = n(541716),
    l = n(419922),
    c = n(665906),
    u = n(271383),
    d = n(430824),
    f = n(496675),
    p = n(594174),
    _ = n(838440),
    m = n(779139),
    h = n(981631),
    g = n(388032),
    E = n(417601);
let b = (e) => {
        let { channel: t, message: n } = e,
            a = (0, m.y6)(n.id),
            c = i.useCallback(() => {
                (0, _.v)({
                    type: s.Ie.FORM,
                    content: "",
                    channel: t,
                }).then((e) => {
                    let { valid: r } = e;
                    r && (0, m.TZ)(t, n, a.id);
                });
            }, [t, n, a]);
        return (0, r.jsx)("div", {
            className: E.welcomeCTA,
            children: (0, r.jsx)(o.zxk, {
                icon: {
                    type: "sticker",
                    asset: a,
                    component: l.Z,
                },
                text: g.intl.string(g.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary",
            }),
        });
    },
    y = (e) => {
        let { message: t, channel: n } = e,
            i = n.getGuildId(),
            o = (0, a.e7)([p.default, f.Z, d.Z, u.ZP], () => {
                var e;
                let r = p.default.getCurrentUser(),
                    a = (0, c.xl)(n),
                    o = f.Z.can(h.Plq.SEND_MESSAGES, n),
                    s = null != i && null != r && (null == (e = u.ZP.getMember(i, r.id)) ? void 0 : e.isPending),
                    l = t.author.bot,
                    _ = d.Z.getGuild(i),
                    m = null != _ && (_.systemChannelFlags & h.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return o && !a && !s && !l && m;
            });
        return null != i && o
            ? (0, r.jsx)(b, {
                  message: t,
                  channel: n,
              })
            : null;
    };
