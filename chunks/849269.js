n.d(t, { Ay: () => S, Hq: () => L, l$: () => w, o6: () => C, wK: () => P });
var i,
    a = n(308528),
    l = n(155718),
    o = n(688810),
    c = n(429913),
    r = n(20015),
    d = n(625180),
    p = n(207371),
    u = n(723702),
    s = n(933958),
    A = n(62583),
    _ = n(956549),
    E = n(685399),
    h = n(969151),
    m = n(847381),
    y = n(435582),
    f = n(902439),
    v = n(620148),
    I = n(283488),
    b = n(818023),
    g = n(652215),
    T = n(165610),
    C = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function S(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: a,
            embeddedActivitiesManager: o,
            assetNames: c = ["embedded_cover"],
            backgroundResolution: r = 250,
            launchingComponentId: d,
            commandOrigin: p,
            source: s,
        } = e,
        { application: A, activity: _ } = t,
        h = _.client_platform_config[(0, m.A)((0, u.getOS)())],
        f = Date.now(),
        v =
            null != h.label_until &&
            f < Date.parse(h.label_until) &&
            null != h.label_from &&
            f > Date.parse(h.label_from),
        b = (0, I.A)({ applicationId: A.id, size: r, names: c, format: "webp" }),
        g = null != _.activity_preview_video_asset_id ? (0, y.A)(A.id, _.activity_preview_video_asset_id) : null,
        T = (0, E.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return A.id === t.applicationId;
        }),
        C = L({ context: n, applicationId: A.id }),
        S = P({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: a,
            launchingComponentId: d,
            commandOrigin: p,
            source: s,
        }),
        D = w(A, t.activity);
    return {
        imageBackground: b,
        videoUrl: g,
        joinableEmbeddedApp: T,
        activityAction: C,
        onActivityItemSelected: S,
        labelType: v ? h.label_type : l.Hr.NONE,
        staffReleasePhase: D,
    };
}
function w(e, t) {
    if (!((0, r.n)(e, g.gfo.EMBEDDED_RELEASED) || (0, r.n)(e, g.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, m.A)((0, u.getOS)())].release_phase;
    return b.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function L(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        a = 0,
        l = "channel" === t.type ? t.channel : void 0,
        o = (0, f.A)(),
        r = (0, v.A)({ fetchesApplication: i }),
        d = (0, c.h)(n, i),
        p = (0, E.Ay)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != d && d.id === t.applicationId;
        });
    if (null == d) return a;
    let u = (0, h.H)(o?.location);
    return (null != l && u === l.id && r?.id === d.id ? (a = 2) : null != p && (a = 1), a);
}
function P(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: l,
            embeddedActivitiesManager: c,
            onActivityItemSelectedProp: r,
            launchingComponentId: u,
            commandOrigin: E,
            sectionName: h,
            source: m,
            fetchesApplication: y = !0,
            customId: v,
            referrerId: I,
            onConfirmActivityLaunchChecksAlertOpen: b,
        } = e,
        g = t?.id ?? "",
        C = L({ context: i, applicationId: g, fetchesApplication: y }),
        { analyticsLocations: S } = (0, o.Ay)(),
        w = (0, f.A)(),
        P = (0, p.x)(t);
    if (null == t)
        return () => {
            r?.({ applicationId: "" });
        };
    switch (C) {
        case 0:
            return async () => {
                if (P) {
                    try {
                        (await d.A.launchFrame({
                            applicationId: g,
                            surface: T.sd,
                            analyticsContext: {
                                isStart: !0,
                                analyticsLocations: S,
                                source: m,
                                channelId: "channel" === i.type ? i.channel.id : void 0,
                            },
                        }),
                            r?.({ applicationId: g }));
                    } catch (e) {}
                    return;
                }
                let e = "channel" === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await a.A.openPrivateChannel({ recipientIds: n, navigateToChannel: !0 });
                    } catch (e) {
                        return;
                    }
                await (0, _.A)({
                    targetApplicationId: g,
                    locationObject: l,
                    channelId: e,
                    analyticsLocations: S,
                    componentId: u,
                    commandOrigin: E,
                    sectionName: h,
                    source: m,
                    customId: v,
                    referrerId: I,
                    onConfirmActivityLaunchChecksAlertOpen: b,
                }).then((e) => e && r?.({ applicationId: g }));
            };
        case 1:
            return async () => {
                s.Ay.isLaunchingActivity() ||
                    (await (0, A.A)({
                        applicationId: g,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: S,
                        componentId: u,
                        sectionName: h,
                        source: m,
                        customId: v,
                        referrerId: I,
                    }).then((e) => e && r?.({ applicationId: g })));
            };
        case 2:
            return () => {
                s.Ay.isLaunchingActivity() ||
                    (null != w && c.leaveActivity({ location: w.location, applicationId: g }),
                    r?.({ applicationId: g }));
            };
    }
}
