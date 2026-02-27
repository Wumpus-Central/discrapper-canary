n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    l = n(873263),
    a = n(311907),
    s = n(308528),
    o = n(456412),
    d = n(210714),
    c = n(851466),
    u = n(820284),
    A = n(341338),
    h = n(998515),
    _ = n(652215),
    m = n(58682);
class p extends r.Component {
    componentDidMount() {
        this.fetchStoreListing(), (0, d.d)("channel_store_listing");
    }
    fetchStoreListing = (e) => {
        let { channel: t, inputSkuId: n } = this.props;
        return null != e
            ? s.A.fetchChannelStoreListing(t.id, e)
            : null != n
              ? s.A.fetchChannelStoreListing(t.id, n)
              : s.A.fetchChannelStoreListing(t.id);
    };
    renderApplicationListing = (e) => {
        let { location: t } = e,
            { channel: n, skuId: r, width: l } = this.props;
        return (0, i.jsx)(A.A, {
            channel: n,
            inputSkuId: r,
            fetchStoreListing: this.fetchStoreListing,
            location: t,
            pageSize: (0, h.getPageSize)(l),
        });
    };
    render() {
        return null != this.props.skuId
            ? (0, i.jsx)(u.A, {
                  page: _.liQ.CHANNEL_STORE_LISTING,
                  root: !0,
                  children: (0, i.jsx)("div", {
                      className: m.gE,
                      children: (0, i.jsx)(l.qh, { path: "*", render: this.renderApplicationListing }),
                  }),
              })
            : null;
    }
}
let g = (0, o.A)(
    a.Ay.connectStores([c.A], (e) => {
        let { channel: t, inputSkuId: n } = e;
        return { skuId: null != n ? n : c.A.getSkuIdForChannel(t.id) };
    })(p),
);
