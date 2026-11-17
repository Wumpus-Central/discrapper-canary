n(321073);
var l = n(317097),
    i = n(155718),
    r = n(387408),
    a = n(776231),
    u = n(731068),
    d = n(273185),
    s = n(432005),
    o = n(708676),
    c = n(383233),
    m = n(998218),
    h = n(792996);
let p = /^#{1,3}\s+(.+)$/,
    _ = /^https?:\/\/\S+$/;
n.d(
    t,
    {},
    {
        jL: function (e) {
            return (0, o.J)(e.expiry) ?? h.intl.string(h.t["e+J3JZ"]);
        },
        pp: function (e) {
            return e.map((e) => {
                let t,
                    n,
                    a = (0, r.A)((0, s.rh)(e)),
                    o = a.content,
                    m = (function (e) {
                        if ((0, c._c)(e))
                            return e.components
                                .filter((e) => e.type === i.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || _.test(t.trim())
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
                    })(a),
                    h = (function (e) {
                        if ((0, c._c)(e)) {
                            let t = e.components.find((e) => e.type === i.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, u.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, d.tT)(e.content_type));
                        if (null != t) return (0, u.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, d.XB)(e.content_type));
                        if (null != n) return (0, u.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, u.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let r = e.embeds.find((e) => null != e.image);
                        if (r?.image != null)
                            return (0, u.oU)(
                                r.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === r) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, u.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(a),
                    { title: f, body: E } =
                        null != (n = (-1 === (t = m.indexOf("\n")) ? m : m.slice(0, t)).match(p))
                            ? { title: n[1].trim(), body: -1 === t ? "" : m.slice(t + 1).trimStart() }
                            : { body: m },
                    A = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    S =
                        m === o || (0, c._c)(a)
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
                              })(a);
                return {
                    id: a.id,
                    media: h,
                    title: f,
                    body: E,
                    content: m,
                    timestamp: e.timestamp,
                    reactionCount: A,
                    embedSource: S,
                    poll: a.poll,
                };
            });
        },
        x2: function (e, t, n) {
            var l, i, r;
            let u,
                d = (0, a.kr)(n * (0, a.mZ)());
            return (
                (l = e),
                (i = d),
                (r = Math.round(d / t)),
                (null == (u = m.A.toURLSafe(l))
                    ? null
                    : (u.searchParams.append("format", "webp"),
                      null != i && u.searchParams.append("width", i.toString()),
                      null != r && u.searchParams.append("height", r.toString()),
                      u.toString())) ?? e
            );
        },
    },
);
