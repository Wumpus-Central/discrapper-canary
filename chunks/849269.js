n.d(t, { Ay: () => L, Hq: () => D, l$: () => P, o6: () => w, wK: () => N });
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
    h = n(988534),
    y = n(685399),
    f = n(969151),
    m = n(847381),
    v = n(435582),
    I = n(902439),
    b = n(620148),
    g = n(283488),
    T = n(818023),
    C = n(652215),
    S = n(165610),
    w = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function L(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: a,
            assetNames: o = ["embedded_cover"],
            backgroundResolution: c = 250,
            launchingComponentId: r,
            commandOrigin: d,
            source: p,
        } = e,
        { application: u, activity: A } = t,
        _ = A.client_platform_config[(0, m.A)((0, s.getOS)())],
        E = Date.now(),
        h =
            null != _.label_until &&
            E < Date.parse(_.label_until) &&
            null != _.label_from &&
            E > Date.parse(_.label_from),
        f = (0, g.A)({ applicationId: u.id, size: c, names: o, format: "webp" }),
        I = null != A.activity_preview_video_asset_id ? (0, v.A)(u.id, A.activity_preview_video_asset_id) : null,
        b = (0, y.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return u.id === t.applicationId;
        }),
        T = D({ context: n, applicationId: u.id }),
        C = N({
            application: t.application,
            context: n,
            locationObject: i,
            onActivityItemSelectedProp: a,
            launchingComponentId: r,
            commandOrigin: d,
            source: p,
        }),
        S = P(u, t.activity);
    return {
        imageBackground: f,
        videoUrl: I,
        joinableEmbeddedApp: b,
        activityAction: T,
        onActivityItemSelected: C,
        labelType: h ? _.label_type : l.Hr.NONE,
        staffReleasePhase: S,
    };
}
function P(e, t) {
    if (!((0, r.n)(e, C.gfo.EMBEDDED_RELEASED) || (0, r.n)(e, C.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, m.A)((0, s.getOS)())].release_phase;
    return T.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function D(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        a = 0,
        l = "channel" === t.type ? t.channel : void 0,
        o = (0, I.A)(),
        r = (0, b.A)({ fetchesApplication: i }),
        d = (0, c.h)(n, i),
        p = (0, y.Ay)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != d && d.id === t.applicationId;
        });
    if (null == d) return a;
    let u = (0, f.H)(o?.location);
    return (null != l && u === l.id && r?.id === d.id ? (a = 2) : null != p && (a = 1), a);
}
function N(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: l,
            onActivityItemSelectedProp: c,
            launchingComponentId: r,
            commandOrigin: s,
            sectionName: y,
            source: f,
            fetchesApplication: m = !0,
            customId: v,
            referrerId: b,
            onConfirmActivityLaunchChecksAlertOpen: g,
        } = e,
        T = t?.id ?? "",
        C = D({ context: i, applicationId: T, fetchesApplication: m }),
        { analyticsLocations: w } = (0, o.Ay)(),
        L = (0, I.A)(),
        P = (0, u.X)(t);
    if (null == t)
        return () => {
            c?.({ applicationId: "" });
        };
    switch (C) {
        case 0:
            return async () => {
                if (P) {
                    (0, d.A)("channel" === i.type ? i.channel.id : void 0);
                    try {
                        (await p.A.launchFrame({
                            applicationId: T,
                            surface: S.sd,
                            analyticsContext: {
                                isStart: !0,
                                analyticsLocations: w,
                                source: f,
                                channelId: "channel" === i.type ? i.channel.id : void 0,
                            },
                        }),
                            c?.({ applicationId: T }));
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
                    componentId: r,
                    commandOrigin: s,
                    sectionName: y,
                    source: f,
                    customId: v,
                    referrerId: b,
                    onConfirmActivityLaunchChecksAlertOpen: g,
                }).then((e) => e && c?.({ applicationId: T }));
            };
        case 1:
            return async () => {
                A.Ay.isLaunchingActivity() ||
                    (await (0, _.A)({
                        applicationId: T,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: w,
                        componentId: r,
                        sectionName: y,
                        source: f,
                        customId: v,
                        referrerId: b,
                    }).then((e) => e && c?.({ applicationId: T })));
            };
        case 2:
            return () => {
                A.Ay.isLaunchingActivity() ||
                    (null != L && (0, h.d)({ location: L.location, applicationId: T }), c?.({ applicationId: T }));
            };
    }
}
