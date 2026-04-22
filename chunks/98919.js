"use strict";
n.d(t, { a: () => g });
var r = n(562465),
    i = n(306173),
    s = n(198982),
    a = n(790107),
    o = n(487329),
    l = n(146503),
    u = n(734057),
    d = n(53943),
    c = n(626584),
    _ = n(329221),
    f = n(642506),
    E = n(576798),
    h = n(731843),
    p = n(652215);
let m = new c.A("DebugUploadManager");
async function g(e, t) {
    try {
        await A(e), await (0, a.c)(0xe00000, t);
    } catch (t) {
        let e;
        throw (
            (t instanceof s._ &&
                (e = (function (e) {
                    switch (e.code) {
                        case s.ct.GENERAL:
                            return o.B6.UploadErrorGeneral;
                        case s.ct.NO_FILE:
                            return o.B6.UploadErrorNoFile;
                        case s.ct.PROGRESS:
                            return o.B6.UploadErrorProgress;
                        case s.ct.UPLOAD:
                            return o.B6.UploadErrorUpload;
                        case s.ct.READ:
                            return o.B6.UploadErrorRead;
                        default:
                            return;
                    }
                })(t)),
            (0, o.QW)({ type: o.iy.DEBUG_LOG_UPLOAD_FAILED, underlyingError: e, errorMessage: t.message }),
            t)
        );
    }
}
async function A(e) {
    try {
        let t, n, s, a;
        try {
            t = d.As();
        } catch (e) {
            t = `Logs failed: ${e}`;
        }
        try {
            n = "";
        } catch (e) {
            n = `System Logs failed ${e}`;
        }
        try {
            s = await (0, f.A)().then((e) => (0, h.A)(e, !0));
        } catch (e) {
            s = `Push logs failed: ${e}`;
        }
        try {
            a = (0, i.G1)() ?? "";
        } catch (e) {
            a = `LibDiscore logs failed: ${e}`;
        }
        let o = t.length + n.length + s.length + a.length;
        if (o > 9437184) {
            let e = 1 - 9437184 / o;
            (t = t.slice(t.length - Math.floor(t.length * e))),
                (n = n.slice(n.length - Math.floor(n.length * e))),
                (s = s.slice(s.length - Math.floor(s.length * e))),
                (a = a.slice(a.length - Math.floor(a.length * e)));
        }
        let c = `
    ${(0, E.A)(null)}

    ${(0, l.CI)()}

    Metadata:
    ${JSON.stringify((0, _.A)(), void 0, 2)}

    ChannelStore:
    ${JSON.stringify(u.A.getDebugInfo(), void 0, 2)}

    Logs:
    ${t}

    System logs:
    ${n}

    LibDiscore logs:
    ${a}

    Push Notifications:
    ${s}
    `;
        d.IU();
        let m = p.Rsh.DEBUG_LOG(e, "discord_app_logs");
        await r.Bo.post({
            url: m,
            body: c,
            retries: 3,
            headers: { "Content-Type": "text/plain" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    } catch (e) {
        m.error(`uploadAppLogFiles: upload app log files error ${e.message}`);
    }
}
