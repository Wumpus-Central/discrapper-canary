n.d(t, { A: () => b }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(960488),
    a = n(311907),
    s = n(308528),
    o = n(456412),
    c = n(210714),
    u = n(851466),
    d = n(820284),
    p = n(341338),
    f = n(998515),
    h = n(652215),
    A = n(58682);
function g(e, t, n) {
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
class m extends i.Component {
    componentDidMount() {
        this.fetchStoreListing(), (0, c.d)("channel_store_listing");
    }
    render() {
        return null != this.props.skuId
            ? (0, r.jsx)(d.A, {
                  page: h.liQ.CHANNEL_STORE_LISTING,
                  root: !0,
                  children: (0, r.jsx)("div", {
                      className: A.gE,
                      children: (0, r.jsx)(l.qh, {
                          path: "*",
                          render: this.renderApplicationListing,
                      }),
                  }),
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            g(this, "fetchStoreListing", (e) => {
                let { channel: t, inputSkuId: n } = this.props;
                return null != e
                    ? s.A.fetchChannelStoreListing(t.id, e)
                    : null != n
                      ? s.A.fetchChannelStoreListing(t.id, n)
                      : s.A.fetchChannelStoreListing(t.id);
            }),
            g(this, "renderApplicationListing", (e) => {
                let { location: t } = e,
                    { channel: n, skuId: i, width: l } = this.props;
                return (0, r.jsx)(p.A, {
                    channel: n,
                    inputSkuId: i,
                    fetchStoreListing: this.fetchStoreListing,
                    location: t,
                    pageSize: (0, f.getPageSize)(l),
                });
            });
    }
}
let b = (0, o.A)(
    a.Ay.connectStores([u.A], (e) => {
        let { channel: t, inputSkuId: n } = e;
        return { skuId: null != n ? n : u.A.getSkuIdForChannel(t.id) };
    })(m),
);
