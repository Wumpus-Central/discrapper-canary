n.d(t, { A: () => d });
var i = n(627968),
    a = n(64700),
    r = n(132500),
    s = n(954571),
    l = n(583613),
    o = n(652215);
class d extends a.Component {
    static Pages = o.liQ;
    static Sections = o.JJy;
    static Objects = o.ZSU;
    static ObjectTypes = o.AnalyticsObjectTypes;
    static defaultProps = { root: !1 };
    _loadId = null;
    _loadDate = this.props.root ? Date.now() : null;
    constructor(e) {
        super(e), null != e.loadId ? (this._loadId = e.loadId) : e.root && (this._loadId = (0, r.A)());
    }
    getLocation = (0, l.L_)((e, t, n, i) => {
        let a = {};
        return (
            null != e && (a.page = e),
            null != t && (a.section = t),
            null != n && (a.object = n),
            null != i && (a.objectType = i),
            a
        );
    });
    mergeLocation = (0, l.L_)((e, t) => ({ ...e, ...t }));
    getContext = (0, l.L_)((e, t, n) => ({ location: e, loadDate: t, loadId: n }));
    renderProvider(e) {
        let { section: t, page: n, object: a, objectType: r, children: l } = this.props,
            o = this.mergeLocation(e.location, this.getLocation(n, t, a, r)),
            d = this.getContext(o, this._loadDate ?? e.loadDate, this._loadId ?? e.loadId);
        return (0, i.jsx)(s.AnalyticsContext.Provider, { value: d, children: l });
    }
    render() {
        let { context: e } = this.props;
        return null != e
            ? this.renderProvider(e)
            : (0, i.jsx)(s.AnalyticsContext.Consumer, { children: (e) => this.renderProvider(e) });
    }
}
