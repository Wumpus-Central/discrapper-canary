n.d(t, { T: () => _ });
var i = n(321733),
    s = n(212246),
    r = n(162551),
    l = n(848575),
    a = n(201672),
    o = n(498969);
function d(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var u = ["canDrop", "hover", "drop"],
    c = (function () {
        var e;
        function t(e, n, i) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            d(this, "props", null),
                d(this, "spec", void 0),
                d(this, "monitor", void 0),
                d(this, "ref", void 0),
                (this.spec = e),
                (this.monitor = n),
                (this.ref = i);
        }
        return (
            (e = [
                {
                    key: "receiveProps",
                    value: function (e) {
                        this.props = e;
                    },
                },
                {
                    key: "receiveMonitor",
                    value: function (e) {
                        this.monitor = e;
                    },
                },
                {
                    key: "canDrop",
                    value: function () {
                        return !this.spec.canDrop || this.spec.canDrop(this.props, this.monitor);
                    },
                },
                {
                    key: "hover",
                    value: function () {
                        this.spec.hover && this.props && this.spec.hover(this.props, this.monitor, (0, a.PQ)(this.ref));
                    },
                },
                {
                    key: "drop",
                    value: function () {
                        if (this.spec.drop) return this.spec.drop(this.props, this.monitor, this.ref.current);
                    },
                },
            ]),
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                }
            })(t.prototype, e),
            t
        );
    })();
function _(e, t, n) {
    var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, a.cl)("DropTarget", "type, spec, collect[, options]", e, t, n, d);
    var _ = e;
    "function" != typeof e &&
        ((0, i.V)(
            (0, a.NE)(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e,
        ),
        (_ = function () {
            return e;
        })),
        (0, i.V)(
            (0, a.Qd)(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t,
        );
    var h =
        (Object.keys(t).forEach(function (e) {
            (0, i.V)(
                u.indexOf(e) > -1,
                'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                u.join(", "),
                e,
            ),
                (0, i.V)(
                    "function" == typeof t[e],
                    "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",
                    e,
                    e,
                    t[e],
                );
        }),
        function (e, n) {
            return new c(t, e, n);
        });
    return (
        (0, i.V)(
            "function" == typeof n,
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            n,
        ),
        (0, i.V)(
            (0, a.Qd)(d),
            'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            n,
        ),
        function (e) {
            return (0, o.A)({
                containerDisplayName: "DropTarget",
                createHandler: h,
                registerHandler: s.l,
                createMonitor: function (e) {
                    return new r.b(e);
                },
                createConnector: function (e) {
                    return new l.P(e);
                },
                DecoratedComponent: e,
                getType: _,
                collect: n,
                options: d,
            });
        }
    );
}
