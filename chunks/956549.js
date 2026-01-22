n.d(t, {
    A: () => _,
});
var r = n(734057),
    i = n(287809),
    a = n(646865),
    s = n(909206),
    o = n(795816),
    l = n(817636),
    c = n(574152);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function _(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, l.A)(e.targetApplicationId, e.channelId)), (n = (0, a.f)());
    } catch (e) {
        return !1;
    }
    return (0, a.w)(n, () =>
        h(
            p(d({}, e), {
                targetApplication: t,
            }),
        ),
    );
}
async function h(e) {
    let {
            targetApplication: t,
            locationObject: n,
            channelId: a,
            analyticsLocations: l,
            componentId: u,
            commandOrigin: d,
            sectionName: f,
            source: p,
            onExecutedCallback: _,
            referrerId: h,
            customId: m,
            inviterUserId: g,
            onConfirmActivityLaunchChecksAlertOpen: E,
        } = e,
        b = (0, c.A)(),
        y = i.default.getCurrentUser();
    return (
        null != a &&
        null != r.A.getChannel(a) &&
        null != y &&
        null != t &&
        (s.MJ(t.id),
        await (0, o.su)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: b,
            componentId: u,
            commandOrigin: d,
            sectionName: f,
            locationObject: n,
            analyticsLocations: l,
            source: p,
            onExecutedCallback: _,
            referrerId: h,
            customId: m,
            inviterUserId: g,
            onConfirmActivityLaunchChecksAlertOpen: E,
        }))
    );
}
