n.d(t, { x: () => a }), n(411104), n(47120), n(653041), n(230036);
var r = n(65154);
function i(e, t, n) {
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
class a {
    getMaxSinkValue(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (e < 0) throw Error('getMaxSinkValue: Requested ' + e);
        let n = this.orderedLadder[0].wantValue;
        for (let { pixelCount: r, wantValue: i } of this.orderedLadder) {
            if (t > 0 && t < r) {
                n = i;
                break;
            }
            if (r * e > this.pixelBudget) break;
            n = i;
        }
        return n;
    }
    getResolution(e) {
        let t = null;
        for (let n of this.orderedLadder)
            if (e >= n.wantValue) t = n;
            else break;
        return {
            width: (t = null != t ? t : this.orderedLadder[0]).width,
            height: t.height,
            budgetPortion: t.budgetPortion,
            mutedFramerate: t.mutedFramerate,
            framerate: t.framerate
        };
    }
    static calculateLadder(e) {
        let t = new Set([0, 4, 8, 10]),
            n = [];
        for (let r = 1; r < 4096; ++r) {
            let i = (16 * r) / 9;
            if (t.has(i % 16) && t.has(r % 16)) {
                let t = i * r;
                n.push({
                    pixelCount: t,
                    width: i,
                    height: r,
                    budgetPortion: t / e,
                    wantValue: 0
                });
            }
        }
        let i = {},
            o = 0,
            s = 100;
        for (let t = 1; t <= 25; ++t) {
            let l = 0,
                c = 0,
                u = 0;
            for (let r of n) {
                if (r.pixelCount * t > e) break;
                (l = r.width), (c = r.height), (u = r.budgetPortion);
            }
            if (o !== l) {
                let e = a.getMutedFramerate(s);
                (i[s] = {
                    width: l,
                    height: c,
                    budgetPortion: u,
                    mutedFramerate: e,
                    framerate: r.Gs
                }),
                    (s -= 10),
                    (o = l);
            }
        }
        return i;
    }
    static getMutedFramerate(e) {
        return e <= 20 ? r.Er : r.P8;
    }
    static calculateOrderedLadder(e) {
        let t = [];
        for (let n of Object.keys(e)
            .map((e) => Number(e))
            .sort((e, t) => e - t)) {
            if (0 === n) continue;
            let r = e[n];
            t.push(
                o(
                    {
                        pixelCount: r.width * r.height,
                        wantValue: n
                    },
                    r
                )
            );
        }
        return t;
    }
    constructor(e = r.kS) {
        i(this, 'pixelBudget', void 0), i(this, 'ladder', void 0), i(this, 'orderedLadder', void 0);
        let { width: t, height: n } = e.videoBudget;
        if (t <= 0 || n <= 0) throw Error('Invalid argument');
        (this.pixelBudget = t * n), (this.ladder = a.calculateLadder(this.pixelBudget)), (this.orderedLadder = a.calculateOrderedLadder(this.ladder));
    }
}
