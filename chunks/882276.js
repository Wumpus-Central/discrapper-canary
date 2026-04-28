"use strict";
n.d(t, { T: () => a }), n(321073);
var i = n(627968);
n(64700);
var s = n(2110),
    l = n(192308),
    r = n(369053);
async function a(e, t, a) {
    let {
            onSubmit: o,
            onClose: c,
            isEligibleForFeedback: d = !0,
            isAuthenticated: u = !0,
            emailToken: _,
            appContext: h,
        } = a,
        p = (0, l.getInteractingModalContext)();
    try {
        let a,
            m = u
                ? s.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, r.Op)(e, t)
                    : await (0, r.m9)(e, t)
                : await (0, r.IM)(e, t),
            g = [],
            A = (e) => {
                g.push(e);
            },
            f = (e) => {
                (a = e), o?.();
            };
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("32292"),
                    n.e("24199"),
                    n.e("57036"),
                    n.e("88394"),
                    n.e("34786"),
                    n.e("28367"),
                    n.e("45174"),
                    n.e("85519"),
                    n.e("11871"),
                    n.e("37266"),
                    n.e("55057"),
                    n.e("14976"),
                    n.e("63229"),
                    n.e("31988"),
                    n.e("55343"),
                    n.e("80527"),
                    n.e("21909"),
                    n.e("31825"),
                    n.e("23353"),
                    n.e("96123"),
                    n.e("7175"),
                    n.e("37249"),
                    n.e("14138"),
                    n.e("8971"),
                    n.e("88017"),
                    n.e("77404"),
                    n.e("1040"),
                    n.e("64615"),
                    n.e("17239"),
                    n.e("7454"),
                    n.e("64492"),
                    n.e("20861"),
                    n.e("36682"),
                    n.e("45723"),
                    n.e("56871"),
                    n.e("69601"),
                    n.e("63191"),
                    n.e("60161"),
                    n.e("51444"),
                    n.e("62290"),
                    n.e("98765"),
                    n.e("65437"),
                    n.e("80973"),
                    n.e("19558"),
                    n.e("48900"),
                    n.e("20735"),
                    n.e("27846"),
                    n.e("8306"),
                    n.e("10567"),
                    n.e("12542"),
                    n.e("84317"),
                    n.e("93858"),
                    n.e("40393"),
                    n.e("33773"),
                    n.e("27752"),
                    n.e("7679"),
                    n.e("8021"),
                    n.e("98352"),
                    n.e("77058"),
                    n.e("4986"),
                    n.e("49914"),
                    n.e("19119"),
                    n.e("48612"),
                    n.e("11848"),
                    n.e("10535"),
                ]).then(n.bind(n, 685961));
                return (n) =>
                    (0, i.jsx)(t, {
                        menu: m,
                        reportType: e,
                        modalProps: n,
                        onNavigate: A,
                        onSubmit: f,
                        isAuthenticated: u,
                        emailToken: _,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, r.Hl)(e, g, a), c?.(), d && (0, r.Zv)(e, a ?? null);
                },
                contextKey: null != h ? (0, l.modalContextFromAppContext)(h) : p,
                dismissable: u,
            },
        );
    } catch {}
}
