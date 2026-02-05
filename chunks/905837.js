i.r(t), i.d(t, { default: () => a });
var l = i(69747);
i(64683);
class r {
    pollIntervalId = null;
    isPolling = !1;
    eventPoller;
    constructor(e) {
        this.eventPoller = new l.A(e);
    }
    start() {
        this.isPolling ||
            ((this.isPolling = !0),
            (this.pollIntervalId = setInterval(() => {
                this.poll();
            }, 1e3)));
    }
    stop() {
        this.isPolling &&
            ((this.isPolling = !1),
            null != this.pollIntervalId && (clearInterval(this.pollIntervalId), (this.pollIntervalId = null)),
            this.eventPoller.reset());
    }
    getState() {
        return { isPolling: this.isPolling };
    }
    async poll() {
        await this.eventPoller.poll();
    }
}
let a = (e) => new r(e);
