"use strict";
n.d(t, { A: () => v });
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
    p = {};
function h(e) {
    let { assets: t } = e,
        n = {};
    t.forEach((e) => (n[e.id] = e)), (p = n);
}
function m(e) {
    let { videoFilterAsset: t } = e;
    p = { ...p, [t.id]: t };
}
function g(e) {
    let { videoFilterAsset: t } = e;
    (p = { ...p }), delete p[t.id];
}
function E(e) {
    let t = u.default.getCurrentUser();
    if (null == t) return !1;
    let n = e ?? (0, c.Hk)(s.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id);
    return null != l.A.getVoiceChannelId() && o.A.isVideoEnabled() && null != n;
}
function A(e) {
    let { backgroundOption: t } = e;
    E(t) && (f = !0);
}
function I(e) {
    let { settings: t } = e;
    i.Tr.CAMERA_BACKGROUND_LIVE in t && (d = !0);
}
function T() {
    _ !== l.A.getVoiceChannelId() && (f = !1), E() && (f = !0), (_ = l.A.getVoiceChannelId());
}
function y() {
    (d = !1), (f = !1), (_ = null), (p = {});
}
class S extends r.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        this.waitFor(o.A, l.A, s.A, u.default), this.syncWith([l.A, o.A], T);
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
let v = new S(a.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: h,
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: m,
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: g,
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: A,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: I,
    LOGOUT: y,
});
