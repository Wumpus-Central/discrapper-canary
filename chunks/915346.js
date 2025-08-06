n.d(t, { W: () => o });
var r = n(493683),
    i = n(122613);
async function o(e) {
    let { appId: t, botId: n, analyticsLocations: o, customId: a, referrerId: s, commandOrigin: l } = e,
        c = await r.Z.openPrivateChannel({ recipientIds: n });
    return await (0, i.Z)({
        targetApplicationId: t,
        channelId: c,
        analyticsLocations: o,
        customId: a,
        referrerId: s,
        commandOrigin: l
    });
}
