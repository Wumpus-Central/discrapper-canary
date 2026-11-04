n(321073);
var l = n(317097),
    i = n(155718),
    r = n(387408),
    a = n(731068),
    u = n(273185),
    d = n(432005),
    s = n(708676),
    o = n(383233),
    c = n(998218),
    m = n(792996);
let h = /^#{1,3}\s+(.+)$/,
    p = /^https?:\/\/\S+$/;
n.d(
    t,
    {},
    {
        VZ: function (e, t, n) {
            let l = c.A.toURLSafe(e);
            return null == l
                ? null
                : (l.searchParams.append("format", "webp"),
                  null != t && l.searchParams.append("width", t.toString()),
                  null != n && l.searchParams.append("height", n.toString()),
                  l.toString());
        },
        jL: function (e) {
            return (0, s.J)(e.expiry) ?? m.intl.string(m.t["e+J3JZ"]);
        },
        pp: function (e) {
            return e.map((e) => {
                let t,
                    n,
                    s = (0, r.A)((0, d.rh)(e)),
                    c = s.content,
                    m = (function (e) {
                        if ((0, o._c)(e))
                            return e.components
                                .filter((e) => e.type === i.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || p.test(t.trim())
                            ? ((function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return null;
                                  let n = [];
                                  return (
                                      null != t.rawTitle && n.push(`# ${t.rawTitle}`),
                                      null != t.rawDescription && n.push(t.rawDescription),
                                      n.length > 0 ? n.join("\n") : null
                                  );
                              })(e) ?? t)
                            : t;
                    })(s),
                    _ = (function (e) {
                        if ((0, o._c)(e)) {
                            let t = e.components.find((e) => e.type === i.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, a.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, u.tT)(e.content_type));
                        if (null != t) return (0, a.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, u.XB)(e.content_type));
                        if (null != n) return (0, a.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, a.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let r = e.embeds.find((e) => null != e.image);
                        if (r?.image != null)
                            return (0, a.oU)(
                                r.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === r) },
                                },
                                "IMAGE",
                            );
                        let d = e.embeds.find((e) => null != e.thumbnail);
                        if (d?.thumbnail != null)
                            return (0, a.oU)(
                                d.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === d) },
                                },
                                "IMAGE",
                            );
                    })(s),
                    { title: f, body: E } =
                        null != (n = (-1 === (t = m.indexOf("\n")) ? m : m.slice(0, t)).match(h))
                            ? { title: n[1].trim(), body: -1 === t ? "" : m.slice(t + 1).trimStart() }
                            : { body: m },
                    A = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    S =
                        m === c || (0, o._c)(s)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let n = t.author?.name,
                                      i = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      r = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      u = t.url,
                                      d = null != t.color ? (0, l.$k)(t.color, !0) : void 0;
                                  if (null != n || null != r || null != u)
                                      return {
                                          authorName: n,
                                          authorIconUrl: i,
                                          providerName: r,
                                          providerIconUrl: a,
                                          url: u,
                                          color: d,
                                      };
                              })(s);
                return {
                    id: s.id,
                    media: _,
                    title: f,
                    body: E,
                    content: m,
                    timestamp: e.timestamp,
                    reactionCount: A,
                    embedSource: S,
                    poll: s.poll,
                };
            });
        },
    },
);
