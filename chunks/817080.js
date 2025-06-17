var t =
    t ||
    (function (e) {
        if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                n = function () {
                    return e.URL || e.webkitURL || e;
                },
                r = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                i = 'download' in r,
                o = function (e) {
                    var t = new MouseEvent('click');
                    e.dispatchEvent(t);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                c = e.webkitRequestFileSystem,
                u = e.requestFileSystem || c || e.mozRequestFileSystem,
                s = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                f = 'application/octet-stream',
                l = 0,
                d = function (e) {
                    setTimeout(function () {
                        'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                p = function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                        var i = e['on' + t[r]];
                        if ('function' == typeof i)
                            try {
                                i.call(e, n || e);
                            } catch (e) {
                                s(e);
                            }
                    }
                },
                h = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                v = function (t, s, v) {
                    v || (t = h(t));
                    var g,
                        w,
                        y = this,
                        m = t.type,
                        S = !1,
                        b = function () {
                            p(y, 'writestart progress write writeend'.split(' '));
                        },
                        E = function () {
                            if (w && a && 'undefined' != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (w.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (y.readyState = y.DONE), b();
                                }),
                                    r.readAsDataURL(t),
                                    (y.readyState = y.INIT);
                                return;
                            }
                            (S || !g) && (g = n().createObjectURL(t)), w ? (w.location.href = g) : void 0 === e.open(g, '_blank') && a && (e.location.href = g), (y.readyState = y.DONE), b(), d(g);
                        },
                        O = function (e) {
                            return function () {
                                if (y.readyState !== y.DONE) return e.apply(this, arguments);
                            };
                        },
                        R = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((y.readyState = y.INIT), s || (s = 'download'), i)) {
                        (g = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = g), (r.download = s), o(r), b(), d(g), (y.readyState = y.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && m && m !== f && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, f)), (S = !0)), c && 'download' !== s && (s += '.download'), (m === f || c) && (w = e), !u)) return void E();
                    (l += t.size),
                        u(
                            e.TEMPORARY,
                            l,
                            O(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    R,
                                    O(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                s,
                                                R,
                                                O(function (e) {
                                                    e.createWriter(
                                                        O(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (w.location.href = e.toURL()), (y.readyState = y.DONE), p(y, 'writeend', t), d(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && E();
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
                                                        E
                                                    );
                                                }),
                                                E
                                            );
                                        };
                                        e.getFile(
                                            s,
                                            { create: !1 },
                                            O(function (e) {
                                                e.remove(), n();
                                            }),
                                            O(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : E();
                                            })
                                        );
                                    }),
                                    E
                                );
                            }),
                            E
                        );
                },
                g = v.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = h(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((g.abort = function () {
                      (this.readyState = this.DONE), p(this, 'abort');
                  }),
                  (g.readyState = g.INIT = 0),
                  (g.WRITING = 1),
                  (g.DONE = 2),
                  (g.error = g.onwritestart = g.onprogress = g.onwrite = g.onabort = g.onerror = g.onwriteend = null),
                  function (e, t, n) {
                      return new v(e, t, n);
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
