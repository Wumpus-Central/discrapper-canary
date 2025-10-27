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
                title: s.intl.formatToPlainString(s.t["ttJ/hj"], { quantity: n }),
                description: s.intl.string(s.t.iLyuDO),
            };
        case o.evJ.GUILD_AT_CAPACITY:
            return {
                title: s.intl.string(s.t.ZZlox4),
                description: s.intl.string(s.t.ZUEGFn),
            };
        case o.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: s.intl.string(s.t.kJwpBW),
                description: s.intl.string(s.t.ZUEGFn),
            };
        case o.evJ.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
            return {
                title: s.intl.string(s.t["u/xsK9"]),
                description: s.intl.string(s.t.SxY4IW),
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case o.evJ.TOO_MANY_USER_GUILDS:
            return s.intl.string(s.t.iLyuDO);
        case o.evJ.GUILD_AT_CAPACITY:
            return s.intl.string(s.t.M6unNJ);
        case o.evJ.INVALID_COUNTRY_CODE:
            return s.intl.string(s.t.sRJGR1);
        case o.evJ.INVALID_CANNOT_FRIEND_SELF:
            return s.intl.string(s.t["mY2R+F"]);
        case o.evJ.INVITES_DISABLED:
            return s.intl.format(s.t.RXSeLl, { articleLink: i.Z.getArticleURL(o.BhN.INVITE_DISABLED) });
        default:
            return s.intl.string(s.t.dDZRdy);
    }
}
