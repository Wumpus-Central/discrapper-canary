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
                E = function (e) {
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
                p = function (t, c, p) {
                    p || (t = _(t));
                    var f,
                        R,
                        I = this,
                        m = t.type,
                        N = !1,
                        g = function () {
                            h(I, 'writestart progress write writeend'.split(' '));
                        },
                        C = function () {
                            if (R && a && 'undefined' != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (R.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (I.readyState = I.DONE), g();
                                }),
                                    r.readAsDataURL(t),
                                    (I.readyState = I.INIT);
                                return;
                            }
                            (N || !f) && (f = n().createObjectURL(t)), R ? (R.location.href = f) : void 0 === e.open(f, '_blank') && a && (e.location.href = f), (I.readyState = I.DONE), g(), E(f);
                        },
                        y = function (e) {
                            return function () {
                                if (I.readyState !== I.DONE) return e.apply(this, arguments);
                            };
                        },
                        S = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((I.readyState = I.INIT), c || (c = 'download'), o)) {
                        (f = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = f), (r.download = c), i(r), g(), E(f), (I.readyState = I.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && m && m !== d && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)), (N = !0)), s && 'download' !== c && (c += '.download'), (m === d || s) && (R = e), !l)) {
                        C();
                        return;
                    }
                    (u += t.size),
                        l(
                            e.TEMPORARY,
                            u,
                            y(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    S,
                                    y(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                c,
                                                S,
                                                y(function (e) {
                                                    e.createWriter(
                                                        y(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (R.location.href = e.toURL()), (I.readyState = I.DONE), h(I, 'writeend', t), E(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && C();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    n['on' + e] = I['on' + e];
                                                                }),
                                                                n.write(t),
                                                                (I.abort = function () {
                                                                    n.abort(), (I.readyState = I.DONE);
                                                                }),
                                                                (I.readyState = I.WRITING);
                                                        }),
                                                        C
                                                    );
                                                }),
                                                C
                                            );
                                        };
                                        e.getFile(
                                            c,
                                            { create: !1 },
                                            y(function (e) {
                                                e.remove(), n();
                                            }),
                                            y(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : C();
                                            })
                                        );
                                    }),
                                    C
                                );
                            }),
                            C
                        );
                },
                f = p.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = _(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((f.abort = function () {
                      (this.readyState = this.DONE), h(this, 'abort');
                  }),
                  (f.readyState = f.INIT = 0),
                  (f.WRITING = 1),
                  (f.DONE = 2),
                  (f.error = f.onwritestart = f.onprogress = f.onwrite = f.onabort = f.onerror = f.onwriteend = null),
                  function (e, t, n) {
                      return new p(e, t, n);
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
