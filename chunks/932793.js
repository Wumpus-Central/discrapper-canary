t.d(a, { m: () => y });
var s,
    n = t(477900),
    l = t(582128),
    i = t(503698),
    r = t.n(i),
    o = t(297264),
    d = t(939249),
    h = t(921853),
    c = t(320448),
    g = t(862482),
    u = t(584454);
t(321073);
var p = t(435558),
    P = t.n(p),
    m = (((s = {}).PAGE = "PAGE"), (s.GAP = "GAP"), (s.BACK = "BACK"), (s.NEXT = "NEXT"), s);
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
            s = Math.ceil(a / 2),
            n = Math.floor(a / 2),
            [l, i] = t <= s ? [1, a] : t > e - n ? [e - a + 1, e] : [t - s + 1, t + n];
        return [Math.max(l, 1), Math.min(i, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: a, hideMaxPage: t } = this.props,
            [s, n] = this.getNeighborBounds(),
            l = { type: "BACK", key: "back", disabled: 1 === a, selected: !1, navigateToPage: this.handleBackward },
            i = { type: "NEXT", key: "next", disabled: a === e, selected: !1, navigateToPage: this.handleForward },
            r = [],
            o = [];
        return (
            s > 1 &&
                ((r = [
                    { type: "PAGE", key: "page-1", targetPage: 1, navigateToPage: () => this.handleJump(1) },
                    { type: "GAP", key: "left-gap" },
                ]),
                (s += 2)),
            n < e &&
                ((o = [{ type: "GAP", key: "right-gap" }]),
                t ||
                    o.push({ type: "PAGE", key: `page-${e}`, targetPage: e, navigateToPage: () => this.handleJump(e) }),
                (n -= 2)),
            [
                l,
                ...r,
                ...P()
                    .range(s, n + 1)
                    .map((e) => ({
                        type: "PAGE",
                        key: `page-${e}`,
                        targetPage: e,
                        selected: e === a,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e),
                    })),
                ...o,
                i,
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: a } = this.props;
        return a({ pages: this.getPageList(), hasMultiplePages: e > 1 });
    }
}
var x = t(375708),
    N = t(875634);
function C(e) {
    let { page: a, totalPageCount: t, disabled: s, onPageChange: i } = e,
        [h, c] = l.useState(!1),
        [g, p] = l.useState(void 0),
        P = null != g && g >= 1 && g <= t;
    return s
        ? (0, n.jsx)(
              o.D,
              { className: N.rQ, "aria-hidden": !0, variant: "heading-sm/semibold", children: "\u2026" },
              a.key,
          )
        : h
          ? (0, n.jsx)("div", {
                className: N.mF,
                children: (0, n.jsx)(
                    u.Q,
                    {
                        autoFocus: !0,
                        value: g,
                        min: 1,
                        max: t,
                        onChange: p,
                        onBlur: () => {
                            c(!1), p(void 0);
                        },
                        onKeyUp: function (e) {
                            "Enter" === e.key && null != g && P && (i(g), c(!1), p(void 0));
                        },
                        disabled: s,
                        error: null,
                    },
                    a.key,
                ),
            })
          : (0, n.jsx)(
                d.D,
                {
                    onClick: () => c(!0),
                    children: (0, n.jsx)(o.D, {
                        className: r()(N.hJ, N.rQ),
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
            pageSize: s,
            maxVisiblePages: l,
            disablePaginationGap: i,
            onPageChange: o,
            hideMaxPage: u = !1,
            className: p,
            renderPageWrapper: P,
        } = e,
        y = Math.ceil(t / s);
    return (0, n.jsx)(k, {
        totalPageCount: y,
        selectedPage: a,
        maxVisiblePages: l,
        hideMaxPage: u,
        onPageChange: function (e) {
            null != o && o(e);
        },
        children: function (e) {
            let { pages: a, hasMultiplePages: t } = e;
            return t
                ? (0, n.jsx)("div", {
                      className: r()(N.Ug, p),
                      children: (0, n.jsx)("nav", {
                          className: N.DU,
                          children: a.map((e) => {
                              switch (e.type) {
                                  case m.BACK:
                                      return (function (e) {
                                          let { key: a, disabled: t, navigateToPage: s } = e;
                                          return (0, n.jsxs)(
                                              g.$n,
                                              {
                                                  className: N.Cp,
                                                  innerClassName: N.MO,
                                                  look: g.$n.Looks.BLANK,
                                                  color: g.$n.Colors.TRANSPARENT,
                                                  onClick: s,
                                                  disabled: t,
                                                  rel: "prev",
                                                  children: [
                                                      (0, n.jsx)(h.n, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: N.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                      (0, n.jsx)("span", { children: x.intl.string(x.t["13/7kX"]) }),
                                                  ],
                                              },
                                              a,
                                          );
                                      })(e);
                                  case m.PAGE:
                                      let a;
                                      return (
                                          (a = (0, n.jsx)(
                                              d.D,
                                              {
                                                  className: r()(N.hJ, { [N.Xs]: e.selected }),
                                                  onClick: e.selected ? void 0 : e.navigateToPage,
                                                  "aria-label": x.intl.formatToPlainString(x.t.IGMs8S, {
                                                      pageNumber: e.targetPage,
                                                  }),
                                                  "aria-current": e.selected ? "page" : void 0,
                                                  children: (0, n.jsx)("span", { children: e.targetPage }),
                                              },
                                              e.key,
                                          )),
                                          null != P ? P(e, a) : a
                                      );
                                  case m.GAP:
                                      return (0, n.jsx)(
                                          C,
                                          { page: e, totalPageCount: y, disabled: !!i, onPageChange: o },
                                          e.key,
                                      );
                                  case m.NEXT:
                                      return (function (e) {
                                          let { key: a, disabled: t, navigateToPage: s } = e;
                                          return (0, n.jsxs)(
                                              g.$n,
                                              {
                                                  className: N.Cp,
                                                  innerClassName: N.MO,
                                                  look: g.$n.Looks.BLANK,
                                                  color: g.$n.Colors.TRANSPARENT,
                                                  onClick: s,
                                                  disabled: t,
                                                  rel: "next",
                                                  children: [
                                                      (0, n.jsx)("span", { children: x.intl.string(x.t.PDTjLN) }),
                                                      (0, n.jsx)(c._, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: N.B7,
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
