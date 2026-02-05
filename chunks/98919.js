"use strict";
n.d(t, { a: () => S });
var r = n(562465),
    i = n(306173),
    a = n(198982),
    s = n(790107),
    o = n(709710),
    l = n(146503),
    u = n(734057),
    c = n(53943),
    d = n(626584),
    _ = n(551602),
    f = n(642506),
    p = n(576798),
    h = n(731843),
    m = n(652215);
let g = 9437184,
    E = 0xe00000,
    A = new d.A("DebugUploadManager"),
    I = null,
    T = null;
function y(e) {
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
async function S(e, t) {
    try {
        await v(e), await (0, s.c)(E, t);
    } catch (t) {
        let e;
        throw (
            (t instanceof a._ && (e = y(t)),
            (0, o.QW)({ type: o.iy.DEBUG_LOG_UPLOAD_FAILED, underlyingError: e, errorMessage: t.message }),
            t)
        );
    }
}
async function v(e) {
    try {
        let t, n, a, s;
        try {
            t = c.As();
        } catch (e) {
            t = `Logs failed: ${e}`;
        }
        try {
            n = I?.getSystemLog != null ? await new Promise((e) => I.getSystemLog(e)) : "";
        } catch (e) {
            n = `System Logs failed ${e}`;
        }
        try {
            a = await (0, f.A)().then((e) => (0, h.A)(e, !0));
        } catch (e) {
            a = `Push logs failed: ${e}`;
        }
        try {
            s = (0, i.G1)() ?? "";
        } catch (e) {
            s = `LibDiscore logs failed: ${e}`;
        }
        let o = t.length + n.length + a.length + s.length;
        if (o > g) {
            let e = 1 - g / o;
            (t = t.slice(t.length - Math.floor(t.length * e))),
                (n = n.slice(n.length - Math.floor(n.length * e))),
                (a = a.slice(a.length - Math.floor(a.length * e))),
                (s = s.slice(s.length - Math.floor(s.length * e)));
        }
        let d = T?.AppOpenedTimestamp != null ? T.AppOpenedTimestamp : null,
            E = `
    ${(0, p.A)(d)}

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
    ${s}

    Push Notifications:
    ${a}
    `;
        c.IU();
        let A = m.Rsh.DEBUG_LOG(e, "discord_app_logs");
        await r.Bo.post({
            url: A,
            body: E,
            retries: 3,
            headers: { "Content-Type": "text/plain" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    } catch (e) {
        A.error(`uploadAppLogFiles: upload app log files error ${e.message}`);
    }
}
