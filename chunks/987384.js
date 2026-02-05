"use strict";
n.d(t, { F9: () => f, HR: () => _, Mj: () => E, Oo: () => g, _C: () => h, pW: () => p, wq: () => m });
var r = n(562465),
    i = n(73153),
    a = n(594061),
    s = n(430452),
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
        let a = await r.Bo.post({
            url: d.Rsh.VIDEO_FILTER_ASSETS,
            body: { type: t, asset: e, last_used: n?.toISOString() },
            rejectWithError: !1,
        });
        return i.h.dispatch({ type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS", videoFilterAsset: a.body }), a.body;
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
        (await a.wc.updateAsync(
            "voiceAndVideo",
            (t) => {
                t.videoBackgroundFilterDesktop = (0, u.R4)(e);
            },
            a.Sb.FREQUENT_USER_ACTION,
        ),
        (0, u.d1)(e))
    ) {
        let t = await r.Bo.post({ url: d.Rsh.VIDEO_FILTER_ASSET_LAST_USED(e.id), rejectWithError: !1 });
        i.h.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: t.body });
    } else i.h.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: e });
}
function m(e) {
    s.A.isSupported() && i.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings: e });
}
function g() {
    s.A.isSupported() && i.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" });
}
function E() {
    i.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
}
