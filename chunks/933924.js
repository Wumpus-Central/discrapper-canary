s.d(t, { a: () => C }), s(508300);
var a = s(228366),
    r = s(830215),
    n = s(845584),
    l = s(77729),
    i = s(626584),
    o = s(954571),
    c = s(464477),
    d = s(84948),
    u = s(917136),
    h = s(293731),
    p = s(652215);
let m = new i.A("ConditionalMediation");
async function C(e) {
    let { abortController: t, loginSource: s, giftCodeSKUId: i } = e;
    if (null == l.A && null != window.PublicKeyCredential) {
        let e,
            l = await PublicKeyCredential.isConditionalMediationAvailable?.(),
            C = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
        if (!l && !C) return;
        let { challenge: x, ticket: A } = await (0, u.Ud)();
        try {
            e = await (0, h.J)(x, t.signal);
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
        a.h.dispatch({ type: "PASSWORDLESS_START" }),
            o.default.track(p.HAw.LOGIN_ATTEMPTED, {
                source: p.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: s,
                gift_code_sku_id: i,
            });
        try {
            await r.A.loginWebAuthn({ ticket: A, credential: e, source: s, giftCodeSKUId: i });
        } catch (t) {
            throw (
                (a.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
                t instanceof n.LG &&
                    null != t.status &&
                    t.status >= 400 &&
                    t.status < 500 &&
                    (await d.A.signalUnknownCredential(e)),
                t)
            );
        }
    }
}
