n.d(t, { Z: () => a }), n(411104);
var r = n(772848),
    i = n(544891),
    s = n(981631);
let a = {
    generateNonce: function () {
        return (0, r.Z)();
    },
    createHandoffToken: async function (e) {
        let {
            body: { handoff_token: t }
        } = await i.tn.post({
            url: s.ANM.HANDOFF,
            body: { key: e },
            oldFormErrors: !0,
            retries: 1,
            rejectWithError: !1
        });
        if (null != t) return t;
        throw Error('Missing handoff token!');
    }
};
