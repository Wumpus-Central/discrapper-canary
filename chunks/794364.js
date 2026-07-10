"use strict";
n.d(t, { _z: () => g, Ld: () => m, QX: () => T, PU: () => p });
var i = n(158390),
    r = n(636537),
    a = n(941426),
    s = n(228366),
    l = n(927813),
    o = n(38405);
let d = (0, n(945810).mj)({
    kind: "user",
    name: "2026-07-parental-consent-warning-fetch",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var c = n(577517);
let u = new a.Vy("ParentalConsentWarning"),
    _ = new i.A(5 * l.A.Millis.SECOND, 5 * l.A.Millis.MINUTE, !0),
    E = null,
    A = null,
    h = 0;
function I() {
    null != A && (clearTimeout(A), (A = null));
}
function f() {
    if (!d.getConfig({ location: "parental_consent_warning_manager" }).enabled) return Promise.resolve();
    if (null != E) return E;
    let e = h;
    return (E = (async () => {
        try {
            var t;
            let n = await r.Bo.get({ url: "/users/@me/parental-consent/warning", rejectWithError: !0 });
            if (e !== h) return;
            let i =
                ((t = n.body),
                {
                    inGrace: !0 === t.in_grace,
                    daysRemaining: "number" == typeof t.days_remaining ? t.days_remaining : null,
                    surfaces: Array.isArray(t.surfaces) ? t.surfaces : [],
                });
            _.succeed(), I(), s.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: i });
        } catch (t) {
            if (e !== h) return;
            u.error("Failed to fetch parental-consent warning", t),
                o.A.captureException(t, { tags: { source: "parental_consent_warning", step: "fetch_warning" } }),
                null == A &&
                    (A = setTimeout(() => {
                        (A = null), p();
                    }, _.fail()));
        } finally {
            e === h && (E = null);
        }
    })());
}
async function p() {
    null == E && null == A && c.A.shouldFetchToday() && (await f());
}
async function T() {
    I(), null != E && (h++, (E = null)), await f();
}
function m() {
    h++, I(), (E = null), _.succeed();
}
function g() {
    s.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_CLEARED" });
}
