n.d(t, { K: () => o });
var a = n(64700),
    l = n(311907),
    i = n(73153),
    r = n(429707),
    s = n(274303);
function o() {
    let e = (0, l.cf)([s.A], () => ({
        isLoading: s.A.getIsValidatingUsers(),
        multiAccountUsers: s.A.getUsers(),
    }));
    return (
        a.useEffect(() => {
            i.h.wait(() => {
                r.F6();
            });
        }, []),
        e
    );
}
