n.d(t, { Ay: () => g, Hq: () => L, l$: () => T, o6: () => b, wK: () => w });
var i,
    a = n(452295),
    l = n(155718),
    o = n(688810),
    c = n(429913),
    r = n(20015),
    p = n(723702),
    u = n(933958),
    d = n(62583),
    s = n(988534),
    A = n(685399),
    _ = n(969151),
    E = n(847381),
    m = n(435582),
    f = n(902439),
    y = n(620148),
    h = n(283488),
    v = n(818023),
    I = n(652215),
    b = (((i = {})[(i.START = 0)] = "START"), (i[(i.JOIN = 1)] = "JOIN"), (i[(i.LEAVE = 2)] = "LEAVE"), i);
function g(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: a,
            assetNames: o = ["embedded_cover"],
            backgroundResolution: c = 250,
            launchingComponentId: r,
            commandOrigin: u,
            source: d,
        } = e,
        { application: s, activity: _ } = t,
        f = _.client_platform_config[(0, E.A)((0, p.getOS)())],
        y = Date.now(),
        v =
            null != f.label_until &&
            y < Date.parse(f.label_until) &&
            null != f.label_from &&
            y > Date.parse(f.label_from),
        I = (0, h.A)({ applicationId: s.id, size: c, names: o, format: "webp" }),
        b = null != _.activity_preview_video_asset_id ? (0, m.A)(s.id, _.activity_preview_video_asset_id) : null,
        g = (0, A.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return s.id === t.applicationId;
        }),
        S = L({ context: n, applicationId: s.id }),
        C = w({
            application: t.application,
            context: n,
            locationObject: i,
            onActivityItemSelectedProp: a,
            launchingComponentId: r,
            commandOrigin: u,
            source: d,
        }),
        N = T(s, t.activity);
    return {
        imageBackground: I,
        videoUrl: b,
        joinableEmbeddedApp: g,
        activityAction: S,
        onActivityItemSelected: C,
        labelType: v ? f.label_type : l.Hr.NONE,
        staffReleasePhase: N,
    };
}
function T(e, t) {
    if (!((0, r.n)(e, I.gfo.EMBEDDED_RELEASED) || (0, r.n)(e, I.gfo.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, E.A)((0, p.getOS)())].release_phase;
    return v.qG.includes(n) ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function L(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        a = 0,
        l = "channel" === t.type ? t.channel : void 0,
        o = (0, f.A)(),
        r = (0, y.A)({ fetchesApplication: i }),
        p = (0, c.h)(n, i),
        u = (0, A.Ay)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != p && p.id === t.applicationId;
        });
    if (null == p) return a;
    let d = (0, _.H)(o?.location);
    return (null != l && d === l.id && r?.id === p.id ? (a = 2) : null != u && (a = 1), a);
}
function w(e) {
    let {
            application: t,
            context: n,
            locationObject: i,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: r,
            sectionName: p,
            source: A,
            fetchesApplication: _ = !0,
            customId: E,
            referrerId: m,
            onConfirmActivityLaunchChecksAlertOpen: y,
        } = e,
        h = t?.id ?? "",
        v = L({ context: n, applicationId: h, fetchesApplication: _ }),
        { analyticsLocations: I } = (0, o.Ay)(),
        b = (0, f.A)();
    if (null == t)
        return () => {
            l?.({ applicationId: "" });
        };
    switch (v) {
        case 0:
            return async () => {
                (await a.A.launch({
                    applicationId: h,
                    channelId: "channel" === n.type ? n.channel.id : null,
                    locationObject: i,
                    analyticsLocations: I,
                    componentId: c,
                    commandOrigin: r,
                    sectionName: p,
                    source: A,
                    customId: E,
                    referrerId: m,
                    onConfirmActivityLaunchChecksAlertOpen: y,
                })) && l?.({ applicationId: h });
            };
        case 1:
            return async () => {
                u.Ay.isLaunchingActivity() ||
                    ((await (0, d.A)({
                        applicationId: h,
                        activityChannelId: "channel" === n.type ? n.channel.id : void 0,
                        locationObject: i,
                        analyticsLocations: I,
                        componentId: c,
                        sectionName: p,
                        source: A,
                        customId: E,
                        referrerId: m,
                    })) &&
                        (await l?.({ applicationId: h })));
            };
        case 2:
            return () => {
                u.Ay.isLaunchingActivity() ||
                    (null != b && (0, s.d)({ location: b.location, applicationId: h }), l?.({ applicationId: h }));
            };
    }
}
