"use strict";
n.d(t, { W: () => h });
var i = n(830917),
    s = n(397927),
    l = n(157559),
    r = n(554375),
    a = n(563863),
    o = n(954571),
    d = n(690521),
    c = n(515718);
n(307731);
var u = n(652215),
    m = n(985018),
    g = n(264572).Buffer;
let x = (e, t, n, i) => (
        o.default.track(u.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { guild_id: n, file_size: t, upload_id: i }),
        a.o.TOO_BIG
    ),
    h = async (e) => {
        let {
                data: t,
                file: n,
                guildId: h,
                uploadId: _,
                roles: A,
                image: p,
                hideErrorModal: f,
                analyticsLocation: j,
            } = e,
            N = d.Ay.sanitizeEmojiName(n.name.split(".")[0]);
        if (d.Ay.isFileTooBig(n)) {
            if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
                return x(n.name, n.size, h, _);
            else if (null != p) {
                var E, b;
                let e;
                t = (0, i.h_)(p, 128, 128);
                try {
                    e = d.Ay.isDataTooBig(t);
                } catch (e) {
                    return x(n.name, n.size, h, _);
                }
                if (
                    ((E = t),
                    (b = e),
                    o.default.track(u.HAw.EMOJI_FILE_RESIZED, {
                        is_animated: !1,
                        file_type: n.type.split("/").pop(),
                        original_file_size_bytes: n.size,
                        resized_file_size_bytes: (0, c.EW)(E),
                        resized_file_too_big: b,
                    }),
                    e)
                )
                    return x(n.name, n.size, h, _);
            }
        }
        try {
            let e = await (0, r.Gf)({ guildId: h, image: t, name: N, roles: A, analyticsLocation: j });
            return (
                o.default.track(u.HAw.EMOJI_UPLOAD_COMPLETED, { guild_id: h, upload_id: _ }),
                (0, s.showToast)((0, s.createToast)(m.intl.string(m.t["r0w9m/"]), s.ToastType.SUCCESS)),
                e
            );
        } catch (r) {
            let e,
                n,
                { body: i, status: s } = r;
            return (
                null != i &&
                    (i.code === u.t02.TOO_MANY_EMOJI
                        ? ((e = m.intl.string(m.t["jP/Rqm"])), (n = a.o.TOO_MANY_EMOJI))
                        : i.code === u.t02.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = m.intl.string(m.t["6v5dP/"])), (n = a.o.TOO_MANY_ANIMATED_EMOJI))
                          : null != i.image || i.code === u.t02.INVALID_FILE_ASSET_SIZE
                            ? (o.default.track(u.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: h,
                                  file_size: g.byteLength(t),
                                  upload_id: _,
                              }),
                              (e = m.intl.formatToPlainString(m.t.kIO9jy, { maxSize: 256 })),
                              (n = a.o.TOO_BIG))
                            : (null != i.image || i.code === u.t02.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) &&
                              (n = a.o.RESIZE_GIF)),
                429 === s && ((e = m.intl.string(m.t.Whhv4w)), (n = a.o.RATE_LIMIT)),
                null == e || f || l.A.show({ title: m.intl.string(m.t.iufib1), body: e }),
                n
            );
        }
    };
