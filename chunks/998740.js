"use strict";
let r;
n.d(t, { A: () => f });
var i = n(311907),
    a = n(73153),
    s = n(287809);
let o = {},
    l = (e) => {
        console.log("HAVEN_CONNECT", e), (o[e.room.roomId] = e.room);
    },
    u = (e) => {
        if ((console.log("HAVEN_DISCONNECT", e), null == o[e.roomId])) return !1;
        let t = s.default.getCurrentUser();
        if (e.userId === t?.id) return void delete o[e.roomId];
        let n = { ...o[e.roomId] };
        (n.participants = n.participants.filter((t) => t.userId !== e.userId)),
            (n.seats = n.seats.map((t) => (t.claimedBy === e.userId ? { ...t, claimedBy: null } : t))),
            (o[e.roomId] = n);
    },
    c = (e) => {
        console.log("HAVEN_UPDATE", e), (o[e.room.roomId] = e.room);
    },
    d = (e) => {
        r = e.assets;
    };
class _ extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "HavenStore";
    get state() {
        return o;
    }
    getRoom(e) {
        return o[e];
    }
    isUserConnected(e) {
        return null != o[e];
    }
    get assets() {
        return r;
    }
    getSongs(e) {
        return r?.genres[e]?.songs;
    }
}
let f = new _(a.h, { HAVEN_CONNECT: l, HAVEN_DISCONNECT: u, HAVEN_UPDATE: c, HAVEN_GOT_ASSETS: d });
