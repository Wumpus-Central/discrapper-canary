let i;
var a,
    o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(433517),
    c = r(570140),
    d = r(981631);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = 'GameLibraryViewStore',
    h = 200,
    _ = d.sHY.ASCENDING,
    m = d.iEv.LAST_PLAYED,
    g = !1,
    E = s().debounce(() => {
        (g = !1), I.emitChange();
    }, h);
function v(e) {
    let { key: n, isKeyboardEvent: r } = e;
    r && ((g = !0), E()), (i = n);
}
function y(e) {
    let { direction: n, key: r } = e;
    (_ = n),
        (m = r),
        u.K.set(p, {
            sortDirection: _,
            sortKey: m
        });
}
class b extends (a = l.ZP.Store) {
    initialize() {
        var e;
        let n = null !== (e = u.K.get(p)) && void 0 !== e ? e : {};
        null != n.sortDirection && null != n.sortKey && ((_ = n.sortDirection), (m = n.sortKey));
    }
    get sortDirection() {
        return _;
    }
    get sortKey() {
        return m;
    }
    get activeRowKey() {
        return i;
    }
    get isNavigatingByKeyboard() {
        return g;
    }
}
f(b, 'displayName', 'GameLibraryViewStore');
let I = new b(c.Z, {
    LIBRARY_TABLE_SORT_UPDATE: y,
    LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: v
});
n.Z = I;
