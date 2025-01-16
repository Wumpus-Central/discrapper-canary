e(411104);
var s,
    n = e(200651),
    h = e(192379),
    a = e(120356),
    r = e.n(a),
    l = e(749880);
function o(t, i, e) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = e),
        t
    );
}
let d = (t) =>
    new Promise((i, e) => {
        null == t && e(Error('No image src passed'));
        let s = new Image();
        (s.src = t), (s.onload = () => i(s)), (s.onerror = (t) => e(t));
    });
class u extends (s = h.PureComponent) {
    componentDidUpdate(t) {
        t.src !== this.props.src && this.setState({ loaded: !1 }, () => this.initialize());
    }
    initialize() {
        d(this.props.src).then(() => {
            !this.unmounting && this.setState({ loaded: !0 });
        });
    }
    componentWillUnmount() {
        this.unmounting = !0;
    }
    render() {
        let { className: t, src: i, alt: e, width: s, height: h, onLoad: a, style: o, imageClassName: d } = this.props,
            { loaded: u } = this.state;
        return (0, n.jsx)('div', {
            className: t,
            style: {
                ...o,
                width: s,
                height: h
            },
            children: (0, n.jsx)('img', {
                className: r()(l.image, d, { [l.loaded]: u }),
                width: s,
                height: h,
                src: i,
                alt: e,
                onLoad: a
            })
        });
    }
    constructor(t) {
        super(t), o(this, 'unmounting', !1), o(this, 'state', { loaded: !1 }), this.initialize();
    }
}
o(u, 'defaultProps', {
    width: 0,
    height: 0,
    alt: ''
}),
    (i.Z = u);
