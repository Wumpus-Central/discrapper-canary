n.d(t, {
    O: function () {
        return c;
    },
    l: function () {
        return o;
    }
});
var i = n(594174),
    r = n(63063),
    s = n(74538),
    l = n(981631),
    a = n(388032);
function o(e) {
    switch (e) {
        case l.evJ.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
                n = s.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? l.tHP : l.DZw;
            return {
                title: a.intl.formatToPlainString(a.t['ttJ/ho'], { quantity: n }),
                description: a.intl.string(a.t.iLyuDA)
            };
        case l.evJ.GUILD_AT_CAPACITY:
            return {
                title: a.intl.string(a.t.ZZlox8),
                description: a.intl.string(a.t.ZUEGFh)
            };
        case l.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
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
        case l.evJ.TOO_MANY_USER_GUILDS:
            return a.intl.string(a.t.iLyuDA);
        case l.evJ.GUILD_AT_CAPACITY:
            return a.intl.string(a.t.M6unND);
        case l.evJ.INVALID_COUNTRY_CODE:
            return a.intl.string(a.t.sRJGR0);
        case l.evJ.INVALID_CANNOT_FRIEND_SELF:
            return a.intl.string(a.t['mY2R+P']);
        case l.evJ.INVITES_DISABLED:
            return a.intl.format(a.t.RXSeLi, { articleLink: r.Z.getArticleURL(l.BhN.INVITE_DISABLED) });
        default:
            return a.intl.string(a.t.dDZRd3);
    }
}
