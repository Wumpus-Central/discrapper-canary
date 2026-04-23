"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153),
    s = n(652215);
let a = {};
class o extends r.Ay.Store {
    static displayName = "HookErrorStore";
    getHookError(e) {
        return a[e];
    }
}
let l = new o(i.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function () {
        a = {};
    },
    MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function () {
        delete a[s.LU7.SOUND];
    },
    MEDIA_ENGINE_SOUNDSHARE_FAILED: function (e) {
        let { errorMessage: t, errorCode: n } = e;
        a[s.LU7.SOUND] = { errorMessage: t, errorCode: n };
    },
});
