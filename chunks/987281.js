n.d(t, { V: () => u, a: () => c });
var i = n(64700),
    s = n(964486),
    l = n(839214),
    a = n(535762),
    r = n(152056),
    o = n(360619),
    d = n(531525);
let c = (0, l.D)(() => ({ searchResults: d.RH, hasSearchResults: !1 }));
function u() {
    let e = r.A.useField("query"),
        t = (0, o.PH)(),
        n = i.useRef(new a.A((0, o.NI)(t))),
        l = i.useCallback(async (e) => {
            let t = await n.current.search(e.trim());
            c.setState({ searchResults: t, hasSearchResults: !0 });
        }, []);
    i.useEffect(() => {
        "" === e || e.length < 2 ? c.resetState() : l(e);
    }, [e, l]),
        (0, s.Ay)(() => () => {
            c.resetState(), r.A.setState({ query: "" });
        });
    let d = c.useField("searchResults");
    return { hasSearchResults: c.useField("hasSearchResults"), searchResults: d };
}
