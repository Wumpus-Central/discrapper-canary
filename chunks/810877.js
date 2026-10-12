n.d(t, { W: () => f });
var i = n(830917),
    l = n(858899),
    s = n(157559),
    r = n(554375),
    a = n(268429),
    o = n(61310),
    d = n(73621),
    c = n(174459),
    u = n(690521),
    m = n(515718),
    g = n(307731),
    x = n(652215),
    h = n(660183),
    E = n(264572).Buffer;
function j(e, t, n, i) {
    return (
        c.default.track(x.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { guild_id: n, file_size: t, upload_id: i }),
        d.o.TOO_BIG
    );
}
async function f(e) {
    let { data: t, file: n, guildId: f, uploadId: N, roles: p, image: A, hideErrorModal: I, analyticsLocation: S } = e,
        C = a.A.fromBlob(o.f.EMOJI, n),
        _ = u.Ay.sanitizeEmojiName(n.name.split(".")[0]);
    if (u.Ay.isFileTooBig(n)) {
        if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
            return j(n.name, n.size, f, N);
        else if (null != A) {
            var v, T;
            let e;
            t = (0, i.h_)(A, 128, 128);
            try {
                e = u.Ay.isDataTooBig(t);
            } catch (e) {
                return j(n.name, n.size, f, N);
            }
            if (
                ((v = t),
                (T = e),
                c.default.track(x.HAw.EMOJI_FILE_RESIZED, {
                    is_animated: !1,
                    file_type: n.type.split("/").pop(),
                    original_file_size_bytes: n.size,
                    resized_file_size_bytes: (0, m.EW)(v),
                    resized_file_too_big: T,
                }),
                e)
            )
                return j(n.name, n.size, f, N);
        }
    }
    try {
        let e = await C.getOriginalMd5(),
            n = await (0, r.Gf)({ guildId: f, image: t, name: _, roles: p, analyticsLocation: S, originalMd5: e });
        return (
            c.default.track(x.HAw.EMOJI_UPLOAD_COMPLETED, { guild_id: f, upload_id: N }),
            (0, l.P0)({ text: h.intl.string(h.t["r0w9m/"]), variant: "success" }),
            n
        );
    } catch (r) {
        let e,
            n,
            { body: i, status: l } = r;
        return (
            null != i &&
                (i.code === x.t02.TOO_MANY_EMOJI
                    ? ((e = h.intl.string(h.t["jP/Rqm"])), (n = d.o.TOO_MANY_EMOJI))
                    : i.code === x.t02.TOO_MANY_ANIMATED_EMOJI
                      ? ((e = h.intl.string(h.t["6v5dP/"])), (n = d.o.TOO_MANY_ANIMATED_EMOJI))
                      : null != i.image || i.code === x.t02.INVALID_FILE_ASSET_SIZE
                        ? (c.default.track(x.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                              guild_id: f,
                              file_size: E.byteLength(t),
                              upload_id: N,
                          }),
                          (e = h.intl.formatToPlainString(h.t.kIO9jy, { maxSize: g.EMOJI_MAX_FILESIZE_KB })),
                          (n = d.o.TOO_BIG))
                        : (null != i.image || i.code === x.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED) &&
                          (n = d.o.RESIZE_ANIMATED)),
            429 === l && ((e = h.intl.string(h.t.Whhv4w)), (n = d.o.RATE_LIMIT)),
            null == e || I || s.A.show({ title: h.intl.string(h.t.iufib1), body: e }),
            n
        );
    }
}
