"use strict";
n.d(t, { A: () => c });
var r = n(734057),
    i = n(287809),
    a = n(646865),
    s = n(909206),
    o = n(795816),
    l = n(817636),
    u = n(574152);
async function c(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, l.A)(e.targetApplicationId, e.channelId)), (n = (0, a.f)());
    } catch {
        return !1;
    }
    return (0, a.w)(n, () => d({ ...e, targetApplication: t }));
}
async function d(e) {
    let {
            targetApplication: t,
            locationObject: n,
            channelId: a,
            analyticsLocations: l,
            componentId: c,
            commandOrigin: d,
            sectionName: _,
            source: f,
            onExecutedCallback: p,
            referrerId: h,
            customId: m,
            inviterUserId: g,
            onConfirmActivityLaunchChecksAlertOpen: E,
        } = e,
        A = (0, u.A)(),
        I = i.default.getCurrentUser();
    return (
        null != a &&
        null != r.A.getChannel(a) &&
        null != I &&
        null != t &&
        (s.MJ(t.id),
        await (0, o.su)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: A,
            componentId: c,
            commandOrigin: d,
            sectionName: _,
            locationObject: n,
            analyticsLocations: l,
            source: f,
            onExecutedCallback: p,
            referrerId: h,
            customId: m,
            inviterUserId: g,
            onConfirmActivityLaunchChecksAlertOpen: E,
        }))
    );
}
