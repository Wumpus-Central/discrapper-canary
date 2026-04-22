"use strict";
n.d(t, { T: () => r });
let r = new (class {
    callback = null;
    raise(e) {
        throw e;
    }
    setCallbacks(e) {
        this.callback = e.response;
    }
    databaseOpen(e, t, n) {
        let r = 'kv_storage: platform "web" is not supported at this time.';
        if (n?.synchronous) throw Error(r);
        return this.reply({ requestId: e, synchronous: !1, ok: !1, data: r });
    }
    databaseList(e, t) {
        return this.reply({ requestId: e, synchronous: t?.synchronous, ok: !0, data: [] });
    }
    databaseDelete(e, t, n) {
        return this.reply({ requestId: e, synchronous: n?.synchronous, ok: !0, data: void 0 });
    }
    databaseOptimize(e, t, n) {
        return this.reply({ requestId: e, synchronous: n?.synchronous, ok: !0, data: void 0 });
    }
    reply(e) {
        if (e.synchronous) return e.data;
        null != e.requestId &&
            this.callback?.(
                {
                    id: e.requestId,
                    ok: e.ok,
                    data: e.data,
                    timings: {
                        queueTimeNanoseconds: 0,
                        executionTimeNanoseconds: 0,
                        materializationTimeNanoseconds: 0,
                        totalTimeNanoseconds: 0,
                    },
                },
                0,
            );
    }
})();
