n.d(t, {
    B: () => c,
    Lc: () => u,
    hn: () => d,
    zz: () => s,
}),
    n(953529),
    n(415506),
    n(35282);
var r = n(476326),
    i = n(830496),
    a = n(959517);
let o = [
        {
            reName: /\.jpe?g$/i,
            name: (e) => "image".concat(e, ".jpg"),
            type: "image/jpeg",
        },
        {
            reName: /\.jfif$/i,
            name: (e) => "image".concat(e, ".jpg"),
            type: "image/jpeg",
        },
        {
            reName: /\.png$/i,
            name: (e) => "image".concat(e, ".png"),
            type: "image/png",
        },
        {
            reName: /\.gif$/i,
            name: (e) => "image".concat(e, ".gif"),
            type: "image/gif",
        },
        {
            reName: /\.webp$/i,
            name: (e) => "image".concat(e, ".webp"),
            type: "image/webp",
        },
        {
            reName: /\.avif$/i,
            name: (e) => "image".concat(e, ".avif"),
            type: "image/avif",
        },
        {
            reName: /\.heic$/i,
            name: (e) => "image".concat(e, ".heic"),
            type: "image/heic",
        },
        {
            reName: /\.heif$/i,
            name: (e) => "image".concat(e, ".heif"),
            type: "image/heif",
        },
        {
            reName: /\.dng$/i,
            name: (e) => "image".concat(e, ".dng"),
            type: "image/x-adobe-dng",
        },
        {
            reName: /\.mov$/i,
            name: (e) => "video".concat(e, ".mov"),
            type: "video/quicktime",
        },
        {
            reName: /\.avi$/i,
            name: (e) => "video".concat(e, ".avi"),
            type: "video/x-msvideo",
        },
        {
            reName: /\.mp4$/i,
            name: (e) => "video".concat(e, ".mp4"),
            type: "video/mp4",
        },
        {
            reName: /\.webm$/i,
            name: (e) => "video".concat(e, ".webm"),
            type: "image/webm",
        },
    ],
    s = 524288000;
function l(e) {
    let { spoiler: t } = e;
    return t ? a._j : "";
}
function c(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        a = arguments.length > 2 ? arguments[2] : void 0,
        o = { id: null != (t = null == n ? void 0 : n.toString()) ? t : e.id };
    null != e.description && (o.description = e.description);
    let s = l({ spoiler: e.spoiler });
    return (
        (o.filename = "".concat(s).concat(null != a ? a : e.filename)),
        (o.uploaded_filename = e.uploadedFilename),
        "durationSecs" in e && null != e.durationSecs && (o.duration_secs = e.durationSecs),
        "waveform" in e && null != e.waveform && (o.waveform = e.waveform),
        "isThumbnail" in e && !0 === e.isThumbnail && (o.is_thumbnail = e.isThumbnail),
        "isRemix" in e && !0 === e.isRemix && (o.is_remix = e.isRemix),
        "clip" in e &&
            null != e.clip &&
            ((o.is_clip = !0),
            (o.title = e.clip.name),
            (o.application_id = e.clip.applicationId),
            (o.clip_created_at = (0, i.U)(e.clip.id)),
            (o.clip_participant_ids = (0, i.Z)(e.clip.users))),
        "item" in e &&
            null != e.item &&
            e.item.platform === r.ow.WEB &&
            "mimeType" in e &&
            null != e.mimeType &&
            (o.original_content_type = e.mimeType),
        o
    );
}
function u(e) {
    let t = new XMLHttpRequest();
    return new Promise((n, r) => {
        t.open("GET", e, !0),
            (t.responseType = "blob"),
            (t.onabort = (e) => r(e)),
            (t.onerror = (e) => r(e)),
            (t.ontimeout = (e) => r(e)),
            (t.onload = () => {
                var e;
                return n(null == t || null == (e = t.response) ? void 0 : e.data);
            }),
            t.send();
    });
}
function d(e) {
    var t, n, r, i, a, s;
    let l,
        { uri: c, i: u, overrideFilename: d, overrideType: f } = e,
        _ = c.split("/"),
        p = _[_.length - 1];
    p = null != (r = null == (n = p.split("?")) || null == (t = n[0]) ? void 0 : t.toLowerCase()) ? r : "";
    let h = o.find((e) => e.reName.test(p));
    if ((null == h && null != d && (h = o.find((e) => e.reName.test(d))), null != h && null != d)) {
        let e = h.name(u).split(".").pop(),
            t = d.lastIndexOf(".");
        l = -1 !== t ? "".concat(d.substr(0, t), ".").concat(e) : "".concat(d, ".").concat(e);
    } else l = null != h ? h.name(u) : null != d ? d : "unknown";
    return {
        uri: c,
        filename: l,
        type: null != (i = null != f ? f : null == h ? void 0 : h.type) ? i : "unknown",
        isVideo: -1 !== (null != (a = null != f ? f : null == h ? void 0 : h.name(u)) ? a : "").indexOf("video"),
        isImage: -1 !== (null != (s = null != f ? f : null == h ? void 0 : h.name(u)) ? s : "").indexOf("image"),
    };
}
