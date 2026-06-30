"use strict";
n.d(t, { A: () => N });
var i = n(439372),
    r = n(695515),
    s = n(158390),
    a = n(636537),
    o = n(941426),
    l = n(228366),
    u = n(927813),
    c = n(38405),
    d = n(577517);
let _ = new o.Vy("ParentalConsentWarning"),
    h = new s.A(5 * u.A.Millis.SECOND, 5 * u.A.Millis.MINUTE, !0),
    f = null,
    p = null,
    E = 0;
function m() {
    null != p && (clearTimeout(p), (p = null));
}
function g() {
    if (null != f) return f;
    let e = E;
    return (f = (async () => {
        try {
            var t;
            let n = await a.Bo.get({ url: "/users/@me/parental-consent/warning", rejectWithError: !0 });
            if (e !== E) return;
            let i =
                ((t = n.body),
                {
                    inGrace: !0 === t.in_grace,
                    daysRemaining: "number" == typeof t.days_remaining ? t.days_remaining : null,
                    surfaces: Array.isArray(t.surfaces) ? t.surfaces : [],
                });
            h.succeed(), m(), l.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: i });
        } catch (t) {
            if (e !== E) return;
            _.error("Failed to fetch parental-consent warning", t),
                c.A.captureException(t, { tags: { source: "parental_consent_warning", step: "fetch_warning" } }),
                null == p &&
                    (p = setTimeout(() => {
                        (p = null), A();
                    }, h.fail()));
        } finally {
            e === E && (f = null);
        }
    })());
}
async function A() {
    null == f && null == p && d.A.shouldFetchToday() && (await g());
}
async function I() {
    m(), null != f && (E++, (f = null)), await g();
}
var T = n(748209),
    S = n(191627);
function y(e) {
    return e.some((e) => e.link_status === S.Ef.ACTIVE && e.link_type === S.QM.PARENT);
}
class C extends i.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            d.A.getWarning()?.surfaces?.includes(T.x.BANNER) === !0 && y(Object.values(r.A.getLinkedUsers()))
                ? I()
                : A();
        },
        WINDOW_FOCUS: (e) => {
            let { focused: t } = e;
            t && A();
        },
        WINDOW_VISIBILITY_CHANGE: (e) => {
            let { visible: t } = e;
            t && A();
        },
        FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: (e) => {
            let { linkedUsers: t } = e;
            y(t) && I();
        },
        LOGOUT: () => {
            E++, m(), (f = null), h.succeed();
        },
    };
}
let N = new C();
