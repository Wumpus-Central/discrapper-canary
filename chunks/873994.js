let i = r(689118),
    a = r(761655).Reporter,
    o = r(988324).Buffer;
function s(e, n) {
    if ((a.call(this, n), !o.isBuffer(e))) {
        this.error('Input not Buffer');
        return;
    }
    (this.base = e), (this.offset = 0), (this.length = e.length);
}
function l(e, n) {
    if (Array.isArray(e))
        (this.length = 0),
            (this.value = e.map(function (e) {
                return !l.isEncoderBuffer(e) && (e = new l(e, n)), (this.length += e.length), e;
            }, this));
    else if ('number' == typeof e) {
        if (!(0 <= e && e <= 255)) return n.error('non-byte EncoderBuffer value');
        (this.value = e), (this.length = 1);
    } else if ('string' == typeof e) (this.value = e), (this.length = o.byteLength(e));
    else {
        if (!o.isBuffer(e)) return n.error('Unsupported type: ' + typeof e);
        (this.value = e), (this.length = e.length);
    }
}
i(s, a),
    (n.DecoderBuffer = s),
    (s.isDecoderBuffer = function (e) {
        return e instanceof s || ('object' == typeof e && o.isBuffer(e.base) && 'DecoderBuffer' === e.constructor.name && 'number' == typeof e.offset && 'number' == typeof e.length && 'function' == typeof e.save && 'function' == typeof e.restore && 'function' == typeof e.isEmpty && 'function' == typeof e.readUInt8 && 'function' == typeof e.skip && 'function' == typeof e.raw);
    }),
    (s.prototype.save = function () {
        return {
            offset: this.offset,
            reporter: a.prototype.save.call(this)
        };
    }),
    (s.prototype.restore = function (e) {
        let n = new s(this.base);
        return (n.offset = e.offset), (n.length = this.offset), (this.offset = e.offset), a.prototype.restore.call(this, e.reporter), n;
    }),
    (s.prototype.isEmpty = function () {
        return this.offset === this.length;
    }),
    (s.prototype.readUInt8 = function (e) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || 'DecoderBuffer overrun');
    }),
    (s.prototype.skip = function (e, n) {
        if (!(this.offset + e <= this.length)) return this.error(n || 'DecoderBuffer overrun');
        let r = new s(this.base);
        return (r._reporterState = this._reporterState), (r.offset = this.offset), (r.length = this.offset + e), (this.offset += e), r;
    }),
    (s.prototype.raw = function (e) {
        return this.base.slice(e ? e.offset : this.offset, this.length);
    }),
    (n.EncoderBuffer = l),
    (l.isEncoderBuffer = function (e) {
        return e instanceof l || ('object' == typeof e && 'EncoderBuffer' === e.constructor.name && 'number' == typeof e.length && 'function' == typeof e.join);
    }),
    (l.prototype.join = function (e, n) {
        return (!e && (e = o.alloc(this.length)), !n && (n = 0), 0 === this.length)
            ? e
            : (Array.isArray(this.value)
                  ? this.value.forEach(function (r) {
                        r.join(e, n), (n += r.length);
                    })
                  : ('number' == typeof this.value ? (e[n] = this.value) : 'string' == typeof this.value ? e.write(this.value, n) : o.isBuffer(this.value) && this.value.copy(e, n), (n += this.length)),
              e);
    });
