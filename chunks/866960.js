n.d(t, { Z: () => h });
var r,
    i = n(442837),
    a = n(570140),
    o = n(931619),
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
function _(e) {
    var t;
    (c = null != e.type ? e.type : s.IWh.UNKNOWN), (u = null != (t = e.effectiveSpeed) ? t : s.IyS.UNKNOWN), (d = e.serviceProvider), p.emitChange();
}
class f extends (r = i.ZP.Store) {
    initialize() {
        o.Z.getNetworkInformation().then(_), o.Z.addChangeCallback(_);
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
l(f, 'displayName', 'NetworkStore');
let p = new f(a.Z, {}),
    h = p;
