n.d(t, { T: () => r }), n(321073);
var l = n(627968);
n(64700);
var i = n(2110),
    a = n(192308),
    s = n(369053);
async function r(e, t, r) {
    let {
            onSubmit: o,
            onClose: c,
            isEligibleForFeedback: d = !0,
            isAuthenticated: u = !0,
            emailToken: m,
            appContext: p,
        } = r,
        _ = (0, a.getInteractingModalContext)();
    try {
        let r,
            A = u
                ? i.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, s.Op)(e, t)
                    : await (0, s.m9)(e, t)
                : await (0, s.IM)(e, t),
            h = [],
            f = (e) => {
                h.push(e);
            },
            x = (e) => {
                (r = e), o?.();
            };
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("24199"),
                    n.e("57036"),
                    n.e("70474"),
                    n.e("61943"),
                    n.e("10614"),
                    n.e("76640"),
                    n.e("7175"),
                    n.e("55202"),
                    n.e("23353"),
                    n.e("73667"),
                    n.e("11250"),
                    n.e("14138"),
                    n.e("3442"),
                    n.e("85071"),
                    n.e("88017"),
                    n.e("70994"),
                    n.e("17239"),
                    n.e("24267"),
                    n.e("51793"),
                    n.e("58164"),
                    n.e("81645"),
                    n.e("36682"),
                    n.e("63070"),
                    n.e("25370"),
                    n.e("28367"),
                    n.e("96313"),
                    n.e("27411"),
                    n.e("49318"),
                    n.e("12721"),
                    n.e("58283"),
                    n.e("17601"),
                    n.e("8087"),
                    n.e("55057"),
                    n.e("60471"),
                    n.e("42257"),
                    n.e("48563"),
                    n.e("27355"),
                    n.e("67876"),
                    n.e("28936"),
                    n.e("64243"),
                    n.e("755"),
                    n.e("94857"),
                    n.e("16419"),
                    n.e("87306"),
                    n.e("25401"),
                    n.e("38114"),
                    n.e("6453"),
                    n.e("77302"),
                    n.e("19677"),
                    n.e("10117"),
                    n.e("39558"),
                    n.e("71555"),
                    n.e("33577"),
                    n.e("3589"),
                ]).then(n.bind(n, 779735));
                return (n) =>
                    (0, l.jsx)(t, {
                        menu: A,
                        reportType: e,
                        modalProps: n,
                        onNavigate: f,
                        onSubmit: x,
                        isAuthenticated: u,
                        emailToken: m,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, s.Hl)(e, h, r), c?.(), d && (0, s.Zv)(e, r ?? null);
                },
                contextKey: null != p ? (0, a.modalContextFromAppContext)(p) : _,
                dismissable: u,
            },
        );
    } catch {}
}
