n.d(t, { A: () => s });
var l = n(64700),
    r = n(17928),
    i = n(948230),
    o = n(373606),
    a = n(972786);
function s(e) {
    let t = (0, o.B9)(e?.topic),
        n = null != t;
    return (
        l.useEffect(() => {
            if (!n) return;
            let e = a.A.getProjectsFetchState();
            (null == e || "error" === e.type) && (0, i.hF)();
        }, [n]),
        (0, r.bG)(
            [a.A],
            () =>
                null == t
                    ? null
                    : (a.A.getAllProjects().find((e) => e.application_id === t || e.preview_application_id === t) ??
                      null),
            [t],
        )
    );
}
