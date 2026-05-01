"use strict";
n.d(t, { $p: () => c, A: () => _, FZ: () => l, XQ: () => u, xf: () => d });
var i,
    r = n(64700),
    s = n(688810),
    a = n(174459),
    o = n(652215);
let l = "xbox",
    u = "thirdPartyPartnerPerk",
    c = "third_party_learn_more_xbox";
var d = (((i = {}).CLAIM = "claim"), (i.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (i.CANCEL = "cancel"), i);
function _() {
    let { analyticsLocations: e } = (0, s.Ay)();
    return r.useCallback(
        (t, n) => {
            a.default.track(o.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: l,
                cta_type: t,
                url: n ?? null,
                location_stack: e,
            });
        },
        [e],
    );
}
