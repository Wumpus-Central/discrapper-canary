n(896048), n(680155), n(323874), n(14289), n(35956), n(321073), n(693327), n(554719), n(747238), n(333405);
var r = n(562465),
    i = n(618651),
    a = n(53943),
    s = n(873044),
    o = n(232946),
    l = n(30076),
    c = n(209489);
n(723702);
var u = n(728458),
    d = n(998218),
    f = n(368626),
    p = n(472229),
    _ = n(230172),
    h = n(652215);
let m = [
        "https://cdn.discordapp.com/bad-domains/updated_hashes.json",
        "https://cdn.discordapp.com/bad-domains/hashes.json",
    ],
    g = new f.n();
function E(e) {
    let t = new URLSearchParams();
    t.append("query", '@http.x_client_trace_id:"'.concat(e, '"')), t.append("showAllSpans", "true");
    let n = d.A.toURLSafe("traces?".concat(t.toString()), "https://datadog.discord.tools/apm/");
    return null == n ? null : n.toString();
}
let b = /\/api(\/v\d+)?\/science/;
function y(e) {
    let t = 10;
    return e
        .reduce(
            (e, n) => (10 === t ? e.push(n) : e.push("".concat(n, ";q=0.").concat(t)), (t = Math.max(t - 1, 1)), e),
            [],
        )
        .join(",");
}
function O(e) {
    try {
        let t = new URL(e).pathname;
        return b.test(t);
    } catch (t) {
        return b.test(e);
    }
}
function A(e, t) {
    return !1;
}
(0, r.IA)({
    prepareRequest(e) {
        let { default: t } = n(961350),
            { default: s } = n(111162),
            { default: o } = n(773669),
            { default: l } = n(287809),
            { default: c } = n(954571),
            { isPlatformEmbedded: d } = n(723702);
        if ("/" === e.url[0]) {
            var f, h;
            (e.url = (0, r.TP)() + e.url),
                "Authorization" in e.header || "authorization" in e.header || e.set("Authorization", t.getToken()),
                (0, i.D)();
            let n = c.getSuperPropertiesBase64();
            null != n && e.set("X-Super-Properties", n);
            let a = t.getFingerprint();
            null != a && "" !== a && e.set("X-Fingerprint", a);
            let u = t.getInstallationForTracking();
            if ((null != u && "" !== u && e.set("X-Installation-ID", u), d)) {
                let t = [];
                null != navigator && (t = ((f = [...navigator.languages]), f));
                let n = y(t);
                e.set("Accept-Language", n);
            }
            e.set("X-Discord-Locale", o.locale);
            let _ = (0, p.A)();
            null != _ && e.set("X-Discord-Timezone", _);
            let m = s.getDebugOptionsHeaderValue();
            if ((null != m && "" !== m && e.set("X-Debug-Options", m), s.isTracingRequests)) {
                let t = l.getCurrentUser(),
                    n = g.generate(null != (h = null == t ? void 0 : t.id) ? h : "0");
                e.set("x-client-trace-id", n);
                try {
                    let t = new URL(e.url).pathname;
                    if (!O(t)) {
                        let r = E(n);
                        null !== r && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, r);
                    }
                } catch (e) {
                    console.error("error while printing tracing log", e);
                }
            }
        }
        let b = e.url,
            v = e.method;
        A(b, v) && (0, _.R)(b, v),
            a.z8("Network", "Sending ".concat(e.method, " to ").concat(e.url)),
            e.on("response", (t) => {
                let n = null != t && t.status >= 400 ? t.text : null,
                    r = null == n ? "" : "and body: ".concat(n);
                a.z8(
                    "Network",
                    "Completed "
                        .concat(e.method, " to ")
                        .concat(e.url, " with status: ")
                        .concat(null == t ? void 0 : t.status, " ")
                        .concat(r),
                );
            }),
            e.on("error", (t, n) => {
                if (
                    (a.z8(
                        "Network",
                        "Failed "
                            .concat(e.method, " to ")
                            .concat(e.url, " with status ")
                            .concat(null == t ? void 0 : t.status, " and body: ")
                            .concat(null == n ? void 0 : n.text),
                    ),
                    null != t && "parse" in t && t.parse)
                ) {
                    let n = "[FILTERED]";
                    if (m.includes(e.url)) {
                        var r, i;
                        n = null == (i = e.xhr) || null == (r = i.responseText) ? void 0 : r.slice(0, 1000);
                    }
                    u.A.addBreadcrumb({
                        category: "superagent",
                        message: "Failed to parse HTTP response.",
                        data: {
                            method: e.method,
                            url: e.url,
                            responseText: n,
                            status: t.status,
                        },
                    });
                }
            });
    },
    interceptResponse(e, t, r) {
        var i, a, c, u, d;
        return 400 === e.statusCode && (null == (i = e.body) ? void 0 : i.captcha_key)
            ? (Promise.all([n.e("36037").then(n.bind(n, 165508)), Promise.resolve().then(n.bind(n, 577015))])
                  .then((t) => {
                      let [{ default: n }, { extractCaptchaPropsFromResponse: r }] = t;
                      return n.showCaptchaAsync(r(e.body));
                  })
                  .then((e) => {
                      let { captcha_key: n, captcha_rqtoken: r, captcha_session_id: i } = e,
                          a = { "X-Captcha-Key": n };
                      null != r && (a["X-Captcha-Rqtoken"] = r), null != i && (a["X-Captcha-Session-Id"] = i), t(a);
                  })
                  .catch(r),
              !0)
            : 401 === e.statusCode &&
                (null == (a = e.body) ? void 0 : a.code) === h.t02.MFA_REQUIRED &&
                (null == (c = e.body) ? void 0 : c.mfa)
              ? (Promise.all([n.e("88890"), n.e("25327")])
                    .then(n.bind(n, 522238))
                    .then((n) => {
                        let { openMFAModal: i } = n;
                        i(e.body.mfa, t, r);
                    })
                    .catch(r),
                !0)
              : ((0, l.O)(e.statusCode, null == (u = e.body) ? void 0 : u.code)
                    ? Promise.resolve()
                          .then(n.bind(n, 700241))
                          .then((e) => {
                              let { default: t } = e;
                              t();
                          })
                    : (0, s.O)(e.statusCode, null == (d = e.body) ? void 0 : d.code)
                      ? n
                            .e("52729")
                            .then(n.bind(n, 116960))
                            .then((t) => {
                                var n;
                                let { default: r } = t;
                                r(null == (n = e.body) ? void 0 : n.guild_id);
                            })
                      : (0, o.f)(e) &&
                        n
                            .e("75880")
                            .then(n.bind(n, 129435))
                            .then((e) => {
                                let { handleBlockedByProxy: t } = e;
                                t();
                            }),
                !1);
    },
}),
    (0, r.Cu)(async (e) => {
        a.z8("Network", "Request to ".concat(e, " failed, will retry.")),
            c.A.isOnline() ||
                (await c.A.awaitOnline(), a.z8("Network", "Network detected online, retrying ".concat(e)));
    });
