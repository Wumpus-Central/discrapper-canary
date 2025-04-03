n.d(t, { W: () => o });
var i = n(493683),
    r = n(122613);
async function o(e) {
    let { appId: t, botId: n, analyticsLocations: o, customId: l, referrerId: c, commandOrigin: a } = e,
        u = await i.Z.openPrivateChannel(n);
    return await (0, r.Z)({
        targetApplicationId: t,
        channelId: u,
        analyticsLocations: o,
        customId: l,
        referrerId: c,
        commandOrigin: a
    });
}
