"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(442433),
    s = n(593284),
    a = n(288539),
    o = n(734057);
let l = {
    handleUserContextMenu(e, t, s, a) {
        let l = o.A.getChannel(t);
        null != l &&
            (0, i.L3)(a, async () => {
                let { default: t } = await Promise.all([
                    n.e("41927"),
                    n.e("97262"),
                    n.e("11478"),
                    n.e("42128"),
                    n.e("97283"),
                    n.e("84841"),
                    n.e("19901"),
                ]).then(n.bind(n, 107632));
                return (n) => (0, r.jsx)(t, { ...n, user: e, channel: l, guildId: s });
            });
    },
    react(e, t, n) {
        let { userId: i, channelId: o, parsedUserId: l, roleId: u, roleName: c, viewingChannelId: d } = e;
        return null == i && (null != u || "@everyone" === c || "@here" === c)
            ? (0, r.jsx)(s.A, { inlinePreview: n.formatInline, ...e, children: t(e.content, n) }, n.key)
            : (0, r.jsx)(
                  a.A,
                  {
                      className: "mention",
                      userId: i,
                      channelId: o,
                      viewingChannelId: d,
                      parsedUserId: l,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction,
                  },
                  n.key,
              );
    },
};
