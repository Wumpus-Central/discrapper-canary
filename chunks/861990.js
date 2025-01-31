n.d(t, {
    B: () => l,
    Fm: () => d,
    Lc: () => c,
    U4: () => u,
    hn: () => f,
    zz: () => s
}),
    n(411104);
var i = n(830496),
    r = n(959517);
let a = [
        {
            reName: /\.jpe?g$/i,
            name: (e) => 'image'.concat(e, '.jpg'),
            type: 'image/jpeg'
        },
        {
            reName: /\.png$/i,
            name: (e) => 'image'.concat(e, '.png'),
            type: 'image/png'
        },
        {
            reName: /\.gif$/i,
            name: (e) => 'image'.concat(e, '.gif'),
            type: 'image/gif'
        },
        {
            reName: /\.webp$/i,
            name: (e) => 'image'.concat(e, '.webp'),
            type: 'image/webp'
        },
        {
            reName: /\.avif$/i,
            name: (e) => 'image'.concat(e, '.avif'),
            type: 'image/avif'
        },
        {
            reName: /\.heic$/i,
            name: (e) => 'image'.concat(e, '.heic'),
            type: 'image/heic'
        },
        {
            reName: /\.heif$/i,
            name: (e) => 'image'.concat(e, '.heif'),
            type: 'image/heif'
        },
        {
            reName: /\.dng$/i,
            name: (e) => 'image'.concat(e, '.dng'),
            type: 'image/x-adobe-dng'
        },
        {
            reName: /\.mov$/i,
            name: (e) => 'video'.concat(e, '.mov'),
            type: 'video/quicktime'
        },
        {
            reName: /\.avi$/i,
            name: (e) => 'video'.concat(e, '.avi'),
            type: 'video/x-msvideo'
        },
        {
            reName: /\.mp4$/i,
            name: (e) => 'video'.concat(e, '.mp4'),
            type: 'video/mp4'
        },
        {
            reName: /\.webm$/i,
            name: (e) => 'video'.concat(e, '.webm'),
            type: 'image/webm'
        }
    ],
    s = 524288000;
function o(e) {
    let { spoiler: t } = e;
    return t ? r._j : '';
}
function l(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        r = arguments.length > 2 ? arguments[2] : void 0,
        a = { id: null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : e.id };
    null != e.description && (a.description = e.description);
    let s = o({ spoiler: e.spoiler });
    return (a.filename = ''.concat(s).concat(null != r ? r : e.filename)), (a.uploaded_filename = e.uploadedFilename), 'durationSecs' in e && null != e.durationSecs && (a.duration_secs = e.durationSecs), 'waveform' in e && null != e.waveform && (a.waveform = e.waveform), 'isThumbnail' in e && !0 === e.isThumbnail && (a.is_thumbnail = e.isThumbnail), 'isRemix' in e && !0 === e.isRemix && (a.is_remix = e.isRemix), 'clip' in e && null != e.clip && ((a.is_clip = !0), (a.title = e.clip.name), (a.application_id = e.clip.applicationId), (a.clip_created_at = (0, i.U)(e.clip.id)), (a.clip_participant_ids = (0, i.Z)(e.clip.users))), a;
}
function u(e, t, n) {
    let i = new XMLHttpRequest();
    return new Promise((r, a) => {
        i.open('GET', e, !0),
            (i.responseType = 'blob'),
            i.setRequestHeader('Range', 'bytes='.concat(t, '-').concat(n)),
            (i.onabort = (e) => a(e)),
            (i.onerror = (e) => a(e)),
            (i.ontimeout = (e) => a(e)),
            (i.onload = () => {
                206 === i.status ? r(i.response) : a(Error('Range request failed'));
            }),
            i.send();
    });
}
function c(e) {
    let t = new XMLHttpRequest();
    return new Promise((n, i) => {
        t.open('GET', e, !0),
            (t.responseType = 'blob'),
            (t.onabort = (e) => i(e)),
            (t.onerror = (e) => i(e)),
            (t.ontimeout = (e) => i(e)),
            (t.onload = () => {
                var e;
                return n(null == t ? void 0 : null === (e = t.response) || void 0 === e ? void 0 : e.data);
            }),
            t.send();
    });
}
function d(e) {
    return new Promise((t, n) => {
        let i = new XMLHttpRequest();
        i.open('HEAD', e, !0),
            (i.onload = () => {
                if (i.status >= 200 && i.status < 300) {
                    let e = i.getResponseHeader('Content-Length');
                    null != e && '' !== e ? t(parseInt(e, 10)) : n(Error('Content-Length header is missing'));
                } else n(Error('HTTP request failed with status code '.concat(i.status)));
            }),
            (i.onerror = n),
            (i.onabort = n),
            (i.ontimeout = n),
            i.send();
    });
}
function f(e) {
    var t, n, i, r, s, o;
    let l,
        { uri: u, i: c, overrideFilename: d, overrideType: f } = e,
        _ = u.split('/'),
        p = _[_.length - 1];
    p = null !== (i = null === (n = p.split('?')) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== i ? i : '';
    let h = a.find((e) => e.reName.test(p));
    if ((null == h && null != d && (h = a.find((e) => e.reName.test(d))), null != h && null != d)) {
        let e = h.name(c).split('.').pop(),
            t = d.lastIndexOf('.');
        l = -1 !== t ? ''.concat(d.substr(0, t), '.').concat(e) : ''.concat(d, '.').concat(e);
    } else l = null != h ? h.name(c) : null != d ? d : 'unknown';
    return {
        uri: u,
        filename: l,
        type: null !== (r = null != f ? f : null == h ? void 0 : h.type) && void 0 !== r ? r : 'unknown',
        isVideo: -1 !== (null !== (s = null != f ? f : null == h ? void 0 : h.name(c)) && void 0 !== s ? s : '').indexOf('video'),
        isImage: -1 !== (null !== (o = null != f ? f : null == h ? void 0 : h.name(c)) && void 0 !== o ? o : '').indexOf('image')
    };
}
