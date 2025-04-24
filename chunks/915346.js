n.d(t, { W: () => o });
var i = n(493683),
    a = n(122613);
async function o(e) {
    let { appId: t, botId: n, analyticsLocations: o, customId: l, referrerId: r, commandOrigin: c } = e,
        u = await i.Z.openPrivateChannel({ recipientIds: n });
    return await (0, a.Z)({
        targetApplicationId: t,
        channelId: u,
        analyticsLocations: o,
        customId: l,
        referrerId: r,
        commandOrigin: c
    });
}
