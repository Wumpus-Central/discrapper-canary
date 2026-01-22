n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(439372),
    i = n(201718);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function s(e) {
    i.P.refetch(e.user_id);
}
class o extends r.A {
    constructor(...e) {
        super(...e),
            a(this, "actions", {
                USER_APPLICATION_IDENTITY_UPDATE: s,
                USER_APPLICATION_IDENTITY_REMOVE: s,
            });
    }
}
let l = new o();
