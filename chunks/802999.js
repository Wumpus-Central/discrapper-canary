"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(599319),
    o = n(73153),
    c = n(944791),
    d = n(781763),
    h = n(661439),
    p = n(820284),
    u = n(970672),
    A = n(468691),
    m = n(765258),
    g = n(767852),
    f = n(906320),
    _ = n(652215),
    x = n(613057),
    y = n(318742);
class N extends s.PureComponent {
    _scrollerRef = s.createRef();
    _scrollToOnMount;
    _scrollToPadding = 0;
    state = { includeUpdatesInScroller: !1 };
    componentDidMount() {
        c.I(_.BVt.APPLICATION_LIBRARY),
            (0, u.h)(x.XK.LIBRARY),
            o.h.wait(() => (0, d.r)()),
            (0, h.X)(),
            null != this._scrollToOnMount &&
                null != this._scrollerRef.current &&
                this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    handleHeightTallerThanHalfViewportChange = (e) => {
        this.setState({ includeUpdatesInScroller: e });
    };
    renderToolbar() {
        return (0, i.jsx)(A.A, {});
    }
    scrollToRow = (e, t) => {
        let n = this._scrollerRef.current;
        null != n
            ? (e.focus(), n.scrollIntoViewRect({ start: t, end: t }), (this._scrollToOnMount = null))
            : ((this._scrollToOnMount = e), (this._scrollToPadding = t));
    };
    render() {
        let { includeUpdatesInScroller: e } = this.state,
            t = (0, i.jsx)("div", {
                children: (0, i.jsx)(p.A, {
                    section: _.JJy.LIBRARY_INSTALL_MODULE,
                    children: (0, i.jsx)(f.A, {
                        onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange,
                    }),
                }),
            });
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(m.A, { currentRoute: _.BVt.APPLICATION_LIBRARY, renderToolbar: this.renderToolbar }),
                e ? null : t,
                (0, i.jsxs)(a.Gt, {
                    className: r()(y.k, y.X),
                    ref: this._scrollerRef,
                    children: [
                        e ? t : null,
                        (0, i.jsx)(p.A, {
                            section: _.JJy.LIBRARY_APPLICATION_LIST,
                            children: (0, i.jsx)(g.A, { stickyHeader: !e, scrollToRow: this.scrollToRow }),
                        }),
                    ],
                }),
            ],
        });
    }
}
