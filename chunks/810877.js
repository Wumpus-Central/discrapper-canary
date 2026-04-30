n.d(t, { W: () => A });
var i = n(830917),
    l = n(691540),
    s = n(857250),
    r = n(97483),
    a = n(157559),
    o = n(554375),
    d = n(77257),
    c = n(61310),
    u = n(73621),
    m = n(174459),
    g = n(690521),
    x = n(515718),
    h = n(307731),
    E = n(652215),
    j = n(375708),
    N = n(264572).Buffer;
let p = (e, t, n, i) => (
        m.default.track(E.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { guild_id: n, file_size: t, upload_id: i }),
        u.o.TOO_BIG
    ),
    A = async (e) => {
        let {
                data: t,
                file: n,
                guildId: A,
                uploadId: f,
                roles: I,
                image: C,
                hideErrorModal: v,
                analyticsLocation: S,
            } = e,
            _ = d.A.fromBlob(c.f.EMOJI, n),
            T = g.Ay.sanitizeEmojiName(n.name.split(".")[0]);
        if (g.Ay.isFileTooBig(n)) {
            if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
                return p(n.name, n.size, A, f);
            else if (null != C) {
                var b, y;
                let e;
                t = (0, i.h_)(C, 128, 128);
                try {
                    e = g.Ay.isDataTooBig(t);
                } catch (e) {
                    return p(n.name, n.size, A, f);
                }
                if (
                    ((b = t),
                    (y = e),
                    m.default.track(E.HAw.EMOJI_FILE_RESIZED, {
                        is_animated: !1,
                        file_type: n.type.split("/").pop(),
                        original_file_size_bytes: n.size,
                        resized_file_size_bytes: (0, x.EW)(b),
                        resized_file_too_big: y,
                    }),
                    e)
                )
                    return p(n.name, n.size, A, f);
            }
        }
        try {
            let e = await _.getOriginalMd5(),
                n = await (0, o.Gf)({ guildId: A, image: t, name: T, roles: I, analyticsLocation: S, originalMd5: e });
            return (
                m.default.track(E.HAw.EMOJI_UPLOAD_COMPLETED, { guild_id: A, upload_id: f }),
                (0, l.P0)((0, s.o)(j.intl.string(j.t["r0w9m/"]), r.Ck.SUCCESS)),
                n
            );
        } catch (s) {
            let e,
                n,
                { body: i, status: l } = s;
            return (
                null != i &&
                    (i.code === E.t02.TOO_MANY_EMOJI
                        ? ((e = j.intl.string(j.t["jP/Rqm"])), (n = u.o.TOO_MANY_EMOJI))
                        : i.code === E.t02.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = j.intl.string(j.t["6v5dP/"])), (n = u.o.TOO_MANY_ANIMATED_EMOJI))
                          : null != i.image || i.code === E.t02.INVALID_FILE_ASSET_SIZE
                            ? (m.default.track(E.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: A,
                                  file_size: N.byteLength(t),
                                  upload_id: f,
                              }),
                              (e = j.intl.formatToPlainString(j.t.kIO9jy, { maxSize: h.EMOJI_MAX_FILESIZE_KB })),
                              (n = u.o.TOO_BIG))
                            : (null != i.image || i.code === E.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED) &&
                              (n = u.o.RESIZE_ANIMATED)),
                429 === l && ((e = j.intl.string(j.t.Whhv4w)), (n = u.o.RATE_LIMIT)),
                null == e || v || a.A.show({ title: j.intl.string(j.t.iufib1), body: e }),
                n
            );
        }
    };
