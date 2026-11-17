var s = n(582128),
    r = n(73153),
    a = n(627784),
    i = n(15552);
function l(e) {
    function t() {
        e({});
    }
    function n(t) {
        let { error: n } = t;
        if (!(n instanceof a.LG)) return;
        let s = (0, i.W)(n),
            r = s.message ?? s.date_of_birth;
        (null == s.login && null == s.email && null != r && (s.login = r), e(s));
    }
    return (
        r.h.subscribe("PASSWORDLESS_START", t),
        r.h.subscribe("PASSWORDLESS_FAILURE", n),
        () => {
            (r.h.unsubscribe("PASSWORDLESS_START", t), r.h.unsubscribe("PASSWORDLESS_FAILURE", n));
        }
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            s.useEffect(() => l(e), [e]);
        },
        K: l,
    },
);
