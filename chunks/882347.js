n.d(t, { p: () => v }), n(789020);
var i = n(570140),
    r = n(881052),
    a = n(592125),
    s = n(630388),
    o = n(317381),
    l = n(424291),
    u = n(966434),
    c = n(649591),
    d = n(16609),
    f = n(224189),
    _ = n(574952),
    p = n(981631);
async function h(e, t) {
    try {
        return await (0, f.Z)(e, t);
    } catch (n) {
        i.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            nonce: '',
            applicationId: e,
            channelId: null != t ? t : null,
            error: new r.Hx(n)
        });
    }
}
async function m(e) {
    let { currentEmbeddedApplication: t } = e;
    return !!(
        null == t ||
        (await new Promise((e) => {
            let n = o.ZP.getSelfEmbeddedActivities().get(t.id),
                i = (0, d.pY)(null == n ? void 0 : n.location),
                r = a.Z.getChannel(i);
            if (null == n || null == r) {
                e(!0);
                return;
            }
            (0, u.Z)(
                t,
                r,
                () => {
                    (0, _.Z)().leaveActivity({
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
    let { application: t, applicationId: n, channel: i, user: r } = e;
    if (null == r.nsfwAllowed) {
        var a, s;
        let e = null != t ? t : await h(n, null == i ? void 0 : i.id);
        if (
            null == e ||
            (null !== (s = null === (a = e.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) &&
                void 0 !== s &&
                s &&
                !(await new Promise((t) => {
                    (0, l.V)({
                        application: e,
                        channelId: null == i ? void 0 : i.id,
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
    let { application: t, applicationId: n, channel: i } = e,
        r = null != t ? t : await h(n, null == i ? void 0 : i.id);
    return (
        null != r &&
        (!!((0, s.yE)(r.flags, p.udG.EMBEDDED_RELEASED) || r.isVerified || o.ZP.hasActivityEverBeenLaunched(n)) ||
            new Promise((e) => {
                (0, c.j)({
                    application: r,
                    onConfirm: () => e(!0),
                    onCancel: () => e(!1)
                });
            }))
    );
}
async function v(e) {
    return !!((await m({ currentEmbeddedApplication: e.currentEmbeddedApplication })) && (await g(e)) && (await E(e)));
}
