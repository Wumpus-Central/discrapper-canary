n.d(t, {
    T: () => o,
}),
    n(321073);
var r = n(627968);
n(64700);
var i = n(2110),
    a = n(397927),
    s = n(369053);
async function o(e, t, o) {
    let {
            onSubmit: l,
            onClose: c,
            isEligibleForFeedback: u = !0,
            isAuthenticated: d = !0,
            emailToken: f,
            appContext: p,
        } = o,
        _ = (0, a.lxU)();
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
                (o = e), null == l || l();
            };
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("10614"),
                    n.e("20088"),
                    n.e("42944"),
                    n.e("10117"),
                    n.e("13696"),
                    n.e("38663"),
                    n.e("58652"),
                ]).then(n.bind(n, 779735));
                return (n) =>
                    (0, r.jsx)(t, {
                        menu: h,
                        reportType: e,
                        modalProps: n,
                        onNavigate: g,
                        onSubmit: E,
                        isAuthenticated: d,
                        emailToken: f,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, s.Hl)(e, m, o), null == c || c(), u && (0, s.Zv)(e, null != o ? o : null);
                },
                contextKey: null != p ? (0, a.TId)(p) : _,
            },
        );
    } catch (e) {}
}
