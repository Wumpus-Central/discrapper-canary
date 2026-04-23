"use strict";
n.d(t, { A: () => g });
var r = n(311907),
    i = n(205693),
    s = n(73153),
    a = n(617617),
    o = n(430452),
    l = n(309010),
    u = n(287809),
    c = n(965162);
let d = !1,
    _ = null,
    f = !1,
    p = {};
function h(e) {
    let t = u.default.getCurrentUser();
    if (null == t) return !1;
    let n = e ?? (0, c.Hk)(a.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id);
    return null != l.A.getVoiceChannelId() && o.Ay.isVideoEnabled() && null != n;
}
function E() {
    _ !== l.A.getVoiceChannelId() && (f = !1), h() && (f = !0), (_ = l.A.getVoiceChannelId());
}
class m extends r.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        this.waitFor(o.Ay, l.A, a.A, u.default), this.syncWith([l.A, o.Ay], E);
    }
    get videoFilterAssets() {
        return p;
    }
    get hasBeenApplied() {
        return d;
    }
    get hasUsedBackgroundInCall() {
        return f;
    }
}
let g = new m(s.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
        let { assets: t } = e,
            n = {};
        t.forEach((e) => (n[e.id] = e)), (p = n);
    },
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        p = { ...p, [t.id]: t };
    },
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        (p = { ...p }), delete p[t.id];
    },
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
        let { backgroundOption: t } = e;
        h(t) && (f = !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        i.Tr.CAMERA_BACKGROUND_LIVE in t && (d = !0);
    },
    LOGOUT: function () {
        (d = !1), (f = !1), (_ = null), (p = {});
    },
});
