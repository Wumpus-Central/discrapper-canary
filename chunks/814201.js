var s = i(855986),
    r = i(73153);
i(628049);
let n = [],
    a = 5;
function l(e, t) {
    return null != e.subscription_id || t?.subscription_id == null ? e : { ...e, subscription_id: t.subscription_id };
}
function o(e) {
    let { guildId: t, gameServer: i } = e;
    null != t ||
        (n = -1 === n.findIndex((e) => e.id === i.id) ? [...n, i] : n.map((e) => (e.id === i.id ? l(i, e) : e)));
}
class c extends s.Ay.Store {
    static displayName = "OwnedGameServersStore";
    getGameServers() {
        return n;
    }
    getMaxServers() {
        return a;
    }
}
let d = new c(r.h, {
    LOGOUT: function () {
        ((n = []), (a = 5));
    },
    GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function (e) {
        let { gameServers: t, maxServers: i } = e;
        ((n = t.map((e) =>
            l(
                e,
                n.find((t) => t.id === e.id),
            ),
        )),
            (a = i ?? 5));
    },
    GAME_SERVER_CREATE: o,
    GAME_SERVER_UPDATE: o,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: i } = e;
        null == t && (n = n.filter((e) => e.id !== i));
    },
});
i.d(t, {}, { A: d });
