"use strict";
r.d(t, { QP: () => ej, eV: () => n });
let n = (e, t) => ({ event: e, check: t });
var i,
    o,
    a = r(64700),
    s = r(627968),
    l = r(321733),
    u = "dnd-core/INIT_COORDS",
    c = "dnd-core/BEGIN_DRAG",
    f = "dnd-core/PUBLISH_DRAG_SOURCE",
    d = "dnd-core/HOVER",
    p = "dnd-core/DROP",
    h = "dnd-core/END_DRAG";
function m(e, t) {
    return { type: u, payload: { sourceClientOffset: t || null, clientOffset: e || null } };
}
function g(e) {
    return (g =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function v(e) {
    return "object" === g(e);
}
var y = { type: u, payload: { clientOffset: null, sourceClientOffset: null } };
function b(e, t) {
    return null === t
        ? null === e
        : Array.isArray(e)
          ? e.some(function (e) {
                return e === t;
            })
          : e === t;
}
function w(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? w(Object(r), !0).forEach(function (t) {
                  var n, i, o;
                  (n = e),
                      (i = t),
                      (o = r[t]),
                      i in n
                          ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : w(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var x = (function () {
    var e;
    function t(e, r) {
        var n = this;
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
                var e = n.store.getState().refCount > 0;
                n.backend &&
                    (e && !n.isSetUp
                        ? (n.backend.setup(), (n.isSetUp = !0))
                        : !e && n.isSetUp && (n.backend.teardown(), (n.isSetUp = !1)));
            }),
            (this.store = e),
            (this.monitor = r),
            e.subscribe(this.handleRefCountChange);
    }
    return (
        (e = [
            {
                key: "receiveBackend",
                value: function (e) {
                    this.backend = e;
                },
            },
            {
                key: "getMonitor",
                value: function () {
                    return this.monitor;
                },
            },
            {
                key: "getBackend",
                value: function () {
                    return this.backend;
                },
            },
            {
                key: "getRegistry",
                value: function () {
                    return this.monitor.registry;
                },
            },
            {
                key: "getActions",
                value: function () {
                    var e,
                        t,
                        r,
                        n,
                        i,
                        o = this,
                        a = this.store.dispatch,
                        s = {
                            beginDrag:
                                ((e = this),
                                function () {
                                    var t,
                                        r,
                                        n,
                                        i,
                                        o,
                                        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        s =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : { publishSource: !0 },
                                        u = s.publishSource,
                                        f = s.clientOffset,
                                        d = s.getSourceClientOffset,
                                        p = e.getMonitor(),
                                        h = e.getRegistry();
                                    e.dispatch(m(f)),
                                        (t = a),
                                        (r = p),
                                        (n = h),
                                        (0, l.V)(!r.isDragging(), "Cannot call beginDrag while dragging."),
                                        t.forEach(function (e) {
                                            (0, l.V)(n.getSource(e), "Expected sourceIds to be registered.");
                                        });
                                    var g = (function (e, t) {
                                        for (var r = null, n = e.length - 1; n >= 0; n--)
                                            if (t.canDragSource(e[n])) {
                                                r = e[n];
                                                break;
                                            }
                                        return r;
                                    })(a, p);
                                    if (null === g) return void e.dispatch(y);
                                    var b = null;
                                    if (f) {
                                        if (!d) throw Error("getSourceClientOffset must be defined");
                                        (i = d),
                                            (0, l.V)(
                                                "function" == typeof i,
                                                "When clientOffset is provided, getSourceClientOffset must be a function.",
                                            ),
                                            (b = d(g));
                                    }
                                    e.dispatch(m(f, b));
                                    var w = h.getSource(g).beginDrag(p, g);
                                    if (null != w) {
                                        return (
                                            (o = w),
                                            (0, l.V)(v(o), "Item must be an object."),
                                            h.pinSource(g),
                                            {
                                                type: c,
                                                payload: {
                                                    itemType: h.getSourceType(g),
                                                    item: w,
                                                    sourceId: g,
                                                    clientOffset: f || null,
                                                    sourceClientOffset: b || null,
                                                    isSourcePublic: !!(void 0 === u || u),
                                                },
                                            }
                                        );
                                    }
                                }),
                            publishDragSource:
                                ((t = this),
                                function () {
                                    if (t.getMonitor().isDragging()) return { type: f };
                                }),
                            hover:
                                ((r = this),
                                function (e) {
                                    var t,
                                        n,
                                        i,
                                        o,
                                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        s = a.clientOffset;
                                    (t = e), (0, l.V)(Array.isArray(t), "Expected targetIds to be an array.");
                                    var u = e.slice(0),
                                        c = r.getMonitor(),
                                        f = r.getRegistry();
                                    return (
                                        (function (e, t, r) {
                                            (0, l.V)(t.isDragging(), "Cannot call hover while not dragging."),
                                                (0, l.V)(!t.didDrop(), "Cannot call hover after drop.");
                                            for (var n = 0; n < e.length; n++) {
                                                var i = e[n];
                                                (0, l.V)(
                                                    e.lastIndexOf(i) === n,
                                                    "Expected targetIds to be unique in the passed array.",
                                                );
                                                var o = r.getTarget(i);
                                                (0, l.V)(o, "Expected targetIds to be registered.");
                                            }
                                        })(u, c, f),
                                        (function (e, t, r) {
                                            for (var n = e.length - 1; n >= 0; n--) {
                                                var i = e[n];
                                                b(t.getTargetType(i), r) || e.splice(n, 1);
                                            }
                                        })(u, f, c.getItemType()),
                                        (n = u),
                                        (i = c),
                                        (o = f),
                                        n.forEach(function (e) {
                                            o.getTarget(e).hover(i, e);
                                        }),
                                        { type: d, payload: { targetIds: u, clientOffset: s || null } }
                                    );
                                }),
                            drop:
                                ((n = this),
                                function () {
                                    var e,
                                        t,
                                        r,
                                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        o = n.getMonitor(),
                                        a = n.getRegistry();
                                    (e = o),
                                        (0, l.V)(e.isDragging(), "Cannot call drop while not dragging."),
                                        (0, l.V)(!e.didDrop(), "Cannot call drop twice during one drag operation."),
                                        ((r = (t = o).getTargetIds().filter(t.canDropOnTarget, t)).reverse(),
                                        r).forEach(function (e, t) {
                                            var r,
                                                s,
                                                u,
                                                c,
                                                f,
                                                d,
                                                h,
                                                m =
                                                    ((r = e),
                                                    (s = t),
                                                    (u = a),
                                                    (c = o),
                                                    (h = d = (f = u.getTarget(r)) ? f.drop(c, r) : void 0),
                                                    (0, l.V)(
                                                        void 0 === h || v(h),
                                                        "Drop result must either be an object or undefined.",
                                                    ),
                                                    void 0 === d && (d = 0 === s ? {} : c.getDropResult()),
                                                    d),
                                                g = { type: p, payload: { dropResult: _(_({}, i), m) } };
                                            n.dispatch(g);
                                        });
                                }),
                            endDrag:
                                ((i = this),
                                function () {
                                    var e,
                                        t = i.getMonitor(),
                                        r = i.getRegistry();
                                    (e = t), (0, l.V)(e.isDragging(), "Cannot call endDrag while not dragging.");
                                    var n = t.getSourceId();
                                    return (
                                        null != n && (r.getSource(n, !0).endDrag(t, n), r.unpinSource()), { type: h }
                                    );
                                }),
                        };
                    return Object.keys(s).reduce(function (e, t) {
                        var r = s[t];
                        return (
                            (e[t] = function () {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                var i = r.apply(o, t);
                                void 0 !== i && a(i);
                            }),
                            e
                        );
                    }, {});
                },
            },
            {
                key: "dispatch",
                value: function (e) {
                    this.store.dispatch(e);
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(t.prototype, e),
        t
    );
})();
function E(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
r(416886);
var S = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
    k = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    T = {
        INIT: "@@redux/INIT" + k(),
        REPLACE: "@@redux/REPLACE" + k(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + k();
        },
    },
    C = function (e, t) {
        return e === t;
    };
function P(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? P(Object(r), !0).forEach(function (t) {
                  var n, i, o;
                  (n = e),
                      (i = t),
                      (o = r[t]),
                      i in n
                          ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : P(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var O = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null },
    M = "dnd-core/ADD_SOURCE",
    I = "dnd-core/ADD_TARGET",
    R = "dnd-core/REMOVE_SOURCE",
    D = "dnd-core/REMOVE_TARGET";
function L(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? L(Object(r), !0).forEach(function (t) {
                  var n, i, o;
                  (n = e),
                      (i = t),
                      (o = r[t]),
                      i in n
                          ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : L(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var N = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
    },
    j = [],
    V = [];
function B(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? B(Object(r), !0).forEach(function (t) {
                  var n, i, o;
                  (n = e),
                      (i = t),
                      (o = r[t]),
                      i in n
                          ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : B(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function K() {
    var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 1 ? arguments[1] : void 0;
    return {
        dirtyHandlerIds: (function () {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var e,
                t,
                r,
                n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
                case d:
                    break;
                case M:
                case I:
                case D:
                case R:
                    return j;
                default:
                    return V;
            }
            var i = n.payload,
                o = i.targetIds,
                a = void 0 === o ? [] : o,
                s = i.prevTargetIds,
                l = void 0 === s ? [] : s,
                u =
                    ((e = new Map()),
                    (t = function (t) {
                        e.set(t, e.has(t) ? e.get(t) + 1 : 1);
                    }),
                    a.forEach(t),
                    l.forEach(t),
                    (r = []),
                    e.forEach(function (e, t) {
                        1 === e && r.push(t);
                    }),
                    r);
            if (
                !(
                    u.length > 0 ||
                    !(function (e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; ++n) if (!r(e[n], t[n])) return !1;
                        return !0;
                    })(a, l)
                )
            )
                return j;
            var c = l[l.length - 1],
                f = a[a.length - 1];
            return c !== f && (c && u.push(c), f && u.push(f)), u;
        })(t.dirtyHandlerIds, {
            type: r.type,
            payload: U(
                U({}, r.payload),
                {},
                {
                    prevTargetIds:
                        ((e = []),
                        "dragOperation.targetIds".split(".").reduce(function (t, r) {
                            return t && t[r] ? t[r] : e || null;
                        }, t)),
                },
            ),
        }),
        dragOffset: (function () {
            var e,
                t,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = n.payload;
            switch (n.type) {
                case u:
                case c:
                    return {
                        initialSourceClientOffset: i.sourceClientOffset,
                        initialClientOffset: i.clientOffset,
                        clientOffset: i.clientOffset,
                    };
                case d:
                    if (
                        ((e = r.clientOffset),
                        (t = i.clientOffset),
                        (!e && !t) || (e && t && e.x === t.x && e.y === t.y))
                    )
                        return r;
                    return A(A({}, r), {}, { clientOffset: i.clientOffset });
                case h:
                case p:
                    return O;
                default:
                    return r;
            }
        })(t.dragOffset, r),
        refCount: (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case M:
                case I:
                    return e + 1;
                case R:
                case D:
                    return e - 1;
                default:
                    return e;
            }
        })(t.refCount, r),
        dragOperation: (function () {
            var e,
                t,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = n.payload;
            switch (n.type) {
                case c:
                    return F(
                        F({}, r),
                        {},
                        {
                            itemType: i.itemType,
                            item: i.item,
                            sourceId: i.sourceId,
                            isSourcePublic: i.isSourcePublic,
                            dropResult: null,
                            didDrop: !1,
                        },
                    );
                case f:
                    return F(F({}, r), {}, { isSourcePublic: !0 });
                case d:
                    return F(F({}, r), {}, { targetIds: i.targetIds });
                case D:
                    if (-1 === r.targetIds.indexOf(i.targetId)) return r;
                    return F(
                        F({}, r),
                        {},
                        {
                            targetIds:
                                ((e = r.targetIds),
                                (t = i.targetId),
                                e.filter(function (e) {
                                    return e !== t;
                                })),
                        },
                    );
                case p:
                    return F(F({}, r), {}, { dropResult: i.dropResult, didDrop: !0, targetIds: [] });
                case h:
                    return F(
                        F({}, r),
                        {},
                        {
                            itemType: null,
                            item: null,
                            sourceId: null,
                            dropResult: null,
                            didDrop: !1,
                            isSourcePublic: null,
                            targetIds: [],
                        },
                    );
                default:
                    return r;
            }
        })(t.dragOperation, r),
        stateId: (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e + 1;
        })(t.stateId),
    };
}
function $(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
(j.__IS_NONE__ = !0), (V.__IS_ALL__ = !0);
var z = (function () {
        var e;
        function t(e, r) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (this.store = e), (this.registry = r);
        }
        return (
            (e = [
                {
                    key: "subscribeToStateChange",
                    value: function (e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { handlerIds: void 0 },
                            n = r.handlerIds;
                        (0, l.V)("function" == typeof e, "listener must be a function."),
                            (0, l.V)(
                                void 0 === n || Array.isArray(n),
                                "handlerIds, when specified, must be an array of strings.",
                            );
                        var i = this.store.getState().stateId;
                        return this.store.subscribe(function () {
                            var r = t.store.getState(),
                                o = r.stateId;
                            try {
                                o === i ||
                                    (o === i + 1 &&
                                        !(function (e, t) {
                                            return (
                                                e !== j &&
                                                (e === V ||
                                                    void 0 === t ||
                                                    t.filter(function (t) {
                                                        return e.indexOf(t) > -1;
                                                    }).length > 0)
                                            );
                                        })(r.dirtyHandlerIds, n)) ||
                                    e();
                            } finally {
                                i = o;
                            }
                        });
                    },
                },
                {
                    key: "subscribeToOffsetChange",
                    value: function (e) {
                        var t = this;
                        (0, l.V)("function" == typeof e, "listener must be a function.");
                        var r = this.store.getState().dragOffset;
                        return this.store.subscribe(function () {
                            var n = t.store.getState().dragOffset;
                            n !== r && ((r = n), e());
                        });
                    },
                },
                {
                    key: "canDragSource",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getSource(e);
                        return (
                            (0, l.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
                            !this.isDragging() && t.canDrag(this, e)
                        );
                    },
                },
                {
                    key: "canDropOnTarget",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getTarget(e);
                        return (
                            (0, l.V)(t, "Expected to find a valid target. targetId=".concat(e)),
                            !(!this.isDragging() || this.didDrop()) &&
                                b(this.registry.getTargetType(e), this.getItemType()) &&
                                t.canDrop(this, e)
                        );
                    },
                },
                {
                    key: "isDragging",
                    value: function () {
                        return !!this.getItemType();
                    },
                },
                {
                    key: "isDraggingSource",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getSource(e, !0);
                        return (
                            (0, l.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
                            !!this.isDragging() &&
                                !!this.isSourcePublic() &&
                                this.registry.getSourceType(e) === this.getItemType() &&
                                t.isDragging(this, e)
                        );
                    },
                },
                {
                    key: "isOverTarget",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shallow: !1 };
                        if (!e) return !1;
                        var r = t.shallow;
                        if (!this.isDragging()) return !1;
                        var n = this.registry.getTargetType(e),
                            i = this.getItemType();
                        if (i && !b(n, i)) return !1;
                        var o = this.getTargetIds();
                        if (!o.length) return !1;
                        var a = o.indexOf(e);
                        return r ? a === o.length - 1 : a > -1;
                    },
                },
                {
                    key: "getItemType",
                    value: function () {
                        return this.store.getState().dragOperation.itemType;
                    },
                },
                {
                    key: "getItem",
                    value: function () {
                        return this.store.getState().dragOperation.item;
                    },
                },
                {
                    key: "getSourceId",
                    value: function () {
                        return this.store.getState().dragOperation.sourceId;
                    },
                },
                {
                    key: "getTargetIds",
                    value: function () {
                        return this.store.getState().dragOperation.targetIds;
                    },
                },
                {
                    key: "getDropResult",
                    value: function () {
                        return this.store.getState().dragOperation.dropResult;
                    },
                },
                {
                    key: "didDrop",
                    value: function () {
                        return this.store.getState().dragOperation.didDrop;
                    },
                },
                {
                    key: "isSourcePublic",
                    value: function () {
                        return !!this.store.getState().dragOperation.isSourcePublic;
                    },
                },
                {
                    key: "getInitialClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.initialClientOffset;
                    },
                },
                {
                    key: "getInitialSourceClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.initialSourceClientOffset;
                    },
                },
                {
                    key: "getClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.clientOffset;
                    },
                },
                {
                    key: "getSourceClientOffset",
                    value: function () {
                        return (function (e) {
                            var t = e.clientOffset,
                                r = e.initialClientOffset,
                                n = e.initialSourceClientOffset;
                            return t && r && n ? $({ x: t.x + n.x, y: t.y + n.y }, r) : null;
                        })(this.store.getState().dragOffset);
                    },
                },
                {
                    key: "getDifferenceFromInitialOffset",
                    value: function () {
                        var e, t, r;
                        return (
                            (t = (e = this.store.getState().dragOffset).clientOffset),
                            (r = e.initialClientOffset),
                            t && r ? $(t, r) : null
                        );
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })(),
    W = 0;
function H(e) {
    return (H =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function G(e, t) {
    t && Array.isArray(e)
        ? e.forEach(function (e) {
              return G(e, !1);
          })
        : (0, l.V)(
              "string" == typeof e || "symbol" === H(e),
              t
                  ? "Type can only be a string, a symbol, or an array of either."
                  : "Type can only be a string or a symbol.",
          );
}
((i = o || (o = {})).SOURCE = "SOURCE"), (i.TARGET = "TARGET");
let q = "u" > typeof global ? global : self,
    Y = q.MutationObserver || q.WebKitMutationObserver;
function X(e) {
    return function () {
        let t = setTimeout(n, 0),
            r = setInterval(n, 50);
        function n() {
            clearTimeout(t), clearInterval(r), e();
        }
    };
}
let J =
    "function" == typeof Y
        ? function (e) {
              let t = 1,
                  r = new Y(e),
                  n = document.createTextNode("");
              return (
                  r.observe(n, { characterData: !0 }),
                  function () {
                      n.data = t = -t;
                  }
              );
          }
        : X;
class Q {
    call() {
        try {
            this.task && this.task();
        } catch (e) {
            this.onError(e);
        } finally {
            (this.task = null), this.release(this);
        }
    }
    constructor(e, t) {
        (this.onError = e), (this.release = t), (this.task = null);
    }
}
let Z = new (class {
        enqueueTask(e) {
            let { queue: t, requestFlush: r } = this;
            t.length || (r(), (this.flushing = !0)), (t[t.length] = e);
        }
        constructor() {
            (this.queue = []),
                (this.pendingErrors = []),
                (this.flushing = !1),
                (this.index = 0),
                (this.capacity = 1024),
                (this.flush = () => {
                    let { queue: e } = this;
                    for (; this.index < e.length; ) {
                        let t = this.index;
                        if ((this.index++, e[t].call(), this.index > this.capacity)) {
                            for (let t = 0, r = e.length - this.index; t < r; t++) e[t] = e[t + this.index];
                            (e.length -= this.index), (this.index = 0);
                        }
                    }
                    (e.length = 0), (this.index = 0), (this.flushing = !1);
                }),
                (this.registerPendingError = (e) => {
                    this.pendingErrors.push(e), this.requestErrorThrow();
                }),
                (this.requestFlush = J(this.flush)),
                (this.requestErrorThrow = X(() => {
                    if (this.pendingErrors.length) throw this.pendingErrors.shift();
                }));
        }
    })(),
    ee = new (class {
        create(e) {
            let t = this.freeTasks,
                r = t.length ? t.pop() : new Q(this.onError, (e) => (t[t.length] = e));
            return (r.task = e), r;
        }
        constructor(e) {
            (this.onError = e), (this.freeTasks = []);
        }
    })(Z.registerPendingError);
function et(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function er(e) {
    switch (e[0]) {
        case "S":
            return o.SOURCE;
        case "T":
            return o.TARGET;
        default:
            (0, l.V)(!1, "Cannot parse handler ID: ".concat(e));
    }
}
function en(e, t) {
    var r = e.entries(),
        n = !1;
    do {
        var i,
            o = r.next(),
            a = o.done;
        if (
            ((function (e) {
                if (Array.isArray(e)) return e;
            })((i = o.value)) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (
                                var o, a = e[Symbol.iterator]();
                                !(r = (o = a.next()).done) && (t.push(o.value), 2 !== t.length);
                                r = !0
                            );
                        } catch (e) {
                            (n = !0), (i = e);
                        } finally {
                            try {
                                r || null == a.return || a.return();
                            } finally {
                                if (n) throw i;
                            }
                        }
                        return t;
                    }
                })(i) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return et(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return et(e, 2);
                    }
                })(i) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })())[1] === t
        )
            return !0;
        n = !!a;
    } while (!n);
    return !1;
}
var ei = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (this.types = new Map()),
                (this.dragSources = new Map()),
                (this.dropTargets = new Map()),
                (this.pinnedSourceId = null),
                (this.pinnedSource = null),
                (this.store = e);
        }
        return (
            (e = [
                {
                    key: "addSource",
                    value: function (e, t) {
                        G(e),
                            (0, l.V)("function" == typeof t.canDrag, "Expected canDrag to be a function."),
                            (0, l.V)("function" == typeof t.beginDrag, "Expected beginDrag to be a function."),
                            (0, l.V)("function" == typeof t.endDrag, "Expected endDrag to be a function.");
                        var r = this.addHandler(o.SOURCE, e, t);
                        return this.store.dispatch({ type: M, payload: { sourceId: r } }), r;
                    },
                },
                {
                    key: "addTarget",
                    value: function (e, t) {
                        G(e, !0),
                            (0, l.V)("function" == typeof t.canDrop, "Expected canDrop to be a function."),
                            (0, l.V)("function" == typeof t.hover, "Expected hover to be a function."),
                            (0, l.V)("function" == typeof t.drop, "Expected beginDrag to be a function.");
                        var r = this.addHandler(o.TARGET, e, t);
                        return this.store.dispatch({ type: I, payload: { targetId: r } }), r;
                    },
                },
                {
                    key: "containsHandler",
                    value: function (e) {
                        return en(this.dragSources, e) || en(this.dropTargets, e);
                    },
                },
                {
                    key: "getSource",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (
                            (0, l.V)(this.isSourceId(e), "Expected a valid source ID."),
                            t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e)
                        );
                    },
                },
                {
                    key: "getTarget",
                    value: function (e) {
                        return (0, l.V)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
                    },
                },
                {
                    key: "getSourceType",
                    value: function (e) {
                        return (0, l.V)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
                    },
                },
                {
                    key: "getTargetType",
                    value: function (e) {
                        return (0, l.V)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
                    },
                },
                {
                    key: "isSourceId",
                    value: function (e) {
                        return er(e) === o.SOURCE;
                    },
                },
                {
                    key: "isTargetId",
                    value: function (e) {
                        return er(e) === o.TARGET;
                    },
                },
                {
                    key: "removeSource",
                    value: function (e) {
                        var t = this;
                        (0, l.V)(this.getSource(e), "Expected an existing source."),
                            this.store.dispatch({ type: R, payload: { sourceId: e } }),
                            Z.enqueueTask(
                                ee.create(function () {
                                    t.dragSources.delete(e), t.types.delete(e);
                                }),
                            );
                    },
                },
                {
                    key: "removeTarget",
                    value: function (e) {
                        (0, l.V)(this.getTarget(e), "Expected an existing target."),
                            this.store.dispatch({ type: D, payload: { targetId: e } }),
                            this.dropTargets.delete(e),
                            this.types.delete(e);
                    },
                },
                {
                    key: "pinSource",
                    value: function (e) {
                        var t = this.getSource(e);
                        (0, l.V)(t, "Expected an existing source."), (this.pinnedSourceId = e), (this.pinnedSource = t);
                    },
                },
                {
                    key: "unpinSource",
                    value: function () {
                        (0, l.V)(this.pinnedSource, "No source is pinned at the time."),
                            (this.pinnedSourceId = null),
                            (this.pinnedSource = null);
                    },
                },
                {
                    key: "addHandler",
                    value: function (e, t, r) {
                        var n = (function (e) {
                            var t = (W++).toString();
                            switch (e) {
                                case o.SOURCE:
                                    return "S".concat(t);
                                case o.TARGET:
                                    return "T".concat(t);
                                default:
                                    throw Error("Unknown Handler Role: ".concat(e));
                            }
                        })(e);
                        return (
                            this.types.set(n, t),
                            e === o.SOURCE ? this.dragSources.set(n, r) : e === o.TARGET && this.dropTargets.set(n, r),
                            n
                        );
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })(),
    eo = r(75375),
    ea = ["children"];
function es(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var el = 0,
    eu = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
    ec = (0, a.memo)(function (e) {
        var t,
            r,
            n = e.children,
            i =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(
                    (r =
                        "manager" in
                        (t = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                    return i;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++)
                                    (r = o[n]),
                                        !(t.indexOf(r) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                                            (i[r] = e[r]);
                            }
                            return i;
                        })(e, ea))
                            ? [{ dragDropManager: t.manager }, !1]
                            : [
                                  (function (e) {
                                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef(),
                                          r = arguments.length > 2 ? arguments[2] : void 0,
                                          n = arguments.length > 3 ? arguments[3] : void 0;
                                      return (
                                          t[eu] ||
                                              (t[eu] = {
                                                  dragDropManager: (function (e) {
                                                      var t,
                                                          r,
                                                          n =
                                                              arguments.length > 1 && void 0 !== arguments[1]
                                                                  ? arguments[1]
                                                                  : void 0,
                                                          i =
                                                              arguments.length > 2 && void 0 !== arguments[2]
                                                                  ? arguments[2]
                                                                  : {},
                                                          o =
                                                              arguments.length > 3 &&
                                                              void 0 !== arguments[3] &&
                                                              arguments[3],
                                                          a =
                                                              ((t = o),
                                                              (r =
                                                                  "u" > typeof window &&
                                                                  window.__REDUX_DEVTOOLS_EXTENSION__),
                                                              (function e(t, r, n) {
                                                                  if (
                                                                      ("function" == typeof r &&
                                                                          "function" == typeof n) ||
                                                                      ("function" == typeof n &&
                                                                          "function" == typeof arguments[3])
                                                                  )
                                                                      throw Error(E(0));
                                                                  if (
                                                                      ("function" == typeof r &&
                                                                          void 0 === n &&
                                                                          ((n = r), (r = void 0)),
                                                                      void 0 !== n)
                                                                  ) {
                                                                      if ("function" != typeof n) throw Error(E(1));
                                                                      return n(e)(t, r);
                                                                  }
                                                                  if ("function" != typeof t) throw Error(E(2));
                                                                  var i,
                                                                      o = t,
                                                                      a = r,
                                                                      s = [],
                                                                      l = s,
                                                                      u = !1;
                                                                  function c() {
                                                                      l === s && (l = s.slice());
                                                                  }
                                                                  function f() {
                                                                      if (u) throw Error(E(3));
                                                                      return a;
                                                                  }
                                                                  function d(e) {
                                                                      if ("function" != typeof e) throw Error(E(4));
                                                                      if (u) throw Error(E(5));
                                                                      var t = !0;
                                                                      return (
                                                                          c(),
                                                                          l.push(e),
                                                                          function () {
                                                                              if (t) {
                                                                                  if (u) throw Error(E(6));
                                                                                  (t = !1), c();
                                                                                  var r = l.indexOf(e);
                                                                                  l.splice(r, 1), (s = null);
                                                                              }
                                                                          }
                                                                      );
                                                                  }
                                                                  function p(e) {
                                                                      if (
                                                                          !(function (e) {
                                                                              if ("object" != typeof e || null === e)
                                                                                  return !1;
                                                                              for (
                                                                                  var t = e;
                                                                                  null !== Object.getPrototypeOf(t);
                                                                              )
                                                                                  t = Object.getPrototypeOf(t);
                                                                              return Object.getPrototypeOf(e) === t;
                                                                          })(e)
                                                                      )
                                                                          throw Error(E(7));
                                                                      if (void 0 === e.type) throw Error(E(8));
                                                                      if (u) throw Error(E(9));
                                                                      try {
                                                                          (u = !0), (a = o(a, e));
                                                                      } finally {
                                                                          u = !1;
                                                                      }
                                                                      for (var t = (s = l), r = 0; r < t.length; r++)
                                                                          (0, t[r])();
                                                                      return e;
                                                                  }
                                                                  return (
                                                                      p({ type: T.INIT }),
                                                                      ((i = {
                                                                          dispatch: p,
                                                                          subscribe: d,
                                                                          getState: f,
                                                                          replaceReducer: function (e) {
                                                                              if ("function" != typeof e)
                                                                                  throw Error(E(10));
                                                                              (o = e), p({ type: T.REPLACE });
                                                                          },
                                                                      })[S] = function () {
                                                                          var e;
                                                                          return (
                                                                              ((e = {
                                                                                  subscribe: function (e) {
                                                                                      if (
                                                                                          "object" != typeof e ||
                                                                                          null === e
                                                                                      )
                                                                                          throw Error(E(11));
                                                                                      function t() {
                                                                                          e.next && e.next(f());
                                                                                      }
                                                                                      return t(), { unsubscribe: d(t) };
                                                                                  },
                                                                              })[S] = function () {
                                                                                  return this;
                                                                              }),
                                                                              e
                                                                          );
                                                                      }),
                                                                      i
                                                                  );
                                                              })(
                                                                  K,
                                                                  t &&
                                                                      r &&
                                                                      r({ name: "dnd-core", instanceId: "dnd-core" }),
                                                              )),
                                                          s = new z(a, new ei(a)),
                                                          l = new x(a, s),
                                                          u = e(l, n, i);
                                                      return l.receiveBackend(u), l;
                                                  })(e, t, r, n),
                                              }),
                                          t[eu]
                                      );
                                  })(t.backend, t.context, t.options, t.debugMode),
                                  !t.context,
                              ]),
                ) ||
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
                            (a = !0), (r = e);
                        } finally {
                            try {
                                o || null == n.return || n.return();
                            } finally {
                                if (a) throw r;
                            }
                        }
                        return i;
                    }
                })(r) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return es(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return es(e, 2);
                    }
                })(r) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            o = i[0],
            l = i[1];
        return (
            (0, a.useEffect)(function () {
                if (l) {
                    var e = ef();
                    return (
                        ++el,
                        function () {
                            0 == --el && (e[eu] = null);
                        }
                    );
                }
            }, []),
            (0, s.jsx)(eo.M.Provider, Object.assign({ value: o }, { children: n }), void 0)
        );
    });
function ef() {
    return void 0 !== r.g ? r.g : window;
}
function ed(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function ep(e, t) {
    var r,
        n,
        i = eh(e, t, "get");
    return (r = e), (n = i).get ? n.get.call(r) : n.value;
}
function eh(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
var em = new WeakMap();
class eg {
    constructor() {
        !(function (e, t, r) {
            (function (e, t) {
                if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
            })(e, t),
                t.set(e, r);
        })(this, em, { writable: !0, value: void 0 }),
            ed(this, "register", (e) => {
                ep(this, em).push(e);
            }),
            ed(this, "unregister", (e) => {
                let t;
                for (; -1 !== (t = ep(this, em).indexOf(e)); ) ep(this, em).splice(t, 1);
            }),
            ed(this, "backendChanged", (e) => {
                for (let t of ep(this, em)) t.backendChanged(e);
            }),
            (function (e, t, r) {
                var n = eh(e, t, "set"),
                    i = e,
                    o = n,
                    a = r;
                if (o.set) o.set.call(i, a);
                else {
                    if (!o.writable) throw TypeError("attempted to set read only private field");
                    o.value = a;
                }
            })(this, em, []);
    }
}
function ev(e, t, r) {
    (function (e, t) {
        if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
    })(e, t),
        t.set(e, r);
}
function ey(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function eb(e, t) {
    var r,
        n,
        i = e_(e, t, "get");
    return (r = e), (n = i).get ? n.get.call(r) : n.value;
}
function ew(e, t, r) {
    var n = e_(e, t, "set");
    return (
        (function (e, t, r) {
            if (t.set) t.set.call(e, r);
            else {
                if (!t.writable) throw TypeError("attempted to set read only private field");
                t.value = r;
            }
        })(e, n, r),
        r
    );
}
function e_(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
var ex = new WeakMap(),
    eE = new WeakMap(),
    eS = new WeakMap(),
    ek = new WeakMap(),
    eT = new WeakMap(),
    eC = new WeakMap(),
    eP = new WeakMap(),
    eA = new WeakMap(),
    eO = new WeakMap(),
    eM = new WeakMap(),
    eI = new WeakMap();
class eR {
    constructor(e, t, r) {
        if (
            (ev(this, ex, { writable: !0, value: void 0 }),
            ev(this, eE, { writable: !0, value: void 0 }),
            ev(this, eS, { writable: !0, value: void 0 }),
            ev(this, ek, { writable: !0, value: void 0 }),
            ev(this, eT, { writable: !0, value: void 0 }),
            ev(this, eC, {
                writable: !0,
                value: (e, t, r) => {
                    var n, i;
                    if (!r.backend)
                        throw Error(
                            "You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(r)),
                        );
                    let o = r.backend(e, t, r.options),
                        a = r.id,
                        s = !r.id && o && o.constructor;
                    if ((s && (a = o.constructor.name), a))
                        s &&
                            console.warn(
                                "Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.",
                            );
                    else
                        throw Error(
                            "You must specify an 'id' property in your Backend entry: ".concat(
                                JSON.stringify(r),
                                "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx",
                            ),
                        );
                    if (eb(this, eS)[a])
                        throw Error(
                            "You must specify a unique 'id' property in your Backend entry:\n        "
                                .concat(JSON.stringify(r), " (conflicts with: ")
                                .concat(JSON.stringify(eb(this, eS)[a]), ")"),
                        );
                    return {
                        id: a,
                        instance: o,
                        preview: null != (n = r.preview) && n,
                        transition: r.transition,
                        skipDispatchOnTransition: null != (i = r.skipDispatchOnTransition) && i,
                    };
                },
            }),
            ey(this, "setup", () => {
                if ("u" > typeof window) {
                    if (eR.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                    (eR.isSetUp = !0), eb(this, eP).call(this, window), eb(this, eS)[eb(this, ex)].instance.setup();
                }
            }),
            ey(this, "teardown", () => {
                "u" > typeof window &&
                    ((eR.isSetUp = !1),
                    eb(this, eA).call(this, window),
                    eb(this, eS)[eb(this, ex)].instance.teardown());
            }),
            ey(this, "connectDragSource", (e, t, r) => eb(this, eI).call(this, "connectDragSource", e, t, r)),
            ey(this, "connectDragPreview", (e, t, r) => eb(this, eI).call(this, "connectDragPreview", e, t, r)),
            ey(this, "connectDropTarget", (e, t, r) => eb(this, eI).call(this, "connectDropTarget", e, t, r)),
            ey(this, "profile", () => eb(this, eS)[eb(this, ex)].instance.profile()),
            ey(this, "previewEnabled", () => eb(this, eS)[eb(this, ex)].preview),
            ey(this, "previewsList", () => eb(this, eE)),
            ey(this, "backendsList", () => eb(this, ek)),
            ev(this, eP, {
                writable: !0,
                value: (e) => {
                    eb(this, ek).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, eb(this, eO));
                    });
                },
            }),
            ev(this, eA, {
                writable: !0,
                value: (e) => {
                    eb(this, ek).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, eb(this, eO));
                    });
                },
            }),
            ev(this, eO, {
                writable: !0,
                value: (e) => {
                    let t = eb(this, ex);
                    if (
                        (eb(this, ek).some(
                            (t) =>
                                !!(t.id !== eb(this, ex) && t.transition && t.transition.check(e)) &&
                                (ew(this, ex, t.id), !0),
                        ),
                        eb(this, ex) !== t)
                    ) {
                        var r;
                        eb(this, eS)[t].instance.teardown(),
                            Object.keys(eb(this, eT)).forEach((e) => {
                                let t = eb(this, eT)[e];
                                t.unsubscribe(), (t.unsubscribe = eb(this, eM).call(this, t.func, ...t.args));
                            }),
                            eb(this, eE).backendChanged(this);
                        let n = eb(this, eS)[eb(this, ex)];
                        if ((n.instance.setup(), n.skipDispatchOnTransition)) return;
                        let i = new e.constructor(e.type, e);
                        null == (r = e.target) || r.dispatchEvent(i);
                    }
                },
            }),
            ev(this, eM, { writable: !0, value: (e, t, r, n) => eb(this, eS)[eb(this, ex)].instance[e](t, r, n) }),
            ev(this, eI, {
                writable: !0,
                value: (e, t, r, n) => {
                    let i = "".concat(e, "_").concat(t),
                        o = eb(this, eM).call(this, e, t, r, n);
                    return (
                        (eb(this, eT)[i] = { func: e, args: [t, r, n], unsubscribe: o }),
                        () => {
                            eb(this, eT)[i].unsubscribe(), delete eb(this, eT)[i];
                        }
                    );
                },
            }),
            !r || !r.backends || r.backends.length < 1)
        )
            throw Error(
                "You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx",
            );
        ew(this, eE, new eg()),
            ew(this, eS, {}),
            ew(this, ek, []),
            r.backends.forEach((r) => {
                let n = eb(this, eC).call(this, e, t, r);
                (eb(this, eS)[n.id] = n), eb(this, ek).push(n);
            }),
            ew(this, ex, eb(this, ek)[0].id),
            ew(this, eT, {});
    }
}
ey(eR, "isSetUp", !1);
let eD = (e, t, r) => new eR(e, t, r);
function eL() {
    return (eL =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function eF(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var eN = (0, a.createContext)(null),
    ej = function (e) {
        var t,
            r = e.portal,
            n = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            i = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                }
                return i;
            })(e, ["portal"]),
            i =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })((t = (0, a.useState)(null))) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (
                                var o, a = e[Symbol.iterator]();
                                !(r = (o = a.next()).done) && (t.push(o.value), 2 !== t.length);
                                r = !0
                            );
                        } catch (e) {
                            (n = !0), (i = e);
                        } finally {
                            try {
                                r || null == a.return || a.return();
                            } finally {
                                if (n) throw i;
                            }
                        }
                        return t;
                    }
                })(t) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return eF(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eF(e, 2);
                    }
                })(t) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            o = i[0],
            s = i[1];
        return a.createElement(
            eN.Provider,
            { value: null != r ? r : o },
            a.createElement(ec, eL({ backend: eD }, n)),
            r ? null : a.createElement("div", { ref: s }),
        );
    },
    eV = (r(340287), r(688807));
