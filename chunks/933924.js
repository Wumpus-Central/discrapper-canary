s.d(t, { a: () => C }), s(508300);
var r = s(73153),
    n = s(830215),
    a = s(198982),
    i = s(77729),
    l = s(626584),
    o = s(954571),
    c = s(464477),
    h = s(3928),
    d = s(917136),
    u = s(293731),
    p = s(652215);
let m = new l.A("ConditionalMediation");
async function C(e) {
    let { abortController: t, loginSource: s, giftCodeSKUId: l } = e;
    if (null == i.A && null != window.PublicKeyCredential) {
        let e,
            i = await PublicKeyCredential.isConditionalMediationAvailable?.(),
            C = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
        if (!i && !C) return;
        let { challenge: A, ticket: S } = await (0, d.Ud)();
        try {
            e = await (0, u.J)(A, t.signal);
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
                gift_code_sku_id: l,
            });
        try {
            await n.A.loginWebAuthn({ ticket: S, credential: e, source: s, giftCodeSKUId: l });
        } catch (t) {
            throw (
                (r.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
                t instanceof a.LG &&
                    null != t.status &&
                    t.status >= 400 &&
                    t.status < 500 &&
                    (await h.A.signalUnknownCredential(e)),
                t)
            );
        }
    }
}
