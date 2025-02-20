var r,
    i,
    l,
    o = n(442837),
    a = n(570140),
    s = n(353926),
    c = n(160462);
function u() {
    c.W.trigger();
}
class d extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    constructor() {
        super(a.Z, { CONNECTION_OPEN: u }, a.c.Early);
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
