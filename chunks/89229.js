"use strict";
n.d(t, { A: () => f });
var r = n(299146),
    i = n(1139),
    a = n(527758),
    s = n(47312);
n(655972);
var o = n(64700),
    l = n(167782),
    u = n(51813),
    c =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    d = {
        component: "div",
        childFactory: function (e) {
            return e;
        },
    },
    _ = (function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this,
                i = r.handleExited.bind((0, a.A)(r));
            return (r.state = { contextValue: { isMounting: !0 }, handleExited: i, firstRender: !0 }), r;
        }
        (0, s.A)(t, e);
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
                this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
                var n = t.children,
                    r = t.handleExited;
                return { children: t.firstRender ? (0, u.dw)(e, r) : (0, u.qX)(e, n, r), firstRender: !1 };
            }),
            (n.handleExited = function (e, t) {
                var n = (0, u.p7)(this.props.children);
                e.key in n ||
                    (e.props.onExited && e.props.onExited(t),
                    this.mounted &&
                        this.setState(function (t) {
                            var n = (0, i.A)({}, t.children);
                            return delete n[e.key], { children: n };
                        }));
            }),
            (n.render = function () {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    i = (0, r.A)(e, ["component", "childFactory"]),
                    a = this.state.contextValue,
                    s = c(this.state.children).map(n);
                return (delete i.appear, delete i.enter, delete i.exit, null === t)
                    ? o.createElement(l.A.Provider, { value: a }, s)
                    : o.createElement(l.A.Provider, { value: a }, o.createElement(t, i, s));
            }),
            t
        );
    })(o.Component);
(_.propTypes = {}), (_.defaultProps = d);
let f = _;
