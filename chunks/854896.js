a.d(t, { CK: () => i, VS: () => r, xc: () => s });
var n = a(652215),
    l = a(339984);
function r(e, t) {
    let { isGIF: a } = t;
    if (e === l.HL.GUILD_BANNER) return a ? n.GuildFeatures.ANIMATED_BANNER : n.GuildFeatures.BANNER;
}
function s(e) {
    return e === l.HL.AVATAR || e === l.HL.BANNER;
}
function i(e) {
    return e === l.HL.BANNER;
}
