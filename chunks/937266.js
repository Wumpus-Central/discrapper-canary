n.d(t, { A: () => N, k: () => j });
var i = n(627968),
    r = n(64700),
    a = n(936504),
    l = n(158954),
    s = n(311907),
    o = n(800342),
    d = n(820284),
    c = n(73861),
    u = n(740916),
    _ = n(918085),
    m = n(863574),
    h = n(707606),
    p = n(456412),
    g = n(587895),
    A = n(976860),
    x = n(189081),
    f = n(67480),
    C = n(328968),
    I = n(652215),
    E = n(985018),
    v = n(659210);
class b extends r.Component {
    static defaultProps = { renderFallback: I.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : I.JJy.APPLICATION_EMBED, object: I.ZSU.CARD };
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
        return (0, i.jsx)("div", {
            className: v.h,
            children: (0, i.jsx)(l.$nd, {
                role: "link",
                variant: "active",
                size: "sm",
                text: E.intl.string(E.t["W+NB90"]),
                onClick: () => {
                    (0, A.pX)(I.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: r, renderCustomTitle: a, renderCustomTagline: l, renderCustomMedia: s } = this.props,
            { playing: o, muted: d } = this.state,
            c = r > m.Tm;
        return (0, i.jsx)(_.A, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: a,
            renderCustomTagline: l,
            renderCustomMedia: s,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: r, libraryApplication: a, renderCustomActions: l } = this.props;
        if (null != l) return (0, i.jsx)("div", { className: v.i, children: l() });
        if (null == n) return null;
        let s = null != n && n.primarySkuId === r,
            o = null != a && a.hasFlag(I.hM6.HIDDEN);
        return (0, i.jsxs)("div", {
            className: v.i,
            children: [
                !s || o
                    ? this.renderViewInStoreButton()
                    : (0, i.jsx)(c.A, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: v.h,
                          source: I.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, i.jsx)(u.A, { type: u.A.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: l } = this.props,
            s = n > m.Tm;
        return null == e || null == t
            ? r
                ? l()
                : (0, i.jsx)(m.Wb, { isHorizontal: s })
            : e.productLine === I.EZt.COLLECTIBLES
              ? (0, i.jsx)(d.A, { section: I.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, i.jsx)(d.A, {
                    section: I.JJy.APPLICATION_EMBED,
                    children: (0, i.jsx)(a.N_, {
                        onClick: this.handleLinkClick,
                        to: I.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let T = [f.A, x.A, C.A];
function y(e) {
    let { skuId: t } = e,
        n = f.A.get(t),
        i = null != n ? g.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: f.A.didFetchingSkuFail(t),
        inLibrary: null != n && x.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? C.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? x.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let S = (0, p.A)((0, h.A)(b)),
    N = s.Ay.connectStores(T, y)(S),
    j = (0, h.A)(s.Ay.connectStores(T, y)(b));
