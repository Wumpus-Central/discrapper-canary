n.d(t, {
    Ay: () => I,
    Hq: () => C,
    l$: () => T,
    o6: () => v,
    wK: () => N,
}),
    n(938796),
    n(747238),
    n(812715);
var r = n(665260),
    i = n(308528),
    a = n(155718),
    s = n(688810),
    o = n(429913),
    l = n(625180),
    c = n(207371),
    u = n(723702),
    d = n(933958),
    f = n(447031),
    p = n(956549),
    _ = n(685399),
    h = n(969151),
    m = n(847381),
    g = n(435582),
    E = n(902439),
    b = n(620148),
    y = n(283488),
    O = n(360469),
    A = n(652215),
    v = (function (e) {
        return (e[(e.START = 0)] = "START"), (e[(e.JOIN = 1)] = "JOIN"), (e[(e.LEAVE = 2)] = "LEAVE"), e;
    })({});
let S = 250;
function I(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: r,
            onActivityItemSelected: i,
            embeddedActivitiesManager: s,
            assetNames: o = ["embedded_cover"],
            backgroundResolution: l = S,
            launchingComponentId: c,
            commandOrigin: d,
            source: f,
        } = e,
        { application: p, activity: h } = t,
        E = h.client_platform_config[(0, m.A)((0, u.getOS)())],
        b = Date.now(),
        O =
            null != E.label_until &&
            b < Date.parse(E.label_until) &&
            null != E.label_from &&
            b > Date.parse(E.label_from),
        A = (0, y.A)({
            applicationId: p.id,
            size: l,
            names: o,
            format: "webp",
        }),
        v = null != h.activity_preview_video_asset_id ? (0, g.A)(p.id, h.activity_preview_video_asset_id) : null,
        I = (0, _.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        R = C({
            context: n,
            applicationId: p.id,
        }),
        w = N({
            application: t.application,
            context: n,
            locationObject: r,
            embeddedActivitiesManager: s,
            onActivityItemSelectedProp: i,
            launchingComponentId: c,
            commandOrigin: d,
            source: f,
        }),
        P = T(p, t.activity);
    return {
        imageBackground: A,
        videoUrl: v,
        joinableEmbeddedApp: I,
        activityAction: R,
        onActivityItemSelected: w,
        labelType: O ? E.label_type : a.Hr.NONE,
        staffReleasePhase: P,
    };
}
function T(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, r.Lt)(i, A.gfo.EMBEDDED_RELEASED) || (0, r.Lt)(i, A.gfo.EMBEDDED_FIRST_PARTY))) return;
    let a = t.client_platform_config[(0, m.A)((0, u.getOS)())].release_phase;
    return O.qG.includes(a) ? a.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function C(e) {
    let { context: t, applicationId: n, fetchesApplication: r = !0 } = e,
        i = 0,
        a = "channel" === t.type ? t.channel : void 0,
        s = (0, E.A)(),
        l = (0, b.A)({ fetchesApplication: r }),
        c = (0, o.h)(n, r),
        u = (0, _.Ay)(a).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return i;
    let d = (0, h.H)(null == s ? void 0 : s.location);
    return null != a && d === a.id && (null == l ? void 0 : l.id) === c.id ? (i = 2) : null != u && (i = 1), i;
}
function N(e) {
    var t;
    let {
            application: n,
            botUserIdForAppDM: r,
            context: a,
            locationObject: o,
            embeddedActivitiesManager: u,
            onActivityItemSelectedProp: _,
            launchingComponentId: h,
            commandOrigin: m,
            sectionName: g,
            source: b,
            fetchesApplication: y = !0,
            customId: O,
            referrerId: A,
            onConfirmActivityLaunchChecksAlertOpen: v,
        } = e,
        S = null != (t = null == n ? void 0 : n.id) ? t : "",
        I = C({
            context: a,
            applicationId: S,
            fetchesApplication: y,
        }),
        { analyticsLocations: T } = (0, s.Ay)(),
        N = (0, E.A)(),
        R = (0, c.e)(n);
    if (null == n)
        return () => {
            null == _ || _({ applicationId: "" });
        };
    switch (I) {
        case 0:
            return async () => {
                if (R) {
                    try {
                        await l.A.launchFrame({ applicationId: S }), null == _ || _({ applicationId: S });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === a.type ? a.channel.id : void 0;
                if (null != r)
                    try {
                        e = await i.A.openPrivateChannel({
                            recipientIds: r,
                            navigateToChannel: !0,
                        });
                    } catch (e) {
                        return;
                    }
                await (0, p.A)({
                    targetApplicationId: S,
                    locationObject: o,
                    channelId: e,
                    analyticsLocations: T,
                    componentId: h,
                    commandOrigin: m,
                    sectionName: g,
                    source: b,
                    customId: O,
                    referrerId: A,
                    onConfirmActivityLaunchChecksAlertOpen: v,
                }).then((e) => e && (null == _ ? void 0 : _({ applicationId: S })));
            };
        case 1:
            return async () => {
                d.Ay.isLaunchingActivity() ||
                    (await (0, f.A)({
                        applicationId: S,
                        activityChannelId: "channel" === a.type ? a.channel.id : void 0,
                        locationObject: o,
                        analyticsLocations: T,
                        componentId: h,
                        sectionName: g,
                        source: b,
                        customId: O,
                        referrerId: A,
                    }).then((e) => e && (null == _ ? void 0 : _({ applicationId: S }))));
            };
        case 2:
            return () => {
                d.Ay.isLaunchingActivity() ||
                    (null != N &&
                        u.leaveActivity({
                            location: N.location,
                            applicationId: S,
                        }),
                    null == _ || _({ applicationId: S }));
            };
    }
}
