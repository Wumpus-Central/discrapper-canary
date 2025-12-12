n.d(t, { R: () => s });
var r = n(509440),
    i = n(864523),
    a = n(889929);
let o = {
        replayIntegration: "replay",
        replayCanvasIntegration: "replay-canvas",
        feedbackIntegration: "feedback",
        feedbackModalIntegration: "feedback-modal",
        feedbackScreenshotIntegration: "feedback-screenshot",
        captureConsoleIntegration: "captureconsole",
        contextLinesIntegration: "contextlines",
        linkedErrorsIntegration: "linkederrors",
        debugIntegration: "debug",
        dedupeIntegration: "dedupe",
        extraErrorDataIntegration: "extraerrordata",
        httpClientIntegration: "httpclient",
        reportingObserverIntegration: "reportingobserver",
        rewriteFramesIntegration: "rewriteframes",
        sessionTimingIntegration: "sessiontiming",
        browserProfilingIntegration: "browserprofiling",
    },
    _ = a.m9;
async function s(e, t) {
    let n = o[e],
        s = (_.Sentry = _.Sentry || {});
    if (!n) throw Error(`Cannot lazy load integration: ${e}`);
    let c = s[e];
    if ("function" == typeof c && !("_isShim" in c)) return c;
    let E = (function (e) {
            let t = (0, r.s3)(),
                n = t && t.getOptions(),
                a = (n && n.cdnBaseUrl) || "https://browser.sentry-cdn.com";
            return new URL(`/${i.J}/${e}.min.js`, a).toString();
        })(n),
        l = a.m9.document.createElement("script");
    (l.src = E), (l.crossOrigin = "anonymous"), (l.referrerPolicy = "origin"), t && l.setAttribute("nonce", t);
    let u = new Promise((e, t) => {
            l.addEventListener("load", () => e()), l.addEventListener("error", t);
        }),
        d = a.m9.document.currentScript,
        p = a.m9.document.body || a.m9.document.head || (d && d.parentElement);
    if (p) p.appendChild(l);
    else throw Error(`Could not find parent element to insert lazy-loaded ${e} script`);
    try {
        await u;
    } catch (t) {
        throw Error(`Error when loading integration: ${e}`);
    }
    let f = s[e];
    if ("function" != typeof f) throw Error(`Could not load integration: ${e}`);
    return f;
}
