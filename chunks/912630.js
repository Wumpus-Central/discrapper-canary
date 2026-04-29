n.d(t, { A: () => S });
var i = n(17928),
    r = n(205693),
    a = n(228366),
    l = n(617617),
    s = n(51760),
    E = n(309010),
    _ = n(287809),
    o = n(965162);
let u = !1,
    A = null,
    d = !1,
    c = {};
function I(e) {
    let t = _.default.getCurrentUser();
    if (null == t) return !1;
    let n = e ?? (0, o.Hk)(l.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop, t.id);
    return null != E.A.getVoiceChannelId() && s.Ay.isVideoEnabled() && null != n;
}
function T() {
    A !== E.A.getVoiceChannelId() && (d = !1), I() && (d = !0), (A = E.A.getVoiceChannelId());
}
class N extends i.Ay.Store {
    static displayName = "VideoBackgroundStore";
    initialize() {
        this.waitFor(s.Ay, E.A, l.A, _.default), this.syncWith([E.A, s.Ay], T);
    }
    get videoFilterAssets() {
        return c;
    }
    get hasBeenApplied() {
        return u;
    }
    get hasUsedBackgroundInCall() {
        return d;
    }
}
let S = new N(a.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
        let { assets: t } = e,
            n = {};
        t.forEach((e) => (n[e.id] = e)), (c = n);
    },
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        c = { ...c, [t.id]: t };
    },
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
        let { videoFilterAsset: t } = e;
        (c = { ...c }), delete c[t.id];
    },
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
        let { backgroundOption: t } = e;
        I(t) && (d = !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        r.Tr.CAMERA_BACKGROUND_LIVE in t && (u = !0);
    },
    LOGOUT: function () {
        (u = !1), (d = !1), (A = null), (c = {});
    },
});
