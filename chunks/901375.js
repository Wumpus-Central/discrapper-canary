r.d(t, { j: () => u }), r(49124);
var n = r(533126),
    s = r(570140),
    i = r(893776),
    a = r(579806),
    o = r(626135),
    l = r(365007),
    c = r(981631);
async function u(e) {
    let { abortController: t, loginSource: r, giftCodeSKUId: u } = e;
    try {
        if (
            null == a.Z &&
            null != window.PublicKeyCredential &&
            null != PublicKeyCredential.isConditionalMediationAvailable
        ) {
            if (!(await PublicKeyCredential.isConditionalMediationAvailable())) return;
            let { challenge: e, ticket: a } = await (0, l.us)(),
                d = (0, n.wz)(JSON.parse(e));
            d.signal = t.signal;
            let h = await (0, n.U2)(d);
            s.Z.dispatch({ type: "PASSWORDLESS_START" }),
                o.default.track(c.rMx.LOGIN_ATTEMPTED, {
                    source: c.uRl.PASSWORDLESS_CONDITIONAL_UI,
                    login_method: "passwordless",
                    login_source: r,
                    gift_code_sku_id: u,
                }),
                await i.Z.loginWebAuthn({
                    ticket: a,
                    credential: JSON.stringify(h),
                    source: r,
                    giftCodeSKUId: u,
                });
        }
    } catch (e) {}
}
