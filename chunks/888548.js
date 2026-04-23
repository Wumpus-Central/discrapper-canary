"use strict";
n.r(t),
    n.d(t, {
        extractCaptchaPropsFromResponse: () => _,
        CaptchaCancelError: () => c,
        CaptchaError: () => d,
        emitCaptchaDistributionMetric: () => u,
    });
var i,
    r = n(353640),
    s = n(731738),
    a = n(121894),
    o = n(831062);
let l = (0, r.v)((e) => ({ captchaServeVolume: {} }));
n(320028);
var d = (((i = {}).CANCEL = "cancel"), (i.ERROR = "error"), (i.EXPIRED = "expired"), i);
function _(e) {
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
    0 === Object.keys(l.getState().captchaServeVolume).length &&
        setTimeout(
            () =>
                (function () {
                    for (let [e, t] of Object.entries(l.getState().captchaServeVolume))
                        o.A.distribution(
                            { name: s.K.CAPTCHA_SERVE_VOLUME_DISTRIBUTION, tags: [`user_flow:${e}`] },
                            t,
                            !0,
                        );
                    (0, a.r)(() => l.setState({ captchaServeVolume: {} }));
                })(),
            3e4,
        ),
        (0, a.r)(() => {
            l.setState((t) =>
                null == e
                    ? t
                    : e in t.captchaServeVolume
                      ? { captchaServeVolume: { ...t.captchaServeVolume, [e]: t.captchaServeVolume[e] + 1 } }
                      : { captchaServeVolume: { ...t.captchaServeVolume, [e]: 1 } },
            );
        });
}
class c extends Error {
    constructor() {
        super("Captcha cancelled");
    }
}
