n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(714384),
    o = n(740916),
    d = n(191931),
    c = n(886352),
    u = n(132696),
    m = n(871123),
    _ = n(366523),
    h = n(371794),
    p = n(863574),
    g = n(622413),
    A = n(652215),
    f = n(174264);
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
            s = (a || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, i.jsxs)("div", {
                  className: f.ED,
                  children: [
                      (0, i.jsx)(o.A, {
                          type: o.A.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: s && l ? f.ae : f.Ek,
                      }),
                      (0, i.jsx)(r.E, { systems: [A.uje.WINDOWS], className: f.iD }),
                      s ? (0, i.jsx)("div", { children: "deprecated!" }) : null,
                  ],
              });
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: a,
            sku: r,
            isHorizontal: o,
            storeListing: p,
        } = this.props;
        return (0, m.bF)(r)
            ? (0, i.jsx)(_.e, {
                  sku: r,
                  shape: "custom",
                  containerClassName: f.A$,
                  backgroundImageClassName: f.iZ,
                  foregroundImageClassName: f.O7,
              })
            : (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsx)(u.A, {
                          className: s()(f.H1, { [f.ZC]: o }),
                          video: null != p.previewVideo ? (0, h.YE)(r.applicationId, p.previewVideo) : void 0,
                          image: null != p.thumbnail ? (0, h.YE)(r.applicationId, p.thumbnail, 600) : void 0,
                          title: r.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: a,
                          splashClassName: f.ZI,
                          splashPlaceholderClassName: f.NB,
                      }),
                      r.exclusive
                          ? (0, i.jsx)(c.A, { className: s()(f.LJ, { [f.V9]: e }) })
                          : r.isTheGameAwardsWinner
                            ? (0, i.jsx)(d.A, { className: s()(f.LJ, { [f.V9]: e }) })
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
                renderCustomTitle: s,
                renderCustomMedia: r,
                isEmbed: o,
            } = this.props,
            d = o ? p.ug : g.A;
        return (0, i.jsx)(d, {
            className: l,
            renderMedia: null != r ? r : this.renderMedia,
            renderTitle: null != s ? s : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
let C = x;
