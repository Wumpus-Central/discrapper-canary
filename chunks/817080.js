var t =
    t ||
    (function (e) {
        if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                n = function () {
                    return e.URL || e.webkitURL || e;
                },
                r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                i = "download" in r,
                a = function (e) {
                    var t = new MouseEvent("click");
                    e.dispatchEvent(t);
                },
                o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                s = e.webkitRequestFileSystem,
                l = e.requestFileSystem || s || e.mozRequestFileSystem,
                c = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                u = "application/octet-stream",
                d = 0,
                f = 40000,
                p = function (e) {
                    setTimeout(function () {
                        "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, f);
                },
                _ = function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                        var i = e["on" + t[r]];
                        if ("function" == typeof i)
                            try {
                                i.call(e, n || e);
                            } catch (e) {
                                c(e);
                            }
                    }
                },
                m = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)
                        ? new Blob(["ï\xBB\xBF", e], { type: e.type })
                        : e;
                },
                h = function (t, c, f) {
                    f || (t = m(t));
                    var h,
                        g,
                        E = this,
                        b = t.type,
                        y = !1,
                        O = function () {
                            _(E, "writestart progress write writeend".split(" "));
                        },
                        v = function () {
                            if (g && o && "undefined" != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (g.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/))),
                                        (E.readyState = E.DONE),
                                        O();
                                }),
                                    r.readAsDataURL(t),
                                    (E.readyState = E.INIT);
                                return;
                            }
                            (y || !h) && (h = n().createObjectURL(t)),
                                g
                                    ? (g.location.href = h)
                                    : void 0 === e.open(h, "_blank") && o && (e.location.href = h),
                                (E.readyState = E.DONE),
                                O(),
                                p(h);
                        },
                        S = function (e) {
                            return function () {
                                if (E.readyState !== E.DONE) return e.apply(this, arguments);
                            };
                        },
                        I = {
                            create: !0,
                            exclusive: !1,
                        };
                    if (((E.readyState = E.INIT), c || (c = "download"), i)) {
                        (h = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = h), (r.download = c), a(r), O(), p(h), (E.readyState = E.DONE);
                            });
                        return;
                    }
                    if (
                        (e.chrome && b && b !== u && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, u)), (y = !0)),
                        s && "download" !== c && (c += ".download"),
                        (b === u || s) && (g = e),
                        !l)
                    )
                        return void v();
                    (d += t.size),
                        l(
                            e.TEMPORARY,
                            d,
                            S(function (e) {
                                e.root.getDirectory(
                                    "saved",
                                    I,
                                    S(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                c,
                                                I,
                                                S(function (e) {
                                                    e.createWriter(
                                                        S(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (g.location.href = e.toURL()),
                                                                    (E.readyState = E.DONE),
                                                                    _(E, "writeend", t),
                                                                    p(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && v();
                                                                }),
                                                                "writestart progress write abort"
                                                                    .split(" ")
                                                                    .forEach(function (e) {
                                                                        n["on" + e] = E["on" + e];
                                                                    }),
                                                                n.write(t),
                                                                (E.abort = function () {
                                                                    n.abort(), (E.readyState = E.DONE);
                                                                }),
                                                                (E.readyState = E.WRITING);
                                                        }),
                                                        v,
                                                    );
                                                }),
                                                v,
                                            );
                                        };
                                        e.getFile(
                                            c,
                                            { create: !1 },
                                            S(function (e) {
                                                e.remove(), n();
                                            }),
                                            S(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : v();
                                            }),
                                        );
                                    }),
                                    v,
                                );
                            }),
                            v,
                        );
                },
                g = h.prototype,
                E = function (e, t, n) {
                    return new h(e, t, n);
                };
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = m(e)), navigator.msSaveOrOpenBlob(e, t || "download");
                  }
                : ((g.abort = function () {
                      var e = this;
                      (e.readyState = e.DONE), _(e, "abort");
                  }),
                  (g.readyState = g.INIT = 0),
                  (g.WRITING = 1),
                  (g.DONE = 2),
                  (g.error = g.onwritestart = g.onprogress = g.onwrite = g.onabort = g.onerror = g.onwriteend = null),
                  E);
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
