n.d(t, { E: () => l }), n(388685), n(35282), n(781311);
var r = n(647438),
    i = n(170401),
    a = n(996733),
    o = n(991346),
    s = n(726985);
function l() {
    let e = (0, a.Z7)(),
        t = (0, o.Pt)(),
        n = r.useRef(new i.Z((0, o.ji)(t))),
        [l, c] = r.useState(!1),
        [u, d] = r.useState(s.QF),
        f = r.useCallback(async (e) => {
            d(await n.current.search(e.trim())), c(!0);
        }, []);
    return (
        r.useEffect(() => {
            "" === e || e.length < 2 ? (d(s.QF), c(!1)) : f(e);
        }, [e, f]),
        {
            hasSearchResults: l,
            searchResults: u,
        }
    );
}
