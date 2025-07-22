n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    a = n(570140),
    o = n(981631);
function s(e, t, n) {
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
function c() {
    l = {};
}
function u() {
    delete l[o.K3D.SOUND];
}
function d(e) {
    let { errorMessage: t, errorCode: n } = e;
    l[o.K3D.SOUND] = {
        errorMessage: t,
        errorCode: n
    };
}
class f extends (r = i.ZP.Store) {
    getHookError(e) {
        return l[e];
    }
}
s(f, 'displayName', 'HookErrorStore');
let _ = new f(a.Z, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: c,
    MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: u,
    MEDIA_ENGINE_SOUNDSHARE_FAILED: d
});
