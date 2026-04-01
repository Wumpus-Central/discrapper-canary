n.d(t, { p: () => o });
var a = n(155718),
    l = n(731068),
    i = n(77350),
    r = n(141468),
    s = n(383233);
let c = /^#{1,3}\s+(.+)$/;
function o(e) {
    return e.map((e) => {
        let t,
            n,
            o = (0, r.rh)(e),
            d = (0, s._c)(o)
                ? o.components
                      .filter((e) => e.type === a.I5.TEXT_DISPLAY)
                      .map((e) => e.content)
                      .join("\n")
                : o.content,
            u = (function (e) {
                if ((0, s._c)(e)) {
                    let t = e.components.find((e) => e.type === a.I5.MEDIA_GALLERY),
                        n = t?.items[0]?.media;
                    if (null != n) {
                        let e = (0, l.FE)(n);
                        if ("INVALID" === e) return;
                        return { url: n.proxyUrl ?? n.url, type: "VIDEO" === e ? "video" : "image" };
                    }
                }
                let t = e.attachments.find((e) => (0, i.tT)(e.content_type));
                if (null != t) return { url: t.proxy_url, type: "image" };
                let n = e.attachments.find((e) => (0, i.XB)(e.content_type));
                if (null != n) return { url: n.proxy_url, type: "video" };
                let r = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                if (r?.thumbnail != null) return { url: r.thumbnail.proxyURL ?? r.thumbnail.url, type: "image" };
            })(o),
            { title: m, body: x } =
                null != (n = (-1 === (t = d.indexOf("\n")) ? d : d.slice(0, t)).match(c))
                    ? { title: n[1].trim(), body: -1 === t ? "" : d.slice(t + 1).trimStart() }
                    : { body: d },
            h = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0;
        return {
            id: o.id,
            mediaUrl: u?.url,
            mediaType: u?.type,
            title: m,
            body: x,
            content: d,
            timestamp: e.timestamp,
            reactionCount: h,
        };
    });
}
