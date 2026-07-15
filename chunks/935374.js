let i;
d.d(t, { i: () => p, n: () => G, r: () => W, t: () => u });
var e = d(987800),
    c = d(768672),
    a = class extends Error {
        constructor(l, t, d, i, e, c) {
            super(`HTTP ${l} ${t}`),
                (this.ok = !1),
                (this.status = l),
                (this.statusText = t),
                (this.url = d),
                (this.method = i),
                (this.headers = e),
                (this.data = c),
                (this.name = "FetchHttpError");
        }
    };
let s = async (l, t) => {
    if ("response" === t) return l;
    if ("blob" === t) return await l.blob();
    if ("arrayBuffer" === t) return await l.arrayBuffer();
    if ("text" === t) return await l.text();
    let d = l.headers.get("content-type") ?? "";
    if ("json" === t || d.includes("application/json")) {
        let t = await l.text();
        if (0 === t.length) return "";
        try {
            return JSON.parse(t);
        } catch {
            return t;
        }
    }
    return await l.text();
};
var n = class extends Error {
    constructor(l, t, d, i, e, c) {
        super(`HTTP ${l} ${t}`),
            (this.ok = !1),
            (this.status = l),
            (this.statusText = t),
            (this.url = d),
            (this.method = i),
            (this.headers = e),
            (this.data = c),
            (this.name = "WasmHttpError");
    }
};
let Z = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]),
    b = async (l, t, d) => {
        if (!t) return await l;
        if (t.aborted) throw d;
        return await new Promise((i, e) => {
            let c = () => e(d);
            t.addEventListener("abort", c, { once: !0 }),
                l.then(i, e).finally(() => {
                    t.removeEventListener("abort", c);
                });
        });
    },
    m = async (l) => {
        let t = {
                "Content-Type": "application/json",
                Accept: "application/json",
                "api-version": "1.0",
                ...(l.customHeaders ?? {}),
            },
            d = l.isEncryptionEnabled ?? (() => !1),
            i = "sha256" === l.mgf1;
        await (0, e.c)(
            l.wasm.wasmPath,
            l.wasm.wasmSimdPath ?? l.wasm.wasmPath,
            l.wasm.glueCodePath,
            l.wasm.glueCodeSimdPath ?? "",
            l.wasm.useSimd ?? !0,
        ),
            await (0, e.u)(l.apiURL, "", l.encryptionEnabled ?? !1, t, i);
        let c = { baseURL: l.apiURL, headers: t },
            a = {
                defaults: c,
                async request(t) {
                    var a;
                    let s,
                        {
                            method: m = "GET",
                            url: o,
                            headers: u = {},
                            query: h,
                            params: W,
                            body: G,
                            signal: p,
                            timeout: N = l.timeout ?? 3e4,
                            onUploadProgress: M,
                            ie: X = !1,
                        } = t,
                        r = ((l) => {
                            let t = l.toUpperCase();
                            if (!Z.has(t)) throw Error(`Unsupported HTTP method for WASM client: ${l}`);
                            return t;
                        })(m),
                        y = W ?? h,
                        Y =
                            ((a = c.baseURL),
                            (s = ((l) => {
                                if (!l) return "";
                                let t = new URLSearchParams();
                                Object.entries(l).forEach(([l, d]) => {
                                    null != d && t.append(l, String(d));
                                });
                                let d = t.toString();
                                return d ? `?${d}` : "";
                            })(y)),
                            o.startsWith("http://") || o.startsWith("https://")
                                ? `${o}${s}`
                                : `${a.endsWith("/") ? a.slice(0, -1) : a}${o.startsWith("/") ? o : `/${o}`}${s}`),
                        T = X || (i && d()),
                        V = {
                            ...c.headers,
                            ...(T ? { "X-RSA-Encryption-Scheme": "RSA/NONE/OAEPWITHSHA-256ANDMGF1PADDING" } : {}),
                            ...u,
                        },
                        L = ((l) => {
                            if (null != l)
                                return l instanceof FormData ||
                                    l instanceof Blob ||
                                    l instanceof ArrayBuffer ||
                                    l instanceof Uint8Array ||
                                    "string" == typeof l ||
                                    "object" == typeof l
                                    ? l
                                    : String(l);
                        })(G),
                        I = M
                            ? (l) => {
                                  l.total > 0 && M(Math.round((l.loaded / l.total) * 100));
                              }
                            : void 0,
                        z = new n(0, "Request aborted", Y, r, {}, null);
                    if (p?.aborted) throw z;
                    try {
                        let l = await b((0, e.s)(r, o, L, V, y, N, I, X), p, z);
                        if (l.status < 200 || l.status >= 300) throw new n(l.status, "", Y, r, {}, l.data);
                        return { ok: !0, status: l.status, statusText: "", url: Y, headers: {}, data: l.data };
                    } catch (l) {
                        if (l instanceof n) throw l;
                        throw new n(
                            ((l) => {
                                if (l instanceof e.o) return l.statusCode;
                                if ("object" == typeof l && null !== l) {
                                    if ("number" == typeof l.statusCode) return l.statusCode;
                                    if ("number" == typeof l.status) return l.status;
                                }
                                return 0;
                            })(l),
                            l instanceof Error ? l.message : "WasmWebClient request failed",
                            Y,
                            r,
                            {},
                            l instanceof e.o ? (l.response?.data ?? null) : null,
                        );
                    }
                },
                get: (l, t) => a.request({ ...t, url: l, method: "GET" }),
                post: (l, t, d) => a.request({ ...d, url: l, body: t, method: "POST" }),
                put: (l, t, d) => a.request({ ...d, url: l, body: t, method: "PUT" }),
                patch: (l, t, d) => a.request({ ...d, url: l, body: t, method: "PATCH" }),
                delete: (l, t) => a.request({ ...t, url: l, method: "DELETE" }),
                head: () => Promise.reject(Error("HEAD is not supported by the WASM HTTP client")),
                options: () => Promise.reject(Error("OPTIONS is not supported by the WASM HTTP client")),
                setHeader(l, t) {
                    c.headers[l] = t;
                },
            };
        return a;
    };
function o(l) {
    (0, c.o)(l),
        (0, e.l)(async (t, d, i) => {
            let e = await l.request({
                method: "POST",
                url: t,
                body: d,
                headers: i.headers,
                params: i.params,
                timeout: i.timeout,
                ie: i.ie,
            });
            return { data: e.data, status: e.status };
        });
}
function u() {
    return i;
}
function h() {
    return i?.encryption.enabled ?? !1;
}
function W() {
    (i = void 0), (0, e.l)(null);
}
async function G(l, t, d, e) {
    var c;
    let n, Z, b;
    o(
        d
            ? await N(e.enabled, () =>
                  m({
                      apiURL: l,
                      customHeaders: t.customHeaders,
                      timeout: t.timeout,
                      wasm: d,
                      encryptionEnabled: e.enabled,
                      mgf1: e.mgf1,
                      isEncryptionEnabled: h,
                  }),
              )
            : ((n = {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "api-version": "1.0",
                  ...((c = { apiURL: l, customHeaders: t.customHeaders, timeout: t.timeout }).customHeaders ?? {}),
              }),
              (b = {
                  defaults: (Z = { baseURL: c.apiURL, headers: n }),
                  async request(l) {
                      var t;
                      let d,
                          {
                              method: i = "GET",
                              url: e,
                              headers: n = {},
                              query: b,
                              params: m,
                              body: o,
                              signal: u,
                              timeout: h = c.timeout ?? 3e4,
                              parse: W,
                              onUploadProgress: G,
                              keepalive: p,
                          } = l,
                          N =
                              ((t = Z.baseURL),
                              (d = ((l) => {
                                  if (!l) return "";
                                  let t = new URLSearchParams();
                                  Object.entries(l).forEach(([l, d]) => {
                                      null != d && t.append(l, String(d));
                                  });
                                  let d = t.toString();
                                  return d ? `?${d}` : "";
                              })(m ?? b)),
                              e.startsWith("http://") || e.startsWith("https://")
                                  ? `${e}${d}`
                                  : `${t.endsWith("/") ? t.slice(0, -1) : t}${e.startsWith("/") ? e : `/${e}`}${d}`),
                          M = { ...Z.headers, ...n },
                          X =
                              null == o
                                  ? null
                                  : o instanceof FormData || o instanceof Blob || o instanceof ArrayBuffer
                                    ? o
                                    : "object" == typeof o
                                      ? JSON.stringify(o)
                                      : String(o),
                          r = M;
                      if (null === X && ("POST" === i || "PUT" === i || "PATCH" === i)) {
                          let { "Content-Type": l, ...t } = M;
                          r = t;
                      }
                      if (G) {
                          let l;
                          if (null !== X && "u" > typeof ReadableStream && X instanceof ReadableStream)
                              throw Error("Upload progress tracking is not supported for ReadableStream bodies");
                          return (
                              (l = r),
                              new Promise((t, d) => {
                                  let e = new XMLHttpRequest();
                                  e.open(i, N, !0),
                                      Object.entries(l).forEach(([l, t]) => {
                                          e.setRequestHeader(l, t);
                                      }),
                                      (e.timeout = h),
                                      (e.upload.onprogress = (l) => {
                                          l.lengthComputable && G(Math.round((l.loaded / l.total) * 100));
                                      }),
                                      (e.onload = () => {
                                          let l,
                                              c = {};
                                          e.getAllResponseHeaders()
                                              .split("\r\n")
                                              .forEach((l) => {
                                                  let t = l.split(": ");
                                                  2 === t.length && (c[t[0].toLowerCase()] = t[1]);
                                              });
                                          try {
                                              l = (e.getResponseHeader("content-type") ?? "").includes(
                                                  "application/json",
                                              )
                                                  ? JSON.parse(e.responseText)
                                                  : e.responseText;
                                          } catch {
                                              l = e.responseText;
                                          }
                                          e.status >= 200 && e.status < 300
                                              ? t({
                                                    ok: !0,
                                                    status: e.status,
                                                    statusText: e.statusText,
                                                    url: N,
                                                    headers: c,
                                                    data: l,
                                                })
                                              : d(new a(e.status, e.statusText, N, i, c, l));
                                      }),
                                      (e.onerror = () => {
                                          d(new a(0, "Network Error", N, i, {}, null));
                                      }),
                                      (e.ontimeout = () => {
                                          d(new a(0, "Request timeout", N, i, {}, null));
                                      }),
                                      u &&
                                          u.addEventListener("abort", () => {
                                              e.abort(), d(new a(0, "Request aborted", N, i, {}, null));
                                          }),
                                      e.send(X);
                              })
                          );
                      }
                      let y = new AbortController(),
                          Y = u ?? y.signal,
                          T = setTimeout(() => y.abort(), h);
                      try {
                          let l = await fetch(N, { method: i, headers: r, body: X, signal: Y, keepalive: p });
                          T && clearTimeout(T);
                          let t = {};
                          l.headers.forEach((l, d) => {
                              t[d] = l;
                          });
                          let d = await s(l, W);
                          if (!l.ok) throw new a(l.status, l.statusText, N, i, t, d);
                          return { ok: !0, status: l.status, statusText: l.statusText, url: N, headers: t, data: d };
                      } catch (l) {
                          if ((T && clearTimeout(T), l instanceof a)) throw l;
                          if (l instanceof Error && "AbortError" === l.name)
                              throw new a(0, "Request timeout", N, i, {}, null);
                          throw l;
                      }
                  },
                  get: (l, t) => b.request({ ...t, url: l, method: "GET" }),
                  post: (l, t, d) => b.request({ ...d, url: l, body: t, method: "POST" }),
                  put: (l, t, d) => b.request({ ...d, url: l, body: t, method: "PUT" }),
                  patch: (l, t, d) => b.request({ ...d, url: l, body: t, method: "PATCH" }),
                  delete: (l, t) => b.request({ ...t, url: l, method: "DELETE" }),
                  head: (l, t) => b.request({ ...t, url: l, method: "HEAD" }),
                  options: (l, t) => b.request({ ...t, url: l, method: "OPTIONS" }),
                  setHeader(l, t) {
                      Z.headers[l] = t;
                  },
              })),
    ),
        (i = { apiURL: l, customHeaders: t.customHeaders, timeout: t.timeout, isWasm: !!d, encryption: e });
}
async function p(l) {
    let t = i;
    t &&
        !t.isWasm &&
        (o(
            await m({
                apiURL: t.apiURL,
                customHeaders: t.customHeaders,
                timeout: t.timeout,
                wasm: l,
                encryptionEnabled: t.encryption.enabled,
                mgf1: t.encryption.mgf1,
                isEncryptionEnabled: h,
            }),
        ),
        (i = { ...t, isWasm: !0 }));
}
async function N(l, t) {
    if (!l) return t();
    try {
        return await t();
    } catch (t) {
        let l = Error(
            "Failed to establish encrypted transport. The /e2ee/key handshake did not complete. Verify the apiURL is reachable and that the environment supports E2EE.",
        );
        throw ((l.cause = t), l);
    }
}
