let i;
n.d(t, { Z: () => p });
var r,
    l = n(442837),
    a = n(570140),
    o = n(594174);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let u = {};
class d extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(o.default);
    }
    get state() {
        return u;
    }
    getRoom(e) {
        return u[e];
    }
    isUserConnected(e) {
        return null != u[e];
    }
    get assets() {
        return i;
    }
}
s(d, "displayName", "HavenStore");
let p = new d(a.Z, {
    HAVEN_CONNECT: (e) => {
        console.log("HAVEN_CONNECT", e), (u[e.room.roomId] = e.room);
    },
    HAVEN_DISCONNECT: (e) => {
        if ((console.log("HAVEN_DISCONNECT", e), null == u[e.roomId])) return !1;
        let t = o.default.getCurrentUser();
        if (e.userId === (null == t ? void 0 : t.id)) return void delete u[e.roomId];
        let n = c({}, u[e.roomId]);
        (n.participants = n.participants.filter((t) => t.userId !== e.userId)),
            (n.seats = n.seats.map((t) => {
                var n, i;
                return t.claimedBy === e.userId
                    ? ((n = c({}, t)),
                      (i = i = { claimedBy: null }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      n)
                    : t;
            })),
            (u[e.roomId] = n);
    },
    HAVEN_UPDATE: (e) => {
        console.log("HAVEN_UPDATE", e), (u[e.room.roomId] = e.room);
    },
    HAVEN_GOT_ASSETS: (e) => {
        i = e.assets;
    },
});
