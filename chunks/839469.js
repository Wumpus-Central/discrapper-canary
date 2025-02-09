n.d(t, { E: () => o }), n(47120);
var i = n(192379),
    s = n(170401),
    l = n(996733),
    r = n(991346),
    a = n(726985);
function o() {
    let e = (0, l.Z7)(),
        t = (0, r.Pt)(),
        n = i.useRef(new s.Z((0, r.ji)(t))),
        [o, c] = i.useState(!1),
        [d, u] = i.useState(a.QF),
        h = i.useCallback(async (e) => {
            u(await n.current.search(e.trim())), c(!0);
        }, []);
    return (
        i.useEffect(() => {
            '' === e || e.length < 2 ? (u(a.QF), c(!1)) : h(e);
        }, [e, h]),
        {
            hasSearchResults: o,
            searchResults: d
        }
    );
}
