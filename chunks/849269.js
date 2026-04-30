n.d(t, { Ay: () => v, Hq: () => N, l$: () => R, o6: () => T, wK: () => M });
var i,
    l = n(308528),
    r = n(155718),
    s = n(688810),
    a = n(429913),
    o = n(20015),
    u = n(625180),
    d = n(375802),
    c = n(723702),
    h = n(933958),
    p = n(62583),
    m = n(956549),
    f = n(685399),
    E = n(969151),
    g = n(847381),
    A = n(435582),
    _ = n(902439),
    S = n(620148),
    I = n(283488),
    y = n(360469),
    C = n(652215),
    T = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function v(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: l,
            embeddedActivitiesManager: s,
            assetNames: a = ["embedded_cover"],
            backgroundResolution: o = 250,
            launchingComponentId: u,
            commandOrigin: d,
            source: h,
        } = e,
        { application: p, activity: m } = t,
        E = m.client_platform_config[(0, g.A)((0, c.getOS)())],
        _ = Date.now(),
        S =
            null != E.label_until &&
            _ < Date.parse(E.label_until) &&
            null != E.label_from &&
            _ > Date.parse(E.label_from),
        y = (0, I.A)({ applicationId: p.id, size: o, names: a, format: "webp" }),
        C = null != m.activity_preview_video_asset_id ? (0, A.A)(p.id, m.activity_preview_video_asset_id) : null,
        T = (0, f.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        v = N({ context: n, applicationId: p.id }),
        b = M({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: s,
            onActivityItemSelectedProp: l,
            launchingComponentId: u,
            commandOrigin: d,
            source: h,
        }),
        w = R(p, t.activity);
    return {
        imageBackground: y,
        videoUrl: C,
        joinableEmbeddedApp: T,
        activityAction: v,
        onActivityItemSelected: b,
        labelType: S ? E.label_type : r.Hr.NONE,
        staffReleasePhase: w,
    };
}
function R(e, t) {
    if (!((0, o.n)(e, C.gfo.EMBEDDED_RELEASED) || (0, o.n)(e, C.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, g.A)((0, c.getOS)())].release_phase;
    return y.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function N(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        r = "channel" === t.type ? t.channel : void 0,
        s = (0, _.A)(),
        o = (0, S.A)({ fetchesApplication: i }),
        u = (0, a.h)(n, i),
        d = (0, f.Ay)(r).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return l;
    let c = (0, E.H)(s?.location);
    return null != r && c === r.id && o?.id === u.id ? (l = 2) : null != d && (l = 1), l;
}
function M(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: r,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: o,
            launchingComponentId: c,
            commandOrigin: f,
            sectionName: E,
            source: g,
            fetchesApplication: A = !0,
            customId: S,
            referrerId: I,
            onConfirmActivityLaunchChecksAlertOpen: y,
        } = e,
        C = t?.id ?? "",
        T = N({ context: i, applicationId: C, fetchesApplication: A }),
        { analyticsLocations: v } = (0, s.Ay)(),
        R = (0, _.A)(),
        M = (0, d.e)(t);
    if (null == t)
        return () => {
            o?.({ applicationId: "" });
        };
    switch (T) {
        case 0:
            return async () => {
                if (M) {
                    try {
                        await u.A.launchFrame({ applicationId: C }), o?.({ applicationId: C });
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
                await (0, m.A)({
                    targetApplicationId: C,
                    locationObject: r,
                    channelId: e,
                    analyticsLocations: v,
                    componentId: c,
                    commandOrigin: f,
                    sectionName: E,
                    source: g,
                    customId: S,
                    referrerId: I,
                    onConfirmActivityLaunchChecksAlertOpen: y,
                }).then((e) => e && o?.({ applicationId: C }));
            };
        case 1:
            return async () => {
                h.Ay.isLaunchingActivity() ||
                    (await (0, p.A)({
                        applicationId: C,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: r,
                        analyticsLocations: v,
                        componentId: c,
                        sectionName: E,
                        source: g,
                        customId: S,
                        referrerId: I,
                    }).then((e) => e && o?.({ applicationId: C })));
            };
        case 2:
            return () => {
                h.Ay.isLaunchingActivity() ||
                    (null != R && a.leaveActivity({ location: R.location, applicationId: C }),
                    o?.({ applicationId: C }));
            };
    }
}
