"use strict";
n.d(t, { A: () => o });
var l = n(477900);
n(582128);
var i = n(442433),
    s = n(593284),
    r = n(288539),
    a = n(734057);
let o = {
    handleUserContextMenu(e, t, s, r) {
        let o = a.A.getChannel(t);
        null != o &&
            (0, i.L3)(r, async () => {
                let { default: t } = await Promise.all([
                    n.e("59766"),
                    n.e("207322"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("866038"),
                    n.e("326692"),
                    n.e("926132"),
                    n.e("146652"),
                    n.e("834552"),
                    n.e("708757"),
                    n.e("993103"),
                    n.e("585968"),
                    n.e("893190"),
                    n.e("21921"),
                    n.e("571210"),
                    n.e("676418"),
                    n.e("166495"),
                    n.e("88342"),
                    n.e("189673"),
                    n.e("311802"),
                    n.e("229787"),
                    n.e("698965"),
                    n.e("934771"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("691994"),
                    n.e("682337"),
                    n.e("235313"),
                    n.e("371133"),
                    n.e("576665"),
                    n.e("454625"),
                    n.e("538887"),
                    n.e("436564"),
                    n.e("939171"),
                    n.e("624198"),
                    n.e("252229"),
                    n.e("856753"),
                    n.e("245996"),
                    n.e("700792"),
                    n.e("592822"),
                    n.e("823427"),
                    n.e("449145"),
                    n.e("214461"),
                    n.e("529422"),
                    n.e("309291"),
                    n.e("349644"),
                    n.e("365826"),
                    n.e("649520"),
                    n.e("493014"),
                    n.e("825486"),
                    n.e("307059"),
                    n.e("242204"),
                    n.e("678195"),
                    n.e("522261"),
                    n.e("343116"),
                    n.e("713708"),
                    n.e("139103"),
                    n.e("470314"),
                    n.e("774021"),
                    n.e("70515"),
                    n.e("404524"),
                    n.e("654148"),
                    n.e("666939"),
                    n.e("830221"),
                    n.e("324240"),
                    n.e("221879"),
                    n.e("717334"),
                    n.e("184841"),
                ]).then(n.bind(n, 107632));
                return (n) => (0, l.jsx)(t, { ...n, user: e, channel: o, guildId: s });
            });
    },
    react(e, t, n) {
        let { userId: i, channelId: a, parsedUserId: o, roleId: u, roleName: c, viewingChannelId: d } = e;
        return null == i && (null != u || "@everyone" === c || "@here" === c)
            ? (0, l.jsx)(s.A, { inlinePreview: n.formatInline, ...e, children: t(e.content, n) }, n.key)
            : (0, l.jsx)(
                  r.A,
                  {
                      className: "mention",
                      userId: i,
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
