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
        p = (0, a.lxU)();
    try {
        let o,
            h = d
                ? i.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, s.Op)(e, t)
                    : await (0, s.m9)(e, t)
                : await (0, s.IM)(e, t),
            m = [],
            g = (e) => {
                m.push(e);
            },
            E = (e) => {
                (o = e), l?.();
            };
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("10614"),
                    n.e("28936"),
                    n.e("94857"),
                    n.e("43549"),
                    n.e("3183"),
                    n.e("61486"),
                    n.e("63786"),
                    n.e("56825"),
                    n.e("10117"),
                    n.e("12362"),
                    n.e("12236"),
                ]).then(n.bind(n, 779735));
                return (n) =>
                    (0, r.jsx)(t, {
                        menu: h,
                        reportType: e,
                        modalProps: n,
                        onNavigate: g,
                        onSubmit: E,
                        isAuthenticated: d,
                        emailToken: _,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, s.Hl)(e, m, o), u?.(), c && (0, s.Zv)(e, o ?? null);
                },
                contextKey: null != f ? (0, a.TId)(f) : p,
            },
        );
    } catch {}
}
