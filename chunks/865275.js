n.d(t, { Z: () => d }), n(47120), n(411104);
var i = n(836560),
    r = n(392711),
    a = n.n(r),
    s = n(710845),
    o = n(596956),
    l = n(959517);
function u(e, t, n) {
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
let c = new s.Z('UploaderBase.tsx');
class d extends i.EventEmitter {
    _addAttachmentsToPayload(e, t, n) {
        let i = { ...e },
            r = [...a().get(i, t, []), ...n];
        return a().set(i, t, r);
    }
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        c.log('cancel() for '.concat(this.id)), (this._aborted = !0), null != this._cancel && this._cancel(), this._handleComplete();
    }
    cancelItem(e) {
        throw Error('cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass');
    }
    upload(e, t, n) {
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
                draftContent: null == t ? void 0 : t.content,
                channelId: null == t ? void 0 : t.channel_id,
                items: n
            });
    }
    constructor(e, t = 'POST', n) {
        var i;
        super(),
            u(this, '_url', void 0),
            u(this, '_token', ''),
            u(this, '_cancel', void 0),
            u(this, '_lastUpdate', 0),
            u(this, '_loaded', 0),
            u(this, '_file', void 0),
            u(this, '_aborted', !1),
            u(this, '_errored', !1),
            u(this, '_method', void 0),
            u(this, '_raiseEndpointErrors', !1),
            u(this, 'alreadyStarted', !1),
            u(this, 'processingMessageChangeInterval', void 0),
            u(this, 'id', void 0),
            u(this, '_handleStart', (e) => {
                (this._cancel = e), this.alreadyStarted || this.emit('start', this._file), (this.alreadyStarted = !0);
            }),
            u(this, '_handleProgress', (e, t, n) => {
                let i = Date.now(),
                    r = (0, o.S)(e, t),
                    a = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1000));
                if (null != n) {
                    var s;
                    null === (s = this._file.items) ||
                        void 0 === s ||
                        s.forEach((e) => {
                            e.item.progress = n[e.id];
                        });
                }
                (this._lastUpdate = i),
                    (this._loaded = e),
                    (this._file = {
                        ...this._file,
                        currentSize: t,
                        progress: r,
                        rate: a
                    }),
                    this.emit('progress', this._file);
            }),
            u(this, '_handleException', (e) => {
                this._handleError({
                    reason: {
                        type: l.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                });
            }),
            u(this, '_handleAborted', () => {
                this.clearProcessingMessageInterval();
            }),
            u(this, '_handleError', (e) => {
                let { code: t, reason: n, body: i } = e;
                this.clearProcessingMessageInterval(), !this._aborted && ((this._errored = !0), c.log('_handleError: '.concat(t, ' (').concat(JSON.stringify(n), ') for ').concat(this.id)), this.emit('error', this._file, t, i, n), this.removeAllListeners());
            }),
            u(this, '_handleComplete', (e) => {
                this.clearProcessingMessageInterval(), c.log('_handleComplete for '.concat(this.id)), this.emit('complete', this._file, e), this.removeAllListeners();
            }),
            (this.id = a().uniqueId('Uploader')),
            (this._url = e),
            (this._method = t),
            (this._raiseEndpointErrors = null !== (i = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== i && i);
    }
}
