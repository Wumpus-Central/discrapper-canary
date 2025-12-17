var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(353926),
    s = n(633289),
    c = n(160462);
function u() {
    c.W.trigger();
}
class d extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, s.Z);
    }
    constructor() {
        super(a.Z, { CONNECTION_OPEN: u }, a.c.Early);
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "ExperimentTriggerPointStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "ExperimentTriggerPointStore"),
    new d();
