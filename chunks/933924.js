n(508300);
var s = n(73153),
    r = n(830215),
    a = n(77729),
    i = n(626584),
    l = n(129230),
    o = n(464477),
    c = n(402002),
    d = n(917136),
    u = n(243512),
    h = n(293731),
    p = n(652215);
let m = new i.A("ConditionalMediation");
n.d(
    t,
    {},
    {
        a: async function (e) {
            let { abortController: t, loginSource: n, giftCodeSKUId: i, isMultiAccount: N } = e;
            if (null == a.A && null != window.PublicKeyCredential) {
                let e,
                    a = await PublicKeyCredential.isConditionalMediationAvailable?.(),
                    E = (await PublicKeyCredential.getClientCapabilities?.())?.conditionalGet;
                if (!a && !E) return;
                let { challenge: g, ticket: f } = await (0, d.Ud)();
                try {
                    e = await (0, h.J)(g, t.signal);
                } catch (e) {
                    if (!(e instanceof DOMException)) throw e;
                    switch (e.name) {
                        case "AbortError":
                        case "SecurityError":
                        case "NotAllowedError":
                            m.warn(e.name, e.message);
                            break;
                        default:
                            ((0, o.Os)(e), m.error(e.name, e.message));
                    }
                    return;
                }
                (s.h.dispatch({ type: "PASSWORDLESS_START" }),
                    l.default.track(p.HAw.LOGIN_ATTEMPTED, {
                        source: p.mdB.PASSWORDLESS_CONDITIONAL_UI,
                        login_method: "passwordless",
                        login_source: n,
                        gift_code_sku_id: i,
                    }));
                try {
                    await r.A.loginWebAuthn({
                        ticket: f,
                        credential: e,
                        source: n,
                        giftCodeSKUId: i,
                        isMultiAccount: N,
                    });
                } catch (t) {
                    throw (
                        s.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: t }),
                        (0, u.j)(t) && (await c.A.signalUnknownCredential(e)),
                        t
                    );
                }
            }
        },
    },
);
