"use strict";
n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(442433),
    s = n(593284),
    a = n(288539),
    r = n(734057);
let o = {
    handleUserContextMenu(e, t, s, a) {
        let o = r.A.getChannel(t);
        null != o &&
            (0, i.L3)(a, async () => {
                let { default: t } = await Promise.all([
                    n.e("62731"),
                    n.e("97262"),
                    n.e("93103"),
                    n.e("88342"),
                    n.e("35313"),
                    n.e("24170"),
                    n.e("84442"),
                    n.e("24431"),
                    n.e("78178"),
                    n.e("92456"),
                    n.e("78980"),
                ]).then(n.bind(n, 107632));
                return (n) => (0, l.jsx)(t, { ...n, user: e, channel: o, guildId: s });
            });
    },
    react(e, t, n) {
        let { userId: i, channelId: r, parsedUserId: o, roleId: c, roleName: u, viewingChannelId: d } = e;
        return null == i && (null != c || "@everyone" === u || "@here" === u)
            ? (0, l.jsx)(s.A, { inlinePreview: n.formatInline, ...e, children: t(e.content, n) }, n.key)
            : (0, l.jsx)(
                  a.A,
                  {
                      className: "mention",
                      userId: i,
                      channelId: r,
                      viewingChannelId: d,
                      parsedUserId: o,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction,
                  },
                  n.key,
              );
    },
};
