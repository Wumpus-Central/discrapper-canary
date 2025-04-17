n.d(t, {
    O: () => c,
    l: () => s
});
var r = n(594174),
    i = n(63063),
    l = n(74538),
    a = n(981631),
    o = n(388032);
function s(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            let t = r.default.getCurrentUser(),
                n = l.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
            return {
                title: o.NW.formatToPlainString(o.t['ttJ/ho'], { quantity: n }),
                description: o.NW.string(o.t.iLyuDA)
            };
        case a.evJ.GUILD_AT_CAPACITY:
            return {
                title: o.NW.string(o.t.ZZlox8),
                description: o.NW.string(o.t.ZUEGFh)
            };
        case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: o.NW.string(o.t.kJwpBQ),
                description: o.NW.string(o.t.ZUEGFh)
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            return o.NW.string(o.t.iLyuDA);
        case a.evJ.GUILD_AT_CAPACITY:
            return o.NW.string(o.t.M6unND);
        case a.evJ.INVALID_COUNTRY_CODE:
            return o.NW.string(o.t.sRJGR0);
        case a.evJ.INVALID_CANNOT_FRIEND_SELF:
            return o.NW.string(o.t['mY2R+P']);
        case a.evJ.INVITES_DISABLED:
            return o.NW.format(o.t.RXSeLi, { articleLink: i.Z.getArticleURL(a.BhN.INVITE_DISABLED) });
        default:
            return o.NW.string(o.t.dDZRd3);
    }
}
