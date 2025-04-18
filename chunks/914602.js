n.d(t, { Z: () => y }), n(388685);
var r,
    i = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(86357),
    c = n(54936),
    u = n(687755),
    d = n(351465),
    p = n(669021),
    m = n(73346),
    f = n(568836),
    h = n(345898),
    g = n(981631),
    _ = n(506644);
function b(e, t, n) {
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
class x extends (r = a.PureComponent) {
    render() {
        let { sku: e, storeListing: t, isHorizontal: n, className: r, renderCustomTagline: a, renderCustomTitle: l, renderCustomMedia: o, isEmbed: s } = this.props,
            c = s ? f.$G : h.Z;
        return (0, i.jsx)(c, {
            className: r,
            renderMedia: null != o ? o : this.renderMedia,
            renderTitle: null != l ? l : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'renderActions', () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: r, showBuyInline: a } = this.props,
                    l = (a || !t.requiresPayment) && !e;
                return null != n
                    ? n()
                    : (0, i.jsxs)('div', {
                          className: _.priceOs,
                          children: [
                              (0, i.jsx)(s.Z, {
                                  type: s.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: l && r ? _.tilePriceWithVisibleBuyButton : _.tilePrice
                              }),
                              (0, i.jsx)(c.n, {
                                  systems: [g.TaA.WINDOWS],
                                  className: _.platform
                              }),
                              l ? (0, i.jsx)('div', { children: 'deprecated!' }) : null
                          ]
                      });
            }),
            b(this, 'renderMedia', () => {
                let { playing: e, muted: t, showMediaPlaceholder: n, onToggleMute: r, sku: l, isHorizontal: s, storeListing: c } = this.props;
                return (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsx)(p.Z, {
                            className: o()(_.splashContainer, { [_.splashContainerHorizontal]: s }),
                            video: null != c.previewVideo ? (0, m._W)(l.applicationId, c.previewVideo) : void 0,
                            image: null != c.thumbnail ? (0, m._W)(l.applicationId, c.thumbnail, 600) : null,
                            title: l.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: r,
                            splashClassName: _.splashVideo,
                            splashPlaceholderClassName: _.splashPlaceholder
                        }),
                        l.exclusive ? (0, i.jsx)(d.Z, { className: o()(_.exclusiveRegular, { [_.exclusivePlaying]: e }) }) : l.isTheGameAwardsWinner ? (0, i.jsx)(u.Z, { className: o()(_.exclusiveRegular, { [_.exclusivePlaying]: e }) }) : null
                    ]
                });
            });
    }
}
b(x, 'defaultProps', {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
});
let y = x;
