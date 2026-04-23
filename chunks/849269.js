"use strict";
n.d(t, { Ay: () => v, Hq: () => O, l$: () => C, o6: () => N, wK: () => R });
var r,
    i = n(308528),
    s = n(155718),
    a = n(688810),
    o = n(429913),
    l = n(20015),
    u = n(625180),
    c = n(207371),
    d = n(723702),
    _ = n(933958),
    f = n(447031),
    p = n(956549),
    h = n(685399),
    E = n(969151),
    m = n(847381),
    g = n(435582),
    A = n(902439),
    I = n(620148),
    T = n(283488),
    S = n(360469),
    y = n(652215),
    N = (((r = {})[(r.START = 0)] = "START"), (r[(r.JOIN = 1)] = "JOIN"), (r[(r.LEAVE = 2)] = "LEAVE"), r);
function v(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: r,
            onActivityItemSelected: i,
            embeddedActivitiesManager: a,
            assetNames: o = ["embedded_cover"],
            backgroundResolution: l = 250,
            launchingComponentId: u,
            commandOrigin: c,
            source: _,
        } = e,
        { application: f, activity: p } = t,
        E = p.client_platform_config[(0, m.A)((0, d.getOS)())],
        A = Date.now(),
        I =
            null != E.label_until &&
            A < Date.parse(E.label_until) &&
            null != E.label_from &&
            A > Date.parse(E.label_from),
        S = (0, T.A)({ applicationId: f.id, size: l, names: o, format: "webp" }),
        y = null != p.activity_preview_video_asset_id ? (0, g.A)(f.id, p.activity_preview_video_asset_id) : null,
        N = (0, h.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        v = O({ context: n, applicationId: f.id }),
        b = R({
            application: t.application,
            context: n,
            locationObject: r,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: i,
            launchingComponentId: u,
            commandOrigin: c,
            source: _,
        }),
        D = C(f, t.activity);
    return {
        imageBackground: S,
        videoUrl: y,
        joinableEmbeddedApp: N,
        activityAction: v,
        onActivityItemSelected: b,
        labelType: I ? E.label_type : s.Hr.NONE,
        staffReleasePhase: D,
    };
}
function C(e, t) {
    if (!((0, l.n)(e, y.gfo.EMBEDDED_RELEASED) || (0, l.n)(e, y.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, m.A)((0, d.getOS)())].release_phase;
    return S.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function O(e) {
    let { context: t, applicationId: n, fetchesApplication: r = !0 } = e,
        i = 0,
        s = "channel" === t.type ? t.channel : void 0,
        a = (0, A.A)(),
        l = (0, I.A)({ fetchesApplication: r }),
        u = (0, o.h)(n, r),
        c = (0, h.Ay)(s).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return i;
    let d = (0, E.H)(a?.location);
    return null != s && d === s.id && l?.id === u.id ? (i = 2) : null != c && (i = 1), i;
}
function R(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: r,
            locationObject: s,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: l,
            launchingComponentId: d,
            commandOrigin: h,
            sectionName: E,
            source: m,
            fetchesApplication: g = !0,
            customId: I,
            referrerId: T,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        y = t?.id ?? "",
        N = O({ context: r, applicationId: y, fetchesApplication: g }),
        { analyticsLocations: v } = (0, a.Ay)(),
        C = (0, A.A)(),
        R = (0, c.e)(t);
    if (null == t)
        return () => {
            l?.({ applicationId: "" });
        };
    switch (N) {
        case 0:
            return async () => {
                if (R) {
                    try {
                        await u.A.launchFrame({ applicationId: y }), l?.({ applicationId: y });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === r.type ? r.channel.id : void 0;
                if (null != n)
                    try {
                        e = await i.A.openPrivateChannel({ recipientIds: n, navigateToChannel: !0 });
                    } catch (e) {
                        return;
                    }
                await (0, p.A)({
                    targetApplicationId: y,
                    locationObject: s,
                    channelId: e,
                    analyticsLocations: v,
                    componentId: d,
                    commandOrigin: h,
                    sectionName: E,
                    source: m,
                    customId: I,
                    referrerId: T,
                    onConfirmActivityLaunchChecksAlertOpen: S,
                }).then((e) => e && l?.({ applicationId: y }));
            };
        case 1:
            return async () => {
                _.Ay.isLaunchingActivity() ||
                    (await (0, f.A)({
                        applicationId: y,
                        activityChannelId: "channel" === r.type ? r.channel.id : void 0,
                        locationObject: s,
                        analyticsLocations: v,
                        componentId: d,
                        sectionName: E,
                        source: m,
                        customId: I,
                        referrerId: T,
                    }).then((e) => e && l?.({ applicationId: y })));
            };
        case 2:
            return () => {
                _.Ay.isLaunchingActivity() ||
                    (null != C && o.leaveActivity({ location: C.location, applicationId: y }),
                    l?.({ applicationId: y }));
            };
    }
}
