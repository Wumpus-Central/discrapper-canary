s.d(e, { default: () => L }), s(896048), s(65821);
var l = s(627968),
    a = s(64700),
    n = s(311907),
    i = s(397927),
    r = s(73153),
    h = s(356645),
    o = s(465842),
    d = s(628264),
    u = s(92077),
    c = s(953689),
    p = s(587895),
    A = s(235986),
    I = s(769015),
    f = s(976860),
    g = s(568004),
    m = s(293066),
    P = s(775228),
    C = s(255438),
    T = s(980888),
    b = s(652215),
    _ = s(985018),
    S = s(25327);
function y(t, e, s) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = s),
        t
    );
}
class E extends a.Component {
    fetchInstallSize() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l, buildSizeKB: a } = this.props;
        null != s &&
            null != l &&
            null == a &&
            r.h.wait(() => {
                (0, o.K)(t, e, s, l);
            });
    }
    componentDidMount() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l } = this.props;
        null == s || null == l ? (0, h.n)(t, e) : this.fetchInstallSize();
    }
    componentDidUpdate(t) {
        (this.props.buildId !== t.buildId || this.props.manifestIds !== t.manifestIds) && this.fetchInstallSize();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    renderButton() {
        let { buildId: t } = this.props,
            { hasError: e, hasAcceptedNeccessaryTerms: s } = this.state;
        return (0, l.jsx)(i.Button, {
            variant: "active",
            text: _.intl.string(_.t.nL0WvC),
            disabled: e || null == t || !s,
            onClick: this.handleInstall,
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: s } = this.props,
            { selectedInstallationPath: a, isInstalling: n } = this.state,
            r = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(i.EOs, {
            transitionState: s,
            size: i.rIJ.SMALL,
            "aria-label": _.intl.string(_.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [
                null != r
                    ? (0, l.jsx)("div", {
                          className: S.Yi,
                          style: { backgroundImage: "url(".concat(r, ")") },
                      })
                    : null,
                (0, l.jsxs)(i.rQ0, {
                    justify: A.A.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(A.A.Child, {
                            grow: 1,
                            children: (0, l.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                children: _.intl.string(_.t.PphjtJ),
                            }),
                        }),
                        (0, l.jsx)(A.A.Child, {
                            grow: 0,
                            children: (0, l.jsx)(i.s_y, { onClick: this.close }),
                        }),
                    ],
                }),
                (0, l.jsxs)(i.$mQ, {
                    children: [
                        (0, l.jsxs)(A.A, {
                            align: A.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(I.A, {
                                    game: t,
                                    size: I.M.MEDIUM,
                                    className: S.Gt,
                                }),
                                (0, l.jsx)("div", {
                                    className: S.mO,
                                    children: null != t && t.name,
                                }),
                                null != e
                                    ? (0, l.jsx)("div", {
                                          className: S.hc,
                                          children: (0, C.Xq)(e, { useKibibytes: !0 }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("div", { className: S.yF }),
                        (0, l.jsx)(T.A, {
                            autoFocus: !0,
                            className: S.gD,
                            value: a,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath,
                        }),
                        (0, l.jsx)(c.A, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: n,
                            onChange: this.handlePurchaseTermsChange,
                            className: S.a_,
                        }),
                    ],
                }),
                (0, l.jsx)(i.jlY, { children: this.renderButton() }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
            y(this, "state", {
                selectedInstallationPath: this.props.defaultInstallationPath,
                hasError: !1,
                isInstalling: !1,
                hasAcceptedNeccessaryTerms: !1,
            }),
            y(this, "isUnmounted", !1),
            y(this, "handleChangePath", (t, e) => {
                this.setState({
                    selectedInstallationPath: t,
                    hasError: e,
                });
            }),
            y(this, "install", (t, e) => {
                let { application: s, branchId: l, analyticsLocation: a } = this.props;
                if (null == s) return null;
                (0, u.oc)({
                    application: s,
                    branchId: l,
                    buildId: t,
                    manifestIds: e,
                    installationPath: this.state.selectedInstallationPath,
                    analyticsLocation: a,
                }),
                    (0, f.pX)(b.BVt.APPLICATION_LIBRARY),
                    this.close();
            }),
            y(this, "handleInstall", () => {
                let { application: t, buildId: e, manifestIds: s, hasPreviouslyAcceptedStoreTerms: l } = this.props;
                if (null != e && null != s)
                    l || (0, d.v)(), null != t && null != t.eulaId && (0, d.C)(t.eulaId), this.install(e, s);
                else throw Error("Unexpected missing build info for non-premium product");
            }),
            y(this, "handlePurchaseTermsChange", (t) => {
                this.setState({ hasAcceptedNeccessaryTerms: t });
            }),
            y(this, "close", () => {
                this.props.onClose();
            });
    }
}
let L = n.Ay.connectStores([g.A, P.A, m.A, p.A], (t) => {
    let { applicationId: e, branchId: s } = t,
        l = g.A.getTargetBuildId(e, s);
    return {
        application: p.A.getApplication(e),
        defaultInstallationPath: P.A.defaultInstallationPath,
        buildId: l,
        manifestIds: g.A.getTargetManifests(e, s),
        buildSizeKB: null != l ? g.A.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: m.A.hasAcceptedStoreTerms,
    };
})(E);
