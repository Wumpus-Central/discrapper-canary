n.d(t, {
    F: () => d,
    R: () => u,
}),
    n(35282),
    n(781311);
var r = n(473749),
    i = n(493773),
    a = n(972959),
    o = n(170401),
    s = n(996733),
    l = n(991346),
    c = n(726985);
let u = (0, a.H)(() => ({
    searchResults: c.QF,
    hasSearchResults: !1,
}));
function d() {
    let e = s.Z.useField("query"),
        t = (0, l.Pt)(),
        n = r.useRef(new o.Z((0, l.ji)(t))),
        a = r.useCallback(async (e) => {
            let t = await n.current.search(e.trim());
            u.setState({
                searchResults: t,
                hasSearchResults: !0,
            });
        }, []);
    r.useEffect(() => {
        "" === e || e.length < 2 ? u.resetState() : a(e);
    }, [e, a]),
        (0, i.ZP)(() => () => {
            u.resetState(), s.Z.setState({ query: "" });
        });
    let c = u.useField("searchResults");
    return {
        hasSearchResults: u.useField("hasSearchResults"),
        searchResults: c,
    };
}
