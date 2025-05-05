n.d(t, { E: () => o }), n(388685), n(35282), n(781311);
var i = n(73800),
    r = n(170401),
    s = n(996733),
    l = n(991346),
    a = n(726985);
function o() {
    let e = (0, s.Z7)(),
        t = (0, l.Pt)(),
        n = i.useRef(new r.Z((0, l.ji)(t))),
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
