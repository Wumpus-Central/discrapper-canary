"use strict";
n.d(t, { A: () => C });
var r = n(311907),
    i = n(205693),
    a = n(73153),
    s = n(617617),
    o = n(430452),
    l = n(309010),
    u = n(287809),
    c = n(965162);
let d = !1,
    _ = null,
    f = !1,
    h = {};
function p(e) {
    let { assets: t } = e,
        n = {};
    t.forEach((e) => (n[e.id] = e)), (h = n);
}
function g(e) {
    let { videoFilterAsset: t } = e;
    h = { ...h, [t.id]: t };
}
function E(e) {
    let { videoFilterAsset: t } = e;
    (h = { ...h }), delete h[t.id];
}
function A(e) {
    let t = u.default.getCurrentUser();
    if (null == t) return !1;
    let n = e ?? (0, c.Hk)(s.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id);
    return null != l.A.getVoiceChannelId() && o.Ay.isVideoEnabled() && null != n;
}
function I(e) {
    let { backgroundOption: t } = e;
    A(t) && (f = !0);
}
function T(e) {
    let { settings: t } = e;
    i.Tr.CAMERA_BACKGROUND_LIVE in t && (d = !0);
}
function y() {
    _ !== l.A.getVoiceChannelId() && (f = !1), A() && (f = !0), (_ = l.A.getVoiceChannelId());
}
function S() {
    (d = !1), (f = !1), (_ = null), (h = {});
}
class v extends r.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        this.waitFor(o.Ay, l.A, s.A, u.default), this.syncWith([l.A, o.Ay], y);
    }
    get videoFilterAssets() {
        return h;
    }
    get hasBeenApplied() {
        return d;
    }
    get hasUsedBackgroundInCall() {
        return f;
    }
}
let C = new v(a.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: p,
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: g,
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: E,
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: I,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: T,
    LOGOUT: S,
});
