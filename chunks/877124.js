n.d(t, {
    FL: () => a,
    XR: () => r,
    tJ: () => o
});
let i = new Map(),
    r = (e) => (t, n, i) => {
        let r = i.subscribe;
        return (
            (i.subscribe = (e, t, n) => {
                let a = e;
                if (t) {
                    let r = (null == n ? void 0 : n.equalityFn) || Object.is,
                        s = e(i.getState());
                    (a = (n) => {
                        let i = e(n);
                        if (!r(s, i)) {
                            let e = s;
                            t((s = i), e);
                        }
                    }),
                        (null == n ? void 0 : n.fireImmediately) && t(s, s);
                }
                return r(a);
            }),
            e(t, n, i)
        );
    };
function a(e, t) {
    let n;
    try {
        n = e();
    } catch (e) {
        return;
    }
    return {
        getItem: (e) => {
            var i;
            let r = (e) => (null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver)),
                a = null != (i = n.getItem(e)) ? i : null;
            return a instanceof Promise ? a.then(r) : r(a);
        },
        setItem: (e, i) => n.setItem(e, JSON.stringify(i, null == t ? void 0 : t.replacer)),
        removeItem: (e) => n.removeItem(e)
    };
}
let s = (e) => (t) => {
        try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
                then: (e) => s(e)(n),
                catch(e) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => s(t)(e)
            };
        }
    },
    o = (e, t) => (n, i, r) => {
        let o,
            l = {
                storage: a(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({
                    ...t,
                    ...e
                }),
                ...t
            },
            u = !1,
            c = new Set(),
            d = new Set(),
            f = l.storage;
        if (!f)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...e);
                },
                i,
                r
            );
        let _ = () => {
                let e = l.partialize({ ...i() });
                return f.setItem(l.name, {
                    state: e,
                    version: l.version
                });
            },
            p = r.setState;
        r.setState = (e, t) => {
            p(e, t), _();
        };
        let h = e(
            (...e) => {
                n(...e), _();
            },
            i,
            r
        );
        r.getInitialState = () => h;
        let m = () => {
            var e, t;
            if (!f) return;
            (u = !1),
                c.forEach((e) => {
                    var t;
                    return e(null != (t = i()) ? t : h);
                });
            let r = (null == (t = l.onRehydrateStorage) ? void 0 : t.call(l, null != (e = i()) ? e : h)) || void 0;
            return s(f.getItem.bind(f))(l.name)
                .then((e) => {
                    if (e) {
                        if ('number' != typeof e.version || e.version === l.version) return [!1, e.state];
                        if (l.migrate) return [!0, l.migrate(e.state, e.version)];
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                    }
                    return [!1, void 0];
                })
                .then((e) => {
                    var t;
                    let [r, a] = e;
                    if ((n((o = l.merge(a, null != (t = i()) ? t : h)), !0), r)) return _();
                })
                .then(() => {
                    null == r || r(o, void 0), (o = i()), (u = !0), d.forEach((e) => e(o));
                })
                .catch((e) => {
                    null == r || r(void 0, e);
                });
        };
        return (
            (r.persist = {
                setOptions: (e) => {
                    (l = {
                        ...l,
                        ...e
                    }),
                        e.storage && (f = e.storage);
                },
                clearStorage: () => {
                    null == f || f.removeItem(l.name);
                },
                getOptions: () => l,
                rehydrate: () => m(),
                hasHydrated: () => u,
                onHydrate: (e) => (
                    c.add(e),
                    () => {
                        c.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    d.add(e),
                    () => {
                        d.delete(e);
                    }
                )
            }),
            l.skipHydration || m(),
            o || h
        );
    };
