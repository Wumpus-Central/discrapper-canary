n.d(t, { f: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(159691),
    s = n(755721),
    l = n(541716),
    c = n(419922),
    u = n(665906),
    d = n(271383),
    f = n(430824),
    _ = n(496675),
    p = n(594174),
    h = n(838440),
    m = n(779139),
    g = n(223750),
    E = n(981631),
    b = n(388032),
    y = n(177562);
let O = (e) => {
        let { channel: t, message: n } = e,
            o = (0, g.t)(),
            [u, d] = i.useState(!1),
            f = (0, m.y6)(n.id),
            _ = i.useCallback(() => {
                (0, h.v)({
                    type: l.Ie.FORM,
                    content: "",
                    channel: t,
                }).then((e) => {
                    let { valid: r } = e;
                    r && (0, m.TZ)(t, n, f.id);
                });
            }, [t, n, f]);
        return (0, r.jsx)("div", {
            className: y.welcomeCTA,
            children: o
                ? (0, r.jsx)(a.zx, {
                      variant: "secondary",
                      size: "md",
                      onClick: _,
                      text: b.intl.string(b.t["7Tj6HR"]),
                  })
                : (0, r.jsxs)(s.zx, {
                      "data-migration-pending": !0,
                      className: y.welcomeCTAButtonOuter,
                      innerClassName: y.welcomeCTAButton,
                      color: s.Tt.PRIMARY,
                      onMouseEnter: () => d(!0),
                      onMouseLeave: () => d(!1),
                      onClick: _,
                      children: [
                          (0, r.jsx)(c.Z, {
                              className: y.welcomeCTASticker,
                              isInteracting: u,
                              sticker: f,
                              size: 28,
                          }),
                          b.intl.string(b.t["7Tj6HR"]),
                      ],
                  }),
        });
    },
    v = (e) => {
        let { message: t, channel: n } = e,
            i = n.getGuildId(),
            a = (0, o.e7)([p.default, _.Z, f.Z, d.ZP], () => {
                var e;
                let r = p.default.getCurrentUser(),
                    o = (0, u.xl)(n),
                    a = _.Z.can(E.Plq.SEND_MESSAGES, n),
                    s = null != i && null != r && (null == (e = d.ZP.getMember(i, r.id)) ? void 0 : e.isPending),
                    l = t.author.bot,
                    c = f.Z.getGuild(i),
                    h = null != c && (c.systemChannelFlags & E.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return a && !o && !s && !l && h;
            });
        return null != i && a
            ? (0, r.jsx)(O, {
                  message: t,
                  channel: n,
              })
            : null;
    };
