r.d(n, {
    p: function () {
        return b;
    }
});
var i = r(789020);
var a = r(570140),
    o = r(881052),
    s = r(592125),
    l = r(630388),
    u = r(317381),
    c = r(424291),
    d = r(966434),
    f = r(649591),
    p = r(16609),
    h = r(224189),
    _ = r(574952),
    m = r(981631);
async function g(e, n) {
    try {
        return await (0, h.Z)(e, n);
    } catch (r) {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            nonce: '',
            applicationId: e,
            channelId: null != n ? n : null,
            error: new o.Hx(r)
        });
    }
}
async function E(e) {
    let { currentEmbeddedApplication: n } = e;
    return (
        !!(
            null == n ||
            (await new Promise((e) => {
                let r = u.ZP.getSelfEmbeddedActivities().get(n.id),
                    i = (0, p.p)(null == r ? void 0 : r.location),
                    a = s.Z.getChannel(i);
                if (null == r || null == a) {
                    e(!0);
                    return;
                }
                (0, d.Z)(
                    n,
                    a,
                    () => {
                        (0, _.Z)().leaveActivity({
                            location: r.location,
                            applicationId: n.id
                        }),
                            e(!0);
                    },
                    () => e(!1)
                );
            }))
        ) || !1
    );
}
async function v(e) {
    let { application: n, applicationId: r, channel: i, user: a } = e;
    if (null == a.nsfwAllowed) {
        var o, s;
        let e = null != n ? n : await g(r, null == i ? void 0 : i.id);
        if (
            null == e ||
            (null !== (s = null === (o = e.embeddedActivityConfig) || void 0 === o ? void 0 : o.requires_age_gate) &&
                void 0 !== s &&
                s &&
                !(await new Promise((n) => {
                    (0, c.V)({
                        application: e,
                        channelId: null == i ? void 0 : i.id,
                        onAgree: () => n(!0),
                        onDisagree: () => n(!1)
                    });
                })))
        )
            return !1;
    }
    return !0;
}
async function y(e) {
    let { application: n, applicationId: r, channel: i } = e,
        a = null != n ? n : await g(r, null == i ? void 0 : i.id);
    return (
        null != a &&
        (!!((0, l.yE)(a.flags, m.udG.EMBEDDED_RELEASED) || a.isVerified || u.ZP.hasActivityEverBeenLaunched(r)) ||
            new Promise((e) => {
                (0, f.j)({
                    application: a,
                    onConfirm: () => e(!0),
                    onCancel: () => e(!1)
                });
            }))
    );
}
async function b(e) {
    return !!((await E({ currentEmbeddedApplication: e.currentEmbeddedApplication })) && (await v(e)) && (await y(e))) || !1;
}
