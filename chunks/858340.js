n.d(t, { Z: () => _ });
var i,
    r = n(442837),
    a = n(570140),
    s = n(981631);
function o(e, t, n) {
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
let l = {};
function u() {
    l = {};
}
function c() {
    delete l[s.K3D.SOUND];
}
function d(e) {
    let { errorMessage: t, errorCode: n } = e;
    l[s.K3D.SOUND] = {
        errorMessage: t,
        errorCode: n
    };
}
class f extends (i = r.ZP.Store) {
    getHookError(e) {
        return l[e];
    }
}
o(f, 'displayName', 'HookErrorStore');
let _ = new f(a.Z, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: u,
    MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: c,
    MEDIA_ENGINE_SOUNDSHARE_FAILED: d
});
