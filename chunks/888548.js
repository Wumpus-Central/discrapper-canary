n.r(t),
    n.d(t, {
        extractCaptchaPropsFromResponse: () => c,
        CaptchaCancelError: () => _,
        CaptchaError: () => d,
        emitCaptchaDistributionMetric: () => u,
    });
var i,
    r = n(196765),
    a = n(731738),
    s = n(121894),
    l = n(807393);
let o = (0, r.v)((e) => ({ captchaServeVolume: {} }));
n(320028);
var d = (((i = {}).CANCEL = "cancel"), (i.ERROR = "error"), (i.EXPIRED = "expired"), i);
function c(e) {
    return {
        captchaService: e.captcha_service,
        sitekey: e.captcha_sitekey,
        captchaSessionId: e.captcha_session_id,
        options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible: e.should_serve_invisible ?? !1,
            userflow: e.user_flow,
        },
    };
}
function u(e) {
    0 === Object.keys(o.getState().captchaServeVolume).length &&
        setTimeout(
            () =>
                (function () {
                    for (let [e, t] of Object.entries(o.getState().captchaServeVolume))
                        l.A.distribution(
                            { name: a.K.CAPTCHA_SERVE_VOLUME_DISTRIBUTION, tags: [`user_flow:${e}`] },
                            t,
                            !0,
                        );
                    (0, s.r)(() => o.setState({ captchaServeVolume: {} }));
                })(),
            3e4,
        ),
        (0, s.r)(() => {
            o.setState((t) =>
                null == e
                    ? t
                    : e in t.captchaServeVolume
                      ? { captchaServeVolume: { ...t.captchaServeVolume, [e]: t.captchaServeVolume[e] + 1 } }
                      : { captchaServeVolume: { ...t.captchaServeVolume, [e]: 1 } },
            );
        });
}
class _ extends Error {
    constructor() {
        super("Captcha cancelled");
    }
}
