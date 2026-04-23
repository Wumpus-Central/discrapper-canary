n.d(t, { A: () => a });
var i = n(652215);
let r = "<removed>";
function a(e) {
    var t, n;
    let a = { ...e };
    return (
        "object" == typeof (t = a).args &&
            "string" == typeof t.cmd &&
            (a = (function (e) {
                switch (e.cmd) {
                    case i.e$_.AUTHENTICATE:
                    case i.e$_.GET_PROVIDER_ACCESS_TOKEN:
                        return { ...e, args: { ...e.args, access_token: r } };
                    default:
                        return { ...e };
                }
            })(a)),
        "object" == typeof (n = a).data &&
            "string" == typeof n.cmd &&
            (a = (function (e) {
                switch (e.cmd) {
                    case i.e$_.AUTHENTICATE:
                    case i.e$_.GET_PROVIDER_ACCESS_TOKEN:
                        return { ...e, data: { ...e.data, access_token: r } };
                    default:
                        return { ...e };
                }
            })(a)),
        a
    );
}
