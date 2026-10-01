n.d(t, { A: () => S });
var i = n(17928),
    r = n(205693),
    a = n(73153),
    s = n(742023),
    l = n(617617),
    o = n(25578),
    d = n(309010),
    c = n(287809),
    u = n(965162);
let _ = !1,
    E = null,
    A = !1,
    h = !1,
    I = {},
    f = !1,
    p = !1;
function T(e) {
    let t = c.default.getCurrentUser();
    if (null == t) return !1;
    let n = e;
    return (
        null == n && (n = (0, u.Hk)(l.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id)),
        null != d.Ay.getVoiceChannelId() && o.Ay.isVideoEnabled() && null != n
    );
}
function g() {
    (E !== d.Ay.getVoiceChannelId() && ((A = !1), (f = !1), (p = !1)), T() && (A = !0), (E = d.Ay.getVoiceChannelId()));
}
class m extends i.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        (this.waitFor(o.Ay, d.Ay, s.Ay, l.A, c.default), this.syncWith([d.Ay, o.Ay], g));
    }
    get videoFilterAssets() {
        return I;
    }
    get hasBeenApplied() {
        return _;
    }
    get hasUsedBackgroundInCall() {
        return A;
    }
    get liveBackgroundEnabled() {
        return h;
    }
    get videoBackgroundUnavailable() {
        return f;
    }
    get videoBackgroundPreviewUnavailable() {
        return p;
    }
}
let S = new m(a.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
        let { assets: t } = e,
            n = {};
        (t.forEach((e) => (n[e.id] = e)), (I = n));
    },
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        I = { ...I, [t.id]: t };
    },
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        ((I = { ...I }), delete I[t.id]);
    },
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
        let { backgroundOption: t } = e;
        T(t) && (A = !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        (r.Tr.CAMERA_BACKGROUND_LIVE in t &&
            ((_ = !0), (f = !1), (h = t[r.Tr.CAMERA_BACKGROUND_LIVE]?.graph !== r.gO.NONE)),
            r.Tr.CAMERA_BACKGROUND_PREVIEW in t && (p = !1));
    },
    MEDIA_ENGINE_VIDEO_FILTER_ERROR: function (e) {
        let { target: t } = e;
        "live" === t ? ((f = !0), (h = !1)) : (p = !0);
    },
    LOGOUT: function () {
        ((_ = !1), (A = !1), (E = null), (I = {}), (f = !1), (p = !1), (h = !1));
    },
});
