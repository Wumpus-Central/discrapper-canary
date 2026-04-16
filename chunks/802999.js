n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    o = n(73153),
    d = n(944791),
    c = n(781763),
    u = n(661439),
    A = n(820284),
    h = n(970672),
    _ = n(468691),
    m = n(765258),
    g = n(767852),
    p = n(906320),
    E = n(652215),
    I = n(613057),
    f = n(20438);
class C extends l.PureComponent {
    _scrollerRef = l.createRef();
    _scrollToOnMount;
    _scrollToPadding = 0;
    state = { includeUpdatesInScroller: !1 };
    componentDidMount() {
        d.I(E.BVt.APPLICATION_LIBRARY),
            (0, h.h)(I.XK.LIBRARY),
            o.h.wait(() => (0, c.r)()),
            (0, u.X)(),
            null != this._scrollToOnMount &&
                null != this._scrollerRef.current &&
                this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    handleHeightTallerThanHalfViewportChange = (e) => {
        this.setState({ includeUpdatesInScroller: e });
    };
    renderToolbar() {
        return (0, i.jsx)(_.A, {});
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
                children: (0, i.jsx)(A.A, {
                    section: E.JJy.LIBRARY_INSTALL_MODULE,
                    children: (0, i.jsx)(p.A, {
                        onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange,
                    }),
                }),
            });
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(m.A, { currentRoute: E.BVt.APPLICATION_LIBRARY, renderToolbar: this.renderToolbar }),
                e ? null : t,
                (0, i.jsxs)(s.GtU, {
                    className: r()(f.k, f.X),
                    ref: this._scrollerRef,
                    children: [
                        e ? t : null,
                        (0, i.jsx)(A.A, {
                            section: E.JJy.LIBRARY_APPLICATION_LIST,
                            children: (0, i.jsx)(g.A, { stickyHeader: !e, scrollToRow: this.scrollToRow }),
                        }),
                    ],
                }),
            ],
        });
    }
}
