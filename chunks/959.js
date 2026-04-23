"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(17928),
    s = n(364522),
    a = n(86182),
    o = n(922016),
    l = n(442433),
    d = n(538451),
    _ = n(342296),
    u = n(363195),
    c = n(562153),
    E = n(450422);
function h(e) {
    let { participants: t, channel: r } = e;
    return (0, i.jsx)(s.Ip, {
        className: E.S,
        children: t.map((e) =>
            (0, i.jsx)(
                d.A,
                {
                    user: e,
                    guildId: r?.guild_id,
                    channelId: r?.id,
                    nick: c.Ay.getNickname(r?.guild_id, r?.id, e),
                    onContextMenu: (t) => {
                        (0, l.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("97262"),
                                n.e("24170"),
                                n.e("53635"),
                                n.e("32418"),
                                n.e("17563"),
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
function m(e) {
    let { children: t, participants: n, channel: s, onPopoutClosed: l, targetElementRef: d } = e,
        c = (0, r.bG)([u.A], () => u.A.theme),
        E = 1 === n.length ? n[0] : null;
    return null != E
        ? (0, i.jsx)(a.w, {
              theme: c,
              children: (0, i.jsx)(_.A, {
                  targetElementRef: d,
                  user: E,
                  guildId: s?.guild_id,
                  channelId: s?.id,
                  onClosePopout: l,
                  children: t,
              }),
          })
        : (0, i.jsx)(a.w, {
              theme: c,
              children: (0, i.jsx)(o.Y, {
                  targetElementRef: d,
                  renderPopout: () => {
                      if (null != n) return (0, i.jsx)(h, { participants: n, channel: s });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
