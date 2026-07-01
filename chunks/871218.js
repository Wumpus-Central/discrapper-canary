"use strict";
n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(439372),
    a = n(695515),
    o = n(158390),
    l = n(636537),
    u = n(941426),
    c = n(228366),
    d = n(927813),
    _ = n(38405),
    h = n(577517);
let f = new u.Vy("ParentalConsentWarning"),
    p = new o.A(5 * d.A.Millis.SECOND, 5 * d.A.Millis.MINUTE, !0),
    E = null,
    m = null,
    g = 0;
function A() {
    null != m && (clearTimeout(m), (m = null));
}
function I() {
    if (null != E) return E;
    let e = g;
    return (E = (async () => {
        try {
            var t;
            let n = await l.Bo.get({ url: "/users/@me/parental-consent/warning", rejectWithError: !0 });
            if (e !== g) return;
            let i =
                ((t = n.body),
                {
                    inGrace: !0 === t.in_grace,
                    daysRemaining: "number" == typeof t.days_remaining ? t.days_remaining : null,
                    surfaces: Array.isArray(t.surfaces) ? t.surfaces : [],
                });
            p.succeed(), A(), c.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: i });
        } catch (t) {
            if (e !== g) return;
            f.error("Failed to fetch parental-consent warning", t),
                _.A.captureException(t, { tags: { source: "parental_consent_warning", step: "fetch_warning" } }),
                null == m &&
                    (m = setTimeout(() => {
                        (m = null), T();
                    }, p.fail()));
        } finally {
            e === g && (E = null);
        }
    })());
}
async function T() {
    null == E && null == m && h.A.shouldFetchToday() && (await I());
}
async function S() {
    A(), null != E && (g++, (E = null)), await I();
}
var y = n(748209),
    C = n(191627);
function N(e) {
    return e.some((e) => e.link_status === C.Ef.ACTIVE && e.link_type === C.QM.PARENT);
}
function v(e) {
    let t = e?.daysRemaining;
    e?.surfaces?.includes(y.x.MODAL) !== !0 ||
        null == t ||
        !(t >= 0) ||
        h.A.hasShownModalToday() ||
        N(Object.values(a.A.getLinkedUsers())) ||
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await n.e("44947").then(n.bind(n, 145662));
                return (n) => (0, i.jsx)(e, { ...n, daysRemaining: t });
            },
            { modalKey: "ParentalConsentWarningModal" },
        );
}
function R() {
    h.A.shouldFetchToday() || v(h.A.getWarning());
}
class O extends s.A {
    actions = {
        PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: (e) => {
            let { warning: t } = e;
            v(t);
        },
        POST_CONNECTION_OPEN: () => {
            T(), R();
        },
        WINDOW_FOCUS: (e) => {
            let { focused: t } = e;
            t && (T(), R());
        },
        WINDOW_VISIBILITY_CHANGE: (e) => {
            let { visible: t } = e;
            t && (T(), R());
        },
        FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: (e) => {
            let { linkedUsers: t } = e;
            h.A.getWarning()?.surfaces?.includes(y.x.BANNER) === !0 && N(t) && S();
        },
        LOGOUT: () => {
            g++, A(), (E = null), p.succeed();
        },
    };
}
let b = new O();
