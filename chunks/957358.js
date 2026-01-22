n.d(t, { A: () => p }), n(896048);
var r,
    i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(998304),
    c = n(542692);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class d extends (r = l.PureComponent) {
    onDataUpdate(e, t) {
        let { maxValue: n, data: r, animate: i } = this.props,
            l = null == e || (e.data !== t.data && !s().isEqual(e.data, t.data));
        if (
            (l && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...r))),
            l || null == e || (!e.animate && i) || e.color !== this.props.color)
        ) {
            let e = o.E2(this.props.color);
            (this.fillColor = "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", 0.5)")),
                window.cancelAnimationFrame(this.animationFrameRequestId),
                (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
        }
    }
    componentDidMount() {
        (this.animationFrameRequestId = 0), this.onDataUpdate(null, this.props);
    }
    componentDidUpdate(e) {
        this.onDataUpdate(e, this.props);
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameRequestId), (this.animationFrameRequestId = 0);
    }
    render() {
        let { className: e, pixelWidth: t, pixelHeight: n } = this.props;
        return (0, i.jsx)("div", {
            className: e,
            children: (0, i.jsx)("canvas", {
                ref: this.canvas,
                className: c.J,
                width: t,
                height: n,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            u(this, "dataChangedAt", void 0),
            u(this, "fillColor", void 0),
            u(this, "maxValue", void 0),
            u(this, "canvas", l.createRef()),
            u(this, "animationFrameRequestId", void 0),
            u(this, "updateAnimation", (e) => {
                let t,
                    n,
                    r = this.canvas.current;
                if (null == r) return;
                let {
                    data: i,
                    updateInterval: l,
                    color: a,
                    numUpdatesToShow: s,
                    lineWidth: c,
                    animate: u,
                    gradientStopColor: d,
                } = this.props;
                if (i.length < 2) return;
                let p = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
                    f = r.getContext("2d"),
                    h = this.maxValue;
                (f.strokeStyle = a), (f.lineWidth = c);
                let A = r.height - f.lineWidth,
                    g = f.createLinearGradient(0, 0, 0, A);
                if (null != d) g.addColorStop(0, d);
                else {
                    let { r: e, g: t, b: n } = o.E2(a);
                    g.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"));
                }
                g.addColorStop(1, this.fillColor), (f.fillStyle = g);
                let m = i.length >= s ? s : i.length;
                f.setTransform(1, 0, 0, -1, 0, r.height),
                    f.clearRect(0, 0, r.width, r.height),
                    f.translate(0, 0.5 * f.lineWidth);
                let b = Math.floor(r.width / (m - 3)),
                    _ = 0.5 * b;
                f.translate(b - b * p, 0), f.beginPath();
                let E = -b;
                i.forEach((e, r) => {
                    (t = {
                        x: E,
                        y: (A * e) / h,
                    }),
                        0 === r ? f.moveTo(t.x, t.y) : f.bezierCurveTo(n.x + _, n.y, t.x - _, t.y, t.x, t.y),
                        (n = t),
                        (E += b);
                }),
                    f.stroke(),
                    f.lineTo(E - b, 0),
                    f.lineTo(0, 0),
                    f.fill(),
                    u && p < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
            });
    }
}
u(d, "defaultProps", { animate: !0 });
let p = d;
