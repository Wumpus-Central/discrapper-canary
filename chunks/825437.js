"use strict";
n.d(t, { Ay: () => u, Ut: () => l, rx: () => a });
var i = n(64700),
    r = function () {
        (this.locks = []), (this.listeners = []);
    };
function s(e, t, n) {
    void 0 === n && (n = !1);
    var i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function (e) {
                return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            },
        }),
        r = t.compareDocumentPosition(e),
        s = null;
    r & Node.DOCUMENT_POSITION_PRECEDING || n
        ? (s = i.firstChild())
        : r & Node.DOCUMENT_POSITION_FOLLOWING && (s = i.lastChild()),
        (null != s ? s : e).focus();
}
(r.prototype.add = function (e, t) {
    var n = { uid: e, setEnabled: t, enabled: !1 };
    this.toggleLayer(this.current(), !1), this.locks.push(n), this.toggleLayer(n, !0), this.emit();
}),
    (r.prototype.remove = function (e) {
        var t = this.locks.find(function (t) {
            return t.uid === e;
        });
        this.toggleLayer(t, !1);
        var n = this.current(),
            i = null != n && n.uid === e;
        (this.locks = this.locks.filter(function (t) {
            return t.uid !== e;
        })),
            i && this.toggleLayer(this.current(), !0),
            this.emit();
    }),
    (r.prototype.current = function () {
        return this.locks[this.locks.length - 1];
    }),
    (r.prototype.isActive = function () {
        var e = this.current();
        return null != e && e.enabled;
    }),
    (r.prototype.toggleLayer = function (e, t) {
        null != e && (e.setEnabled(t), (e.enabled = t));
    }),
    (r.prototype.subscribe = function (e) {
        var t = this;
        return (
            this.listeners.push(e),
            e(this.isActive(), this.locks),
            function () {
                return (t.listeners = t.listeners.filter(function (t) {
                    return t !== e;
                }));
            }
        );
    }),
    (r.prototype.emit = function () {
        var e = this,
            t = this.isActive();
        this.listeners.forEach(function (n) {
            return n(t, e.locks);
        });
    });
var a = new r(),
    o = 0,
    l = (0, i.memo)(function () {
        var e,
            t = (0, i.useState)(!1),
            n = t[0];
        return (
            (e = t[1]),
            (0, i.useEffect)(
                function () {
                    return a.subscribe(e);
                },
                [e],
            ),
            (0, i.createElement)("div", {
                tabIndex: n ? 0 : void 0,
                style: { position: "fixed", opacity: 0, pointerEvents: "none" },
            })
        );
    });
function u(e, t) {
    void 0 === t && (t = {});
    var n,
        r,
        l,
        u = t.returnRef,
        c = t.disableReturnRef,
        d = t.attachTo;
    void 0 === d && (d = document);
    var _ = t.disable,
        h = d instanceof HTMLElement ? d.ownerDocument : d,
        f =
            ((n = (0, i.useState)(function () {
                return "lock-" + o++;
            })[0]),
            (r = (0, i.useRef)(!1)),
            (0, i.useLayoutEffect)(
                function () {
                    return (
                        a.add(n, function (e) {
                            return (r.current = e);
                        }),
                        function () {
                            return a.remove(n);
                        }
                    );
                },
                [n],
            ),
            r);
    (0, i.useEffect)(
        function () {
            _ && (f.current = !1);
        },
        [_, f],
    ),
        (0, i.useLayoutEffect)(
            function () {
                var t = e.current;
                function n(t) {
                    requestAnimationFrame(function () {
                        if (f.current) {
                            var n = e.current;
                            if (null != n) {
                                var i = t.target || h.body;
                                n.contains(i) || (t.preventDefault(), t.stopImmediatePropagation(), s(n, i));
                            }
                        }
                    });
                }
                function i(t) {
                    if (f.current) {
                        var n = e.current;
                        if (null != n) {
                            (null != t.relatedTarget && t.relatedTarget !== h.body) || (t.preventDefault(), n.focus());
                            var i = t.target || h.body;
                            n.contains(i) || s(n, i);
                        }
                    }
                }
                return (
                    null == t ||
                        null == h.activeElement ||
                        t.contains(h.activeElement) ||
                        null != t.querySelector("[autofocus]") ||
                        s(t, h.activeElement, !0),
                    d.addEventListener("focusin", n, { capture: !0 }),
                    d.addEventListener("focusout", i, { capture: !0 }),
                    function () {
                        d.removeEventListener("focusin", n, { capture: !0 }),
                            d.removeEventListener("focusout", i, { capture: !0 });
                    }
                );
            },
            [d, h, e, f],
        ),
        (l = (0, i.useRef)(document.activeElement)),
        (0, i.useLayoutEffect)(function () {
            return function () {
                (null != c && c.current) ||
                    requestAnimationFrame(function () {
                        null == u || null == u.current
                            ? null == l || null == l.current || l.current.focus()
                            : u.current.focus();
                    });
            };
        }, []);
}
