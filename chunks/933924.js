s.d(t, { a: () => m }), s(508300);
var l = s(228366),
    n = s(830215),
    a = s(845584),
    r = s(77729),
    i = s(626584),
    o = s(954571),
    c = s(464477),
    u = s(84948),
    d = s(917136),
    h = s(293731),
    p = s(652215);
let f = new i.A("ConditionalMediation");
async function m(e) {
    let { abortController: t, loginSource: s, giftCodeSKUId: i } = e;
    if (null == r.A && null != window.PublicKeyCredential) {
        let e,
            r = await PublicKeyCredential.isConditionalMediationAvailable?.(),
            m = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
        if (!r && !m) return;
        let { challenge: C, ticket: A } = await (0, d.Ud)();
        try {
            e = await (0, h.J)(C, t.signal);
        } catch (e) {
            if (!(e instanceof DOMException)) throw e;
            switch (e.name) {
                case "AbortError":
                case "SecurityError":
                case "NotAllowedError":
                    f.warn(e.name, e.message);
                    break;
                default:
                    (0, c.Os)(e), f.error(e.name, e.message);
            }
            return;
        }
        l.h.dispatch({ type: "PASSWORDLESS_START" }),
            o.default.track(p.HAw.LOGIN_ATTEMPTED, {
                source: p.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: s,
                gift_code_sku_id: i,
            });
        try {
            await n.A.loginWebAuthn({ ticket: A, credential: e, source: s, giftCodeSKUId: i });
        } catch (t) {
            throw (
                (l.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
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
