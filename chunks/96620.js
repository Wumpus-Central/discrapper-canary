"use strict";
r.d(t, { QP: () => eN, eV: () => n });
let n = (e, t) => ({ event: e, check: t });
var s,
    a,
    o = r(64700),
    i = r(627968),
    u = r(321733),
    c = "dnd-core/INIT_COORDS",
    l = "dnd-core/BEGIN_DRAG",
    d = "dnd-core/PUBLISH_DRAG_SOURCE",
    f = "dnd-core/HOVER",
    p = "dnd-core/DROP",
    h = "dnd-core/END_DRAG";
function m(e, t) {
    return { type: c, payload: { sourceClientOffset: t || null, clientOffset: e || null } };
}
function v(e) {
    return (v =
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
function g(e) {
    return "object" === v(e);
}
var y = { type: c, payload: { clientOffset: null, sourceClientOffset: null } };
function b(e, t) {
    return null === t
        ? null === e
        : Array.isArray(e)
          ? e.some(function (e) {
                return e === t;
            })
          : e === t;
}
function _(e, t) {
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? _(Object(r), !0).forEach(function (t) {
                  var n, s, a;
                  (n = e),
                      (s = t),
                      (a = r[t]),
                      s in n
                          ? Object.defineProperty(n, s, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[s] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : _(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var w = (function () {
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
                        s,
                        a = this,
                        o = this.store.dispatch,
                        i = {
                            beginDrag:
                                ((e = this),
                                function () {
                                    var t,
                                        r,
                                        n,
                                        s,
                                        a,
                                        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        i =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : { publishSource: !0 },
                                        c = i.publishSource,
                                        d = i.clientOffset,
                                        f = i.getSourceClientOffset,
                                        p = e.getMonitor(),
                                        h = e.getRegistry();
                                    e.dispatch(m(d)),
                                        (t = o),
                                        (r = p),
                                        (n = h),
                                        (0, u.V)(!r.isDragging(), "Cannot call beginDrag while dragging."),
                                        t.forEach(function (e) {
                                            (0, u.V)(n.getSource(e), "Expected sourceIds to be registered.");
                                        });
                                    var v = (function (e, t) {
                                        for (var r = null, n = e.length - 1; n >= 0; n--)
                                            if (t.canDragSource(e[n])) {
                                                r = e[n];
                                                break;
                                            }
                                        return r;
                                    })(o, p);
                                    if (null === v) return void e.dispatch(y);
                                    var b = null;
                                    if (d) {
                                        if (!f) throw Error("getSourceClientOffset must be defined");
                                        (s = f),
                                            (0, u.V)(
                                                "function" == typeof s,
                                                "When clientOffset is provided, getSourceClientOffset must be a function.",
                                            ),
                                            (b = f(v));
                                    }
                                    e.dispatch(m(d, b));
                                    var _ = h.getSource(v).beginDrag(p, v);
                                    if (null != _) {
                                        return (
                                            (a = _),
                                            (0, u.V)(g(a), "Item must be an object."),
                                            h.pinSource(v),
                                            {
                                                type: l,
                                                payload: {
                                                    itemType: h.getSourceType(v),
                                                    item: _,
                                                    sourceId: v,
                                                    clientOffset: d || null,
                                                    sourceClientOffset: b || null,
                                                    isSourcePublic: !!(void 0 === c || c),
                                                },
                                            }
                                        );
                                    }
                                }),
                            publishDragSource:
                                ((t = this),
                                function () {
                                    if (t.getMonitor().isDragging()) return { type: d };
                                }),
                            hover:
                                ((r = this),
                                function (e) {
                                    var t,
                                        n,
                                        s,
                                        a,
                                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        i = o.clientOffset;
                                    (t = e), (0, u.V)(Array.isArray(t), "Expected targetIds to be an array.");
                                    var c = e.slice(0),
                                        l = r.getMonitor(),
                                        d = r.getRegistry();
                                    return (
                                        (function (e, t, r) {
                                            (0, u.V)(t.isDragging(), "Cannot call hover while not dragging."),
                                                (0, u.V)(!t.didDrop(), "Cannot call hover after drop.");
                                            for (var n = 0; n < e.length; n++) {
                                                var s = e[n];
                                                (0, u.V)(
                                                    e.lastIndexOf(s) === n,
                                                    "Expected targetIds to be unique in the passed array.",
                                                );
                                                var a = r.getTarget(s);
                                                (0, u.V)(a, "Expected targetIds to be registered.");
                                            }
                                        })(c, l, d),
                                        (function (e, t, r) {
                                            for (var n = e.length - 1; n >= 0; n--) {
                                                var s = e[n];
                                                b(t.getTargetType(s), r) || e.splice(n, 1);
                                            }
                                        })(c, d, l.getItemType()),
                                        (n = c),
                                        (s = l),
                                        (a = d),
                                        n.forEach(function (e) {
                                            a.getTarget(e).hover(s, e);
                                        }),
                                        { type: f, payload: { targetIds: c, clientOffset: i || null } }
                                    );
                                }),
                            drop:
                                ((n = this),
                                function () {
                                    var e,
                                        t,
                                        r,
                                        s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        a = n.getMonitor(),
                                        o = n.getRegistry();
                                    (e = a),
                                        (0, u.V)(e.isDragging(), "Cannot call drop while not dragging."),
                                        (0, u.V)(!e.didDrop(), "Cannot call drop twice during one drag operation."),
                                        ((r = (t = a).getTargetIds().filter(t.canDropOnTarget, t)).reverse(),
                                        r).forEach(function (e, t) {
                                            var r,
                                                i,
                                                c,
                                                l,
                                                d,
                                                f,
                                                h,
                                                m =
                                                    ((r = e),
                                                    (i = t),
                                                    (c = o),
                                                    (l = a),
                                                    (h = f = (d = c.getTarget(r)) ? d.drop(l, r) : void 0),
                                                    (0, u.V)(
                                                        void 0 === h || g(h),
                                                        "Drop result must either be an object or undefined.",
                                                    ),
                                                    void 0 === f && (f = 0 === i ? {} : l.getDropResult()),
                                                    f),
                                                v = { type: p, payload: { dropResult: x(x({}, s), m) } };
                                            n.dispatch(v);
                                        });
                                }),
                            endDrag:
                                ((s = this),
                                function () {
                                    var e,
                                        t = s.getMonitor(),
                                        r = s.getRegistry();
                                    (e = t), (0, u.V)(e.isDragging(), "Cannot call endDrag while not dragging.");
                                    var n = t.getSourceId();
                                    return (
                                        null != n && (r.getSource(n, !0).endDrag(t, n), r.unpinSource()), { type: h }
                                    );
                                }),
                        };
                    return Object.keys(i).reduce(function (e, t) {
                        var r = i[t];
                        return (
                            (e[t] = function () {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                var s = r.apply(a, t);
                                void 0 !== s && o(s);
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
function k(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
r(416886);
var M = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
    S = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    L = {
        INIT: "@@redux/INIT" + S(),
        REPLACE: "@@redux/REPLACE" + S(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + S();
        },
    },
    T = function (e, t) {
        return e === t;
    };
function E(e, t) {
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
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? E(Object(r), !0).forEach(function (t) {
                  var n, s, a;
                  (n = e),
                      (s = t),
                      (a = r[t]),
                      s in n
                          ? Object.defineProperty(n, s, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[s] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : E(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var C = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null },
    O = "dnd-core/ADD_SOURCE",
    P = "dnd-core/ADD_TARGET",
    A = "dnd-core/REMOVE_SOURCE",
    j = "dnd-core/REMOVE_TARGET";
function R(e, t) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? R(Object(r), !0).forEach(function (t) {
                  var n, s, a;
                  (n = e),
                      (s = t),
                      (a = r[t]),
                      s in n
                          ? Object.defineProperty(n, s, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[s] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : R(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var Y = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
    },
    N = [],
    F = [];
function H(e, t) {
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
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? H(Object(r), !0).forEach(function (t) {
                  var n, s, a;
                  (n = e),
                      (s = t),
                      (a = r[t]),
                      s in n
                          ? Object.defineProperty(n, s, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[s] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : H(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function B() {
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
                case f:
                    break;
                case O:
                case P:
                case j:
                case A:
                    return N;
                default:
                    return F;
            }
            var s = n.payload,
                a = s.targetIds,
                o = void 0 === a ? [] : a,
                i = s.prevTargetIds,
                u = void 0 === i ? [] : i,
                c =
                    ((e = new Map()),
                    (t = function (t) {
                        e.set(t, e.has(t) ? e.get(t) + 1 : 1);
                    }),
                    o.forEach(t),
                    u.forEach(t),
                    (r = []),
                    e.forEach(function (e, t) {
                        1 === e && r.push(t);
                    }),
                    r);
            if (
                !(
                    c.length > 0 ||
                    !(function (e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; ++n) if (!r(e[n], t[n])) return !1;
                        return !0;
                    })(o, u)
                )
            )
                return N;
            var l = u[u.length - 1],
                d = o[o.length - 1];
            return l !== d && (l && c.push(l), d && c.push(d)), c;
        })(t.dirtyHandlerIds, {
            type: r.type,
            payload: z(
                z({}, r.payload),
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
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
                n = arguments.length > 1 ? arguments[1] : void 0,
                s = n.payload;
            switch (n.type) {
                case c:
                case l:
                    return {
                        initialSourceClientOffset: s.sourceClientOffset,
                        initialClientOffset: s.clientOffset,
                        clientOffset: s.clientOffset,
                    };
                case f:
                    if (
                        ((e = r.clientOffset),
                        (t = s.clientOffset),
                        (!e && !t) || (e && t && e.x === t.x && e.y === t.y))
                    )
                        return r;
                    return D(D({}, r), {}, { clientOffset: s.clientOffset });
                case h:
                case p:
                    return C;
                default:
                    return r;
            }
        })(t.dragOffset, r),
        refCount: (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case O:
                case P:
                    return e + 1;
                case A:
                case j:
                    return e - 1;
                default:
                    return e;
            }
        })(t.refCount, r),
        dragOperation: (function () {
            var e,
                t,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
                n = arguments.length > 1 ? arguments[1] : void 0,
                s = n.payload;
            switch (n.type) {
                case l:
                    return I(
                        I({}, r),
                        {},
                        {
                            itemType: s.itemType,
                            item: s.item,
                            sourceId: s.sourceId,
                            isSourcePublic: s.isSourcePublic,
                            dropResult: null,
                            didDrop: !1,
                        },
                    );
                case d:
                    return I(I({}, r), {}, { isSourcePublic: !0 });
                case f:
                    return I(I({}, r), {}, { targetIds: s.targetIds });
                case j:
                    if (-1 === r.targetIds.indexOf(s.targetId)) return r;
                    return I(
                        I({}, r),
                        {},
                        {
                            targetIds:
                                ((e = r.targetIds),
                                (t = s.targetId),
                                e.filter(function (e) {
                                    return e !== t;
                                })),
                        },
                    );
                case p:
                    return I(I({}, r), {}, { dropResult: s.dropResult, didDrop: !0, targetIds: [] });
                case h:
                    return I(
                        I({}, r),
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
function U(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
(N.__IS_NONE__ = !0), (F.__IS_ALL__ = !0);
var W = (function () {
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
                        (0, u.V)("function" == typeof e, "listener must be a function."),
                            (0, u.V)(
                                void 0 === n || Array.isArray(n),
                                "handlerIds, when specified, must be an array of strings.",
                            );
                        var s = this.store.getState().stateId;
                        return this.store.subscribe(function () {
                            var r = t.store.getState(),
                                a = r.stateId;
                            try {
                                a === s ||
                                    (a === s + 1 &&
                                        !(function (e, t) {
                                            return (
                                                e !== N &&
                                                (e === F ||
                                                    void 0 === t ||
                                                    t.filter(function (t) {
                                                        return e.indexOf(t) > -1;
                                                    }).length > 0)
                                            );
                                        })(r.dirtyHandlerIds, n)) ||
                                    e();
                            } finally {
                                s = a;
                            }
                        });
                    },
                },
                {
                    key: "subscribeToOffsetChange",
                    value: function (e) {
                        var t = this;
                        (0, u.V)("function" == typeof e, "listener must be a function.");
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
                            (0, u.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
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
                            (0, u.V)(t, "Expected to find a valid target. targetId=".concat(e)),
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
                            (0, u.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
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
                            s = this.getItemType();
                        if (s && !b(n, s)) return !1;
                        var a = this.getTargetIds();
                        if (!a.length) return !1;
                        var o = a.indexOf(e);
                        return r ? o === a.length - 1 : o > -1;
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
                            return t && r && n ? U({ x: t.x + n.x, y: t.y + n.y }, r) : null;
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
                            t && r ? U(t, r) : null
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
    $ = 0;
function V(e) {
    return (V =
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
function K(e, t) {
    t && Array.isArray(e)
        ? e.forEach(function (e) {
              return K(e, !1);
          })
        : (0, u.V)(
              "string" == typeof e || "symbol" === V(e),
              t
                  ? "Type can only be a string, a symbol, or an array of either."
                  : "Type can only be a string or a symbol.",
          );
}
((s = a || (a = {})).SOURCE = "SOURCE"), (s.TARGET = "TARGET");
let q = "u" > typeof global ? global : self,
    G = q.MutationObserver || q.WebKitMutationObserver;
function J(e) {
    return function () {
        let t = setTimeout(n, 0),
            r = setInterval(n, 50);
        function n() {
            clearTimeout(t), clearInterval(r), e();
        }
    };
}
let X =
    "function" == typeof G
        ? function (e) {
              let t = 1,
                  r = new G(e),
                  n = document.createTextNode("");
              return (
                  r.observe(n, { characterData: !0 }),
                  function () {
                      n.data = t = -t;
                  }
              );
          }
        : J;
class Z {
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
let Q = new (class {
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
                (this.requestFlush = X(this.flush)),
                (this.requestErrorThrow = J(() => {
                    if (this.pendingErrors.length) throw this.pendingErrors.shift();
                }));
        }
    })(),
    ee = new (class {
        create(e) {
            let t = this.freeTasks,
                r = t.length ? t.pop() : new Z(this.onError, (e) => (t[t.length] = e));
            return (r.task = e), r;
        }
        constructor(e) {
            (this.onError = e), (this.freeTasks = []);
        }
    })(Q.registerPendingError);
function et(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function er(e) {
    switch (e[0]) {
        case "S":
            return a.SOURCE;
        case "T":
            return a.TARGET;
        default:
            (0, u.V)(!1, "Cannot parse handler ID: ".concat(e));
    }
}
function en(e, t) {
    var r = e.entries(),
        n = !1;
    do {
        var s,
            a = r.next(),
            o = a.done;
        if (
            ((function (e) {
                if (Array.isArray(e)) return e;
            })((s = a.value)) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            r = !0,
                            n = !1,
                            s = void 0;
                        try {
                            for (
                                var a, o = e[Symbol.iterator]();
                                !(r = (a = o.next()).done) && (t.push(a.value), 2 !== t.length);
                                r = !0
                            );
                        } catch (e) {
                            (n = !0), (s = e);
                        } finally {
                            try {
                                r || null == o.return || o.return();
                            } finally {
                                if (n) throw s;
                            }
                        }
                        return t;
                    }
                })(s) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return et(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return et(e, 2);
                    }
                })(s) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })())[1] === t
        )
            return !0;
        n = !!o;
    } while (!n);
    return !1;
}
var es = (function () {
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
                        K(e),
                            (0, u.V)("function" == typeof t.canDrag, "Expected canDrag to be a function."),
                            (0, u.V)("function" == typeof t.beginDrag, "Expected beginDrag to be a function."),
                            (0, u.V)("function" == typeof t.endDrag, "Expected endDrag to be a function.");
                        var r = this.addHandler(a.SOURCE, e, t);
                        return this.store.dispatch({ type: O, payload: { sourceId: r } }), r;
                    },
                },
                {
                    key: "addTarget",
                    value: function (e, t) {
                        K(e, !0),
                            (0, u.V)("function" == typeof t.canDrop, "Expected canDrop to be a function."),
                            (0, u.V)("function" == typeof t.hover, "Expected hover to be a function."),
                            (0, u.V)("function" == typeof t.drop, "Expected beginDrag to be a function.");
                        var r = this.addHandler(a.TARGET, e, t);
                        return this.store.dispatch({ type: P, payload: { targetId: r } }), r;
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
                            (0, u.V)(this.isSourceId(e), "Expected a valid source ID."),
                            t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e)
                        );
                    },
                },
                {
                    key: "getTarget",
                    value: function (e) {
                        return (0, u.V)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
                    },
                },
                {
                    key: "getSourceType",
                    value: function (e) {
                        return (0, u.V)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
                    },
                },
                {
                    key: "getTargetType",
                    value: function (e) {
                        return (0, u.V)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
                    },
                },
                {
                    key: "isSourceId",
                    value: function (e) {
                        return er(e) === a.SOURCE;
                    },
                },
                {
                    key: "isTargetId",
                    value: function (e) {
                        return er(e) === a.TARGET;
                    },
                },
                {
                    key: "removeSource",
                    value: function (e) {
                        var t = this;
                        (0, u.V)(this.getSource(e), "Expected an existing source."),
                            this.store.dispatch({ type: A, payload: { sourceId: e } }),
                            Q.enqueueTask(
                                ee.create(function () {
                                    t.dragSources.delete(e), t.types.delete(e);
                                }),
                            );
                    },
                },
                {
                    key: "removeTarget",
                    value: function (e) {
                        (0, u.V)(this.getTarget(e), "Expected an existing target."),
                            this.store.dispatch({ type: j, payload: { targetId: e } }),
                            this.dropTargets.delete(e),
                            this.types.delete(e);
                    },
                },
                {
                    key: "pinSource",
                    value: function (e) {
                        var t = this.getSource(e);
                        (0, u.V)(t, "Expected an existing source."), (this.pinnedSourceId = e), (this.pinnedSource = t);
                    },
                },
                {
                    key: "unpinSource",
                    value: function () {
                        (0, u.V)(this.pinnedSource, "No source is pinned at the time."),
                            (this.pinnedSourceId = null),
                            (this.pinnedSource = null);
                    },
                },
                {
                    key: "addHandler",
                    value: function (e, t, r) {
                        var n = (function (e) {
                            var t = ($++).toString();
                            switch (e) {
                                case a.SOURCE:
                                    return "S".concat(t);
                                case a.TARGET:
                                    return "T".concat(t);
                                default:
                                    throw Error("Unknown Handler Role: ".concat(e));
                            }
                        })(e);
                        return (
                            this.types.set(n, t),
                            e === a.SOURCE ? this.dragSources.set(n, r) : e === a.TARGET && this.dropTargets.set(n, r),
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
    ea = r(75375),
    eo = ["children"];
function ei(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var eu = 0,
    ec = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
    el = (0, o.memo)(function (e) {
        var t,
            r,
            n = e.children,
            s =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(
                    (r =
                        "manager" in
                        (t = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        s = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                                    return s;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < a.length; n++)
                                    (r = a[n]),
                                        !(t.indexOf(r) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                                            (s[r] = e[r]);
                            }
                            return s;
                        })(e, eo))
                            ? [{ dragDropManager: t.manager }, !1]
                            : [
                                  (function (e) {
                                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed(),
                                          r = arguments.length > 2 ? arguments[2] : void 0,
                                          n = arguments.length > 3 ? arguments[3] : void 0;
                                      return (
                                          t[ec] ||
                                              (t[ec] = {
                                                  dragDropManager: (function (e) {
                                                      var t,
                                                          r,
                                                          n =
                                                              arguments.length > 1 && void 0 !== arguments[1]
                                                                  ? arguments[1]
                                                                  : void 0,
                                                          s =
                                                              arguments.length > 2 && void 0 !== arguments[2]
                                                                  ? arguments[2]
                                                                  : {},
                                                          a =
                                                              arguments.length > 3 &&
                                                              void 0 !== arguments[3] &&
                                                              arguments[3],
                                                          o =
                                                              ((t = a),
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
                                                                      throw Error(k(0));
                                                                  if (
                                                                      ("function" == typeof r &&
                                                                          void 0 === n &&
                                                                          ((n = r), (r = void 0)),
                                                                      void 0 !== n)
                                                                  ) {
                                                                      if ("function" != typeof n) throw Error(k(1));
                                                                      return n(e)(t, r);
                                                                  }
                                                                  if ("function" != typeof t) throw Error(k(2));
                                                                  var s,
                                                                      a = t,
                                                                      o = r,
                                                                      i = [],
                                                                      u = i,
                                                                      c = !1;
                                                                  function l() {
                                                                      u === i && (u = i.slice());
                                                                  }
                                                                  function d() {
                                                                      if (c) throw Error(k(3));
                                                                      return o;
                                                                  }
                                                                  function f(e) {
                                                                      if ("function" != typeof e) throw Error(k(4));
                                                                      if (c) throw Error(k(5));
                                                                      var t = !0;
                                                                      return (
                                                                          l(),
                                                                          u.push(e),
                                                                          function () {
                                                                              if (t) {
                                                                                  if (c) throw Error(k(6));
                                                                                  (t = !1), l();
                                                                                  var r = u.indexOf(e);
                                                                                  u.splice(r, 1), (i = null);
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
                                                                          throw Error(k(7));
                                                                      if (void 0 === e.type) throw Error(k(8));
                                                                      if (c) throw Error(k(9));
                                                                      try {
                                                                          (c = !0), (o = a(o, e));
                                                                      } finally {
                                                                          c = !1;
                                                                      }
                                                                      for (var t = (i = u), r = 0; r < t.length; r++)
                                                                          (0, t[r])();
                                                                      return e;
                                                                  }
                                                                  return (
                                                                      p({ type: L.INIT }),
                                                                      ((s = {
                                                                          dispatch: p,
                                                                          subscribe: f,
                                                                          getState: d,
                                                                          replaceReducer: function (e) {
                                                                              if ("function" != typeof e)
                                                                                  throw Error(k(10));
                                                                              (a = e), p({ type: L.REPLACE });
                                                                          },
                                                                      })[M] = function () {
                                                                          var e;
                                                                          return (
                                                                              ((e = {
                                                                                  subscribe: function (e) {
                                                                                      if (
                                                                                          "object" != typeof e ||
                                                                                          null === e
                                                                                      )
                                                                                          throw Error(k(11));
                                                                                      function t() {
                                                                                          e.next && e.next(d());
                                                                                      }
                                                                                      return t(), { unsubscribe: f(t) };
                                                                                  },
                                                                              })[M] = function () {
                                                                                  return this;
                                                                              }),
                                                                              e
                                                                          );
                                                                      }),
                                                                      s
                                                                  );
                                                              })(
                                                                  B,
                                                                  t &&
                                                                      r &&
                                                                      r({ name: "dnd-core", instanceId: "dnd-core" }),
                                                              )),
                                                          i = new W(o, new es(o)),
                                                          u = new w(o, i),
                                                          c = e(u, n, s);
                                                      return u.receiveBackend(c), u;
                                                  })(e, t, r, n),
                                              }),
                                          t[ec]
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
                        var s = [],
                            a = !0,
                            o = !1;
                        try {
                            for (
                                n = n.call(e);
                                !(a = (t = n.next()).done) && (s.push(t.value), 2 !== s.length);
                                a = !0
                            );
                        } catch (e) {
                            (o = !0), (r = e);
                        } finally {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (o) throw r;
                            }
                        }
                        return s;
                    }
                })(r) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return ei(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ei(e, 2);
                    }
                })(r) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            a = s[0],
            u = s[1];
        return (
            (0, o.useEffect)(function () {
                if (u) {
                    var e = ed();
                    return (
                        ++eu,
                        function () {
                            0 == --eu && (e[ec] = null);
                        }
                    );
                }
            }, []),
            (0, i.jsx)(ea.M.Provider, Object.assign({ value: a }, { children: n }), void 0)
        );
    });
function ed() {
    return void 0 !== r.g ? r.g : window;
}
function ef(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function ep(e, t) {
    var r,
        n,
        s = eh(e, t, "get");
    return (r = e), (n = s).get ? n.get.call(r) : n.value;
}
function eh(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
var em = new WeakMap();
class ev {
    constructor() {
        !(function (e, t, r) {
            (function (e, t) {
                if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
            })(e, t),
                t.set(e, r);
        })(this, em, { writable: !0, value: void 0 }),
            ef(this, "register", (e) => {
                ep(this, em).push(e);
            }),
            ef(this, "unregister", (e) => {
                let t;
                for (; -1 !== (t = ep(this, em).indexOf(e)); ) ep(this, em).splice(t, 1);
            }),
            ef(this, "backendChanged", (e) => {
                for (let t of ep(this, em)) t.backendChanged(e);
            }),
            (function (e, t, r) {
                var n = eh(e, t, "set"),
                    s = e,
                    a = n,
                    o = r;
                if (a.set) a.set.call(s, o);
                else {
                    if (!a.writable) throw TypeError("attempted to set read only private field");
                    a.value = o;
                }
            })(this, em, []);
    }
}
function eg(e, t, r) {
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
        s = ex(e, t, "get");
    return (r = e), (n = s).get ? n.get.call(r) : n.value;
}
function e_(e, t, r) {
    var n = ex(e, t, "set");
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
function ex(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
var ew = new WeakMap(),
    ek = new WeakMap(),
    eM = new WeakMap(),
    eS = new WeakMap(),
    eL = new WeakMap(),
    eT = new WeakMap(),
    eE = new WeakMap(),
    eD = new WeakMap(),
    eC = new WeakMap(),
    eO = new WeakMap(),
    eP = new WeakMap();
class eA {
    constructor(e, t, r) {
        if (
            (eg(this, ew, { writable: !0, value: void 0 }),
            eg(this, ek, { writable: !0, value: void 0 }),
            eg(this, eM, { writable: !0, value: void 0 }),
            eg(this, eS, { writable: !0, value: void 0 }),
            eg(this, eL, { writable: !0, value: void 0 }),
            eg(this, eT, {
                writable: !0,
                value: (e, t, r) => {
                    var n, s;
                    if (!r.backend)
                        throw Error(
                            "You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(r)),
                        );
                    let a = r.backend(e, t, r.options),
                        o = r.id,
                        i = !r.id && a && a.constructor;
                    if ((i && (o = a.constructor.name), o))
                        i &&
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
                    if (eb(this, eM)[o])
                        throw Error(
                            "You must specify a unique 'id' property in your Backend entry:\n        "
                                .concat(JSON.stringify(r), " (conflicts with: ")
                                .concat(JSON.stringify(eb(this, eM)[o]), ")"),
                        );
                    return {
                        id: o,
                        instance: a,
                        preview: null != (n = r.preview) && n,
                        transition: r.transition,
                        skipDispatchOnTransition: null != (s = r.skipDispatchOnTransition) && s,
                    };
                },
            }),
            ey(this, "setup", () => {
                if ("u" > typeof window) {
                    if (eA.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                    (eA.isSetUp = !0), eb(this, eE).call(this, window), eb(this, eM)[eb(this, ew)].instance.setup();
                }
            }),
            ey(this, "teardown", () => {
                "u" > typeof window &&
                    ((eA.isSetUp = !1),
                    eb(this, eD).call(this, window),
                    eb(this, eM)[eb(this, ew)].instance.teardown());
            }),
            ey(this, "connectDragSource", (e, t, r) => eb(this, eP).call(this, "connectDragSource", e, t, r)),
            ey(this, "connectDragPreview", (e, t, r) => eb(this, eP).call(this, "connectDragPreview", e, t, r)),
            ey(this, "connectDropTarget", (e, t, r) => eb(this, eP).call(this, "connectDropTarget", e, t, r)),
            ey(this, "profile", () => eb(this, eM)[eb(this, ew)].instance.profile()),
            ey(this, "previewEnabled", () => eb(this, eM)[eb(this, ew)].preview),
            ey(this, "previewsList", () => eb(this, ek)),
            ey(this, "backendsList", () => eb(this, eS)),
            eg(this, eE, {
                writable: !0,
                value: (e) => {
                    eb(this, eS).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, eb(this, eC));
                    });
                },
            }),
            eg(this, eD, {
                writable: !0,
                value: (e) => {
                    eb(this, eS).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, eb(this, eC));
                    });
                },
            }),
            eg(this, eC, {
                writable: !0,
                value: (e) => {
                    let t = eb(this, ew);
                    if (
                        (eb(this, eS).some(
                            (t) =>
                                !!(t.id !== eb(this, ew) && t.transition && t.transition.check(e)) &&
                                (e_(this, ew, t.id), !0),
                        ),
                        eb(this, ew) !== t)
                    ) {
                        var r;
                        eb(this, eM)[t].instance.teardown(),
                            Object.keys(eb(this, eL)).forEach((e) => {
                                let t = eb(this, eL)[e];
                                t.unsubscribe(), (t.unsubscribe = eb(this, eO).call(this, t.func, ...t.args));
                            }),
                            eb(this, ek).backendChanged(this);
                        let n = eb(this, eM)[eb(this, ew)];
                        if ((n.instance.setup(), n.skipDispatchOnTransition)) return;
                        let s = new e.constructor(e.type, e);
                        null == (r = e.target) || r.dispatchEvent(s);
                    }
                },
            }),
            eg(this, eO, { writable: !0, value: (e, t, r, n) => eb(this, eM)[eb(this, ew)].instance[e](t, r, n) }),
            eg(this, eP, {
                writable: !0,
                value: (e, t, r, n) => {
                    let s = "".concat(e, "_").concat(t),
                        a = eb(this, eO).call(this, e, t, r, n);
                    return (
                        (eb(this, eL)[s] = { func: e, args: [t, r, n], unsubscribe: a }),
                        () => {
                            eb(this, eL)[s].unsubscribe(), delete eb(this, eL)[s];
                        }
                    );
                },
            }),
            !r || !r.backends || r.backends.length < 1)
        )
            throw Error(
                "You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx",
            );
        e_(this, ek, new ev()),
            e_(this, eM, {}),
            e_(this, eS, []),
            r.backends.forEach((r) => {
                let n = eb(this, eT).call(this, e, t, r);
                (eb(this, eM)[n.id] = n), eb(this, eS).push(n);
            }),
            e_(this, ew, eb(this, eS)[0].id),
            e_(this, eL, {});
    }
}
ey(eA, "isSetUp", !1);
let ej = (e, t, r) => new eA(e, t, r);
function eR() {
    return (eR =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function eI(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var eY = (0, o.createContext)(null),
    eN = function (e) {
        var t,
            r = e.portal,
            n = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            s = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                }
                return s;
            })(e, ["portal"]),
            s =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })((t = (0, o.useState)(null))) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            r = !0,
                            n = !1,
                            s = void 0;
                        try {
                            for (
                                var a, o = e[Symbol.iterator]();
                                !(r = (a = o.next()).done) && (t.push(a.value), 2 !== t.length);
                                r = !0
                            );
                        } catch (e) {
                            (n = !0), (s = e);
                        } finally {
                            try {
                                r || null == o.return || o.return();
                            } finally {
                                if (n) throw s;
                            }
                        }
                        return t;
                    }
                })(t) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return eI(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eI(e, 2);
                    }
                })(t) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            a = s[0],
            i = s[1];
        return o.createElement(
            eY.Provider,
            { value: null != r ? r : a },
            o.createElement(el, eR({ backend: ej }, n)),
            r ? null : o.createElement("div", { ref: i }),
        );
    },
    eF = (r(340287), r(688807));
