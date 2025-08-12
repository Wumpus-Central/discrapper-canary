var t =
    t ||
    (function (e) {
        if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                n = function () {
                    return e.URL || e.webkitURL || e;
                },
                r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                o = "download" in r,
                i = function (e) {
                    var t = new MouseEvent("click");
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
                d = "application/octet-stream",
                u = 0,
                p = function (e) {
                    setTimeout(function () {
                        "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                h = function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                        var o = e["on" + t[r]];
                        if ("function" == typeof o)
                            try {
                                o.call(e, n || e);
                            } catch (e) {
                                c(e);
                            }
                    }
                },
                f = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)
                        ? new Blob(["ï\xBB\xBF", e], { type: e.type })
                        : e;
                },
                _ = function (t, c, _) {
                    _ || (t = f(t));
                    var S,
                        m,
                        b = this,
                        E = t.type,
                        y = !1,
                        M = function () {
                            h(b, "writestart progress write writeend".split(" "));
                        },
                        g = function () {
                            if (m && a && "undefined" != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (m.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/))),
                                        (b.readyState = b.DONE),
                                        M();
                                }),
                                    r.readAsDataURL(t),
                                    (b.readyState = b.INIT);
                                return;
                            }
                            (y || !S) && (S = n().createObjectURL(t)),
                                m
                                    ? (m.location.href = S)
                                    : void 0 === e.open(S, "_blank") && a && (e.location.href = S),
                                (b.readyState = b.DONE),
                                M(),
                                p(S);
                        },
                        C = function (e) {
                            return function () {
                                if (b.readyState !== b.DONE) return e.apply(this, arguments);
                            };
                        },
                        O = {
                            create: !0,
                            exclusive: !1,
                        };
                    if (((b.readyState = b.INIT), c || (c = "download"), o)) {
                        (S = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = S), (r.download = c), i(r), M(), p(S), (b.readyState = b.DONE);
                            });
                        return;
                    }
                    if (
                        (e.chrome && E && E !== d && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)), (y = !0)),
                        s && "download" !== c && (c += ".download"),
                        (E === d || s) && (m = e),
                        !l)
                    )
                        return void g();
                    (u += t.size),
                        l(
                            e.TEMPORARY,
                            u,
                            C(function (e) {
                                e.root.getDirectory(
                                    "saved",
                                    O,
                                    C(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                c,
                                                O,
                                                C(function (e) {
                                                    e.createWriter(
                                                        C(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (m.location.href = e.toURL()),
                                                                    (b.readyState = b.DONE),
                                                                    h(b, "writeend", t),
                                                                    p(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && g();
                                                                }),
                                                                "writestart progress write abort"
                                                                    .split(" ")
                                                                    .forEach(function (e) {
                                                                        n["on" + e] = b["on" + e];
                                                                    }),
                                                                n.write(t),
                                                                (b.abort = function () {
                                                                    n.abort(), (b.readyState = b.DONE);
                                                                }),
                                                                (b.readyState = b.WRITING);
                                                        }),
                                                        g,
                                                    );
                                                }),
                                                g,
                                            );
                                        };
                                        e.getFile(
                                            c,
                                            { create: !1 },
                                            C(function (e) {
                                                e.remove(), n();
                                            }),
                                            C(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : g();
                                            }),
                                        );
                                    }),
                                    g,
                                );
                            }),
                            g,
                        );
                },
                S = _.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = f(e)), navigator.msSaveOrOpenBlob(e, t || "download");
                  }
                : ((S.abort = function () {
                      (this.readyState = this.DONE), h(this, "abort");
                  }),
                  (S.readyState = S.INIT = 0),
                  (S.WRITING = 1),
                  (S.DONE = 2),
                  (S.error = S.onwritestart = S.onprogress = S.onwrite = S.onabort = S.onerror = S.onwriteend = null),
                  function (e, t, n) {
                      return new _(e, t, n);
                  });
        }
    })(("undefined" != typeof self && self) || ("undefined" != typeof window && window) || this.content);
e.exports
    ? (e.exports.saveAs = t)
    : "undefined" != typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return t;
      });
