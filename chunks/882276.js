n.d(t, { T: () => r }), n(321073);
var i = n(627968);
n(64700);
var l = n(2110),
    s = n(192308),
    a = n(369053);
async function r(e, t, r) {
    let {
            onSubmit: o,
            onClose: d,
            isEligibleForFeedback: c = !0,
            isAuthenticated: u = !0,
            emailToken: h,
            appContext: A,
        } = r,
        _ = (0, s.getInteractingModalContext)();
    try {
        let r,
            m = u
                ? l.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, a.Op)(e, t)
                    : await (0, a.m9)(e, t)
                : await (0, a.IM)(e, t),
            g = [],
            p = (e) => {
                g.push(e);
            },
            f = (e) => {
                (r = e), o?.();
            };
        (0, s.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("10614"),
                    n.e("28936"),
                    n.e("64243"),
                    n.e("755"),
                    n.e("94857"),
                    n.e("16419"),
                    n.e("87306"),
                    n.e("46277"),
                    n.e("38114"),
                    n.e("13066"),
                    n.e("10117"),
                    n.e("35843"),
                    n.e("39558"),
                    n.e("93815"),
                    n.e("45071"),
                    n.e("796"),
                ]).then(n.bind(n, 779735));
                return (n) =>
                    (0, i.jsx)(t, {
                        menu: m,
                        reportType: e,
                        modalProps: n,
                        onNavigate: p,
                        onSubmit: f,
                        isAuthenticated: u,
                        emailToken: h,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, a.Hl)(e, g, r), d?.(), c && (0, a.Zv)(e, r ?? null);
                },
                contextKey: null != A ? (0, s.modalContextFromAppContext)(A) : _,
                dismissable: u,
            },
        );
    } catch {}
}
