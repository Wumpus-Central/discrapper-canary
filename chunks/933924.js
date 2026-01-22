r.d(t, {
    a: () => u,
}),
    r(457529);
var n = r(430370),
    s = r(73153),
    i = r(830215),
    a = r(77729),
    l = r(954571),
    o = r(917136),
    c = r(652215);
async function u(e) {
    let { abortController: t, loginSource: r, giftCodeSKUId: u } = e;
    try {
        if (
            null == a.A &&
            null != window.PublicKeyCredential &&
            null != PublicKeyCredential.isConditionalMediationAvailable
        ) {
            if (!(await PublicKeyCredential.isConditionalMediationAvailable())) return;
            let { challenge: e, ticket: a } = await (0, o.Ud)(),
                d = (0, n.d5)(JSON.parse(e));
            d.signal = t.signal;
            let h = await (0, n.Jt)(d);
            s.h.dispatch({
                type: "PASSWORDLESS_START",
            }),
                l.default.track(c.HAw.LOGIN_ATTEMPTED, {
                    source: c.mdB.PASSWORDLESS_CONDITIONAL_UI,
                    login_method: "passwordless",
                    login_source: r,
                    gift_code_sku_id: u,
                }),
                await i.A.loginWebAuthn({
                    ticket: a,
                    credential: JSON.stringify(h),
                    source: r,
                    giftCodeSKUId: u,
                });
        }
    } catch (e) {}
}
