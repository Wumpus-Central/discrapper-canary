n.d(t, {
    Lz: () => u,
    MQ: () => o,
    TR: () => h,
    Th: () => d,
    _N: () => c
}),
    n(47120);
var i = n(512722),
    l = n.n(i),
    a = n(392711),
    r = n.n(a),
    s = n(75666);
function o(e) {
    var t, n, i, a, r, o, c;
    return (
        l()(e.type === s.C2.GUILD, 'Directory entries must be connected to a guild!'),
        {
            channelId: e.directory_channel_id,
            guildId: e.entity_id,
            type: e.type,
            authorId: e.author_id,
            createdAt: e.created_at,
            description: e.description,
            primaryCategoryId: e.primary_category_id,
            name: null === (t = e.guild) || void 0 === t ? void 0 : t.name,
            icon: null === (n = e.guild) || void 0 === n ? void 0 : n.icon,
            splash: null === (i = e.guild) || void 0 === i ? void 0 : i.splash,
            features: new Set(null === (a = e.guild) || void 0 === a ? void 0 : a.features),
            approximateMemberCount: null === (r = e.guild) || void 0 === r ? void 0 : r.approximate_member_count,
            approximatePresenceCount: null === (o = e.guild) || void 0 === o ? void 0 : o.approximate_presence_count,
            featurableInDirectory: null === (c = e.guild) || void 0 === c ? void 0 : c.featurable_in_directory
        }
    );
}
let c = 5;
function d(e) {
    return r().orderBy(e, [(e) => e.approximateMemberCount], ['desc']);
}
function u(e) {
    var t;
    return ((t = e.filter((e) => e.featurableInDirectory)), r().orderBy(t, [(e) => e.createdAt], ['desc'])).slice(0, c);
}
function h(e) {
    return d(e);
}
