n.d(t, { Z: () => m }), n(47120);
var r = n(392711),
    s = n.n(r),
    o = n(570140),
    a = n(317770),
    i = n(120421),
    c = n(477839),
    l = n(981631),
    u = n(622802),
    d = n(388032);
function f(e, t, n) {
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
class p extends a.Z {
    _initialize() {
        (this.loaded = !0), (this.startingTime = Date.now()), i.Z.addChangeListener(this._onStoreChange);
    }
    _terminate() {
        (this.loaded = !1),
            i.Z.removeChangeListener(this._onStoreChange),
            o.Z.dispatch({
                type: 'LOCAL_ACTIVITY_UPDATE',
                socketId: 'clicker-game',
                activity: void 0
            });
    }
    constructor(...e) {
        super(...e),
            f(this, 'startingTime', 0),
            f(this, 'loaded', !1),
            f(
                this,
                '_onStoreChange',
                s().debounce(
                    () => {
                        if (!this.loaded) return;
                        let e = {
                            application_id: c.bO,
                            type: l.IIU.PLAYING,
                            name: d.NW.string(u.Z['7qZdOz']),
                            details: d.NW.formatToPlainString(u.Z['A3tW/f'], { total: Math.round(i.Z.lifetimePoints) }),
                            state: (function (e) {
                                if (null == e) return d.NW.string(u.Z.HXxY0N);
                                if ('purchase-item' === e.type) return d.NW.formatToPlainString(u.Z.QfiQys, { name: (0, c.w2)()[e.id].name });
                                if ('purchase-item-upgrade' === e.type) {
                                    let t = (0, c.r7)()[e.id],
                                        n = i.Z.getNumPurchasesForItemUpgrade(t.itemId, e.id),
                                        r = 'string' == typeof t.name ? t.name : d.NW.formatToPlainString(t.name, { numPurchasing: n });
                                    return d.NW.formatToPlainString(u.Z.GJwbPj, { name: r });
                                }
                                return 'unlock-achievement' === e.type ? d.NW.formatToPlainString(u.Z.hUterq, { name: (0, c.EC)()[e.id].name }) : d.NW.string(u.Z.HXxY0N);
                            })(i.Z.getLastAction()),
                            timestamps: { start: this.startingTime }
                        };
                        o.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: 'clicker-game',
                            activity: e
                        });
                    },
                    5000,
                    { maxWait: 5000 }
                )
            );
    }
}
let m = new p();
