n.d(t, { A: () => v }), n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(740916),
    c = n(678480),
    u = n(191931),
    d = n(886352),
    f = n(132696),
    p = n(871123),
    _ = n(366523),
    h = n(371794),
    m = n(863574),
    g = n(622413),
    E = n(652215),
    b = n(430317);
function y(e, t, n) {
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
let O = 600;
class A extends (r = a.PureComponent) {
    render() {
        let {
                sku: e,
                storeListing: t,
                isHorizontal: n,
                className: r,
                renderCustomTagline: a,
                renderCustomTitle: s,
                renderCustomMedia: o,
                isEmbed: l,
            } = this.props,
            c = l ? m.ug : g.A;
        return (0, i.jsx)(c, {
            className: r,
            renderMedia: null != o ? o : this.renderMedia,
            renderTitle: null != s ? s : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "renderActions", () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: r, showBuyInline: a } = this.props,
                    s = (a || !t.requiresPayment) && !e,
                    o = s && r;
                return null != n
                    ? n()
                    : (0, i.jsxs)("div", {
                          className: b.ED,
                          children: [
                              (0, i.jsx)(l.A, {
                                  type: l.A.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: o ? b.ae : b.Ek,
                              }),
                              (0, i.jsx)(c.E, {
                                  systems: [E.uje.WINDOWS],
                                  className: b.iD,
                              }),
                              s ? (0, i.jsx)("div", { children: "deprecated!" }) : null,
                          ],
                      });
            }),
            y(this, "renderMedia", () => {
                let {
                    playing: e,
                    muted: t,
                    showMediaPlaceholder: n,
                    onToggleMute: r,
                    sku: s,
                    isHorizontal: l,
                    storeListing: c,
                } = this.props;
                return (0, p.bF)(s)
                    ? (0, i.jsx)(_.e, {
                          sku: s,
                          shape: "custom",
                          containerClassName: b.A$,
                          backgroundImageClassName: b.iZ,
                          foregroundImageClassName: b.O7,
                      })
                    : (0, i.jsxs)(a.Fragment, {
                          children: [
                              (0, i.jsx)(f.A, {
                                  className: o()(b.H1, { [b.ZC]: l }),
                                  video: null != c.previewVideo ? (0, h.YE)(s.applicationId, c.previewVideo) : void 0,
                                  image: null != c.thumbnail ? (0, h.YE)(s.applicationId, c.thumbnail, O) : void 0,
                                  title: s.name,
                                  playing: e,
                                  muted: t,
                                  placeholder: n,
                                  onToggleMute: r,
                                  splashClassName: b.ZI,
                                  splashPlaceholderClassName: b.NB,
                              }),
                              s.exclusive
                                  ? (0, i.jsx)(d.A, { className: o()(b.LJ, { [b.V9]: e }) })
                                  : s.isTheGameAwardsWinner
                                    ? (0, i.jsx)(u.A, { className: o()(b.LJ, { [b.V9]: e }) })
                                    : null,
                          ],
                      });
            });
    }
}
y(A, "defaultProps", {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1,
});
let v = A;
