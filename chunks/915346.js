n.d(t, { W: () => r });
var i = n(493683),
    l = n(122613);
async function r(e) {
    let { appId: t, botId: n, analyticsLocations: r, customId: o, referrerId: a, commandOrigin: c } = e,
        u = await i.Z.openPrivateChannel({ recipientIds: n });
    return await (0, l.Z)({
        targetApplicationId: t,
        channelId: u,
        analyticsLocations: r,
        customId: o,
        referrerId: a,
        commandOrigin: c
    });
}
