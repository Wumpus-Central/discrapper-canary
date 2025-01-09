n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(881052),
    l = n(53365);
function s(e) {
    let [t, n] = i.useState(!0),
        [s, a] = i.useState(),
        [o, c] = i.useState(),
        d = i.useCallback(async (e) => {
            n(!0), a(void 0);
            try {
                let t = await l.wZ(e);
                c(t);
            } catch (e) {
                a(new r.Hx(e));
            } finally {
                n(!1);
            }
        }, []);
    return (
        i.useEffect(() => {
            d(e);
        }, [e, d]),
        {
            isLoading: t,
            error: s,
            creatorMonetizationOnboardingMarketing: o
        }
    );
}
