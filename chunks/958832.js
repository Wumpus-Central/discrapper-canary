var i = n(442837),
    r = n(570140);
let l = {};
class s extends i.ZP.Store {
    hasFetched(e) {
        return null != l[e];
    }
    getTopChannelIds(e) {
        return '874345844743213126' === e ? ['1041887225819955252', '985996080107892776', '1035280727610241166'] : l[e];
    }
}
t.Z = new s(r.Z, {
    GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topChannelIds: n } = e;
        l[t] = n;
    }
});
