"use strict";
n(323874), n(14289), n(35956), n(321073), n(333405);
var r = n(562465),
    i = n(618651),
    s = n(53943),
    a = n(873044),
    o = n(30076),
    l = n(209489);
n(723702);
var u = n(728458),
    d = n(998218),
    c = n(368626),
    _ = n(472229),
    f = (n(230172), n(652215));
let E = [
        "https://cdn.discordapp.com/bad-domains/updated_hashes.json",
        "https://cdn.discordapp.com/bad-domains/hashes.json",
    ],
    h = new c.n(),
    p = /\/api(\/v\d+)?\/science/;
(0, r.IA)({
    prepareRequest(e) {
        let { default: t } = n(961350),
            { default: a } = n(111162),
            { default: o } = n(773669),
            { default: l } = n(287809),
            { default: c } = n(954571),
            { isPlatformEmbedded: f } = n(723702);
        if ("/" === e.url[0]) {
            (e.url = (0, r.TP)() + e.url),
                "Authorization" in e.header || "authorization" in e.header || e.set("Authorization", t.getToken()),
                (0, i.D)();
            let n = c.getSuperPropertiesBase64();
            null != n && e.set("X-Super-Properties", n);
            let s = t.getFingerprint();
            null != s && "" !== s && e.set("X-Fingerprint", s);
            let u = t.getInstallationForTracking();
            if ((null != u && "" !== u && e.set("X-Installation-ID", u), f)) {
                let t,
                    n = [];
                null != navigator && (n = [...navigator.languages] ?? []);
                let r =
                    ((t = 10),
                    n
                        .reduce(
                            (e, n) => (10 === t ? e.push(n) : e.push(`${n};q=0.${t}`), (t = Math.max(t - 1, 1)), e),
                            [],
                        )
                        .join(","));
                e.set("Accept-Language", r);
            }
            e.set("X-Discord-Locale", o.locale);
            let E = (0, _.A)();
            null != E && e.set("X-Discord-Timezone", E);
            let m = a.getDebugOptionsHeaderValue();
            if ((null != m && "" !== m && e.set("X-Debug-Options", m), a.isTracingRequests)) {
                let t = l.getCurrentUser(),
                    n = h.generate(t?.id ?? "0");
                e.set("x-client-trace-id", n);
                try {
                    let t = new URL(e.url).pathname;
                    if (
                        !(function (e) {
                            try {
                                let t = new URL(e).pathname;
                                return p.test(t);
                            } catch {
                                return p.test(e);
                            }
                        })(t)
                    ) {
                        let r,
                            i,
                            s =
                                ((r = new URLSearchParams()).append("query", `@http.x_client_trace_id:"${n}"`),
                                r.append("showAllSpans", "true"),
                                (i = d.A.toURLSafe(`traces?${r.toString()}`, "https://datadog.discord.tools/apm/")),
                                null == i ? null : i.toString());
                        null !== s && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, s);
                    }
                } catch (e) {
                    console.error("error while printing tracing log", e);
                }
            }
        }
        e.url,
            e.method,
            s.z8("Network", `Sending ${e.method} to ${e.url}`),
            e.on("response", (t) => {
                let n = null != t && t.status >= 400 ? t.text : null,
                    r = null == n ? "" : `and body: ${n}`;
                s.z8("Network", `Completed ${e.method} to ${e.url} with status: ${t?.status} ${r}`);
            }),
            e.on("error", (t, n) => {
                if (
                    (s.z8("Network", `Failed ${e.method} to ${e.url} with status ${t?.status} and body: ${n?.text}`),
                    null != t && "parse" in t && t.parse)
                ) {
                    let n = "[FILTERED]";
                    E.includes(e.url) && (n = e.xhr?.responseText?.slice(0, 1e3)),
                        u.A.addBreadcrumb({
                            category: "superagent",
                            message: "Failed to parse HTTP response.",
                            data: { method: e.method, url: e.url, responseText: n, status: t.status },
                        });
                }
            });
    },
    interceptResponse: (e, t, r) =>
        400 === e.statusCode && e.body?.captcha_key
            ? (Promise.all([n.e("36037").then(n.bind(n, 165508)), Promise.resolve().then(n.bind(n, 577015))])
                  .then((t) => {
                      let [{ default: n }, { extractCaptchaPropsFromResponse: r }] = t;
                      return n.showCaptchaAsync(r(e.body));
                  })
                  .then((e) => {
                      let { captcha_key: n, captcha_rqtoken: r, captcha_session_id: i } = e,
                          s = { "X-Captcha-Key": n };
                      null != r && (s["X-Captcha-Rqtoken"] = r), null != i && (s["X-Captcha-Session-Id"] = i), t(s);
                  })
                  .catch(r),
              !0)
            : 401 === e.statusCode && e.body?.code === f.t02.MFA_REQUIRED && e.body?.mfa
              ? (Promise.all([n.e("88890"), n.e("28482")])
                    .then(n.bind(n, 522238))
                    .then((n) => {
                        let { openMFAModal: i } = n;
                        i(e.body.mfa, t, r);
                    })
                    .catch(r),
                !0)
              : ((0, o.O)(e.statusCode, e.body?.code)
                    ? Promise.resolve()
                          .then(n.bind(n, 700241))
                          .then((e) => {
                              let { default: t } = e;
                              t();
                          })
                    : (0, a.O)(e.statusCode, e.body?.code)
                      ? n
                            .e("52729")
                            .then(n.bind(n, 116960))
                            .then((t) => {
                                let { default: n } = t;
                                n(e.body?.guild_id);
                            })
                      : 403 === e.statusCode &&
                        e.body?.code === f.t02.RESTRICTED_HOURS_ACTIVE &&
                        Promise.resolve()
                            .then(n.bind(n, 390660))
                            .then((e) => {
                                let { openRestrictedHoursModal: t } = e;
                                t();
                            }),
                !1),
}),
    (0, r.Cu)(async (e) => {
        s.z8("Network", `Request to ${e} failed, will retry.`),
            l.A.isOnline() || (await l.A.awaitOnline(), s.z8("Network", `Network detected online, retrying ${e}`));
    });
