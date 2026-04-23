"use strict";
n.d(t, { L: () => _, c: () => d });
var r = n(45145),
    i = n(717205),
    s = n(941257),
    a = 0,
    o = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    l = [
        "resize",
        "load",
        "transitionend",
        "animationend",
        "animationstart",
        "animationiteration",
        "keyup",
        "keydown",
        "mouseup",
        "mousedown",
        "mouseover",
        "mouseout",
        "blur",
        "focus",
    ],
    u = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    c = !1,
    d = new ((function () {
        function e() {
            var e = this;
            (this.stopped = !0),
                (this.listener = function () {
                    return e.schedule();
                });
        }
        return (
            (e.prototype.run = function (e) {
                var t = this;
                if ((void 0 === e && (e = 250), !c)) {
                    c = !0;
                    var n = u(e);
                    (0, s.Y)(function () {
                        var i = !1;
                        try {
                            i = (0, r.e)();
                        } finally {
                            if (((c = !1), (e = n - u()), !a)) return;
                            i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                        }
                    });
                }
            }),
            (e.prototype.schedule = function () {
                this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
                var e = this,
                    t = function () {
                        return e.observer && e.observer.observe(document.body, o);
                    };
                document.body ? t() : i.S.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    l.forEach(function (t) {
                        return i.S.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    l.forEach(function (t) {
                        return i.S.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    _ = function (e) {
        !a && e > 0 && d.start(), (a += e) || d.stop();
    };
