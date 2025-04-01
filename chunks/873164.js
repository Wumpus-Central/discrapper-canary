n.d(t, { Z: () => m }), n(47120);
var r = n(392711),
    s = n.n(r),
    o = n(570140),
    i = n(317770),
    a = n(120421),
    c = n(477839),
    l = n(981631),
    u = n(884479),
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
class p extends i.Z {
    _initialize() {
        (this.loaded = !0), (this.startingTime = Date.now()), a.Z.addChangeListener(this._onStoreChange);
    }
    _terminate() {
        (this.loaded = !1),
            a.Z.removeChangeListener(this._onStoreChange),
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
                        var e;
                        if (!this.loaded) return;
                        let t = {
                            application_id: c.bO,
                            type: l.IIU.PLAYING,
                            name: d.NW.string(u.Z['7qZdOz']),
                            details: d.NW.formatToPlainString(u.Z['A3tW/f'], { total: Math.round(a.Z.lifetimePoints) }),
                            state: null == (e = a.Z.getLastAction()) ? d.NW.string(u.Z.HXxY0N) : 'purchase-item' === e.type ? d.NW.formatToPlainString(u.Z.QfiQys, { name: (0, c.w2)()[e.id].name }) : 'purchase-item-upgrade' === e.type ? d.NW.formatToPlainString(u.Z.GJwbPj, { name: (0, c.r7)()[e.id].name }) : 'unlock-achievement' === e.type ? d.NW.formatToPlainString(u.Z.hUterq, { name: (0, c.EC)()[e.id].name }) : d.NW.string(u.Z.HXxY0N),
                            timestamps: { start: this.startingTime }
                        };
                        o.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: 'clicker-game',
                            activity: t
                        });
                    },
                    5000,
                    { maxWait: 5000 }
                )
            );
    }
}
let m = new p();
