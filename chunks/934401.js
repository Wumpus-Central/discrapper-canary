var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(570140),
    c = n(353926),
    d = n(160462);
function u() {
    d.W.trigger();
}
class h extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    constructor() {
        super(o.Z, { CONNECTION_OPEN: u }, o.c.Early);
    }
}
(l = 'ExperimentTriggerPointStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    new h();
