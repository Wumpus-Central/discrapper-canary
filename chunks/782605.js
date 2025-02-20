n.d(t, {
    O: () => c,
    l: () => s
});
var r = n(594174),
    o = n(63063),
    i = n(74538),
    l = n(981631),
    a = n(388032);
function s(e) {
    switch (e) {
        case l.evJ.TOO_MANY_USER_GUILDS:
            let t = r.default.getCurrentUser(),
                n = i.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? l.tHP : l.DZw;
            return {
                title: a.NW.formatToPlainString(a.t['ttJ/ho'], { quantity: n }),
                description: a.NW.string(a.t.iLyuDA)
            };
        case l.evJ.GUILD_AT_CAPACITY:
            return {
                title: a.NW.string(a.t.ZZlox8),
                description: a.NW.string(a.t.ZUEGFh)
            };
        case l.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: a.NW.string(a.t.kJwpBQ),
                description: a.NW.string(a.t.ZUEGFh)
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case l.evJ.TOO_MANY_USER_GUILDS:
            return a.NW.string(a.t.iLyuDA);
        case l.evJ.GUILD_AT_CAPACITY:
            return a.NW.string(a.t.M6unND);
        case l.evJ.INVALID_COUNTRY_CODE:
            return a.NW.string(a.t.sRJGR0);
        case l.evJ.INVALID_CANNOT_FRIEND_SELF:
            return a.NW.string(a.t['mY2R+P']);
        case l.evJ.INVITES_DISABLED:
            return a.NW.format(a.t.RXSeLi, { articleLink: o.Z.getArticleURL(l.BhN.INVITE_DISABLED) });
        default:
            return a.NW.string(a.t.dDZRd3);
    }
}
