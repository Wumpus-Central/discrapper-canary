n.d(t, { Z: () => r });
var i = n(981631);
let l = '<removed>';
function r(e) {
    var t, n;
    let r = { ...e };
    return (
        'object' == typeof (t = r).args &&
            'string' == typeof t.cmd &&
            (r = (function (e) {
                switch (e.cmd) {
                    case i.Etm.AUTHENTICATE:
                    case i.Etm.GET_PROVIDER_ACCESS_TOKEN:
                        return {
                            ...e,
                            args: {
                                ...e.args,
                                access_token: l
                            }
                        };
                    default:
                        return { ...e };
                }
            })(r)),
        'object' == typeof (n = r).data &&
            'string' == typeof n.cmd &&
            (r = (function (e) {
                switch (e.cmd) {
                    case i.Etm.AUTHENTICATE:
                    case i.Etm.GET_PROVIDER_ACCESS_TOKEN:
                        return {
                            ...e,
                            data: {
                                ...e.data,
                                access_token: l
                            }
                        };
                    default:
                        return { ...e };
                }
            })(r)),
        r
    );
}
