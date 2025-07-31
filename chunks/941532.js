n.d(t, { i: () => a });
var r = n(589414),
    i = n(388032);
function a(e) {
    let t = (0, r.a)(e);
    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
        let n = t ? i.t.yVfotr : i.t.rxlyKC;
        return i.intl.format(n, {
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url,
            termsOfServiceURL: e.terms_of_service_url
        });
    }
    if (null != e.privacy_policy_url) {
        let n = t ? i.t.pYVSam : i.t.TBvmMz;
        return i.intl.format(n, {
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url
        });
    }
    if (null != e.terms_of_service_url) {
        let n = t ? i.t.nBLOp6 : i.t['q0T/Q0'];
        return i.intl.format(n, {
            application: e.name,
            termsOfServiceURL: e.terms_of_service_url
        });
    }
    let n = t ? i.t['8LemYm'] : i.t['3Ywek5'];
    return i.intl.formatToPlainString(n, { application: e.name });
}
