"use strict";
n.d(t, { L: () => f, c: () => c });
var r = n(45145),
    i = n(717205),
    a = n(941257),
    o = 0,
    u = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    s = [
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
    l = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    d = !1,
    c = new ((function () {
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
                if ((void 0 === e && (e = 250), !d)) {
                    d = !0;
                    var n = l(e);
                    (0, a.Y)(function () {
                        var i = !1;
                        try {
                            i = (0, r.e)();
                        } finally {
                            if (((d = !1), (e = n - l()), !o)) return;
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
                        return e.observer && e.observer.observe(document.body, u);
                    };
                document.body ? t() : i.S.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    s.forEach(function (t) {
                        return i.S.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    s.forEach(function (t) {
                        return i.S.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    f = function (e) {
        !o && e > 0 && c.start(), (o += e) || c.stop();
    };
