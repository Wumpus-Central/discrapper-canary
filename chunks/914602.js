n.d(t, { Z: () => I }), n(388685);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(86357),
    c = n(54936),
    u = n(687755),
    d = n(351465),
    f = n(669021),
    _ = n(164670),
    p = n(848118),
    h = n(73346),
    m = n(568836),
    g = n(345898),
    E = n(981631),
    b = n(613658);
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
class v extends (r = a.PureComponent) {
    render() {
        let {
                sku: e,
                storeListing: t,
                isHorizontal: n,
                className: r,
                renderCustomTagline: a,
                renderCustomTitle: o,
                renderCustomMedia: s,
                isEmbed: l,
            } = this.props,
            c = l ? m.$G : g.Z;
        return (0, i.jsx)(c, {
            className: r,
            renderMedia: null != s ? s : this.renderMedia,
            renderTitle: null != o ? o : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "renderActions", () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: r, showBuyInline: a } = this.props,
                    o = (a || !t.requiresPayment) && !e,
                    s = o && r;
                return null != n
                    ? n()
                    : (0, i.jsxs)("div", {
                          className: b.priceOs,
                          children: [
                              (0, i.jsx)(l.Z, {
                                  type: l.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: s ? b.tilePriceWithVisibleBuyButton : b.tilePrice,
                              }),
                              (0, i.jsx)(c.n, {
                                  systems: [E.TaA.WINDOWS],
                                  className: b.platform,
                              }),
                              o ? (0, i.jsx)("div", { children: "deprecated!" }) : null,
                          ],
                      });
            }),
            y(this, "renderMedia", () => {
                let {
                    playing: e,
                    muted: t,
                    showMediaPlaceholder: n,
                    onToggleMute: r,
                    sku: o,
                    isHorizontal: l,
                    storeListing: c,
                } = this.props;
                return (0, _.K$)(o)
                    ? (0, i.jsx)(p.A, {
                          sku: o,
                          shape: "custom",
                          containerClassName: b.socialLayerStorefrontCardContainer,
                          backgroundImageClassName: b.socialLayerStorefrontCardBackgroundImage,
                          foregroundImageClassName: b.socialLayerStorefrontCardImage,
                      })
                    : (0, i.jsxs)(a.Fragment, {
                          children: [
                              (0, i.jsx)(f.Z, {
                                  className: s()(b.splashContainer, { [b.splashContainerHorizontal]: l }),
                                  video: null != c.previewVideo ? (0, h._W)(o.applicationId, c.previewVideo) : void 0,
                                  image: null != c.thumbnail ? (0, h._W)(o.applicationId, c.thumbnail, O) : void 0,
                                  title: o.name,
                                  playing: e,
                                  muted: t,
                                  placeholder: n,
                                  onToggleMute: r,
                                  splashClassName: b.splashVideo,
                                  splashPlaceholderClassName: b.splashPlaceholder,
                              }),
                              o.exclusive
                                  ? (0, i.jsx)(d.Z, { className: s()(b.exclusiveRegular, { [b.exclusivePlaying]: e }) })
                                  : o.isTheGameAwardsWinner
                                    ? (0, i.jsx)(u.Z, {
                                          className: s()(b.exclusiveRegular, { [b.exclusivePlaying]: e }),
                                      })
                                    : null,
                          ],
                      });
            });
    }
}
y(v, "defaultProps", {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1,
});
let I = v;
