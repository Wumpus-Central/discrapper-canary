"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(442433),
    s = n(593284),
    r = n(288539),
    a = n(734057);
let o = {
    handleUserContextMenu(e, t, s, r) {
        let o = a.A.getChannel(t);
        null != o &&
            (0, l.L3)(r, async () => {
                let { default: t } = await Promise.all([
                    n.e("41927"),
                    n.e("97262"),
                    n.e("92493"),
                    n.e("93103"),
                    n.e("42128"),
                    n.e("97278"),
                    n.e("35313"),
                    n.e("81653"),
                    n.e("84841"),
                    n.e("9091"),
                ]).then(n.bind(n, 107632));
                return (n) => (0, i.jsx)(t, { ...n, user: e, channel: o, guildId: s });
            });
    },
    react(e, t, n) {
        let { userId: l, channelId: a, parsedUserId: o, roleId: c, roleName: u, viewingChannelId: d } = e;
        return null == l && (null != c || "@everyone" === u || "@here" === u)
            ? (0, i.jsx)(s.A, { inlinePreview: n.formatInline, ...e, children: t(e.content, n) }, n.key)
            : (0, i.jsx)(
                  r.A,
                  {
                      className: "mention",
                      userId: l,
                      channelId: a,
                      viewingChannelId: d,
                      parsedUserId: o,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction,
                  },
                  n.key,
              );
    },
};
