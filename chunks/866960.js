n.d(t, { Z: () => h });
var i,
    r = n(442837),
    a = n(570140),
    s = n(931619),
    o = n(981631);
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
let u = o.IWh.UNKNOWN,
    c = o.IyS.UNKNOWN,
    d = null;
function f(e) {
    var t;
    (u = null != e.type ? e.type : o.IWh.UNKNOWN), (c = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : o.IyS.UNKNOWN), (d = e.serviceProvider), p.emitChange();
}
class _ extends (i = r.ZP.Store) {
    initialize() {
        s.Z.getNetworkInformation().then(f), s.Z.addChangeCallback(f);
    }
    getType() {
        return u;
    }
    getEffectiveConnectionSpeed() {
        return c;
    }
    getServiceProvider() {
        return d;
    }
}
l(_, 'displayName', 'NetworkStore');
let p = new _(a.Z, {}),
    h = p;
