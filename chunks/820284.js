o.d(e, { A: () => d });
var s = o(477900),
    r = o(582128),
    n = o(132500),
    i = o(174459),
    l = o(583613),
    a = o(652215);
class d extends r.Component {
    static Pages = a.liQ;
    static Sections = a.JJy;
    static Objects = a.ZSU;
    static ObjectTypes = a.AnalyticsObjectTypes;
    static defaultProps = { root: !1 };
    _loadId = null;
    _loadDate = this.props.root ? Date.now() : null;
    constructor(t) {
        (super(t), null != t.loadId ? (this._loadId = t.loadId) : t.root && (this._loadId = (0, n.A)()));
    }
    getLocation = (0, l.L_)((t, e, o, s) => {
        let r = {};
        return (
            null != t && (r.page = t),
            null != e && (r.section = e),
            null != o && (r.object = o),
            null != s && (r.objectType = s),
            r
        );
    });
    mergeLocation = (0, l.L_)((t, e) => ({ ...t, ...e }));
    getContext = (0, l.L_)((t, e, o) => ({ location: t, loadDate: e, loadId: o }));
    renderProvider(t) {
        let { section: e, page: o, object: r, objectType: n, children: l } = this.props,
            a = this.mergeLocation(t.location, this.getLocation(o, e, r, n)),
            d = this.getContext(a, this._loadDate ?? t.loadDate, this._loadId ?? t.loadId);
        return (0, s.jsx)(i.AnalyticsContext.Provider, { value: d, children: l });
    }
    render() {
        let { context: t } = this.props;
        return null != t
            ? this.renderProvider(t)
            : (0, s.jsx)(i.AnalyticsContext.Consumer, { children: (t) => this.renderProvider(t) });
    }
}
