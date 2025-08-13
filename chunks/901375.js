n.d(t, { j: () => u }), n(49124);
var r = n(533126),
    s = n(570140),
    i = n(893776),
    a = n(579806),
    l = n(626135),
    o = n(365007),
    c = n(981631);
async function u(e) {
    let { abortController: t, loginSource: n, giftCodeSKUId: u } = e;
    try {
        if (
            null == a.Z &&
            null != window.PublicKeyCredential &&
            null != PublicKeyCredential.isConditionalMediationAvailable
        ) {
            if (!(await PublicKeyCredential.isConditionalMediationAvailable())) return;
            let { challenge: e, ticket: a } = await (0, o.us)(),
                d = (0, r.wz)(JSON.parse(e));
            d.signal = t.signal;
            let p = await (0, r.U2)(d);
            s.Z.dispatch({ type: "PASSWORDLESS_START" }),
                l.default.track(c.rMx.LOGIN_ATTEMPTED, {
                    source: c.uRl.PASSWORDLESS_CONDITIONAL_UI,
                    login_method: "passwordless",
                    login_source: n,
                    gift_code_sku_id: u,
                }),
                await i.Z.loginWebAuthn({
                    ticket: a,
                    credential: JSON.stringify(p),
                    source: n,
                    giftCodeSKUId: u,
                });
        }
    } catch (e) {}
}
