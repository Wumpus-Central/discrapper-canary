"use strict";
n.d(t, { A: () => f });
var l = n(627968),
    i = n(17928),
    r = n(364522),
    s = n(86182),
    a = n(922016),
    o = n(442433),
    u = n(538451),
    c = n(342296),
    d = n(363195),
    m = n(562153),
    h = n(450422);
function p(e) {
    let { participants: t, channel: i } = e;
    return (0, l.jsx)(r.Ip, {
        className: h.S,
        children: t.map((e) =>
            (0, l.jsx)(
                u.A,
                {
                    user: e,
                    guildId: i?.guild_id,
                    channelId: i?.id,
                    nick: m.Ay.getNickname(i?.guild_id, i?.id, e),
                    onContextMenu: (t) => {
                        (0, o.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("71406"),
                                n.e("94881"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("8757"),
                                n.e("85968"),
                                n.e("89673"),
                                n.e("68403"),
                                n.e("29787"),
                                n.e("82073"),
                                n.e("97558"),
                                n.e("91994"),
                                n.e("76665"),
                                n.e("76273"),
                                n.e("24198"),
                                n.e("14461"),
                                n.e("56753"),
                                n.e("72883"),
                                n.e("25486"),
                                n.e("49644"),
                                n.e("42204"),
                                n.e("42191"),
                                n.e("32418"),
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
function f(e) {
    let { children: t, participants: n, channel: r, onPopoutClosed: o, targetElementRef: u } = e,
        m = (0, i.bG)([d.A], () => d.A.theme),
        h = 1 === n.length ? n[0] : null;
    return null != h
        ? (0, l.jsx)(s.w, {
              theme: m,
              children: (0, l.jsx)(c.A, {
                  targetElementRef: u,
                  user: h,
                  guildId: r?.guild_id,
                  channelId: r?.id,
                  onClosePopout: o,
                  children: t,
              }),
          })
        : (0, l.jsx)(s.w, {
              theme: m,
              children: (0, l.jsx)(a.Y, {
                  targetElementRef: u,
                  renderPopout: () => {
                      if (null != n) return (0, l.jsx)(p, { participants: n, channel: r });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
