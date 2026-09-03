i.d(t, { A: () => u });
var s = i(17928),
    n = i(228366),
    r = i(628049);
let l = [],
    a = r.qL;
function o(e, t) {
    return null != e.subscription_id || t?.subscription_id == null ? e : { ...e, subscription_id: t.subscription_id };
}
function c(e) {
    let { guildId: t, gameServer: i } = e;
    null != t ||
        (l = -1 === l.findIndex((e) => e.id === i.id) ? [...l, i] : l.map((e) => (e.id === i.id ? o(i, e) : e)));
}
class d extends s.Ay.Store {
    static displayName = "OwnedGameServersStore";
    getGameServers() {
        return l;
    }
    getMaxServers() {
        return a;
    }
}
let u = new d(n.h, {
    LOGOUT: function () {
        (l = []), (a = r.qL);
    },
    GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function (e) {
        let { gameServers: t, maxServers: i } = e;
        (l = t.map((e) =>
            o(
                e,
                l.find((t) => t.id === e.id),
            ),
        )),
            (a = i ?? r.qL);
    },
    GAME_SERVER_CREATE: c,
    GAME_SERVER_UPDATE: c,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: i } = e;
        null == t && (l = l.filter((e) => e.id !== i));
    },
});
