"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(538451),
    l = n(342296),
    u = n(544028),
    c = n(562153),
    d = n(899959);
function _(e) {
    let { participants: t, channel: i } = e;
    return (0, r.jsx)(a.HOs, {
        className: d.S,
        children: t.map((e) =>
            (0, r.jsx)(
                o.A,
                {
                    user: e,
                    guildId: i?.guild_id,
                    channelId: i?.id,
                    nick: c.Ay.getNickname(i?.guild_id, i?.id, e),
                    onContextMenu: (t) => {
                        (0, s.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("97262"),
                                n.e("3795"),
                                n.e("32418"),
                                n.e("57600"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, r.jsx)(t, { ...n, user: e });
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
        d = (0, i.bG)([u.A], () => u.A.theme),
        f = 1 === n.length ? n[0] : null;
    return null != f
        ? (0, r.jsx)(a.wXn, {
              theme: d,
              children: (0, r.jsx)(l.A, {
                  targetElementRef: c,
                  user: f,
                  guildId: s?.guild_id,
                  channelId: s?.id,
                  onClosePopout: o,
                  children: t,
              }),
          })
        : (0, r.jsx)(a.wXn, {
              theme: d,
              children: (0, r.jsx)(a.YNO, {
                  targetElementRef: c,
                  renderPopout: () => {
                      if (null != n) return (0, r.jsx)(_, { participants: n, channel: s });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
