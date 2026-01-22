n.d(t, {
    V: () => d,
    a: () => u,
}),
    n(747238),
    n(733351);
var r = n(64700),
    i = n(964486),
    a = n(839214),
    s = n(535762),
    o = n(152056),
    l = n(360619),
    c = n(531525);
let u = (0, a.D)(() => ({
    searchResults: c.R,
    hasSearchResults: !1,
}));
function d() {
    let e = o.A.useField("query"),
        t = (0, l.PH)(),
        n = r.useRef(new s.A((0, l.NI)(t))),
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
        (0, i.Ay)(() => () => {
            u.resetState(), o.A.setState({ query: "" });
        });
    let c = u.useField("searchResults");
    return {
        hasSearchResults: u.useField("hasSearchResults"),
        searchResults: c,
    };
}
