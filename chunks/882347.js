n.d(t, { p: () => b }), n(789020);
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
    let { currentEmbeddedApplication: t } = e;
    return !!(
        null == t ||
        (await new Promise((e) => {
            let n = l.ZP.getSelfEmbeddedActivities().get(t.id),
                r = (0, f.pY)(null == n ? void 0 : n.location),
                i = a.Z.getChannel(r);
            if (null == n || null == i) {
                e(!0);
                return;
            }
            (0, u.Z)(
                t,
                i,
                () => {
                    (0, p.Z)().leaveActivity({
                        location: n.location,
                        applicationId: t.id
                    }),
                        e(!0);
                },
                () => e(!1)
            );
        }))
    );
}
async function E(e) {
    let { application: t, applicationId: n, channel: r, user: i, isContextless: o } = e;
    if (null == i.nsfwAllowed) {
        var a, s, l;
        let e =
            null != t
                ? t
                : await m({
                      applicationId: n,
                      channelId: null == r ? void 0 : r.id,
                      guildId: null !== (s = null == r ? void 0 : r.getGuildId()) && void 0 !== s ? s : void 0,
                      isContextless: o
                  });
        if (
            null == e ||
            (null !== (l = null === (a = e.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) &&
                void 0 !== l &&
                l &&
                !(await new Promise((t) => {
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
async function v(e) {
    var t;
    let { application: n, applicationId: r, channel: i, isContextless: o } = e,
        a =
            null != n
                ? n
                : await m({
                      applicationId: r,
                      channelId: null == i ? void 0 : i.id,
                      guildId: null !== (t = null == i ? void 0 : i.getGuildId()) && void 0 !== t ? t : void 0,
                      isContextless: o
                  });
    return (
        null != a &&
        (!!((0, s.yE)(a.flags, h.udG.EMBEDDED_RELEASED) || a.isVerified || l.ZP.hasActivityEverBeenLaunched(r)) ||
            new Promise((e) => {
                (0, d.j)({
                    application: a,
                    onConfirm: () => e(!0),
                    onCancel: () => e(!1)
                });
            }))
    );
}
async function b(e) {
    return !!((await g({ currentEmbeddedApplication: e.currentEmbeddedApplication })) && (await E(e)) && (await v(e)));
}
