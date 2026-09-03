n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(652215);
let s = {};
class l extends i.Ay.Store {
    static displayName = "HookErrorStore";
    getHookError(e) {
        return s[e];
    }
}
let o = new l(r.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function () {
        s = {};
    },
    MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function () {
        delete s[a.LU7.SOUND];
    },
    MEDIA_ENGINE_SOUNDSHARE_FAILED: function (e) {
        let { errorMessage: t, errorCode: n } = e;
        s[a.LU7.SOUND] = { errorMessage: t, errorCode: n };
    },
});
