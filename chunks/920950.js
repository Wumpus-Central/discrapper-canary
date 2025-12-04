r.d(t, { R: () => s });
var n = r(509440),
    a = r(864523),
    i = r(889929);
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
    _ = i.m9;
async function s(e, t) {
    let r = o[e],
        s = (_.Sentry = _.Sentry || {});
    if (!r) throw Error(`Cannot lazy load integration: ${e}`);
    let c = s[e];
    if ("function" == typeof c && !("_isShim" in c)) return c;
    let E = (function (e) {
            let t = (0, n.s3)(),
                r = t && t.getOptions(),
                i = (r && r.cdnBaseUrl) || "https://browser.sentry-cdn.com";
            return new URL(`/${a.J}/${e}.min.js`, i).toString();
        })(r),
        l = i.m9.document.createElement("script");
    (l.src = E), (l.crossOrigin = "anonymous"), (l.referrerPolicy = "origin"), t && l.setAttribute("nonce", t);
    let u = new Promise((e, t) => {
            l.addEventListener("load", () => e()), l.addEventListener("error", t);
        }),
        d = i.m9.document.currentScript,
        I = i.m9.document.body || i.m9.document.head || (d && d.parentElement);
    if (I) I.appendChild(l);
    else throw Error(`Could not find parent element to insert lazy-loaded ${e} script`);
    try {
        await u;
    } catch (t) {
        throw Error(`Error when loading integration: ${e}`);
    }
    let p = s[e];
    if ("function" != typeof p) throw Error(`Could not load integration: ${e}`);
    return p;
}
