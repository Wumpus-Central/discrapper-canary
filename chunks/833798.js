n.d(t, { s: () => c }), n(977457), n(47120), n(627341);
var r = n(278074),
    i = n(264181),
    o = n(178185),
    a = n(272280),
    s = n(806185);
function l(e, t, n) {
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
class c {
    static fromServer(e) {
        var t;
        return new c(
            Object.fromEntries(
                Object.entries(null != (t = null == e ? void 0 : e.marketings) ? t : {}).map((e) => {
                    let [t, n] = e;
                    return [
                        t,
                        (0, r.EQ)(n)
                            .with({ type: i.Z.COACHTIP }, (e) => s.Z.fromServer(e))
                            .with({ type: i.Z.BADGE }, (e) => o.E.fromServer(e))
                            .with({ type: i.Z.BANNER }, (e) => a.I.fromServer(e))
                            .otherwise(() => void 0)
                    ];
                })
            )
        );
    }
    constructor(e) {
        l(this, 'marketingsBySurfaces', void 0), (this.marketingsBySurfaces = e);
    }
}
