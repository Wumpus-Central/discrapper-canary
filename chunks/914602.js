n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(86357),
    c = n(54936),
    u = n(687755),
    d = n(351465),
    m = n(669021),
    h = n(73346),
    f = n(568836),
    p = n(345898),
    _ = n(981631),
    g = n(895402);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class C extends (i = l.PureComponent) {
    render() {
        let { sku: e, storeListing: t, isHorizontal: n, className: i, renderCustomTagline: l, renderCustomTitle: a, renderCustomMedia: o, isEmbed: s } = this.props,
            c = s ? f.$G : p.Z;
        return (0, r.jsx)(c, {
            className: i,
            renderMedia: null != o ? o : this.renderMedia,
            renderTitle: null != a ? a : () => e.name,
            renderTagline: null != l ? l : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'renderActions', () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: l } = this.props,
                    a = (l || !t.requiresPayment) && !e;
                return null != n
                    ? n()
                    : (0, r.jsxs)('div', {
                          className: g.priceOs,
                          children: [
                              (0, r.jsx)(s.Z, {
                                  type: s.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: a && i ? g.tilePriceWithVisibleBuyButton : g.tilePrice
                              }),
                              (0, r.jsx)(c.n, {
                                  systems: [_.TaA.WINDOWS],
                                  className: g.platform
                              }),
                              a ? (0, r.jsx)('div', { children: 'deprecated!' }) : null
                          ]
                      });
            }),
            E(this, 'renderMedia', () => {
                let { playing: e, muted: t, showMediaPlaceholder: n, onToggleMute: i, sku: a, isHorizontal: s, storeListing: c } = this.props;
                return (0, r.jsxs)(l.Fragment, {
                    children: [
                        (0, r.jsx)(m.Z, {
                            className: o()(g.splashContainer, { [g.splashContainerHorizontal]: s }),
                            video: null != c.previewVideo ? (0, h._W)(a.applicationId, c.previewVideo) : void 0,
                            image: null != c.thumbnail ? (0, h._W)(a.applicationId, c.thumbnail, 600) : null,
                            title: a.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: i,
                            splashClassName: g.splashVideo,
                            splashPlaceholderClassName: g.splashPlaceholder
                        }),
                        a.exclusive ? (0, r.jsx)(d.Z, { className: o()(g.exclusiveRegular, { [g.exclusivePlaying]: e }) }) : a.isTheGameAwardsWinner ? (0, r.jsx)(u.Z, { className: o()(g.exclusiveRegular, { [g.exclusivePlaying]: e }) }) : null
                    ]
                });
            });
    }
}
E(C, 'defaultProps', {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
}),
    (t.Z = C);
