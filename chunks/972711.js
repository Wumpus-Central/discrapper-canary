n.d(t, { YL: () => o, gd: () => c, gp: () => u, nd: () => d, ph: () => l });
var i = n(636537),
    r = n(306173),
    a = n(509929),
    s = n(565150);
function l(e, t) {
    if (t.id === e.uri || (null != t.id && t.id === e.id)) return !0;
    if (t.item.platform === s.xz.REACT_NATIVE) {
        let { item: n } = t,
            { filename: i } = e;
        if (n.originalUri === e.uri || (null != i && n.originalUri?.includes(i))) return !0;
    }
    return !1;
}
function o(e, t) {
    return 0 === t ? 0 : Math.min(Math.floor((e / t) * 100), 100);
}
class d {
    sliceBody(e, t) {
        return e instanceof File ? e.slice(t) : e;
    }
    doUpload(e, t) {
        return t?.fileByteRange != null && (e.body = this.sliceBody(e.body, t.fileByteRange.start)), i.Bo.put(e);
    }
}
function c(e) {
    return e.platform === s.xz.REACT_NATIVE && null != e.uri && (0, a.a$)(e.uri) && (0, r.xd)();
}
class u {
    constructor() {
        if (!(0, r.xd)()) throw Error("Libdiscore is not loaded");
    }
    doUpload(e, t) {
        let n,
            i = (0, r.uU)();
        if (null == i) throw Error("Libdiscore client is not available");
        if (
            (e.body?.uri !== void 0 &&
                "string" == typeof e.body.uri &&
                (n = e.body.uri.startsWith("file://") ? e.body.uri.slice(7) : e.body.uri),
            void 0 === n || "" === n)
        )
            throw Error("No file path found in request body");
        let a = { path: n, byteRangeStart: t?.fileByteRange?.start, byteRangeEnd: t?.fileByteRange?.end },
            s = i.httpRequest(e.url, { method: "PUT", body: a, headers: e.headers });
        return new Promise((t, n) => {
            !(function r() {
                if (null == i) return;
                if (e.signal?.aborted) {
                    n(Error("Request cancelled")), i.cancelHttpRequest(s);
                    return;
                }
                let a = i.getHttpRequestStatus(s);
                if (a?.status === "success")
                    t({ status: a.response?.status, headers: a.response?.headers, text: a.response?.body });
                else if (a?.status === "error") n(Error(a.error));
                else if (a?.status === "progressing") {
                    if (void 0 !== e.onRequestProgress && null != a.uploaded_bytes && a.uploaded_bytes > 0) {
                        let t = { loaded: a.uploaded_bytes, total: a.total_bytes };
                        e.onRequestProgress(t);
                    }
                    setTimeout(r, 50);
                } else n(Error("Unknown upload status"));
            })();
        });
    }
}
