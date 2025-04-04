n.d(t, { Z: () => _ });
var r = n(312089),
    i = n(910974),
    o = n(190031),
    a = n(987609);
n(476400);
var s = n(192379),
    l = n(57435),
    c = n(756201),
    u =
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
            var r = e.call(this, t, n) || this,
                i = r.handleExited.bind((0, a.Z)((0, a.Z)(r)));
            return (
                (r.state = {
                    contextValue: { isMounting: !0 },
                    handleExited: i,
                    firstRender: !0
                }),
                r
            );
        }
        (0, o.Z)(t, e);
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
                return {
                    children: t.firstRender ? (0, c.Kg)(e, r) : (0, c.Rp)(e, n, r),
                    firstRender: !1
                };
            }),
            (n.handleExited = function (e, t) {
                var n = (0, c.n)(this.props.children);
                e.key in n ||
                    (e.props.onExited && e.props.onExited(t),
                    this.mounted &&
                        this.setState(function (t) {
                            var n = (0, i.Z)({}, t.children);
                            return delete n[e.key], { children: n };
                        }));
            }),
            (n.render = function () {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    i = (0, r.Z)(e, ['component', 'childFactory']),
                    o = this.state.contextValue,
                    a = u(this.state.children).map(n);
                return (delete i.appear, delete i.enter, delete i.exit, null === t) ? s.createElement(l.Z.Provider, { value: o }, a) : s.createElement(l.Z.Provider, { value: o }, s.createElement(t, i, a));
            }),
            t
        );
    })(s.Component);
(f.propTypes = {}), (f.defaultProps = d);
let _ = f;
