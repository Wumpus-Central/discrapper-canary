i.d(t, { A: () => u });
var s = i(17928),
    n = i(228366),
    r = i(628049);
let a = [],
    l = r.qL;
function o(e, t) {
    return null != e.subscription_id || t?.subscription_id == null ? e : { ...e, subscription_id: t.subscription_id };
}
function c(e) {
    let { guildId: t, gameServer: i } = e;
    null != t ||
        (a = -1 === a.findIndex((e) => e.id === i.id) ? [...a, i] : a.map((e) => (e.id === i.id ? o(i, e) : e)));
}
class d extends s.Ay.Store {
    static displayName = "OwnedGameServersStore";
    getGameServers() {
        return a;
    }
    getMaxServers() {
        return l;
    }
}
let u = new d(n.h, {
    LOGOUT: function () {
        (a = []), (l = r.qL);
    },
    GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function (e) {
        let { gameServers: t, maxServers: i } = e;
        (a = t.map((e) =>
            o(
                e,
                a.find((t) => t.id === e.id),
            ),
        )),
            (l = i ?? r.qL);
    },
    GAME_SERVER_CREATE: c,
    GAME_SERVER_UPDATE: c,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: i } = e;
        null == t && (a = a.filter((e) => e.id !== i));
    },
});
