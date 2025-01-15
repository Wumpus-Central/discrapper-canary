n.d(t, {
    E: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    s = n(170401),
    r = n(996733),
    a = n(991346),
    l = n(726985);
function o() {
    let e = (0, r.Z7)(),
        t = (0, a.Pt)(),
        n = i.useRef(new s.Z((0, a.ji)(t))),
        [o, c] = i.useState(!1),
        [d, u] = i.useState(l.QF),
        m = i.useCallback(async (e) => {
            u(await n.current.search(e.trim())), c(!0);
        }, []);
    return (
        i.useEffect(() => {
            '' === e || e.length < 2 ? (u(l.QF), c(!1)) : m(e);
        }, [e, m]),
        {
            hasSearchResults: o,
            searchResults: d
        }
    );
}
