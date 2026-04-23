n.d(t, { A: () => s });
var i = n(87075),
    r = n(272852);
function a(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function s(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: r.o.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: r.o.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: r.o.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!a(i)) continue;
                          n[e] = { type: r.o.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === i.f.STRING) n[e.name] = { type: r.o.STRING, value: e.value };
                      else if (e.type === i.f.NUMBER) n[e.name] = { type: r.o.NUMBER, value: e.value };
                      else if (e.type === i.f.MEDIA) {
                          if (!a(e.value)) continue;
                          n[e.name] = {
                              type: r.o.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
