"use strict";
n.d(t, { Ay: () => R, Hq: () => D, l$: () => L, o6: () => O, wK: () => y });
var i,
    r = n(308528),
    a = n(155718),
    s = n(688810),
    l = n(429913),
    o = n(20015),
    d = n(113854),
    c = n(207371),
    u = n(723702),
    _ = n(933958),
    E = n(62583),
    A = n(956549),
    h = n(685399),
    I = n(969151),
    f = n(847381),
    p = n(435582),
    T = n(902439),
    m = n(620148),
    g = n(283488),
    S = n(360469),
    N = n(652215),
    C = n(165610),
    O = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function R(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: r,
            embeddedActivitiesManager: s,
            assetNames: l = ["embedded_cover"],
            backgroundResolution: o = 250,
            launchingComponentId: d,
            commandOrigin: c,
            source: _,
        } = e,
        { application: E, activity: A } = t,
        I = A.client_platform_config[(0, f.A)((0, u.getOS)())],
        T = Date.now(),
        m =
            null != I.label_until &&
            T < Date.parse(I.label_until) &&
            null != I.label_from &&
            T > Date.parse(I.label_from),
        S = (0, g.A)({ applicationId: E.id, size: o, names: l, format: "webp" }),
        N = null != A.activity_preview_video_asset_id ? (0, p.A)(E.id, A.activity_preview_video_asset_id) : null,
        C = (0, h.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return E.id === t.applicationId;
        }),
        O = D({ context: n, applicationId: E.id }),
        R = y({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: s,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: c,
            source: _,
        }),
        v = L(E, t.activity);
    return {
        imageBackground: S,
        videoUrl: N,
        joinableEmbeddedApp: C,
        activityAction: O,
        onActivityItemSelected: R,
        labelType: m ? I.label_type : a.Hr.NONE,
        staffReleasePhase: v,
    };
}
function L(e, t) {
    if (!((0, o.n)(e, N.gfo.EMBEDDED_RELEASED) || (0, o.n)(e, N.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, f.A)((0, u.getOS)())].release_phase;
    return S.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function D(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        a = "channel" === t.type ? t.channel : void 0,
        s = (0, T.A)(),
        o = (0, m.A)({ fetchesApplication: i }),
        d = (0, l.h)(n, i),
        c = (0, h.Ay)(a).find((e) => {
            let { embeddedActivity: t } = e;
            return null != d && d.id === t.applicationId;
        });
    if (null == d) return r;
    let u = (0, I.H)(s?.location);
    return null != a && u === a.id && o?.id === d.id ? (r = 2) : null != c && (r = 1), r;
}
function y(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: a,
            embeddedActivitiesManager: l,
            onActivityItemSelectedProp: o,
            launchingComponentId: u,
            commandOrigin: h,
            sectionName: I,
            source: f,
            fetchesApplication: p = !0,
            customId: m,
            referrerId: g,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        N = t?.id ?? "",
        O = D({ context: i, applicationId: N, fetchesApplication: p }),
        { analyticsLocations: R } = (0, s.Ay)(),
        L = (0, T.A)(),
        y = (0, c.x)(t);
    if (null == t)
        return () => {
            o?.({ applicationId: "" });
        };
    switch (O) {
        case 0:
            return async () => {
                if (y) {
                    try {
                        await d.A.launchFrame({ applicationId: N, surface: C.sd }), o?.({ applicationId: N });
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
                await (0, A.A)({
                    targetApplicationId: N,
                    locationObject: a,
                    channelId: e,
                    analyticsLocations: R,
                    componentId: u,
                    commandOrigin: h,
                    sectionName: I,
                    source: f,
                    customId: m,
                    referrerId: g,
                    onConfirmActivityLaunchChecksAlertOpen: S,
                }).then((e) => e && o?.({ applicationId: N }));
            };
        case 1:
            return async () => {
                _.Ay.isLaunchingActivity() ||
                    (await (0, E.A)({
                        applicationId: N,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: a,
                        analyticsLocations: R,
                        componentId: u,
                        sectionName: I,
                        source: f,
                        customId: m,
                        referrerId: g,
                    }).then((e) => e && o?.({ applicationId: N })));
            };
        case 2:
            return () => {
                _.Ay.isLaunchingActivity() ||
                    (null != L && l.leaveActivity({ location: L.location, applicationId: N }),
                    o?.({ applicationId: N }));
            };
    }
}
