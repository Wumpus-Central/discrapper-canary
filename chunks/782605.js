n.d(t, {
    O: () => c,
    l: () => o
});
var i = n(594174),
    l = n(63063),
    a = n(74538),
    r = n(981631),
    s = n(388032);
function o(e) {
    switch (e) {
        case r.evJ.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
                n = a.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? r.tHP : r.DZw;
            return {
                title: s.intl.formatToPlainString(s.t['ttJ/ho'], { quantity: n }),
                description: s.intl.string(s.t.iLyuDA)
            };
        case r.evJ.GUILD_AT_CAPACITY:
            return {
                title: s.intl.string(s.t.ZZlox8),
                description: s.intl.string(s.t.ZUEGFh)
            };
        case r.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: s.intl.string(s.t.kJwpBQ),
                description: s.intl.string(s.t.ZUEGFh)
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case r.evJ.TOO_MANY_USER_GUILDS:
            return s.intl.string(s.t.iLyuDA);
        case r.evJ.GUILD_AT_CAPACITY:
            return s.intl.string(s.t.M6unND);
        case r.evJ.INVALID_COUNTRY_CODE:
            return s.intl.string(s.t.sRJGR0);
        case r.evJ.INVALID_CANNOT_FRIEND_SELF:
            return s.intl.string(s.t['mY2R+P']);
        case r.evJ.INVITES_DISABLED:
            return s.intl.format(s.t.RXSeLi, { articleLink: l.Z.getArticleURL(r.BhN.INVITE_DISABLED) });
        default:
            return s.intl.string(s.t.dDZRd3);
    }
}
