"use strict";
n.d(t, { A: () => m });
var i = n(17928),
    r = n(459838),
    a = n(228366),
    s = n(617617),
    l = n(186295),
    o = n(309010),
    d = n(287809),
    c = n(965162);
let u = !1,
    _ = null,
    E = !1,
    A = {},
    h = !1,
    I = !1;
function f(e) {
    let t = d.default.getCurrentUser();
    if (null == t) return !1;
    let n = e ?? (0, c.Hk)(s.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id);
    return null != o.Ay.getVoiceChannelId() && l.Ay.isVideoEnabled() && null != n;
}
function p() {
    _ !== o.Ay.getVoiceChannelId() && ((E = !1), (h = !1), (I = !1)), f() && (E = !0), (_ = o.Ay.getVoiceChannelId());
}
class T extends i.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        this.waitFor(l.Ay, o.Ay, s.A, d.default), this.syncWith([o.Ay, l.Ay], p);
    }
    get videoFilterAssets() {
        return A;
    }
    get hasBeenApplied() {
        return u;
    }
    get hasUsedBackgroundInCall() {
        return E;
    }
    get videoBackgroundUnavailable() {
        return h;
    }
    get videoBackgroundPreviewUnavailable() {
        return I;
    }
}
let m = new T(a.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
        let { assets: t } = e,
            n = {};
        t.forEach((e) => (n[e.id] = e)), (A = n);
    },
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        A = { ...A, [t.id]: t };
    },
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        (A = { ...A }), delete A[t.id];
    },
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
        let { backgroundOption: t } = e;
        f(t) && (E = !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        r.Tr.CAMERA_BACKGROUND_LIVE in t && ((u = !0), (h = !1)), r.Tr.CAMERA_BACKGROUND_PREVIEW in t && (I = !1);
    },
    MEDIA_ENGINE_VIDEO_FILTER_ERROR: function (e) {
        let { target: t } = e;
        "live" === t ? (h = !0) : (I = !0);
    },
    LOGOUT: function () {
        (u = !1), (E = !1), (_ = null), (A = {}), (h = !1), (I = !1);
    },
});
