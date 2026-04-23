"use strict";
r.d(t, { T: () => u });
var n = r(321733),
    o = r(212246),
    i = r(162551),
    a = r(848575),
    c = r(201672),
    s = r(498969);
function p(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var d = ["canDrop", "hover", "drop"],
    h = (function () {
        var e;
        function t(e, r, n) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            p(this, "props", null),
                p(this, "spec", void 0),
                p(this, "monitor", void 0),
                p(this, "ref", void 0),
                (this.spec = e),
                (this.monitor = r),
                (this.ref = n);
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
                        this.spec.hover && this.props && this.spec.hover(this.props, this.monitor, (0, c.PQ)(this.ref));
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
function u(e, t, r) {
    var p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, c.cl)("DropTarget", "type, spec, collect[, options]", e, t, r, p);
    var u = e;
    "function" != typeof e &&
        ((0, n.V)(
            (0, c.NE)(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e,
        ),
        (u = function () {
            return e;
        })),
        (0, n.V)(
            (0, c.Qd)(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t,
        );
    var l =
        (Object.keys(t).forEach(function (e) {
            (0, n.V)(
                d.indexOf(e) > -1,
                'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                d.join(", "),
                e,
            ),
                (0, n.V)(
                    "function" == typeof t[e],
                    "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",
                    e,
                    e,
                    t[e],
                );
        }),
        function (e, r) {
            return new h(t, e, r);
        });
    return (
        (0, n.V)(
            "function" == typeof r,
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            r,
        ),
        (0, n.V)(
            (0, c.Qd)(p),
            'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            r,
        ),
        function (e) {
            return (0, s.A)({
                containerDisplayName: "DropTarget",
                createHandler: l,
                registerHandler: o.l,
                createMonitor: function (e) {
                    return new i.b(e);
                },
                createConnector: function (e) {
                    return new a.P(e);
                },
                DecoratedComponent: e,
                getType: u,
                collect: r,
                options: p,
            });
        }
    );
}
