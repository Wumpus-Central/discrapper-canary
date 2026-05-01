n.d(t, { W: () => N });
var i = n(830917),
    l = n(691540),
    s = n(857250),
    r = n(97483),
    a = n(157559),
    o = n(554375),
    d = n(73621),
    c = n(954571),
    u = n(690521),
    m = n(515718),
    g = n(307731),
    x = n(652215),
    h = n(985018),
    E = n(264572).Buffer;
let j = (e, t, n, i) => (
        c.default.track(x.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { guild_id: n, file_size: t, upload_id: i }),
        d.o.TOO_BIG
    ),
    N = async (e) => {
        let {
                data: t,
                file: n,
                guildId: N,
                uploadId: p,
                roles: A,
                image: f,
                hideErrorModal: I,
                analyticsLocation: C,
            } = e,
            v = u.Ay.sanitizeEmojiName(n.name.split(".")[0]);
        if (u.Ay.isFileTooBig(n)) {
            if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
                return j(n.name, n.size, N, p);
            else if (null != f) {
                var S, _;
                let e;
                t = (0, i.h_)(f, 128, 128);
                try {
                    e = u.Ay.isDataTooBig(t);
                } catch (e) {
                    return j(n.name, n.size, N, p);
                }
                if (
                    ((S = t),
                    (_ = e),
                    c.default.track(x.HAw.EMOJI_FILE_RESIZED, {
                        is_animated: !1,
                        file_type: n.type.split("/").pop(),
                        original_file_size_bytes: n.size,
                        resized_file_size_bytes: (0, m.EW)(S),
                        resized_file_too_big: _,
                    }),
                    e)
                )
                    return j(n.name, n.size, N, p);
            }
        }
        try {
            let e = await (0, o.Gf)({ guildId: N, image: t, name: v, roles: A, analyticsLocation: C });
            return (
                c.default.track(x.HAw.EMOJI_UPLOAD_COMPLETED, { guild_id: N, upload_id: p }),
                (0, l.P0)((0, s.o)(h.intl.string(h.t["r0w9m/"]), r.Ck.SUCCESS)),
                e
            );
        } catch (s) {
            let e,
                n,
                { body: i, status: l } = s;
            return (
                null != i &&
                    (i.code === x.t02.TOO_MANY_EMOJI
                        ? ((e = h.intl.string(h.t["jP/Rqm"])), (n = d.o.TOO_MANY_EMOJI))
                        : i.code === x.t02.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = h.intl.string(h.t["6v5dP/"])), (n = d.o.TOO_MANY_ANIMATED_EMOJI))
                          : null != i.image || i.code === x.t02.INVALID_FILE_ASSET_SIZE
                            ? (c.default.track(x.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: N,
                                  file_size: E.byteLength(t),
                                  upload_id: p,
                              }),
                              (e = h.intl.formatToPlainString(h.t.kIO9jy, { maxSize: g.EMOJI_MAX_FILESIZE_KB })),
                              (n = d.o.TOO_BIG))
                            : (null != i.image || i.code === x.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED) &&
                              (n = d.o.RESIZE_ANIMATED)),
                429 === l && ((e = h.intl.string(h.t.Whhv4w)), (n = d.o.RATE_LIMIT)),
                null == e || I || a.A.show({ title: h.intl.string(h.t.iufib1), body: e }),
                n
            );
        }
    };
