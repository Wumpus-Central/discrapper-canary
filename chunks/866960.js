n.d(t, { Z: () => h });
var r,
    i = n(442837),
    o = n(570140),
    a = n(931619),
    s = n(981631);
function l(e, t, n) {
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
let c = s.IWh.UNKNOWN,
    u = s.IyS.UNKNOWN,
    d = null;
function f(e) {
    var t;
    (c = null != e.type ? e.type : s.IWh.UNKNOWN), (u = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : s.IyS.UNKNOWN), (d = e.serviceProvider), _.emitChange();
}
class p extends (r = i.ZP.Store) {
    initialize() {
        a.Z.getNetworkInformation().then(f), a.Z.addChangeCallback(f);
    }
    getType() {
        return c;
    }
    getEffectiveConnectionSpeed() {
        return u;
    }
    getServiceProvider() {
        return d;
    }
}
l(p, 'displayName', 'NetworkStore');
let _ = new p(o.Z, {}),
    h = _;
