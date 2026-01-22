n.d(t, {
    Ay: () => w,
    OZ: () => T,
    n3: () => I,
    pe: () => C,
}),
    n(321073),
    n(114821),
    n(339614),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(827734),
    o = n(397927),
    l = n(139286),
    c = n(726249),
    u = n(379848),
    d = n(965304),
    f = n(632678),
    p = n(203982),
    _ = n(728458),
    h = n(820284),
    m = n(361739),
    g = n(652215),
    E = n(985018),
    b = n(39965);
function y(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0,
    }),
    I = 1.4,
    T = 15,
    C = 2;
function N(e) {
    var t, n;
    let { section: i, setPreventNavigation: s, scrollerRef: o } = e;
    (0, l.A)({
        type: a.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties,
    });
    let c = null != (t = null == i ? void 0 : i.element) ? t : g.FXj,
        u = null != (n = null == i ? void 0 : i.elementProps) ? n : {};
    return (0, r.jsx)(h.A, {
        section: i.section,
        children: (0, r.jsx)(
            c,
            v(O({}, u), {
                setPreventNavigation: s,
                refToScroller: o,
            }),
        ),
    });
}
class R extends i.PureComponent {
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: n } = t;
            null != n &&
                n.forEach((e) => {
                    e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e);
                });
        });
    }
    componentDidUpdate(e) {
        let { section: t } = e;
        t !== this.props.section && (this._intensity = I);
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            this._subscribedStores.forEach((e) => e.removeChangeListener(this.handleNoticeStoreUpdate)),
            this.props.sections.forEach((e) => {
                var t;
                return null == (t = e.onSettingsClose) ? void 0 : t.call(e);
            });
    }
    getPredicateSections() {
        return this.props.sections.filter((e) => null == e.predicate || e.predicate());
    }
    validNavigation() {
        var e;
        let { section: t } = this.props,
            { notice: n } = null != (e = this.getPredicateSections().find((e) => t === e.section)) ? e : {};
        return null != n && n.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (p._.dispatch(g.jej.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + C, T)),
              p._.dispatch(g.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = I), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: i } = this.props,
            a = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            s = null != t ? t : e[0].section;
        return (0, r.jsx)(u.Ay, {
            contentTypes: a,
            children: (t) => {
                let { visibleContent: a } = t;
                return (0, r.jsxs)(o.VQ0, {
                    selectedItem: s,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: [
                        i
                            ? (0, r.jsx)("div", {
                                  className: b.O,
                                  children: (0, r.jsx)(f.A, {}),
                              })
                            : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case m.Fq.HEADER:
                                    return (0, r.jsx)(o.VQ0.Header, { children: e.label }, t);
                                case m.Fq.DIVIDER:
                                    return (0, r.jsx)(o.VQ0.Separator, {}, t);
                                case m.Fq.CUSTOM:
                                    var n;
                                    let i = null != (n = e.element) ? n : g.FXj;
                                    return (0, r.jsx)(i, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, s === e.section, a);
                            }
                        }),
                    ],
                });
            },
        });
    }
    renderNotice(e) {
        let { theme: t } = this.props;
        if (null == e || null == e.notice) return null;
        let { stores: n, element: i } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, r.jsx)(i, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: i, onClose: a, hideSidebar: s } = this.props,
            o = this.getPredicateSections(),
            l = o.find((e) => e.section === n);
        if (null == l || null == n) return null;
        let u = null != (e = "string" == typeof l.label ? l.label : l.ariaLabel) ? e : i;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.HI, {
                    location: i,
                    subsection: u,
                }),
                (0, r.jsx)(m.Ay, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(o),
                    content: (0, r.jsx)(N, {
                        section: l,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef,
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: s,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: l.type,
                    notice: this.renderNotice(l),
                    closeAction: null != a ? this.handleClose : void 0,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "_unmounted", !1),
            y(this, "_intensity", I),
            y(this, "_subscribedStores", []),
            y(this, "scrollerRef", i.createRef()),
            y(
                this,
                "state",
                v(O({}, S), {
                    sidebarOpen:
                        this.props.section !== g.nc_.SUBSCRIPTIONS &&
                        this.props.section !== g.nc_.PROFILE_CUSTOMIZATION,
                }),
            ),
            y(this, "setPreventNavigation", (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t,
                });
            }),
            y(this, "handleSetSection", (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: r, onPreventNavigation: i } = this.state,
                    a = () => {
                        var r;
                        null == t || t(e);
                        let { notice: i } = null != (r = n.find((t) => e === t.section)) ? r : {},
                            a = null != i ? i.stores : null;
                        null != a &&
                            a.forEach((e) => {
                                this._subscribedStores.includes(e) ||
                                    (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(v(O({}, S), { sidebarOpen: !1 }));
                    };
                this.validNavigation() &&
                    !r &&
                    (a(),
                    _.A.addBreadcrumb({
                        category: "settings",
                        message: "Set section: ".concat(e),
                    })),
                    r && null != i && i(a);
            }),
            y(this, "handleClose", () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            y(this, "handleNoticeStoreUpdate", () => {
                this._unmounted || ((this._intensity = I), this.forceUpdate());
            }),
            y(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
                let {
                        section: i,
                        label: a = null,
                        ariaLabel: l,
                        onClick: c,
                        variant: u,
                        icon: f,
                        className: p,
                        newIndicator: _,
                        newIndicatorDismissibleContentTypes: h,
                        badgeCount: m,
                    } = e,
                    y = null;
                i === g.nc_.ACCOUNT && this.props.isEligibleForPomelo
                    ? (y = (0, r.jsx)(o.EpV, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: s.A.colors.STATUS_WARNING.css,
                      }))
                    : null != e.decoration
                      ? (y = (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: e.decoration,
                        }))
                      : null != n && (null == h ? void 0 : h.includes(n)) && !t
                        ? (y = null != _ ? _ : (0, r.jsx)(o.LpS, { text: E.intl.string(E.t.y2b7CA) }))
                        : null != f
                          ? (y = f)
                          : null != m && m > 0 && (y = (0, r.jsx)(o.hVq, { count: m }));
                let O =
                    i === g.nc_.PREMIUM
                        ? (0, r.jsx)(d.A, {
                              label: a,
                              isSelected: t,
                              decoration: y,
                          })
                        : null == y
                          ? a
                          : (0, r.jsxs)("div", {
                                className: b.l,
                                children: [a, y],
                            });
                return (0, r.jsx)(
                    o.VQ0.Item,
                    {
                        variant: u,
                        id: i,
                        onClick: c,
                        className: p,
                        "aria-label": null != l ? l : "",
                        children: O,
                    },
                    i,
                );
            });
    }
}
let w = R;
