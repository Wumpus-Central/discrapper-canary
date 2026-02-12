"use strict";
n.d(t, { T: () => o }), n(321073);
var r = n(627968);
n(64700);
var i = n(2110),
    a = n(397927),
    s = n(369053);
async function o(e, t, o) {
    let {
            onSubmit: l,
            onClose: u,
            isEligibleForFeedback: c = !0,
            isAuthenticated: d = !0,
            emailToken: _,
            appContext: f,
        } = o,
        h = (0, a.lxU)();
    try {
        let o,
            p = d
                ? i.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, s.Op)(e, t)
                    : await (0, s.m9)(e, t)
                : await (0, s.IM)(e, t),
            g = [],
            E = (e) => {
                g.push(e);
            },
            A = (e) => {
                (o = e), l?.();
            };
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("10614"),
                    n.e("28936"),
                    n.e("94857"),
                    n.e("3183"),
                    n.e("45586"),
                    n.e("95320"),
                    n.e("10117"),
                    n.e("66255"),
                    n.e("91149"),
                ]).then(n.bind(n, 779735));
                return (n) =>
                    (0, r.jsx)(t, {
                        menu: p,
                        reportType: e,
                        modalProps: n,
                        onNavigate: E,
                        onSubmit: A,
                        isAuthenticated: d,
                        emailToken: _,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, s.Hl)(e, g, o), u?.(), c && (0, s.Zv)(e, o ?? null);
                },
                contextKey: null != f ? (0, a.TId)(f) : h,
            },
        );
    } catch {}
}
