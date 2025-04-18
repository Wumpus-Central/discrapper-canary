n.d(t, {
    KK: () => l,
    Z5: () => u,
    aG: () => c,
    d$: () => d
}),
    n(415506);
var r = n(358085),
    i = n(18323),
    a = n(647162),
    o = n(616922);
function s(e, t, n) {
    let s;
    (0, r.isDesktop)() || (s = window.open('', '_blank')),
        (0, a.iy)(e, t)
            .then((e) => n(e))
            .then((e) => {
                let { resourceType: t, resourceId: n } = e,
                    r = i.Z.isProtocolRegistered() ? o.C7.PLAYER_OPEN(t, n) : o.C7.WEB_OPEN(t, n);
                null != s ? (s.location.href = r) : window.open(r);
            })
            .catch(() => {
                null != s && s.close();
            });
}
function l() {
    window.open(o.C7.PREMIUM_SITE);
}
function c(e) {
    var t;
    let { sync_id: n, metadata: r } = e;
    if (null == n) return;
    let a = (0, o.c8)(null != (t = null == r ? void 0 : r.type) ? t : o.Hw.TRACK);
    if (null == a) return;
    let s = i.Z.isProtocolRegistered() ? o.C7.PLAYER_OPEN(a, n) : o.C7.WEB_OPEN(a, n);
    window.open(s);
}
function u(e, t) {
    s(e, t, (t) => {
        var n;
        let { album_id: r } = t;
        return {
            resourceType: (0, o.c8)(null == (n = e.metadata) ? void 0 : n.type) === o.Hw.EPISODE ? o.Hw.SHOW : o.Hw.ALBUM,
            resourceId: r
        };
    });
}
function d(e, t, n) {
    s(e, t, (e) => {
        let { artist_ids: t } = e;
        if (null == t) throw Error('no artist ids in metadata');
        let r = t[n];
        if (null == r) throw Error('invalid artist index');
        return {
            resourceType: o.Hw.ARTIST,
            resourceId: r
        };
    });
}
