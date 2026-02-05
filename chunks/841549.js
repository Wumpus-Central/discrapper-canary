i.d(t, { B8: () => r, Mg: () => o, pB: () => s, wQ: () => a });
var n = i(627968);
i(64700);
var l = i(442433);
function a(e, t, a) {
    a.isGroupDM()
        ? (0, l.L3)(e, async () => {
              let { default: e } = await Promise.all([
                  i.e("41927"),
                  i.e("97262"),
                  i.e("3795"),
                  i.e("42128"),
                  i.e("97283"),
                  i.e("97735"),
              ]).then(i.bind(i, 228006));
              return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a });
          })
        : a.isDM()
          ? (0, l.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("41927"),
                    i.e("97262"),
                    i.e("3795"),
                    i.e("99011"),
                    i.e("42128"),
                    i.e("97283"),
                    i.e("55150"),
                    i.e("39778"),
                    i.e("78229"),
                ]).then(i.bind(i, 385913));
                return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a, showMute: !1, targetIsUser: !0 });
            })
          : null != a.guild_id
            ? (0, l.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      i.e("41927"),
                      i.e("97262"),
                      i.e("3795"),
                      i.e("42128"),
                      i.e("97283"),
                      i.e("82892"),
                      i.e("84841"),
                      i.e("48354"),
                  ]).then(i.bind(i, 107632));
                  return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a, guildId: a.guild_id });
              })
            : (0, l.L3)(e, async () => {
                  let { default: e } = await Promise.all([i.e("97262"), i.e("3795"), i.e("32418"), i.e("57600")]).then(
                      i.bind(i, 668569),
                  );
                  return (i) => (0, n.jsx)(e, { ...i, user: t });
              });
}
function r(e, t) {
    let { user: a, channel: r, moderationAlertId: o, guildId: s, ...u } = t;
    if (r?.isGroupDM() || r?.isDM()) throw Error("Cannot moderate user in DM or group DM");
    let d = s ?? r?.getGuildId();
    null != d &&
        (0, l.L3)(e, async () => {
            let { default: e } = await i.e("12970").then(i.bind(i, 104849));
            return (t) => (0, n.jsx)(e, { ...t, user: a, channelId: r?.id, guildId: d, moderationAlertId: o, ...u });
        });
}
function o(e, t) {
    let { user: a, guildId: r, analyticsLocations: o, onCloseContextMenu: s, isViewOnly: u } = t;
    (0, l.L3)(e, async () => {
        let { default: e } = await i.e("83767").then(i.bind(i, 414506));
        return (t) =>
            (0, n.jsx)(e, { ...t, user: a, guildId: r, analyticsLocations: o, onCloseContextMenu: s, isViewOnly: u });
    });
}
function s(e, t, a) {
    null != a &&
        (0, l.L3)(e, async () => {
            let { default: e } = await i.e("77759").then(i.bind(i, 331458));
            return (t) => (0, n.jsx)(e, { ...t, guildId: a });
        });
}
