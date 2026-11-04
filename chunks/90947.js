(l.d(t, { oG: () => n.o, uW: () => v, VG: () => x }), l(108089), l(779300));
var a,
    n = l(398251),
    s = l(449019),
    i = l(598748),
    r = l(894279),
    o = l(500620);
let u = s.Ik({ value_type: s.k5(o.o), presentation_type: s.k5(r.P), value: s.Yj() }),
    c = s.Ik({ value_type: s.k5(o.o), presentation_type: s.k5(r.P), value: s.Yj(), fallback: u.nullish() }),
    m = s.Ik({ fields: s.jg(s.Yj(), c) }),
    d = s.Ik({ layout: s.Yj(), components: s.jg(s.Yj(), m) }),
    v = s.jg(s.k5(i.m), d);
var p = (((a = {})[(a.STRING = 1)] = "STRING"), (a[(a.NUMBER = 2)] = "NUMBER"), (a[(a.MEDIA = 3)] = "MEDIA"), a);
function f(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function x(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: n.o.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      l = {};
                  if (null == t) return l;
                  for (let [e, a] of Object.entries(t))
                      if ("string" == typeof a) l[e] = { type: n.o.STRING, value: a };
                      else if ("number" == typeof a) l[e] = { type: n.o.NUMBER, value: a };
                      else if ("object" == typeof a && "url" in a && "proxy_url" in a && "loading_state" in a) {
                          if (!f(a)) continue;
                          l[e] = { type: n.o.MEDIA, media: { url: a.proxy_url, width: a.width, height: a.height } };
                      }
                  return l;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      l = {};
                  if (null == t) return l;
                  for (let e of t)
                      if (e.type === p.STRING) l[e.name] = { type: n.o.STRING, value: e.value };
                      else if (e.type === p.NUMBER) l[e.name] = { type: n.o.NUMBER, value: e.value };
                      else if (e.type === p.MEDIA) {
                          if (!f(e.value)) continue;
                          l[e.name] = {
                              type: n.o.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return l;
              })(e),
          };
}
