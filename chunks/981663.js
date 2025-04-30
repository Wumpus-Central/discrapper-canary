n(388685), n(539854);
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(786761);
let c = new Map(),
    u = new Map();
function d() {
    (c = new Map()), (u = new Map());
}
let p = [],
    h = [];
class f extends (r = a.ZP.Store) {
    getRecentMessageAuthorIds(e) {
        var t;
        return null != (t = c.get(e)) ? t : p;
    }
    getRecentMessageChannelIds(e) {
        var t;
        return null != (t = u.get(e)) ? t : h;
    }
}
(l = 'SearchRecentMessageStore'),
    (i = 'displayName') in f
        ? Object.defineProperty(f, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[i] = l),
    new f(o.Z, {
        SEARCH_MESSAGES_SUCCESS: function (e) {
            var t, n;
            let { guildId: r, data: i } = e;
            if (null == r) return !1;
            let l = !1,
                a = !1,
                o = [...(null != (t = c.get(r)) ? t : [])],
                d = new Set(o),
                p = [...(null != (n = u.get(r)) ? n : [])],
                h = new Set(p);
            return (
                i.forEach((e) => {
                    e.messages.forEach((e) => {
                        let [t] = e,
                            n = (0, s.e5)(t);
                        !d.has(n.author.id) && d.size < 15 && (d.add(n.author.id), o.push(n.author.id), (l = !0)), !h.has(n.channel_id) && h.size < 15 && (h.add(n.channel_id), p.push(n.channel_id), (a = !0));
                    });
                }),
                l && c.set(r, o),
                a && u.set(r, p),
                l || a
            );
        },
        SEARCH_RECENT_MESSAGES_CLEAR: d,
        CONNECTION_OPEN: d
    });
