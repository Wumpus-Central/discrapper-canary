l.d(t, { default: () => b });
var s = l(627968),
    n = l(64700),
    a = l(311907),
    i = l(821609),
    r = l(935462),
    c = l(534514),
    o = l(73153),
    u = l(356645),
    d = l(465842),
    h = l(628264),
    p = l(92077),
    A = l(953689),
    f = l(587895),
    m = l(235986),
    I = l(769015),
    g = l(976860),
    L = l(568004),
    _ = l(293066),
    E = l(775228),
    v = l(255438),
    S = l(980888),
    x = l(652215),
    C = l(985018),
    T = l(442348);
class M extends n.Component {
    state = {
        selectedInstallationPath: this.props.defaultInstallationPath,
        hasError: !1,
        isInstalling: !1,
        hasAcceptedNeccessaryTerms: !1,
    };
    isUnmounted = !1;
    fetchInstallSize() {
        let { applicationId: e, branchId: t, buildId: l, manifestIds: s, buildSizeKB: n } = this.props;
        null != l &&
            null != s &&
            null == n &&
            o.h.wait(() => {
                (0, d.K)(e, t, l, s);
            });
    }
    componentDidMount() {
        let { applicationId: e, branchId: t, buildId: l, manifestIds: s } = this.props;
        null == l || null == s ? (0, u.n)(e, t) : this.fetchInstallSize();
    }
    componentDidUpdate(e) {
        (this.props.buildId !== e.buildId || this.props.manifestIds !== e.manifestIds) && this.fetchInstallSize();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    handleChangePath = (e, t) => {
        this.setState({ selectedInstallationPath: e, hasError: t });
    };
    install = (e, t) => {
        let { application: l, branchId: s, analyticsLocation: n } = this.props;
        if (null == l) return null;
        (0, p.oc)({
            application: l,
            branchId: s,
            buildId: e,
            manifestIds: t,
            installationPath: this.state.selectedInstallationPath,
            analyticsLocation: n,
        }),
            (0, g.pX)(x.BVt.APPLICATION_LIBRARY),
            this.close();
    };
    handleInstall = () => {
        let { application: e, buildId: t, manifestIds: l, hasPreviouslyAcceptedStoreTerms: s } = this.props;
        if (null != t && null != l)
            s || (0, h.v)(), null != e && null != e.eulaId && (0, h.C)(e.eulaId), this.install(t, l);
        else throw Error("Unexpected missing build info for non-premium product");
    };
    handlePurchaseTermsChange = (e) => {
        this.setState({ hasAcceptedNeccessaryTerms: e });
    };
    close = () => {
        this.props.onClose();
    };
    renderButton() {
        let { buildId: e } = this.props,
            { hasError: t, hasAcceptedNeccessaryTerms: l } = this.state;
        return (0, s.jsx)(i.$, {
            variant: "active",
            text: C.intl.string(C.t.nL0WvC),
            disabled: t || null == e || !l,
            onClick: this.handleInstall,
        });
    }
    render() {
        let { application: e, buildSizeKB: t, transitionState: l } = this.props,
            { selectedInstallationPath: n, isInstalling: a } = this.state,
            i = null != e && e.getSplashURL(440);
        return (0, s.jsxs)(r.EO, {
            transitionState: l,
            size: r.rI.SMALL,
            "aria-label": C.intl.string(C.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [
                null != i ? (0, s.jsx)("div", { className: T.Yi, style: { backgroundImage: `url(${i})` } }) : null,
                (0, s.jsxs)(r.rQ, {
                    justify: m.A.Justify.BETWEEN,
                    children: [
                        (0, s.jsx)(m.A.Child, {
                            grow: 1,
                            children: (0, s.jsx)(c.D, {
                                variant: "heading-lg/semibold",
                                children: C.intl.string(C.t.PphjtJ),
                            }),
                        }),
                        (0, s.jsx)(m.A.Child, { grow: 0, children: (0, s.jsx)(r.s_, { onClick: this.close }) }),
                    ],
                }),
                (0, s.jsxs)(r.$m, {
                    children: [
                        (0, s.jsxs)(m.A, {
                            align: m.A.Align.CENTER,
                            children: [
                                (0, s.jsx)(I.A, { game: e, size: I.M.MEDIUM, className: T.Gt }),
                                (0, s.jsx)("div", { className: T.mO, children: null != e && e.name }),
                                null != t
                                    ? (0, s.jsx)("div", {
                                          className: T.hc,
                                          children: (0, v.Xq)(t, { useKibibytes: !0 }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, s.jsx)("div", { className: T.yF }),
                        (0, s.jsx)(S.A, {
                            autoFocus: !0,
                            className: T.gD,
                            value: n,
                            requiredDiskKB: t,
                            onChange: this.handleChangePath,
                        }),
                        (0, s.jsx)(A.A, {
                            eulaId: e.eulaId,
                            applicationName: e.name,
                            disabled: a,
                            onChange: this.handlePurchaseTermsChange,
                            className: T.a_,
                        }),
                    ],
                }),
                (0, s.jsx)(r.jl, { children: this.renderButton() }),
            ],
        });
    }
}
let b = a.Ay.connectStores([L.A, E.A, _.A, f.A], (e) => {
    let { applicationId: t, branchId: l } = e,
        s = L.A.getTargetBuildId(t, l);
    return {
        application: f.A.getApplication(t),
        defaultInstallationPath: E.A.defaultInstallationPath,
        buildId: s,
        manifestIds: L.A.getTargetManifests(t, l),
        buildSizeKB: null != s ? L.A.getBuildSize(s) : null,
        hasPreviouslyAcceptedStoreTerms: _.A.hasAcceptedStoreTerms,
    };
})(M);
