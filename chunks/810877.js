n.d(t, {
    W: () => p,
}),
    n(747238);
var r = n(830917),
    i = n(397927),
    l = n(157559),
    s = n(554375),
    a = n(563863),
    c = n(954571),
    o = n(690521),
    d = n(515718),
    u = n(307731),
    f = n(652215),
    g = n(985018),
    b = n(264572).Buffer;
let m = (e, t, n, r) => (
        c.default.track(f.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
            guild_id: n,
            file_size: t,
            upload_id: r,
        }),
        a.o.TOO_BIG
    ),
    p = async (e) => {
        let {
                data: t,
                file: n,
                guildId: p,
                uploadId: x,
                roles: h,
                image: j,
                hideErrorModal: O,
                analyticsLocation: y,
            } = e,
            v = o.Ay.sanitizeEmojiName(n.name.split(".")[0]);
        if (o.Ay.isFileTooBig(n)) {
            if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
                return m(n.name, n.size, p, x);
            else if (null != j) {
                var A, E;
                let e;
                t = (0, r.h_)(j, 128, 128);
                try {
                    e = o.Ay.isDataTooBig(t);
                } catch (e) {
                    return m(n.name, n.size, p, x);
                }
                if (
                    ((A = t),
                    (E = e),
                    c.default.track(f.HAw.EMOJI_FILE_RESIZED, {
                        is_animated: !1,
                        file_type: n.type.split("/").pop(),
                        original_file_size_bytes: n.size,
                        resized_file_size_bytes: (0, d.EW)(A),
                        resized_file_too_big: E,
                    }),
                    e)
                )
                    return m(n.name, n.size, p, x);
            }
        }
        try {
            let e = await (0, s.Gf)({
                guildId: p,
                image: t,
                name: v,
                roles: h,
                analyticsLocation: y,
            });
            return (
                c.default.track(f.HAw.EMOJI_UPLOAD_COMPLETED, {
                    guild_id: p,
                    upload_id: x,
                }),
                (0, i.showToast)((0, i.createToast)(g.intl.string(g.t["r0w9m/"]), i.ToastType.SUCCESS)),
                e
            );
        } catch (s) {
            let e,
                n,
                { body: r, status: i } = s;
            return (
                null != r &&
                    (r.code === f.t02.TOO_MANY_EMOJI
                        ? ((e = g.intl.string(g.t["jP/Rqm"])), (n = a.o.TOO_MANY_EMOJI))
                        : r.code === f.t02.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = g.intl.string(g.t["6v5dP/"])), (n = a.o.TOO_MANY_ANIMATED_EMOJI))
                          : null != r.image || r.code === f.t02.INVALID_FILE_ASSET_SIZE
                            ? (c.default.track(f.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: p,
                                  file_size: b.byteLength(t),
                                  upload_id: x,
                              }),
                              (e = g.intl.formatToPlainString(g.t.kIO9jy, {
                                  maxSize: u.i9,
                              })),
                              (n = a.o.TOO_BIG))
                            : (null != r.image || r.code === f.t02.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) &&
                              (n = a.o.RESIZE_GIF)),
                429 === i && ((e = g.intl.string(g.t.Whhv4w)), (n = a.o.RATE_LIMIT)),
                null == e ||
                    O ||
                    l.A.show({
                        title: g.intl.string(g.t.iufib1),
                        body: e,
                    }),
                n
            );
        }
    };
