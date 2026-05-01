s.d(t, { a: () => N }), s(508300);
var n = s(228366),
    r = s(830215),
    a = s(845584),
    i = s(77729),
    l = s(626584),
    o = s(174459),
    c = s(464477),
    d = s(84948),
    u = s(917136),
    h = s(293731),
    p = s(652215);
let m = new l.A("ConditionalMediation");
async function N(e) {
    let { abortController: t, loginSource: s, giftCodeSKUId: l, isMultiAccount: N } = e;
    if (null == i.A && null != window.PublicKeyCredential) {
        let e,
            i = await PublicKeyCredential.isConditionalMediationAvailable?.(),
            E = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
        if (!i && !E) return;
        let { challenge: y, ticket: A } = await (0, u.Ud)();
        try {
            e = await (0, h.J)(y, t.signal);
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
        n.h.dispatch({ type: "PASSWORDLESS_START" }),
            o.default.track(p.HAw.LOGIN_ATTEMPTED, {
                source: p.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: s,
                gift_code_sku_id: l,
            });
        try {
            await r.A.loginWebAuthn({ ticket: A, credential: e, source: s, giftCodeSKUId: l, isMultiAccount: N });
        } catch (t) {
            throw (
                (n.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
                t instanceof a.LG &&
                    null != t.status &&
                    t.status >= 400 &&
                    t.status < 500 &&
                    (await d.A.signalUnknownCredential(e)),
                t)
            );
        }
    }
}
