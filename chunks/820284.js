"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(174459),
    o = n(583613),
    l = n(652215);
class u extends r.Component {
    static Pages = l.liQ;
    static Sections = l.JJy;
    static Objects = l.ZSU;
    static ObjectTypes = l.AnalyticsObjectTypes;
    static defaultProps = { root: !1 };
    _loadId = null;
    _loadDate = this.props.root ? Date.now() : null;
    constructor(e) {
        super(e), null != e.loadId ? (this._loadId = e.loadId) : e.root && (this._loadId = (0, s.A)());
    }
    getLocation = (0, o.L_)((e, t, n, i) => {
        let r = {};
        return (
            null != e && (r.page = e),
            null != t && (r.section = t),
            null != n && (r.object = n),
            null != i && (r.objectType = i),
            r
        );
    });
    mergeLocation = (0, o.L_)((e, t) => ({ ...e, ...t }));
    getContext = (0, o.L_)((e, t, n) => ({ location: e, loadDate: t, loadId: n }));
    renderProvider(e) {
        let { section: t, page: n, object: r, objectType: s, children: o } = this.props,
            l = this.mergeLocation(e.location, this.getLocation(n, t, r, s)),
            u = this.getContext(l, this._loadDate ?? e.loadDate, this._loadId ?? e.loadId);
        return (0, i.jsx)(a.AnalyticsContext.Provider, { value: u, children: o });
    }
    render() {
        let { context: e } = this.props;
        return null != e
            ? this.renderProvider(e)
            : (0, i.jsx)(a.AnalyticsContext.Consumer, { children: (e) => this.renderProvider(e) });
    }
}
