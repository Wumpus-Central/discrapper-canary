r.d(n, {
    KK: function () {
        return c;
    },
    Z5: function () {
        return f;
    },
    aG: function () {
        return d;
    },
    d$: function () {
        return p;
    }
});
var i = r(411104);
var a = r(358085),
    o = r(18323),
    s = r(647162),
    l = r(616922);
function u(e, n, r) {
    let i;
    !(0, a.isDesktop)() && (i = window.open('', '_blank')),
        (0, s.iy)(e, n)
            .then((e) => r(e))
            .then((e) => {
                let { resourceType: n, resourceId: r } = e,
                    a = o.Z.isProtocolRegistered() ? l.C7.PLAYER_OPEN(n, r) : l.C7.WEB_OPEN(n, r);
                null != i ? (i.location.href = a) : window.open(a);
            })
            .catch(() => {
                null != i && i.close();
            });
}
function c() {
    window.open(l.C7.PREMIUM_SITE);
}
function d(e) {
    var n;
    let { sync_id: r, metadata: i } = e;
    if (null == r) return;
    let a = (0, l.c8)(null !== (n = null == i ? void 0 : i.type) && void 0 !== n ? n : l.Hw.TRACK);
    if (null == a) return;
    let s = o.Z.isProtocolRegistered() ? l.C7.PLAYER_OPEN(a, r) : l.C7.WEB_OPEN(a, r);
    window.open(s);
}
function f(e, n) {
    u(e, n, (n) => {
        var r;
        let { album_id: i } = n;
        return {
            resourceType: (0, l.c8)(null === (r = e.metadata) || void 0 === r ? void 0 : r.type) === l.Hw.EPISODE ? l.Hw.SHOW : l.Hw.ALBUM,
            resourceId: i
        };
    });
}
function p(e, n, r) {
    u(e, n, (e) => {
        let { artist_ids: n } = e;
        if (null == n) throw Error('no artist ids in metadata');
        let i = n[r];
        if (null == i) throw Error('invalid artist index');
        return {
            resourceType: l.Hw.ARTIST,
            resourceId: i
        };
    });
}
