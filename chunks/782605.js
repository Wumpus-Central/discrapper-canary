n.d(t, {
    O: function () {
        return c;
    },
    l: function () {
        return s;
    }
});
var i = n(594174),
    r = n(63063),
    l = n(74538),
    a = n(981631),
    o = n(388032);
function s(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
                n = l.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
            return {
                title: o.intl.formatToPlainString(o.t['ttJ/ho'], { quantity: n }),
                description: o.intl.string(o.t.iLyuDA)
            };
        case a.evJ.GUILD_AT_CAPACITY:
            return {
                title: o.intl.string(o.t.ZZlox8),
                description: o.intl.string(o.t.ZUEGFh)
            };
        case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: o.intl.string(o.t.kJwpBQ),
                description: o.intl.string(o.t.ZUEGFh)
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            return o.intl.string(o.t.iLyuDA);
        case a.evJ.GUILD_AT_CAPACITY:
            return o.intl.string(o.t.M6unND);
        case a.evJ.INVALID_COUNTRY_CODE:
            return o.intl.string(o.t.sRJGR0);
        case a.evJ.INVALID_CANNOT_FRIEND_SELF:
            return o.intl.string(o.t['mY2R+P']);
        case a.evJ.INVITES_DISABLED:
            return o.intl.format(o.t.RXSeLi, { articleLink: r.Z.getArticleURL(a.BhN.INVITE_DISABLED) });
        default:
            return o.intl.string(o.t.dDZRd3);
    }
}
