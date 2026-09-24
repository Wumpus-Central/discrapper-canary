n.d(t, { A: () => g });
var i = n(17928),
    r = n(459838),
    a = n(228366),
    s = n(742023),
    l = n(617617),
    o = n(25578),
    d = n(309010),
    c = n(287809),
    u = n(965162);
let _ = !1,
    E = null,
    A = !1,
    h = {},
    I = !1,
    f = !1;
function p(e) {
    let t = c.default.getCurrentUser();
    if (null == t) return !1;
    let n = e;
    return (
        null == n && (n = (0, u.Hk)(l.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id)),
        null != d.Ay.getVoiceChannelId() && o.Ay.isVideoEnabled() && null != n
    );
}
function T() {
    (E !== d.Ay.getVoiceChannelId() && ((A = !1), (I = !1), (f = !1)), p() && (A = !0), (E = d.Ay.getVoiceChannelId()));
}
class m extends i.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        (this.waitFor(o.Ay, d.Ay, s.Ay, l.A, c.default), this.syncWith([d.Ay, o.Ay], T));
    }
    get videoFilterAssets() {
        return h;
    }
    get hasBeenApplied() {
        return _;
    }
    get hasUsedBackgroundInCall() {
        return A;
    }
    get videoBackgroundUnavailable() {
        return I;
    }
    get videoBackgroundPreviewUnavailable() {
        return f;
    }
}
let g = new m(a.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
        let { assets: t } = e,
            n = {};
        (t.forEach((e) => (n[e.id] = e)), (h = n));
    },
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        h = { ...h, [t.id]: t };
    },
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        ((h = { ...h }), delete h[t.id]);
    },
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
        let { backgroundOption: t } = e;
        p(t) && (A = !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        (r.Tr.CAMERA_BACKGROUND_LIVE in t && ((_ = !0), (I = !1)), r.Tr.CAMERA_BACKGROUND_PREVIEW in t && (f = !1));
    },
    MEDIA_ENGINE_VIDEO_FILTER_ERROR: function (e) {
        let { target: t } = e;
        "live" === t ? (I = !0) : (f = !0);
    },
    LOGOUT: function () {
        ((_ = !1), (A = !1), (E = null), (h = {}), (I = !1), (f = !1));
    },
});
