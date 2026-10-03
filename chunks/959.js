n.d(t, { A: () => x });
var l = n(477900),
    r = n(17928),
    a = n(364522),
    i = n(86182),
    s = n(922016),
    o = n(442433),
    u = n(538451),
    c = n(342296),
    d = n(363195),
    m = n(562153),
    h = n(462117);
function p(e) {
    let { participants: t, channel: r } = e;
    return (0, l.jsx)(a.Ip, {
        className: h.S,
        children: t.map((e) =>
            (0, l.jsx)(
                u.A,
                {
                    user: e,
                    guildId: r?.guild_id,
                    channelId: r?.id,
                    nick: m.Ay.getNickname(r?.guild_id, r?.id, e),
                    onContextMenu: (t) => {
                        (0, o.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("790484"),
                                n.e("463317"),
                                n.e("926132"),
                                n.e("146652"),
                                n.e("834552"),
                                n.e("708757"),
                                n.e("585968"),
                                n.e("893190"),
                                n.e("776273"),
                                n.e("638221"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("229787"),
                                n.e("576665"),
                                n.e("715038"),
                                n.e("624198"),
                                n.e("190889"),
                                n.e("856753"),
                                n.e("114518"),
                                n.e("331203"),
                                n.e("255302"),
                                n.e("349644"),
                                n.e("825486"),
                                n.e("172883"),
                                n.e("242204"),
                                n.e("873786"),
                                n.e("920628"),
                                n.e("532418"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, l.jsx)(t, { ...n, user: e });
                        });
                    },
                },
                e.id,
            ),
        ),
    });
}
function x(e) {
    let { children: t, participants: n, channel: a, onPopoutClosed: o, targetElementRef: u } = e,
        m = (0, r.bG)([d.A], () => d.A.theme),
        h = 1 === n.length ? n[0] : null;
    return null != h
        ? (0, l.jsx)(i.w, {
              theme: m,
              children: (0, l.jsx)(c.A, {
                  targetElementRef: u,
                  user: h,
                  guildId: a?.guild_id,
                  channelId: a?.id,
                  onClosePopout: o,
                  children: t,
              }),
          })
        : (0, l.jsx)(i.w, {
              theme: m,
              children: (0, l.jsx)(s.Y, {
                  targetElementRef: u,
                  renderPopout: () => {
                      if (null != n) return (0, l.jsx)(p, { participants: n, channel: a });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
