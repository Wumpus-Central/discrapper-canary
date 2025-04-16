n.d(t, { W: () => l });
var i = n(493683),
    r = n(122613);
async function l(e) {
    let { appId: t, botId: n, analyticsLocations: l, customId: o, referrerId: a, commandOrigin: c } = e,
        u = await i.Z.openPrivateChannel({ recipientIds: n });
    return await (0, r.Z)({
        targetApplicationId: t,
        channelId: u,
        analyticsLocations: l,
        customId: o,
        referrerId: a,
        commandOrigin: c
    });
}
