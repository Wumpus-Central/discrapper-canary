"use strict";
n.d(t, { Ay: () => _, Hq: () => j, l$: () => T, o6: () => N, wK: () => b });
var l,
    i = n(308528),
    s = n(155718),
    r = n(688810),
    a = n(429913),
    o = n(20015),
    u = n(625180),
    c = n(207371),
    d = n(723702),
    h = n(933958),
    m = n(62583),
    f = n(956549),
    p = n(685399),
    g = n(969151),
    x = n(847381),
    A = n(435582),
    C = n(902439),
    E = n(620148),
    I = n(283488),
    y = n(360469),
    S = n(652215),
    v = n(165610),
    N = (((l = {})[(l.START = 0)] = "START"), (l[(l.JOIN = 1)] = "JOIN"), (l[(l.LEAVE = 2)] = "LEAVE"), l);
function _(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: l,
            onActivityItemSelected: i,
            embeddedActivitiesManager: r,
            assetNames: a = ["embedded_cover"],
            backgroundResolution: o = 250,
            launchingComponentId: u,
            commandOrigin: c,
            source: h,
        } = e,
        { application: m, activity: f } = t,
        g = f.client_platform_config[(0, x.A)((0, d.getOS)())],
        C = Date.now(),
        E =
            null != g.label_until &&
            C < Date.parse(g.label_until) &&
            null != g.label_from &&
            C > Date.parse(g.label_from),
        y = (0, I.A)({ applicationId: m.id, size: o, names: a, format: "webp" }),
        S = null != f.activity_preview_video_asset_id ? (0, A.A)(m.id, f.activity_preview_video_asset_id) : null,
        v = (0, p.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return m.id === t.applicationId;
        }),
        N = j({ context: n, applicationId: m.id }),
        _ = b({
            application: t.application,
            context: n,
            locationObject: l,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: i,
            launchingComponentId: u,
            commandOrigin: c,
            source: h,
        }),
        R = T(m, t.activity);
    return {
        imageBackground: y,
        videoUrl: S,
        joinableEmbeddedApp: v,
        activityAction: N,
        onActivityItemSelected: _,
        labelType: E ? g.label_type : s.Hr.NONE,
        staffReleasePhase: R,
    };
}
function T(e, t) {
    if (!((0, o.n)(e, S.gfo.EMBEDDED_RELEASED) || (0, o.n)(e, S.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, x.A)((0, d.getOS)())].release_phase;
    return y.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function j(e) {
    let { context: t, applicationId: n, fetchesApplication: l = !0 } = e,
        i = 0,
        s = "channel" === t.type ? t.channel : void 0,
        r = (0, C.A)(),
        o = (0, E.A)({ fetchesApplication: l }),
        u = (0, a.h)(n, l),
        c = (0, p.Ay)(s).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return i;
    let d = (0, g.H)(r?.location);
    return null != s && d === s.id && o?.id === u.id ? (i = 2) : null != c && (i = 1), i;
}
function b(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: l,
            locationObject: s,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: o,
            launchingComponentId: d,
            commandOrigin: p,
            sectionName: g,
            source: x,
            fetchesApplication: A = !0,
            customId: E,
            referrerId: I,
            onConfirmActivityLaunchChecksAlertOpen: y,
        } = e,
        S = t?.id ?? "",
        N = j({ context: l, applicationId: S, fetchesApplication: A }),
        { analyticsLocations: _ } = (0, r.Ay)(),
        T = (0, C.A)(),
        b = (0, c.x)(t);
    if (null == t)
        return () => {
            o?.({ applicationId: "" });
        };
    switch (N) {
        case 0:
            return async () => {
                if (b) {
                    try {
                        await u.A.launchFrame({ applicationId: S, surface: v.sd }), o?.({ applicationId: S });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === l.type ? l.channel.id : void 0;
                if (null != n)
                    try {
                        e = await i.A.openPrivateChannel({ recipientIds: n, navigateToChannel: !0 });
                    } catch (e) {
                        return;
                    }
                await (0, f.A)({
                    targetApplicationId: S,
                    locationObject: s,
                    channelId: e,
                    analyticsLocations: _,
                    componentId: d,
                    commandOrigin: p,
                    sectionName: g,
                    source: x,
                    customId: E,
                    referrerId: I,
                    onConfirmActivityLaunchChecksAlertOpen: y,
                }).then((e) => e && o?.({ applicationId: S }));
            };
        case 1:
            return async () => {
                h.Ay.isLaunchingActivity() ||
                    (await (0, m.A)({
                        applicationId: S,
                        activityChannelId: "channel" === l.type ? l.channel.id : void 0,
                        locationObject: s,
                        analyticsLocations: _,
                        componentId: d,
                        sectionName: g,
                        source: x,
                        customId: E,
                        referrerId: I,
                    }).then((e) => e && o?.({ applicationId: S })));
            };
        case 2:
            return () => {
                h.Ay.isLaunchingActivity() ||
                    (null != T && a.leaveActivity({ location: T.location, applicationId: S }),
                    o?.({ applicationId: S }));
            };
    }
}
