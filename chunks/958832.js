n.d(t, { Z: () => s });
var r = n(442837),
    i = n(570140);
let l = {};
class a extends r.ZP.Store {
    hasFetched(e) {
        return null != l[e];
    }
    getTopChannelIds(e) {
        return '874345844743213126' === e ? ['1041887225819955252', '985996080107892776', '1035280727610241166'] : l[e];
    }
}
let s = new a(i.Z, {
    GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topChannelIds: n } = e;
        l[t] = n;
    }
});
