let r;
n.d(t, { Z: () => v });
var i,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(433517),
    c = n(570140),
    u = n(981631);
function d(e, t, n) {
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
let f = "GameLibraryViewStore",
    p = 200,
    _ = u.sHY.ASCENDING,
    m = u.iEv.LAST_PLAYED,
    h = !1,
    g = o().debounce(() => {
        (h = !1), O.emitChange();
    }, p);
function E(e) {
    let { key: t, isKeyboardEvent: n } = e;
    n && ((h = !0), g()), (r = t);
}
function b(e) {
    let { direction: t, key: n } = e;
    (_ = t),
        (m = n),
        l.K.set(f, {
            sortDirection: _,
            sortKey: m,
        });
}
class y extends (i = s.ZP.Store) {
    initialize() {
        var e;
        let t = null != (e = l.K.get(f)) ? e : {};
        null != t.sortDirection && null != t.sortKey && ((_ = t.sortDirection), (m = t.sortKey));
    }
    get sortDirection() {
        return _;
    }
    get sortKey() {
        return m;
    }
    get activeRowKey() {
        return r;
    }
    get isNavigatingByKeyboard() {
        return h;
    }
}
d(y, "displayName", "GameLibraryViewStore");
let O = new y(c.Z, {
        LIBRARY_TABLE_SORT_UPDATE: b,
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: E,
    }),
    v = O;
