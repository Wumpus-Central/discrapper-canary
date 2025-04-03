n.d(t, {
    Lz: () => d,
    MQ: () => s,
    TR: () => p,
    Th: () => u,
    _N: () => c
}),
    n(266796),
    n(47120);
var r = n(512722),
    i = n.n(r),
    l = n(392711),
    o = n.n(l),
    a = n(75666);
function s(e) {
    var t, n, r, l, o, s, c;
    return (
        i()(e.type === a.C2.GUILD, 'Directory entries must be connected to a guild!'),
        {
            channelId: e.directory_channel_id,
            guildId: e.entity_id,
            type: e.type,
            authorId: e.author_id,
            createdAt: e.created_at,
            description: e.description,
            primaryCategoryId: e.primary_category_id,
            name: null == (t = e.guild) ? void 0 : t.name,
            icon: null == (n = e.guild) ? void 0 : n.icon,
            splash: null == (r = e.guild) ? void 0 : r.splash,
            features: new Set(null == (l = e.guild) ? void 0 : l.features),
            approximateMemberCount: null == (o = e.guild) ? void 0 : o.approximate_member_count,
            approximatePresenceCount: null == (s = e.guild) ? void 0 : s.approximate_presence_count,
            featurableInDirectory: null == (c = e.guild) ? void 0 : c.featurable_in_directory
        }
    );
}
let c = 5;
function u(e) {
    return o().orderBy(e, [(e) => e.approximateMemberCount], ['desc']);
}
function d(e) {
    var t;
    return ((t = e.filter((e) => e.featurableInDirectory)), o().orderBy(t, [(e) => e.createdAt], ['desc'])).slice(0, c);
}
function p(e) {
    return u(e);
}
