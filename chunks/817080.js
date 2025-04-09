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
                h = function (e) {
                    setTimeout(function () {
                        'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                p = function (e, t, n) {
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
                f = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                _ = function (t, c, _) {
                    _ || (t = f(t));
                    var N,
                        m,
                        b = this,
                        E = t.type,
                        y = !1,
                        g = function () {
                            p(b, 'writestart progress write writeend'.split(' '));
                        },
                        S = function () {
                            if (m && a && 'undefined' != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (m.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (b.readyState = b.DONE), g();
                                }),
                                    r.readAsDataURL(t),
                                    (b.readyState = b.INIT);
                                return;
                            }
                            (y || !N) && (N = n().createObjectURL(t)), m ? (m.location.href = N) : void 0 === e.open(N, '_blank') && a && (e.location.href = N), (b.readyState = b.DONE), g(), h(N);
                        },
                        O = function (e) {
                            return function () {
                                if (b.readyState !== b.DONE) return e.apply(this, arguments);
                            };
                        },
                        x = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((b.readyState = b.INIT), c || (c = 'download'), o)) {
                        (N = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = N), (r.download = c), i(r), g(), h(N), (b.readyState = b.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && E && E !== d && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)), (y = !0)), s && 'download' !== c && (c += '.download'), (E === d || s) && (m = e), !l)) return void S();
                    (u += t.size),
                        l(
                            e.TEMPORARY,
                            u,
                            O(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    x,
                                    O(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                c,
                                                x,
                                                O(function (e) {
                                                    e.createWriter(
                                                        O(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (m.location.href = e.toURL()), (b.readyState = b.DONE), p(b, 'writeend', t), h(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && S();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    n['on' + e] = b['on' + e];
                                                                }),
                                                                n.write(t),
                                                                (b.abort = function () {
                                                                    n.abort(), (b.readyState = b.DONE);
                                                                }),
                                                                (b.readyState = b.WRITING);
                                                        }),
                                                        S
                                                    );
                                                }),
                                                S
                                            );
                                        };
                                        e.getFile(
                                            c,
                                            { create: !1 },
                                            O(function (e) {
                                                e.remove(), n();
                                            }),
                                            O(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : S();
                                            })
                                        );
                                    }),
                                    S
                                );
                            }),
                            S
                        );
                },
                N = _.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = f(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((N.abort = function () {
                      (this.readyState = this.DONE), p(this, 'abort');
                  }),
                  (N.readyState = N.INIT = 0),
                  (N.WRITING = 1),
                  (N.DONE = 2),
                  (N.error = N.onwritestart = N.onprogress = N.onwrite = N.onabort = N.onerror = N.onwriteend = null),
                  function (e, t, n) {
                      return new _(e, t, n);
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
