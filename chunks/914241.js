n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(268146),
    l = n(481060),
    o = n(855403),
    c = n(59468),
    a = n(443762),
    d = n(510296);
function u() {
    let [{ selectedSource: e }] = (0, a.E_)(),
        [t, n] = i.useState(null);
    return (
        i.useEffect(() => {
            var t;
            if (null != e) {
                if (null == (t = e.id) ? void 0 : t.startsWith(s.vA.CAMERA)) {
                    "url" in e && n(e.url);
                    return;
                }
                (0, c.t)({
                    width: 960,
                    height: 540,
                    types: [s.vA.SCREEN, s.vA.WINDOW],
                }).then((t) => {
                    var r;
                    let { screenSources: i, windowSources: s } = t,
                        l =
                            null !=
                            (r = s.find((t) => ("windowHandle" in e ? (0, o.Z)(t.id, e.windowHandle) : t.id === e.id)))
                                ? r
                                : i.find((t) => e.id === t.id);
                    null != l && n(l.url);
                });
            }
        }, [e]),
        (0, r.jsx)("div", {
            className: d.root,
            children:
                null == t
                    ? (0, r.jsx)(l.$jN, {})
                    : (0, r.jsx)("img", {
                          src: t,
                          alt: "",
                          className: d.largePreview,
                      }),
        })
    );
}
