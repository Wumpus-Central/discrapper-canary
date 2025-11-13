e.d(r, { d: () => s });
var i = e(647438),
    n = e(442837),
    l = e(515970),
    a = e(5888);
function s() {
    let t = (0, n.e7)([a.Z], () => a.Z.getFetchState());
    (0, i.useEffect)(() => {
        t !== a.p.FETCHING && t !== a.p.SUCCESS && (0, l.p)();
    }, [t]);
}
