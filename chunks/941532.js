n.d(t, { i: () => a });
var r = n(589414),
    i = n(388032);
function a(e) {
    let t = (0, r.a)(e);
    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
        let n = t ? i.t.yVfotv : i.t.rxlyKL;
        return i.intl.format(n, {
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url,
            termsOfServiceURL: e.terms_of_service_url,
        });
    }
    if (null != e.privacy_policy_url) {
        let n = t ? i.t.pYVSah : i.t.TBvmM2;
        return i.intl.format(n, {
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url,
        });
    }
    if (null != e.terms_of_service_url) {
        let n = t ? i.t.nBLOp5 : i.t["q0T/Q1"];
        return i.intl.format(n, {
            application: e.name,
            termsOfServiceURL: e.terms_of_service_url,
        });
    }
    let n = t ? i.t["8LemYv"] : i.t["3Ywek3"];
    return i.intl.formatToPlainString(n, { application: e.name });
}
