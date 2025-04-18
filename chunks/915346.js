n.d(t, { W: () => a });
var i = n(493683),
    r = n(122613);
async function a(e) {
    let { appId: t, botId: n, analyticsLocations: a, customId: l, referrerId: o, commandOrigin: c } = e,
        u = await i.Z.openPrivateChannel({ recipientIds: n });
    return await (0, r.Z)({
        targetApplicationId: t,
        channelId: u,
        analyticsLocations: a,
        customId: l,
        referrerId: o,
        commandOrigin: c
    });
}
