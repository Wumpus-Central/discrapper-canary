n.d(t, { A: () => y, k: () => N });
var i = n(627968),
    l = n(64700),
    r = n(936504),
    a = n(311907),
    s = n(421380),
    o = n(800342),
    d = n(820284),
    c = n(73861),
    u = n(740916),
    _ = n(918085),
    m = n(863574),
    h = n(707606),
    p = n(456412),
    g = n(587895),
    A = n(189081),
    x = n(67480),
    f = n(328968),
    C = n(652215),
    I = n(985018),
    E = n(449880);
class v extends l.Component {
    static defaultProps = { renderFallback: C.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : C.JJy.APPLICATION_EMBED, object: C.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, o.QB)(t);
    }
    handleToggleMute = () => {
        this.setState({ muted: !this.state.muted });
    };
    handleMouseEnter = () => {
        this.setState({ playing: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ playing: !1 });
    };
    handleActionButtonClick = (e) => e.preventDefault();
    handleBuyButtonClick = (e) => e.preventDefault();
    handleLinkClick = (e) => {
        let { onEmbedClick: t } = this.props;
        null != t && t(e);
    };
    renderViewInStoreButton() {
        return (0, i.jsx)(s.$n.Link, {
            to: C.BVt.APPLICATION_STORE,
            className: E.h,
            color: s.$n.Colors.GREEN,
            size: s.$n.Sizes.SMALL,
            children: I.intl.string(I.t["W+NB90"]),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: l, renderCustomTitle: r, renderCustomTagline: a, renderCustomMedia: s } = this.props,
            { playing: o, muted: d } = this.state,
            c = l > m.Tm;
        return (0, i.jsx)(_.A, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: r,
            renderCustomTagline: a,
            renderCustomMedia: s,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: l, libraryApplication: r, renderCustomActions: a } = this.props;
        if (null != a) return (0, i.jsx)("div", { className: E.i, children: a() });
        if (null == n) return null;
        let s = null != n && n.primarySkuId === l,
            o = null != r && r.hasFlag(C.hM6.HIDDEN);
        return (0, i.jsxs)("div", {
            className: E.i,
            children: [
                !s || o
                    ? this.renderViewInStoreButton()
                    : (0, i.jsx)(c.A, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: E.h,
                          source: C.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, i.jsx)(u.A, { type: u.A.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: l, renderFallback: a } = this.props,
            s = n > m.Tm;
        return null == e || null == t
            ? l
                ? a()
                : (0, i.jsx)(m.Wb, { isHorizontal: s })
            : e.productLine === C.EZt.COLLECTIBLES
              ? (0, i.jsx)(d.A, { section: C.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, i.jsx)(d.A, {
                    section: C.JJy.APPLICATION_EMBED,
                    children: (0, i.jsx)(r.N_, {
                        onClick: this.handleLinkClick,
                        to: C.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let b = [x.A, A.A, f.A];
function T(e) {
    let { skuId: t } = e,
        n = x.A.get(t),
        i = null != n ? g.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: x.A.didFetchingSkuFail(t),
        inLibrary: null != n && A.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? f.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? A.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let S = (0, p.A)((0, h.A)(v)),
    y = a.Ay.connectStores(b, T)(S),
    N = (0, h.A)(a.Ay.connectStores(b, T)(v));
