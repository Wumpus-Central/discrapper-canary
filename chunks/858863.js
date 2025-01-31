n.d(t, { Z: () => _ });
var i = n(312089),
    r = n(910974),
    a = n(190031),
    s = n(987609);
n(476400);
var o = n(192379),
    l = n(57435),
    u = n(756201),
    c =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    d = {
        component: 'div',
        childFactory: function (e) {
            return e;
        }
    },
    f = (function (e) {
        function t(t, n) {
            var i,
                r = (i = e.call(this, t, n) || this).handleExited.bind((0, s.Z)((0, s.Z)(i)));
            return (
                (i.state = {
                    contextValue: { isMounting: !0 },
                    handleExited: r,
                    firstRender: !0
                }),
                i
            );
        }
        (0, a.Z)(t, e);
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
                    i = t.handleExited;
                return {
                    children: t.firstRender ? (0, u.Kg)(e, i) : (0, u.Rp)(e, n, i),
                    firstRender: !1
                };
            }),
            (n.handleExited = function (e, t) {
                var n = (0, u.n)(this.props.children);
                e.key in n ||
                    (e.props.onExited && e.props.onExited(t),
                    this.mounted &&
                        this.setState(function (t) {
                            var n = (0, r.Z)({}, t.children);
                            return delete n[e.key], { children: n };
                        }));
            }),
            (n.render = function () {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    r = (0, i.Z)(e, ['component', 'childFactory']),
                    a = this.state.contextValue,
                    s = c(this.state.children).map(n);
                return (delete r.appear, delete r.enter, delete r.exit, null === t) ? o.createElement(l.Z.Provider, { value: a }, s) : o.createElement(l.Z.Provider, { value: a }, o.createElement(t, r, s));
            }),
            t
        );
    })(o.Component);
(f.propTypes = {}), (f.defaultProps = d);
let _ = f;
