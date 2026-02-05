s.d(t, { a: () => d }), s(508300);
var r = s(73153),
    n = s(830215),
    a = s(77729),
    i = s(954571),
    l = s(464477),
    o = s(917136),
    h = s(293731),
    c = s(652215);
async function d(e) {
    let { abortController: t, loginSource: s, giftCodeSKUId: d } = e;
    if (
        null == a.A &&
        null != window.PublicKeyCredential &&
        null != PublicKeyCredential.isConditionalMediationAvailable
    ) {
        let e;
        try {
            if (!(await PublicKeyCredential.isConditionalMediationAvailable())) return;
        } catch (e) {
            (0, l.Os)(e);
            return;
        }
        let { challenge: a, ticket: u } = await (0, o.Ud)();
        try {
            e = await (0, h.J)(a, t.signal);
        } catch (e) {
            if (!(e instanceof DOMException)) throw e;
            switch (e.name) {
                case "AbortError":
                case "NotAllowedError":
                    break;
                default:
                    (0, l.Os)(e);
            }
            return;
        }
        r.h.dispatch({ type: "PASSWORDLESS_START" }),
            i.default.track(c.HAw.LOGIN_ATTEMPTED, {
                source: c.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: s,
                gift_code_sku_id: d,
            }),
            await n.A.loginWebAuthn({ ticket: u, credential: e, source: s, giftCodeSKUId: d });
    }
}
