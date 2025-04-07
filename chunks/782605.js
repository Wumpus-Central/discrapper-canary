n.d(t, {
    O: () => c,
    l: () => s
});
var r = n(594174),
    i = n(63063),
    a = n(74538),
    l = n(981631),
    o = n(388032);
function s(e) {
    switch (e) {
        case l.evJ.TOO_MANY_USER_GUILDS:
            let t = r.default.getCurrentUser(),
                n = a.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? l.tHP : l.DZw;
            return {
                title: o.NW.formatToPlainString(o.t['ttJ/ho'], { quantity: n }),
                description: o.NW.string(o.t.iLyuDA)
            };
        case l.evJ.GUILD_AT_CAPACITY:
            return {
                title: o.NW.string(o.t.ZZlox8),
                description: o.NW.string(o.t.ZUEGFh)
            };
        case l.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
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
        case l.evJ.TOO_MANY_USER_GUILDS:
            return o.NW.string(o.t.iLyuDA);
        case l.evJ.GUILD_AT_CAPACITY:
            return o.NW.string(o.t.M6unND);
        case l.evJ.INVALID_COUNTRY_CODE:
            return o.NW.string(o.t.sRJGR0);
        case l.evJ.INVALID_CANNOT_FRIEND_SELF:
            return o.NW.string(o.t['mY2R+P']);
        case l.evJ.INVITES_DISABLED:
            return o.NW.format(o.t.RXSeLi, { articleLink: i.Z.getArticleURL(l.BhN.INVITE_DISABLED) });
        default:
            return o.NW.string(o.t.dDZRd3);
    }
}
