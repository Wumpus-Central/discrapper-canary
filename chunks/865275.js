r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(836560);
var s = r(392711),
    l = r.n(s),
    u = r(710845),
    c = r(596956),
    d = r(959517);
function f(e, n, r) {
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
let p = new u.Z('UploaderBase.tsx');
class h extends o.EventEmitter {
    _addAttachmentsToPayload(e, n, r) {
        let i = { ...e },
            a = [...l().get(i, n, []), ...r];
        return l().set(i, n, a);
    }
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        p.log('cancel() for '.concat(this.id)), (this._aborted = !0), null != this._cancel && this._cancel(), this._handleComplete();
    }
    cancelItem(e) {
        throw Error('cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass');
    }
    upload(e, n, r) {
        if (null != this._cancel) throw Error('Uploader.upload(...): An upload is already in progress.');
        (this._lastUpdate = Date.now()),
            (this._loaded = 0),
            (this._file = {
                id: this.id,
                name: e.name,
                currentSize: 0,
                totalPreCompressionSize: 0,
                compressionProgress: 0,
                progress: 0,
                rate: 0,
                hasImage: !1,
                hasVideo: !1,
                attachmentsCount: 0,
                draftContent: null == n ? void 0 : n.content,
                channelId: null == n ? void 0 : n.channel_id,
                items: r
            });
    }
    constructor(e, n = 'POST', r) {
        var i;
        super(),
            f(this, '_url', void 0),
            f(this, '_token', ''),
            f(this, '_cancel', void 0),
            f(this, '_lastUpdate', 0),
            f(this, '_loaded', 0),
            f(this, '_file', void 0),
            f(this, '_aborted', !1),
            f(this, '_errored', !1),
            f(this, '_method', void 0),
            f(this, '_raiseEndpointErrors', !1),
            f(this, 'alreadyStarted', !1),
            f(this, 'processingMessageChangeInterval', void 0),
            f(this, 'id', void 0),
            f(this, '_handleStart', (e) => {
                (this._cancel = e), !this.alreadyStarted && this.emit('start', this._file), (this.alreadyStarted = !0);
            }),
            f(this, '_handleProgress', (e, n, r) => {
                let i = Date.now(),
                    a = (0, c.S)(e, n),
                    o = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1000));
                if (null != r) {
                    var s;
                    null === (s = this._file.items) ||
                        void 0 === s ||
                        s.forEach((e) => {
                            e.item.progress = r[e.id];
                        });
                }
                (this._lastUpdate = i),
                    (this._loaded = e),
                    (this._file = {
                        ...this._file,
                        currentSize: n,
                        progress: a,
                        rate: o
                    }),
                    this.emit('progress', this._file);
            }),
            f(this, '_handleException', (e) => {
                this._handleError({
                    reason: {
                        type: d.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                });
            }),
            f(this, '_handleAborted', () => {
                this.clearProcessingMessageInterval();
            }),
            f(this, '_handleError', (e) => {
                let { code: n, reason: r, body: i } = e;
                if ((this.clearProcessingMessageInterval(), !this._aborted)) (this._errored = !0), p.log('_handleError: '.concat(n, ' (').concat(JSON.stringify(r), ') for ').concat(this.id)), this.emit('error', this._file, n, i, r), this.removeAllListeners();
            }),
            f(this, '_handleComplete', (e) => {
                this.clearProcessingMessageInterval(), p.log('_handleComplete for '.concat(this.id)), this.emit('complete', this._file, e), this.removeAllListeners();
            }),
            (this.id = l().uniqueId('Uploader')),
            (this._url = e),
            (this._method = n),
            (this._raiseEndpointErrors = null !== (i = null == r ? void 0 : r.raiseEndpointErrors) && void 0 !== i && i);
    }
}
