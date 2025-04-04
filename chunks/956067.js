function r(e, t, n) {
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
n.d(t, { Z: () => s }), n(733860), n(653041);
let i = null == n.g.__getTotalRequireTime ? () => 0 : () => n.g.__getTotalRequireTime(),
    o = 'undefined' != typeof performance;
class a {
    get isTracing() {
        return !!o && !!this.isTracing_ && (!(Date.now() > this.endTime_) || ((this.isTracing_ = !1), !1));
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
    markAndLog(e, t, n, r) {
        e.log(n),
            this.isTracing &&
                (this.logs.push({
                    emoji: t,
                    prefix: this.prefix,
                    log: n,
                    delta: r,
                    timestamp: Date.now()
                }),
                this.addImportLogDetail());
    }
    addImportLogDetail() {
        let e = i();
        e - this.lastImportDuration > 25 && (this.addDetail('JS Imports', Math.ceil(e) + 'ms'), (this.lastImportDuration = e));
    }
    markWithDelta(e, t) {
        let n = this.logs[this.logs.length - 1];
        this.mark(e, t, null != n && null != n.timestamp ? Date.now() - n.timestamp : void 0);
    }
    markAt(e, t, n) {
        var r, i;
        if (!this.isTracing) return;
        let o = 0;
        for (; o < this.logs.length; o++) {
            let { timestamp: e } = this.logs[o];
            if (null != e && e > n) break;
        }
        this.logs.splice(o, 0, {
            emoji: e,
            log: t,
            timestamp: n,
            prefix: null != (i = null == (r = this.logs[o]) ? void 0 : r.prefix) ? i : ''
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
        let r = this.prefix;
        this.mark(e, 'Start '.concat(t)), (this.prefix += '| ');
        let i = Date.now(),
            o = n(),
            a = Date.now() - i;
        return (this.prefix = r), this.mark(e, 'Finish '.concat(t), a), o;
    }
    async timeAsync(e, t, n) {
        if (!this.isTracing) return n();
        this.mark(e, 'Start '.concat(t));
        let r = Date.now(),
            i = await n(),
            o = Date.now() - r;
        return this.mark(e, 'Finish '.concat(t), o), i;
    }
    setServerTrace(e) {
        this.logGroups[0].serverTrace = e;
    }
    constructor() {
        r(this, 'isTracing_', !0),
            r(this, 'endTime_', Date.now() + 15000),
            r(this, 'lastImportDuration', 0),
            r(this, 'logGroups', [
                {
                    index: 0,
                    timestamp: Date.now(),
                    logs: [],
                    nativeLogs: []
                }
            ]),
            r(this, 'logs', this.logGroups[0].logs),
            r(this, 'prefix', '');
    }
}
let s = new a();
