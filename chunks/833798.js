n.d(t, { s: () => u }), n(467055), n(388685), n(314940);
var r = n(278074),
    i = n(264181),
    a = n(178185),
    o = n(272280),
    s = n(751485),
    l = n(806185);
function c(e, t, n) {
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
class u {
    static fromServer(e) {
        var t;
        return new u(
            Object.fromEntries(
                Object.entries(null != (t = null == e ? void 0 : e.marketings) ? t : {}).map((e) => {
                    let [t, n] = e;
                    return [
                        t,
                        (0, r.EQ)(n)
                            .with({ type: i.Z.COACHTIP }, (e) => l.Z.fromServer(e))
                            .with({ type: i.Z.BADGE }, (e) => a.E.fromServer(e))
                            .with({ type: i.Z.BANNER }, (e) => o.I.fromServer(e))
                            .with({ type: i.Z.COACHMARK }, (e) => s.F.fromServer(e))
                            .otherwise(() => void 0)
                    ];
                })
            )
        );
    }
    constructor(e) {
        c(this, 'marketingsBySurfaces', void 0), (this.marketingsBySurfaces = e);
    }
}
