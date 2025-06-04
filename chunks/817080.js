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
                s = e.webkitRequestFileSystem,
                l = e.requestFileSystem || s || e.mozRequestFileSystem,
                c = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                d = 'application/octet-stream',
                u = 0,
                p = function (e) {
                    setTimeout(function () {
                        'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                h = function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                        var o = e['on' + t[r]];
                        if ('function' == typeof o)
                            try {
                                o.call(e, n || e);
                            } catch (e) {
                                c(e);
                            }
                    }
                },
                _ = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                f = function (t, c, f) {
                    f || (t = _(t));
                    var E,
                        S,
                        y = this,
                        b = t.type,
                        m = !1,
                        O = function () {
                            h(y, 'writestart progress write writeend'.split(' '));
                        },
                        N = function () {
                            if (S && a && 'undefined' != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (S.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (y.readyState = y.DONE), O();
                                }),
                                    r.readAsDataURL(t),
                                    (y.readyState = y.INIT);
                                return;
                            }
                            (m || !E) && (E = n().createObjectURL(t)), S ? (S.location.href = E) : void 0 === e.open(E, '_blank') && a && (e.location.href = E), (y.readyState = y.DONE), O(), p(E);
                        },
                        g = function (e) {
                            return function () {
                                if (y.readyState !== y.DONE) return e.apply(this, arguments);
                            };
                        },
                        M = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((y.readyState = y.INIT), c || (c = 'download'), o)) {
                        (E = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = E), (r.download = c), i(r), O(), p(E), (y.readyState = y.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && b && b !== d && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)), (m = !0)), s && 'download' !== c && (c += '.download'), (b === d || s) && (S = e), !l)) return void N();
                    (u += t.size),
                        l(
                            e.TEMPORARY,
                            u,
                            g(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    M,
                                    g(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                c,
                                                M,
                                                g(function (e) {
                                                    e.createWriter(
                                                        g(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (S.location.href = e.toURL()), (y.readyState = y.DONE), h(y, 'writeend', t), p(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && N();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    n['on' + e] = y['on' + e];
                                                                }),
                                                                n.write(t),
                                                                (y.abort = function () {
                                                                    n.abort(), (y.readyState = y.DONE);
                                                                }),
                                                                (y.readyState = y.WRITING);
                                                        }),
                                                        N
                                                    );
                                                }),
                                                N
                                            );
                                        };
                                        e.getFile(
                                            c,
                                            { create: !1 },
                                            g(function (e) {
                                                e.remove(), n();
                                            }),
                                            g(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : N();
                                            })
                                        );
                                    }),
                                    N
                                );
                            }),
                            N
                        );
                },
                E = f.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = _(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((E.abort = function () {
                      (this.readyState = this.DONE), h(this, 'abort');
                  }),
                  (E.readyState = E.INIT = 0),
                  (E.WRITING = 1),
                  (E.DONE = 2),
                  (E.error = E.onwritestart = E.onprogress = E.onwrite = E.onabort = E.onerror = E.onwriteend = null),
                  function (e, t, n) {
                      return new f(e, t, n);
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
