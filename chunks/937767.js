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
                    n.e("20706"),
                    n.e("8516"),
                    n.e("11377"),
                    n.e("23531"),
                    n.e("94881"),
                    n.e("26692"),
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("34552"),
                    n.e("93103"),
                    n.e("8757"),
                    n.e("89673"),
                    n.e("85968"),
                    n.e("60195"),
                    n.e("21921"),
                    n.e("68403"),
                    n.e("76418"),
                    n.e("29787"),
                    n.e("71210"),
                    n.e("97558"),
                    n.e("94000"),
                    n.e("66495"),
                    n.e("88342"),
                    n.e("91994"),
                    n.e("82263"),
                    n.e("42451"),
                    n.e("76665"),
                    n.e("98965"),
                    n.e("35027"),
                    n.e("35313"),
                    n.e("54975"),
                    n.e("24198"),
                    n.e("71133"),
                    n.e("54625"),
                    n.e("39171"),
                    n.e("36564"),
                    n.e("45996"),
                    n.e("52229"),
                    n.e("792"),
                    n.e("92822"),
                    n.e("56753"),
                    n.e("23427"),
                    n.e("49145"),
                    n.e("29422"),
                    n.e("25486"),
                    n.e("61268"),
                    n.e("9291"),
                    n.e("14461"),
                    n.e("7059"),
                    n.e("49644"),
                    n.e("28152"),
                    n.e("42204"),
                    n.e("43116"),
                    n.e("65826"),
                    n.e("49520"),
                    n.e("78195"),
                    n.e("11617"),
                    n.e("70314"),
                    n.e("22261"),
                    n.e("70515"),
                    n.e("27435"),
                    n.e("74021"),
                    n.e("13708"),
                    n.e("66939"),
                    n.e("30221"),
                    n.e("24240"),
                    n.e("21879"),
                    n.e("17334"),
                    n.e("84841"),
                ]).then(n.bind(n, 107632));
                return (n) => (0, i.jsx)(t, { ...n, user: e, channel: l, guildId: s });
            });
    },
    react(e, t, n) {
        let { userId: r, channelId: o, parsedUserId: l, roleId: u, roleName: c, viewingChannelId: d } = e;
        return null == r && (null != u || "@everyone" === c || "@here" === c)
            ? (0, i.jsx)(s.A, { inlinePreview: n.formatInline, ...e, children: t(e.content, n) }, n.key)
            : (0, i.jsx)(
                  a.A,
                  {
                      className: "mention",
                      userId: r,
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
