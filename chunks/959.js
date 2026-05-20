"use strict";
n.d(t, { A: () => f });
var l = n(627968),
    i = n(17928),
    s = n(364522),
    r = n(86182),
    a = n(922016),
    o = n(442433),
    c = n(538451),
    u = n(342296),
    d = n(363195),
    h = n(562153),
    m = n(450422);
function p(e) {
    let { participants: t, channel: i } = e;
    return (0, l.jsx)(s.Ip, {
        className: m.S,
        children: t.map((e) =>
            (0, l.jsx)(
                c.A,
                {
                    user: e,
                    guildId: i?.guild_id,
                    channelId: i?.id,
                    nick: h.Ay.getNickname(i?.guild_id, i?.id, e),
                    onContextMenu: (t) => {
                        (0, o.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("8516"),
                                n.e("20706"),
                                n.e("94881"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("8757"),
                                n.e("34530"),
                                n.e("89673"),
                                n.e("85968"),
                                n.e("60195"),
                                n.e("68403"),
                                n.e("29787"),
                                n.e("97558"),
                                n.e("94000"),
                                n.e("91994"),
                                n.e("76665"),
                                n.e("76273"),
                                n.e("24198"),
                                n.e("56753"),
                                n.e("25486"),
                                n.e("14461"),
                                n.e("72883"),
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
    let { children: t, participants: n, channel: s, onPopoutClosed: o, targetElementRef: c } = e,
        h = (0, i.bG)([d.A], () => d.A.theme),
        m = 1 === n.length ? n[0] : null;
    return null != m
        ? (0, l.jsx)(r.w, {
              theme: h,
              children: (0, l.jsx)(u.A, {
                  targetElementRef: c,
                  user: m,
                  guildId: s?.guild_id,
                  channelId: s?.id,
                  onClosePopout: o,
                  children: t,
              }),
          })
        : (0, l.jsx)(r.w, {
              theme: h,
              children: (0, l.jsx)(a.Y, {
                  targetElementRef: c,
                  renderPopout: () => {
                      if (null != n) return (0, l.jsx)(p, { participants: n, channel: s });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
