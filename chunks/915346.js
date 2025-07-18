n.d(t, { W: () => a });
var r = n(493683),
    i = n(122613);
async function a(e) {
    let { appId: t, botId: n, analyticsLocations: a, customId: o, referrerId: s, commandOrigin: l } = e,
        c = await r.Z.openPrivateChannel({ recipientIds: n });
    return await (0, i.Z)({
        targetApplicationId: t,
        channelId: c,
        analyticsLocations: a,
        customId: o,
        referrerId: s,
        commandOrigin: l
    });
}
