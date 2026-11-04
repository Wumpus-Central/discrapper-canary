(s.d(t, { j: () => r, L: () => a }), s(899898));
var i = s(621466);
let n = { root: null, rootMargin: "0px", threshold: 0.5 };
class r {
    _observer;
    _options;
    _nodes = new WeakMap();
    _components = new WeakMap();
    _visibleComponents = new WeakSet();
    constructor(e = n) {
        ((this._options = e),
            null != window.IntersectionObserver &&
                (this._observer = new window.IntersectionObserver(this._handleEntries, e)));
    }
    _handleEntries = (e) => {
        e.forEach((e) => {
            let t;
            if (null != e.isIntersecting) t = e.isIntersecting;
            else {
                let { threshold: s } = this._options;
                t =
                    null == s
                        ? e.intersectionRatio > 0
                        : Array.isArray(s)
                          ? s.some((t) => e.intersectionRatio > t)
                          : e.intersectionRatio > s;
            }
            let s = this._nodes.get(e.target);
            if (null != s) {
                let e = !1;
                (t
                    ? this._visibleComponents.has(s) || (this._visibleComponents.add(s), (e = !0))
                    : this._visibleComponents.has(s) && (this._visibleComponents.delete(s), (e = !0)),
                    e && s.forceUpdate());
            }
        });
    };
    isVisible(e) {
        return null == this._observer || this._visibleComponents.has(e);
    }
    observe(e, t) {
        let s = this._observer;
        if (null == s) return;
        this.unobserve(e);
        let n = t.current;
        (0, i.vq)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), s.observe(n));
    }
    unobserve(e) {
        let t = this._observer;
        if (null == t) return;
        let s = this._components.get(e);
        null != s &&
            (this._nodes.delete(s), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(s));
    }
}
var o = s(582128),
    l = s(115560);
let h = (0, l.A)(),
    p = new Map(),
    b = new Map();
class a extends o.Component {
    elementId;
    isVisible = !1;
    static defaultProps = {
        active: !0,
        children: o.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 5e-324],
    };
    constructor(e) {
        super(e);
        let { root: t, rootMargin: s, threshold: i } = e;
        t ? (p.has(t) ? (this.elementId = p.get(t) || "") : p.set(t, (0, l.A)())) : (this.elementId = h);
        let n = this.getVisibilityObserverId();
        b.has(n) || b.set(n, new r({ root: t, rootMargin: s, threshold: i }));
    }
    componentDidMount() {
        if (this.props.active) {
            let e = this.getVisibilityObserver();
            (e.observe(this, this.props.innerRef),
                (this.isVisible = e.isVisible(this)),
                this.props.onChange(this.isVisible));
        }
    }
    componentDidUpdate(e) {
        let t = this.getVisibilityObserver(),
            s = t.isVisible(this);
        (this.props.active && s !== this.isVisible && this.props.onChange(s),
            !e.active && this.props.active
                ? t.observe(this, this.props.innerRef)
                : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = s));
    }
    componentWillUnmount() {
        this.getVisibilityObserver().unobserve(this);
    }
    getVisibilityObserverId() {
        let { rootMargin: e, threshold: t } = this.props;
        return `${this.elementId} ${e} ${t}`;
    }
    getVisibilityObserver() {
        let e = this.getVisibilityObserverId(),
            t = b.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return o.Children.only(this.props.children);
    }
}
