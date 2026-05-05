l.d(t, { A: () => p, c: () => c }), l(323874), l(14289), l(35956), l(321073);
var r = l(64700),
    n = l(735438),
    a = l(736653);
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
    i = new Set(["video/mp4", "video/webm", "video/quicktime"]),
    c = (e) => null != e && i.has(e),
    d = [],
    o = new Map(),
    u = new Map(),
    m = (e, t) => {
        if (null != e) return (0, n.isString)(e) ? e : "light" === t ? e.light : e.dark;
    },
    h = (e) => {
        try {
            let t = new URL(e).pathname;
            return s[t.split(".").pop()?.toLowerCase() ?? ""];
        } catch {
            return s[e.split("?")[0].split(".").pop()?.toLowerCase() ?? ""];
        }
    },
    p = (e) => {
        let t = (0, a.Ay)(),
            l = r.useMemo(() => {
                let l;
                return null == e
                    ? d
                    : ((l = Array.isArray(e) ? e : [e]),
                      l.flatMap((e) => {
                          if (null == e) return [];
                          if ("object" == typeof e && "src" in e) {
                              let l = m(e.src, t);
                              return null == l ? [] : [{ src: l, alt: e.alt, mimeType: h(l) }];
                          }
                          let l = m(e, t);
                          return null != l ? [{ src: l, mimeType: h(l) }] : [];
                      }));
            }, [e, t]),
            [n, s] = r.useState({}),
            [i, c] = r.useState(new Set());
        return (
            r.useEffect(() => {
                if (0 === l.length) return;
                let e = {},
                    t = [];
                for (let { src: r, mimeType: n } of l) null == n && (o.has(r) ? (e[r] = o.get(r)) : t.push(r));
                if (0 === Object.keys(e).length && 0 === t.length) return;
                let r = !1;
                return (
                    (async () => {
                        let l =
                            t.length > 0
                                ? await Promise.all(
                                      t.map(async (e) => [
                                          e,
                                          await ((e) => {
                                              if (o.has(e))
                                                  return Promise.resolve({ mimeType: o.get(e), status: void 0 });
                                              let t = u.get(e);
                                              if (null != t) return t;
                                              let l = fetch(e, { method: "HEAD" })
                                                  .then((t) => {
                                                      if (!t.ok) return { mimeType: void 0, status: t.status };
                                                      let l = (t.headers.get("Content-Type") ?? "")
                                                              .split(";")[0]
                                                              .trim(),
                                                          r = "" !== l ? l : void 0;
                                                      return o.set(e, r), { mimeType: r, status: t.status };
                                                  })
                                                  .catch(() => ({ mimeType: void 0, status: void 0 }))
                                                  .finally(() => u.delete(e));
                                              return u.set(e, l), l;
                                          })(e),
                                      ]),
                                  )
                                : [];
                        if (!r) {
                            let t = {},
                                r = [];
                            for (let [e, n] of l) null != n.status && n.status >= 400 ? r.push(e) : (t[e] = n.mimeType);
                            s((l) => ({ ...l, ...e, ...t })), r.length > 0 && c((e) => new Set([...e, ...r]));
                        }
                    })(),
                    () => {
                        r = !0;
                    }
                );
            }, [l]),
            r.useMemo(() => {
                if (0 === l.length) return null;
                let e = l.map((e) => ({ ...e, mimeType: e.mimeType ?? n[e.src] }));
                return e.find((e) => !i.has(e.src)) ?? e[0];
            }, [l, n, i])
        );
    };
