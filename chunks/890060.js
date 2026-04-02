n.d(t, { V: () => u, p: () => d });
var a = n(155718),
    l = n(731068),
    i = n(77350),
    r = n(141468),
    s = n(383233),
    c = n(998218);
let o = /^#{1,3}\s+(.+)$/;
function d(e) {
    return e.map((e) => {
        let t,
            n,
            c = (0, r.rh)(e),
            d = (0, s._c)(c)
                ? c.components
                      .filter((e) => e.type === a.I5.TEXT_DISPLAY)
                      .map((e) => e.content)
                      .join("\n")
                : c.content,
            u = (function (e) {
                if ((0, s._c)(e)) {
                    let t = e.components.find((e) => e.type === a.I5.MEDIA_GALLERY),
                        n = t?.items[0]?.media;
                    if (null != n) {
                        let t = (0, l.FE)(n);
                        if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                    }
                }
                let t = e.attachments.find((e) => (0, i.tT)(e.content_type));
                if (null != t) return (0, l.Rr)(t, e);
                let n = e.attachments.find((e) => (0, i.XB)(e.content_type));
                if (null != n) return (0, l.Rr)(n, e);
                let r = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                if (r?.thumbnail != null)
                    return (0, l.oU)(
                        r.thumbnail,
                        { message: e, identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === r) } },
                        "IMAGE",
                    );
            })(c),
            { title: m, body: x } =
                null != (n = (-1 === (t = d.indexOf("\n")) ? d : d.slice(0, t)).match(o))
                    ? { title: n[1].trim(), body: -1 === t ? "" : d.slice(t + 1).trimStart() }
                    : { body: d },
            h = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0;
        return { id: c.id, media: u, title: m, body: x, content: d, timestamp: e.timestamp, reactionCount: h };
    });
}
function u(e) {
    let t = c.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
