var i = n(830917),
    l = n(858899),
    s = n(157559),
    r = n(554375),
    a = n(724165),
    o = n(61310),
    d = n(534606),
    c = n(129230),
    u = n(690521),
    m = n(515718);
n(307731);
var g = n(652215),
    h = n(792996),
    x = n(264572).hp;
function E(e, t, n, i) {
    return (
        c.default.track(g.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { guild_id: n, file_size: t, upload_id: i }),
        d.o.TOO_BIG
    );
}
n.d(
    t,
    {},
    {
        W: async function (e) {
            let {
                    data: t,
                    file: n,
                    guildId: j,
                    uploadId: f,
                    roles: N,
                    image: p,
                    hideErrorModal: A,
                    analyticsLocation: I,
                } = e,
                b = a.A.fromBlob(o.f.EMOJI, n),
                S = u.Ay.sanitizeEmojiName(n.name.split(".")[0]);
            if (u.Ay.isFileTooBig(n)) {
                if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
                    return E(n.name, n.size, j, f);
                else if (null != p) {
                    var C, _;
                    let e;
                    t = (0, i.h_)(p, 128, 128);
                    try {
                        e = u.Ay.isDataTooBig(t);
                    } catch (e) {
                        return E(n.name, n.size, j, f);
                    }
                    if (
                        ((C = t),
                        (_ = e),
                        c.default.track(g.HAw.EMOJI_FILE_RESIZED, {
                            is_animated: !1,
                            file_type: n.type.split("/").pop(),
                            original_file_size_bytes: n.size,
                            resized_file_size_bytes: (0, m.EW)(C),
                            resized_file_too_big: _,
                        }),
                        e)
                    )
                        return E(n.name, n.size, j, f);
                }
            }
            try {
                let e = await b.getOriginalMd5(),
                    n = await (0, r.Gf)({
                        guildId: j,
                        image: t,
                        name: S,
                        roles: N,
                        analyticsLocation: I,
                        originalMd5: e,
                    });
                return (
                    c.default.track(g.HAw.EMOJI_UPLOAD_COMPLETED, { guild_id: j, upload_id: f }),
                    (0, l.P0)({ text: h.intl.string(h.t["r0w9m/"]), variant: "success" }),
                    n
                );
            } catch (r) {
                let e,
                    n,
                    { body: i, status: l } = r;
                return (
                    null != i &&
                        (i.code === g.t02.TOO_MANY_EMOJI
                            ? ((e = h.intl.string(h.t["jP/Rqm"])), (n = d.o.TOO_MANY_EMOJI))
                            : i.code === g.t02.TOO_MANY_ANIMATED_EMOJI
                              ? ((e = h.intl.string(h.t["6v5dP/"])), (n = d.o.TOO_MANY_ANIMATED_EMOJI))
                              : null != i.image || i.code === g.t02.INVALID_FILE_ASSET_SIZE
                                ? (c.default.track(g.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                      guild_id: j,
                                      file_size: x.byteLength(t),
                                      upload_id: f,
                                  }),
                                  (e = h.intl.formatToPlainString(h.t.kIO9jy, { maxSize: 256 })),
                                  (n = d.o.TOO_BIG))
                                : (null != i.image || i.code === g.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED) &&
                                  (n = d.o.RESIZE_ANIMATED)),
                    429 === l && ((e = h.intl.string(h.t.Whhv4w)), (n = d.o.RATE_LIMIT)),
                    null == e || A || s.A.show({ title: h.intl.string(h.t.iufib1), body: e }),
                    n
                );
            }
        },
    },
);
