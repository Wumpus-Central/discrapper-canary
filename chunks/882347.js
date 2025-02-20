n.d(t, { p: () => v }), n(789020);
var r = n(570140),
    i = n(881052),
    o = n(592125),
    a = n(630388),
    s = n(317381),
    l = n(424291),
    c = n(966434),
    u = n(649591),
    d = n(16609),
    f = n(224189),
    p = n(574952),
    _ = n(981631);
async function h(e, t) {
    try {
        return await (0, f.Z)(e, t);
    } catch (n) {
        r.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            nonce: '',
            applicationId: e,
            channelId: null != t ? t : null,
            error: new i.Hx(n)
        });
    }
}
async function m(e) {
    let { currentEmbeddedApplication: t } = e;
    return !!(
        null == t ||
        (await new Promise((e) => {
            let n = s.ZP.getSelfEmbeddedActivities().get(t.id),
                r = (0, d.pY)(null == n ? void 0 : n.location),
                i = o.Z.getChannel(r);
            if (null == n || null == i) {
                e(!0);
                return;
            }
            (0, c.Z)(
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
async function g(e) {
    let { application: t, applicationId: n, channel: r, user: i } = e;
    if (null == i.nsfwAllowed) {
        var o, a;
        let e = null != t ? t : await h(n, null == r ? void 0 : r.id);
        if (
            null == e ||
            (null !== (a = null === (o = e.embeddedActivityConfig) || void 0 === o ? void 0 : o.requires_age_gate) &&
                void 0 !== a &&
                a &&
                !(await new Promise((t) => {
                    (0, l.V)({
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
async function E(e) {
    let { application: t, applicationId: n, channel: r } = e,
        i = null != t ? t : await h(n, null == r ? void 0 : r.id);
    return (
        null != i &&
        (!!((0, a.yE)(i.flags, _.udG.EMBEDDED_RELEASED) || i.isVerified || s.ZP.hasActivityEverBeenLaunched(n)) ||
            new Promise((e) => {
                (0, u.j)({
                    application: i,
                    onConfirm: () => e(!0),
                    onCancel: () => e(!1)
                });
            }))
    );
}
async function v(e) {
    return !!((await m({ currentEmbeddedApplication: e.currentEmbeddedApplication })) && (await g(e)) && (await E(e)));
}
