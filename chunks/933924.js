r.d(t, {
    a: () => h,
}),
    r(801460),
    r(508300),
    r(650828);
var n = r(73153),
    s = r(830215),
    i = r(77729),
    l = r(954571),
    a = r(464477),
    o = r(917136),
    c = r(293731),
    u = r(652215);
async function h(e) {
    let { abortController: t, loginSource: r, giftCodeSKUId: h } = e;
    if (
        null == i.A &&
        null != window.PublicKeyCredential &&
        null != PublicKeyCredential.isConditionalMediationAvailable
    ) {
        let e;
        try {
            if (!(await PublicKeyCredential.isConditionalMediationAvailable())) return;
        } catch (e) {
            (0, a.Os)(e);
            return;
        }
        let { challenge: i, ticket: d } = await (0, o.Ud)();
        try {
            e = await (0, c.J)(i, t.signal);
        } catch (e) {
            if (!(e instanceof DOMException)) throw e;
            switch (e.name) {
                case "AbortError":
                case "NotAllowedError":
                    break;
                default:
                    (0, a.Os)(e);
            }
            return;
        }
        n.h.dispatch({
            type: "PASSWORDLESS_START",
        }),
            l.default.track(u.HAw.LOGIN_ATTEMPTED, {
                source: u.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: r,
                gift_code_sku_id: h,
            }),
            await s.A.loginWebAuthn({
                ticket: d,
                credential: e,
                source: r,
                giftCodeSKUId: h,
            });
    }
}
