n.d(t, { K: () => l }), n(388685);
var r = n(473749),
    i = n(481060),
    a = n(110924),
    o = n(349350),
    s = n(388032);
function l(e, t) {
    let [n, l] = r.useState(!1),
        c = r.useCallback(
            function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return l(!0), e(...n);
            },
            [e, l],
        ),
        u = (0, a.Z)(t);
    return (
        r.useEffect(() => {
            if (n && !1 === u && !0 === t) {
                l(!1);
                let e = () => {
                    (0, i.showToast)({
                        id: "account-linked-toast",
                        message: s.intl.string(o.default.uG6teD),
                        type: i.ToastType.SUCCESS,
                    });
                };
                if ("visible" === document.visibilityState) e();
                else {
                    let t = () => {
                        "visible" === document.visibilityState &&
                            (e(), document.removeEventListener("visibilitychange", t));
                    };
                    document.addEventListener("visibilitychange", t);
                }
            }
        }, [n, t, u]),
        c
    );
}
