a.d(t, { Fo: () => s, Wn: () => A, v$: () => c });
var l,
    i,
    n = a(562465),
    o = a(652215),
    s =
        (((l = {}).HCAPTCHA_RQDATA = "hCaptchaRqdata"),
        (l.SMITE_RQDATA = "SmiteRqdata"),
        (l.RECAPTCHA = "Recaptcha"),
        (l.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise"),
        l),
    A =
        (((i = {})[(i.EASY = 1)] = "EASY"),
        (i[(i.MODERATE = 2)] = "MODERATE"),
        (i[(i.DIFFICULT = 3)] = "DIFFICULT"),
        (i[(i.VERY_DIFFICULT = 4)] = "VERY_DIFFICULT"),
        i);
async function c(e, t) {
    await n.Bo.post({ url: o.Rsh.CAPTCHA_TEST, body: { decider: e, options: t }, rejectWithError: !1 });
}
