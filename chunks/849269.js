"use strict";
n.d(t, { Ay: () => C, Hq: () => N, l$: () => b, o6: () => S, wK: () => R }), n(938796);
var r = n(665260),
    i = n(308528),
    a = n(155718),
    s = n(688810),
    o = n(429913),
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
    y = n(652215),
    S = (function (e) {
        return (e[(e.START = 0)] = "START"), (e[(e.JOIN = 1)] = "JOIN"), (e[(e.LEAVE = 2)] = "LEAVE"), e;
    })({});
let v = 250;
function C(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: r,
            onActivityItemSelected: i,
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
        y = (0, I.A)({ applicationId: f.id, size: l, names: o, format: "webp" }),
        S = null != h.activity_preview_video_asset_id ? (0, g.A)(f.id, h.activity_preview_video_asset_id) : null,
        C = (0, p.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        O = N({ context: n, applicationId: f.id }),
        D = R({
            application: t.application,
            context: n,
            locationObject: r,
            embeddedActivitiesManager: s,
            onActivityItemSelectedProp: i,
            launchingComponentId: u,
            commandOrigin: d,
            source: _,
        }),
        L = b(f, t.activity);
    return {
        imageBackground: y,
        videoUrl: S,
        joinableEmbeddedApp: C,
        activityAction: O,
        onActivityItemSelected: D,
        labelType: T ? E.label_type : a.Hr.NONE,
        staffReleasePhase: L,
    };
}
function b(e, t) {
    let n = e.flags ?? 0;
    if (!((0, r.Lt)(n, y.gfo.EMBEDDED_RELEASED) || (0, r.Lt)(n, y.gfo.EMBEDDED_FIRST_PARTY))) return;
    let i = t.client_platform_config[(0, m.A)((0, c.getOS)())].release_phase;
    return T.qG.includes(i) ? i.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function N(e) {
    let { context: t, applicationId: n, fetchesApplication: r = !0 } = e,
        i = 0,
        a = "channel" === t.type ? t.channel : void 0,
        s = (0, E.A)(),
        l = (0, A.A)({ fetchesApplication: r }),
        u = (0, o.h)(n, r),
        c = (0, p.Ay)(a).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return i;
    let d = (0, h.H)(s?.location);
    return null != a && d === a.id && l?.id === u.id ? (i = 2) : null != c && (i = 1), i;
}
function R(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: r,
            locationObject: a,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: c,
            launchingComponentId: p,
            commandOrigin: h,
            sectionName: m,
            source: g,
            fetchesApplication: A = !0,
            customId: I,
            referrerId: T,
            onConfirmActivityLaunchChecksAlertOpen: y,
        } = e,
        S = t?.id ?? "",
        v = N({ context: r, applicationId: S, fetchesApplication: A }),
        { analyticsLocations: C } = (0, s.Ay)(),
        b = (0, E.A)(),
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
                        await l.A.launchFrame({ applicationId: S }), c?.({ applicationId: S });
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
                await (0, f.A)({
                    targetApplicationId: S,
                    locationObject: a,
                    channelId: e,
                    analyticsLocations: C,
                    componentId: p,
                    commandOrigin: h,
                    sectionName: m,
                    source: g,
                    customId: I,
                    referrerId: T,
                    onConfirmActivityLaunchChecksAlertOpen: y,
                }).then((e) => e && c?.({ applicationId: S }));
            };
        case 1:
            return async () => {
                d.Ay.isLaunchingActivity() ||
                    (await (0, _.A)({
                        applicationId: S,
                        activityChannelId: "channel" === r.type ? r.channel.id : void 0,
                        locationObject: a,
                        analyticsLocations: C,
                        componentId: p,
                        sectionName: m,
                        source: g,
                        customId: I,
                        referrerId: T,
                    }).then((e) => e && c?.({ applicationId: S })));
            };
        case 2:
            return () => {
                d.Ay.isLaunchingActivity() ||
                    (null != b && o.leaveActivity({ location: b.location, applicationId: S }),
                    c?.({ applicationId: S }));
            };
    }
}
