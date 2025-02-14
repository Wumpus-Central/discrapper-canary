n.d(t, {
    I: () => c,
    g: () => d
}),
    n(411104);
var i = n(544891),
    s = n(570140),
    r = n(981631),
    l = n(388032);
function a(e) {
    return (
        null != e &&
            null != e.body &&
            s.Z.dispatch({
                type: 'UPDATE_CONSENTS',
                consents: { ...e.body }
            }),
        e.body
    );
}
function o(e) {
    let t;
    throw Error(e.status >= 500 && e.status <= 599 ? l.intl.string(l.t.cvJdtr) : null != e && null != e.body && null != e.body.message ? e.body.message : l.intl.string(l.t.cvJdtr));
}
function c() {
    return i.tn
        .get({
            url: r.ANM.SETTINGS_CONSENT,
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(a, (e) => Promise.reject(Error(e.body.message)));
}
function d(e, t) {
    return i.tn
        .post({
            url: r.ANM.SETTINGS_CONSENT,
            body: {
                grant: e,
                revoke: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(a, o);
}
