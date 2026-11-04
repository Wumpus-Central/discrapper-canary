var i = n(136722),
    r = n(34457),
    a = n(652215);
function s(e, t) {
    return null != t && (!!i.zy(t.deny, a.xBc.VIEW_CHANNEL) || (e.isGuildVocal() && i.zy(t.deny, a.xBc.CONNECT)));
}
n.d(
    t,
    {},
    {
        AN: s,
        Uj: function (e, t) {
            return (
                !(null == t || s(e, t)) &&
                !!i.zy(t.allow, a.xBc.VIEW_CHANNEL) &&
                (!e.isGuildVocal() || i.zy(t.allow, a.xBc.CONNECT))
            );
        },
        iR: function (e) {
            return (0, r._m)(e, a.xBc.VIEW_CHANNEL);
        },
    },
);
