var t =
    t ||
    (function (e) {
        if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                r = function () {
                    return e.URL || e.webkitURL || e;
                },
                n = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                o = 'download' in n,
                i = function (e) {
                    var t = new MouseEvent('click');
                    e.dispatchEvent(t);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                s = e.webkitRequestFileSystem,
                c = e.requestFileSystem || s || e.mozRequestFileSystem,
                l = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                d = 'application/octet-stream',
                u = 0,
                p = function (e) {
                    setTimeout(function () {
                        'string' == typeof e ? r().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                h = function (e, t, r) {
                    for (var n = (t = [].concat(t)).length; n--; ) {
                        var o = e['on' + t[n]];
                        if ('function' == typeof o)
                            try {
                                o.call(e, r || e);
                            } catch (e) {
                                l(e);
                            }
                    }
                },
                _ = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                f = function (t, l, f) {
                    f || (t = _(t));
                    var E,
                        S,
                        N = this,
                        y = t.type,
                        b = !1,
                        m = function () {
                            h(N, 'writestart progress write writeend'.split(' '));
                        },
                        O = function () {
                            if (S && a && 'undefined' != typeof FileReader) {
                                var n = new FileReader();
                                (n.onloadend = function () {
                                    var e = n.result;
                                    (S.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (N.readyState = N.DONE), m();
                                }),
                                    n.readAsDataURL(t),
                                    (N.readyState = N.INIT);
                                return;
                            }
                            (b || !E) && (E = r().createObjectURL(t)), S ? (S.location.href = E) : void 0 === e.open(E, '_blank') && a && (e.location.href = E), (N.readyState = N.DONE), m(), p(E);
                        },
                        g = function (e) {
                            return function () {
                                if (N.readyState !== N.DONE) return e.apply(this, arguments);
                            };
                        },
                        M = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((N.readyState = N.INIT), l || (l = 'download'), o)) {
                        (E = r().createObjectURL(t)),
                            setTimeout(function () {
                                (n.href = E), (n.download = l), i(n), m(), p(E), (N.readyState = N.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && y && y !== d && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)), (b = !0)), s && 'download' !== l && (l += '.download'), (y === d || s) && (S = e), !c)) return void O();
                    (u += t.size),
                        c(
                            e.TEMPORARY,
                            u,
                            g(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    M,
                                    g(function (e) {
                                        var r = function () {
                                            e.getFile(
                                                l,
                                                M,
                                                g(function (e) {
                                                    e.createWriter(
                                                        g(function (r) {
                                                            (r.onwriteend = function (t) {
                                                                (S.location.href = e.toURL()), (N.readyState = N.DONE), h(N, 'writeend', t), p(e);
                                                            }),
                                                                (r.onerror = function () {
                                                                    var e = r.error;
                                                                    e.code !== e.ABORT_ERR && O();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    r['on' + e] = N['on' + e];
                                                                }),
                                                                r.write(t),
                                                                (N.abort = function () {
                                                                    r.abort(), (N.readyState = N.DONE);
                                                                }),
                                                                (N.readyState = N.WRITING);
                                                        }),
                                                        O
                                                    );
                                                }),
                                                O
                                            );
                                        };
                                        e.getFile(
                                            l,
                                            { create: !1 },
                                            g(function (e) {
                                                e.remove(), r();
                                            }),
                                            g(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? r() : O();
                                            })
                                        );
                                    }),
                                    O
                                );
                            }),
                            O
                        );
                },
                E = f.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, r) {
                      return r || (e = _(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((E.abort = function () {
                      (this.readyState = this.DONE), h(this, 'abort');
                  }),
                  (E.readyState = E.INIT = 0),
                  (E.WRITING = 1),
                  (E.DONE = 2),
                  (E.error = E.onwritestart = E.onprogress = E.onwrite = E.onabort = E.onerror = E.onwriteend = null),
                  function (e, t, r) {
                      return new f(e, t, r);
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
