"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(442433),
    a = n(593284),
    s = n(288539),
    l = n(734057);
let o = {
    handleUserContextMenu(e, t, a, s) {
        let o = l.A.getChannel(t);
        null != o &&
            (0, r.L3)(s, async () => {
                let { default: t } = await Promise.all([
                    n.e("31463"),
                    n.e("41831"),
                    n.e("65264"),
                    n.e("62323"),
                    n.e("88429"),
                    n.e("94881"),
                    n.e("26692"),
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93103"),
                    n.e("93190"),
                    n.e("34552"),
                    n.e("21921"),
                    n.e("8757"),
                    n.e("76418"),
                    n.e("66495"),
                    n.e("71210"),
                    n.e("85968"),
                    n.e("89673"),
                    n.e("68403"),
                    n.e("88342"),
                    n.e("29787"),
                    n.e("89421"),
                    n.e("35027"),
                    n.e("98965"),
                    n.e("82073"),
                    n.e("97558"),
                    n.e("91994"),
                    n.e("54625"),
                    n.e("76665"),
                    n.e("28662"),
                    n.e("35313"),
                    n.e("71133"),
                    n.e("28152"),
                    n.e("39171"),
                    n.e("36564"),
                    n.e("24198"),
                    n.e("52229"),
                    n.e("45996"),
                    n.e("792"),
                    n.e("92822"),
                    n.e("61268"),
                    n.e("23427"),
                    n.e("49145"),
                    n.e("29422"),
                    n.e("9291"),
                    n.e("56753"),
                    n.e("65826"),
                    n.e("49520"),
                    n.e("14461"),
                    n.e("93014"),
                    n.e("7059"),
                    n.e("25486"),
                    n.e("22261"),
                    n.e("49644"),
                    n.e("78195"),
                    n.e("43116"),
                    n.e("39103"),
                    n.e("70314"),
                    n.e("42204"),
                    n.e("74021"),
                    n.e("70515"),
                    n.e("4524"),
                    n.e("13708"),
                    n.e("54148"),
                    n.e("66939"),
                    n.e("30221"),
                    n.e("24240"),
                    n.e("21879"),
                    n.e("17334"),
                    n.e("84841"),
                ]).then(n.bind(n, 107632));
                return (n) => (0, i.jsx)(t, { ...n, user: e, channel: o, guildId: a });
            });
    },
    react(e, t, n) {
        let { userId: r, channelId: l, parsedUserId: o, roleId: d, roleName: c, viewingChannelId: u } = e;
        return null == r && (null != d || "@everyone" === c || "@here" === c)
            ? (0, i.jsx)(a.A, { inlinePreview: n.formatInline, ...e, children: t(e.content, n) }, n.key)
            : (0, i.jsx)(
                  s.A,
                  {
                      className: "mention",
                      userId: r,
                      channelId: l,
                      viewingChannelId: u,
                      parsedUserId: o,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction,
                  },
                  n.key,
              );
    },
};
