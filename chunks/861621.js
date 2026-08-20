n.d(t, { A: () => r });
var o = n(652215);
let i = "<removed>";
function r(e) {
    var t, n;
    let r = { ...e };
    return (
        "object" == typeof (t = r).args &&
            "string" == typeof t.cmd &&
            (r = (function (e) {
                switch (e.cmd) {
                    case o.e$_.AUTHENTICATE:
                    case o.e$_.GET_PROVIDER_ACCESS_TOKEN:
                        return { ...e, args: { ...e.args, access_token: i } };
                    default:
                        return { ...e };
                }
            })(r)),
        "object" == typeof (n = r).data &&
            "string" == typeof n.cmd &&
            (r = (function (e) {
                switch (e.cmd) {
                    case o.e$_.AUTHENTICATE:
                    case o.e$_.GET_PROVIDER_ACCESS_TOKEN:
                        return { ...e, data: { ...e.data, access_token: i } };
                    default:
                        return { ...e };
                }
            })(r)),
        r
    );
}
