n.d(t, { A: () => V, D: () => U });
var i,
    s = n(627968),
    a = n(64700),
    l = n(284009),
    r = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(98207),
    u = n(631670),
    _ = n(974544),
    m = n(210742),
    A = n(195043),
    g = n(130771),
    h = n(576622),
    x = n(670492),
    p = n(351906),
    E = n(628965),
    C = n(287809),
    T = n(954571),
    S = n(773669),
    I = n(544028),
    f = n(740625),
    N = n(524738),
    b = n(972982),
    j = n(36535),
    v = n(299116),
    O = n(457684),
    R = n(998252),
    y = n(980172),
    P = n(531525),
    L = n(652215),
    D = n(985018),
    M = n(139674);
function G() {
    let e = (0, o.bG)([C.default], () => {
            let e = C.default.getCurrentUser();
            return r()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e;
        }),
        t = (0, o.bG)([x.A], () => x.A.getBackupCodes()),
        { teams: n, loading: i } = (0, g.A)({ refreshOnDepChange: !0 });
    return (0, s.jsxs)(c.lVW, {
        children: [
            (0, s.jsxs)(A.x, {
                setting: P.H.ACCOUNT_PROFILE,
                children: [(0, s.jsx)(R.A, { currentUser: e }), (0, s.jsx)(y.A, { currentUser: e })],
            }),
            (0, s.jsx)(A.x, {
                setting: P.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                children: (0, s.jsxs)(c.nVY, {
                    className: M.PN,
                    label: D.intl.string(D.t.pKSjEj),
                    children: [
                        e.mfaEnabled ? (0, s.jsx)(j.A, {}) : null,
                        (0, s.jsx)(A.x, { setting: P.H.ACCOUNT_CHANGE_PASSWORD, children: (0, s.jsx)(v.A, {}) }),
                        (0, s.jsx)(A.x, {
                            setting: P.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                            children: (0, s.jsx)(b.A, { backupCodes: t }),
                        }),
                    ],
                }),
            }),
            (0, s.jsxs)(A.x, {
                setting: P.H.ACCOUNT_REMOVAL,
                children: [
                    (0, s.jsx)(c.cGx, {}),
                    (0, s.jsx)(O.A, { currentUser: e, userTeamsLoading: i, userTeams: n }),
                ],
            }),
        ],
    });
}
var U = (((i = {}).SECURITY = "SECURITY"), (i.STANDING = "STANDING"), i);
class k extends a.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, h.A)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        d.A.clearBackupCodes(), (0, u.Uo)();
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, s.jsx)(f.R, {
            header: D.intl.string(D.t["JAIM/m"]),
            children: (0, s.jsx)(N.A, {
                parentSetting: P.H.ACCOUNT,
                settingsSection: L.nc_.ACCOUNT,
                panelClassName: M.SZ,
                onTabChange: (e) => {
                    T.default.track(L.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === P.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING",
                    });
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [
                    { title: D.intl.string(D.t.Am9YHi), component: G, setting: P.H.ACCOUNT_SECURITY_TAB },
                    { title: D.intl.string(D.t["Vov/9o"]), component: m.A, setting: P.H.PRIVACY_AND_SAFETY_STANDING },
                ],
            }),
        });
    }
    render() {
        return this.props.hide ? (0, s.jsx)(_.A, {}) : this.renderUnhidden();
    }
}
let V = () => {
    let e = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        t = (0, o.bG)([p.A], () => p.A.hidePersonalInformation),
        n = (0, o.bG)([I.A], () => I.A.theme),
        i = (0, o.bG)([S.default], () => S.default.locale),
        a = (0, o.bG)([E.A], () => E.A.getSubsection());
    return null == e ? null : (0, s.jsx)(k, { theme: n, currentUser: e, hide: t, locale: i, subsection: a });
};
