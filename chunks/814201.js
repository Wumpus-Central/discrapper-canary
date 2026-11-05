var s = i(855986),
    n = i(73153);
i(628049);
let r = [],
    a = 5;
function l(e, t) {
    return null != e.subscription_id || t?.subscription_id == null ? e : { ...e, subscription_id: t.subscription_id };
}
function o(e) {
    let { guildId: t, gameServer: i } = e;
    null != t ||
        (r = -1 === r.findIndex((e) => e.id === i.id) ? [...r, i] : r.map((e) => (e.id === i.id ? l(i, e) : e)));
}
class c extends s.Ay.Store {
    static displayName = "OwnedGameServersStore";
    getGameServers() {
        return r;
    }
    getMaxServers() {
        return a;
    }
}
let d = new c(n.h, {
    LOGOUT: function () {
        ((r = []), (a = 5));
    },
    GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function (e) {
        let { gameServers: t, maxServers: i } = e;
        ((r = t.map((e) =>
            l(
                e,
                r.find((t) => t.id === e.id),
            ),
        )),
            (a = i ?? 5));
    },
    GAME_SERVER_CREATE: o,
    GAME_SERVER_UPDATE: o,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: i } = e;
        null == t && (r = r.filter((e) => e.id !== i));
    },
});
i.d(t, {}, { A: d });
