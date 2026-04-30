"use strict";
n.d(t, { Ay: () => C, Hq: () => O, l$: () => v, o6: () => y, wK: () => R });
var i,
    r = n(308528),
    s = n(155718),
    a = n(688810),
    o = n(429913),
    l = n(20015),
    u = n(113854),
    c = n(375802),
    d = n(723702),
    _ = n(933958),
    f = n(62583),
    h = n(956549),
    p = n(685399),
    E = n(969151),
    m = n(847381),
    g = n(435582),
    A = n(902439),
    I = n(620148),
    T = n(283488),
    S = n(360469),
    N = n(652215),
    y = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function C(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: r,
            embeddedActivitiesManager: a,
            assetNames: o = ["embedded_cover"],
            backgroundResolution: l = 250,
            launchingComponentId: u,
            commandOrigin: c,
            source: _,
        } = e,
        { application: f, activity: h } = t,
        E = h.client_platform_config[(0, m.A)((0, d.getOS)())],
        A = Date.now(),
        I =
            null != E.label_until &&
            A < Date.parse(E.label_until) &&
            null != E.label_from &&
            A > Date.parse(E.label_from),
        S = (0, T.A)({ applicationId: f.id, size: l, names: o, format: "webp" }),
        N = null != h.activity_preview_video_asset_id ? (0, g.A)(f.id, h.activity_preview_video_asset_id) : null,
        y = (0, p.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        C = O({ context: n, applicationId: f.id }),
        b = R({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: r,
            launchingComponentId: u,
            commandOrigin: c,
            source: _,
        }),
        D = v(f, t.activity);
    return {
        imageBackground: S,
        videoUrl: N,
        joinableEmbeddedApp: y,
        activityAction: C,
        onActivityItemSelected: b,
        labelType: I ? E.label_type : s.Hr.NONE,
        staffReleasePhase: D,
    };
}
function v(e, t) {
    if (!((0, l.n)(e, N.gfo.EMBEDDED_RELEASED) || (0, l.n)(e, N.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, m.A)((0, d.getOS)())].release_phase;
    return S.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function O(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        s = "channel" === t.type ? t.channel : void 0,
        a = (0, A.A)(),
        l = (0, I.A)({ fetchesApplication: i }),
        u = (0, o.h)(n, i),
        c = (0, p.Ay)(s).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return r;
    let d = (0, E.H)(a?.location);
    return null != s && d === s.id && l?.id === u.id ? (r = 2) : null != c && (r = 1), r;
}
function R(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: s,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: l,
            launchingComponentId: d,
            commandOrigin: p,
            sectionName: E,
            source: m,
            fetchesApplication: g = !0,
            customId: I,
            referrerId: T,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        N = t?.id ?? "",
        y = O({ context: i, applicationId: N, fetchesApplication: g }),
        { analyticsLocations: C } = (0, a.Ay)(),
        v = (0, A.A)(),
        R = (0, c.e)(t);
    if (null == t)
        return () => {
            l?.({ applicationId: "" });
        };
    switch (y) {
        case 0:
            return async () => {
                if (R) {
                    try {
                        await u.A.launchFrame({ applicationId: N }), l?.({ applicationId: N });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await r.A.openPrivateChannel({ recipientIds: n, navigateToChannel: !0 });
                    } catch (e) {
                        return;
                    }
                await (0, h.A)({
                    targetApplicationId: N,
                    locationObject: s,
                    channelId: e,
                    analyticsLocations: C,
                    componentId: d,
                    commandOrigin: p,
                    sectionName: E,
                    source: m,
                    customId: I,
                    referrerId: T,
                    onConfirmActivityLaunchChecksAlertOpen: S,
                }).then((e) => e && l?.({ applicationId: N }));
            };
        case 1:
            return async () => {
                _.Ay.isLaunchingActivity() ||
                    (await (0, f.A)({
                        applicationId: N,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: s,
                        analyticsLocations: C,
                        componentId: d,
                        sectionName: E,
                        source: m,
                        customId: I,
                        referrerId: T,
                    }).then((e) => e && l?.({ applicationId: N })));
            };
        case 2:
            return () => {
                _.Ay.isLaunchingActivity() ||
                    (null != v && o.leaveActivity({ location: v.location, applicationId: N }),
                    l?.({ applicationId: N }));
            };
    }
}
