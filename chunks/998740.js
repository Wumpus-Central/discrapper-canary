"use strict";
let r;
n.d(t, { A: () => u });
var i = n(311907),
    s = n(73153),
    a = n(287809);
let o = {};
class l extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
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
let u = new l(s.h, {
    HAVEN_CONNECT: (e) => {
        console.log("HAVEN_CONNECT", e), (o[e.room.roomId] = e.room);
    },
    HAVEN_DISCONNECT: (e) => {
        if ((console.log("HAVEN_DISCONNECT", e), null == o[e.roomId])) return !1;
        let t = a.default.getCurrentUser();
        if (e.userId === t?.id) return void delete o[e.roomId];
        let n = { ...o[e.roomId] };
        (n.participants = n.participants.filter((t) => t.userId !== e.userId)),
            (n.seats = n.seats.map((t) => (t.claimedBy === e.userId ? { ...t, claimedBy: null } : t))),
            (o[e.roomId] = n);
    },
    HAVEN_UPDATE: (e) => {
        console.log("HAVEN_UPDATE", e), (o[e.room.roomId] = e.room);
    },
    HAVEN_GOT_ASSETS: (e) => {
        r = e.assets;
    },
});
