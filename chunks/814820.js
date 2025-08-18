n.d(t, { f: () => C });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(159691),
    a = n(541716),
    s = n(419922),
    c = n(665906),
    u = n(271383),
    d = n(430824),
    p = n(496675),
    m = n(594174),
    f = n(838440),
    g = n(779139),
    _ = n(981631),
    h = n(388032),
    b = n(628800);
let E = (e) => {
        let { channel: t, message: n } = e,
            l = (0, g.y6)(n.id),
            c = i.useCallback(() => {
                (0, f.v)({
                    type: a.Ie.FORM,
                    content: "",
                    channel: t,
                }).then((e) => {
                    let { valid: r } = e;
                    r && (0, g.TZ)(t, n, l.id);
                });
            }, [t, n, l]);
        return (0, r.jsx)("div", {
            className: b.welcomeCTA,
            children: (0, r.jsx)(o.zx, {
                icon: {
                    type: "sticker",
                    asset: l,
                    component: s.Z,
                },
                text: h.intl.string(h.t["7Tj6HR"]),
                onClick: c,
                variant: "secondary",
            }),
        });
    },
    C = (e) => {
        let { message: t, channel: n } = e,
            i = n.getGuildId(),
            o = (0, l.e7)([m.default, p.Z, d.Z, u.ZP], () => {
                var e;
                let r = m.default.getCurrentUser(),
                    l = (0, c.xl)(n),
                    o = p.Z.can(_.Plq.SEND_MESSAGES, n),
                    a = null != i && null != r && (null == (e = u.ZP.getMember(i, r.id)) ? void 0 : e.isPending),
                    s = t.author.bot,
                    f = d.Z.getGuild(i),
                    g = null != f && (f.systemChannelFlags & _.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return o && !l && !a && !s && g;
            });
        return null != i && o
            ? (0, r.jsx)(E, {
                  message: t,
                  channel: n,
              })
            : null;
    };
