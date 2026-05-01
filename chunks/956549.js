"use strict";
n.d(t, { A: () => c });
var i = n(734057),
    r = n(287809),
    s = n(646865),
    a = n(909206),
    o = n(795816),
    l = n(817636),
    u = n(574152);
async function c(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, l.A)(e.targetApplicationId, e.channelId)), (n = (0, s.f)());
    } catch {
        return !1;
    }
    return (0, s.w)(n, () => d({ ...e, targetApplication: t }));
}
async function d(e) {
    let {
            targetApplication: t,
            locationObject: n,
            channelId: s,
            analyticsLocations: l,
            componentId: c,
            commandOrigin: d,
            sectionName: _,
            source: f,
            onExecutedCallback: h,
            referrerId: p,
            customId: E,
            inviterUserId: m,
            onConfirmActivityLaunchChecksAlertOpen: g,
        } = e,
        A = (0, u.A)(),
        I = r.default.getCurrentUser();
    return (
        null != s &&
        null != i.A.getChannel(s) &&
        null != I &&
        null != t &&
        (a.MJ(t.id),
        await (0, o.su)({
            channelId: s,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: A,
            componentId: c,
            commandOrigin: d,
            sectionName: _,
            locationObject: n,
            analyticsLocations: l,
            source: f,
            onExecutedCallback: h,
            referrerId: p,
            customId: E,
            inviterUserId: m,
            onConfirmActivityLaunchChecksAlertOpen: g,
        }))
    );
}
