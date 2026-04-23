n.d(t, { A: () => S });
var i = n(17928),
    r = n(205693),
    a = n(228366),
    l = n(617617),
    s = n(969341),
    o = n(309010),
    u = n(287809),
    _ = n(965162);
let E = !1,
    A = null,
    c = !1,
    d = {};
function I(e) {
    let t = u.default.getCurrentUser();
    if (null == t) return !1;
    let n = e ?? (0, _.Hk)(l.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id);
    return null != o.A.getVoiceChannelId() && s.Ay.isVideoEnabled() && null != n;
}
function T() {
    A !== o.A.getVoiceChannelId() && (c = !1), I() && (c = !0), (A = o.A.getVoiceChannelId());
}
class N extends i.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        this.waitFor(s.Ay, o.A, l.A, u.default), this.syncWith([o.A, s.Ay], T);
    }
    get videoFilterAssets() {
        return d;
    }
    get hasBeenApplied() {
        return E;
    }
    get hasUsedBackgroundInCall() {
        return c;
    }
}
let S = new N(a.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
        let { assets: t } = e,
            n = {};
        t.forEach((e) => (n[e.id] = e)), (d = n);
    },
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        d = { ...d, [t.id]: t };
    },
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        (d = { ...d }), delete d[t.id];
    },
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
        let { backgroundOption: t } = e;
        I(t) && (c = !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        r.Tr.CAMERA_BACKGROUND_LIVE in t && (E = !0);
    },
    LOGOUT: function () {
        (E = !1), (c = !1), (A = null), (d = {});
    },
});
