var i,
    a = r(442837),
    o = r(570140),
    s = r(981631);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {};
function c() {
    u = {};
}
function d() {
    delete u[s.K3D.SOUND];
}
function f(e) {
    let { errorMessage: n, errorCode: r } = e;
    u[s.K3D.SOUND] = {
        errorMessage: n,
        errorCode: r
    };
}
class p extends (i = a.ZP.Store) {
    getHookError(e) {
        return u[e];
    }
}
l(p, 'displayName', 'HookErrorStore'),
    (n.Z = new p(o.Z, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: c,
        MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: d,
        MEDIA_ENGINE_SOUNDSHARE_FAILED: f
    }));
