var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(353926),
    c = n(160462);
function d() {
    c.W.trigger();
}
class u extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    constructor() {
        super(s.Z, { CONNECTION_OPEN: d }, s.c.Early);
    }
}
(l = 'ExperimentTriggerPointStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = l),
    new u();
