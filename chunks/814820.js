n.d(t, { f: () => y });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(159691),
    s = n(541716),
    l = n(419922),
    c = n(665906),
    u = n(271383),
    d = n(430824),
    f = n(496675),
    _ = n(594174),
    p = n(838440),
    h = n(779139),
    m = n(981631),
    g = n(388032),
    E = n(628800);
let b = (e) => {
        let { channel: t, message: n } = e,
            o = (0, h.y6)(n.id),
            c = i.useCallback(() => {
                (0, p.v)({
                    type: s.Ie.FORM,
                    content: "",
                    channel: t,
                }).then((e) => {
                    let { valid: r } = e;
                    r && (0, h.TZ)(t, n, o.id);
                });
            }, [t, n, o]);
        return (0, r.jsx)("div", {
            className: E.welcomeCTA,
            children: (0, r.jsx)(a.zx, {
                icon: {
                    type: "sticker",
                    asset: o,
                    component: l.Z,
                },
                text: g.intl.string(g.t["7Tj6HR"]),
                onClick: c,
                variant: "secondary",
            }),
        });
    },
    y = (e) => {
        let { message: t, channel: n } = e,
            i = n.getGuildId(),
            a = (0, o.e7)([_.default, f.Z, d.Z, u.ZP], () => {
                var e;
                let r = _.default.getCurrentUser(),
                    o = (0, c.xl)(n),
                    a = f.Z.can(m.Plq.SEND_MESSAGES, n),
                    s = null != i && null != r && (null == (e = u.ZP.getMember(i, r.id)) ? void 0 : e.isPending),
                    l = t.author.bot,
                    p = d.Z.getGuild(i),
                    h = null != p && (p.systemChannelFlags & m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return a && !o && !s && !l && h;
            });
        return null != i && a
            ? (0, r.jsx)(b, {
                  message: t,
                  channel: n,
              })
            : null;
    };
