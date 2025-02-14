n.d(t, { Z: () => l }), n(411104);
var i = n(772848),
    r = n(544891),
    a = n(981631);
let l = {
    generateNonce: function () {
        return (0, i.Z)();
    },
    createHandoffToken: async function (e) {
        let {
            body: { handoff_token: t }
        } = await r.tn.post({
            url: a.ANM.HANDOFF,
            body: { key: e },
            oldFormErrors: !0,
            retries: 1,
            rejectWithError: !1
        });
        if (null != t) return t;
        throw Error('Missing handoff token!');
    }
};
