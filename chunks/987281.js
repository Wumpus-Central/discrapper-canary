"use strict";
r.d(t, { V: () => d });
var n = r(64700),
    a = r(964486),
    i = r(839214),
    l = r(535762),
    s = r(152056),
    o = r(360619),
    c = r(531525);
let u = (0, i.D)(() => ({ searchResults: c.R, hasSearchResults: !1 }));
function d() {
    let e = s.A.useField("query"),
        t = (0, o.P)(),
        r = n.useRef(new l.A((0, o.N)(t))),
        i = n.useCallback(async (e) => {
            let t = await r.current.search(e.trim());
            u.setState({ searchResults: t, hasSearchResults: !0 });
        }, []);
    n.useEffect(() => {
        "" === e || e.length < 2 ? u.resetState() : i(e);
    }, [e, i]),
        (0, a.Ay)(() => () => {
            u.resetState(), s.A.setState({ query: "" });
        });
    let c = u.useField("searchResults");
    return { hasSearchResults: u.useField("hasSearchResults"), searchResults: c };
}
