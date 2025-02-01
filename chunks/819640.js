n.d(t, { Z: () => f }), n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = [];
function l(e) {
    let { component: t } = e;
    if (o.indexOf(t) >= 0) return !1;
    o = [...o, t];
}
function u() {
    if (0 === o.length) return !1;
    o = o.slice(0, -1);
}
function c() {
    o = [];
}
class d extends (i = r.ZP.Store) {
    hasLayers() {
        return o.length > 0;
    }
    getLayers() {
        return o;
    }
}
s(d, 'displayName', 'LayerStore');
let f = new d(a.Z, {
    LAYER_PUSH: l,
    LAYER_POP: u,
    LAYER_POP_ALL: c,
    LOGOUT: c,
    NOTIFICATION_CLICK: c
});
