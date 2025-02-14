n.d(t, { Z: () => S });
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(367907),
    d = n(605436),
    u = n(228643),
    m = n(496675),
    h = n(626135),
    g = n(823379),
    x = n(243730),
    p = n(946724),
    _ = n(999382),
    C = n(130341),
    f = n(981975),
    v = n(660962),
    N = n(442182),
    j = n(322816),
    I = n(266665),
    E = n(203377),
    b = n(981631),
    T = n(240256);
function S(e) {
    let t,
        { editRoleId: n, setEditRoleId: l, selectedSection: S, setSelectedSection: R } = e,
        Z = (0, a.e7)([p.Z], () => p.Z.guild, []);
    s()(null != Z, 'guildId cannot be null here');
    let { role: y, permissionSearchQuery: A } = (0, a.cj)(
        [p.Z],
        () => ({
            role: p.Z.getRole(n),
            permissionSearchQuery: p.Z.getPermissionSearchQuery()
        }),
        [n]
    );
    r.useEffect(() => {
        null == y && l(null);
    }, [y, l]);
    let L = (0, a.e7)([m.Z], () => m.Z.getHighestRole(Z), [Z]),
        D = (0, a.e7)([m.Z], () => !m.Z.isRoleHigher(Z, L, y)),
        O = r.useRef(null),
        k = (0, a.e7)([_.Z], () => _.Z.getProps().integrations),
        P = {
            role: y,
            editRoleId: n
        },
        w = r.useRef(P);
    if (
        (r.useEffect(() => {
            w.current = P;
        }),
        r.useEffect(() => {
            var e, t;
            let { role: n, editRoleId: i } = w.current,
                r = (0, C.UT)(S),
                l = null !== (t = null === (e = x.Z.getRoleMemberCount(Z.id)) || void 0 === e ? void 0 : e[i]) && void 0 !== t ? t : 0;
            h.default.track(b.rMx.ROLE_PAGE_VIEWED, {
                tab_opened: r,
                is_everyone: (0, d.pM)(Z.id, i),
                role_id: i,
                role_mentionable: null == n ? void 0 : n.mentionable,
                role_hoist: null == n ? void 0 : n.hoist,
                role_permissions: null == n ? void 0 : n.permissions.toString(),
                role_num_members: l,
                ...(0, c.hH)(Z.id)
            });
        }, [S, Z.id, null == y ? void 0 : y.id]),
        r.useEffect(() => {
            (null == y ? void 0 : y.id) != null && (0, u.sE)(Z.id, y.id);
        }, [Z.id, null == y ? void 0 : y.id]),
        null == y)
    )
        return null;
    switch (S) {
        case E.ZI.DISPLAY:
            t = (0, i.jsx)(v.ZP, {
                guild: Z,
                role: y,
                locked: D,
                highestRole: L,
                setSelectedSection: R
            });
            break;
        case E.ZI.PERMISSIONS:
            t = (0, i.jsx)(j.ZP, {
                guild: Z,
                role: y,
                locked: D,
                setSelectedSection: R,
                initialSearchQuery: A
            });
            break;
        case E.ZI.VERIFICATIONS:
            t = (0, i.jsx)(f.Z, {
                guild: Z,
                role: y,
                locked: D,
                setSelectedSection: R,
                integrations: null != k ? k : void 0
            });
            break;
        case E.ZI.MEMBERS:
            t = (0, i.jsx)(N.ZP, {
                guild: Z,
                role: y,
                locked: D,
                setSelectedSection: R
            });
            break;
        default:
            (0, g.vE)(S);
    }
    return (0, i.jsxs)(o.hjN, {
        className: T.page,
        children: [
            (0, i.jsx)(I.Z, {
                guild: Z,
                currentRoleId: n,
                setCurrentRoleId: l,
                setSelectedSection: R
            }),
            (0, i.jsx)('div', {
                className: T.contentContainer,
                ref: O,
                children: (0, i.jsx)(o.JcV, {
                    containerRef: O,
                    children: t
                })
            })
        ]
    });
}
