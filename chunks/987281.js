n.d(t, { V: () => u, a: () => c });
var i = n(64700),
    s = n(964486),
    l = n(839214),
    r = n(535762),
    a = n(152056),
    o = n(360619),
    d = n(531525);
let c = (0, l.D)(() => ({ searchResults: d.R, hasSearchResults: !1 }));
function u() {
    let e = a.A.useField("query"),
        t = (0, o.PH)(),
        n = i.useRef(new r.A((0, o.NI)(t))),
        l = i.useCallback(async (e) => {
            let t = await n.current.search(e.trim());
            c.setState({ searchResults: t, hasSearchResults: !0 });
        }, []);
    i.useEffect(() => {
        "" === e || e.length < 2 ? c.resetState() : l(e);
    }, [e, l]),
        (0, s.Ay)(() => () => {
            c.resetState(), a.A.setState({ query: "" });
        });
    let d = c.useField("searchResults");
    return { hasSearchResults: c.useField("hasSearchResults"), searchResults: d };
}
