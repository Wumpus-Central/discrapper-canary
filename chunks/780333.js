n.d(e, { $: () => l, B: () => s });
var a = n(110259),
    r = n(499785),
    i = n(652215);
function s() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return r.A.put({
        url: i.Rsh.USER_EMAIL,
        trackedActionData: {
            event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: t },
        },
        rejectWithError: !1,
    });
}
async function l(t) {
    return (
        await r.A.post({
            url: i.Rsh.USER_EMAIL_VERIFY_CODE,
            body: { code: t },
            trackedActionData: { event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1,
        })
    ).body;
}
