n.d(t, { s: () => u }), n(47120), n(627341);
var i = n(278074),
    r = n(264181),
    a = n(178185),
    s = n(272280),
    o = n(806185);
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
class u {
    static fromServer(e) {
        var t;
        return new u(
            Object.fromEntries(
                Object.entries(null !== (t = null == e ? void 0 : e.marketings) && void 0 !== t ? t : {}).map((e) => {
                    let [t, n] = e;
                    return [
                        t,
                        (0, i.EQ)(n)
                            .with({ type: r.Z.COACHTIP }, (e) => o.Z.fromServer(e))
                            .with({ type: r.Z.BADGE }, (e) => a.E.fromServer(e))
                            .with({ type: r.Z.BANNER }, (e) => s.I.fromServer(e))
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
