"use strict";
let i;
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var a = n(192308),
    s = n(439372),
    l = n(695515),
    o = n(794364),
    d = n(577517),
    c = n(748209),
    u = n(191627);
function _(e) {
    return e.some((e) => e.link_status === u.Ef.ACTIVE && e.link_type === u.QM.PARENT);
}
function E(e) {
    let t = e?.daysRemaining;
    e?.surfaces?.includes(c.x.MODAL) !== !0 ||
        null == t ||
        !(t >= 0) ||
        d.A.hasShownModalToday() ||
        _(Object.values(l.A.getLinkedUsers())) ||
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await n.e("44947").then(n.bind(n, 145662));
                return (n) => (0, r.jsx)(e, { ...n, daysRemaining: t });
            },
            { modalKey: "ParentalConsentWarningModal" },
        );
}
function A() {
    d.A.shouldFetchToday() || E(d.A.getWarning());
}
class h extends s.A {
    actions = {
        PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: (e) => {
            let { warning: t } = e;
            E(t);
        },
        POST_CONNECTION_OPEN: () => {
            (i = _(Object.values(l.A.getLinkedUsers()))), (0, o.PU)(), A();
        },
        WINDOW_FOCUS: (e) => {
            let { focused: t } = e;
            t && ((0, o.PU)(), A());
        },
        WINDOW_VISIBILITY_CHANGE: (e) => {
            let { visible: t } = e;
            t && ((0, o.PU)(), A());
        },
        CURRENT_USER_UPDATE: (e) => {
            let { user: t } = e;
            if (void 0 === t.linked_users) return;
            let n = _(t.linked_users),
                r = i;
            (i = n),
                void 0 !== r &&
                    r !== n &&
                    (n ? d.A.getWarning()?.surfaces?.includes(c.x.BANNER) === !0 && (0, o.QX)() : (0, o.QX)());
        },
        LOGOUT: () => {
            (i = void 0), (0, o.Ld)();
        },
    };
}
let I = new h();
