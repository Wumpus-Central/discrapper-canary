t.d(e, { Z: () => r }), t(47120);
var i = t(192379),
    a = t(881052);
function r(n, e) {
    let [t, r] = i.useState(!1),
        [o, l] = i.useState(null);
    return [
        async () => {
            r(!0), l(null);
            try {
                let e = await n();
                return r(!1), l(null), e;
            } catch (t) {
                let n = new a.Hx(t);
                return null == e || e(n), l(n), r(!1), null;
            }
        },
        {
            loading: t,
            error: o
        }
    ];
}
