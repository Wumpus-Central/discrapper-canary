s.d(t, { a: () => A }), s(508300);
var r = s(73153),
    n = s(830215),
    a = s(198982),
    i = s(77729),
    l = s(626584),
    o = s(954571),
    c = s(464477),
    h = s(321168),
    d = s(917136),
    u = s(191986),
    p = s(293731),
    m = s(652215);
let C = new l.A("ConditionalMediation");
async function A(e) {
    let { abortController: t, loginSource: s, giftCodeSKUId: l } = e;
    if (null == i.A && null != window.PublicKeyCredential) {
        let e,
            i = await PublicKeyCredential.isConditionalMediationAvailable?.(),
            A = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
        if (!i && !A) return;
        let { challenge: g, ticket: S } = await (0, d.Ud)();
        try {
            e = await (0, p.J)(g, t.signal);
        } catch (e) {
            if (!(e instanceof DOMException)) throw e;
            switch (e.name) {
                case "AbortError":
                case "SecurityError":
                case "NotAllowedError":
                    C.warn(e.name, e.message);
                    break;
                default:
                    (0, c.Os)(e), C.error(e.name, e.message);
            }
            return;
        }
        r.h.dispatch({ type: "PASSWORDLESS_START" }),
            o.default.track(m.HAw.LOGIN_ATTEMPTED, {
                source: m.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: s,
                gift_code_sku_id: l,
            });
        try {
            await n.A.loginWebAuthn({ ticket: S, credential: e, source: s, giftCodeSKUId: l });
        } catch (t) {
            if (
                (r.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
                t instanceof a.LG && null != t.status && t.status >= 400 && t.status < 500)
            ) {
                let { enabled: t } = u.V.getConfig({ location: "conditional" });
                t && (await h.A.signalUnknownCredential(e));
            }
            throw t;
        }
    }
}
