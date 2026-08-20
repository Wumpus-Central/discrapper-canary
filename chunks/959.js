"use strict";
n.d(t, { A: () => p });
var l = n(477900),
    i = n(17928),
    s = n(364522),
    r = n(86182),
    a = n(922016),
    o = n(442433),
    u = n(538451),
    c = n(342296),
    d = n(363195),
    h = n(562153),
    m = n(462117);
function f(e) {
    let { participants: t, channel: i } = e;
    return (0, l.jsx)(s.Ip, {
        className: m.S,
        children: t.map((e) =>
            (0, l.jsx)(
                u.A,
                {
                    user: e,
                    guildId: i?.guild_id,
                    channelId: i?.id,
                    nick: h.Ay.getNickname(i?.guild_id, i?.id, e),
                    onContextMenu: (t) => {
                        (0, o.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("924697"),
                                n.e("866038"),
                                n.e("926132"),
                                n.e("146652"),
                                n.e("834552"),
                                n.e("893190"),
                                n.e("708757"),
                                n.e("468403"),
                                n.e("585968"),
                                n.e("189673"),
                                n.e("229787"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("776273"),
                                n.e("624198"),
                                n.e("856753"),
                                n.e("214461"),
                                n.e("172883"),
                                n.e("825486"),
                                n.e("242204"),
                                n.e("349644"),
                                n.e("442191"),
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
function p(e) {
    let { children: t, participants: n, channel: s, onPopoutClosed: o, targetElementRef: u } = e,
        h = (0, i.bG)([d.A], () => d.A.theme),
        m = 1 === n.length ? n[0] : null;
    return null != m
        ? (0, l.jsx)(r.w, {
              theme: h,
              children: (0, l.jsx)(c.A, {
                  targetElementRef: u,
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
                  targetElementRef: u,
                  renderPopout: () => {
                      if (null != n) return (0, l.jsx)(f, { participants: n, channel: s });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
