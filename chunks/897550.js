n.d(t, {
    A: () => E,
}),
    n(733351),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(421380),
    o = n(481859),
    c = n(235986),
    u = n(255438),
    d = n(403362),
    p = n(723702),
    f = n(590858),
    h = n(652215),
    A = n(985018),
    g = n(918704);
let m = {
    [h.uje.WINDOWS]: p.PlatformTypes.WINDOWS,
    [h.uje.MACOS]: p.PlatformTypes.OSX,
    [h.uje.LINUX]: p.PlatformTypes.LINUX,
};
class b extends i.PureComponent {
    render() {
        let { active: e, children: t, pageSize: n, onClick: i } = this.props,
            l = n === f.q.LARGE;
        return (0, r.jsx)(s.$n, {
            size: l ? s.$n.Sizes.MIN : s.$n.Sizes.LARGE,
            fullWidth: !l,
            color: e ? g.gl : g.Hu,
            className: a()({
                [g.AA]: l,
                [g.Wt]: !l,
                [g.jP]: e,
                [g.I7]: !e,
            }),
            onClick: i,
            children: t,
        });
    }
}
class _ extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { systemRequirements: n } = e,
            { selectedOperatingSystem: r } = t,
            i = Object.keys(n);
        return i.includes(r)
            ? null
            : {
                  selectedOperatingSystem: i[0],
              };
    }
    renderTabs() {
        let { pageSize: e, systemRequirements: t } = this.props,
            { selectedOperatingSystem: n } = this.state,
            i = Object.keys(t);
        return 1 === i.length
            ? null
            : (0, r.jsxs)(c.A, {
                  className: g.vR,
                  children: [
                      (0, r.jsx)("div", {
                          className: g.me,
                      }),
                      i.map((t) =>
                          (0, r.jsx)(
                              b,
                              {
                                  active: t === n,
                                  onClick: () => this.handleSelectOperatingSystem(t),
                                  pageSize: e,
                                  children: (function (e) {
                                      switch (e) {
                                          case h.uje.WINDOWS:
                                              return A.intl.string(A.t["0/xHFO"]);
                                          case h.uje.MACOS:
                                              return A.intl.string(A.t.E4u4n5);
                                          case h.uje.LINUX:
                                              return A.intl.string(A.t.tcawo3);
                                      }
                                  })(t),
                              },
                              t,
                          ),
                      ),
                  ],
              });
    }
    renderRequirementsSection(e, t) {
        if (null == e) return null;
        let n = [
            {
                key: A.intl.string(A.t["0TcHzv"]),
                value: e.operating_system_version,
            },
            {
                key: A.intl.string(A.t.eOX6Hq),
                value: e.cpu,
            },
            {
                key: A.intl.string(A.t["+WJ5XQ"]),
                value:
                    null != e.ram
                        ? A.intl.formatToPlainString(A.t.RNRSl6, {
                              size: (0, u.Xq)(1e3 * e.ram, {
                                  showDecimalForGB: !1,
                              }),
                          })
                        : null,
            },
            {
                key: A.intl.string(A.t["+3s/V/"]),
                value: e.gpu,
            },
            {
                key: A.intl.string(A.t["L+x5wB"]),
                value:
                    null != e.disk
                        ? (0, u.Xq)(1e3 * e.disk, {
                              showDecimalForGB: !1,
                          })
                        : null,
            },
            {
                key: A.intl.string(A.t["Ghp2/B"]),
                value: e.sound_card,
            },
            {
                key: A.intl.string(A.t["+w6nJg"]),
                value: e.network,
            },
            {
                key: A.intl.string(A.t.Au3Vbp),
                value: e.notes,
            },
        ]
            .map((e, t) => {
                let n = null != e.value ? e.value.trim() : null;
                return null == n || 0 === n.length
                    ? null
                    : (0, r.jsxs)(
                          "div",
                          {
                              className: g.aS,
                              children: [
                                  (0, r.jsxs)("span", {
                                      className: g.D8,
                                      children: [e.key, ":"],
                                  }),
                                  n,
                              ],
                          },
                          t,
                      );
            })
            .filter(d.Vq);
        return (0, r.jsxs)("div", {
            className: g.Ln,
            children: [
                (0, r.jsx)(o.A, {
                    tag: "h4",
                    children: t,
                }),
                n,
            ],
        });
    }
    renderBody() {
        let { minimum: e, recommended: t } = this.props.systemRequirements[this.state.selectedOperatingSystem];
        return (0, r.jsxs)("div", {
            className: g.GQ,
            children: [
                this.renderRequirementsSection(e, A.intl.string(A.t.QCCMXE)),
                this.renderRequirementsSection(t, A.intl.string(A.t.He39wq)),
            ],
        });
    }
    render() {
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, r.jsx)(o.A, {
                    children: A.intl.string(A.t.IkOAol),
                }),
                this.renderTabs(),
                this.renderBody(),
            ],
        });
    }
    constructor(e) {
        super(e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handleSelectOperatingSystem", (e) => {
                this.setState({
                    selectedOperatingSystem: e,
                });
            });
        const t = (0, p.getPlatform)(),
            n = Object.keys(e.systemRequirements);
        let r = n[0];
        for (const e of n) m[e] === t && (r = e);
        this.state = {
            selectedOperatingSystem: r,
        };
    }
}
let E = _;
