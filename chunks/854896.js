a.d(t, { CK: () => i, VS: () => l, xc: () => r });
var n = a(652215),
    s = a(339984);
function l(e, t) {
    let { isGIF: a } = t;
    if (e === s.HL.GUILD_BANNER) return a ? n.GuildFeatures.ANIMATED_BANNER : n.GuildFeatures.BANNER;
}
function r(e) {
    return e === s.HL.AVATAR || e === s.HL.BANNER;
}
function i(e) {
    return e === s.HL.BANNER;
}
