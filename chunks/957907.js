i.d(e, { A: () => l });
var r = i(582128),
    n = i(17928),
    _ = i(948230),
    E = i(683180),
    a = i(972786);
function l(t) {
    let e = (0, E.B9)(t?.topic),
        i = null != e;
    return (
        r.useEffect(() => {
            if (!i) return;
            let t = a.A.getProjectsFetchState();
            (null == t || "error" === t.type) && (0, _.hF)();
        }, [i]),
        (0, n.bG)(
            [a.A],
            () =>
                null == e
                    ? null
                    : (a.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e) ??
                      null),
            [e],
        )
    );
}
