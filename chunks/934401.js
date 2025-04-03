var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(353926),
    c = n(160462);
function u() {
    c.W.trigger();
}
class d extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    constructor() {
        super(o.Z, { CONNECTION_OPEN: u }, o.c.Early);
    }
}
(i = 'ExperimentTriggerPointStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i),
    new d();
