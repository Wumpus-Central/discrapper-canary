r.d(t, { Z: () => b }), r(388685), r(415506), r(49124);
var n = r(836560),
    i = r(392711),
    a = r.n(i),
    l = r(710845),
    o = r(510990),
    A = r(141795),
    s = r(983544),
    c = r(596956),
    d = r(981631),
    u = r(959517),
    f = r(388032);
function g(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                g(e, t, r[t]);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let m = new l.Z('UploaderBase.tsx');
class b extends n.EventEmitter {
    _fileSize() {
        return this.files.reduce((e, t) => {
            var r;
            return e + (null != (r = t.currentSize) ? r : 0);
        }, 0);
    }
    async compressAndCheckFileSize() {
        var e, t;
        let r = (0, s.F)(null == (t = this.files[0]) || null == (e = t.item) ? void 0 : e.target);
        return this.files.length > r.getMaxAttachmentsCount()
            ? (m.log('Too many attachments for '.concat(this.id)), this._handleError({ code: d.evJ.TOO_MANY_ATTACHMENTS }), !1)
            : !(this._fileSize() > r.getMaxTotalAttachmentSize()) ||
                  (this._handleError({
                      code: d.evJ.ENTITY_TOO_LARGE,
                      reason: { type: u.xi.POSTCOMPRESSION_SUM_TOO_LARGE }
                  }),
                  !1);
    }
    setUploadingTextForUI() {
        let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : f.intl.formatToPlainString(f.t.D0noUl, { count: this.files.length }),
            t = this.files.some((e) => e.isImage),
            r = this.files.some((e) => e.isVideo),
            n = this._fileSize();
        m.log('setUploadingTextForUI - total content: '.concat(n, ' bytes and ').concat(this.files.length, ' attachments for ').concat(this.id)),
            (this._file = p(h({}, this._file), {
                totalPostCompressionSize: n,
                currentSize: n,
                name: e,
                hasVideo: r,
                hasImage: t,
                attachmentsCount: this.files.length,
                items: this.files
            }));
    }
    _recomputeProgress() {
        let { loaded: e, total: t } = this._recomputeProgressTotal(),
            r = this._recomputeProgressByFile();
        this._handleProgress(e, t, r);
    }
    _recomputeProgressTotal() {
        let e = this._fileSize();
        return {
            loaded: this.files.reduce((e, t) => {
                var r;
                return e + (null != (r = t.loaded) ? r : 0);
            }, 0),
            total: e
        };
    }
    _recomputeProgressByFile() {
        let e = {};
        return (
            this.files.forEach((t) => {
                e[t.id] = (0, c.S)(t.loaded, t.currentSize);
            }),
            e
        );
    }
    _addAttachmentsToPayload(e, t, r) {
        let n = h({}, e),
            i = [...a().get(n, t, []), ...r];
        return a().set(n, t, i);
    }
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        var e;
        m.log('cancel() for '.concat(this.id)), this._aborted || ((this._aborted = !0), null == (e = this._cancel) || e.call(this), this.files.forEach((e) => e.cancel()), this._handleComplete());
    }
    async cancelItem(e) {
        m.log('Cancel called for '.concat(this.id, ' for item ').concat(e));
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.status === A.m.CANCELED) return;
        let r = this.files.indexOf(t);
        (this.files = [...this.files.slice(0, r), ...this.files.slice(r + 1)]), (this._file = p(h({}, this._file), { items: this.files })), await (0, o.V)(t), t.cancel(), this.emit('cancel-upload-item', this._file), 0 === this.files.length && this.cancel();
    }
    upload(e, t) {
        if (null != this._cancel) throw Error('Uploader.upload(...): An upload is already in progress.');
        (this._lastUpdate = Date.now()),
            (this._loaded = 0),
            (this._file = {
                id: this.id,
                name: e,
                currentSize: 0,
                totalPreCompressionSize: 0,
                compressionProgress: 0,
                progress: 0,
                rate: 0,
                hasImage: !1,
                hasVideo: !1,
                attachmentsCount: 0,
                items: t
            });
    }
    constructor(e, t = 'POST', r) {
        var n;
        super(),
            g(this, 'id', void 0),
            g(this, '_file', void 0),
            g(this, '_aborted', !1),
            g(this, '_errored', !1),
            g(this, '_url', void 0),
            g(this, '_method', void 0),
            g(this, '_raiseEndpointErrors', !1),
            g(this, 'processingMessageChangeInterval', void 0),
            g(this, 'files', []),
            g(this, '_lastUpdate', 0),
            g(this, '_loaded', 0),
            g(this, 'alreadyStarted', !1),
            g(this, '_cancel', void 0),
            g(this, '_handleStart', (e) => {
                (this._cancel = e), this.alreadyStarted || this.emit('start', this._file), (this.alreadyStarted = !0);
            }),
            g(this, '_handleProgress', (e, t, r) => {
                let n = Date.now(),
                    i = (0, c.S)(e, t),
                    a = Math.floor((e - this._loaded) / ((n - this._lastUpdate) / 1000));
                if (null != r) {
                    var l;
                    null == (l = this._file.items) ||
                        l.forEach((e) => {
                            e.item.progress = r[e.id];
                        });
                }
                (this._lastUpdate = n),
                    (this._loaded = e),
                    (this._file = p(h({}, this._file), {
                        currentSize: t,
                        progress: i,
                        rate: a
                    })),
                    this.emit('progress', this._file);
            }),
            g(this, '_handleException', (e) => {
                this._handleError({
                    reason: {
                        type: u.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                });
            }),
            g(this, '_handleAborted', () => {
                this.clearProcessingMessageInterval();
            }),
            g(this, '_handleError', (e) => {
                let { code: t, reason: r, body: n } = e;
                this.clearProcessingMessageInterval(), this._aborted || ((this._errored = !0), m.log('_handleError: '.concat(t, ' (').concat(JSON.stringify(r), ') for ').concat(this.id)), this.emit('error', this._file, t, n, r), this.removeAllListeners());
            }),
            g(this, '_handleComplete', (e) => {
                this.clearProcessingMessageInterval(), m.log('_handleComplete for '.concat(this.id)), this.emit('complete', this._file, e), this.removeAllListeners();
            }),
            (this.id = a().uniqueId('Uploader')),
            (this._url = e),
            (this._method = t),
            (this._raiseEndpointErrors = null != (n = null == r ? void 0 : r.raiseEndpointErrors) && n),
            (this._file = {
                id: this.id,
                name: '',
                currentSize: 0,
                totalPreCompressionSize: 0,
                compressionProgress: 0,
                progress: 0,
                rate: 0,
                hasImage: !1,
                hasVideo: !1,
                attachmentsCount: 0,
                items: void 0
            });
    }
}
