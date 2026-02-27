n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(421380),
    o = n(481859),
    d = n(235986),
    c = n(255438),
    u = n(403362),
    A = n(723702),
    h = n(590858),
    _ = n(652215),
    m = n(985018),
    p = n(918704);
let g = {
    [_.uje.WINDOWS]: A.PlatformTypes.WINDOWS,
    [_.uje.MACOS]: A.PlatformTypes.OSX,
    [_.uje.LINUX]: A.PlatformTypes.LINUX,
};
class E extends r.PureComponent {
    render() {
        let { active: e, children: t, pageSize: n, onClick: r } = this.props,
            l = n === h.q.LARGE;
        return (0, i.jsx)(s.$n, {
            size: l ? s.$n.Sizes.MIN : s.$n.Sizes.LARGE,
            fullWidth: !l,
            color: e ? p.gl : p.Hu,
            className: a()({ [p.AA]: l, [p.Wt]: !l, [p.jP]: e, [p.I7]: !e }),
            onClick: r,
            children: t,
        });
    }
}
class I extends r.PureComponent {
    constructor(e) {
        super(e);
        const t = (0, A.getPlatform)(),
            n = Object.keys(e.systemRequirements);
        let i = n[0];
        for (const e of n) g[e] === t && (i = e);
        this.state = { selectedOperatingSystem: i };
    }
    static getDerivedStateFromProps(e, t) {
        let { systemRequirements: n } = e,
            { selectedOperatingSystem: i } = t,
            r = Object.keys(n);
        return r.includes(i) ? null : { selectedOperatingSystem: r[0] };
    }
    handleSelectOperatingSystem = (e) => {
        this.setState({ selectedOperatingSystem: e });
    };
    renderTabs() {
        let { pageSize: e, systemRequirements: t } = this.props,
            { selectedOperatingSystem: n } = this.state,
            r = Object.keys(t);
        return 1 === r.length
            ? null
            : (0, i.jsxs)(d.A, {
                  className: p.vR,
                  children: [
                      (0, i.jsx)("div", { className: p.me }),
                      r.map((t) =>
                          (0, i.jsx)(
                              E,
                              {
                                  active: t === n,
                                  onClick: () => this.handleSelectOperatingSystem(t),
                                  pageSize: e,
                                  children: (function (e) {
                                      switch (e) {
                                          case _.uje.WINDOWS:
                                              return m.intl.string(m.t["0/xHFO"]);
                                          case _.uje.MACOS:
                                              return m.intl.string(m.t.E4u4n5);
                                          case _.uje.LINUX:
                                              return m.intl.string(m.t.tcawo3);
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
            { key: m.intl.string(m.t["0TcHzv"]), value: e.operating_system_version },
            { key: m.intl.string(m.t.eOX6Hq), value: e.cpu },
            {
                key: m.intl.string(m.t["+WJ5XQ"]),
                value:
                    null != e.ram
                        ? m.intl.formatToPlainString(m.t.RNRSl6, {
                              size: (0, c.Xq)(1e3 * e.ram, { showDecimalForGB: !1 }),
                          })
                        : null,
            },
            { key: m.intl.string(m.t["+3s/V/"]), value: e.gpu },
            {
                key: m.intl.string(m.t["L+x5wB"]),
                value: null != e.disk ? (0, c.Xq)(1e3 * e.disk, { showDecimalForGB: !1 }) : null,
            },
            { key: m.intl.string(m.t["Ghp2/B"]), value: e.sound_card },
            { key: m.intl.string(m.t["+w6nJg"]), value: e.network },
            { key: m.intl.string(m.t.Au3Vbp), value: e.notes },
        ]
            .map((e, t) => {
                let n = null != e.value ? e.value.trim() : null;
                return null == n || 0 === n.length
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: p.aS,
                              children: [(0, i.jsxs)("span", { className: p.D8, children: [e.key, ":"] }), n],
                          },
                          t,
                      );
            })
            .filter(u.Vq);
        return (0, i.jsxs)("div", { className: p.Ln, children: [(0, i.jsx)(o.A, { tag: "h4", children: t }), n] });
    }
    renderBody() {
        let { minimum: e, recommended: t } = this.props.systemRequirements[this.state.selectedOperatingSystem];
        return (0, i.jsxs)("div", {
            className: p.GQ,
            children: [
                this.renderRequirementsSection(e, m.intl.string(m.t.QCCMXE)),
                this.renderRequirementsSection(t, m.intl.string(m.t.He39wq)),
            ],
        });
    }
    render() {
        return (0, i.jsxs)("div", {
            className: this.props.className,
            children: [(0, i.jsx)(o.A, { children: m.intl.string(m.t.IkOAol) }), this.renderTabs(), this.renderBody()],
        });
    }
}
let f = I;
