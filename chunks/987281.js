n.d(t, { V: () => _, a: () => u });
var i = n(64700),
    s = n(964486),
    a = n(839214),
    l = n(324593),
    r = n(535762),
    o = n(152056),
    c = n(360619),
    d = n(531525);
let u = (0, a.D)(() => ({ searchResults: d.R, hasSearchResults: !1 }));
function _() {
    let e = o.A.useField("query"),
        t = (0, c.PH)(),
        n = i.useRef(new r.A((0, c.NI)(t))),
        a = i.useCallback(async (e) => {
            let t = await n.current.search(e.trim());
            u.setState({ searchResults: t, hasSearchResults: !0 });
        }, []);
    i.useEffect(() => {
        "" === e || e.length < 2 ? u.resetState() : (a(e), l.A.maybeTrackQueryEntered());
    }, [e, a]),
        (0, s.Ay)(() => () => {
            u.resetState(), o.A.setState({ query: "" }), l.A.terminate();
        });
    let d = u.useField("searchResults");
    return { hasSearchResults: u.useField("hasSearchResults"), searchResults: d };
}
