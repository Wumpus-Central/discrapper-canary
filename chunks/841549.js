i.d(t, { B8: () => s, Mg: () => o, pB: () => r, wQ: () => a });
var n = i(627968);
i(64700);
var l = i(442433);
function a(e, t, a) {
    a.isGroupDM()
        ? (0, l.L3)(e, async () => {
              let { default: e } = await Promise.all([
                  i.e("41927"),
                  i.e("97262"),
                  i.e("93103"),
                  i.e("92493"),
                  i.e("53635"),
                  i.e("42128"),
                  i.e("97278"),
                  i.e("35313"),
                  i.e("74372"),
                  i.e("62891"),
                  i.e("85181"),
              ]).then(i.bind(i, 228006));
              return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a });
          })
        : a.isDM()
          ? (0, l.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("41927"),
                    i.e("97262"),
                    i.e("93103"),
                    i.e("92493"),
                    i.e("53635"),
                    i.e("42128"),
                    i.e("97278"),
                    i.e("35313"),
                    i.e("95834"),
                    i.e("99011"),
                    i.e("74372"),
                    i.e("39778"),
                    i.e("27778"),
                ]).then(i.bind(i, 385913));
                return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a, showMute: !1, targetIsUser: !0 });
            })
          : null != a.guild_id
            ? (0, l.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      i.e("41927"),
                      i.e("97262"),
                      i.e("93103"),
                      i.e("92493"),
                      i.e("42128"),
                      i.e("97278"),
                      i.e("35313"),
                      i.e("74372"),
                      i.e("84841"),
                      i.e("17659"),
                  ]).then(i.bind(i, 107632));
                  return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a, guildId: a.guild_id });
              })
            : (0, l.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      i.e("97262"),
                      i.e("92493"),
                      i.e("53635"),
                      i.e("32418"),
                      i.e("72090"),
                  ]).then(i.bind(i, 668569));
                  return (i) => (0, n.jsx)(e, { ...i, user: t });
              });
}
function s(e, t) {
    let { user: a, channel: s, moderationAlertId: o, guildId: r, ...u } = t;
    if (s?.isGroupDM() || s?.isDM()) throw Error("Cannot moderate user in DM or group DM");
    let d = r ?? s?.getGuildId();
    null != d &&
        (0, l.L3)(e, async () => {
            let { default: e } = await i.e("12970").then(i.bind(i, 104849));
            return (t) => (0, n.jsx)(e, { ...t, user: a, channelId: s?.id, guildId: d, moderationAlertId: o, ...u });
        });
}
function o(e, t) {
    let { user: a, guildId: s, analyticsLocations: o, onCloseContextMenu: r, isViewOnly: u } = t;
    (0, l.L3)(e, async () => {
        let { default: e } = await i.e("83767").then(i.bind(i, 414506));
        return (t) =>
            (0, n.jsx)(e, { ...t, user: a, guildId: s, analyticsLocations: o, onCloseContextMenu: r, isViewOnly: u });
    });
}
function r(e, t, a) {
    null != a &&
        (0, l.L3)(e, async () => {
            let { default: e } = await i.e("77759").then(i.bind(i, 331458));
            return (t) => (0, n.jsx)(e, { ...t, guildId: a });
        });
}
