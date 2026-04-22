"use strict";
n.d(t, { Ay: () => S, Hq: () => N, l$: () => b, o6: () => y, wK: () => T });
var i,
    l = n(308528),
    s = n(155718),
    r = n(688810),
    a = n(429913),
    o = n(20015),
    c = n(625180),
    u = n(207371),
    d = n(723702),
    h = n(933958),
    m = n(447031),
    p = n(956549),
    f = n(685399),
    g = n(969151),
    _ = n(847381),
    x = n(435582),
    A = n(902439),
    C = n(620148),
    E = n(283488),
    I = n(360469),
    v = n(652215),
    y = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function S(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: l,
            embeddedActivitiesManager: r,
            assetNames: a = ["embedded_cover"],
            backgroundResolution: o = 250,
            launchingComponentId: c,
            commandOrigin: u,
            source: h,
        } = e,
        { application: m, activity: p } = t,
        g = p.client_platform_config[(0, _.A)((0, d.getOS)())],
        A = Date.now(),
        C =
            null != g.label_until &&
            A < Date.parse(g.label_until) &&
            null != g.label_from &&
            A > Date.parse(g.label_from),
        I = (0, E.A)({ applicationId: m.id, size: o, names: a, format: "webp" }),
        v = null != p.activity_preview_video_asset_id ? (0, x.A)(m.id, p.activity_preview_video_asset_id) : null,
        y = (0, f.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return m.id === t.applicationId;
        }),
        S = N({ context: n, applicationId: m.id }),
        j = T({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: u,
            source: h,
        }),
        R = b(m, t.activity);
    return {
        imageBackground: I,
        videoUrl: v,
        joinableEmbeddedApp: y,
        activityAction: S,
        onActivityItemSelected: j,
        labelType: C ? g.label_type : s.Hr.NONE,
        staffReleasePhase: R,
    };
}
function b(e, t) {
    if (!((0, o.n)(e, v.gfo.EMBEDDED_RELEASED) || (0, o.n)(e, v.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, _.A)((0, d.getOS)())].release_phase;
    return I.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function N(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        s = "channel" === t.type ? t.channel : void 0,
        r = (0, A.A)(),
        o = (0, C.A)({ fetchesApplication: i }),
        c = (0, a.h)(n, i),
        u = (0, f.Ay)(s).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return l;
    let d = (0, g.H)(r?.location);
    return null != s && d === s.id && o?.id === c.id ? (l = 2) : null != u && (l = 1), l;
}
function T(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: s,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: o,
            launchingComponentId: d,
            commandOrigin: f,
            sectionName: g,
            source: _,
            fetchesApplication: x = !0,
            customId: C,
            referrerId: E,
            onConfirmActivityLaunchChecksAlertOpen: I,
        } = e,
        v = t?.id ?? "",
        y = N({ context: i, applicationId: v, fetchesApplication: x }),
        { analyticsLocations: S } = (0, r.Ay)(),
        b = (0, A.A)(),
        T = (0, u.e)(t);
    if (null == t)
        return () => {
            o?.({ applicationId: "" });
        };
    switch (y) {
        case 0:
            return async () => {
                if (T) {
                    try {
                        await c.A.launchFrame({ applicationId: v }), o?.({ applicationId: v });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await l.A.openPrivateChannel({ recipientIds: n, navigateToChannel: !0 });
                    } catch (e) {
                        return;
                    }
                await (0, p.A)({
                    targetApplicationId: v,
                    locationObject: s,
                    channelId: e,
                    analyticsLocations: S,
                    componentId: d,
                    commandOrigin: f,
                    sectionName: g,
                    source: _,
                    customId: C,
                    referrerId: E,
                    onConfirmActivityLaunchChecksAlertOpen: I,
                }).then((e) => e && o?.({ applicationId: v }));
            };
        case 1:
            return async () => {
                h.Ay.isLaunchingActivity() ||
                    (await (0, m.A)({
                        applicationId: v,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: s,
                        analyticsLocations: S,
                        componentId: d,
                        sectionName: g,
                        source: _,
                        customId: C,
                        referrerId: E,
                    }).then((e) => e && o?.({ applicationId: v })));
            };
        case 2:
            return () => {
                h.Ay.isLaunchingActivity() ||
                    (null != b && a.leaveActivity({ location: b.location, applicationId: v }),
                    o?.({ applicationId: v }));
            };
    }
}
