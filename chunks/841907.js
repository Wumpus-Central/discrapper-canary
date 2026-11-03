n.d(t, { r: () => o });
var l = n(582128),
    i = n(17928),
    r = n(73825),
    a = n(97352),
    s = n(202541);
function o(e) {
    let { isLoaded: t, isFetching: n } = (0, i.cf)([a.A], () => ({
            isLoaded: a.A.isLoadedForSKU(s.V4),
            isFetching: a.A.isFetchingForSKU(s.V4),
        })),
        o = l.useRef(!1),
        [u, c] = l.useState(!1);
    return (
        l.useEffect(() => {
            !e || t || n || o.current || ((o.current = !0), l());
            async function l() {
                try {
                    await (0, r.ur)(s.V4);
                } catch {
                    c(!0);
                }
            }
        }, [e, t, n]),
        { isLoaded: t, hasFetchFailed: u }
    );
}
