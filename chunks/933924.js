s.d(t, { a: () => C }), s(508300);
var r = s(73153),
    n = s(830215),
    l = s(198982),
    a = s(77729),
    i = s(626584),
    o = s(954571),
    c = s(464477),
    h = s(3928),
    d = s(917136),
    u = s(293731),
    p = s(652215);
let m = new i.A("ConditionalMediation");
async function C(e) {
    let { abortController: t, loginSource: s, giftCodeSKUId: i } = e;
    if (null == a.A && null != window.PublicKeyCredential) {
        let e,
            a = await PublicKeyCredential.isConditionalMediationAvailable?.(),
            C = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
        if (!a && !C) return;
        let { challenge: f, ticket: A } = await (0, d.Ud)();
        try {
            e = await (0, u.J)(f, t.signal);
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
                login_source: s,
                gift_code_sku_id: i,
            });
        try {
            await n.A.loginWebAuthn({ ticket: A, credential: e, source: s, giftCodeSKUId: i });
        } catch (t) {
            throw (
                (r.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
                t instanceof l.LG &&
                    null != t.status &&
                    t.status >= 400 &&
                    t.status < 500 &&
                    (await h.A.signalUnknownCredential(e)),
                t)
            );
        }
    }
}
