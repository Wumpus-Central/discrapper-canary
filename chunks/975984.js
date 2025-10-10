n.d(t, {
    Lz: () => u,
    MQ: () => o,
    TR: () => p,
    Th: () => d,
    _N: () => c,
}),
    n(953529),
    n(388685);
var r = n(512722),
    i = n.n(r),
    l = n(392711),
    a = n.n(l),
    s = n(75666);
function o(e) {
    var t, n, r, l, a, o, c;
    return (
        i()(e.type === s.C2.GUILD, "Directory entries must be connected to a guild!"),
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
            approximateMemberCount: null == (a = e.guild) ? void 0 : a.approximate_member_count,
            approximatePresenceCount: null == (o = e.guild) ? void 0 : o.approximate_presence_count,
            featurableInDirectory: null == (c = e.guild) ? void 0 : c.featurable_in_directory,
        }
    );
}
let c = 5;
function d(e) {
    return a().orderBy(e, [(e) => e.approximateMemberCount], ["desc"]);
}
function u(e) {
    var t;
    return ((t = e.filter((e) => e.featurableInDirectory)), a().orderBy(t, [(e) => e.createdAt], ["desc"])).slice(0, c);
}
function p(e) {
    return d(e);
}
