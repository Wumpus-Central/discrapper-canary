var t =
    t ||
    (function (e) {
        if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                n = function () {
                    return e.URL || e.webkitURL || e;
                },
                r = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                o = 'download' in r,
                i = function (e) {
                    var t = new MouseEvent('click');
                    e.dispatchEvent(t);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                c = e.webkitRequestFileSystem,
                u = e.requestFileSystem || c || e.mozRequestFileSystem,
                l = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                s = 'application/octet-stream',
                d = 0,
                f = function (e) {
                    setTimeout(function () {
                        'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                b = function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                        var o = e['on' + t[r]];
                        if ('function' == typeof o)
                            try {
                                o.call(e, n || e);
                            } catch (e) {
                                l(e);
                            }
                    }
                },
                p = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                y = function (t, l, y) {
                    y || (t = p(t));
                    var w,
                        O,
                        g = this,
                        v = t.type,
                        h = !1,
                        m = function () {
                            b(g, 'writestart progress write writeend'.split(' '));
                        },
                        j = function () {
                            if (O && a && 'undefined' != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (O.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (g.readyState = g.DONE), m();
                                }),
                                    r.readAsDataURL(t),
                                    (g.readyState = g.INIT);
                                return;
                            }
                            (h || !w) && (w = n().createObjectURL(t)), O ? (O.location.href = w) : void 0 === e.open(w, '_blank') && a && (e.location.href = w), (g.readyState = g.DONE), m(), f(w);
                        },
                        S = function (e) {
                            return function () {
                                if (g.readyState !== g.DONE) return e.apply(this, arguments);
                            };
                        },
                        P = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((g.readyState = g.INIT), l || (l = 'download'), o)) {
                        (w = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = w), (r.download = l), i(r), m(), f(w), (g.readyState = g.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && v && v !== s && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, s)), (h = !0)), c && 'download' !== l && (l += '.download'), (v === s || c) && (O = e), !u)) return void j();
                    (d += t.size),
                        u(
                            e.TEMPORARY,
                            d,
                            S(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    P,
                                    S(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                l,
                                                P,
                                                S(function (e) {
                                                    e.createWriter(
                                                        S(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (O.location.href = e.toURL()), (g.readyState = g.DONE), b(g, 'writeend', t), f(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && j();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    n['on' + e] = g['on' + e];
                                                                }),
                                                                n.write(t),
                                                                (g.abort = function () {
                                                                    n.abort(), (g.readyState = g.DONE);
                                                                }),
                                                                (g.readyState = g.WRITING);
                                                        }),
                                                        j
                                                    );
                                                }),
                                                j
                                            );
                                        };
                                        e.getFile(
                                            l,
                                            { create: !1 },
                                            S(function (e) {
                                                e.remove(), n();
                                            }),
                                            S(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : j();
                                            })
                                        );
                                    }),
                                    j
                                );
                            }),
                            j
                        );
                },
                w = y.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = p(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((w.abort = function () {
                      (this.readyState = this.DONE), b(this, 'abort');
                  }),
                  (w.readyState = w.INIT = 0),
                  (w.WRITING = 1),
                  (w.DONE = 2),
                  (w.error = w.onwritestart = w.onprogress = w.onwrite = w.onabort = w.onerror = w.onwriteend = null),
                  function (e, t, n) {
                      return new y(e, t, n);
                  });
        }
    })(('undefined' != typeof self && self) || ('undefined' != typeof window && window) || this.content);
e.exports
    ? (e.exports.saveAs = t)
    : 'undefined' != typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return t;
      });
