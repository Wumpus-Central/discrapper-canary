r.d(t, {
    a: () => d,
}),
    r(801460),
    r(508300),
    r(650828),
    r(457529);
var n = r(430370),
    s = r(73153),
    i = r(830215),
    a = r(77729),
    l = r(954571),
    o = r(464477),
    c = r(917136),
    u = r(652215);
async function d(e) {
    let { abortController: t, loginSource: r, giftCodeSKUId: d } = e;
    try {
        if (
            null == a.A &&
            null != window.PublicKeyCredential &&
            null != PublicKeyCredential.isConditionalMediationAvailable
        ) {
            let e;
            if (!(await PublicKeyCredential.isConditionalMediationAvailable())) return;
            let { challenge: a, ticket: h } = await (0, c.Ud)();
            try {
                let r = (0, n.d5)(JSON.parse(a));
                (r.signal = t.signal), (e = await (0, n.Jt)(r));
            } catch (e) {
                if (!(e instanceof DOMException)) throw e;
                switch (e.name) {
                    case "AbortError":
                    case "NotAllowedError":
                        break;
                    default:
                        (0, o.Os)(e);
                }
                return;
            }
            s.h.dispatch({
                type: "PASSWORDLESS_START",
            }),
                l.default.track(u.HAw.LOGIN_ATTEMPTED, {
                    source: u.mdB.PASSWORDLESS_CONDITIONAL_UI,
                    login_method: "passwordless",
                    login_source: r,
                    gift_code_sku_id: d,
                }),
                await i.A.loginWebAuthn({
                    ticket: h,
                    credential: JSON.stringify(e),
                    source: r,
                    giftCodeSKUId: d,
                });
        }
    } catch (e) {}
}
