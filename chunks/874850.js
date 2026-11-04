var i = n(260509),
    r = n(71393),
    a = n(287809);
function s(e) {
    return null != e && (e.isNSFW() || (0, i.wh)(r.A.getGuild(e.guild_id)));
}
function l() {
    return a.default.getCurrentUser()?.nsfwAllowed === !0;
}
n.d(
    t,
    {},
    {
        $v: function (e) {
            return null != e && s(e) && !l();
        },
        EV: l,
        G3: function (e, t) {
            return (
                !!(null == e || (t?.userCanSeeNSFW ?? l())) ||
                (!0 !== e.nsfw && !(t?.guildIsNSFW ?? (0, i.wh)(r.A.getGuild(e.guild_id))))
            );
        },
        Gc: s,
    },
);
