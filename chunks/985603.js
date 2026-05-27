n.d(t, { $p: () => d, A: () => E, FZ: () => c, XQ: () => o, xf: () => u });
var i,
    l = n(64700),
    r = n(688810),
    s = n(174459),
    a = n(652215);
let c = "xbox",
    o = "thirdPartyPartnerPerk",
    d = "third_party_learn_more_xbox";
var u = (((i = {}).CLAIM = "claim"), (i.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (i.CANCEL = "cancel"), i);
function E() {
    let { analyticsLocations: e } = (0, r.Ay)();
    return l.useCallback(
        (t, n) => {
            s.default.track(a.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: c,
                cta_type: t,
                url: n ?? null,
                location_stack: e,
            });
        },
        [e],
    );
}
