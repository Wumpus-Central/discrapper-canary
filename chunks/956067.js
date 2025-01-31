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
n.d(t, { Z: () => o }), n(733860), n(653041);
let r = null == n.g.__getTotalRequireTime ? () => 0 : () => n.g.__getTotalRequireTime(),
    a = 'undefined' != typeof performance;
class s {
    get isTracing() {
        return !!a && !!this.isTracing_ && (!(Date.now() > this.endTime_) || ((this.isTracing_ = !1), !1));
    }
    get endTime() {
        return this.endTime_;
    }
    set endTime(e) {
        (this.endTime_ = e), (this.isTracing_ = !0);
    }
    resumeTracing() {
        this.isTracing ||
            (this.logGroups.unshift({
                index: this.logGroups.length,
                timestamp: Date.now(),
                logs: [],
                nativeLogs: []
            }),
            (this.logs = this.logGroups[0].logs)),
            (this.endTime = Date.now() + 10000);
    }
    mark(e, t, n) {
        this.isTracing &&
            (this.logs.push({
                emoji: e,
                prefix: ''.concat(this.prefix),
                log: t,
                delta: n,
                timestamp: Date.now()
            }),
            this.addImportLogDetail());
    }
    markAndLog(e, t, n, i) {
        e.log(n),
            this.isTracing &&
                (this.logs.push({
                    emoji: t,
                    prefix: this.prefix,
                    log: n,
                    delta: i,
                    timestamp: Date.now()
                }),
                this.addImportLogDetail());
    }
    addImportLogDetail() {
        let e = r();
        e - this.lastImportDuration > 25 && (this.addDetail('JS Imports', Math.ceil(e) + 'ms'), (this.lastImportDuration = e));
    }
    markWithDelta(e, t) {
        let n = this.logs[this.logs.length - 1];
        this.mark(e, t, null != n && null != n.timestamp ? Date.now() - n.timestamp : void 0);
    }
    markAt(e, t, n) {
        var i, r;
        if (!this.isTracing) return;
        let a = 0;
        for (; a < this.logs.length; a++) {
            let { timestamp: e } = this.logs[a];
            if (null != e && e > n) break;
        }
        this.logs.splice(a, 0, {
            emoji: e,
            log: t,
            timestamp: n,
            prefix: null !== (r = null === (i = this.logs[a]) || void 0 === i ? void 0 : i.prefix) && void 0 !== r ? r : ''
        });
    }
    addDetail(e, t) {
        this.isTracing &&
            this.logs.push({
                emoji: this.logs[this.logs.length - 1].emoji,
                prefix: this.prefix,
                log: '  \u21AA '.concat(e, ' ').concat(t)
            });
    }
    time(e, t, n) {
        if (!this.isTracing) return n();
        let i = this.prefix;
        this.mark(e, 'Start '.concat(t)), (this.prefix += '| ');
        let r = Date.now(),
            a = n(),
            s = Date.now() - r;
        return (this.prefix = i), this.mark(e, 'Finish '.concat(t), s), a;
    }
    async timeAsync(e, t, n) {
        if (!this.isTracing) return n();
        this.mark(e, 'Start '.concat(t));
        let i = Date.now(),
            r = await n(),
            a = Date.now() - i;
        return this.mark(e, 'Finish '.concat(t), a), r;
    }
    setServerTrace(e) {
        this.logGroups[0].serverTrace = e;
    }
    constructor() {
        i(this, 'isTracing_', !0),
            i(this, 'endTime_', Date.now() + 15000),
            i(this, 'lastImportDuration', 0),
            i(this, 'logGroups', [
                {
                    index: 0,
                    timestamp: Date.now(),
                    logs: [],
                    nativeLogs: []
                }
            ]),
            i(this, 'logs', this.logGroups[0].logs),
            i(this, 'prefix', '');
    }
}
let o = new s();
