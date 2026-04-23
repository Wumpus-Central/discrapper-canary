"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(311907),
    s = n(573613),
    a = n(86182),
    o = n(265872),
    l = n(442433),
    u = n(538451),
    c = n(342296),
    d = n(544028),
    _ = n(562153),
    f = n(450422);
function p(e) {
    let { participants: t, channel: i } = e;
    return (0, r.jsx)(s.Ip, {
        className: f.S,
        children: t.map((e) =>
            (0, r.jsx)(
                u.A,
                {
                    user: e,
                    guildId: i?.guild_id,
                    channelId: i?.id,
                    nick: _.Ay.getNickname(i?.guild_id, i?.id, e),
                    onContextMenu: (t) => {
                        (0, l.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("97262"),
                                n.e("92493"),
                                n.e("53635"),
                                n.e("32418"),
                                n.e("72090"),
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
function h(e) {
    let { children: t, participants: n, channel: s, onPopoutClosed: l, targetElementRef: u } = e,
        _ = (0, i.bG)([d.A], () => d.A.theme),
        f = 1 === n.length ? n[0] : null;
    return null != f
        ? (0, r.jsx)(a.w, {
              theme: _,
              children: (0, r.jsx)(c.A, {
                  targetElementRef: u,
                  user: f,
                  guildId: s?.guild_id,
                  channelId: s?.id,
                  onClosePopout: l,
                  children: t,
              }),
          })
        : (0, r.jsx)(a.w, {
              theme: _,
              children: (0, r.jsx)(o.Y, {
                  targetElementRef: u,
                  renderPopout: () => {
                      if (null != n) return (0, r.jsx)(p, { participants: n, channel: s });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
