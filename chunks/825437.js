"use strict";
n.d(t, { Ay: () => u, Ut: () => l, rx: () => a });
var r = n(64700),
    i = function () {
        (this.locks = []), (this.listeners = []);
    };
function s(e, t, n) {
    void 0 === n && (n = !1);
    var r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function (e) {
                return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            },
        }),
        i = t.compareDocumentPosition(e),
        s = null;
    i & Node.DOCUMENT_POSITION_PRECEDING || n
        ? (s = r.firstChild())
        : i & Node.DOCUMENT_POSITION_FOLLOWING && (s = r.lastChild()),
        (null != s ? s : e).focus();
}
(i.prototype.add = function (e, t) {
    var n = { uid: e, setEnabled: t, enabled: !1 };
    this.toggleLayer(this.current(), !1), this.locks.push(n), this.toggleLayer(n, !0), this.emit();
}),
    (i.prototype.remove = function (e) {
        var t = this.locks.find(function (t) {
            return t.uid === e;
        });
        this.toggleLayer(t, !1);
        var n = this.current(),
            r = null != n && n.uid === e;
        (this.locks = this.locks.filter(function (t) {
            return t.uid !== e;
        })),
            r && this.toggleLayer(this.current(), !0),
            this.emit();
    }),
    (i.prototype.current = function () {
        return this.locks[this.locks.length - 1];
    }),
    (i.prototype.isActive = function () {
        var e = this.current();
        return null != e && e.enabled;
    }),
    (i.prototype.toggleLayer = function (e, t) {
        null != e && (e.setEnabled(t), (e.enabled = t));
    }),
    (i.prototype.subscribe = function (e) {
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
    (i.prototype.emit = function () {
        var e = this,
            t = this.isActive();
        this.listeners.forEach(function (n) {
            return n(t, e.locks);
        });
    });
var a = new i(),
    o = 0,
    l = (0, r.memo)(function () {
        var e,
            t = (0, r.useState)(!1),
            n = t[0];
        return (
            (e = t[1]),
            (0, r.useEffect)(
                function () {
                    return a.subscribe(e);
                },
                [e],
            ),
            (0, r.createElement)("div", {
                tabIndex: n ? 0 : void 0,
                style: { position: "fixed", opacity: 0, pointerEvents: "none" },
            })
        );
    });
function u(e, t) {
    void 0 === t && (t = {});
    var n,
        i,
        l,
        u = t.returnRef,
        d = t.disableReturnRef,
        c = t.attachTo;
    void 0 === c && (c = document);
    var _ = t.disable,
        f = c instanceof HTMLElement ? c.ownerDocument : c,
        E =
            ((n = (0, r.useState)(function () {
                return "lock-" + o++;
            })[0]),
            (i = (0, r.useRef)(!1)),
            (0, r.useLayoutEffect)(
                function () {
                    return (
                        a.add(n, function (e) {
                            return (i.current = e);
                        }),
                        function () {
                            return a.remove(n);
                        }
                    );
                },
                [n],
            ),
            i);
    (0, r.useEffect)(
        function () {
            _ && (E.current = !1);
        },
        [_, E],
    ),
        (0, r.useLayoutEffect)(
            function () {
                var t = e.current;
                function n(t) {
                    requestAnimationFrame(function () {
                        if (E.current) {
                            var n = e.current;
                            if (null != n) {
                                var r = t.target || f.body;
                                n.contains(r) || (t.preventDefault(), t.stopImmediatePropagation(), s(n, r));
                            }
                        }
                    });
                }
                function r(t) {
                    if (E.current) {
                        var n = e.current;
                        if (null != n) {
                            (null != t.relatedTarget && t.relatedTarget !== f.body) || (t.preventDefault(), n.focus());
                            var r = t.target || f.body;
                            n.contains(r) || s(n, r);
                        }
                    }
                }
                return (
                    null == t ||
                        null == f.activeElement ||
                        t.contains(f.activeElement) ||
                        null != t.querySelector("[autofocus]") ||
                        s(t, f.activeElement, !0),
                    c.addEventListener("focusin", n, { capture: !0 }),
                    c.addEventListener("focusout", r, { capture: !0 }),
                    function () {
                        c.removeEventListener("focusin", n, { capture: !0 }),
                            c.removeEventListener("focusout", r, { capture: !0 });
                    }
                );
            },
            [c, f, e, E],
        ),
        (l = (0, r.useRef)(document.activeElement)),
        (0, r.useLayoutEffect)(function () {
            return function () {
                (null != d && d.current) ||
                    requestAnimationFrame(function () {
                        null == u || null == u.current
                            ? null == l || null == l.current || l.current.focus()
                            : u.current.focus();
                    });
            };
        }, []);
}
