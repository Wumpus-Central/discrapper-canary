n.d(t, { i: () => r });
var i = n(388032);
function r(e) {
    return null != e.privacy_policy_url && null != e.terms_of_service_url
        ? i.intl.format(i.t.rxlyKC, {
              application: e.name,
              privacyPolicyURL: e.privacy_policy_url,
              termsOfServiceURL: e.terms_of_service_url
          })
        : null != e.privacy_policy_url
          ? i.intl.format(i.t.TBvmMz, {
                application: e.name,
                privacyPolicyURL: e.privacy_policy_url
            })
          : null != e.terms_of_service_url
            ? i.intl.format(i.t['q0T/Q0'], {
                  application: e.name,
                  termsOfServiceURL: e.terms_of_service_url
              })
            : i.intl.formatToPlainString(i.t['3Ywek5'], { application: e.name });
}
