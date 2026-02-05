"use strict";
n.d(t, { YL: () => u, gd: () => d, gp: () => _, nd: () => c, ph: () => l });
var r = n(562465),
    i = n(306173),
    a = n(509929),
    s = n(565150);
let o = 50;
function l(e, t) {
    if (t.id === e.uri || (null != t.id && t.id === e.id)) return !0;
    if (t.item.platform === s.xz.REACT_NATIVE) {
        let { item: n } = t,
            { filename: r } = e;
        if (n.originalUri === e.uri || (null != r && n.originalUri?.includes(r))) return !0;
    }
    return !1;
}
function u(e, t) {
    return 0 === t ? 0 : Math.min(Math.floor((e / t) * 100), 100);
}
class c {
    sliceBody(e, t) {
        return e instanceof File ? e.slice(t) : e;
    }
    doUpload(e, t) {
        return t?.fileByteRange != null && (e.body = this.sliceBody(e.body, t.fileByteRange.start)), r.Bo.put(e);
    }
}
function d(e) {
    return e.platform === s.xz.REACT_NATIVE && null != e.uri && (0, a.a$)(e.uri) && (0, i.xd)();
}
class _ {
    constructor() {
        if (!(0, i.xd)()) throw Error("Libdiscore is not loaded");
    }
    doUpload(e, t) {
        let n,
            r = (0, i.uU)();
        if (null == r) throw Error("Libdiscore client is not available");
        if (
            (e.body?.uri !== void 0 &&
                "string" == typeof e.body.uri &&
                (n = e.body.uri.startsWith("file://") ? e.body.uri.slice(7) : e.body.uri),
            void 0 === n || "" === n)
        )
            throw Error("No file path found in request body");
        let a = { path: n, byteRangeStart: t?.fileByteRange?.start, byteRangeEnd: t?.fileByteRange?.end },
            s = r.httpRequest(e.url, { method: "PUT", body: a, headers: e.headers });
        return new Promise((t, n) => {
            let i = () => {
                if (e.signal?.aborted) {
                    n(Error("Request cancelled")), r.cancelHttpRequest(s);
                    return;
                }
                let a = r.getHttpRequestStatus(s);
                if (a?.status === "success")
                    t({ status: a.response?.status, headers: a.response?.headers, text: a.response?.body });
                else if (a?.status === "error") n(Error(a.error));
                else if (a?.status === "progressing") {
                    if (void 0 !== e.onRequestProgress && null != a.uploaded_bytes && a.uploaded_bytes > 0) {
                        let t = { loaded: a.uploaded_bytes, total: a.total_bytes };
                        e.onRequestProgress(t);
                    }
                    setTimeout(i, o);
                } else n(Error("Unknown upload status"));
            };
            i();
        });
    }
}
