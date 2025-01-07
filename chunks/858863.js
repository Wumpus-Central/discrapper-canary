var i = r(312089),
    a = r(910974),
    s = r(190031),
    o = r(987609),
    l = r(476400);
var u = r(192379),
    c = r(57435),
    d = r(756201),
    f =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (n) {
                return e[n];
            });
        },
    _ = {
        component: 'div',
        childFactory: function (e) {
            return e;
        }
    },
    h = (function (e) {
        function n(n, r) {
            var i,
                a = (i = e.call(this, n, r) || this).handleExited.bind((0, o.Z)((0, o.Z)(i)));
            return (
                (i.state = {
                    contextValue: { isMounting: !0 },
                    handleExited: a,
                    firstRender: !0
                }),
                i
            );
        }
        (0, s.Z)(n, e);
        var r = n.prototype;
        return (
            (r.componentDidMount = function () {
                (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
            }),
            (r.componentWillUnmount = function () {
                this.mounted = !1;
            }),
            (n.getDerivedStateFromProps = function (e, n) {
                var r = n.children,
                    i = n.handleExited;
                return {
                    children: n.firstRender ? (0, d.Kg)(e, i) : (0, d.Rp)(e, r, i),
                    firstRender: !1
                };
            }),
            (r.handleExited = function (e, n) {
                var r = (0, d.n)(this.props.children);
                !(e.key in r) &&
                    (e.props.onExited && e.props.onExited(n),
                    this.mounted &&
                        this.setState(function (n) {
                            var r = (0, a.Z)({}, n.children);
                            return delete r[e.key], { children: r };
                        }));
            }),
            (r.render = function () {
                var e = this.props,
                    n = e.component,
                    r = e.childFactory,
                    a = (0, i.Z)(e, ['component', 'childFactory']),
                    s = this.state.contextValue,
                    o = f(this.state.children).map(r);
                return (delete a.appear, delete a.enter, delete a.exit, null === n) ? u.createElement(c.Z.Provider, { value: s }, o) : u.createElement(c.Z.Provider, { value: s }, u.createElement(n, a, o));
            }),
            n
        );
    })(u.Component);
(h.propTypes = {}), (h.defaultProps = _), (n.Z = h);
