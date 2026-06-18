"use strict";
n.d(t, { A: () => I });
var i = n(17928),
    r = n(459838),
    s = n(228366),
    a = n(617617),
    o = n(941327),
    l = n(309010),
    u = n(287809),
    c = n(965162);
let d = !1,
    _ = null,
    h = !1,
    f = {},
    p = !1,
    E = !1;
function m(e) {
    let t = u.default.getCurrentUser();
    if (null == t) return !1;
    let n = e ?? (0, c.Hk)(a.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id);
    return null != l.A.getVoiceChannelId() && o.Ay.isVideoEnabled() && null != n;
}
function g() {
    _ !== l.A.getVoiceChannelId() && ((h = !1), (p = !1), (E = !1)), m() && (h = !0), (_ = l.A.getVoiceChannelId());
}
class A extends i.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        this.waitFor(o.Ay, l.A, a.A, u.default), this.syncWith([l.A, o.Ay], g);
    }
    get videoFilterAssets() {
        return f;
    }
    get hasBeenApplied() {
        return d;
    }
    get hasUsedBackgroundInCall() {
        return h;
    }
    get videoBackgroundUnavailable() {
        return p;
    }
    get videoBackgroundPreviewUnavailable() {
        return E;
    }
}
let I = new A(s.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
        let { assets: t } = e,
            n = {};
        t.forEach((e) => (n[e.id] = e)), (f = n);
    },
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        f = { ...f, [t.id]: t };
    },
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        (f = { ...f }), delete f[t.id];
    },
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
        let { backgroundOption: t } = e;
        m(t) && (h = !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        r.Tr.CAMERA_BACKGROUND_LIVE in t && ((d = !0), (p = !1)), r.Tr.CAMERA_BACKGROUND_PREVIEW in t && (E = !1);
    },
    MEDIA_ENGINE_VIDEO_FILTER_ERROR: function (e) {
        let { target: t } = e;
        "live" === t ? (p = !0) : (E = !0);
    },
    LOGOUT: function () {
        (d = !1), (h = !1), (_ = null), (f = {}), (p = !1), (E = !1);
    },
});
