"use strict";
n.d(t, { T: () => o }), n(321073);
var r = n(627968);
n(64700);
var i = n(2110),
    s = n(397927),
    a = n(369053);
async function o(e, t, o) {
    let {
            onSubmit: l,
            onClose: u,
            isEligibleForFeedback: c = !0,
            isAuthenticated: d = !0,
            emailToken: _,
            appContext: f,
        } = o,
        p = (0, s.lxU)();
    try {
        let o,
            h = d
                ? i.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, a.Op)(e, t)
                    : await (0, a.m9)(e, t)
                : await (0, a.IM)(e, t),
            m = [],
            E = (e) => {
                m.push(e);
            },
            g = (e) => {
                (o = e), l?.();
            };
        (0, s.mMO)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("18299"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("94857"),
                    n.e("3183"),
                    n.e("28569"),
                    n.e("55905"),
                    n.e("10117"),
                    n.e("95814"),
                    n.e("20757"),
                ]).then(n.bind(n, 779735));
                return (n) =>
                    (0, r.jsx)(t, {
                        menu: h,
                        reportType: e,
                        modalProps: n,
                        onNavigate: E,
                        onSubmit: g,
                        isAuthenticated: d,
                        emailToken: _,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, a.Hl)(e, m, o), u?.(), c && (0, a.Zv)(e, o ?? null);
                },
                contextKey: null != f ? (0, s.TId)(f) : p,
            },
        );
    } catch {}
}
