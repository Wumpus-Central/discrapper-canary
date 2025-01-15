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
                m = function (t, d, m) {
                    !m && (t = f(t));
                    var _,
                        E,
                        b = this,
                        N = t.type,
                        g = !1,
                        S = function () {
                            p(b, 'writestart progress write writeend'.split(' '));
                        },
                        y = function () {
                            if (E && a && 'undefined' != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (E.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (b.readyState = b.DONE), S();
                                }),
                                    r.readAsDataURL(t),
                                    (b.readyState = b.INIT);
                                return;
                            }
                            (g || !_) && (_ = n().createObjectURL(t)), E ? (E.location.href = _) : void 0 === e.open(_, '_blank') && a && (e.location.href = _), (b.readyState = b.DONE), S(), h(_);
                        },
                        C = function (e) {
                            return function () {
                                if (b.readyState !== b.DONE) return e.apply(this, arguments);
                            };
                        },
                        x = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((b.readyState = b.INIT), !d && (d = 'download'), o)) {
                        (_ = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = _), (r.download = d), i(r), S(), h(_), (b.readyState = b.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && N && N !== c && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, c)), (g = !0)), s && 'download' !== d && (d += '.download'), (N === c || s) && (E = e), !l)) {
                        y();
                        return;
                    }
                    (u += t.size),
                        l(
                            e.TEMPORARY,
                            u,
                            C(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    x,
                                    C(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                d,
                                                x,
                                                C(function (e) {
                                                    e.createWriter(
                                                        C(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (E.location.href = e.toURL()), (b.readyState = b.DONE), p(b, 'writeend', t), h(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && y();
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
                                                        y
                                                    );
                                                }),
                                                y
                                            );
                                        };
                                        e.getFile(
                                            d,
                                            { create: !1 },
                                            C(function (e) {
                                                e.remove(), n();
                                            }),
                                            C(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : y();
                                            })
                                        );
                                    }),
                                    y
                                );
                            }),
                            y
                        );
                },
                _ = m.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return !n && (e = f(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((_.abort = function () {
                      (this.readyState = this.DONE), p(this, 'abort');
                  }),
                  (_.readyState = _.INIT = 0),
                  (_.WRITING = 1),
                  (_.DONE = 2),
                  (_.error = _.onwritestart = _.onprogress = _.onwrite = _.onabort = _.onerror = _.onwriteend = null),
                  function (e, t, n) {
                      return new m(e, t, n);
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
