l.d(t, { Fo: () => s, Wn: () => A, v$: () => c });
var a,
    i,
    n = l(562465),
    o = l(652215),
    s =
        (((a = {}).HCAPTCHA_RQDATA = "hCaptchaRqdata"),
        (a.SMITE_RQDATA = "SmiteRqdata"),
        (a.RECAPTCHA = "Recaptcha"),
        (a.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise"),
        a),
    A =
        (((i = {})[(i.EASY = 1)] = "EASY"),
        (i[(i.MODERATE = 2)] = "MODERATE"),
        (i[(i.DIFFICULT = 3)] = "DIFFICULT"),
        (i[(i.VERY_DIFFICULT = 4)] = "VERY_DIFFICULT"),
        i);
async function c(e, t) {
    await n.Bo.post({ url: o.Rsh.CAPTCHA_TEST, body: { decider: e, options: t }, rejectWithError: !1 });
}
