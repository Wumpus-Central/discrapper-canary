n.d(t, {
    Z: function () {
        return S;
    }
});
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
    f = n(999382),
    C = n(130341),
    v = n(981975),
    N = n(660962),
    _ = n(442182),
    I = n(322816),
    T = n(266665),
    j = n(203377),
    b = n(981631),
    E = n(556996);
function S(e) {
    let t,
        { editRoleId: n, setEditRoleId: l, selectedSection: S, setSelectedSection: R } = e,
        y = (0, a.e7)([p.Z], () => p.Z.guild, []);
    s()(null != y, 'guildId cannot be null here');
    let { role: A, permissionSearchQuery: Z } = (0, a.cj)(
        [p.Z],
        () => ({
            role: p.Z.getRole(n),
            permissionSearchQuery: p.Z.getPermissionSearchQuery()
        }),
        [n]
    );
    r.useEffect(() => {
        null == A && l(null);
    }, [A, l]);
    let L = (0, a.e7)([m.Z], () => m.Z.getHighestRole(y), [y]),
        D = (0, a.e7)([m.Z], () => !m.Z.isRoleHigher(y, L, A)),
        O = r.useRef(null),
        M = (0, a.e7)([f.Z], () => f.Z.getProps().integrations),
        k = {
            role: A,
            editRoleId: n
        },
        P = r.useRef(k);
    if (
        (r.useEffect(() => {
            P.current = k;
        }),
        r.useEffect(() => {
            var e, t;
            let { role: n, editRoleId: i } = P.current,
                r = (0, C.UT)(S),
                l = null !== (t = null === (e = x.Z.getRoleMemberCount(y.id)) || void 0 === e ? void 0 : e[i]) && void 0 !== t ? t : 0;
            h.default.track(b.rMx.ROLE_PAGE_VIEWED, {
                tab_opened: r,
                is_everyone: (0, d.pM)(y.id, i),
                role_id: i,
                role_mentionable: null == n ? void 0 : n.mentionable,
                role_hoist: null == n ? void 0 : n.hoist,
                role_permissions: null == n ? void 0 : n.permissions.toString(),
                role_num_members: l,
                ...(0, c.hH)(y.id)
            });
        }, [S, y.id, null == A ? void 0 : A.id]),
        r.useEffect(() => {
            if ((null == A ? void 0 : A.id) != null) (0, u.sE)(y.id, A.id);
        }, [y.id, null == A ? void 0 : A.id]),
        null == A)
    )
        return null;
    switch (S) {
        case j.ZI.DISPLAY:
            t = (0, i.jsx)(N.ZP, {
                guild: y,
                role: A,
                locked: D,
                highestRole: L,
                setSelectedSection: R
            });
            break;
        case j.ZI.PERMISSIONS:
            t = (0, i.jsx)(I.ZP, {
                guild: y,
                role: A,
                locked: D,
                setSelectedSection: R,
                initialSearchQuery: Z
            });
            break;
        case j.ZI.VERIFICATIONS:
            t = (0, i.jsx)(v.Z, {
                guild: y,
                role: A,
                locked: D,
                setSelectedSection: R,
                integrations: null != M ? M : void 0
            });
            break;
        case j.ZI.MEMBERS:
            t = (0, i.jsx)(_.ZP, {
                guild: y,
                role: A,
                locked: D,
                setSelectedSection: R
            });
            break;
        default:
            (0, g.vE)(S);
    }
    return (0, i.jsxs)(o.FormSection, {
        className: E.page,
        children: [
            (0, i.jsx)(T.Z, {
                guild: y,
                currentRoleId: n,
                setCurrentRoleId: l,
                setSelectedSection: R
            }),
            (0, i.jsx)('div', {
                className: E.contentContainer,
                ref: O,
                children: (0, i.jsx)(o.FocusRingScope, {
                    containerRef: O,
                    children: t
                })
            })
        ]
    });
}
