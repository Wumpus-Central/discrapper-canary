n.d(t, { Ay: () => N, Hq: () => D, l$: () => P, o6: () => L, wK: () => O });
var i,
    a = n(991690),
    l = n(308528),
    o = n(155718),
    c = n(688810),
    r = n(429913),
    d = n(20015),
    p = n(577483),
    u = n(625180),
    s = n(25451),
    A = n(723702),
    h = n(933958),
    _ = n(62583),
    y = n(956549),
    E = n(988534),
    f = n(685399),
    m = n(969151),
    I = n(847381),
    v = n(435582),
    b = n(902439),
    g = n(620148),
    T = n(283488),
    C = n(818023),
    S = n(652215),
    w = n(165610),
    L = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function N(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: a,
            assetNames: l = ["embedded_cover"],
            backgroundResolution: c = 250,
            launchingComponentId: r,
            commandOrigin: d,
            source: p,
        } = e,
        { application: u, activity: s } = t,
        h = s.client_platform_config[(0, I.A)((0, A.getOS)())],
        _ = Date.now(),
        y =
            null != h.label_until &&
            _ < Date.parse(h.label_until) &&
            null != h.label_from &&
            _ > Date.parse(h.label_from),
        E = (0, T.A)({ applicationId: u.id, size: c, names: l, format: "webp" }),
        m = null != s.activity_preview_video_asset_id ? (0, v.A)(u.id, s.activity_preview_video_asset_id) : null,
        b = (0, f.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return u.id === t.applicationId;
        }),
        g = D({ context: n, applicationId: u.id }),
        C = O({
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
        imageBackground: E,
        videoUrl: m,
        joinableEmbeddedApp: b,
        activityAction: g,
        onActivityItemSelected: C,
        labelType: y ? h.label_type : o.Hr.NONE,
        staffReleasePhase: S,
    };
}
function P(e, t) {
    if (!((0, d.n)(e, S.gfo.EMBEDDED_RELEASED) || (0, d.n)(e, S.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, I.A)((0, A.getOS)())].release_phase;
    return C.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function D(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        a = 0,
        l = "channel" === t.type ? t.channel : void 0,
        o = (0, b.A)(),
        c = (0, g.A)({ fetchesApplication: i }),
        d = (0, r.h)(n, i),
        p = (0, f.Ay)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != d && d.id === t.applicationId;
        });
    if (null == d) return a;
    let u = (0, m.H)(o?.location);
    return (null != l && u === l.id && c?.id === d.id ? (a = 2) : null != p && (a = 1), a);
}
function O(e) {
    let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: o,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: A,
            sectionName: f,
            source: m,
            fetchesApplication: I = !0,
            customId: v,
            referrerId: g,
            onConfirmActivityLaunchChecksAlertOpen: T,
        } = e,
        C = t?.id ?? "",
        S = D({ context: i, applicationId: C, fetchesApplication: I }),
        { analyticsLocations: L } = (0, c.Ay)(),
        N = (0, b.A)(),
        P = (0, s.X)(t);
    if (null == t)
        return () => {
            r?.({ applicationId: "" });
        };
    switch (S) {
        case 0:
            return async () => {
                if (P) {
                    (0, p.A)("channel" === i.type ? i.channel.id : void 0);
                    let e = "channel" === i.type ? i.channel.getGuildId() : null;
                    try {
                        (await u.A.launchFrame({
                            applicationId: C,
                            surface:
                                "channel" === i.type && null != e
                                    ? { type: a.U.MAIN, channelId: i.channel.id, guildId: e }
                                    : w.sd,
                            analyticsContext: {
                                isStart: !0,
                                analyticsLocations: L,
                                source: m,
                                channelId: "channel" === i.type ? i.channel.id : void 0,
                            },
                        }),
                            r?.({ applicationId: C }));
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
                await (0, y.A)({
                    targetApplicationId: C,
                    locationObject: o,
                    channelId: e,
                    analyticsLocations: L,
                    componentId: d,
                    commandOrigin: A,
                    sectionName: f,
                    source: m,
                    customId: v,
                    referrerId: g,
                    onConfirmActivityLaunchChecksAlertOpen: T,
                }).then((e) => e && r?.({ applicationId: C }));
            };
        case 1:
            return async () => {
                h.Ay.isLaunchingActivity() ||
                    (await (0, _.A)({
                        applicationId: C,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: o,
                        analyticsLocations: L,
                        componentId: d,
                        sectionName: f,
                        source: m,
                        customId: v,
                        referrerId: g,
                    }).then((e) => e && r?.({ applicationId: C })));
            };
        case 2:
            return () => {
                h.Ay.isLaunchingActivity() ||
                    (null != N && (0, E.d)({ location: N.location, applicationId: C }), r?.({ applicationId: C }));
            };
    }
}
