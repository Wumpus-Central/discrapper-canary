"use strict";
i.d(t, { T: () => s }), i(321073);
var n = i(627968);
i(64700);
var r = i(2110),
    a = i(192308),
    l = i(369053);
async function s(e, t, s) {
    let {
            onSubmit: o,
            onClose: c,
            isEligibleForFeedback: d = !0,
            isAuthenticated: u = !0,
            emailToken: _,
            appContext: p,
        } = s,
        h = (0, a.getInteractingModalContext)();
    try {
        let s,
            f = u
                ? r.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, l.Op)(e, t)
                    : await (0, l.m9)(e, t)
                : await (0, l.IM)(e, t),
            A = [],
            g = (e) => {
                A.push(e);
            },
            m = (e) => {
                (s = e), o?.();
            };
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    i.e("24199"),
                    i.e("57036"),
                    i.e("70474"),
                    i.e("61943"),
                    i.e("10614"),
                    i.e("76640"),
                    i.e("7175"),
                    i.e("55202"),
                    i.e("23353"),
                    i.e("73667"),
                    i.e("11250"),
                    i.e("14138"),
                    i.e("3442"),
                    i.e("85071"),
                    i.e("88017"),
                    i.e("70994"),
                    i.e("17239"),
                    i.e("24267"),
                    i.e("51793"),
                    i.e("58164"),
                    i.e("81645"),
                    i.e("36682"),
                    i.e("63070"),
                    i.e("25370"),
                    i.e("28367"),
                    i.e("96313"),
                    i.e("27411"),
                    i.e("49318"),
                    i.e("12721"),
                    i.e("58283"),
                    i.e("17601"),
                    i.e("8087"),
                    i.e("55057"),
                    i.e("60471"),
                    i.e("42257"),
                    i.e("48563"),
                    i.e("27355"),
                    i.e("67876"),
                    i.e("28936"),
                    i.e("64243"),
                    i.e("755"),
                    i.e("94857"),
                    i.e("16419"),
                    i.e("87306"),
                    i.e("25401"),
                    i.e("38114"),
                    i.e("6453"),
                    i.e("77302"),
                    i.e("19677"),
                    i.e("10117"),
                    i.e("39558"),
                    i.e("71555"),
                    i.e("33577"),
                    i.e("95115"),
                ]).then(i.bind(i, 779735));
                return (i) =>
                    (0, n.jsx)(t, {
                        menu: f,
                        reportType: e,
                        modalProps: i,
                        onNavigate: g,
                        onSubmit: m,
                        isAuthenticated: u,
                        emailToken: _,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, l.Hl)(e, A, s), c?.(), d && (0, l.Zv)(e, s ?? null);
                },
                contextKey: null != p ? (0, a.modalContextFromAppContext)(p) : h,
                dismissable: u,
            },
        );
    } catch {}
}
