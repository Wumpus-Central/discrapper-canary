let i;
n.d(t, { Z: () => T });
var r,
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = 'GameLibraryViewStore',
    _ = 200,
    p = c.sHY.ASCENDING,
    h = c.iEv.LAST_PLAYED,
    m = !1,
    g = s().debounce(() => {
        (m = !1), I.emitChange();
    }, _);
function E(e) {
    let { key: t, isKeyboardEvent: n } = e;
    n && ((m = !0), g()), (i = t);
}
function v(e) {
    let { direction: t, key: n } = e;
    (p = t),
        (h = n),
        l.K.set(f, {
            sortDirection: p,
            sortKey: h
        });
}
class y extends (r = o.ZP.Store) {
    initialize() {
        var e;
        let t = null !== (e = l.K.get(f)) && void 0 !== e ? e : {};
        null != t.sortDirection && null != t.sortKey && ((p = t.sortDirection), (h = t.sortKey));
    }
    get sortDirection() {
        return p;
    }
    get sortKey() {
        return h;
    }
    get activeRowKey() {
        return i;
    }
    get isNavigatingByKeyboard() {
        return m;
    }
}
d(y, 'displayName', 'GameLibraryViewStore');
let I = new y(u.Z, {
        LIBRARY_TABLE_SORT_UPDATE: v,
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: E
    }),
    T = I;
