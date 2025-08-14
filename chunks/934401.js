var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(353926),
    s = n(160462);
function c() {
    s.W.trigger();
}
class u extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    constructor() {
        super(a.Z, { CONNECTION_OPEN: c }, a.c.Early);
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "ExperimentTriggerPointStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "ExperimentTriggerPointStore"),
    new u();
