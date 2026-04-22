"use strict";
n.d(t, { A: () => g });
var r = n(311907),
    i = n(205693),
    s = n(73153),
    a = n(617617),
    o = n(430452),
    l = n(309010),
    u = n(287809),
    d = n(965162);
let c = !1,
    _ = null,
    f = !1,
    E = {};
function h(e) {
    let t = u.default.getCurrentUser();
    if (null == t) return !1;
    let n = e ?? (0, d.Hk)(a.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id);
    return null != l.A.getVoiceChannelId() && o.Ay.isVideoEnabled() && null != n;
}
function p() {
    _ !== l.A.getVoiceChannelId() && (f = !1), h() && (f = !0), (_ = l.A.getVoiceChannelId());
}
class m extends r.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        this.waitFor(o.Ay, l.A, a.A, u.default), this.syncWith([l.A, o.Ay], p);
    }
    get videoFilterAssets() {
        return E;
    }
    get hasBeenApplied() {
        return c;
    }
    get hasUsedBackgroundInCall() {
        return f;
    }
}
let g = new m(s.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
        let { assets: t } = e,
            n = {};
        t.forEach((e) => (n[e.id] = e)), (E = n);
    },
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        E = { ...E, [t.id]: t };
    },
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        (E = { ...E }), delete E[t.id];
    },
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
        let { backgroundOption: t } = e;
        h(t) && (f = !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        i.Tr.CAMERA_BACKGROUND_LIVE in t && (c = !0);
    },
    LOGOUT: function () {
        (c = !1), (f = !1), (_ = null), (E = {});
    },
});
