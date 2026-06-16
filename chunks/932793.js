t.d(a, { m: () => y });
var n,
    s = t(627968),
    l = t(64700),
    r = t(503698),
    i = t.n(r),
    o = t(862482),
    d = t(534514),
    h = t(292666),
    c = t(939249),
    g = t(921853),
    u = t(320448);
t(321073);
var p = t(735438),
    P = t.n(p),
    m = (((n = {}).PAGE = "PAGE"), (n.GAP = "GAP"), (n.BACK = "BACK"), (n.NEXT = "NEXT"), n);
class k extends l.PureComponent {
    static defaultProps = { maxVisiblePages: 9, hideMaxPage: !1 };
    changePageTo = (e) => {
        let { selectedPage: a, onPageChange: t } = this.props;
        a !== e && null != t && t(e);
    };
    handleForward = () => {
        this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount));
    };
    handleBackward = () => {
        this.changePageTo(Math.max(this.props.selectedPage - 1, 1));
    };
    handleJump = (e) => {
        this.changePageTo(e);
    };
    getNeighborBounds() {
        let { totalPageCount: e, maxVisiblePages: a, selectedPage: t } = this.props,
            n = Math.ceil(a / 2),
            s = Math.floor(a / 2),
            [l, r] = t <= n ? [1, a] : t > e - s ? [e - a + 1, e] : [t - n + 1, t + s];
        return [Math.max(l, 1), Math.min(r, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: a, hideMaxPage: t } = this.props,
            [n, s] = this.getNeighborBounds(),
            l = { type: "BACK", key: "back", disabled: 1 === a, selected: !1, navigateToPage: this.handleBackward },
            r = { type: "NEXT", key: "next", disabled: a === e, selected: !1, navigateToPage: this.handleForward },
            i = [],
            o = [];
        return (
            n > 1 &&
                ((i = [
                    { type: "PAGE", key: "page-1", targetPage: 1, navigateToPage: () => this.handleJump(1) },
                    { type: "GAP", key: "left-gap" },
                ]),
                (n += 2)),
            s < e &&
                ((o = [{ type: "GAP", key: "right-gap" }]),
                t ||
                    o.push({ type: "PAGE", key: `page-${e}`, targetPage: e, navigateToPage: () => this.handleJump(e) }),
                (s -= 2)),
            [
                l,
                ...i,
                ...P()
                    .range(n, s + 1)
                    .map((e) => ({
                        type: "PAGE",
                        key: `page-${e}`,
                        targetPage: e,
                        selected: e === a,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e),
                    })),
                ...o,
                r,
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: a } = this.props;
        return a({ pages: this.getPageList(), hasMultiplePages: e > 1 });
    }
}
var N = t(375708),
    x = t(374089);
function C(e) {
    let { page: a, totalPageCount: t, disabled: n, onPageChange: r } = e,
        [o, g] = l.useState(!1),
        [u, p] = l.useState(null),
        P = null != u && u >= 1 && u <= t;
    return n
        ? (0, s.jsx)(
              d.D,
              { className: x.rQ, "aria-hidden": !0, variant: "heading-sm/semibold", children: "\u2026" },
              a.key,
          )
        : o
          ? (0, s.jsx)("div", {
                className: x.mF,
                children: (0, s.jsx)(
                    h.k,
                    {
                        type: "number",
                        autoFocus: !0,
                        value: null == u ? "" : `${u}`,
                        onChange: (e) => {
                            let a = parseInt(e);
                            "" === e || isNaN(a) ? p(null) : p(a);
                        },
                        onBlur: () => {
                            g(!1), p(null);
                        },
                        onKeyUp: (e) => {
                            "Enter" === e.key && null != u && P && (r(u), g(!1), p(null));
                        },
                        disabled: n,
                    },
                    a.key,
                ),
            })
          : (0, s.jsx)(
                c.D,
                {
                    onClick: () => g(!0),
                    children: (0, s.jsx)(d.D, {
                        className: i()(x.hJ, x.rQ),
                        "aria-hidden": !0,
                        variant: "heading-sm/semibold",
                        children: "\u2026",
                    }),
                },
                a.key,
            );
}
function y(e) {
    let {
            currentPage: a,
            totalCount: t,
            pageSize: n,
            maxVisiblePages: l,
            disablePaginationGap: r,
            onPageChange: d,
            hideMaxPage: h = !1,
            className: p,
            renderPageWrapper: P,
        } = e,
        y = Math.ceil(t / n);
    return (0, s.jsx)(k, {
        totalPageCount: y,
        selectedPage: a,
        maxVisiblePages: l,
        hideMaxPage: h,
        onPageChange: function (e) {
            null != d && d(e);
        },
        children: function (e) {
            let { pages: a, hasMultiplePages: t } = e;
            return t
                ? (0, s.jsx)("div", {
                      className: i()(x.Ug, p),
                      children: (0, s.jsx)("nav", {
                          className: x.DU,
                          children: a.map((e) => {
                              switch (e.type) {
                                  case m.BACK:
                                      return (function (e) {
                                          let { key: a, disabled: t, navigateToPage: n } = e;
                                          return (0, s.jsxs)(
                                              o.$n,
                                              {
                                                  className: x.Cp,
                                                  innerClassName: x.MO,
                                                  look: o.$n.Looks.BLANK,
                                                  color: o.$n.Colors.TRANSPARENT,
                                                  onClick: n,
                                                  disabled: t,
                                                  rel: "prev",
                                                  children: [
                                                      (0, s.jsx)(g.n, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: x.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                      (0, s.jsx)("span", { children: N.intl.string(N.t["13/7kX"]) }),
                                                  ],
                                              },
                                              a,
                                          );
                                      })(e);
                                  case m.PAGE:
                                      let a;
                                      return (
                                          (a = (0, s.jsx)(
                                              c.D,
                                              {
                                                  className: i()(x.hJ, { [x.Xs]: e.selected }),
                                                  onClick: e.selected ? void 0 : e.navigateToPage,
                                                  "aria-label": N.intl.formatToPlainString(N.t.IGMs8S, {
                                                      pageNumber: e.targetPage,
                                                  }),
                                                  "aria-current": e.selected ? "page" : void 0,
                                                  children: (0, s.jsx)("span", { children: e.targetPage }),
                                              },
                                              e.key,
                                          )),
                                          null != P ? P(e, a) : a
                                      );
                                  case m.GAP:
                                      return (0, s.jsx)(
                                          C,
                                          { page: e, totalPageCount: y, disabled: !!r, onPageChange: d },
                                          e.key,
                                      );
                                  case m.NEXT:
                                      return (function (e) {
                                          let { key: a, disabled: t, navigateToPage: n } = e;
                                          return (0, s.jsxs)(
                                              o.$n,
                                              {
                                                  className: x.Cp,
                                                  innerClassName: x.MO,
                                                  look: o.$n.Looks.BLANK,
                                                  color: o.$n.Colors.TRANSPARENT,
                                                  onClick: n,
                                                  disabled: t,
                                                  rel: "next",
                                                  children: [
                                                      (0, s.jsx)("span", { children: N.intl.string(N.t.PDTjLN) }),
                                                      (0, s.jsx)(u._, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: x.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                  ],
                                              },
                                              a,
                                          );
                                      })(e);
                                  default:
                                      return null;
                              }
                          }),
                      }),
                  })
                : null;
        },
    });
}
