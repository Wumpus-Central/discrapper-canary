r.d(n, {
    B: function () {
        return c;
    },
    Fm: function () {
        return p;
    },
    Lc: function () {
        return f;
    },
    U4: function () {
        return d;
    },
    hn: function () {
        return h;
    },
    zz: function () {
        return l;
    }
});
var i = r(411104);
var a = r(830496),
    o = r(959517);
let s = [
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
    l = 524288000;
function u(e) {
    let { spoiler: n } = e;
    return n ? o._j : '';
}
function c(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = arguments.length > 2 ? arguments[2] : void 0,
        o = { id: null !== (n = null == r ? void 0 : r.toString()) && void 0 !== n ? n : e.id };
    null != e.description && (o.description = e.description);
    let s = u({ spoiler: e.spoiler });
    return (o.filename = ''.concat(s).concat(null != i ? i : e.filename)), (o.uploaded_filename = e.uploadedFilename), 'durationSecs' in e && null != e.durationSecs && (o.duration_secs = e.durationSecs), 'waveform' in e && null != e.waveform && (o.waveform = e.waveform), 'isThumbnail' in e && !0 === e.isThumbnail && (o.is_thumbnail = e.isThumbnail), 'isRemix' in e && !0 === e.isRemix && (o.is_remix = e.isRemix), 'clip' in e && null != e.clip && ((o.is_clip = !0), (o.title = e.clip.name), (o.application_id = e.clip.applicationId), (o.clip_created_at = (0, a.U)(e.clip.id)), (o.clip_participant_ids = (0, a.Z)(e.clip.users))), o;
}
function d(e, n, r) {
    let i = new XMLHttpRequest();
    return new Promise((a, o) => {
        i.open('GET', e, !0),
            (i.responseType = 'blob'),
            i.setRequestHeader('Range', 'bytes='.concat(n, '-').concat(r)),
            (i.onabort = (e) => o(e)),
            (i.onerror = (e) => o(e)),
            (i.ontimeout = (e) => o(e)),
            (i.onload = () => {
                206 === i.status ? a(i.response) : o(Error('Range request failed'));
            }),
            i.send();
    });
}
function f(e) {
    let n = new XMLHttpRequest();
    return new Promise((r, i) => {
        n.open('GET', e, !0),
            (n.responseType = 'blob'),
            (n.onabort = (e) => i(e)),
            (n.onerror = (e) => i(e)),
            (n.ontimeout = (e) => i(e)),
            (n.onload = () => {
                var e;
                return r(null == n ? void 0 : null === (e = n.response) || void 0 === e ? void 0 : e.data);
            }),
            n.send();
    });
}
function p(e) {
    return new Promise((n, r) => {
        let i = new XMLHttpRequest();
        i.open('HEAD', e, !0),
            (i.onload = () => {
                if (i.status >= 200 && i.status < 300) {
                    let e = i.getResponseHeader('Content-Length');
                    null != e && '' !== e ? n(parseInt(e, 10)) : r(Error('Content-Length header is missing'));
                } else r(Error('HTTP request failed with status code '.concat(i.status)));
            }),
            (i.onerror = r),
            (i.onabort = r),
            (i.ontimeout = r),
            i.send();
    });
}
function h(e) {
    var n, r, i, a, o, l;
    let u,
        { uri: c, i: d, overrideFilename: f, overrideType: p } = e,
        h = c.split('/'),
        _ = h[h.length - 1];
    _ = null !== (i = null === (r = _.split('?')) || void 0 === r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.toLowerCase()) && void 0 !== i ? i : '';
    let m = s.find((e) => e.reName.test(_));
    if ((null == m && null != f && (m = s.find((e) => e.reName.test(f))), null != m && null != f)) {
        let e = m.name(d).split('.').pop(),
            n = f.lastIndexOf('.');
        u = -1 !== n ? ''.concat(f.substr(0, n), '.').concat(e) : ''.concat(f, '.').concat(e);
    } else u = null != m ? m.name(d) : null != f ? f : 'unknown';
    return {
        uri: c,
        filename: u,
        type: null !== (a = null != p ? p : null == m ? void 0 : m.type) && void 0 !== a ? a : 'unknown',
        isVideo: -1 !== (null !== (o = null != p ? p : null == m ? void 0 : m.name(d)) && void 0 !== o ? o : '').indexOf('video'),
        isImage: -1 !== (null !== (l = null != p ? p : null == m ? void 0 : m.name(d)) && void 0 !== l ? l : '').indexOf('image')
    };
}
