n.d(t, {
    O: () => c,
    l: () => l,
});
var r = n(594174),
    i = n(63063),
    a = n(74538),
    o = n(981631),
    s = n(388032);
function l(e) {
    switch (e) {
        case o.evJ.TOO_MANY_USER_GUILDS:
            let t = r.default.getCurrentUser(),
                n = a.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? o.tHP : o.DZw;
            return {
                title: s.intl.formatToPlainString(s.t["ttJ/ho"], { quantity: n }),
                description: s.intl.string(s.t.iLyuDA),
            };
        case o.evJ.GUILD_AT_CAPACITY:
            return {
                title: s.intl.string(s.t.ZZlox8),
                description: s.intl.string(s.t.ZUEGFh),
            };
        case o.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: s.intl.string(s.t.kJwpBQ),
                description: s.intl.string(s.t.ZUEGFh),
            };
        case o.evJ.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
            return {
                title: s.intl.string(s.t["u/xsKy"]),
                description: s.intl.string(s.t.SxY4IS),
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case o.evJ.TOO_MANY_USER_GUILDS:
            return s.intl.string(s.t.iLyuDA);
        case o.evJ.GUILD_AT_CAPACITY:
            return s.intl.string(s.t.M6unND);
        case o.evJ.INVALID_COUNTRY_CODE:
            return s.intl.string(s.t.sRJGR0);
        case o.evJ.INVALID_CANNOT_FRIEND_SELF:
            return s.intl.string(s.t["mY2R+P"]);
        case o.evJ.INVITES_DISABLED:
            return s.intl.format(s.t.RXSeLi, { articleLink: i.Z.getArticleURL(o.BhN.INVITE_DISABLED) });
        default:
            return s.intl.string(s.t.dDZRd3);
    }
}
