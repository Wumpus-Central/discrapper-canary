var i,
    a = r(47120);
var o = r(442837),
    s = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = [];
function c(e) {
    let { component: n } = e;
    if (u.indexOf(n) >= 0) return !1;
    u = [...u, n];
}
function d() {
    if (0 === u.length) return !1;
    u = u.slice(0, -1);
}
function f() {
    u = [];
}
class p extends (i = o.ZP.Store) {
    hasLayers() {
        return u.length > 0;
    }
    getLayers() {
        return u;
    }
}
l(p, 'displayName', 'LayerStore'),
    (n.Z = new p(s.Z, {
        LAYER_PUSH: c,
        LAYER_POP: d,
        LAYER_POP_ALL: f,
        LOGOUT: f,
        NOTIFICATION_CLICK: f
    }));
