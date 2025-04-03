n.r(t), n.d(t, { default: () => f });
var r = n(200651),
    s = n(192379),
    o = n(481060),
    a = n(238246),
    i = n(873164),
    c = n(799176),
    l = n(231338),
    u = n(622802),
    d = n(388032);
function f(e) {
    let { windowKey: t } = e;
    return (
        s.useEffect(
            () => (
                i.Z.initialize(),
                () => {
                    i.Z.terminate();
                }
            ),
            []
        ),
        (0, r.jsx)(a.Z, {
            withTitleBar: !0,
            windowKey: t,
            title: d.NW.string(u.Z['7qZdOz']),
            children: (0, r.jsx)(o.f6W, {
                theme: l.BR.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)(c.Z, {
                        className: e,
                        windowKey: t
                    })
            })
        })
    );
}
