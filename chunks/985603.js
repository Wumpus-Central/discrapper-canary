i.d(t, { $p: () => o, A: () => m, FZ: () => c, XQ: () => d, xf: () => u });
var s,
    a = i(64700),
    n = i(688810),
    r = i(174459),
    l = i(652215);
let c = "xbox",
    d = "thirdPartyPartnerPerk",
    o = "third_party_learn_more_xbox";
var u = (((s = {}).CLAIM = "claim"), (s.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (s.CANCEL = "cancel"), s);
function m() {
    let { analyticsLocations: e } = (0, n.Ay)();
    return a.useCallback(
        (t, i) => {
            r.default.track(l.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: c,
                cta_type: t,
                url: i ?? null,
                location_stack: e,
            });
        },
        [e],
    );
}
