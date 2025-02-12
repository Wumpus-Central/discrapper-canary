var e =
    e ||
    (function (r) {
        if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var e = r.document,
                t = function () {
                    return r.URL || r.webkitURL || r;
                },
                n = e.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                a = 'download' in n,
                i = function (r) {
                    var e = new MouseEvent('click');
                    r.dispatchEvent(e);
                },
                f = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                o = r.webkitRequestFileSystem,
                l = r.requestFileSystem || o || r.mozRequestFileSystem,
                s = function (e) {
                    (r.setImmediate || r.setTimeout)(function () {
                        throw e;
                    }, 0);
                },
                u = 'application/octet-stream',
                c = 0,
                v = function (r) {
                    setTimeout(function () {
                        'string' == typeof r ? t().revokeObjectURL(r) : r.remove();
                    }, 40000);
                },
                h = function (r, e, t) {
                    for (var n = (e = [].concat(e)).length; n--; ) {
                        var a = r['on' + e[n]];
                        if ('function' == typeof a)
                            try {
                                a.call(r, t || r);
                            } catch (r) {
                                s(r);
                            }
                    }
                },
                d = function (r) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type) ? new Blob(['ï\xBB\xBF', r], { type: r.type }) : r;
                },
                g = function (e, s, g) {
                    g || (e = d(e));
                    var p,
                        w,
                        b = this,
                        y = e.type,
                        m = !1,
                        A = function () {
                            h(b, 'writestart progress write writeend'.split(' '));
                        },
                        U = function () {
                            if (w && f && 'undefined' != typeof FileReader) {
                                var n = new FileReader();
                                (n.onloadend = function () {
                                    var r = n.result;
                                    (w.location.href = 'data:attachment/file' + r.slice(r.search(/[,;]/))), (b.readyState = b.DONE), A();
                                }),
                                    n.readAsDataURL(e),
                                    (b.readyState = b.INIT);
                                return;
                            }
                            (m || !p) && (p = t().createObjectURL(e)), w ? (w.location.href = p) : void 0 === r.open(p, '_blank') && f && (r.location.href = p), (b.readyState = b.DONE), A(), v(p);
                        },
                        x = function (r) {
                            return function () {
                                if (b.readyState !== b.DONE) return r.apply(this, arguments);
                            };
                        },
                        I = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((b.readyState = b.INIT), s || (s = 'download'), a)) {
                        (p = t().createObjectURL(e)),
                            setTimeout(function () {
                                (n.href = p), (n.download = s), i(n), A(), v(p), (b.readyState = b.DONE);
                            });
                        return;
                    }
                    if ((r.chrome && y && y !== u && ((e = (e.slice || e.webkitSlice).call(e, 0, e.size, u)), (m = !0)), o && 'download' !== s && (s += '.download'), (y === u || o) && (w = r), !l)) {
                        U();
                        return;
                    }
                    (c += e.size),
                        l(
                            r.TEMPORARY,
                            c,
                            x(function (r) {
                                r.root.getDirectory(
                                    'saved',
                                    I,
                                    x(function (r) {
                                        var t = function () {
                                            r.getFile(
                                                s,
                                                I,
                                                x(function (r) {
                                                    r.createWriter(
                                                        x(function (t) {
                                                            (t.onwriteend = function (e) {
                                                                (w.location.href = r.toURL()), (b.readyState = b.DONE), h(b, 'writeend', e), v(r);
                                                            }),
                                                                (t.onerror = function () {
                                                                    var r = t.error;
                                                                    r.code !== r.ABORT_ERR && U();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (r) {
                                                                    t['on' + r] = b['on' + r];
                                                                }),
                                                                t.write(e),
                                                                (b.abort = function () {
                                                                    t.abort(), (b.readyState = b.DONE);
                                                                }),
                                                                (b.readyState = b.WRITING);
                                                        }),
                                                        U
                                                    );
                                                }),
                                                U
                                            );
                                        };
                                        r.getFile(
                                            s,
                                            { create: !1 },
                                            x(function (r) {
                                                r.remove(), t();
                                            }),
                                            x(function (r) {
                                                r.code === r.NOT_FOUND_ERR ? t() : U();
                                            })
                                        );
                                    }),
                                    U
                                );
                            }),
                            U
                        );
                },
                p = g.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (r, e, t) {
                      return t || (r = d(r)), navigator.msSaveOrOpenBlob(r, e || 'download');
                  }
                : ((p.abort = function () {
                      (this.readyState = this.DONE), h(this, 'abort');
                  }),
                  (p.readyState = p.INIT = 0),
                  (p.WRITING = 1),
                  (p.DONE = 2),
                  (p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null),
                  function (r, e, t) {
                      return new g(r, e, t);
                  });
        }
    })(('undefined' != typeof self && self) || ('undefined' != typeof window && window) || this.content);
r.exports
    ? (r.exports.saveAs = e)
    : 'undefined' != typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return e;
      });
