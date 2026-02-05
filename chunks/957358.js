n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(998304),
    o = n(542692);
class d extends r.PureComponent {
    dataChangedAt;
    fillColor;
    maxValue;
    canvas = r.createRef();
    animationFrameRequestId;
    static defaultProps = { animate: !0 };
    onDataUpdate(e, t) {
        let { maxValue: n, data: i, animate: r } = this.props,
            a = null == e || (e.data !== t.data && !l().isEqual(e.data, t.data));
        if (
            (a && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...i))),
            a || null == e || (!e.animate && r) || e.color !== this.props.color)
        ) {
            let e = s.E2(this.props.color);
            (this.fillColor = `rgba(${e.r}, ${e.g}, ${e.b}, 0.5)`),
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
    updateAnimation = (e) => {
        let t,
            n,
            i = this.canvas.current;
        if (null == i) return;
        let {
            data: r,
            updateInterval: a,
            color: l,
            numUpdatesToShow: o,
            lineWidth: d,
            animate: c,
            gradientStopColor: u,
        } = this.props;
        if (r.length < 2) return;
        let A = Math.max(Math.min((e - this.dataChangedAt) / a, 1), 0),
            h = i.getContext("2d"),
            _ = this.maxValue;
        (h.strokeStyle = l), (h.lineWidth = d);
        let m = i.height - h.lineWidth,
            p = h.createLinearGradient(0, 0, 0, m);
        if (null != u) p.addColorStop(0, u);
        else {
            let { r: e, g: t, b: n } = s.E2(l);
            p.addColorStop(0, `rgba(${e}, ${t}, ${n}, 0)`);
        }
        p.addColorStop(1, this.fillColor), (h.fillStyle = p);
        let g = r.length >= o ? o : r.length;
        h.setTransform(1, 0, 0, -1, 0, i.height),
            h.clearRect(0, 0, i.width, i.height),
            h.translate(0, 0.5 * h.lineWidth);
        let E = Math.floor(i.width / (g - 3)),
            f = 0.5 * E;
        h.translate(E - E * A, 0), h.beginPath();
        let I = -E;
        r.forEach((e, i) => {
            (t = { x: I, y: (m * e) / _ }),
                0 === i ? h.moveTo(t.x, t.y) : h.bezierCurveTo(n.x + f, n.y, t.x - f, t.y, t.x, t.y),
                (n = t),
                (I += E);
        }),
            h.stroke(),
            h.lineTo(I - E, 0),
            h.lineTo(0, 0),
            h.fill(),
            c && A < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
    };
    render() {
        let { className: e, pixelWidth: t, pixelHeight: n } = this.props;
        return (0, i.jsx)("div", {
            className: e,
            children: (0, i.jsx)("canvas", { ref: this.canvas, className: o.J, width: t, height: n }),
        });
    }
}
let c = d;
