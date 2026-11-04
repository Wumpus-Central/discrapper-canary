var r = o(477900),
    s = o(582128),
    i = o(115560),
    l = o(129230),
    n = o(583613),
    a = o(652215);
class d extends s.Component {
    static Pages = a.liQ;
    static Sections = a.JJy;
    static Objects = a.ZSU;
    static ObjectTypes = a.btD;
    static defaultProps = { root: !1 };
    _loadId = null;
    _loadDate = this.props.root ? Date.now() : null;
    constructor(t) {
        (super(t), null != t.loadId ? (this._loadId = t.loadId) : t.root && (this._loadId = (0, i.A)()));
    }
    getLocation = (0, n.L_)((t, e, o, r) => {
        let s = {};
        return (
            null != t && (s.page = t),
            null != e && (s.section = e),
            null != o && (s.object = o),
            null != r && (s.objectType = r),
            s
        );
    });
    mergeLocation = (0, n.L_)((t, e) => ({ ...t, ...e }));
    getContext = (0, n.L_)((t, e, o) => ({ location: t, loadDate: e, loadId: o }));
    renderProvider(t) {
        let { section: e, page: o, object: s, objectType: i, children: n } = this.props,
            a = this.mergeLocation(t.location, this.getLocation(o, e, s, i)),
            d = this.getContext(a, this._loadDate ?? t.loadDate, this._loadId ?? t.loadId);
        return (0, r.jsx)(l.Ig.Provider, { value: d, children: n });
    }
    render() {
        let { context: t } = this.props;
        return null != t
            ? this.renderProvider(t)
            : (0, r.jsx)(l.Ig.Consumer, { children: (t) => this.renderProvider(t) });
    }
}
o.d(e, {}, { A: d });
