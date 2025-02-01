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
                d = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                c = 'application/octet-stream',
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
                                d(e);
                            }
                    }
                },
                f = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                _ = function (t, d, _) {
                    _ || (t = f(t));
                    var E,
                        m,
                        N = this,
                        g = t.type,
                        S = !1,
                        b = function () {
                            p(N, 'writestart progress write writeend'.split(' '));
                        },
                        x = function () {
                            if (m && a && 'undefined' != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (m.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (N.readyState = N.DONE), b();
                                }),
                                    r.readAsDataURL(t),
                                    (N.readyState = N.INIT);
                                return;
                            }
                            (S || !E) && (E = n().createObjectURL(t)), m ? (m.location.href = E) : void 0 === e.open(E, '_blank') && a && (e.location.href = E), (N.readyState = N.DONE), b(), h(E);
                        },
                        y = function (e) {
                            return function () {
                                if (N.readyState !== N.DONE) return e.apply(this, arguments);
                            };
                        },
                        C = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((N.readyState = N.INIT), d || (d = 'download'), o)) {
                        (E = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = E), (r.download = d), i(r), b(), h(E), (N.readyState = N.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && g && g !== c && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, c)), (S = !0)), s && 'download' !== d && (d += '.download'), (g === c || s) && (m = e), !l)) {
                        x();
                        return;
                    }
                    (u += t.size),
                        l(
                            e.TEMPORARY,
                            u,
                            y(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    C,
                                    y(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                d,
                                                C,
                                                y(function (e) {
                                                    e.createWriter(
                                                        y(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (m.location.href = e.toURL()), (N.readyState = N.DONE), p(N, 'writeend', t), h(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && x();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    n['on' + e] = N['on' + e];
                                                                }),
                                                                n.write(t),
                                                                (N.abort = function () {
                                                                    n.abort(), (N.readyState = N.DONE);
                                                                }),
                                                                (N.readyState = N.WRITING);
                                                        }),
                                                        x
                                                    );
                                                }),
                                                x
                                            );
                                        };
                                        e.getFile(
                                            d,
                                            { create: !1 },
                                            y(function (e) {
                                                e.remove(), n();
                                            }),
                                            y(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : x();
                                            })
                                        );
                                    }),
                                    x
                                );
                            }),
                            x
                        );
                },
                E = _.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = f(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((E.abort = function () {
                      (this.readyState = this.DONE), p(this, 'abort');
                  }),
                  (E.readyState = E.INIT = 0),
                  (E.WRITING = 1),
                  (E.DONE = 2),
                  (E.error = E.onwritestart = E.onprogress = E.onwrite = E.onabort = E.onerror = E.onwriteend = null),
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
