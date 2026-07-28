i.d(e, { A: () => u });
var l = i(582128),
    n = i(17928),
    p = i(948230),
    r = i(491394),
    c = i(972786);
function u(t) {
    let e = (0, r.B9)(t?.topic),
        i = null != e;
    return (
        l.useEffect(() => {
            if (!i) return;
            let t = c.A.getProjectsFetchState();
            (null == t || "error" === t.type) && (0, p.hF)();
        }, [i]),
        (0, n.bG)(
            [c.A],
            () =>
                null == e
                    ? null
                    : (c.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e) ??
                      null),
            [e],
        )
    );
}
