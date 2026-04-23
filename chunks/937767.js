"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(442433),
    s = n(593284),
    a = n(288539),
    o = n(734057);
let l = {
    handleUserContextMenu(e, t, s, a) {
        let l = o.A.getChannel(t);
        null != l &&
            (0, r.L3)(a, async () => {
                let { default: t } = await Promise.all([
                    n.e("62731"),
                    n.e("97262"),
                    n.e("93103"),
                    n.e("24170"),
                    n.e("97278"),
                    n.e("84442"),
                    n.e("35313"),
                    n.e("52338"),
                    n.e("84841"),
                    n.e("6058"),
                ]).then(n.bind(n, 107632));
                return (n) => (0, i.jsx)(t, { ...n, user: e, channel: l, guildId: s });
            });
    },
    react(e, t, n) {
        let { userId: r, channelId: o, parsedUserId: l, roleId: d, roleName: _, viewingChannelId: u } = e;
        return null == r && (null != d || "@everyone" === _ || "@here" === _)
            ? (0, i.jsx)(s.A, { inlinePreview: n.formatInline, ...e, children: t(e.content, n) }, n.key)
            : (0, i.jsx)(
                  a.A,
                  {
                      className: "mention",
                      userId: r,
                      channelId: o,
                      viewingChannelId: u,
                      parsedUserId: l,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction,
                  },
                  n.key,
              );
    },
};
