r.d(n, {
    x: function () {
        return u;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(653041);
var s = r(65154);
function l(e, n, r) {
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
class u {
    getMaxSinkValue(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (e < 0) throw Error('getMaxSinkValue: Requested ' + e);
        let r = this.orderedLadder[0].wantValue;
        for (let { pixelCount: i, wantValue: a } of this.orderedLadder) {
            if (n > 0 && n < i) {
                r = a;
                break;
            }
            if (i * e > this.pixelBudget) break;
            r = a;
        }
        return r;
    }
    getResolution(e) {
        let n = null;
        for (let r of this.orderedLadder)
            if (e >= r.wantValue) n = r;
            else break;
        return {
            width: (n = null != n ? n : this.orderedLadder[0]).width,
            height: n.height,
            budgetPortion: n.budgetPortion,
            mutedFramerate: n.mutedFramerate,
            framerate: n.framerate
        };
    }
    static calculateLadder(e) {
        let n = new Set([0, 4, 8, 10]),
            r = [];
        for (let i = 1; i < 4096; ++i) {
            let a = (16 * i) / 9;
            if (n.has(a % 16) && n.has(i % 16)) {
                let n = a * i;
                r.push({
                    pixelCount: n,
                    width: a,
                    height: i,
                    budgetPortion: n / e,
                    wantValue: 0
                });
            }
        }
        let i = {},
            a = 0,
            o = 100;
        for (let n = 1; n <= 25; ++n) {
            let l = 0,
                c = 0,
                d = 0;
            for (let i of r) {
                if (i.pixelCount * n > e) break;
                (l = i.width), (c = i.height), (d = i.budgetPortion);
            }
            if (a !== l) {
                let e = u.getMutedFramerate(o);
                (i[o] = {
                    width: l,
                    height: c,
                    budgetPortion: d,
                    mutedFramerate: e,
                    framerate: s.Gs
                }),
                    (o -= 10),
                    (a = l);
            }
        }
        return i;
    }
    static getMutedFramerate(e) {
        return e <= 20 ? s.Er : s.P8;
    }
    static calculateOrderedLadder(e) {
        let n = [];
        for (let r of Object.keys(e)
            .map((e) => Number(e))
            .sort((e, n) => e - n)) {
            if (0 === r) continue;
            let i = e[r];
            n.push({
                pixelCount: i.width * i.height,
                wantValue: r,
                ...i
            });
        }
        return n;
    }
    constructor(e = s.kS) {
        l(this, 'pixelBudget', void 0), l(this, 'ladder', void 0), l(this, 'orderedLadder', void 0);
        let { width: n, height: r } = e.videoBudget;
        if (n <= 0 || r <= 0) throw Error('Invalid argument');
        (this.pixelBudget = n * r), (this.ladder = u.calculateLadder(this.pixelBudget)), (this.orderedLadder = u.calculateOrderedLadder(this.ladder));
    }
}
