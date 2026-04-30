n.d(t, { a: () => N }), n(508300);
var r = n(228366),
    s = n(830215),
    a = n(845584),
    i = n(77729),
    l = n(626584),
    o = n(954571),
    c = n(464477),
    u = n(84948),
    d = n(917136),
    h = n(293731),
    p = n(652215);
let m = new l.A("ConditionalMediation");
async function N(e) {
    let { abortController: t, loginSource: n, giftCodeSKUId: l, isMultiAccount: N } = e;
    if (null == i.A && null != window.PublicKeyCredential) {
        let e,
            i = await PublicKeyCredential.isConditionalMediationAvailable?.(),
            E = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
        if (!i && !E) return;
        let { challenge: I, ticket: y } = await (0, d.Ud)();
        try {
            e = await (0, h.J)(I, t.signal);
        } catch (e) {
            if (!(e instanceof DOMException)) throw e;
            switch (e.name) {
                case "AbortError":
                case "SecurityError":
                case "NotAllowedError":
                    m.warn(e.name, e.message);
                    break;
                default:
                    (0, c.Os)(e), m.error(e.name, e.message);
            }
            return;
        }
        r.h.dispatch({ type: "PASSWORDLESS_START" }),
            o.default.track(p.HAw.LOGIN_ATTEMPTED, {
                source: p.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: n,
                gift_code_sku_id: l,
            });
        try {
            await s.A.loginWebAuthn({ ticket: y, credential: e, source: n, giftCodeSKUId: l, isMultiAccount: N });
        } catch (t) {
            throw (
                (r.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
                t instanceof a.LG &&
                    null != t.status &&
                    t.status >= 400 &&
                    t.status < 500 &&
                    (await u.A.signalUnknownCredential(e)),
                t)
            );
        }
    }
}
