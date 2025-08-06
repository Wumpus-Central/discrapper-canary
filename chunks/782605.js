n.d(t, {
    O: () => c,
    l: () => l,
});
var r = n(594174),
    i = n(63063),
    o = n(74538),
    a = n(981631),
    s = n(388032);
function l(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            let t = r.default.getCurrentUser(),
                n = o.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
            return {
                title: s.intl.formatToPlainString(s.t["ttJ/ho"], { quantity: n }),
                description: s.intl.string(s.t.iLyuDA),
            };
        case a.evJ.GUILD_AT_CAPACITY:
            return {
                title: s.intl.string(s.t.ZZlox8),
                description: s.intl.string(s.t.ZUEGFh),
            };
        case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: s.intl.string(s.t.kJwpBQ),
                description: s.intl.string(s.t.ZUEGFh),
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            return s.intl.string(s.t.iLyuDA);
        case a.evJ.GUILD_AT_CAPACITY:
            return s.intl.string(s.t.M6unND);
        case a.evJ.INVALID_COUNTRY_CODE:
            return s.intl.string(s.t.sRJGR0);
        case a.evJ.INVALID_CANNOT_FRIEND_SELF:
            return s.intl.string(s.t["mY2R+P"]);
        case a.evJ.INVITES_DISABLED:
            return s.intl.format(s.t.RXSeLi, { articleLink: i.Z.getArticleURL(a.BhN.INVITE_DISABLED) });
        default:
            return s.intl.string(s.t.dDZRd3);
    }
}
