n.d(t, {
    A: () => H,
    D: () => M,
});
var i,
    s = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    o = n(311907),
    c = n(397927),
    d = n(98207),
    u = n(631670),
    g = n(974544),
    h = n(772786),
    x = n(210742),
    A = n(195043),
    p = n(130771),
    m = n(576622),
    j = n(670492),
    b = n(351906),
    O = n(628965),
    S = n(287809),
    E = n(954571),
    f = n(773669),
    v = n(544028),
    T = n(740625),
    C = n(524738),
    y = n(972982),
    N = n(36535),
    I = n(299116),
    _ = n(433410),
    P = n(457684),
    G = n(998252),
    R = n(980172),
    D = n(531525),
    L = n(652215),
    k = n(985018),
    w = n(139674);

function V() {
    let e = (0, o.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return a()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e;
        }),
        t = (0, o.bG)([j.A], () => j.A.getBackupCodes()),
        n = (0, h.g)(),
        { teams: i, loading: l } = (0, p.A)({
            refreshOnDepChange: !0,
        });
    return (0, s.jsxs)(c.lVW, {
        children: [
            (0, s.jsxs)(A.x, {
                setting: D.H.ACCOUNT_PROFILE,
                children: [
                    n && (0, s.jsx)(_.A, {}),
                    (0, s.jsx)(G.A, {
                        currentUser: e,
                    }),
                    (0, s.jsx)(R.A, {}),
                ],
            }),
            (0, s.jsx)(A.x, {
                setting: D.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                children: (0, s.jsxs)(c.nVY, {
                    className: w.PN,
                    label: k.intl.string(k.t.pKSjEj),
                    children: [
                        e.mfaEnabled ? (0, s.jsx)(N.A, {}) : null,
                        (0, s.jsx)(A.x, {
                            setting: D.H.ACCOUNT_CHANGE_PASSWORD,
                            children: (0, s.jsx)(I.A, {}),
                        }),
                        (0, s.jsx)(A.x, {
                            setting: D.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                            children: (0, s.jsx)(y.A, {
                                backupCodes: t,
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsxs)(A.x, {
                setting: D.H.ACCOUNT_REMOVAL,
                children: [
                    (0, s.jsx)(c.cGx, {}),
                    (0, s.jsx)(P.A, {
                        currentUser: e,
                        userTeamsLoading: l,
                        userTeams: i,
                    }),
                ],
            }),
        ],
    });
}
var M = (((i = {}).SECURITY = "SECURITY"), (i.STANDING = "STANDING"), i);
class U extends l.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, m.A)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        d.A.clearBackupCodes(), (0, u.Uo)();
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, s.jsx)(T.R, {
            header: k.intl.string(k.t["JAIM/m"]),
            children: (0, s.jsx)(C.A, {
                parentSetting: D.H.ACCOUNT,
                settingsSection: L.nc_.ACCOUNT,
                panelClassName: w.SZ,
                onTabChange: (e) => {
                    E.default.track(L.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === D.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING",
                    });
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [
                    {
                        title: k.intl.string(k.t.Am9YHi),
                        component: V,
                        setting: D.H.ACCOUNT_SECURITY_TAB,
                    },
                    {
                        title: k.intl.string(k.t["Vov/9o"]),
                        component: x.A,
                        setting: D.H.PRIVACY_AND_SAFETY_STANDING,
                    },
                ],
            }),
        });
    }
    render() {
        return this.props.hide ? (0, s.jsx)(g.A, {}) : this.renderUnhidden();
    }
}
let H = () => {
    let e = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, o.bG)([b.A], () => b.A.hidePersonalInformation),
        n = (0, o.bG)([v.A], () => v.A.theme),
        i = (0, o.bG)([f.default], () => f.default.locale),
        l = (0, o.bG)([O.A], () => O.A.getSubsection());
    return null == e
        ? null
        : (0, s.jsx)(U, {
              theme: n,
              currentUser: e,
              hide: t,
              locale: i,
              subsection: l,
          });
};
