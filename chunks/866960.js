var i,
    a = r(442837),
    o = r(570140),
    s = r(931619),
    l = r(981631);
function u(e, n, r) {
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
let c = l.IWh.UNKNOWN,
    d = l.IyS.UNKNOWN,
    f = null;
function p(e) {
    var n;
    (c = null != e.type ? e.type : l.IWh.UNKNOWN), (d = null !== (n = e.effectiveSpeed) && void 0 !== n ? n : l.IyS.UNKNOWN), (f = e.serviceProvider), _.emitChange();
}
class h extends (i = a.ZP.Store) {
    initialize() {
        s.Z.getNetworkInformation().then(p), s.Z.addChangeCallback(p);
    }
    getType() {
        return c;
    }
    getEffectiveConnectionSpeed() {
        return d;
    }
    getServiceProvider() {
        return f;
    }
}
u(h, 'displayName', 'NetworkStore');
let _ = new h(o.Z, {});
n.Z = _;
