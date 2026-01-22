let r;
n.d(t, { A: () => E });
var i,
    a = n(311907),
    s = n(73153),
    o = n(287809);
function l(e, t, n) {
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {},
    p = (e) => {
        console.log("HAVEN_CONNECT", e), (f[e.room.roomId] = e.room);
    },
    _ = (e) => {
        if ((console.log("HAVEN_DISCONNECT", e), null == f[e.roomId])) return !1;
        let t = o.default.getCurrentUser();
        if (e.userId === (null == t ? void 0 : t.id)) return void delete f[e.roomId];
        let n = c({}, f[e.roomId]);
        (n.participants = n.participants.filter((t) => t.userId !== e.userId)),
            (n.seats = n.seats.map((t) => (t.claimedBy === e.userId ? d(c({}, t), { claimedBy: null }) : t))),
            (f[e.roomId] = n);
    },
    h = (e) => {
        console.log("HAVEN_UPDATE", e), (f[e.room.roomId] = e.room);
    },
    m = (e) => {
        r = e.assets;
    };
class g extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(o.default);
    }
    get state() {
        return f;
    }
    getRoom(e) {
        return f[e];
    }
    isUserConnected(e) {
        return null != f[e];
    }
    get assets() {
        return r;
    }
    getSongs(e) {
        var t;
        return null == r || null == (t = r.genres[e]) ? void 0 : t.songs;
    }
}
l(g, "displayName", "HavenStore");
let E = new g(s.h, {
    HAVEN_CONNECT: p,
    HAVEN_DISCONNECT: _,
    HAVEN_UPDATE: h,
    HAVEN_GOT_ASSETS: m,
});
