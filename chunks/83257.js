n.d(t, {
    Ay: () => R,
    OZ: () => O,
    n3: () => I,
    pe: () => _,
}),
    n(321073),
    n(114821),
    n(339614),
    n(896048);
var i = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(827734),
    o = n(397927),
    a = n(139286),
    d = n(726249),
    u = n(379848),
    c = n(965304),
    h = n(632678),
    g = n(203982),
    p = n(728458),
    f = n(820284),
    C = n(361739),
    v = n(652215),
    y = n(985018),
    b = n(39965);

function S(e, t, n) {
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

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0,
    }),
    I = 1.4,
    O = 15,
    _ = 2;

function w(e) {
    var t, n;
    let { section: s, setPreventNavigation: l, scrollerRef: o } = e;
    (0, a.A)({
        type: r.ImpressionTypes.PANE,
        name: null == s ? void 0 : s.impressionName,
        properties: null == s ? void 0 : s.impressionProperties,
    });
    let d = null != (t = null == s ? void 0 : s.element) ? t : v.FXj,
        u = null != (n = null == s ? void 0 : s.elementProps) ? n : {};
    return (0, i.jsx)(f.A, {
        section: s.section,
        children: (0, i.jsx)(
            d,
            A(m({}, u), {
                setPreventNavigation: l,
                refToScroller: o,
            }),
        ),
    });
}
class N extends s.PureComponent {
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
            ? (g._.dispatch(v.jej.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + _, O)),
              g._.dispatch(v.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = I), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: s } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            l = null != t ? t : e[0].section;
        return (0, i.jsx)(u.Ay, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, i.jsxs)(o.VQ0, {
                    selectedItem: l,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: [
                        s
                            ? (0, i.jsx)("div", {
                                  className: b.O,
                                  children: (0, i.jsx)(h.A, {}),
                              })
                            : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case C.Fq.HEADER:
                                    return (0, i.jsx)(
                                        o.VQ0.Header,
                                        {
                                            children: e.label,
                                        },
                                        t,
                                    );
                                case C.Fq.DIVIDER:
                                    return (0, i.jsx)(o.VQ0.Separator, {}, t);
                                case C.Fq.CUSTOM:
                                    var n;
                                    let s = null != (n = e.element) ? n : v.FXj;
                                    return (0, i.jsx)(s, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, l === e.section, r);
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
        let { stores: n, element: s } = e.notice;
        return null == n || n.some((e) => e.showNotice())
            ? (0, i.jsx)(s, {
                  theme: t,
              })
            : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: s, onClose: r, hideSidebar: l } = this.props,
            o = this.getPredicateSections(),
            a = o.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let u = null != (e = "string" == typeof a.label ? a.label : a.ariaLabel) ? e : s;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.HI, {
                    location: s,
                    subsection: u,
                }),
                (0, i.jsx)(C.Ay, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(o),
                    content: (0, i.jsx)(w, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef,
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: l,
                    toggleSidebar: () =>
                        this.setState({
                            sidebarOpen: !0,
                        }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != r ? this.handleClose : void 0,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "_unmounted", !1),
            S(this, "_intensity", I),
            S(this, "_subscribedStores", []),
            S(this, "scrollerRef", s.createRef()),
            S(
                this,
                "state",
                A(m({}, E), {
                    sidebarOpen:
                        this.props.section !== v.nc_.SUBSCRIPTIONS &&
                        this.props.section !== v.nc_.PROFILE_CUSTOMIZATION,
                }),
            ),
            S(this, "setPreventNavigation", (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t,
                });
            }),
            S(this, "handleSetSection", (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: i, onPreventNavigation: s } = this.state,
                    r = () => {
                        var i;
                        null == t || t(e);
                        let { notice: s } = null != (i = n.find((t) => e === t.section)) ? i : {},
                            r = null != s ? s.stores : null;
                        null != r &&
                            r.forEach((e) => {
                                this._subscribedStores.includes(e) ||
                                    (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(
                                A(m({}, E), {
                                    sidebarOpen: !1,
                                }),
                            );
                    };
                this.validNavigation() &&
                    !i &&
                    (r(),
                    p.A.addBreadcrumb({
                        category: "settings",
                        message: "Set section: ".concat(e),
                    })),
                    i && null != s && s(r);
            }),
            S(this, "handleClose", () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            S(this, "handleNoticeStoreUpdate", () => {
                this._unmounted || ((this._intensity = I), this.forceUpdate());
            }),
            S(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
                let {
                        section: s,
                        label: r = null,
                        ariaLabel: a,
                        onClick: d,
                        variant: u,
                        icon: h,
                        className: g,
                        newIndicator: p,
                        newIndicatorDismissibleContentTypes: f,
                        badgeCount: C,
                    } = e,
                    S = null;
                s === v.nc_.ACCOUNT && this.props.isEligibleForPomelo
                    ? (S = (0, i.jsx)(o.EpV, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: l.A.colors.STATUS_WARNING.css,
                      }))
                    : null != e.decoration
                      ? (S = (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: e.decoration,
                        }))
                      : null != n && (null == f ? void 0 : f.includes(n)) && !t
                        ? (S =
                              null != p
                                  ? p
                                  : (0, i.jsx)(o.LpS, {
                                        text: y.intl.string(y.t.y2b7CA),
                                    }))
                        : null != h
                          ? (S = h)
                          : null != C &&
                            C > 0 &&
                            (S = (0, i.jsx)(o.hVq, {
                                count: C,
                            }));
                let m =
                    s === v.nc_.PREMIUM
                        ? (0, i.jsx)(c.A, {
                              label: r,
                              isSelected: t,
                              decoration: S,
                          })
                        : null == S
                          ? r
                          : (0, i.jsxs)("div", {
                                className: b.l,
                                children: [r, S],
                            });
                return (0, i.jsx)(
                    o.VQ0.Item,
                    {
                        variant: u,
                        id: s,
                        onClick: d,
                        className: g,
                        "aria-label": null != a ? a : "",
                        children: m,
                    },
                    s,
                );
            });
    }
}
let R = N;
