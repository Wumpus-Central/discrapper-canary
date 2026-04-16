"use strict";
n.d(t, { W: () => _ });
var i = n(830917),
    s = n(397927),
    l = n(157559),
    r = n(554375),
    a = n(563863),
    o = n(954571),
    d = n(690521),
    c = n(515718),
    u = n(307731),
    m = n(652215),
    g = n(985018),
    x = n(264572).Buffer;
let h = (e, t, n, i) => (
        o.default.track(m.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { guild_id: n, file_size: t, upload_id: i }),
        a.o.TOO_BIG
    ),
    _ = async (e) => {
        let {
                data: t,
                file: n,
                guildId: _,
                uploadId: A,
                roles: p,
                image: f,
                hideErrorModal: j,
                analyticsLocation: N,
            } = e,
            E = d.Ay.sanitizeEmojiName(n.name.split(".")[0]);
        if (d.Ay.isFileTooBig(n)) {
            if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
                return h(n.name, n.size, _, A);
            else if (null != f) {
                var C, T;
                let e;
                t = (0, i.h_)(f, 128, 128);
                try {
                    e = d.Ay.isDataTooBig(t);
                } catch (e) {
                    return h(n.name, n.size, _, A);
                }
                if (
                    ((C = t),
                    (T = e),
                    o.default.track(m.HAw.EMOJI_FILE_RESIZED, {
                        is_animated: !1,
                        file_type: n.type.split("/").pop(),
                        original_file_size_bytes: n.size,
                        resized_file_size_bytes: (0, c.EW)(C),
                        resized_file_too_big: T,
                    }),
                    e)
                )
                    return h(n.name, n.size, _, A);
            }
        }
        try {
            let e = await (0, r.Gf)({ guildId: _, image: t, name: E, roles: p, analyticsLocation: N });
            return (
                o.default.track(m.HAw.EMOJI_UPLOAD_COMPLETED, { guild_id: _, upload_id: A }),
                (0, s.showToast)((0, s.createToast)(g.intl.string(g.t["r0w9m/"]), s.ToastType.SUCCESS)),
                e
            );
        } catch (r) {
            let e,
                n,
                { body: i, status: s } = r;
            return (
                null != i &&
                    (i.code === m.t02.TOO_MANY_EMOJI
                        ? ((e = g.intl.string(g.t["jP/Rqm"])), (n = a.o.TOO_MANY_EMOJI))
                        : i.code === m.t02.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = g.intl.string(g.t["6v5dP/"])), (n = a.o.TOO_MANY_ANIMATED_EMOJI))
                          : null != i.image || i.code === m.t02.INVALID_FILE_ASSET_SIZE
                            ? (o.default.track(m.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: _,
                                  file_size: x.byteLength(t),
                                  upload_id: A,
                              }),
                              (e = g.intl.formatToPlainString(g.t.kIO9jy, { maxSize: u.EMOJI_MAX_FILESIZE_KB })),
                              (n = a.o.TOO_BIG))
                            : (null != i.image || i.code === m.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED) &&
                              (n = a.o.RESIZE_ANIMATED)),
                429 === s && ((e = g.intl.string(g.t.Whhv4w)), (n = a.o.RATE_LIMIT)),
                null == e || j || l.A.show({ title: g.intl.string(g.t.iufib1), body: e }),
                n
            );
        }
    };
