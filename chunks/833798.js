n.d(t, { s: () => c }), n(467055), n(388685);
var r = n(264181),
    i = n(178185),
    a = n(272280),
    o = n(751485),
    s = n(806185);
function l(e, t, n) {
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
class c {
    static fromServer(e) {
        var t;
        return new c(
            Object.fromEntries(
                Object.entries(null != (t = null == e ? void 0 : e.marketings) ? t : {}).map((e) => {
                    let [t, n] = e;
                    return (null == n ? void 0 : n.type) === r.Z.COACHTIP
                        ? [t, s.Z.fromServer(n)]
                        : (null == n ? void 0 : n.type) === r.Z.BADGE
                          ? [t, i.E.fromServer(n)]
                          : (null == n ? void 0 : n.type) === r.Z.BANNER
                            ? [t, a.I.fromServer(n)]
                            : (null == n ? void 0 : n.type) === r.Z.COACHMARK
                              ? [t, o.F.fromServer(n)]
                              : [t, void 0];
                }),
            ),
        );
    }
    constructor(e) {
        l(this, "marketingsBySurfaces", void 0), (this.marketingsBySurfaces = e);
    }
}
