"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153),
    a = n(652215);
let s = {};
function o() {
    s = {};
}
function l() {
    delete s[a.LU7.SOUND];
}
function u(e) {
    let { errorMessage: t, errorCode: n } = e;
    s[a.LU7.SOUND] = { errorMessage: t, errorCode: n };
}
class c extends r.Ay.Store {
    static displayName = "HookErrorStore";
    getHookError(e) {
        return s[e];
    }
}
let d = new c(i.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: o,
    MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: l,
    MEDIA_ENGINE_SOUNDSHARE_FAILED: u,
});
