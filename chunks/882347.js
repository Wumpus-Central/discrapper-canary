n.d(t, { p: () => y }), n(997841);
var r = n(252258),
    i = n(95015),
    a = n(570140),
    o = n(881052),
    s = n(592125),
    l = n(317381),
    c = n(424291),
    u = n(966434),
    d = n(649591),
    f = n(16609),
    p = n(224189),
    _ = n(574952),
    m = n(981631);
async function h(e) {
    let { applicationId: t, channelId: n, guildId: i } = e;
    try {
        return await (0, p.Z)(t, n);
    } catch (s) {
        let e = null != i ? r.E.GUILD_CHANNEL : r.E.PRIVATE_CHANNEL;
        a.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
            nonce: "",
            applicationId: t,
            channelId: null != n ? n : null,
            guildId: null != i ? i : null,
            error: new o.Hx(s),
            locationKind: e,
        });
    }
}
async function g(e) {
    let {
        currentEmbeddedApplication: t,
        shouldClosePopoutOnLeaveCurrentEmbeddedApplication: n,
        onConfirmActivityLaunchChecksAlertOpen: r,
    } = e;
    return (
        (null == t ||
            !!(await new Promise((e) => {
                let i = l.ZP.getSelfEmbeddedActivities().get(t.id),
                    a = (0, f.p)(null == i ? void 0 : i.location),
                    o = s.Z.getChannel(a);
                if (null == i || null == o) return void e(!0);
                null == r || r(),
                    (0, u.Z)(
                        t,
                        o,
                        () => {
                            (0, _.Z)().leaveActivity({
                                location: i.location,
                                applicationId: t.id,
                                shouldClosePopout: n,
                            }),
                                e(!0);
                        },
                        () => e(!1),
                    );
            }))) &&
        !0
    );
}
async function E(e) {
    let { application: t, applicationId: n, channel: r, user: i, onConfirmActivityLaunchChecksAlertOpen: a } = e;
    if (null == i.nsfwAllowed) {
        var o, s, l;
        let e =
            null != t
                ? t
                : await h({
                      applicationId: n,
                      channelId: null == r ? void 0 : r.id,
                      guildId: null != (s = null == r ? void 0 : r.getGuildId()) ? s : void 0,
                  });
        if (
            null == e ||
            (null != (l = null == (o = e.embeddedActivityConfig) ? void 0 : o.requires_age_gate) &&
                l &&
                !(await new Promise((t) => {
                    null == a || a(),
                        (0, c.V)({
                            application: e,
                            channelId: null == r ? void 0 : r.id,
                            onAgree: () => t(!0),
                            onDisagree: () => t(!1),
                        });
                })))
        )
            return !1;
    }
    return !0;
}
async function b(e) {
    var t;
    let { application: n, applicationId: r, channel: a, onConfirmActivityLaunchChecksAlertOpen: o } = e,
        s =
            null != n
                ? n
                : await h({
                      applicationId: r,
                      channelId: null == a ? void 0 : a.id,
                      guildId: null != (t = null == a ? void 0 : a.getGuildId()) ? t : void 0,
                  });
    return (
        null != s &&
        (!!((0, i.yE)(s.flags, m.udG.EMBEDDED_RELEASED) || s.isVerified || l.ZP.hasActivityEverBeenLaunched(r)) ||
            new Promise((e) => {
                null == o || o(),
                    (0, d.j)({
                        application: s,
                        onConfirm: () => e(!0),
                        onCancel: () => e(!1),
                    });
            }))
    );
}
async function y(e) {
    return (
        !!(await g({
            currentEmbeddedApplication: e.currentEmbeddedApplication,
            shouldClosePopoutOnLeaveCurrentEmbeddedApplication: e.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
            onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen,
        })) &&
        !!(await E(e)) &&
        !!(await b(e))
    );
}
