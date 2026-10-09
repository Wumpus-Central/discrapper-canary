r.d(t, { H: () => I });
var n = r(290309),
    i = r(204581),
    o = r(575241),
    a = r(321733),
    u = r(582128);
function c(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var s = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        (c(this, "spec", void 0), c(this, "monitor", void 0), (this.spec = e), (this.monitor = r));
    }
    return (
        (e = [
            {
                key: "canDrop",
                value: function () {
                    var e = this.spec,
                        t = this.monitor;
                    return !e.canDrop || e.canDrop(t.getItem(), t);
                },
            },
            {
                key: "hover",
                value: function () {
                    var e = this.spec,
                        t = this.monitor;
                    e.hover && e.hover(t.getItem(), t);
                },
            },
            {
                key: "drop",
                value: function () {
                    var e = this.spec,
                        t = this.monitor;
                    if (e.drop) return e.drop(t.getItem(), t);
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                ((n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n));
            }
        })(t.prototype, e),
        t
    );
})();
function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var d = r(22633);
function f(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var g = !1,
    h = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (f(this, "internalMonitor", void 0), f(this, "targetId", null), (this.internalMonitor = e.getMonitor()));
        }
        return (
            (e = [
                {
                    key: "receiveHandlerId",
                    value: function (e) {
                        this.targetId = e;
                    },
                },
                {
                    key: "getHandlerId",
                    value: function () {
                        return this.targetId;
                    },
                },
                {
                    key: "subscribeToStateChange",
                    value: function (e, t) {
                        return this.internalMonitor.subscribeToStateChange(e, t);
                    },
                },
                {
                    key: "canDrop",
                    value: function () {
                        if (!this.targetId) return !1;
                        (0, a.V)(
                            !g,
                            "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
                        );
                        try {
                            return ((g = !0), this.internalMonitor.canDropOnTarget(this.targetId));
                        } finally {
                            g = !1;
                        }
                    },
                },
                {
                    key: "isOver",
                    value: function (e) {
                        return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e);
                    },
                },
                {
                    key: "getItemType",
                    value: function () {
                        return this.internalMonitor.getItemType();
                    },
                },
                {
                    key: "getItem",
                    value: function () {
                        return this.internalMonitor.getItem();
                    },
                },
                {
                    key: "getDropResult",
                    value: function () {
                        return this.internalMonitor.getDropResult();
                    },
                },
                {
                    key: "didDrop",
                    value: function () {
                        return this.internalMonitor.didDrop();
                    },
                },
                {
                    key: "getInitialClientOffset",
                    value: function () {
                        return this.internalMonitor.getInitialClientOffset();
                    },
                },
                {
                    key: "getInitialSourceClientOffset",
                    value: function () {
                        return this.internalMonitor.getInitialSourceClientOffset();
                    },
                },
                {
                    key: "getSourceClientOffset",
                    value: function () {
                        return this.internalMonitor.getSourceClientOffset();
                    },
                },
                {
                    key: "getClientOffset",
                    value: function () {
                        return this.internalMonitor.getClientOffset();
                    },
                },
                {
                    key: "getDifferenceFromInitialOffset",
                    value: function () {
                        return this.internalMonitor.getDifferenceFromInitialOffset();
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    ((n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n));
                }
            })(t.prototype, e),
            t
        );
    })(),
    p = r(816885),
    v = r(370725),
    y = r(723651);
function b(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var m = (function () {
        var e;
        function t(e) {
            var r = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (b(
                this,
                "hooks",
                (0, v.i)({
                    dropTarget: function (e, t) {
                        (r.clearDropTarget(),
                            (r.dropTargetOptions = t),
                            (0, y.i)(e) ? (r.dropTargetRef = e) : (r.dropTargetNode = e),
                            r.reconnect());
                    },
                }),
            ),
                b(this, "handlerId", null),
                b(this, "dropTargetRef", null),
                b(this, "dropTargetNode", void 0),
                b(this, "dropTargetOptionsInternal", null),
                b(this, "unsubscribeDropTarget", void 0),
                b(this, "lastConnectedHandlerId", null),
                b(this, "lastConnectedDropTarget", null),
                b(this, "lastConnectedDropTargetOptions", null),
                b(this, "backend", void 0),
                (this.backend = e));
        }
        return (
            (e = [
                {
                    key: "connectTarget",
                    get: function () {
                        return this.dropTarget;
                    },
                },
                {
                    key: "reconnect",
                    value: function () {
                        var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
                        e && this.disconnectDropTarget();
                        var t = this.dropTarget;
                        if (this.handlerId) {
                            if (!t) {
                                this.lastConnectedDropTarget = t;
                                return;
                            }
                            e &&
                                ((this.lastConnectedHandlerId = this.handlerId),
                                (this.lastConnectedDropTarget = t),
                                (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
                                (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                                    this.handlerId,
                                    t,
                                    this.dropTargetOptions,
                                )));
                        }
                    },
                },
                {
                    key: "receiveHandlerId",
                    value: function (e) {
                        e !== this.handlerId && ((this.handlerId = e), this.reconnect());
                    },
                },
                {
                    key: "dropTargetOptions",
                    get: function () {
                        return this.dropTargetOptionsInternal;
                    },
                    set: function (e) {
                        this.dropTargetOptionsInternal = e;
                    },
                },
                {
                    key: "didHandlerIdChange",
                    value: function () {
                        return this.lastConnectedHandlerId !== this.handlerId;
                    },
                },
                {
                    key: "didDropTargetChange",
                    value: function () {
                        return this.lastConnectedDropTarget !== this.dropTarget;
                    },
                },
                {
                    key: "didOptionsChange",
                    value: function () {
                        return !(0, p.b)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
                    },
                },
                {
                    key: "disconnectDropTarget",
                    value: function () {
                        this.unsubscribeDropTarget &&
                            (this.unsubscribeDropTarget(), (this.unsubscribeDropTarget = void 0));
                    },
                },
                {
                    key: "dropTarget",
                    get: function () {
                        return this.dropTargetNode || (this.dropTargetRef && this.dropTargetRef.current);
                    },
                },
                {
                    key: "clearDropTarget",
                    value: function () {
                        ((this.dropTargetRef = null), (this.dropTargetNode = null));
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    ((n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n));
                }
            })(t.prototype, e),
            t
        );
    })(),
    D = r(653944);
function I(e, t) {
    var r,
        c,
        f,
        g,
        p,
        v,
        y,
        b,
        I,
        S = (0, d.I)(e, t),
        k =
            ((r = (0, i.u)()),
            (0, u.useMemo)(
                function () {
                    return new h(r);
                },
                [r],
            )),
        O =
            ((c = S.options),
            (f = (0, i.u)()),
            (g = (0, u.useMemo)(
                function () {
                    return new m(f.getBackend());
                },
                [f],
            )),
            (0, o.E)(
                function () {
                    return (
                        (g.dropTargetOptions = c || null),
                        g.reconnect(),
                        function () {
                            return g.disconnectDropTarget();
                        }
                    );
                },
                [c],
            ),
            g);
    return (
        (p = (0, i.u)()),
        (v = (0, u.useMemo)(
            function () {
                return new s(S, k);
            },
            [k],
        )),
        (0, u.useEffect)(
            function () {
                v.spec = S;
            },
            [S],
        ),
        (y = v),
        (b = S.accept),
        (I = (0, u.useMemo)(
            function () {
                return ((0, a.V)(null != S.accept, "accept must be defined"), Array.isArray(b) ? b : [b]);
            },
            [b],
        )),
        (0, o.E)(
            function () {
                var e,
                    t =
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })((e = (0, n.l)(I, y, p))) ||
                        (function (e) {
                            var t,
                                r,
                                n = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                            if (null != n) {
                                var i = [],
                                    o = !0,
                                    a = !1;
                                try {
                                    for (
                                        n = n.call(e);
                                        !(o = (t = n.next()).done) && (i.push(t.value), 2 !== i.length);
                                        o = !0
                                    );
                                } catch (e) {
                                    ((a = !0), (r = e));
                                } finally {
                                    try {
                                        o || null == n.return || n.return();
                                    } finally {
                                        if (a) throw r;
                                    }
                                }
                                return i;
                            }
                        })(e) ||
                        (function (e) {
                            if (e) {
                                if ("string" == typeof e) return l(e, 2);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                    "Map" === t || "Set" === t)
                                )
                                    return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                    return l(e, 2);
                            }
                        })(e) ||
                        (function () {
                            throw TypeError(
                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                        })(),
                    r = t[0],
                    i = t[1];
                return (k.receiveHandlerId(r), O.receiveHandlerId(r), i);
            },
            [
                p,
                k,
                y,
                O,
                I.map(function (e) {
                    return e.toString();
                }).join("|"),
            ],
        ),
        [
            (0, D.j)(S.collect, k, O),
            (0, u.useMemo)(
                function () {
                    return O.hooks.dropTarget();
                },
                [O],
            ),
        ]
    );
}
