var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(353926),
    o = n(633289),
    c = n(160462);
function u() {
    c.W.trigger();
}
class d extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, o.Z);
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
