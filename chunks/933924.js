s.d(t, { a: () => p }), s(508300);
var r = s(73153),
    n = s(830215),
    a = s(77729),
    i = s(626584),
    l = s(954571),
    o = s(464477),
    h = s(917136),
    c = s(293731),
    d = s(652215);
let u = new i.A("ConditionalMediation");
async function p(e) {
    let { abortController: t, loginSource: s, giftCodeSKUId: i } = e;
    if (null == a.A && null != window.PublicKeyCredential) {
        let e,
            a = await PublicKeyCredential.isConditionalMediationAvailable?.(),
            p = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
        if (!a && !p) return;
        let { challenge: m, ticket: C } = await (0, h.Ud)();
        try {
            e = await (0, c.J)(m, t.signal);
        } catch (e) {
            if (!(e instanceof DOMException)) throw e;
            switch (e.name) {
                case "AbortError":
                case "SecurityError":
                case "NotAllowedError":
                    u.warn(e.name, e.message);
                    break;
                default:
                    (0, o.Os)(e), u.error(e.name, e.message);
            }
            return;
        }
        r.h.dispatch({ type: "PASSWORDLESS_START" }),
            l.default.track(d.HAw.LOGIN_ATTEMPTED, {
                source: d.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: s,
                gift_code_sku_id: i,
            });
        try {
            await n.A.loginWebAuthn({ ticket: C, credential: e, source: s, giftCodeSKUId: i });
        } catch (e) {
            throw (r.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: e }), e);
        }
    }
}
