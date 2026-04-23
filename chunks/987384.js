"use strict";
n.d(t, { F9: () => f, HR: () => _, Mj: () => g, Oo: () => m, _C: () => h, pW: () => p, wq: () => E });
var r = n(562465),
    i = n(73153),
    s = n(594061),
    a = n(430452),
    o = n(287809),
    l = n(329551),
    u = n(965162),
    c = n(449108),
    d = n(652215);
async function _() {
    try {
        let e = await r.Bo.get({ url: d.Rsh.VIDEO_FILTER_ASSETS, rejectWithError: !1 });
        return i.h.dispatch({ type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS", assets: e.body }), e;
    } catch (e) {
        throw (i.h.dispatch({ type: "VIDEO_FILTER_ASSETS_FETCH_FAILURE", error: e }), e);
    }
}
async function f(e, t, n) {
    try {
        let s = await r.Bo.post({
            url: d.Rsh.VIDEO_FILTER_ASSETS,
            body: { type: t, asset: e, last_used: n?.toISOString() },
            rejectWithError: !1,
        });
        return i.h.dispatch({ type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS", videoFilterAsset: s.body }), s.body;
    } catch (e) {
        throw new c.A(e);
    }
}
async function p(e) {
    await r.Bo.del({ url: d.Rsh.VIDEO_FILTER_ASSET(e.id), rejectWithError: !1 });
    let t = (0, l.i)(o.default.getCurrentUser());
    (0, u.d1)(t) && t.id === e.id && h(null),
        i.h.dispatch({ type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS", videoFilterAsset: e });
}
async function h(e) {
    if (
        (await s.wc.updateAsync(
            "voiceAndVideo",
            (t) => {
                t.videoBackgroundFilterDesktop = (0, u.R4)(e);
            },
            s.Sb.FREQUENT_USER_ACTION,
        ),
        (0, u.d1)(e))
    ) {
        let t = await r.Bo.post({ url: d.Rsh.VIDEO_FILTER_ASSET_LAST_USED(e.id), rejectWithError: !1 });
        i.h.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: t.body });
    } else i.h.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: e });
}
function E(e) {
    a.Ay.isSupported() && i.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings: e });
}
function m() {
    a.Ay.isSupported() && i.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" });
}
function g() {
    i.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
}
