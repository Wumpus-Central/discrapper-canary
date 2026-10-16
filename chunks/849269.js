t.d(n, { Ay: () => O, Hq: () => M, l$: () => R, o6: () => D, wK: () => U });
var i,
    a = t(991690),
    l = t(308528),
    c = t(155718),
    o = t(688810),
    r = t(429913),
    d = t(20015),
    p = t(568598),
    u = t(198052),
    s = t(577483),
    A = t(625180),
    h = t(25451),
    _ = t(723702),
    y = t(933958),
    E = t(62583),
    f = t(956549),
    m = t(988534),
    I = t(685399),
    v = t(969151),
    g = t(277344),
    b = t(847381),
    T = t(435582),
    C = t(902439),
    S = t(620148),
    w = t(283488),
    L = t(818023),
    P = t(652215),
    N = t(165610),
    D = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function O(e) {
    let {
            activityItem: n,
            context: t,
            locationObject: i,
            onActivityItemSelected: a,
            assetNames: l = ["embedded_cover"],
            backgroundResolution: o = 250,
            launchingComponentId: r,
            commandOrigin: d,
            source: p,
        } = e,
        { application: u, activity: s } = n,
        A = s.client_platform_config[(0, b.A)((0, _.getOS)())],
        h = Date.now(),
        y =
            null != A.label_until &&
            h < Date.parse(A.label_until) &&
            null != A.label_from &&
            h > Date.parse(A.label_from),
        E = (0, w.A)({ applicationId: u.id, size: o, names: l, format: "webp" }),
        f = null != s.activity_preview_video_asset_id ? (0, T.A)(u.id, s.activity_preview_video_asset_id) : null,
        m = (0, I.Ay)("channel" === t.type ? t.channel : void 0).find((e) => {
            let { embeddedActivity: n } = e;
            return u.id === n.applicationId;
        }),
        v = M({ context: t, applicationId: u.id }),
        g = U({
            application: n.application,
            context: t,
            locationObject: i,
            onActivityItemSelectedProp: a,
            launchingComponentId: r,
            commandOrigin: d,
            source: p,
        }),
        C = R(u, n.activity);
    return {
        imageBackground: E,
        videoUrl: f,
        joinableEmbeddedApp: m,
        activityAction: v,
        onActivityItemSelected: g,
        labelType: y ? A.label_type : c.Hr.NONE,
        staffReleasePhase: C,
    };
}
function R(e, n) {
    if (!((0, d.n)(e, P.gfo.EMBEDDED_RELEASED) || (0, d.n)(e, P.gfo.EMBEDDED_FIRST_PARTY))) return;
    let t = n.client_platform_config[(0, b.A)((0, _.getOS)())].release_phase;
    return L.qG.includes(t) ? t.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function M(e) {
    let { context: n, applicationId: t, fetchesApplication: i = !0 } = e,
        a = 0,
        l = "channel" === n.type ? n.channel : void 0,
        c = (0, C.A)(),
        o = (0, S.A)({ fetchesApplication: i }),
        d = (0, r.h)(t, i),
        p = (0, I.Ay)(l).find((e) => {
            let { embeddedActivity: n } = e;
            return null != d && d.id === n.applicationId;
        });
    if (null == d) return a;
    let u = (0, v.H)(c?.location);
    return (null != l && u === l.id && o?.id === d.id ? (a = 2) : null != p && (a = 1), a);
}
function U(e) {
    let {
            application: n,
            botUserIdForAppDM: t,
            context: i,
            locationObject: c,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: _,
            sectionName: I,
            source: v,
            fetchesApplication: b = !0,
            customId: T,
            referrerId: S,
            onConfirmActivityLaunchChecksAlertOpen: w,
        } = e,
        L = n?.id ?? "",
        P = M({ context: i, applicationId: L, fetchesApplication: b }),
        { analyticsLocations: D } = (0, o.Ay)(),
        O = (0, C.A)(),
        R = (0, h.X)(n);
    if (null == n)
        return () => {
            r?.({ applicationId: "" });
        };
    switch (P) {
        case 0:
            return async () => {
                if (R) {
                    (0, s.A)("channel" === i.type ? i.channel.id : void 0);
                    let e = "channel" === i.type ? i.channel.getGuildId() : null;
                    try {
                        let n = await A.A.launchFrame({
                            applicationId: L,
                            surface:
                                "channel" === i.type && null != e
                                    ? { type: a.U.MAIN, channelId: i.channel.id, guildId: e }
                                    : N.sd,
                            analyticsContext: {
                                isStart: !0,
                                analyticsLocations: D,
                                source: v,
                                channelId: "channel" === i.type ? i.channel.id : void 0,
                            },
                        });
                        if ("channel" === i.type) {
                            let e = (0, p.Gg)({ applicationId: L, id: n });
                            null != u.A.getParticipant(i.channel.id, e) && (0, g.A)(i.channel.id, e);
                        }
                        r?.({ applicationId: L });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === i.type ? i.channel.id : void 0;
                if (null != t)
                    try {
                        e = await l.A.openPrivateChannel({ recipientIds: t, navigateToChannel: !0 });
                    } catch (e) {
                        return;
                    }
                await (0, f.A)({
                    targetApplicationId: L,
                    locationObject: c,
                    channelId: e,
                    analyticsLocations: D,
                    componentId: d,
                    commandOrigin: _,
                    sectionName: I,
                    source: v,
                    customId: T,
                    referrerId: S,
                    onConfirmActivityLaunchChecksAlertOpen: w,
                }).then((e) => e && r?.({ applicationId: L }));
            };
        case 1:
            return async () => {
                y.Ay.isLaunchingActivity() ||
                    (await (0, E.A)({
                        applicationId: L,
                        activityChannelId: "channel" === i.type ? i.channel.id : void 0,
                        locationObject: c,
                        analyticsLocations: D,
                        componentId: d,
                        sectionName: I,
                        source: v,
                        customId: T,
                        referrerId: S,
                    }).then((e) => e && r?.({ applicationId: L })));
            };
        case 2:
            return () => {
                y.Ay.isLaunchingActivity() ||
                    (null != O && (0, m.d)({ location: O.location, applicationId: L }), r?.({ applicationId: L }));
            };
    }
}
