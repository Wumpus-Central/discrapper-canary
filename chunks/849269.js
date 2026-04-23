n.d(t, { Ay: () => L, Hq: () => h, l$: () => D, o6: () => m, wK: () => g });
var i,
    r = n(308528),
    a = n(155718),
    s = n(688810),
    _ = n(429913),
    l = n(20015),
    o = n(625180),
    E = n(375802),
    d = n(723702),
    c = n(933958),
    u = n(62583),
    I = n(956549),
    A = n(685399),
    T = n(969151),
    S = n(847381),
    N = n(435582),
    O = n(902439),
    R = n(620148),
    f = n(283488),
    C = n(360469),
    p = n(652215),
    m = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function L(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: r,
            embeddedActivitiesManager: s,
            assetNames: _ = ["embedded_cover"],
            backgroundResolution: l = 250,
            launchingComponentId: o,
            commandOrigin: E,
            source: c,
        } = e,
        { application: u, activity: I } = t,
        T = I.client_platform_config[(0, S.A)((0, d.getOS)())],
        O = Date.now(),
        R =
            null != T.label_until &&
            O < Date.parse(T.label_until) &&
            null != T.label_from &&
            O > Date.parse(T.label_from),
        C = (0, f.A)({ applicationId: u.id, size: l, names: _, format: "webp" }),
        p = null != I.activity_preview_video_asset_id ? (0, N.A)(u.id, I.activity_preview_video_asset_id) : null,
        m = (0, A.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return u.id === t.applicationId;
        }),
        L = h({ context: n, applicationId: u.id }),
        b = g({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: s,
            onActivityItemSelectedProp: r,
            launchingComponentId: o,
            commandOrigin: E,
            source: c,
        }),
        U = D(u, t.activity);
    return {
        imageBackground: C,
        videoUrl: p,
        joinableEmbeddedApp: m,
        activityAction: L,
        onActivityItemSelected: b,
        labelType: R ? T.label_type : a.Hr.NONE,
        staffReleasePhase: U,
    };
}
function D(e, t) {
    if (!((0, l.n)(e, p.gfo.EMBEDDED_RELEASED) || (0, l.n)(e, p.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, S.A)((0, d.getOS)())].release_phase;
    return C.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function h(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        a = "channel" === t.type ? t.channel : void 0,
        s = (0, O.A)(),
        l = (0, R.A)({ fetchesApplication: i }),
        o = (0, _.h)(n, i),
        E = (0, A.Ay)(a).find((e) => {
            let { embeddedActivity: t } = e;
            return null != o && o.id === t.applicationId;
        });
    if (null == o) return r;
    let d = (0, T.H)(s?.location);
    return null != a && d === a.id && l?.id === o.id ? (r = 2) : null != E && (r = 1), r;
}
function g(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: a,
            embeddedActivitiesManager: _,
            onActivityItemSelectedProp: l,
            launchingComponentId: d,
            commandOrigin: A,
            sectionName: T,
            source: S,
            fetchesApplication: N = !0,
            customId: R,
            referrerId: f,
            onConfirmActivityLaunchChecksAlertOpen: C,
        } = e,
        p = t?.id ?? "",
        m = h({ context: i, applicationId: p, fetchesApplication: N }),
        { analyticsLocations: L } = (0, s.Ay)(),
        D = (0, O.A)(),
        g = (0, E.e)(t);
    if (null == t)
        return () => {
            l?.({ applicationId: "" });
        };
    switch (m) {
        case 0:
            return async () => {
                if (g) {
                    try {
                        await o.A.launchFrame({ applicationId: p }), l?.({ applicationId: p });
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
                await (0, I.A)({
                    targetApplicationId: p,
                    locationObject: a,
                    channelId: e,
                    analyticsLocations: L,
                    componentId: d,
                    commandOrigin: A,
                    sectionName: T,
                    source: S,
                    customId: R,
                    referrerId: f,
                    onConfirmActivityLaunchChecksAlertOpen: C,
                }).then((e) => e && l?.({ applicationId: p }));
            };
        case 1:
            return async () => {
                c.Ay.isLaunchingActivity() ||
                    (await (0, u.A)({
                        applicationId: p,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: a,
                        analyticsLocations: L,
                        componentId: d,
                        sectionName: T,
                        source: S,
                        customId: R,
                        referrerId: f,
                    }).then((e) => e && l?.({ applicationId: p })));
            };
        case 2:
            return () => {
                c.Ay.isLaunchingActivity() ||
                    (null != D && _.leaveActivity({ location: D.location, applicationId: p }),
                    l?.({ applicationId: p }));
            };
    }
}
