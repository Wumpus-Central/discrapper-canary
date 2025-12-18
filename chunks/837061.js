n.d(e, { x: () => R });
var i = n(657707),
    l = n(816814),
    s = n(809206),
    u = n(509613),
    r = n(484459),
    a = n(594174),
    o = n(626135),
    T = n(313789),
    S = n(526665),
    c = n(393681),
    E = n(995644),
    d = n(172320),
    g = n(439175),
    _ = n(202011),
    I = n(726985),
    N = n(981631),
    A = n(388032);
let O = (0, u.ZH)(T.n.ACCOUNT_STANDING_TAB, {
        getTitle: () => A.intl.string(A.t["Vov/9o"]),
        onItemSelect: () => {
            o.default.track(N.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: c.D.STANDING });
        },
        buildLayout: () => [_.v],
    }),
    C = (0, u.ZH)(T.n.ACCOUNT_SECURITY_TAB, {
        getTitle: () => A.intl.string(A.t.Am9YHi),
        onItemSelect: () => {
            o.default.track(N.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: c.D.SECURITY });
        },
        buildLayout: () => [d.z, E.v, g.v],
    }),
    f = (0, u.wf)(T.n.ACCOUNT_PANEL, {
        useTitle: () => A.intl.string(A.t["JAIM/m"]),
        initialize: function () {
            let t = a.default.getCurrentUser();
            return (
                null != t && (0, r.Z)(t.id, t.getAvatarURL(void 0, 80)),
                () => {
                    l.Z.clearBackupCodes(), (0, s.Zy)();
                }
            );
        },
        hideInStreamerMode: !0,
        buildLayout: () => [C, O],
    }),
    P = (0, u.wf)(T.n.ACCOUNT_PANEL, {
        useTitle: () => A.intl.string(A.t["JAIM/m"]),
        StronglyDiscouragedCustomComponent: c.Z,
        buildLayout: () => [],
    }),
    R = (0, u.m7)(T.n.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["JAIM/m"]),
        getLegacySearchKey: () => ((0, S.Gl)("AccountPanel") ? void 0 : I.s6.ACCOUNT),
        icon: i.tBG,
        buildLayout: () => ((0, S.Gl)("AccountPanel") ? [f] : [P]),
    });
