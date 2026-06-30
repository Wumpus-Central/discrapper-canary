"use strict";
n.d(t, { A: () => y });
var i = n(439372),
    r = n(158390),
    s = n(636537),
    a = n(941426),
    o = n(228366),
    l = n(927813),
    u = n(38405),
    c = n(577517);
let d = new a.Vy("ParentalConsentWarning"),
    _ = new r.A(5 * l.A.Millis.SECOND, 5 * l.A.Millis.MINUTE, !0),
    h = null,
    f = null,
    p = 0;
function E() {
    null != f && (clearTimeout(f), (f = null));
}
function m() {
    if (null != h) return h;
    let e = p;
    return (h = (async () => {
        try {
            var t;
            let n = await s.Bo.get({ url: "/users/@me/parental-consent/warning", rejectWithError: !0 });
            if (e !== p) return;
            let i =
                ((t = n.body),
                {
                    inGrace: !0 === t.in_grace,
                    daysRemaining: "number" == typeof t.days_remaining ? t.days_remaining : null,
                    surfaces: Array.isArray(t.surfaces) ? t.surfaces : [],
                });
            _.succeed(), E(), o.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: i });
        } catch (t) {
            if (e !== p) return;
            d.error("Failed to fetch parental-consent warning", t),
                u.A.captureException(t, { tags: { source: "parental_consent_warning", step: "fetch_warning" } }),
                null == f &&
                    (f = setTimeout(() => {
                        (f = null), g();
                    }, _.fail()));
        } finally {
            e === p && (h = null);
        }
    })());
}
async function g() {
    null == h && null == f && c.A.shouldFetchToday() && (await m());
}
async function A() {
    E(), null != h && (p++, (h = null)), await m();
}
var I = n(748209),
    T = n(191627);
class S extends i.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            g();
        },
        WINDOW_FOCUS: (e) => {
            let { focused: t } = e;
            t && g();
        },
        WINDOW_VISIBILITY_CHANGE: (e) => {
            let { visible: t } = e;
            t && g();
        },
        FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: (e) => {
            let { linkedUsers: t } = e;
            c.A.getWarning()?.surfaces?.includes(I.x.BANNER) === !0 &&
                t.some((e) => e.link_status === T.Ef.ACTIVE && e.link_type === T.QM.PARENT) &&
                A();
        },
        LOGOUT: () => {
            p++, E(), (h = null), _.succeed();
        },
    };
}
let y = new S();
