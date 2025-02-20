n.d(t, { Z: () => f }), n(47120);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = [];
function l(e) {
    let { component: t } = e;
    if (s.indexOf(t) >= 0) return !1;
    s = [...s, t];
}
function c() {
    if (0 === s.length) return !1;
    s = s.slice(0, -1);
}
function u() {
    s = [];
}
class d extends (r = i.ZP.Store) {
    hasLayers() {
        return s.length > 0;
    }
    getLayers() {
        return s;
    }
}
a(d, 'displayName', 'LayerStore');
let f = new d(o.Z, {
    LAYER_PUSH: l,
    LAYER_POP: c,
    LAYER_POP_ALL: u,
    LOGOUT: u,
    NOTIFICATION_CLICK: u
});
