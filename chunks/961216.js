(r.d(t, { Z: () => o }), r(415506));
var n = r(840877),
    s = r(170216),
    l = r(862825),
    a = r(981631);
class i extends s.L {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: r, getLimit: n, pagination: s, trackExactTotalHits: a } = e,
            { include_nsfw: i, channel_id: o } = t,
            c = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            s = {},
                            l = Object.keys(e);
                        for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
                }
                return s;
            })(t, ['include_nsfw', 'channel_id']),
            u = {
                include_nsfw: i,
                channel_ids: o,
                tabs: {},
                track_exact_total_hits: a
            };
        return (
            r.forEach((e) => {
                var t, r;
                let a = n(e),
                    i = l.yY[e],
                    o = null != i ? l.SO[i] : {};
                u.tabs[e] =
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({}, l.E2, o, c, s)),
                    (r = r = { limit: a }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t);
            }),
            u
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: r, searchTabs: s, getLimit: l, pagination: i, trackExactTotalHits: o } = e,
            c = this.createRequestPayload({
                searchQuery: r,
                searchTabs: s,
                getLimit: l,
                pagination: i,
                trackExactTotalHits: o
            });
        switch (t.type) {
            case a.aib.GUILD:
            case a.aib.GUILD_CHANNEL:
                return new n.tJ(t.guildId, t.type, r, c);
            case a.aib.CHANNEL:
                return new n.tJ(t.channelId, t.type, r, c);
            case a.aib.DMS:
                return new n.tJ(t.type, t.type, r, c);
            default:
                throw Error('[SearchFetchManager] Unsupported search context type: '.concat(t.type));
        }
    }
    create(e) {
        let { id: t, searchContext: r, searchQuery: n, searchTabs: s, getLimit: l, pagination: a, trackExactTotalHits: i } = e;
        this.cancel(t);
        let o = this.createWithPayload({
            searchContext: r,
            searchQuery: n,
            searchTabs: s,
            getLimit: l,
            pagination: a,
            trackExactTotalHits: i
        });
        return (this.set(t, o), o);
    }
}
let o = new i();
