n.d(t, { A: () => s });
var o = n(652215);
let r = "<removed>";
function s(e) {
    var t, n;
    let s = { ...e };
    return (
        "object" == typeof (t = s).args &&
            "string" == typeof t.cmd &&
            (s = (function (e) {
                switch (e.cmd) {
                    case o.e$_.AUTHENTICATE:
                    case o.e$_.GET_PROVIDER_ACCESS_TOKEN:
                        return { ...e, args: { ...e.args, access_token: r } };
                    default:
                        return { ...e };
                }
            })(s)),
        "object" == typeof (n = s).data &&
            "string" == typeof n.cmd &&
            (s = (function (e) {
                switch (e.cmd) {
                    case o.e$_.AUTHENTICATE:
                    case o.e$_.GET_PROVIDER_ACCESS_TOKEN:
                        return { ...e, data: { ...e.data, access_token: r } };
                    default:
                        return { ...e };
                }
            })(s)),
        s
    );
}
