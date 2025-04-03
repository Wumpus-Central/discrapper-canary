n.d(t, { Z: () => p }), n(47120), n(411104), n(26686);
var r = n(836560),
    i = n(392711),
    o = n.n(i),
    a = n(710845),
    s = n(596956),
    l = n(959517);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = new a.Z('UploaderBase.tsx');
class p extends r.EventEmitter {
    _addAttachmentsToPayload(e, t, n) {
        let r = u({}, e),
            i = [...o().get(r, t, []), ...n];
        return o().set(r, t, i);
    }
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        _.log('cancel() for '.concat(this.id)), (this._aborted = !0), null != this._cancel && this._cancel(), this._handleComplete();
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
        var r;
        super(),
            c(this, '_url', void 0),
            c(this, '_token', ''),
            c(this, '_cancel', void 0),
            c(this, '_lastUpdate', 0),
            c(this, '_loaded', 0),
            c(this, '_file', void 0),
            c(this, '_aborted', !1),
            c(this, '_errored', !1),
            c(this, '_method', void 0),
            c(this, '_raiseEndpointErrors', !1),
            c(this, 'alreadyStarted', !1),
            c(this, 'processingMessageChangeInterval', void 0),
            c(this, 'id', void 0),
            c(this, '_handleStart', (e) => {
                (this._cancel = e), this.alreadyStarted || this.emit('start', this._file), (this.alreadyStarted = !0);
            }),
            c(this, '_handleProgress', (e, t, n) => {
                let r = Date.now(),
                    i = (0, s.S)(e, t),
                    o = Math.floor((e - this._loaded) / ((r - this._lastUpdate) / 1000));
                if (null != n) {
                    var a;
                    null == (a = this._file.items) ||
                        a.forEach((e) => {
                            e.item.progress = n[e.id];
                        });
                }
                (this._lastUpdate = r),
                    (this._loaded = e),
                    (this._file = f(u({}, this._file), {
                        currentSize: t,
                        progress: i,
                        rate: o
                    })),
                    this.emit('progress', this._file);
            }),
            c(this, '_handleException', (e) => {
                this._handleError({
                    reason: {
                        type: l.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                });
            }),
            c(this, '_handleAborted', () => {
                this.clearProcessingMessageInterval();
            }),
            c(this, '_handleError', (e) => {
                let { code: t, reason: n, body: r } = e;
                this.clearProcessingMessageInterval(), this._aborted || ((this._errored = !0), _.log('_handleError: '.concat(t, ' (').concat(JSON.stringify(n), ') for ').concat(this.id)), this.emit('error', this._file, t, r, n), this.removeAllListeners());
            }),
            c(this, '_handleComplete', (e) => {
                this.clearProcessingMessageInterval(), _.log('_handleComplete for '.concat(this.id)), this.emit('complete', this._file, e), this.removeAllListeners();
            }),
            (this.id = o().uniqueId('Uploader')),
            (this._url = e),
            (this._method = t),
            (this._raiseEndpointErrors = null != (r = null == n ? void 0 : n.raiseEndpointErrors) && r);
    }
}
