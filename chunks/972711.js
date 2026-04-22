"use strict";
n.d(t, { YL: () => l, gd: () => d, gp: () => c, nd: () => u, ph: () => o });
var r = n(562465),
    i = n(306173),
    s = n(509929),
    a = n(565150);
function o(e, t) {
    if (t.id === e.uri || (null != t.id && t.id === e.id)) return !0;
    if (t.item.platform === a.xz.REACT_NATIVE) {
        let { item: n } = t,
            { filename: r } = e;
        if (n.originalUri === e.uri || (null != r && n.originalUri?.includes(r))) return !0;
    }
    return !1;
}
function l(e, t) {
    return 0 === t ? 0 : Math.min(Math.floor((e / t) * 100), 100);
}
class u {
    sliceBody(e, t) {
        return e instanceof File ? e.slice(t) : e;
    }
    doUpload(e, t) {
        return t?.fileByteRange != null && (e.body = this.sliceBody(e.body, t.fileByteRange.start)), r.Bo.put(e);
    }
}
function d(e) {
    return e.platform === a.xz.REACT_NATIVE && null != e.uri && (0, s.a$)(e.uri) && (0, i.xd)();
}
class c {
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
        let s = { path: n, byteRangeStart: t?.fileByteRange?.start, byteRangeEnd: t?.fileByteRange?.end },
            a = r.httpRequest(e.url, { method: "PUT", body: s, headers: e.headers });
        return new Promise((t, n) => {
            let i = () => {
                if (e.signal?.aborted) {
                    n(Error("Request cancelled")), r.cancelHttpRequest(a);
                    return;
                }
                let s = r.getHttpRequestStatus(a);
                if (s?.status === "success")
                    t({ status: s.response?.status, headers: s.response?.headers, text: s.response?.body });
                else if (s?.status === "error") n(Error(s.error));
                else if (s?.status === "progressing") {
                    if (void 0 !== e.onRequestProgress && null != s.uploaded_bytes && s.uploaded_bytes > 0) {
                        let t = { loaded: s.uploaded_bytes, total: s.total_bytes };
                        e.onRequestProgress(t);
                    }
                    setTimeout(i, 50);
                } else n(Error("Unknown upload status"));
            };
            i();
        });
    }
}
