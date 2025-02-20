n.d(t, { i: () => i });
var r = n(388032);
function i(e) {
    return null != e.privacy_policy_url && null != e.terms_of_service_url
        ? r.NW.format(r.t.rxlyKC, {
              application: e.name,
              privacyPolicyURL: e.privacy_policy_url,
              termsOfServiceURL: e.terms_of_service_url
          })
        : null != e.privacy_policy_url
          ? r.NW.format(r.t.TBvmMz, {
                application: e.name,
                privacyPolicyURL: e.privacy_policy_url
            })
          : null != e.terms_of_service_url
            ? r.NW.format(r.t['q0T/Q0'], {
                  application: e.name,
                  termsOfServiceURL: e.terms_of_service_url
              })
            : r.NW.formatToPlainString(r.t['3Ywek5'], { application: e.name });
}
