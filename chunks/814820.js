(n.d(t, { f: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(159691),
    o = n(755721),
    s = n(541716),
    c = n(419922),
    u = n(665906),
    d = n(271383),
    p = n(430824),
    m = n(496675),
    f = n(594174),
    g = n(838440),
    _ = n(779139),
    h = n(223750),
    b = n(981631),
    E = n(388032),
    C = n(429495);
let v = (e) => {
        let { channel: t, message: n } = e,
            l = (0, h.t)(),
            [u, d] = i.useState(!1),
            p = (0, _.y6)(n.id),
            m = i.useCallback(() => {
                (0, g.v)({
                    type: s.Ie.FORM,
                    content: '',
                    channel: t
                }).then((e) => {
                    let { valid: r } = e;
                    r && (0, _.TZ)(t, n, p.id);
                });
            }, [t, n, p]);
        return (0, r.jsx)('div', {
            className: C.welcomeCTA,
            children: l
                ? (0, r.jsx)(a.zx, {
                      variant: 'secondary',
                      size: 'md',
                      onClick: m,
                      text: E.intl.string(E.t['7Tj6HR'])
                  })
                : (0, r.jsxs)(o.zx, {
                      'data-migration-pending': !0,
                      className: C.welcomeCTAButtonOuter,
                      innerClassName: C.welcomeCTAButton,
                      color: o.Tt.PRIMARY,
                      onMouseEnter: () => d(!0),
                      onMouseLeave: () => d(!1),
                      onClick: m,
                      children: [
                          (0, r.jsx)(c.Z, {
                              className: C.welcomeCTASticker,
                              isInteracting: u,
                              sticker: p,
                              size: 28
                          }),
                          E.intl.string(E.t['7Tj6HR'])
                      ]
                  })
        });
    },
    O = (e) => {
        let { message: t, channel: n } = e,
            i = n.getGuildId(),
            a = (0, l.e7)([f.default, m.Z, p.Z, d.ZP], () => {
                var e;
                let r = f.default.getCurrentUser(),
                    l = (0, u.xl)(n),
                    a = m.Z.can(b.Plq.SEND_MESSAGES, n),
                    o = null != i && null != r && (null == (e = d.ZP.getMember(i, r.id)) ? void 0 : e.isPending),
                    s = t.author.bot,
                    c = p.Z.getGuild(i),
                    g = null != c && (c.systemChannelFlags & b.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return a && !l && !o && !s && g;
            });
        return null != i && a
            ? (0, r.jsx)(v, {
                  message: t,
                  channel: n
              })
            : null;
    };
