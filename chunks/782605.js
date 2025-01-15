n.d(t, {
    O: function () {
        return c;
    },
    l: function () {
        return s;
    }
});
var i = n(594174),
    l = n(63063),
    r = n(74538),
    o = n(981631),
    a = n(388032);
function s(e) {
    switch (e) {
        case o.evJ.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
                n = r.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? o.tHP : o.DZw;
            return {
                title: a.intl.formatToPlainString(a.t['ttJ/ho'], { quantity: n }),
                description: a.intl.string(a.t.iLyuDA)
            };
        case o.evJ.GUILD_AT_CAPACITY:
            return {
                title: a.intl.string(a.t.ZZlox8),
                description: a.intl.string(a.t.ZUEGFh)
            };
        case o.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: a.intl.string(a.t.kJwpBQ),
                description: a.intl.string(a.t.ZUEGFh)
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case o.evJ.TOO_MANY_USER_GUILDS:
            return a.intl.string(a.t.iLyuDA);
        case o.evJ.GUILD_AT_CAPACITY:
            return a.intl.string(a.t.M6unND);
        case o.evJ.INVALID_COUNTRY_CODE:
            return a.intl.string(a.t.sRJGR0);
        case o.evJ.INVALID_CANNOT_FRIEND_SELF:
            return a.intl.string(a.t['mY2R+P']);
        case o.evJ.INVITES_DISABLED:
            return a.intl.format(a.t.RXSeLi, { articleLink: l.Z.getArticleURL(o.BhN.INVITE_DISABLED) });
        default:
            return a.intl.string(a.t.dDZRd3);
    }
}
