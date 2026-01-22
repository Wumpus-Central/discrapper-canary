n.d(t, { a: () => v }), n(457529);
var r = n(562465),
    i = n(306173),
    a = n(198982),
    s = n(790107),
    o = n(487329),
    l = n(146503),
    c = n(734057),
    u = n(53943),
    d = n(626584),
    f = n(551602),
    p = n(642506),
    _ = n(576798),
    h = n(731843),
    m = n(652215);
let g = 9437184,
    E = 14680064,
    b = new d.A("DebugUploadManager"),
    y = null,
    O = null;
function A(e) {
    switch (e.code) {
        case a.ct.GENERAL:
            return o.B6.UploadErrorGeneral;
        case a.ct.NO_FILE:
            return o.B6.UploadErrorNoFile;
        case a.ct.PROGRESS:
            return o.B6.UploadErrorProgress;
        case a.ct.UPLOAD:
            return o.B6.UploadErrorUpload;
        case a.ct.READ:
            return o.B6.UploadErrorRead;
        default:
            return;
    }
}
async function v(e, t) {
    try {
        await S(e), await (0, s.c)(E, t);
    } catch (t) {
        let e;
        throw (
            (t instanceof a._ && (e = A(t)),
            (0, o.QW)({
                type: o.iy.DEBUG_LOG_UPLOAD_FAILED,
                underlyingError: e,
                errorMessage: t.message,
            }),
            t)
        );
    }
}
async function S(e) {
    try {
        let n, a, s, o;
        try {
            n = u.As();
        } catch (e) {
            n = "Logs failed: ".concat(e);
        }
        try {
            a = (null == y ? void 0 : y.getSystemLog) != null ? await new Promise((e) => y.getSystemLog(e)) : "";
        } catch (e) {
            a = "System Logs failed ".concat(e);
        }
        try {
            s = await (0, p.A)().then((e) => (0, h.A)(e, !0));
        } catch (e) {
            s = "Push logs failed: ".concat(e);
        }
        try {
            var t;
            o = null != (t = (0, i.G1)()) ? t : "";
        } catch (e) {
            o = "LibDiscore logs failed: ".concat(e);
        }
        let d = n.length + a.length + s.length + o.length;
        if (d > g) {
            let e = 1 - g / d;
            (n = n.slice(n.length - Math.floor(n.length * e))),
                (a = a.slice(a.length - Math.floor(a.length * e))),
                (s = s.slice(s.length - Math.floor(s.length * e))),
                (o = o.slice(o.length - Math.floor(o.length * e)));
        }
        let E = (null == O ? void 0 : O.AppOpenedTimestamp) != null ? O.AppOpenedTimestamp : null,
            b = "\n    "
                .concat((0, _.A)(E), "\n\n    ")
                .concat((0, l.CI)(), "\n\n    Metadata:\n    ")
                .concat(JSON.stringify((0, f.A)(), void 0, 2), "\n\n    ChannelStore:\n    ")
                .concat(JSON.stringify(c.A.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ")
                .concat(n, "\n\n    System logs:\n    ")
                .concat(a, "\n\n    LibDiscore logs:\n    ")
                .concat(o, "\n\n    Push Notifications:\n    ")
                .concat(s, "\n    ");
        u.IU();
        let A = m.Rsh.DEBUG_LOG(e, "discord_app_logs");
        await r.Bo.post({
            url: A,
            body: b,
            retries: 3,
            headers: { "Content-Type": "text/plain" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    } catch (e) {
        b.error("uploadAppLogFiles: upload app log files error ".concat(e.message));
    }
}
