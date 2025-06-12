n.d(t, { p: () => y }), n(997841);
var r = n(252258),
    i = n(570140),
    a = n(881052),
    o = n(592125),
    s = n(630388),
    l = n(317381),
    c = n(424291),
    u = n(966434),
    d = n(649591),
    _ = n(16609),
    f = n(224189),
    p = n(574952),
    h = n(981631);
async function m(e) {
    let { applicationId: t, channelId: n, guildId: o } = e;
    try {
        return await (0, f.Z)(t, n);
    } catch (s) {
        let e = null != o ? r.E.GUILD_CHANNEL : r.E.PRIVATE_CHANNEL;
        i.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            nonce: '',
            applicationId: t,
            channelId: null != n ? n : null,
            guildId: null != o ? o : null,
            error: new a.Hx(s),
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
                    a = (0, _.p)(null == i ? void 0 : i.location),
                    s = o.Z.getChannel(a);
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
    let { application: t, applicationId: n, channel: r, user: i, onConfirmActivityLaunchChecksAlertOpen: a } = e;
    if (null == i.nsfwAllowed) {
        var o, s, l;
        let e =
            null != t
                ? t
                : await m({
                      applicationId: n,
                      channelId: null == r ? void 0 : r.id,
                      guildId: null != (s = null == r ? void 0 : r.getGuildId()) ? s : void 0
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
    let { application: n, applicationId: r, channel: i, onConfirmActivityLaunchChecksAlertOpen: a } = e,
        o =
            null != n
                ? n
                : await m({
                      applicationId: r,
                      channelId: null == i ? void 0 : i.id,
                      guildId: null != (t = null == i ? void 0 : i.getGuildId()) ? t : void 0
                  });
    return (
        null != o &&
        (!!((0, s.yE)(o.flags, h.udG.EMBEDDED_RELEASED) || o.isVerified || l.ZP.hasActivityEverBeenLaunched(r)) ||
            new Promise((e) => {
                null == a || a(),
                    (0, d.j)({
                        application: o,
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
