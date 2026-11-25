(t.d(n, { oG: () => s.o, uW: () => x, VG: () => j }), t(108089), t(779300));
var l,
    s = t(398251),
    a = t(166295),
    i = t(598748),
    r = t(894279),
    o = t(500620);
let u = a.Ikc({ value_type: a.k5n(o.o), presentation_type: a.k5n(r.P), value: a.YjP() }),
    c = a.Ikc({ value_type: a.k5n(o.o), presentation_type: a.k5n(r.P), value: a.YjP(), fallback: u.nullish() }),
    d = a.Ikc({ fields: a.jgl(a.YjP(), c) }),
    m = a.Ikc({ layout: a.YjP(), components: a.jgl(a.YjP(), d) }),
    x = a.jgl(a.k5n(i.m), m);
var h = (((l = {})[(l.STRING = 1)] = "STRING"), (l[(l.NUMBER = 2)] = "NUMBER"), (l[(l.MEDIA = 3)] = "MEDIA"), l);
function p(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function j(e) {
    let n;
    return null == e
        ? {}
        : {
              ...((n = {}), null != e.username && (n.username = { type: s.o.STRING, value: e.username }), n),
              ...(function (e) {
                  let n = e.data?.primary,
                      t = {};
                  if (null == n) return t;
                  for (let [e, l] of Object.entries(n))
                      if ("string" == typeof l) t[e] = { type: s.o.STRING, value: l };
                      else if ("number" == typeof l) t[e] = { type: s.o.NUMBER, value: l };
                      else if ("object" == typeof l && "url" in l && "proxy_url" in l && "loading_state" in l) {
                          if (!p(l)) continue;
                          t[e] = { type: s.o.MEDIA, media: { url: l.proxy_url, width: l.width, height: l.height } };
                      }
                  return t;
              })(e),
              ...(function (e) {
                  let n = e.data?.dynamic,
                      t = {};
                  if (null == n) return t;
                  for (let e of n)
                      if (e.type === h.STRING) t[e.name] = { type: s.o.STRING, value: e.value };
                      else if (e.type === h.NUMBER) t[e.name] = { type: s.o.NUMBER, value: e.value };
                      else if (e.type === h.MEDIA) {
                          if (!p(e.value)) continue;
                          t[e.name] = {
                              type: s.o.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return t;
              })(e),
          };
}
