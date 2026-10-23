n.d(t, { A: () => x });
var l = n(477900),
    a = n(17928),
    r = n(364522),
    s = n(86182),
    i = n(265872),
    o = n(442433),
    c = n(538451),
    d = n(342296),
    u = n(363195),
    m = n(562153),
    p = n(462117);
function h(e) {
    let { participants: t, channel: a } = e;
    return (0, l.jsx)(r.Ip, {
        className: p.S,
        children: t.map((e) =>
            (0, l.jsx)(
                c.A,
                {
                    user: e,
                    guildId: a?.guild_id,
                    channelId: a?.id,
                    nick: m.Ay.getNickname(a?.guild_id, a?.id, e),
                    onContextMenu: (t) => {
                        (0, o.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("790484"),
                                n.e("463317"),
                                n.e("834552"),
                                n.e("708757"),
                                n.e("893190"),
                                n.e("585968"),
                                n.e("776273"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("638221"),
                                n.e("691994"),
                                n.e("229787"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("715038"),
                                n.e("190889"),
                                n.e("242204"),
                                n.e("856753"),
                                n.e("61129"),
                                n.e("205941"),
                                n.e("331203"),
                                n.e("255302"),
                                n.e("349644"),
                                n.e("172883"),
                                n.e("825486"),
                                n.e("920628"),
                                n.e("873786"),
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
    let { children: t, participants: n, channel: r, onPopoutClosed: o, targetElementRef: c } = e,
        m = (0, a.bG)([u.A], () => u.A.theme),
        p = 1 === n.length ? n[0] : null;
    return null != p
        ? (0, l.jsx)(s.w, {
              theme: m,
              children: (0, l.jsx)(d.A, {
                  targetElementRef: c,
                  user: p,
                  guildId: r?.guild_id,
                  channelId: r?.id,
                  onClosePopout: o,
                  children: t,
              }),
          })
        : (0, l.jsx)(s.w, {
              theme: m,
              children: (0, l.jsx)(i.Y, {
                  targetElementRef: c,
                  renderPopout: () => {
                      if (null != n) return (0, l.jsx)(h, { participants: n, channel: r });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
