n(411104);
var i = n(772848),
    r = n(544891),
    s = n(981631);
async function l(e) {
    let {
        body: { handoff_token: t }
    } = await r.tn.post({
        url: s.ANM.HANDOFF,
        body: { key: e },
        oldFormErrors: !0,
        retries: 1,
        rejectWithError: !1
    });
    if (null != t) return t;
    throw Error('Missing handoff token!');
}
t.Z = {
    generateNonce: function () {
        return (0, i.Z)();
    },
    createHandoffToken: l
};
