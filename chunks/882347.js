r.d(n, {
    p: function () {
        return T;
    }
});
var i = r(789020);
var a = r(570140),
    s = r(881052),
    o = r(592125),
    l = r(630388),
    u = r(317381),
    c = r(424291),
    d = r(966434),
    f = r(649591),
    _ = r(16609),
    h = r(224189),
    p = r(574952),
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
            error: new s.Hx(r)
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
                    i = (0, _.p)(null == r ? void 0 : r.location),
                    a = o.Z.getChannel(i);
                if (null == r || null == a) {
                    e(!0);
                    return;
                }
                (0, d.Z)(
                    n,
                    a,
                    () => {
                        (0, p.Z)().leaveActivity({
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
        var s, o;
        let e = null != n ? n : await g(r, null == i ? void 0 : i.id);
        if (
            null == e ||
            (null !== (o = null === (s = e.embeddedActivityConfig) || void 0 === s ? void 0 : s.requires_age_gate) &&
                void 0 !== o &&
                o &&
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
async function I(e) {
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
async function T(e) {
    return !!((await E({ currentEmbeddedApplication: e.currentEmbeddedApplication })) && (await v(e)) && (await I(e))) || !1;
}
