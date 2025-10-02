n.d(t, { A: () => l });
var i = n(647438),
    r = n(442837),
    s = n(384275),
    o = n(881998);
function l() {
    let { disableFetch: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.e7)([o.Z], () => o.Z.getFetchState());
    return (
        i.useEffect(() => {
            e || t !== o.M.NOT_FETCHED || s.Z.fetch();
        }, [e, t]),
        { loading: t !== o.M.FETCHED }
    );
}
