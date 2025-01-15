n.d(t, {
    I: function () {
        return c;
    },
    g: function () {
        return d;
    }
}),
    n(411104);
var i = n(544891),
    r = n(570140),
    s = n(981631),
    a = n(388032);
function l(e) {
    return (
        null != e &&
            null != e.body &&
            r.Z.dispatch({
                type: 'UPDATE_CONSENTS',
                consents: { ...e.body }
            }),
        e.body
    );
}
function o(e) {
    let t;
    throw Error((t = e.status >= 500 && e.status <= 599 ? a.intl.string(a.t.cvJdtr) : null != e && null != e.body && null != e.body.message ? e.body.message : a.intl.string(a.t.cvJdtr)));
}
function c() {
    return i.tn
        .get({
            url: s.ANM.SETTINGS_CONSENT,
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(l, (e) => Promise.reject(Error(e.body.message)));
}
function d(e, t) {
    return i.tn
        .post({
            url: s.ANM.SETTINGS_CONSENT,
            body: {
                grant: e,
                revoke: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(l, o);
}
