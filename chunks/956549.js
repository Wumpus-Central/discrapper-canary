n.d(t, { A: () => _ });
var i = n(734057),
    r = n(287809),
    a = n(646865),
    l = n(909206),
    s = n(795816),
    o = n(817636),
    u = n(574152);
async function _(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, o.A)(e.targetApplicationId, e.channelId)), (n = (0, a.f)());
    } catch {
        return !1;
    }
    return (0, a.w)(n, () => E({ ...e, targetApplication: t }));
}
async function E(e) {
    let {
            targetApplication: t,
            locationObject: n,
            channelId: a,
            analyticsLocations: o,
            componentId: _,
            commandOrigin: E,
            sectionName: A,
            source: c,
            onExecutedCallback: d,
            referrerId: I,
            customId: T,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        p = (0, u.A)(),
        O = r.default.getCurrentUser();
    return (
        null != a &&
        null != i.A.getChannel(a) &&
        null != O &&
        null != t &&
        (l.MJ(t.id),
        await (0, s.su)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: p,
            componentId: _,
            commandOrigin: E,
            sectionName: A,
            locationObject: n,
            analyticsLocations: o,
            source: c,
            onExecutedCallback: d,
            referrerId: I,
            customId: T,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: S,
        }))
    );
}
