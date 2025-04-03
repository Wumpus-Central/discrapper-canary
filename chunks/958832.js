n.d(t, { Z: () => l });
var r = n(442837),
    i = n(570140);
let s = {};
class a extends r.ZP.Store {
    hasFetched(e) {
        return null != s[e];
    }
    getTopChannelIds(e) {
        return '874345844743213126' === e ? ['1041887225819955252', '985996080107892776', '1035280727610241166'] : s[e];
    }
}
let l = new a(i.Z, {
    GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topChannelIds: n } = e;
        s[t] = n;
    }
});
