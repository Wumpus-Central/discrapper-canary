r.d(n, {
    FL: function () {
        return u;
    },
    XR: function () {
        return l;
    },
    tJ: function () {
        return d;
    }
});
let i = new Map(),
    a = (e) => {
        let n = i.get(e);
        return n ? Object.fromEntries(Object.entries(n.stores).map(([e, n]) => [e, n.getState()])) : {};
    },
    o = (e, n, r) => {
        if (void 0 === e)
            return {
                type: 'untracked',
                connection: n.connect(r)
            };
        let a = i.get(r.name);
        if (a)
            return {
                type: 'tracked',
                store: e,
                ...a
            };
        let o = {
            connection: n.connect(r),
            stores: {}
        };
        return (
            i.set(r.name, o),
            {
                type: 'tracked',
                store: e,
                ...o
            }
        );
    },
    s = (e, n) => {
        let r;
        try {
            r = JSON.parse(e);
        } catch (e) {
            console.error('[zustand devtools middleware] Could not parse the received json', e);
        }
        void 0 !== r && n(r);
    },
    l = (e) => (n, r, i) => {
        let a = i.subscribe;
        return (
            (i.subscribe = (e, n, r) => {
                let o = e;
                if (n) {
                    let a = (null == r ? void 0 : r.equalityFn) || Object.is,
                        s = e(i.getState());
                    (o = (r) => {
                        let i = e(r);
                        if (!a(s, i)) {
                            let e = s;
                            n((s = i), e);
                        }
                    }),
                        (null == r ? void 0 : r.fireImmediately) && n(s, s);
                }
                return a(o);
            }),
            e(n, r, i)
        );
    };
function u(e, n) {
    let r;
    try {
        r = e();
    } catch (e) {
        return;
    }
    return {
        getItem: (e) => {
            var i;
            let a = (e) => (null === e ? null : JSON.parse(e, null == n ? void 0 : n.reviver)),
                o = null != (i = r.getItem(e)) ? i : null;
            return o instanceof Promise ? o.then(a) : a(o);
        },
        setItem: (e, i) => r.setItem(e, JSON.stringify(i, null == n ? void 0 : n.replacer)),
        removeItem: (e) => r.removeItem(e)
    };
}
let c = (e) => (n) => {
        try {
            let r = e(n);
            if (r instanceof Promise) return r;
            return {
                then: (e) => c(e)(r),
                catch(e) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (n) => c(n)(e)
            };
        }
    },
    d = (e, n) => (r, i, a) => {
        let o,
            s = {
                storage: u(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, n) => ({
                    ...n,
                    ...e
                }),
                ...n
            },
            l = !1,
            d = new Set(),
            f = new Set(),
            p = s.storage;
        if (!p)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), r(...e);
                },
                i,
                a
            );
        let h = () => {
                let e = s.partialize({ ...i() });
                return p.setItem(s.name, {
                    state: e,
                    version: s.version
                });
            },
            _ = a.setState;
        a.setState = (e, n) => {
            _(e, n), h();
        };
        let m = e(
            (...e) => {
                r(...e), h();
            },
            i,
            a
        );
        a.getInitialState = () => m;
        let g = () => {
            var e, n;
            if (!p) return;
            (l = !1),
                d.forEach((e) => {
                    var n;
                    return e(null != (n = i()) ? n : m);
                });
            let a = (null == (n = s.onRehydrateStorage) ? void 0 : n.call(s, null != (e = i()) ? e : m)) || void 0;
            return c(p.getItem.bind(p))(s.name)
                .then((e) => {
                    if (e) {
                        if ('number' != typeof e.version || e.version === s.version) return [!1, e.state];
                        if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                    }
                    return [!1, void 0];
                })
                .then((e) => {
                    var n;
                    let [a, l] = e;
                    if ((r((o = s.merge(l, null != (n = i()) ? n : m)), !0), a)) return h();
                })
                .then(() => {
                    null == a || a(o, void 0), (o = i()), (l = !0), f.forEach((e) => e(o));
                })
                .catch((e) => {
                    null == a || a(void 0, e);
                });
        };
        return (
            (a.persist = {
                setOptions: (e) => {
                    (s = {
                        ...s,
                        ...e
                    }),
                        e.storage && (p = e.storage);
                },
                clearStorage: () => {
                    null == p || p.removeItem(s.name);
                },
                getOptions: () => s,
                rehydrate: () => g(),
                hasHydrated: () => l,
                onHydrate: (e) => (
                    d.add(e),
                    () => {
                        d.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    f.add(e),
                    () => {
                        f.delete(e);
                    }
                )
            }),
            !s.skipHydration && g(),
            o || m
        );
    };
