n.d(t, { p: () => y }), n(789020);
var r = n(252258),
    i = n(570140),
    o = n(881052),
    a = n(592125),
    s = n(630388),
    l = n(317381),
    c = n(424291),
    u = n(966434),
    d = n(649591),
    f = n(16609),
    _ = n(224189),
    p = n(574952),
    h = n(981631);
async function m(e) {
    let { applicationId: t, channelId: n, guildId: a, isContextless: s } = e;
    try {
        return await (0, _.Z)(t, n);
    } catch (l) {
        let e = s ? r.E.CONTEXTLESS : null != a ? r.E.GUILD_CHANNEL : r.E.PRIVATE_CHANNEL;
        i.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            nonce: '',
            applicationId: t,
            channelId: null != n ? n : null,
            error: new o.Hx(l),
            locationKind: e
        });
    }
}
async function g(e) {
    let { currentEmbeddedApplication: t, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: n, onConfirmActivityLaunchChecksAlertOpen: r } = e;
    return (
        (null == t ||
            !!(await new Promise((e) => {
                let i = l.ZP.getSelfEmbeddedActivities().get(t.id),
                    o = (0, f.pY)(null == i ? void 0 : i.location),
                    s = a.Z.getChannel(o);
                if (null == i || null == s) return void e(!0);
                null == r || r(),
                    (0, u.Z)(
                        t,
                        s,
                        () => {
                            (0, p.Z)().leaveActivity({
                                location: i.location,
                                applicationId: t.id,
                                shouldClosePopout: n
                            }),
                                e(!0);
                        },
                        () => e(!1)
                    );
            }))) &&
        !0
    );
}
async function E(e) {
    let { application: t, applicationId: n, channel: r, user: i, onConfirmActivityLaunchChecksAlertOpen: o, isContextless: a } = e;
    if (null == i.nsfwAllowed) {
        var s, l, u;
        let e =
            null != t
                ? t
                : await m({
                      applicationId: n,
                      channelId: null == r ? void 0 : r.id,
                      guildId: null != (l = null == r ? void 0 : r.getGuildId()) ? l : void 0,
                      isContextless: a
                  });
        if (
            null == e ||
            (null != (u = null == (s = e.embeddedActivityConfig) ? void 0 : s.requires_age_gate) &&
                u &&
                !(await new Promise((t) => {
                    null == o || o(),
                        (0, c.V)({
                            application: e,
                            channelId: null == r ? void 0 : r.id,
                            onAgree: () => t(!0),
                            onDisagree: () => t(!1)
                        });
                })))
        )
            return !1;
    }
    return !0;
}
async function b(e) {
    var t;
    let { application: n, applicationId: r, channel: i, onConfirmActivityLaunchChecksAlertOpen: o, isContextless: a } = e,
        c =
            null != n
                ? n
                : await m({
                      applicationId: r,
                      channelId: null == i ? void 0 : i.id,
                      guildId: null != (t = null == i ? void 0 : i.getGuildId()) ? t : void 0,
                      isContextless: a
                  });
    return (
        null != c &&
        (!!((0, s.yE)(c.flags, h.udG.EMBEDDED_RELEASED) || c.isVerified || l.ZP.hasActivityEverBeenLaunched(r)) ||
            new Promise((e) => {
                null == o || o(),
                    (0, d.j)({
                        application: c,
                        onConfirm: () => e(!0),
                        onCancel: () => e(!1)
                    });
            }))
    );
}
async function y(e) {
    return (
        !!(await g({
            currentEmbeddedApplication: e.currentEmbeddedApplication,
            shouldClosePopoutOnLeaveCurrentEmbeddedApplication: e.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
            onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen
        })) &&
        !!(await E(e)) &&
        !!(await b(e))
    );
}
