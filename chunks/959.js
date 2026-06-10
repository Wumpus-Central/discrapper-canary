"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(17928),
    s = n(364522),
    a = n(86182),
    o = n(922016),
    l = n(442433),
    u = n(538451),
    c = n(342296),
    d = n(363195),
    _ = n(562153),
    h = n(450422);
function f(e) {
    let { participants: t, channel: r } = e;
    return (0, i.jsx)(s.Ip, {
        className: h.S,
        children: t.map((e) =>
            (0, i.jsx)(
                u.A,
                {
                    user: e,
                    guildId: r?.guild_id,
                    channelId: r?.id,
                    nick: _.Ay.getNickname(r?.guild_id, r?.id, e),
                    onContextMenu: (t) => {
                        (0, l.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("84738"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("8757"),
                                n.e("34530"),
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
                                n.e("56753"),
                                n.e("14461"),
                                n.e("72883"),
                                n.e("25486"),
                                n.e("49644"),
                                n.e("42204"),
                                n.e("42191"),
                                n.e("32418"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, i.jsx)(t, { ...n, user: e });
                        });
                    },
                },
                e.id,
            ),
        ),
    });
}
function p(e) {
    let { children: t, participants: n, channel: s, onPopoutClosed: l, targetElementRef: u } = e,
        _ = (0, r.bG)([d.A], () => d.A.theme),
        h = 1 === n.length ? n[0] : null;
    return null != h
        ? (0, i.jsx)(a.w, {
              theme: _,
              children: (0, i.jsx)(c.A, {
                  targetElementRef: u,
                  user: h,
                  guildId: s?.guild_id,
                  channelId: s?.id,
                  onClosePopout: l,
                  children: t,
              }),
          })
        : (0, i.jsx)(a.w, {
              theme: _,
              children: (0, i.jsx)(o.Y, {
                  targetElementRef: u,
                  renderPopout: () => {
                      if (null != n) return (0, i.jsx)(f, { participants: n, channel: s });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
