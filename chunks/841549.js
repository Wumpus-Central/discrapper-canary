i.d(t, { B8: () => o, Mg: () => r, pB: () => s, wQ: () => l });
var n = i(627968);
i(64700);
var a = i(442433);
function l(e, t, l) {
    l.isGroupDM()
        ? (0, a.L3)(e, async () => {
              let { default: e } = await Promise.all([
                  i.e("41927"),
                  i.e("97262"),
                  i.e("3795"),
                  i.e("42128"),
                  i.e("61474"),
                  i.e("62891"),
                  i.e("59986"),
              ]).then(i.bind(i, 228006));
              return (i) => (0, n.jsx)(e, { ...i, user: t, channel: l });
          })
        : l.isDM()
          ? (0, a.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("41927"),
                    i.e("97262"),
                    i.e("3795"),
                    i.e("42128"),
                    i.e("61474"),
                    i.e("39778"),
                    i.e("67744"),
                ]).then(i.bind(i, 385913));
                return (i) => (0, n.jsx)(e, { ...i, user: t, channel: l, showMute: !1, targetIsUser: !0 });
            })
          : null != l.guild_id
            ? (0, a.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      i.e("41927"),
                      i.e("97262"),
                      i.e("3795"),
                      i.e("42128"),
                      i.e("61474"),
                      i.e("84841"),
                      i.e("92485"),
                  ]).then(i.bind(i, 107632));
                  return (i) => (0, n.jsx)(e, { ...i, user: t, channel: l, guildId: l.guild_id });
              })
            : (0, a.L3)(e, async () => {
                  let { default: e } = await Promise.all([i.e("97262"), i.e("3795"), i.e("32418"), i.e("73417")]).then(
                      i.bind(i, 668569),
                  );
                  return (i) => (0, n.jsx)(e, { ...i, user: t });
              });
}
function o(e, t) {
    let { user: l, channel: o, moderationAlertId: r, guildId: s, ...c } = t;
    if (o?.isGroupDM() || o?.isDM()) throw Error("Cannot moderate user in DM or group DM");
    let d = s ?? o?.getGuildId();
    null != d &&
        (0, a.L3)(e, async () => {
            let { default: e } = await i.e("12970").then(i.bind(i, 104849));
            return (t) => (0, n.jsx)(e, { ...t, user: l, channelId: o?.id, guildId: d, moderationAlertId: r, ...c });
        });
}
function r(e, t) {
    let { user: l, guildId: o, analyticsLocations: r, onCloseContextMenu: s, isViewOnly: c } = t;
    (0, a.L3)(e, async () => {
        let { default: e } = await i.e("83767").then(i.bind(i, 414506));
        return (t) =>
            (0, n.jsx)(e, { ...t, user: l, guildId: o, analyticsLocations: r, onCloseContextMenu: s, isViewOnly: c });
    });
}
function s(e, t, l) {
    null != l &&
        (0, a.L3)(e, async () => {
            let { default: e } = await i.e("77759").then(i.bind(i, 331458));
            return (t) => (0, n.jsx)(e, { ...t, guildId: l });
        });
}
