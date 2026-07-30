"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(628049);
let s = [],
    l = a.qL;
function o(e, t) {
    return null != e.subscription_id || t?.subscription_id == null ? e : { ...e, subscription_id: t.subscription_id };
}
function d(e) {
    let { guildId: t, gameServer: n } = e;
    null != t ||
        (s = -1 === s.findIndex((e) => e.id === n.id) ? [...s, n] : s.map((e) => (e.id === n.id ? o(n, e) : e)));
}
class c extends i.Ay.Store {
    static displayName = "OwnedGameServersStore";
    getGameServers() {
        return s;
    }
    getMaxServers() {
        return l;
    }
}
let u = new c(r.h, {
    LOGOUT: function () {
        (s = []), (l = a.qL);
    },
    GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function (e) {
        let { gameServers: t, maxServers: n } = e;
        (s = t.map((e) =>
            o(
                e,
                s.find((t) => t.id === e.id),
            ),
        )),
            (l = n ?? a.qL);
    },
    GAME_SERVER_CREATE: d,
    GAME_SERVER_UPDATE: d,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: n } = e;
        null == t && (s = s.filter((e) => e.id !== n));
    },
});
