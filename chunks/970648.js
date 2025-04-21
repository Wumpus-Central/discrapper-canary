n.d(t, { Z: () => s }), n(415506);
var r = n(772848),
    i = n(544891),
    l = n(981631);
let s = {
    generateNonce: function () {
        return (0, r.Z)();
    },
    createHandoffToken: async function (e) {
        let {
            body: { handoff_token: t }
        } = await i.tn.post({
            url: l.ANM.HANDOFF,
            body: { key: e },
            oldFormErrors: !0,
            retries: 1,
            rejectWithError: !1
        });
        if (null != t) return t;
        throw Error('Missing handoff token!');
    }
};
