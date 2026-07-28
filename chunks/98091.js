"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = [];
function s(e) {
    let { guildId: t, gameServer: n } = e;
    null != t || (a = -1 === a.findIndex((e) => e.id === n.id) ? [...a, n] : a.map((e) => (e.id === n.id ? n : e)));
}
class l extends i.Ay.Store {
    static displayName = "OwnedGameServersStore";
    getGameServers() {
        return a;
    }
}
let o = new l(r.h, {
    LOGOUT: function () {
        a = [];
    },
    GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function (e) {
        let { gameServers: t } = e;
        a = t;
    },
    GAME_SERVER_CREATE: s,
    GAME_SERVER_UPDATE: s,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: n } = e;
        null == t && (a = a.filter((e) => e.id !== n));
    },
});
