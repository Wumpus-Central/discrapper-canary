n.d(t, { Ay: () => w, Hq: () => P, l$: () => L, o6: () => S, wK: () => D });
var i,
    a = n(308528),
    l = n(155718),
    o = n(688810),
    c = n(429913),
    r = n(20015),
    d = n(577483),
    p = n(625180),
    u = n(25451),
    s = n(723702),
    A = n(933958),
    _ = n(62583),
    E = n(956549),
    h = n(685399),
    y = n(969151),
    m = n(847381),
    f = n(435582),
    v = n(902439),
    I = n(620148),
    b = n(283488),
    g = n(818023),
    T = n(652215),
    C = n(165610),
    S = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function w(e) {
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
            source: u,
        } = e,
        { application: A, activity: _ } = t,
        E = _.client_platform_config[(0, m.A)((0, s.getOS)())],
        y = Date.now(),
        v =
            null != E.label_until &&
            y < Date.parse(E.label_until) &&
            null != E.label_from &&
            y > Date.parse(E.label_from),
        I = (0, b.A)({ applicationId: A.id, size: r, names: c, format: "webp" }),
        g = null != _.activity_preview_video_asset_id ? (0, f.A)(A.id, _.activity_preview_video_asset_id) : null,
        T = (0, h.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return A.id === t.applicationId;
        }),
        C = P({ context: n, applicationId: A.id }),
        S = D({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: a,
            launchingComponentId: d,
            commandOrigin: p,
            source: u,
        }),
        w = L(A, t.activity);
    return {
        imageBackground: I,
        videoUrl: g,
        joinableEmbeddedApp: T,
        activityAction: C,
        onActivityItemSelected: S,
        labelType: v ? E.label_type : l.Hr.NONE,
        staffReleasePhase: w,
    };
}
function L(e, t) {
    if (!((0, r.n)(e, T.gfo.EMBEDDED_RELEASED) || (0, r.n)(e, T.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, m.A)((0, s.getOS)())].release_phase;
    return g.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function P(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        a = 0,
        l = "channel" === t.type ? t.channel : void 0,
        o = (0, v.A)(),
        r = (0, I.A)({ fetchesApplication: i }),
        d = (0, c.h)(n, i),
        p = (0, h.Ay)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != d && d.id === t.applicationId;
        });
    if (null == d) return a;
    let u = (0, y.H)(o?.location);
    return (null != l && u === l.id && r?.id === d.id ? (a = 2) : null != p && (a = 1), a);
}
function D(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: l,
            embeddedActivitiesManager: c,
            onActivityItemSelectedProp: r,
            launchingComponentId: s,
            commandOrigin: h,
            sectionName: y,
            source: m,
            fetchesApplication: f = !0,
            customId: I,
            referrerId: b,
            onConfirmActivityLaunchChecksAlertOpen: g,
        } = e,
        T = t?.id ?? "",
        S = P({ context: i, applicationId: T, fetchesApplication: f }),
        { analyticsLocations: w } = (0, o.Ay)(),
        L = (0, v.A)(),
        D = (0, u.X)(t);
    if (null == t)
        return () => {
            r?.({ applicationId: "" });
        };
    switch (S) {
        case 0:
            return async () => {
                if (D) {
                    (0, d.A)("channel" === i.type ? i.channel.id : void 0);
                    try {
                        (await p.A.launchFrame({
                            applicationId: T,
                            surface: C.sd,
                            analyticsContext: {
                                isStart: !0,
                                analyticsLocations: w,
                                source: m,
                                channelId: "channel" === i.type ? i.channel.id : void 0,
                            },
                        }),
                            r?.({ applicationId: T }));
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
                await (0, E.A)({
                    targetApplicationId: T,
                    locationObject: l,
                    channelId: e,
                    analyticsLocations: w,
                    componentId: s,
                    commandOrigin: h,
                    sectionName: y,
                    source: m,
                    customId: I,
                    referrerId: b,
                    onConfirmActivityLaunchChecksAlertOpen: g,
                }).then((e) => e && r?.({ applicationId: T }));
            };
        case 1:
            return async () => {
                A.Ay.isLaunchingActivity() ||
                    (await (0, _.A)({
                        applicationId: T,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: w,
                        componentId: s,
                        sectionName: y,
                        source: m,
                        customId: I,
                        referrerId: b,
                    }).then((e) => e && r?.({ applicationId: T })));
            };
        case 2:
            return () => {
                A.Ay.isLaunchingActivity() ||
                    (null != L && c.leaveActivity({ location: L.location, applicationId: T }),
                    r?.({ applicationId: T }));
            };
    }
}
