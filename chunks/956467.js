n.d(t, { A: () => _ }), n(65821);
var r = n(177068),
    i = n(409037),
    a = n(768570),
    s = n(652215);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
class p extends i.c {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: r, pagination: i, trackExactTotalHits: s } = e,
            { include_nsfw: o, channel_id: c } = t,
            f = d(t, ["include_nsfw", "channel_id"]),
            p = {
                include_nsfw: o,
                channel_ids: c,
                tabs: {},
                track_exact_total_hits: s,
            };
        return (
            n.forEach((e) => {
                let t = r(e),
                    n = a.B7[e],
                    s = null != n ? a.su[n] : {};
                p.tabs[e] = u(l({}, a.us, s, f, i), { limit: t });
            }),
            p
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: n, searchTabs: i, getLimit: a, pagination: o, trackExactTotalHits: l } = e,
            c = this.createRequestPayload({
                searchQuery: n,
                searchTabs: i,
                getLimit: a,
                pagination: o,
                trackExactTotalHits: l,
            });
        switch (t.type) {
            case s.I4_.GUILD:
            case s.I4_.GUILD_CHANNEL:
            case s.I4_.THREAD:
                return new r.DX(t.guildId, t.type, n, c);
            case s.I4_.CHANNEL:
                return new r.DX(t.channelId, t.type, n, c);
            case s.I4_.DMS:
                return new r.DX(t.type, t.type, n, c);
            default:
                throw Error("[SearchFetchManager] Unsupported search context type: ".concat(t.type));
        }
    }
    create(e) {
        let {
            id: t,
            searchContext: n,
            searchQuery: r,
            searchTabs: i,
            getLimit: a,
            pagination: s,
            trackExactTotalHits: o,
        } = e;
        this.cancel(t);
        let l = this.createWithPayload({
            searchContext: n,
            searchQuery: r,
            searchTabs: i,
            getLimit: a,
            pagination: s,
            trackExactTotalHits: o,
        });
        return this.set(t, l), l;
    }
}
let _ = new p();
