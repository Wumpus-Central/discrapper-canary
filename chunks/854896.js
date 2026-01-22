r.d(t, {
    CK: () => s,
    VS: () => a,
    xc: () => i,
});
var n = r(652215),
    l = r(339984);

function a(e, t) {
    let { isGIF: r } = t;
    if (e === l.HL.GUILD_BANNER) return r ? n.GuildFeatures.ANIMATED_BANNER : n.GuildFeatures.BANNER;
}

function i(e) {
    return e === l.HL.AVATAR || e === l.HL.BANNER;
}

function s(e) {
    return e === l.HL.BANNER;
}
