n.d(t, { T: () => a }), n(321073);
var i = n(627968);
n(64700);
var l = n(2110),
    s = n(192308),
    r = n(369053);
async function a(e, t, a) {
    let {
            onSubmit: o,
            onClose: d,
            isEligibleForFeedback: c = !0,
            isAuthenticated: u = !0,
            emailToken: h,
            appContext: A,
        } = a,
        _ = (0, s.getInteractingModalContext)();
    try {
        let a,
            g = u
                ? l.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, r.Op)(e, t)
                    : await (0, r.m9)(e, t)
                : await (0, r.IM)(e, t),
            m = [],
            p = (e) => {
                m.push(e);
            },
            f = (e) => {
                (a = e), o?.();
            };
        (0, s.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("34786"),
                    n.e("98765"),
                    n.e("44236"),
                    n.e("65437"),
                    n.e("92803"),
                    n.e("40393"),
                    n.e("33773"),
                    n.e("92754"),
                    n.e("27752"),
                    n.e("46277"),
                    n.e("80388"),
                    n.e("13988"),
                    n.e("19119"),
                    n.e("35843"),
                    n.e("68515"),
                    n.e("33064"),
                    n.e("80683"),
                    n.e("58595"),
                ]).then(n.bind(n, 685961));
                return (n) =>
                    (0, i.jsx)(t, {
                        menu: g,
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
                    (0, r.Hl)(e, m, a), d?.(), c && (0, r.Zv)(e, a ?? null);
                },
                contextKey: null != A ? (0, s.modalContextFromAppContext)(A) : _,
                dismissable: u,
            },
        );
    } catch {}
}
