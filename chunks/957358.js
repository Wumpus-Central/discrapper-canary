"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(998304),
    o = n(936593);
class c extends s.PureComponent {
    dataChangedAt;
    fillColor;
    maxValue;
    canvas = s.createRef();
    animationFrameRequestId;
    static defaultProps = { animate: !0 };
    onDataUpdate(e, t) {
        let { maxValue: n, data: i, animate: s } = this.props,
            l = null == e || (e.data !== t.data && !r().isEqual(e.data, t.data));
        if (
            (l && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...i))),
            l || null == e || (!e.animate && s) || e.color !== this.props.color)
        ) {
            let e = a.E2(this.props.color);
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
            data: s,
            updateInterval: l,
            color: r,
            numUpdatesToShow: o,
            lineWidth: c,
            animate: d,
            gradientStopColor: h,
        } = this.props;
        if (s.length < 2) return;
        let p = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
            u = i.getContext("2d"),
            A = this.maxValue;
        (u.strokeStyle = r), (u.lineWidth = c);
        let m = i.height - u.lineWidth,
            g = u.createLinearGradient(0, 0, 0, m);
        if (null != h) g.addColorStop(0, h);
        else {
            let { r: e, g: t, b: n } = a.E2(r);
            g.addColorStop(0, `rgba(${e}, ${t}, ${n}, 0)`);
        }
        g.addColorStop(1, this.fillColor), (u.fillStyle = g);
        let f = s.length >= o ? o : s.length;
        u.setTransform(1, 0, 0, -1, 0, i.height),
            u.clearRect(0, 0, i.width, i.height),
            u.translate(0, 0.5 * u.lineWidth);
        let _ = Math.floor(i.width / (f - 3)),
            x = 0.5 * _;
        u.translate(_ - _ * p, 0), u.beginPath();
        let y = -_;
        s.forEach((e, i) => {
            (t = { x: y, y: (m * e) / A }),
                0 === i ? u.moveTo(t.x, t.y) : u.bezierCurveTo(n.x + x, n.y, t.x - x, t.y, t.x, t.y),
                (n = t),
                (y += _);
        }),
            u.stroke(),
            u.lineTo(y - _, 0),
            u.lineTo(0, 0),
            u.fill(),
            d && p < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
    };
    render() {
        let { className: e, pixelWidth: t, pixelHeight: n } = this.props;
        return (0, i.jsx)("div", {
            className: e,
            children: (0, i.jsx)("canvas", { ref: this.canvas, className: o.J, width: t, height: n }),
        });
    }
}
let d = c;
