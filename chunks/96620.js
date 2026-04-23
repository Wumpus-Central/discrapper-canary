"use strict";
r.d(t, { QP: () => eB, eV: () => n });
let n = (e, t) => ({ event: e, check: t });
var a,
    s,
    i = r(64700),
    o = r(627968),
    l = r(321733),
    u = "dnd-core/INIT_COORDS",
    c = "dnd-core/BEGIN_DRAG",
    d = "dnd-core/PUBLISH_DRAG_SOURCE",
    f = "dnd-core/HOVER",
    p = "dnd-core/DROP",
    h = "dnd-core/END_DRAG";
function m(e, t) {
    return { type: u, payload: { sourceClientOffset: t || null, clientOffset: e || null } };
}
function _(e) {
    return (_ =
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
    return "object" === _(e);
}
var v = { type: u, payload: { clientOffset: null, sourceClientOffset: null } };
function b(e, t) {
    return null === t
        ? null === e
        : Array.isArray(e)
          ? e.some(function (e) {
                return e === t;
            })
          : e === t;
}
function y(e, t) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? y(Object(r), !0).forEach(function (t) {
                  var n, a, s;
                  (n = e),
                      (a = t),
                      (s = r[t]),
                      a in n
                          ? Object.defineProperty(n, a, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[a] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : y(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var S = (function () {
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
                        a,
                        s = this,
                        i = this.store.dispatch,
                        o = {
                            beginDrag:
                                ((e = this),
                                function () {
                                    var t,
                                        r,
                                        n,
                                        a,
                                        s,
                                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        o =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : { publishSource: !0 },
                                        u = o.publishSource,
                                        d = o.clientOffset,
                                        f = o.getSourceClientOffset,
                                        p = e.getMonitor(),
                                        h = e.getRegistry();
                                    e.dispatch(m(d)),
                                        (t = i),
                                        (r = p),
                                        (n = h),
                                        (0, l.V)(!r.isDragging(), "Cannot call beginDrag while dragging."),
                                        t.forEach(function (e) {
                                            (0, l.V)(n.getSource(e), "Expected sourceIds to be registered.");
                                        });
                                    var _ = (function (e, t) {
                                        for (var r = null, n = e.length - 1; n >= 0; n--)
                                            if (t.canDragSource(e[n])) {
                                                r = e[n];
                                                break;
                                            }
                                        return r;
                                    })(i, p);
                                    if (null === _) return void e.dispatch(v);
                                    var b = null;
                                    if (d) {
                                        if (!f) throw Error("getSourceClientOffset must be defined");
                                        (a = f),
                                            (0, l.V)(
                                                "function" == typeof a,
                                                "When clientOffset is provided, getSourceClientOffset must be a function.",
                                            ),
                                            (b = f(_));
                                    }
                                    e.dispatch(m(d, b));
                                    var y = h.getSource(_).beginDrag(p, _);
                                    if (null != y) {
                                        return (
                                            (s = y),
                                            (0, l.V)(g(s), "Item must be an object."),
                                            h.pinSource(_),
                                            {
                                                type: c,
                                                payload: {
                                                    itemType: h.getSourceType(_),
                                                    item: y,
                                                    sourceId: _,
                                                    clientOffset: d || null,
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
                                    if (t.getMonitor().isDragging()) return { type: d };
                                }),
                            hover:
                                ((r = this),
                                function (e) {
                                    var t,
                                        n,
                                        a,
                                        s,
                                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        o = i.clientOffset;
                                    (t = e), (0, l.V)(Array.isArray(t), "Expected targetIds to be an array.");
                                    var u = e.slice(0),
                                        c = r.getMonitor(),
                                        d = r.getRegistry();
                                    return (
                                        (function (e, t, r) {
                                            (0, l.V)(t.isDragging(), "Cannot call hover while not dragging."),
                                                (0, l.V)(!t.didDrop(), "Cannot call hover after drop.");
                                            for (var n = 0; n < e.length; n++) {
                                                var a = e[n];
                                                (0, l.V)(
                                                    e.lastIndexOf(a) === n,
                                                    "Expected targetIds to be unique in the passed array.",
                                                );
                                                var s = r.getTarget(a);
                                                (0, l.V)(s, "Expected targetIds to be registered.");
                                            }
                                        })(u, c, d),
                                        (function (e, t, r) {
                                            for (var n = e.length - 1; n >= 0; n--) {
                                                var a = e[n];
                                                b(t.getTargetType(a), r) || e.splice(n, 1);
                                            }
                                        })(u, d, c.getItemType()),
                                        (n = u),
                                        (a = c),
                                        (s = d),
                                        n.forEach(function (e) {
                                            s.getTarget(e).hover(a, e);
                                        }),
                                        { type: f, payload: { targetIds: u, clientOffset: o || null } }
                                    );
                                }),
                            drop:
                                ((n = this),
                                function () {
                                    var e,
                                        t,
                                        r,
                                        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        s = n.getMonitor(),
                                        i = n.getRegistry();
                                    (e = s),
                                        (0, l.V)(e.isDragging(), "Cannot call drop while not dragging."),
                                        (0, l.V)(!e.didDrop(), "Cannot call drop twice during one drag operation."),
                                        ((r = (t = s).getTargetIds().filter(t.canDropOnTarget, t)).reverse(),
                                        r).forEach(function (e, t) {
                                            var r,
                                                o,
                                                u,
                                                c,
                                                d,
                                                f,
                                                h,
                                                m =
                                                    ((r = e),
                                                    (o = t),
                                                    (u = i),
                                                    (c = s),
                                                    (h = f = (d = u.getTarget(r)) ? d.drop(c, r) : void 0),
                                                    (0, l.V)(
                                                        void 0 === h || g(h),
                                                        "Drop result must either be an object or undefined.",
                                                    ),
                                                    void 0 === f && (f = 0 === o ? {} : c.getDropResult()),
                                                    f),
                                                _ = { type: p, payload: { dropResult: E(E({}, a), m) } };
                                            n.dispatch(_);
                                        });
                                }),
                            endDrag:
                                ((a = this),
                                function () {
                                    var e,
                                        t = a.getMonitor(),
                                        r = a.getRegistry();
                                    (e = t), (0, l.V)(e.isDragging(), "Cannot call endDrag while not dragging.");
                                    var n = t.getSourceId();
                                    return (
                                        null != n && (r.getSource(n, !0).endDrag(t, n), r.unpinSource()), { type: h }
                                    );
                                }),
                        };
                    return Object.keys(o).reduce(function (e, t) {
                        var r = o[t];
                        return (
                            (e[t] = function () {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                var a = r.apply(s, t);
                                void 0 !== a && i(a);
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
function T(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
r(416886);
var x = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
    w = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    C = {
        INIT: "@@redux/INIT" + w(),
        REPLACE: "@@redux/REPLACE" + w(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + w();
        },
    },
    D = function (e, t) {
        return e === t;
    };
function O(e, t) {
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
            ? O(Object(r), !0).forEach(function (t) {
                  var n, a, s;
                  (n = e),
                      (a = t),
                      (s = r[t]),
                      a in n
                          ? Object.defineProperty(n, a, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[a] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var M = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null },
    R = "dnd-core/ADD_SOURCE",
    k = "dnd-core/ADD_TARGET",
    N = "dnd-core/REMOVE_SOURCE",
    L = "dnd-core/REMOVE_TARGET";
function I(e, t) {
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
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? I(Object(r), !0).forEach(function (t) {
                  var n, a, s;
                  (n = e),
                      (a = t),
                      (s = r[t]),
                      a in n
                          ? Object.defineProperty(n, a, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[a] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : I(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var F = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
    },
    B = [],
    Y = [];
function U(e, t) {
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
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? U(Object(r), !0).forEach(function (t) {
                  var n, a, s;
                  (n = e),
                      (a = t),
                      (s = r[t]),
                      a in n
                          ? Object.defineProperty(n, a, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[a] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : U(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function V() {
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
                case R:
                case k:
                case L:
                case N:
                    return B;
                default:
                    return Y;
            }
            var a = n.payload,
                s = a.targetIds,
                i = void 0 === s ? [] : s,
                o = a.prevTargetIds,
                l = void 0 === o ? [] : o,
                u =
                    ((e = new Map()),
                    (t = function (t) {
                        e.set(t, e.has(t) ? e.get(t) + 1 : 1);
                    }),
                    i.forEach(t),
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
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : D;
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; ++n) if (!r(e[n], t[n])) return !1;
                        return !0;
                    })(i, l)
                )
            )
                return B;
            var c = l[l.length - 1],
                d = i[i.length - 1];
            return c !== d && (c && u.push(c), d && u.push(d)), u;
        })(t.dirtyHandlerIds, {
            type: r.type,
            payload: j(
                j({}, r.payload),
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
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
                n = arguments.length > 1 ? arguments[1] : void 0,
                a = n.payload;
            switch (n.type) {
                case u:
                case c:
                    return {
                        initialSourceClientOffset: a.sourceClientOffset,
                        initialClientOffset: a.clientOffset,
                        clientOffset: a.clientOffset,
                    };
                case f:
                    if (
                        ((e = r.clientOffset),
                        (t = a.clientOffset),
                        (!e && !t) || (e && t && e.x === t.x && e.y === t.y))
                    )
                        return r;
                    return A(A({}, r), {}, { clientOffset: a.clientOffset });
                case h:
                case p:
                    return M;
                default:
                    return r;
            }
        })(t.dragOffset, r),
        refCount: (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case R:
                case k:
                    return e + 1;
                case N:
                case L:
                    return e - 1;
                default:
                    return e;
            }
        })(t.refCount, r),
        dragOperation: (function () {
            var e,
                t,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                n = arguments.length > 1 ? arguments[1] : void 0,
                a = n.payload;
            switch (n.type) {
                case c:
                    return P(
                        P({}, r),
                        {},
                        {
                            itemType: a.itemType,
                            item: a.item,
                            sourceId: a.sourceId,
                            isSourcePublic: a.isSourcePublic,
                            dropResult: null,
                            didDrop: !1,
                        },
                    );
                case d:
                    return P(P({}, r), {}, { isSourcePublic: !0 });
                case f:
                    return P(P({}, r), {}, { targetIds: a.targetIds });
                case L:
                    if (-1 === r.targetIds.indexOf(a.targetId)) return r;
                    return P(
                        P({}, r),
                        {},
                        {
                            targetIds:
                                ((e = r.targetIds),
                                (t = a.targetId),
                                e.filter(function (e) {
                                    return e !== t;
                                })),
                        },
                    );
                case p:
                    return P(P({}, r), {}, { dropResult: a.dropResult, didDrop: !0, targetIds: [] });
                case h:
                    return P(
                        P({}, r),
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
function H(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
(B.__IS_NONE__ = !0), (Y.__IS_ALL__ = !0);
var G = (function () {
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
                        var a = this.store.getState().stateId;
                        return this.store.subscribe(function () {
                            var r = t.store.getState(),
                                s = r.stateId;
                            try {
                                s === a ||
                                    (s === a + 1 &&
                                        !(function (e, t) {
                                            return (
                                                e !== B &&
                                                (e === Y ||
                                                    void 0 === t ||
                                                    t.filter(function (t) {
                                                        return e.indexOf(t) > -1;
                                                    }).length > 0)
                                            );
                                        })(r.dirtyHandlerIds, n)) ||
                                    e();
                            } finally {
                                a = s;
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
                            a = this.getItemType();
                        if (a && !b(n, a)) return !1;
                        var s = this.getTargetIds();
                        if (!s.length) return !1;
                        var i = s.indexOf(e);
                        return r ? i === s.length - 1 : i > -1;
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
                            return t && r && n ? H({ x: t.x + n.x, y: t.y + n.y }, r) : null;
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
                            t && r ? H(t, r) : null
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
    z = 0;
function W(e) {
    return (W =
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
function q(e, t) {
    t && Array.isArray(e)
        ? e.forEach(function (e) {
              return q(e, !1);
          })
        : (0, l.V)(
              "string" == typeof e || "symbol" === W(e),
              t
                  ? "Type can only be a string, a symbol, or an array of either."
                  : "Type can only be a string or a symbol.",
          );
}
((a = s || (s = {})).SOURCE = "SOURCE"), (a.TARGET = "TARGET");
let $ = "u" > typeof global ? global : self,
    K = $.MutationObserver || $.WebKitMutationObserver;
function Q(e) {
    return function () {
        let t = setTimeout(n, 0),
            r = setInterval(n, 50);
        function n() {
            clearTimeout(t), clearInterval(r), e();
        }
    };
}
let X =
    "function" == typeof K
        ? function (e) {
              let t = 1,
                  r = new K(e),
                  n = document.createTextNode("");
              return (
                  r.observe(n, { characterData: !0 }),
                  function () {
                      n.data = t = -t;
                  }
              );
          }
        : Q;
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
let J = new (class {
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
                (this.requestErrorThrow = Q(() => {
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
    })(J.registerPendingError);
function et(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function er(e) {
    switch (e[0]) {
        case "S":
            return s.SOURCE;
        case "T":
            return s.TARGET;
        default:
            (0, l.V)(!1, "Cannot parse handler ID: ".concat(e));
    }
}
function en(e, t) {
    var r = e.entries(),
        n = !1;
    do {
        var a,
            s = r.next(),
            i = s.done;
        if (
            ((function (e) {
                if (Array.isArray(e)) return e;
            })((a = s.value)) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            r = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (
                                var s, i = e[Symbol.iterator]();
                                !(r = (s = i.next()).done) && (t.push(s.value), 2 !== t.length);
                                r = !0
                            );
                        } catch (e) {
                            (n = !0), (a = e);
                        } finally {
                            try {
                                r || null == i.return || i.return();
                            } finally {
                                if (n) throw a;
                            }
                        }
                        return t;
                    }
                })(a) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return et(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return et(e, 2);
                    }
                })(a) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })())[1] === t
        )
            return !0;
        n = !!i;
    } while (!n);
    return !1;
}
var ea = (function () {
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
                        q(e),
                            (0, l.V)("function" == typeof t.canDrag, "Expected canDrag to be a function."),
                            (0, l.V)("function" == typeof t.beginDrag, "Expected beginDrag to be a function."),
                            (0, l.V)("function" == typeof t.endDrag, "Expected endDrag to be a function.");
                        var r = this.addHandler(s.SOURCE, e, t);
                        return this.store.dispatch({ type: R, payload: { sourceId: r } }), r;
                    },
                },
                {
                    key: "addTarget",
                    value: function (e, t) {
                        q(e, !0),
                            (0, l.V)("function" == typeof t.canDrop, "Expected canDrop to be a function."),
                            (0, l.V)("function" == typeof t.hover, "Expected hover to be a function."),
                            (0, l.V)("function" == typeof t.drop, "Expected beginDrag to be a function.");
                        var r = this.addHandler(s.TARGET, e, t);
                        return this.store.dispatch({ type: k, payload: { targetId: r } }), r;
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
                        return er(e) === s.SOURCE;
                    },
                },
                {
                    key: "isTargetId",
                    value: function (e) {
                        return er(e) === s.TARGET;
                    },
                },
                {
                    key: "removeSource",
                    value: function (e) {
                        var t = this;
                        (0, l.V)(this.getSource(e), "Expected an existing source."),
                            this.store.dispatch({ type: N, payload: { sourceId: e } }),
                            J.enqueueTask(
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
                            this.store.dispatch({ type: L, payload: { targetId: e } }),
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
                            var t = (z++).toString();
                            switch (e) {
                                case s.SOURCE:
                                    return "S".concat(t);
                                case s.TARGET:
                                    return "T".concat(t);
                                default:
                                    throw Error("Unknown Handler Role: ".concat(e));
                            }
                        })(e);
                        return (
                            this.types.set(n, t),
                            e === s.SOURCE ? this.dragSources.set(n, r) : e === s.TARGET && this.dropTargets.set(n, r),
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
    es = r(75375),
    ei = ["children"];
function eo(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var el = 0,
    eu = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
    ec = (0, i.memo)(function (e) {
        var t,
            r,
            n = e.children,
            a =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(
                    (r =
                        "manager" in
                        (t = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < s.length; n++)
                                    (r = s[n]),
                                        !(t.indexOf(r) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                                            (a[r] = e[r]);
                            }
                            return a;
                        })(e, ei))
                            ? [{ dragDropManager: t.manager }, !1]
                            : [
                                  (function (e) {
                                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed(),
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
                                                          a =
                                                              arguments.length > 2 && void 0 !== arguments[2]
                                                                  ? arguments[2]
                                                                  : {},
                                                          s =
                                                              arguments.length > 3 &&
                                                              void 0 !== arguments[3] &&
                                                              arguments[3],
                                                          i =
                                                              ((t = s),
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
                                                                      throw Error(T(0));
                                                                  if (
                                                                      ("function" == typeof r &&
                                                                          void 0 === n &&
                                                                          ((n = r), (r = void 0)),
                                                                      void 0 !== n)
                                                                  ) {
                                                                      if ("function" != typeof n) throw Error(T(1));
                                                                      return n(e)(t, r);
                                                                  }
                                                                  if ("function" != typeof t) throw Error(T(2));
                                                                  var a,
                                                                      s = t,
                                                                      i = r,
                                                                      o = [],
                                                                      l = o,
                                                                      u = !1;
                                                                  function c() {
                                                                      l === o && (l = o.slice());
                                                                  }
                                                                  function d() {
                                                                      if (u) throw Error(T(3));
                                                                      return i;
                                                                  }
                                                                  function f(e) {
                                                                      if ("function" != typeof e) throw Error(T(4));
                                                                      if (u) throw Error(T(5));
                                                                      var t = !0;
                                                                      return (
                                                                          c(),
                                                                          l.push(e),
                                                                          function () {
                                                                              if (t) {
                                                                                  if (u) throw Error(T(6));
                                                                                  (t = !1), c();
                                                                                  var r = l.indexOf(e);
                                                                                  l.splice(r, 1), (o = null);
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
                                                                          throw Error(T(7));
                                                                      if (void 0 === e.type) throw Error(T(8));
                                                                      if (u) throw Error(T(9));
                                                                      try {
                                                                          (u = !0), (i = s(i, e));
                                                                      } finally {
                                                                          u = !1;
                                                                      }
                                                                      for (var t = (o = l), r = 0; r < t.length; r++)
                                                                          (0, t[r])();
                                                                      return e;
                                                                  }
                                                                  return (
                                                                      p({ type: C.INIT }),
                                                                      ((a = {
                                                                          dispatch: p,
                                                                          subscribe: f,
                                                                          getState: d,
                                                                          replaceReducer: function (e) {
                                                                              if ("function" != typeof e)
                                                                                  throw Error(T(10));
                                                                              (s = e), p({ type: C.REPLACE });
                                                                          },
                                                                      })[x] = function () {
                                                                          var e;
                                                                          return (
                                                                              ((e = {
                                                                                  subscribe: function (e) {
                                                                                      if (
                                                                                          "object" != typeof e ||
                                                                                          null === e
                                                                                      )
                                                                                          throw Error(T(11));
                                                                                      function t() {
                                                                                          e.next && e.next(d());
                                                                                      }
                                                                                      return t(), { unsubscribe: f(t) };
                                                                                  },
                                                                              })[x] = function () {
                                                                                  return this;
                                                                              }),
                                                                              e
                                                                          );
                                                                      }),
                                                                      a
                                                                  );
                                                              })(
                                                                  V,
                                                                  t &&
                                                                      r &&
                                                                      r({ name: "dnd-core", instanceId: "dnd-core" }),
                                                              )),
                                                          o = new G(i, new ea(i)),
                                                          l = new S(i, o),
                                                          u = e(l, n, a);
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
                        var a = [],
                            s = !0,
                            i = !1;
                        try {
                            for (
                                n = n.call(e);
                                !(s = (t = n.next()).done) && (a.push(t.value), 2 !== a.length);
                                s = !0
                            );
                        } catch (e) {
                            (i = !0), (r = e);
                        } finally {
                            try {
                                s || null == n.return || n.return();
                            } finally {
                                if (i) throw r;
                            }
                        }
                        return a;
                    }
                })(r) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return eo(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eo(e, 2);
                    }
                })(r) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            s = a[0],
            l = a[1];
        return (
            (0, i.useEffect)(function () {
                if (l) {
                    var e = ed();
                    return (
                        ++el,
                        function () {
                            0 == --el && (e[eu] = null);
                        }
                    );
                }
            }, []),
            (0, o.jsx)(es.M.Provider, Object.assign({ value: s }, { children: n }), void 0)
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
        a = eh(e, t, "get");
    return (r = e), (n = a).get ? n.get.call(r) : n.value;
}
function eh(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
var em = new WeakMap();
class e_ {
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
                    a = e,
                    s = n,
                    i = r;
                if (s.set) s.set.call(a, i);
                else {
                    if (!s.writable) throw TypeError("attempted to set read only private field");
                    s.value = i;
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
function ev(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function eb(e, t) {
    var r,
        n,
        a = eE(e, t, "get");
    return (r = e), (n = a).get ? n.get.call(r) : n.value;
}
function ey(e, t, r) {
    var n = eE(e, t, "set");
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
function eE(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
var eS = new WeakMap(),
    eT = new WeakMap(),
    ex = new WeakMap(),
    ew = new WeakMap(),
    eC = new WeakMap(),
    eD = new WeakMap(),
    eO = new WeakMap(),
    eA = new WeakMap(),
    eM = new WeakMap(),
    eR = new WeakMap(),
    ek = new WeakMap();
class eN {
    constructor(e, t, r) {
        if (
            (eg(this, eS, { writable: !0, value: void 0 }),
            eg(this, eT, { writable: !0, value: void 0 }),
            eg(this, ex, { writable: !0, value: void 0 }),
            eg(this, ew, { writable: !0, value: void 0 }),
            eg(this, eC, { writable: !0, value: void 0 }),
            eg(this, eD, {
                writable: !0,
                value: (e, t, r) => {
                    var n, a;
                    if (!r.backend)
                        throw Error(
                            "You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(r)),
                        );
                    let s = r.backend(e, t, r.options),
                        i = r.id,
                        o = !r.id && s && s.constructor;
                    if ((o && (i = s.constructor.name), i))
                        o &&
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
                    if (eb(this, ex)[i])
                        throw Error(
                            "You must specify a unique 'id' property in your Backend entry:\n        "
                                .concat(JSON.stringify(r), " (conflicts with: ")
                                .concat(JSON.stringify(eb(this, ex)[i]), ")"),
                        );
                    return {
                        id: i,
                        instance: s,
                        preview: null != (n = r.preview) && n,
                        transition: r.transition,
                        skipDispatchOnTransition: null != (a = r.skipDispatchOnTransition) && a,
                    };
                },
            }),
            ev(this, "setup", () => {
                if ("u" > typeof window) {
                    if (eN.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                    (eN.isSetUp = !0), eb(this, eO).call(this, window), eb(this, ex)[eb(this, eS)].instance.setup();
                }
            }),
            ev(this, "teardown", () => {
                "u" > typeof window &&
                    ((eN.isSetUp = !1),
                    eb(this, eA).call(this, window),
                    eb(this, ex)[eb(this, eS)].instance.teardown());
            }),
            ev(this, "connectDragSource", (e, t, r) => eb(this, ek).call(this, "connectDragSource", e, t, r)),
            ev(this, "connectDragPreview", (e, t, r) => eb(this, ek).call(this, "connectDragPreview", e, t, r)),
            ev(this, "connectDropTarget", (e, t, r) => eb(this, ek).call(this, "connectDropTarget", e, t, r)),
            ev(this, "profile", () => eb(this, ex)[eb(this, eS)].instance.profile()),
            ev(this, "previewEnabled", () => eb(this, ex)[eb(this, eS)].preview),
            ev(this, "previewsList", () => eb(this, eT)),
            ev(this, "backendsList", () => eb(this, ew)),
            eg(this, eO, {
                writable: !0,
                value: (e) => {
                    eb(this, ew).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, eb(this, eM));
                    });
                },
            }),
            eg(this, eA, {
                writable: !0,
                value: (e) => {
                    eb(this, ew).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, eb(this, eM));
                    });
                },
            }),
            eg(this, eM, {
                writable: !0,
                value: (e) => {
                    let t = eb(this, eS);
                    if (
                        (eb(this, ew).some(
                            (t) =>
                                !!(t.id !== eb(this, eS) && t.transition && t.transition.check(e)) &&
                                (ey(this, eS, t.id), !0),
                        ),
                        eb(this, eS) !== t)
                    ) {
                        var r;
                        eb(this, ex)[t].instance.teardown(),
                            Object.keys(eb(this, eC)).forEach((e) => {
                                let t = eb(this, eC)[e];
                                t.unsubscribe(), (t.unsubscribe = eb(this, eR).call(this, t.func, ...t.args));
                            }),
                            eb(this, eT).backendChanged(this);
                        let n = eb(this, ex)[eb(this, eS)];
                        if ((n.instance.setup(), n.skipDispatchOnTransition)) return;
                        let a = new e.constructor(e.type, e);
                        null == (r = e.target) || r.dispatchEvent(a);
                    }
                },
            }),
            eg(this, eR, { writable: !0, value: (e, t, r, n) => eb(this, ex)[eb(this, eS)].instance[e](t, r, n) }),
            eg(this, ek, {
                writable: !0,
                value: (e, t, r, n) => {
                    let a = "".concat(e, "_").concat(t),
                        s = eb(this, eR).call(this, e, t, r, n);
                    return (
                        (eb(this, eC)[a] = { func: e, args: [t, r, n], unsubscribe: s }),
                        () => {
                            eb(this, eC)[a].unsubscribe(), delete eb(this, eC)[a];
                        }
                    );
                },
            }),
            !r || !r.backends || r.backends.length < 1)
        )
            throw Error(
                "You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx",
            );
        ey(this, eT, new e_()),
            ey(this, ex, {}),
            ey(this, ew, []),
            r.backends.forEach((r) => {
                let n = eb(this, eD).call(this, e, t, r);
                (eb(this, ex)[n.id] = n), eb(this, ew).push(n);
            }),
            ey(this, eS, eb(this, ew)[0].id),
            ey(this, eC, {});
    }
}
ev(eN, "isSetUp", !1);
let eL = (e, t, r) => new eN(e, t, r);
function eI() {
    return (eI =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function eP(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var eF = (0, i.createContext)(null),
    eB = function (e) {
        var t,
            r = e.portal,
            n = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                }
                return a;
            })(e, ["portal"]),
            a =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })((t = (0, i.useState)(null))) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            r = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (
                                var s, i = e[Symbol.iterator]();
                                !(r = (s = i.next()).done) && (t.push(s.value), 2 !== t.length);
                                r = !0
                            );
                        } catch (e) {
                            (n = !0), (a = e);
                        } finally {
                            try {
                                r || null == i.return || i.return();
                            } finally {
                                if (n) throw a;
                            }
                        }
                        return t;
                    }
                })(t) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return eP(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eP(e, 2);
                    }
                })(t) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            s = a[0],
            o = a[1];
        return i.createElement(
            eF.Provider,
            { value: null != r ? r : s },
            i.createElement(ec, eI({ backend: eL }, n)),
            r ? null : i.createElement("div", { ref: o }),
        );
    },
    eY = (r(340287), r(688807));
