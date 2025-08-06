n.d(t, { Z: () => O }), n(388685);
var r,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(86357),
    c = n(54936),
    u = n(687755),
    d = n(351465),
    f = n(669021),
    _ = n(73346),
    p = n(568836),
    h = n(345898),
    m = n(981631),
    g = n(817165);
function E(e, t, n) {
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
let b = 600;
class y extends (r = o.PureComponent) {
    render() {
        let {
                sku: e,
                storeListing: t,
                isHorizontal: n,
                className: r,
                renderCustomTagline: o,
                renderCustomTitle: a,
                renderCustomMedia: s,
                isEmbed: l,
            } = this.props,
            c = l ? p.$G : h.Z;
        return (0, i.jsx)(c, {
            className: r,
            renderMedia: null != s ? s : this.renderMedia,
            renderTitle: null != a ? a : () => e.name,
            renderTagline: null != o ? o : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
    constructor(...e) {
        super(...e),
            E(this, "renderActions", () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: r, showBuyInline: o } = this.props,
                    a = (o || !t.requiresPayment) && !e,
                    s = a && r;
                return null != n
                    ? n()
                    : (0, i.jsxs)("div", {
                          className: g.priceOs,
                          children: [
                              (0, i.jsx)(l.Z, {
                                  type: l.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: s ? g.tilePriceWithVisibleBuyButton : g.tilePrice,
                              }),
                              (0, i.jsx)(c.n, {
                                  systems: [m.TaA.WINDOWS],
                                  className: g.platform,
                              }),
                              a ? (0, i.jsx)("div", { children: "deprecated!" }) : null,
                          ],
                      });
            }),
            E(this, "renderMedia", () => {
                let {
                    playing: e,
                    muted: t,
                    showMediaPlaceholder: n,
                    onToggleMute: r,
                    sku: a,
                    isHorizontal: l,
                    storeListing: c,
                } = this.props;
                return (0, i.jsxs)(o.Fragment, {
                    children: [
                        (0, i.jsx)(f.Z, {
                            className: s()(g.splashContainer, { [g.splashContainerHorizontal]: l }),
                            video: null != c.previewVideo ? (0, _._W)(a.applicationId, c.previewVideo) : void 0,
                            image: null != c.thumbnail ? (0, _._W)(a.applicationId, c.thumbnail, b) : null,
                            title: a.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: r,
                            splashClassName: g.splashVideo,
                            splashPlaceholderClassName: g.splashPlaceholder,
                        }),
                        a.exclusive
                            ? (0, i.jsx)(d.Z, { className: s()(g.exclusiveRegular, { [g.exclusivePlaying]: e }) })
                            : a.isTheGameAwardsWinner
                              ? (0, i.jsx)(u.Z, { className: s()(g.exclusiveRegular, { [g.exclusivePlaying]: e }) })
                              : null,
                    ],
                });
            });
    }
}
E(y, "defaultProps", {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1,
});
let O = y;
