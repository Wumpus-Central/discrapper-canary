n.d(t, {
    A: () => p,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(652215);

function o(e, t, n) {
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
let l = {};

function c() {
    l = {};
}

function u() {
    delete l[s.LU7.SOUND];
}

function d(e) {
    let { errorMessage: t, errorCode: n } = e;
    l[s.LU7.SOUND] = {
        errorMessage: t,
        errorCode: n,
    };
}
class f extends (r = i.Ay.Store) {
    getHookError(e) {
        return l[e];
    }
}
o(f, "displayName", "HookErrorStore");
let p = new f(a.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: c,
    MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: u,
    MEDIA_ENGINE_SOUNDSHARE_FAILED: d,
});
