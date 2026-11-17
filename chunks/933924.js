n(508300);
var s = n(73153),
    r = n(830215),
    a = n(627784),
    i = n(77729),
    l = n(626584),
    o = n(129230),
    c = n(464477),
    d = n(402002),
    u = n(917136),
    h = n(243512),
    p = n(293731),
    m = n(652215);
let N = new l.A("ConditionalMediation");
n.d(
    t,
    {},
    {
        a: async function (e) {
            let { abortController: t, loginSource: n, giftCodeSKUId: l, isMultiAccount: E } = e;
            if (null == i.A && null != window.PublicKeyCredential) {
                let e,
                    i = await PublicKeyCredential.isConditionalMediationAvailable?.(),
                    f = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
                if (!i && !f) return;
                let { challenge: g, ticket: A } = await (0, u.Ud)();
                try {
                    e = await (0, p.J)(g, t.signal);
                } catch (e) {
                    if (!(e instanceof DOMException)) throw e;
                    switch (e.name) {
                        case "AbortError":
                        case "SecurityError":
                        case "NotAllowedError":
                            N.warn(e.name, e.message);
                            break;
                        default:
                            ((0, c.Os)(e), N.error(e.name, e.message));
                    }
                    return;
                }
                (s.h.dispatch({ type: "PASSWORDLESS_START" }),
                    o.default.track(m.HAw.LOGIN_ATTEMPTED, {
                        source: m.mdB.PASSWORDLESS_CONDITIONAL_UI,
                        login_method: "passwordless",
                        login_source: n,
                        gift_code_sku_id: l,
                    }));
                try {
                    await r.A.loginWebAuthn({
                        ticket: A,
                        credential: e,
                        source: n,
                        giftCodeSKUId: l,
                        isMultiAccount: E,
                    });
                } catch (t) {
                    if (
                        (s.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
                        (0, h.j)(t) && (await d.A.signalUnknownCredential(e)),
                        !(t instanceof a.LG))
                    )
                        throw t;
                }
            }
        },
    },
);
