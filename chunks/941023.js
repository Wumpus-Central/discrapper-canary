n.d(t, { A: () => E }), n(896048);
var i,
    r = n(64700),
    s = n(735438),
    l = n.n(s),
    o = n(621466),
    a = n(52133),
    c = n(451988),
    d = n(684013),
    u = n(242286),
    h = n(899699),
    p = n(456797),
    f = n(723702);
function b(e, t, n) {
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
let g = {
        x: 0,
        y: 0,
    },
    y = !1;
function A(e) {
    let { clientX: t, clientY: n } = e;
    (y = !0), (g.x = t), (g.y = n);
}
let m = new Map();
function O(e, t) {
    if (null == t) m.delete(e), 0 === m.size && (window.removeEventListener("mousemove", A), (y = !1));
    else {
        let n = m.get(e);
        if (null != n && (0, a.A)(n.zone, t.zone)) return;
        0 === m.size && window.addEventListener("mousemove", A), m.set(e, t);
    }
    if (f.isPlatformEmbedded)
        if (u.default.isCurrentPidOutOfProcess()) {
            let e = Array.from(m.values()).map((e) => {
                let { zone: t } = e;
                return {
                    name: t.name,
                    left: t.left / window.innerWidth,
                    top: t.top / window.innerHeight,
                    right: t.right / window.innerWidth,
                    bottom: (t.bottom / window.innerHeight) * 1.5,
                };
            });
            d.A.setClickZones(e);
        } else {
            var n;
            let e = (0, h.m)();
            if (null == e) return;
            e.broadcastCommand({
                message: "set_click_zones",
                zones: Array.from(m.values()).map((e) => {
                    let { zone: t } = e;
                    return t;
                }),
            }),
                (n = e),
                v ||
                    (n.setClickZoneCallback((e, t, n) => {
                        let i = m.get(e);
                        null != i && (y || ((g.x = t), (g.y = n)), i.instance.click());
                    }),
                    (v = !0));
        }
}
let v = !1;
class E extends (i = r.PureComponent) {
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), O(this.zone, null);
    }
    componentDidUpdate(e) {
        let { observe: t } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop());
    }
    render() {
        return r.Children.only(this.props.children);
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone);
    }
    click() {
        let e = (0, p._)("click", g.x, g.y);
        (0, p.K)(e, g.x, g.y);
    }
    constructor(...e) {
        super(...e),
            b(this, "zone", l().uniqueId("ClickArea")),
            b(this, "interval", new c.IX()),
            b(this, "updateZone", () => {
                let e = this.props.contentDomRef.current;
                if ((0, o.vq)(e)) {
                    let { left: t, top: n, right: i, bottom: r } = e.getBoundingClientRect();
                    O(this.zone, {
                        instance: this,
                        zone: {
                            name: this.zone,
                            left: Math.floor(t),
                            top: Math.floor(n),
                            right: Math.ceil(i),
                            bottom: Math.ceil(r),
                        },
                    });
                }
            });
    }
}
b(E, "defaultProps", {
    observe: !0,
    observeInterval: 1000,
});
