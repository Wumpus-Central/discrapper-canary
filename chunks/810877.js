n.d(t, { W: () => A });
var i = n(830917),
    l = n(691540),
    s = n(857250),
    r = n(97483),
    a = n(157559),
    o = n(554375),
    d = n(563863),
    c = n(954571),
    u = n(690521),
    m = n(515718),
    g = n(307731),
    h = n(652215),
    x = n(985018),
    _ = n(264572).Buffer;
let p = (e, t, n, i) => (
        c.default.track(h.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { guild_id: n, file_size: t, upload_id: i }),
        d.o.TOO_BIG
    ),
    A = async (e) => {
        let {
                data: t,
                file: n,
                guildId: A,
                uploadId: E,
                roles: f,
                image: j,
                hideErrorModal: N,
                analyticsLocation: I,
            } = e,
            C = u.Ay.sanitizeEmojiName(n.name.split(".")[0]);
        if (u.Ay.isFileTooBig(n)) {
            if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
                return p(n.name, n.size, A, E);
            else if (null != j) {
                var b, v;
                let e;
                t = (0, i.h_)(j, 128, 128);
                try {
                    e = u.Ay.isDataTooBig(t);
                } catch (e) {
                    return p(n.name, n.size, A, E);
                }
                if (
                    ((b = t),
                    (v = e),
                    c.default.track(h.HAw.EMOJI_FILE_RESIZED, {
                        is_animated: !1,
                        file_type: n.type.split("/").pop(),
                        original_file_size_bytes: n.size,
                        resized_file_size_bytes: (0, m.EW)(b),
                        resized_file_too_big: v,
                    }),
                    e)
                )
                    return p(n.name, n.size, A, E);
            }
        }
        try {
            let e = await (0, o.Gf)({ guildId: A, image: t, name: C, roles: f, analyticsLocation: I });
            return (
                c.default.track(h.HAw.EMOJI_UPLOAD_COMPLETED, { guild_id: A, upload_id: E }),
                (0, l.P0)((0, s.o)(x.intl.string(x.t["r0w9m/"]), r.Ck.SUCCESS)),
                e
            );
        } catch (s) {
            let e,
                n,
                { body: i, status: l } = s;
            return (
                null != i &&
                    (i.code === h.t02.TOO_MANY_EMOJI
                        ? ((e = x.intl.string(x.t["jP/Rqm"])), (n = d.o.TOO_MANY_EMOJI))
                        : i.code === h.t02.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = x.intl.string(x.t["6v5dP/"])), (n = d.o.TOO_MANY_ANIMATED_EMOJI))
                          : null != i.image || i.code === h.t02.INVALID_FILE_ASSET_SIZE
                            ? (c.default.track(h.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: A,
                                  file_size: _.byteLength(t),
                                  upload_id: E,
                              }),
                              (e = x.intl.formatToPlainString(x.t.kIO9jy, { maxSize: g.EMOJI_MAX_FILESIZE_KB })),
                              (n = d.o.TOO_BIG))
                            : (null != i.image || i.code === h.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED) &&
                              (n = d.o.RESIZE_ANIMATED)),
                429 === l && ((e = x.intl.string(x.t.Whhv4w)), (n = d.o.RATE_LIMIT)),
                null == e || N || a.A.show({ title: x.intl.string(x.t.iufib1), body: e }),
                n
            );
        }
    };
