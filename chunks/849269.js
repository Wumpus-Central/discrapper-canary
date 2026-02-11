"use strict";
n.d(t, { Ay: () => C, Hq: () => b, l$: () => N, o6: () => y, wK: () => R });
var r = n(308528),
    i = n(155718),
    a = n(688810),
    s = n(429913),
    o = n(20015),
    l = n(625180),
    u = n(207371),
    c = n(723702),
    d = n(933958),
    _ = n(447031),
    f = n(956549),
    p = n(685399),
    h = n(969151),
    m = n(847381),
    g = n(435582),
    E = n(902439),
    A = n(620148),
    I = n(283488),
    T = n(360469),
    S = n(652215),
    y = (function (e) {
        return (e[(e.START = 0)] = "START"), (e[(e.JOIN = 1)] = "JOIN"), (e[(e.LEAVE = 2)] = "LEAVE"), e;
    })({});
let v = 250;
function C(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: r,
            onActivityItemSelected: a,
            embeddedActivitiesManager: s,
            assetNames: o = ["embedded_cover"],
            backgroundResolution: l = v,
            launchingComponentId: u,
            commandOrigin: d,
            source: _,
        } = e,
        { application: f, activity: h } = t,
        E = h.client_platform_config[(0, m.A)((0, c.getOS)())],
        A = Date.now(),
        T =
            null != E.label_until &&
            A < Date.parse(E.label_until) &&
            null != E.label_from &&
            A > Date.parse(E.label_from),
        S = (0, I.A)({ applicationId: f.id, size: l, names: o, format: "webp" }),
        y = null != h.activity_preview_video_asset_id ? (0, g.A)(f.id, h.activity_preview_video_asset_id) : null,
        C = (0, p.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        O = b({ context: n, applicationId: f.id }),
        D = R({
            application: t.application,
            context: n,
            locationObject: r,
            embeddedActivitiesManager: s,
            onActivityItemSelectedProp: a,
            launchingComponentId: u,
            commandOrigin: d,
            source: _,
        }),
        L = N(f, t.activity);
    return {
        imageBackground: S,
        videoUrl: y,
        joinableEmbeddedApp: C,
        activityAction: O,
        onActivityItemSelected: D,
        labelType: T ? E.label_type : i.Hr.NONE,
        staffReleasePhase: L,
    };
}
function N(e, t) {
    if (!((0, o.n)(e, S.gfo.EMBEDDED_RELEASED) || (0, o.n)(e, S.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, m.A)((0, c.getOS)())].release_phase;
    return T.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function b(e) {
    let { context: t, applicationId: n, fetchesApplication: r = !0 } = e,
        i = 0,
        a = "channel" === t.type ? t.channel : void 0,
        o = (0, E.A)(),
        l = (0, A.A)({ fetchesApplication: r }),
        u = (0, s.h)(n, r),
        c = (0, p.Ay)(a).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return i;
    let d = (0, h.H)(o?.location);
    return null != a && d === a.id && l?.id === u.id ? (i = 2) : null != c && (i = 1), i;
}
function R(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: s,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: c,
            launchingComponentId: p,
            commandOrigin: h,
            sectionName: m,
            source: g,
            fetchesApplication: A = !0,
            customId: I,
            referrerId: T,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        y = t?.id ?? "",
        v = b({ context: i, applicationId: y, fetchesApplication: A }),
        { analyticsLocations: C } = (0, a.Ay)(),
        N = (0, E.A)(),
        R = (0, u.e)(t);
    if (null == t)
        return () => {
            c?.({ applicationId: "" });
        };
    switch (v) {
        case 0:
            return async () => {
                if (R) {
                    try {
                        await l.A.launchFrame({ applicationId: y }), c?.({ applicationId: y });
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
                await (0, f.A)({
                    targetApplicationId: y,
                    locationObject: s,
                    channelId: e,
                    analyticsLocations: C,
                    componentId: p,
                    commandOrigin: h,
                    sectionName: m,
                    source: g,
                    customId: I,
                    referrerId: T,
                    onConfirmActivityLaunchChecksAlertOpen: S,
                }).then((e) => e && c?.({ applicationId: y }));
            };
        case 1:
            return async () => {
                d.Ay.isLaunchingActivity() ||
                    (await (0, _.A)({
                        applicationId: y,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: s,
                        analyticsLocations: C,
                        componentId: p,
                        sectionName: m,
                        source: g,
                        customId: I,
                        referrerId: T,
                    }).then((e) => e && c?.({ applicationId: y })));
            };
        case 2:
            return () => {
                d.Ay.isLaunchingActivity() ||
                    (null != N && o.leaveActivity({ location: N.location, applicationId: y }),
                    c?.({ applicationId: y }));
            };
    }
}
