"use strict";
n.d(t, { m: () => b });
var i,
    a = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(862482),
    c = n(534514),
    d = n(292666),
    u = n(939249),
    h = n(921853),
    p = n(320448);
n(321073);
var m = n(735438),
    _ = n.n(m),
    g = (((i = {}).PAGE = "PAGE"), (i.GAP = "GAP"), (i.BACK = "BACK"), (i.NEXT = "NEXT"), i);
class x extends s.PureComponent {
    static defaultProps = { maxVisiblePages: 9, hideMaxPage: !1 };
    changePageTo = (e) => {
        let { selectedPage: t, onPageChange: n } = this.props;
        t !== e && null != n && n(e);
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
        let { totalPageCount: e, maxVisiblePages: t, selectedPage: n } = this.props,
            i = Math.ceil(t / 2),
            a = Math.floor(t / 2),
            [s, l] = n <= i ? [1, t] : n > e - a ? [e - t + 1, e] : [n - i + 1, n + a];
        return [Math.max(s, 1), Math.min(l, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: t, hideMaxPage: n } = this.props,
            [i, a] = this.getNeighborBounds(),
            s = { type: "BACK", key: "back", disabled: 1 === t, selected: !1, navigateToPage: this.handleBackward },
            l = { type: "NEXT", key: "next", disabled: t === e, selected: !1, navigateToPage: this.handleForward },
            r = [],
            o = [];
        return (
            i > 1 &&
                ((r = [
                    { type: "PAGE", key: "page-1", targetPage: 1, navigateToPage: () => this.handleJump(1) },
                    { type: "GAP", key: "left-gap" },
                ]),
                (i += 2)),
            a < e &&
                ((o = [{ type: "GAP", key: "right-gap" }]),
                n ||
                    o.push({ type: "PAGE", key: `page-${e}`, targetPage: e, navigateToPage: () => this.handleJump(e) }),
                (a -= 2)),
            [
                s,
                ...r,
                ..._()
                    .range(i, a + 1)
                    .map((e) => ({
                        type: "PAGE",
                        key: `page-${e}`,
                        targetPage: e,
                        selected: e === t,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e),
                    })),
                ...o,
                l,
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: t } = this.props;
        return t({ pages: this.getPageList(), hasMultiplePages: e > 1 });
    }
}
var f = n(985018),
    A = n(374089);
function C(e) {
    let { page: t, totalPageCount: n, disabled: i, onPageChange: l } = e,
        [o, h] = s.useState(!1),
        [p, m] = s.useState(null),
        _ = null != p && p >= 1 && p <= n;
    return i
        ? (0, a.jsx)(c.D, { className: A.rQ, "aria-hidden": !0, variant: "heading-sm/semibold", children: "…" }, t.key)
        : o
          ? (0, a.jsx)("div", {
                className: A.mF,
                children: (0, a.jsx)(
                    d.k,
                    {
                        type: "number",
                        autoFocus: !0,
                        value: null == p ? "" : `${p}`,
                        onChange: (e) => {
                            let t = parseInt(e);
                            "" === e || isNaN(t) ? m(null) : m(t);
                        },
                        onBlur: () => {
                            h(!1), m(null);
                        },
                        onKeyUp: (e) => {
                            "Enter" === e.key && null != p && _ && (l(p), h(!1), m(null));
                        },
                        disabled: i,
                    },
                    t.key,
                ),
            })
          : (0, a.jsx)(
                u.D,
                {
                    onClick: () => h(!0),
                    children: (0, a.jsx)(c.D, {
                        className: r()(A.hJ, A.rQ),
                        "aria-hidden": !0,
                        variant: "heading-sm/semibold",
                        children: "…",
                    }),
                },
                t.key,
            );
}
function b(e) {
    let {
            currentPage: t,
            totalCount: n,
            pageSize: i,
            maxVisiblePages: s,
            disablePaginationGap: l,
            onPageChange: c,
            hideMaxPage: d = !1,
            className: m,
            renderPageWrapper: _,
        } = e,
        b = Math.ceil(n / i);
    return (0, a.jsx)(x, {
        totalPageCount: b,
        selectedPage: t,
        maxVisiblePages: s,
        hideMaxPage: d,
        onPageChange: function (e) {
            null != c && c(e);
        },
        children: function (e) {
            let { pages: t, hasMultiplePages: n } = e;
            return n
                ? (0, a.jsx)("div", {
                      className: r()(A.Ug, m),
                      children: (0, a.jsx)("nav", {
                          className: A.DU,
                          children: t.map((e) => {
                              switch (e.type) {
                                  case g.BACK:
                                      return (function (e) {
                                          let { key: t, disabled: n, navigateToPage: i } = e;
                                          return (0, a.jsxs)(
                                              o.$n,
                                              {
                                                  className: A.Cp,
                                                  innerClassName: A.MO,
                                                  look: o.$n.Looks.BLANK,
                                                  color: o.$n.Colors.TRANSPARENT,
                                                  onClick: i,
                                                  disabled: n,
                                                  rel: "prev",
                                                  children: [
                                                      (0, a.jsx)(h.n, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: A.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                      (0, a.jsx)("span", { children: f.intl.string(f.t["13/7kX"]) }),
                                                  ],
                                              },
                                              t,
                                          );
                                      })(e);
                                  case g.PAGE:
                                      let t;
                                      return (
                                          (t = (0, a.jsx)(
                                              u.D,
                                              {
                                                  className: r()(A.hJ, { [A.Xs]: e.selected }),
                                                  onClick: e.selected ? void 0 : e.navigateToPage,
                                                  "aria-label": f.intl.formatToPlainString(f.t.IGMs8S, {
                                                      pageNumber: e.targetPage,
                                                  }),
                                                  "aria-current": e.selected ? "page" : void 0,
                                                  children: (0, a.jsx)("span", { children: e.targetPage }),
                                              },
                                              e.key,
                                          )),
                                          null != _ ? _(e, t) : t
                                      );
                                  case g.GAP:
                                      return (0, a.jsx)(
                                          C,
                                          { page: e, totalPageCount: b, disabled: !!l, onPageChange: c },
                                          e.key,
                                      );
                                  case g.NEXT:
                                      return (function (e) {
                                          let { key: t, disabled: n, navigateToPage: i } = e;
                                          return (0, a.jsxs)(
                                              o.$n,
                                              {
                                                  className: A.Cp,
                                                  innerClassName: A.MO,
                                                  look: o.$n.Looks.BLANK,
                                                  color: o.$n.Colors.TRANSPARENT,
                                                  onClick: i,
                                                  disabled: n,
                                                  rel: "next",
                                                  children: [
                                                      (0, a.jsx)("span", { children: f.intl.string(f.t.PDTjLN) }),
                                                      (0, a.jsx)(p._, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: A.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                  ],
                                              },
                                              t,
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
