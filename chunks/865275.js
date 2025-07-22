(n.d(t, { Z: () => b }), n(388685), n(415506), n(49124));
var r = n(836560),
    i = n(392711),
    a = n.n(i),
    o = n(710845),
    s = n(510990),
    l = n(141795),
    c = n(983544),
    u = n(596956),
    d = n(981631),
    _ = n(959517),
    f = n(388032);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = new o.Z('UploaderBase.tsx');
class b extends r.EventEmitter {
    _fileSize() {
        return this.files.reduce((e, t) => {
            var n;
            return e + (null != (n = t.currentSize) ? n : 0);
        }, 0);
    }
    async compressAndCheckFileSize() {
        var e, t;
        let n = (0, c.F)(null == (t = this.files[0]) || null == (e = t.item) ? void 0 : e.target);
        return this.files.length > n.getMaxAttachmentsCount()
            ? (E.log('Too many attachments for '.concat(this.id)), this._handleError({ code: d.evJ.TOO_MANY_ATTACHMENTS }), !1)
            : !(this._fileSize() > n.getMaxTotalAttachmentSize()) ||
                  (this._handleError({
                      code: d.evJ.ENTITY_TOO_LARGE,
                      reason: { type: _.xi.POSTCOMPRESSION_SUM_TOO_LARGE }
                  }),
                  !1);
    }
    setUploadingTextForUI() {
        let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : f.intl.formatToPlainString(f.t.D0noUl, { count: this.files.length }),
            t = this.files.some((e) => e.isImage),
            n = this.files.some((e) => e.isVideo),
            r = this._fileSize();
        (E.log('setUploadingTextForUI - total content: '.concat(r, ' bytes and ').concat(this.files.length, ' attachments for ').concat(this.id)),
            (this._file = g(h({}, this._file), {
                totalPostCompressionSize: r,
                currentSize: r,
                name: e,
                hasVideo: n,
                hasImage: t,
                attachmentsCount: this.files.length,
                items: this.files
            })));
    }
    _recomputeProgress() {
        let { loaded: e, total: t } = this._recomputeProgressTotal(),
            n = this._recomputeProgressByFile();
        this._handleProgress(e, t, n);
    }
    _recomputeProgressTotal() {
        let e = this._fileSize();
        return {
            loaded: this.files.reduce((e, t) => {
                var n;
                return e + (null != (n = t.loaded) ? n : 0);
            }, 0),
            total: e
        };
    }
    _recomputeProgressByFile() {
        let e = {};
        return (
            this.files.forEach((t) => {
                e[t.id] = (0, u.S)(t.loaded, t.currentSize);
            }),
            e
        );
    }
    _addAttachmentsToPayload(e, t, n) {
        let r = h({}, e),
            i = [...a().get(r, t, []), ...n];
        return a().set(r, t, i);
    }
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        var e, t;
        (E.log('cancel() for '.concat(this.id)), this._aborted || ((this._aborted = !0), null == (e = (t = this)._cancel) || e.call(t), this.files.forEach((e) => e.cancel()), this._handleComplete()));
    }
    async cancelItem(e) {
        E.log('Cancel called for '.concat(this.id, ' for item ').concat(e));
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.status === l.mw.CANCELED) return;
        let n = this.files.indexOf(t);
        ((this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)]), (this._file = g(h({}, this._file), { items: this.files })), await (0, s.V)(t), t.cancel(), this.emit('cancel-upload-item', this._file), 0 === this.files.length && this.cancel());
    }
    upload(e, t) {
        if (null != this._cancel) throw Error('Uploader.upload(...): An upload is already in progress.');
        ((this._lastUpdate = Date.now()),
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
            }));
    }
    constructor() {
        (super(),
            p(this, 'id', void 0),
            p(this, '_file', void 0),
            p(this, '_aborted', !1),
            p(this, '_errored', !1),
            p(this, 'processingMessageChangeInterval', void 0),
            p(this, 'files', []),
            p(this, '_lastUpdate', 0),
            p(this, '_loaded', 0),
            p(this, 'alreadyStarted', !1),
            p(this, '_cancel', void 0),
            p(this, '_handleStart', (e) => {
                ((this._cancel = e), this.alreadyStarted || this.emit('start', this._file), (this.alreadyStarted = !0));
            }),
            p(this, '_handleProgress', (e, t, n) => {
                let r = Date.now(),
                    i = (0, u.S)(e, t),
                    a = Math.floor((e - this._loaded) / ((r - this._lastUpdate) / 1000));
                if (null != n) {
                    var o;
                    null == (o = this._file.items) ||
                        o.forEach((e) => {
                            e.item.progress = n[e.id];
                        });
                }
                ((this._lastUpdate = r),
                    (this._loaded = e),
                    (this._file = g(h({}, this._file), {
                        currentSize: t,
                        progress: i,
                        rate: a
                    })),
                    this.emit('progress', this._file));
            }),
            p(this, '_handleException', (e) => {
                this._handleError({
                    reason: {
                        type: _.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                });
            }),
            p(this, '_handleAborted', () => {
                this.clearProcessingMessageInterval();
            }),
            p(this, '_handleError', (e) => {
                let { code: t, reason: n, body: r } = e;
                (this.clearProcessingMessageInterval(), this._aborted || ((this._errored = !0), E.log('_handleError: '.concat(t, ' (').concat(JSON.stringify(n), ') for ').concat(this.id)), this.emit('error', this._file, t, r, n), this.removeAllListeners()));
            }),
            p(this, '_handleComplete', (e) => {
                (this.clearProcessingMessageInterval(), E.log('_handleComplete for '.concat(this.id)), this.emit('complete', this._file, e), this.removeAllListeners());
            }),
            (this.id = a().uniqueId('Uploader')),
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
            }));
    }
}
