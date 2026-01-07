r.d(t, { Z: () => f }), r(388685);
var n = r(54381),
    i = r(473749),
    s = r(268146),
    l = r(481060),
    o = r(131951),
    c = r(855403),
    a = r(59468),
    d = r(443762),
    u = r(510296);
function f() {
    let [{ selectedSource: e }] = (0, d.E_)(),
        [t, r] = i.useState(null),
        [f, h] = i.useState(!0);
    return (
        i.useEffect(() => {
            !(async function () {
                var t, n;
                if (null == e) return;
                if ((h(!0), null == (t = e.id) ? void 0 : t.startsWith(s.vA.CAMERA))) {
                    "url" in e && (r(e.url), h(!1));
                    return;
                }
                if ("url" in e && "" !== e.url) {
                    r(e.url), h(!1);
                    return;
                }
                let i = "windowHandle" in e ? e.windowHandle : void 0;
                if (null != i) {
                    try {
                        let e = o.Z.getMediaEngine(),
                            t = await e.getSingleWindowPreview(i, 960, 540);
                        if (null != t) {
                            r(t.url), h(!1);
                            return;
                        }
                    } catch (e) {}
                    let { windowSources: e } = await (0, a.t)({
                            width: 960,
                            height: 540,
                            types: [s.vA.WINDOW],
                        }),
                        t = e.find((e) => (0, c.Z)(e.id, i));
                    null != t && (r(t.url), h(!1));
                    return;
                }
                let { screenSources: l, windowSources: d } = await (0, a.t)({
                        width: 960,
                        height: 540,
                        types: [s.vA.SCREEN, s.vA.WINDOW],
                    }),
                    u =
                        null !=
                        (n = d.find((t) => ("windowHandle" in e ? (0, c.Z)(t.id, e.windowHandle) : t.id === e.id)))
                            ? n
                            : l.find((t) => e.id === t.id);
                null != u && (r(u.url), h(!1));
            })();
        }, [e]),
        (0, n.jsx)("div", {
            className: u.root,
            children: f
                ? (0, n.jsx)(l.$jN, {})
                : null != t
                  ? (0, n.jsx)("img", {
                        src: t,
                        alt: "",
                        className: u.largePreview,
                    })
                  : null,
        })
    );
}
