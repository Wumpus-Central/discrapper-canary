r.d(t, { A: () => b });
var n = r(627968),
    o = r(64700),
    i = r(816885),
    a = r(321733),
    s = r(75375),
    c = r(322546),
    u = r(201672),
    d = r(833871),
    p = r.n(d);
function f(e) {
    return (f =
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
function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function h(e, t) {
    return (h =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function v(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function y(e) {
    return (y = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function g(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function b(e) {
    var t = e.DecoratedComponent,
        r = e.createHandler,
        d = e.createMonitor,
        b = e.createConnector,
        m = e.registerHandler,
        D = e.containerDisplayName,
        k = e.getType,
        w = e.collect,
        j = e.options.arePropsEqual,
        C = void 0 === j ? i.b : j,
        I = t.displayName || t.name || "Component",
        O = (function (e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Super expression must either be null or a function");
            (O.prototype = Object.create(e && e.prototype, {
                constructor: { value: O, writable: !0, configurable: !0 },
            })),
                e && h(O, e);
            var p,
                D,
                j =
                    ((p = (function () {
                        if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    })()),
                    function () {
                        var e,
                            t = y(O);
                        return (
                            (e = p ? Reflect.construct(t, arguments, y(this).constructor) : t.apply(this, arguments)),
                            (function (e, t) {
                                if (t && ("object" === f(t) || "function" == typeof t)) return t;
                                if (void 0 !== t)
                                    throw TypeError("Derived constructors may only return object or undefined");
                                return v(e);
                            })(this, e)
                        );
                    });
            function O(e) {
                var t;
                if (!(this instanceof O)) throw TypeError("Cannot call a class as a function");
                return (
                    g(v((t = j.call(this, e))), "decoratedRef", (0, o.createRef)()),
                    g(v(t), "handlerId", void 0),
                    g(v(t), "manager", void 0),
                    g(v(t), "handlerMonitor", void 0),
                    g(v(t), "handlerConnector", void 0),
                    g(v(t), "handler", void 0),
                    g(v(t), "disposable", void 0),
                    g(v(t), "rafId", void 0),
                    g(v(t), "currentType", void 0),
                    g(v(t), "handleChange", function () {
                        var e = t.getCurrentState();
                        (0, i.b)(e, t.state) || t.setState(e);
                    }),
                    (t.disposable = new c.DS()),
                    t.receiveProps(e),
                    t.dispose(),
                    t
                );
            }
            return (
                (D = [
                    {
                        key: "getHandlerId",
                        value: function () {
                            return this.handlerId;
                        },
                    },
                    {
                        key: "getDecoratedComponentInstance",
                        value: function () {
                            return (
                                (0, a.V)(
                                    this.decoratedRef.current,
                                    "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()",
                                ),
                                this.decoratedRef.current
                            );
                        },
                    },
                    {
                        key: "shouldComponentUpdate",
                        value: function (e, t) {
                            return !C(e, this.props) || !(0, i.b)(t, this.state);
                        },
                    },
                    {
                        key: "componentDidMount",
                        value: function () {
                            (this.disposable = new c.DS()),
                                (this.currentType = void 0),
                                this.receiveProps(this.props),
                                this.handleChange();
                        },
                    },
                    {
                        key: "componentDidUpdate",
                        value: function (e) {
                            C(this.props, e) || (this.receiveProps(this.props), this.handleChange());
                        },
                    },
                    {
                        key: "componentWillUnmount",
                        value: function () {
                            void 0 !== this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = void 0)),
                                this.dispose();
                        },
                    },
                    {
                        key: "receiveProps",
                        value: function (e) {
                            this.handler && (this.handler.receiveProps(e), this.receiveType(k(e)));
                        },
                    },
                    {
                        key: "receiveType",
                        value: function (e) {
                            if (
                                this.handlerMonitor &&
                                this.manager &&
                                this.handlerConnector &&
                                e !== this.currentType
                            ) {
                                this.currentType = e;
                                var t,
                                    r =
                                        (function (e) {
                                            if (Array.isArray(e)) return e;
                                        })((t = m(e, this.handler, this.manager))) ||
                                        (function (e) {
                                            var t,
                                                r,
                                                n =
                                                    null == e
                                                        ? null
                                                        : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                                                          e["@@iterator"];
                                            if (null != n) {
                                                var o = [],
                                                    i = !0,
                                                    a = !1;
                                                try {
                                                    for (
                                                        n = n.call(e);
                                                        !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                                                        i = !0
                                                    );
                                                } catch (e) {
                                                    (a = !0), (r = e);
                                                } finally {
                                                    try {
                                                        i || null == n.return || n.return();
                                                    } finally {
                                                        if (a) throw r;
                                                    }
                                                }
                                                return o;
                                            }
                                        })(t) ||
                                        (function (e) {
                                            if (e) {
                                                if ("string" == typeof e) return l(e, 2);
                                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                                if (
                                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                                    "Map" === t || "Set" === t)
                                                )
                                                    return Array.from(e);
                                                if (
                                                    "Arguments" === t ||
                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                )
                                                    return l(e, 2);
                                            }
                                        })(t) ||
                                        (function () {
                                            throw TypeError(
                                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                            );
                                        })(),
                                    n = r[0],
                                    o = r[1];
                                (this.handlerId = n),
                                    this.handlerMonitor.receiveHandlerId(n),
                                    this.handlerConnector.receiveHandlerId(n);
                                var i = this.manager
                                    .getMonitor()
                                    .subscribeToStateChange(this.handleChange, { handlerIds: [n] });
                                this.disposable.setDisposable(new c.ke(new c.jG(i), new c.jG(o)));
                            }
                        },
                    },
                    {
                        key: "dispose",
                        value: function () {
                            this.disposable.dispose(),
                                this.handlerConnector && this.handlerConnector.receiveHandlerId(null);
                        },
                    },
                    {
                        key: "getCurrentState",
                        value: function () {
                            return this.handlerConnector
                                ? w(this.handlerConnector.hooks, this.handlerMonitor, this.props)
                                : {};
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var e = this;
                            return (0, n.jsx)(
                                s.M.Consumer,
                                {
                                    children: function (r) {
                                        var o = r.dragDropManager;
                                        return (
                                            e.receiveDragDropManager(o),
                                            void 0 !== e.rafId && cancelAnimationFrame(e.rafId),
                                            "u" > typeof requestAnimationFrame &&
                                                (e.rafId = requestAnimationFrame(function () {
                                                    var t;
                                                    return (
                                                        (e.rafId = void 0),
                                                        null == (t = e.handlerConnector) ? void 0 : t.reconnect()
                                                    );
                                                })),
                                            (0, n.jsx)(
                                                t,
                                                Object.assign({}, e.props, e.getCurrentState(), {
                                                    ref: (0, u.Yy)(t) ? e.decoratedRef : null,
                                                }),
                                                void 0,
                                            )
                                        );
                                    },
                                },
                                void 0,
                            );
                        },
                    },
                    {
                        key: "receiveDragDropManager",
                        value: function (e) {
                            void 0 !== this.manager ||
                                ((0, a.V)(
                                    void 0 !== e,
                                    "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                                    I,
                                    I,
                                ),
                                void 0 !== e &&
                                    ((this.manager = e),
                                    (this.handlerMonitor = d(e)),
                                    (this.handlerConnector = b(e.getBackend())),
                                    (this.handler = r(this.handlerMonitor, this.decoratedRef))));
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
                })(O.prototype, D),
                O
            );
        })(o.Component);
    return g(O, "DecoratedComponent", t), g(O, "displayName", "".concat(D, "(").concat(I, ")")), p()(O, t);
}
