n.d(t, { E: () => o }), n(47120);
var i = n(192379),
    s = n(170401),
    r = n(996733),
    l = n(991346),
    a = n(726985);
function o() {
    let e = (0, r.Z7)(),
        t = (0, l.Pt)(),
        n = i.useRef(new s.Z((0, l.ji)(t))),
        [o, c] = i.useState(!1),
        [d, u] = i.useState(a.QF),
        m = i.useCallback(async (e) => {
            u(await n.current.search(e.trim())), c(!0);
        }, []);
    return (
        i.useEffect(() => {
            '' === e || e.length < 2 ? (u(a.QF), c(!1)) : m(e);
        }, [e, m]),
        {
            hasSearchResults: o,
            searchResults: d
        }
    );
}
