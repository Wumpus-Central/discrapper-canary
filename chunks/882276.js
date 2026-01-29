n.d(t, {
    T: () => s,
}),
    n(321073);
var r = n(627968);
n(64700);
var i = n(2110),
    a = n(397927),
    o = n(369053);
async function s(e, t, s) {
    let {
            onSubmit: l,
            onClose: c,
            isEligibleForFeedback: u = !0,
            isAuthenticated: d = !0,
            emailToken: f,
            appContext: p,
        } = s,
        _ = (0, a.lxU)();
    try {
        let s,
            h = d
                ? i.x.REPORT_TO_MOD.has(e.name)
                    ? await (0, o.Op)(e, t)
                    : await (0, o.m9)(e, t)
                : await (0, o.IM)(e, t),
            m = [],
            g = (e) => {
                m.push(e);
            },
            E = (e) => {
                (s = e), null == l || l();
            };
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("10614"),
                    n.e("28936"),
                    n.e("94857"),
                    n.e("3183"),
                    n.e("45586"),
                    n.e("20545"),
                    n.e("10253"),
                    n.e("13696"),
                    n.e("10117"),
                    n.e("94682"),
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
                        emailToken: f,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, o.Hl)(e, m, s), null == c || c(), u && (0, o.Zv)(e, null != s ? s : null);
                },
                contextKey: null != p ? (0, a.TId)(p) : _,
            },
        );
    } catch (e) {}
}
