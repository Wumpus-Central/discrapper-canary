n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(740916),
    o = n(678480),
    d = n(191931),
    c = n(886352),
    u = n(132696),
    m = n(871123),
    _ = n(366523),
    h = n(371794),
    p = n(863574),
    g = n(622413),
    A = n(652215),
    f = n(430317);
class x extends l.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1,
    };
    renderActions = () => {
        let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: l, showBuyInline: a } = this.props,
            r = (a || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, i.jsxs)("div", {
                  className: f.ED,
                  children: [
                      (0, i.jsx)(s.A, {
                          type: s.A.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && l ? f.ae : f.Ek,
                      }),
                      (0, i.jsx)(o.E, { systems: [A.uje.WINDOWS], className: f.iD }),
                      r ? (0, i.jsx)("div", { children: "deprecated!" }) : null,
                  ],
              });
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: a,
            sku: s,
            isHorizontal: o,
            storeListing: p,
        } = this.props;
        return (0, m.bF)(s)
            ? (0, i.jsx)(_.e, {
                  sku: s,
                  shape: "custom",
                  containerClassName: f.A$,
                  backgroundImageClassName: f.iZ,
                  foregroundImageClassName: f.O7,
              })
            : (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsx)(u.A, {
                          className: r()(f.H1, { [f.ZC]: o }),
                          video: null != p.previewVideo ? (0, h.YE)(s.applicationId, p.previewVideo) : void 0,
                          image: null != p.thumbnail ? (0, h.YE)(s.applicationId, p.thumbnail, 600) : void 0,
                          title: s.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: a,
                          splashClassName: f.ZI,
                          splashPlaceholderClassName: f.NB,
                      }),
                      s.exclusive
                          ? (0, i.jsx)(c.A, { className: r()(f.LJ, { [f.V9]: e }) })
                          : s.isTheGameAwardsWinner
                            ? (0, i.jsx)(d.A, { className: r()(f.LJ, { [f.V9]: e }) })
                            : null,
                  ],
              });
    };
    render() {
        let {
                sku: e,
                storeListing: t,
                isHorizontal: n,
                className: l,
                renderCustomTagline: a,
                renderCustomTitle: r,
                renderCustomMedia: s,
                isEmbed: o,
            } = this.props,
            d = o ? p.ug : g.A;
        return (0, i.jsx)(d, {
            className: l,
            renderMedia: null != s ? s : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
let E = x;
