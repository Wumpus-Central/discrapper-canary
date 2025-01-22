var i = r(733860);
var a = r(653041);
function o(e, n, r) {
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
let s = null == r.g.__getTotalRequireTime ? () => 0 : () => r.g.__getTotalRequireTime(),
    l = 'undefined' != typeof performance;
class u {
    get isTracing() {
        return !!l && !!this.isTracing_ && (!(Date.now() > this.endTime_) || ((this.isTracing_ = !1), !1));
    }
    get endTime() {
        return this.endTime_;
    }
    set endTime(e) {
        (this.endTime_ = e), (this.isTracing_ = !0);
    }
    resumeTracing() {
        !this.isTracing &&
            (this.logGroups.unshift({
                index: this.logGroups.length,
                timestamp: Date.now(),
                logs: [],
                nativeLogs: []
            }),
            (this.logs = this.logGroups[0].logs)),
            (this.endTime = Date.now() + 10000);
    }
    mark(e, n, r) {
        this.isTracing &&
            (this.logs.push({
                emoji: e,
                prefix: ''.concat(this.prefix),
                log: n,
                delta: r,
                timestamp: Date.now()
            }),
            this.addImportLogDetail());
    }
    markAndLog(e, n, r, i) {
        e.log(r),
            this.isTracing &&
                (this.logs.push({
                    emoji: n,
                    prefix: this.prefix,
                    log: r,
                    delta: i,
                    timestamp: Date.now()
                }),
                this.addImportLogDetail());
    }
    addImportLogDetail() {
        let e = s();
        e - this.lastImportDuration > 25 && (this.addDetail('JS Imports', Math.ceil(e) + 'ms'), (this.lastImportDuration = e));
    }
    markWithDelta(e, n) {
        let r = this.logs[this.logs.length - 1];
        this.mark(e, n, null != r && null != r.timestamp ? Date.now() - r.timestamp : void 0);
    }
    markAt(e, n, r) {
        var i, a;
        if (!this.isTracing) return;
        let o = 0;
        for (; o < this.logs.length; o++) {
            let { timestamp: e } = this.logs[o];
            if (null != e && e > r) break;
        }
        this.logs.splice(o, 0, {
            emoji: e,
            log: n,
            timestamp: r,
            prefix: null !== (a = null === (i = this.logs[o]) || void 0 === i ? void 0 : i.prefix) && void 0 !== a ? a : ''
        });
    }
    addDetail(e, n) {
        this.isTracing &&
            this.logs.push({
                emoji: this.logs[this.logs.length - 1].emoji,
                prefix: this.prefix,
                log: '  \u21AA '.concat(e, ' ').concat(n)
            });
    }
    time(e, n, r) {
        if (!this.isTracing) return r();
        let i = this.prefix;
        this.mark(e, 'Start '.concat(n)), (this.prefix += '| ');
        let a = Date.now(),
            o = r(),
            s = Date.now() - a;
        return (this.prefix = i), this.mark(e, 'Finish '.concat(n), s), o;
    }
    async timeAsync(e, n, r) {
        if (!this.isTracing) return r();
        this.mark(e, 'Start '.concat(n));
        let i = Date.now(),
            a = await r(),
            o = Date.now() - i;
        return this.mark(e, 'Finish '.concat(n), o), a;
    }
    setServerTrace(e) {
        this.logGroups[0].serverTrace = e;
    }
    constructor() {
        o(this, 'isTracing_', !0),
            o(this, 'endTime_', Date.now() + 15000),
            o(this, 'lastImportDuration', 0),
            o(this, 'logGroups', [
                {
                    index: 0,
                    timestamp: Date.now(),
                    logs: [],
                    nativeLogs: []
                }
            ]),
            o(this, 'logs', this.logGroups[0].logs),
            o(this, 'prefix', '');
    }
}
n.Z = new u();
