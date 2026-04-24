i.d(t, { B8: () => s, Mg: () => o, pB: () => r, wQ: () => a });
var n = i(627968);
i(64700);
var l = i(442433);
function a(e, t, a) {
    a.isGroupDM()
        ? (0, l.L3)(e, async () => {
              let { default: e } = await Promise.all([
                  i.e("62731"),
                  i.e("97262"),
                  i.e("93103"),
                  i.e("88342"),
                  i.e("35313"),
                  i.e("24170"),
                  i.e("84442"),
                  i.e("24431"),
                  i.e("28864"),
                  i.e("36017"),
              ]).then(i.bind(i, 778595));
              return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a });
          })
        : a.isDM()
          ? (0, l.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("62731"),
                    i.e("97262"),
                    i.e("93103"),
                    i.e("88342"),
                    i.e("35313"),
                    i.e("24170"),
                    i.e("84442"),
                    i.e("35327"),
                    i.e("99011"),
                    i.e("24431"),
                    i.e("39778"),
                    i.e("92851"),
                ]).then(i.bind(i, 385913));
                return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a, showMute: !1, targetIsUser: !0 });
            })
          : null != a.guild_id
            ? (0, l.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      i.e("62731"),
                      i.e("97262"),
                      i.e("93103"),
                      i.e("88342"),
                      i.e("35313"),
                      i.e("24170"),
                      i.e("84442"),
                      i.e("24431"),
                      i.e("78178"),
                      i.e("92456"),
                      i.e("23491"),
                  ]).then(i.bind(i, 107632));
                  return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a, guildId: a.guild_id });
              })
            : (0, l.L3)(e, async () => {
                  let { default: e } = await Promise.all([i.e("97262"), i.e("24170"), i.e("32418"), i.e("29371")]).then(
                      i.bind(i, 668569),
                  );
                  return (i) => (0, n.jsx)(e, { ...i, user: t });
              });
}
function s(e, t) {
    let { user: a, channel: s, moderationAlertId: o, guildId: r, ...u } = t;
    if (s?.isGroupDM() || s?.isDM()) throw Error("Cannot moderate user in DM or group DM");
    let d = r ?? s?.getGuildId();
    null != d &&
        (0, l.L3)(e, async () => {
            let { default: e } = await i.e("22037").then(i.bind(i, 879732));
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
            let { default: e } = await i.e("1785").then(i.bind(i, 960064));
            return (t) => (0, n.jsx)(e, { ...t, guildId: a });
        });
}
