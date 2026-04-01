n.d(t, { A: () => s });
var i = n(87075),
    a = n(620632);
function l(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function s(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: a.o.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: a.o.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: a.o.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!l(i)) continue;
                          n[e] = {
                              type: a.o.UNFURLED_MEDIA,
                              media: { url: i.proxy_url, width: i.width, height: i.height },
                          };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === i.f.STRING) n[e.name] = { type: a.o.STRING, value: e.value };
                      else if (e.type === i.f.NUMBER) n[e.name] = { type: a.o.NUMBER, value: e.value };
                      else if (e.type === i.f.MEDIA) {
                          if (!l(e.value)) continue;
                          n[e.name] = {
                              type: a.o.UNFURLED_MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
