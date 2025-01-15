t.d(n, {
    Pv: function () {
        return a;
    },
    _j: function () {
        return l;
    },
    nm: function () {
        return i;
    },
    xS: function () {
        return c;
    }
}),
    t(411104);
var r = t(200651);
t(192379);
var o = t(239091);
function a(e, n, a) {
    a.isGroupDM()
        ? (0, o.jW)(e, async () => {
              let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('51269'), t.e('13351'), t.e('33862'), t.e('92453'), t.e('91674')]).then(t.bind(t, 354589));
              return (t) =>
                  (0, r.jsx)(e, {
                      ...t,
                      user: n,
                      channel: a
                  });
          })
        : a.isDM()
          ? (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('51269'), t.e('90508'), t.e('13351'), t.e('33862'), t.e('70205'), t.e('92453'), t.e('56826'), t.e('25913')]).then(t.bind(t, 131404));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        user: n,
                        channel: a,
                        showMute: !1,
                        targetIsUser: !0
                    });
            })
          : null != a.guild_id
            ? (0, o.jW)(e, async () => {
                  let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('51269'), t.e('13351'), t.e('33862'), t.e('92453'), t.e('13125'), t.e('84006')]).then(t.bind(t, 757387));
                  return (t) =>
                      (0, r.jsx)(e, {
                          ...t,
                          user: n,
                          channel: a,
                          guildId: a.guild_id
                      });
              })
            : (0, o.jW)(e, async () => {
                  let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('76747')]).then(t.bind(t, 881351));
                  return (t) =>
                      (0, r.jsx)(e, {
                          ...t,
                          user: n
                      });
              });
}
function l(e, n) {
    let { user: a, channel: l, moderationAlertId: i, guildId: c, ...u } = n;
    if ((null == l ? void 0 : l.isGroupDM()) || (null == l ? void 0 : l.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let d = null != c ? c : null == l ? void 0 : l.getGuildId();
    null != d &&
        (0, o.jW)(e, async () => {
            let { default: e } = await Promise.all([t.e('13125'), t.e('12837')]).then(t.bind(t, 833737));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    user: a,
                    channelId: null == l ? void 0 : l.id,
                    guildId: d,
                    moderationAlertId: i,
                    ...u
                });
        });
}
function i(e, n) {
    let { user: a, guildId: l, analyticsLocations: i, onCloseContextMenu: c, isViewOnly: u } = n;
    (0, o.jW)(e, async () => {
        let { default: e } = await t.e('45130').then(t.bind(t, 246389));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                user: a,
                guildId: l,
                analyticsLocations: i,
                onCloseContextMenu: c,
                isViewOnly: u
            });
    });
}
function c(e, n, a) {
    null != a &&
        (0, o.jW)(e, async () => {
            let { default: e } = await t.e('50331').then(t.bind(t, 158195));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    guildId: a
                });
        });
}
