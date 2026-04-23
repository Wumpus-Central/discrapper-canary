"use strict";
n.d(t, { A: () => a });
var r = n(87075),
    i = n(620632);
function s(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function a(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: i.o.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, r] of Object.entries(t))
                      if ("string" == typeof r) n[e] = { type: i.o.STRING, value: r };
                      else if ("number" == typeof r) n[e] = { type: i.o.NUMBER, value: r };
                      else if ("object" == typeof r && "url" in r && "proxy_url" in r && "loading_state" in r) {
                          if (!s(r)) continue;
                          n[e] = { type: i.o.MEDIA, media: { url: r.proxy_url, width: r.width, height: r.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === r.f.STRING) n[e.name] = { type: i.o.STRING, value: e.value };
                      else if (e.type === r.f.NUMBER) n[e.name] = { type: i.o.NUMBER, value: e.value };
                      else if (e.type === r.f.MEDIA) {
                          if (!s(e.value)) continue;
                          n[e.name] = {
                              type: i.o.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
