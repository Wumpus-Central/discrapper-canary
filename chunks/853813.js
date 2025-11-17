n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(367907),
    d = n(605436),
    u = n(228643),
    g = n(496675),
    m = n(626135),
    p = n(823379),
    f = n(243730),
    h = n(999382),
    b = n(103576),
    x = n(130341),
    j = n(981975),
    _ = n(660962),
    v = n(442182),
    O = n(322816),
    C = n(266665),
    y = n(203377),
    N = n(981631),
    E = n(760150);
function I(e) {
    let t,
        { editRoleId: n, setEditRoleId: l, selectedSection: I, setSelectedSection: S } = e,
        T = (0, s.e7)([b.Z], () => b.Z.guild, []);
    a()(null != T, "guildId cannot be null here");
    let { role: P, permissionSearchQuery: w } = (0, s.cj)(
        [b.Z],
        () => ({
            role: b.Z.getRole(n),
            permissionSearchQuery: b.Z.getPermissionSearchQuery(),
        }),
        [n],
    );
    i.useEffect(() => {
        null == P && l(null);
    }, [P, l]);
    let Z = (0, s.e7)([g.Z], () => g.Z.getHighestRole(T), [T]),
        R = (0, s.e7)([g.Z], () => !g.Z.isRoleHigher(T, Z, P)),
        D = i.useRef(null),
        A = (0, s.e7)([h.Z], () => h.Z.getProps().integrations),
        L = {
            role: P,
            editRoleId: n,
        },
        k = i.useRef(L);
    if (
        (i.useEffect(() => {
            k.current = L;
        }),
        i.useEffect(() => {
            var e, t;
            let { role: n, editRoleId: r } = k.current,
                i = (0, x.UT)(I),
                l = null != (t = null == (e = f.Z.getRoleMemberCount(T.id)) ? void 0 : e[r]) ? t : 0;
            m.default.track(
                N.rMx.ROLE_PAGE_VIEWED,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        tab_opened: i,
                        is_everyone: (0, d.pM)(T.id, r),
                        role_id: r,
                        role_mentionable: null == n ? void 0 : n.mentionable,
                        role_hoist: null == n ? void 0 : n.hoist,
                        role_permissions: null == n ? void 0 : n.permissions.toString(),
                        role_num_members: l,
                    },
                    (0, c.hH)(T.id),
                ),
            );
        }, [I, T.id, null == P ? void 0 : P.id]),
        i.useEffect(() => {
            (null == P ? void 0 : P.id) != null && (0, u.sE)(T.id, P.id);
        }, [T.id, null == P ? void 0 : P.id]),
        null == P)
    )
        return null;
    switch (I) {
        case y.ZI.DISPLAY:
            t = (0, r.jsx)(_.ZP, {
                guild: T,
                role: P,
                locked: R,
                highestRole: Z,
                setSelectedSection: S,
            });
            break;
        case y.ZI.PERMISSIONS:
            t = (0, r.jsx)(O.ZP, {
                guild: T,
                role: P,
                locked: R,
                setSelectedSection: S,
                initialSearchQuery: w,
            });
            break;
        case y.ZI.VERIFICATIONS:
            t = (0, r.jsx)(j.Z, {
                guild: T,
                role: P,
                locked: R,
                setSelectedSection: S,
                integrations: null != A ? A : void 0,
            });
            break;
        case y.ZI.MEMBERS:
            t = (0, r.jsx)(v.ZP, {
                guild: T,
                role: P,
                locked: R,
                setSelectedSection: S,
            });
            break;
        default:
            (0, p.vE)(I);
    }
    return (0, r.jsxs)("div", {
        className: E.page,
        children: [
            (0, r.jsx)(C.Z, {
                guild: T,
                currentRoleId: n,
                setCurrentRoleId: l,
                setSelectedSection: S,
            }),
            (0, r.jsx)("div", {
                className: E.contentContainer,
                ref: D,
                children: (0, r.jsx)(o.JcV, {
                    containerRef: D,
                    children: t,
                }),
            }),
        ],
    });
}
