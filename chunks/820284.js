n.d(e, { A: () => c });
var i = n(477900),
    r = n(582128),
    l = n(132500),
    o = n(174459),
    a = n(583613),
    u = n(652215);
class c extends r.Component {
    static Pages = u.liQ;
    static Sections = u.JJy;
    static Objects = u.ZSU;
    static ObjectTypes = u.AnalyticsObjectTypes;
    static defaultProps = { root: !1 };
    _loadId = null;
    _loadDate = this.props.root ? Date.now() : null;
    constructor(t) {
        super(t), null != t.loadId ? (this._loadId = t.loadId) : t.root && (this._loadId = (0, l.A)());
    }
    getLocation = (0, a.L_)((t, e, n, i) => {
        let r = {};
        return (
            null != t && (r.page = t),
            null != e && (r.section = e),
            null != n && (r.object = n),
            null != i && (r.objectType = i),
            r
        );
    });
    mergeLocation = (0, a.L_)((t, e) => ({ ...t, ...e }));
    getContext = (0, a.L_)((t, e, n) => ({ location: t, loadDate: e, loadId: n }));
    renderProvider(t) {
        let { section: e, page: n, object: r, objectType: l, children: a } = this.props,
            u = this.mergeLocation(t.location, this.getLocation(n, e, r, l)),
            c = this.getContext(u, this._loadDate ?? t.loadDate, this._loadId ?? t.loadId);
        return (0, i.jsx)(o.AnalyticsContext.Provider, { value: c, children: a });
    }
    render() {
        let { context: t } = this.props;
        return null != t
            ? this.renderProvider(t)
            : (0, i.jsx)(o.AnalyticsContext.Consumer, { children: (t) => this.renderProvider(t) });
    }
}
