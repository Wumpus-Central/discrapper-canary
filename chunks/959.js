"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    l = n(311907),
    s = n(573613),
    r = n(86182),
    a = n(265872),
    o = n(442433),
    c = n(538451),
    u = n(342296),
    d = n(544028),
    h = n(562153),
    m = n(450422);
function p(e) {
    let { participants: t, channel: l } = e;
    return (0, i.jsx)(s.Ip, {
        className: m.S,
        children: t.map((e) =>
            (0, i.jsx)(
                c.A,
                {
                    user: e,
                    guildId: l?.guild_id,
                    channelId: l?.id,
                    nick: h.Ay.getNickname(l?.guild_id, l?.id, e),
                    onContextMenu: (t) => {
                        (0, o.L3)(t, async () => {
                            let { default: t } = await Promise.all([
                                n.e("97262"),
                                n.e("92493"),
                                n.e("53635"),
                                n.e("32418"),
                                n.e("5104"),
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
function f(e) {
    let { children: t, participants: n, channel: s, onPopoutClosed: o, targetElementRef: c } = e,
        h = (0, l.bG)([d.A], () => d.A.theme),
        m = 1 === n.length ? n[0] : null;
    return null != m
        ? (0, i.jsx)(r.w, {
              theme: h,
              children: (0, i.jsx)(u.A, {
                  targetElementRef: c,
                  user: m,
                  guildId: s?.guild_id,
                  channelId: s?.id,
                  onClosePopout: o,
                  children: t,
              }),
          })
        : (0, i.jsx)(r.w, {
              theme: h,
              children: (0, i.jsx)(a.Y, {
                  targetElementRef: c,
                  renderPopout: () => {
                      if (null != n) return (0, i.jsx)(p, { participants: n, channel: s });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
