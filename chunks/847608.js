n.d(t, { A: () => p, c: () => c }), n(323874), n(14289), n(35956), n(321073);
var r = n(64700),
    l = n(735438),
    a = n(736653);
let s = {
        gif: "image/gif",
        webp: "image/webp",
        apng: "image/apng",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        svg: "image/svg+xml",
        mp4: "video/mp4",
        webm: "video/webm",
        mov: "video/quicktime",
    },
    i = new Set(["video/mp4", "video/webm", "video/quicktime"]);
function c(e) {
    return null != e && i.has(e);
}
let o = [],
    u = new Map(),
    d = new Map();
function h(e, t) {
    if (null != e) return (0, l.isString)(e) ? e : "light" === t ? e.light : e.dark;
}
function m(e) {
    try {
        let t = new URL(e).pathname;
        return s[t.split(".").pop()?.toLowerCase() ?? ""];
    } catch {
        return s[e.split("?")[0].split(".").pop()?.toLowerCase() ?? ""];
    }
}
let p = function (e) {
    let t = (0, a.Ay)(),
        n = r.useMemo(() => {
            var n;
            return null == e
                ? o
                : ((n = Array.isArray(e) ? e : [e]),
                  n.flatMap((e) => {
                      if (null == e) return [];
                      if ("object" == typeof e && "src" in e) {
                          let n = h(e.src, t);
                          return null == n ? [] : [{ src: n, alt: e.alt, mimeType: m(n) }];
                      }
                      let n = h(e, t);
                      return null != n ? [{ src: n, mimeType: m(n) }] : [];
                  }));
        }, [e, t]),
        [l, s] = r.useState({}),
        [i, c] = r.useState(new Set());
    return (
        r.useEffect(() => {
            if (0 === n.length) return;
            let e = {},
                t = [];
            for (let { src: r, mimeType: l } of n) null == l && (u.has(r) ? (e[r] = u.get(r)) : t.push(r));
            if (0 === Object.keys(e).length && 0 === t.length) return;
            let r = !1;
            return (
                (async function () {
                    let n =
                        t.length > 0
                            ? await Promise.all(
                                  t.map(async (e) => [
                                      e,
                                      await (function (e) {
                                          if (u.has(e)) return Promise.resolve({ mimeType: u.get(e), status: void 0 });
                                          let t = d.get(e);
                                          if (null != t) return t;
                                          let n = fetch(e, { method: "HEAD" })
                                              .then((t) => {
                                                  if (!t.ok) return { mimeType: void 0, status: t.status };
                                                  let n = (t.headers.get("Content-Type") ?? "").split(";")[0].trim(),
                                                      r = "" !== n ? n : void 0;
                                                  return u.set(e, r), { mimeType: r, status: t.status };
                                              })
                                              .catch(() => ({ mimeType: void 0, status: void 0 }))
                                              .finally(() => d.delete(e));
                                          return d.set(e, n), n;
                                      })(e),
                                  ]),
                              )
                            : [];
                    if (!r) {
                        let t = {},
                            r = [];
                        for (let [e, l] of n) null != l.status && l.status >= 400 ? r.push(e) : (t[e] = l.mimeType);
                        s((n) => ({ ...n, ...e, ...t })), r.length > 0 && c((e) => new Set([...e, ...r]));
                    }
                })(),
                () => {
                    r = !0;
                }
            );
        }, [n]),
        r.useMemo(() => {
            if (0 === n.length) return null;
            let e = n.map((e) => ({ ...e, mimeType: e.mimeType ?? l[e.src] }));
            return e.find((e) => !i.has(e.src)) ?? e[0];
        }, [n, l, i])
    );
};
