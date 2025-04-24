n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(367907),
    u = n(605436),
    d = n(228643),
    m = n(496675),
    g = n(626135),
    p = n(823379),
    h = n(243730),
    f = n(946724),
    x = n(999382),
    b = n(130341),
    j = n(981975),
    _ = n(660962),
    v = n(442182),
    O = n(322816),
    C = n(266665),
    y = n(203377),
    N = n(981631),
    I = n(443185);
function E(e) {
    let t,
        { editRoleId: n, setEditRoleId: l, selectedSection: E, setSelectedSection: S } = e,
        T = (0, a.e7)([f.Z], () => f.Z.guild, []);
    s()(null != T, 'guildId cannot be null here');
    let { role: P, permissionSearchQuery: w } = (0, a.cj)(
        [f.Z],
        () => ({
            role: f.Z.getRole(n),
            permissionSearchQuery: f.Z.getPermissionSearchQuery()
        }),
        [n]
    );
    i.useEffect(() => {
        null == P && l(null);
    }, [P, l]);
    let R = (0, a.e7)([m.Z], () => m.Z.getHighestRole(T), [T]),
        Z = (0, a.e7)([m.Z], () => !m.Z.isRoleHigher(T, R, P)),
        D = i.useRef(null),
        k = (0, a.e7)([x.Z], () => x.Z.getProps().integrations),
        A = {
            role: P,
            editRoleId: n
        },
        L = i.useRef(A);
    if (
        (i.useEffect(() => {
            L.current = A;
        }),
        i.useEffect(() => {
            var e, t;
            let { role: n, editRoleId: r } = L.current,
                i = (0, b.UT)(E),
                l = null != (t = null == (e = h.Z.getRoleMemberCount(T.id)) ? void 0 : e[r]) ? t : 0;
            g.default.track(
                N.rMx.ROLE_PAGE_VIEWED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        tab_opened: i,
                        is_everyone: (0, u.pM)(T.id, r),
                        role_id: r,
                        role_mentionable: null == n ? void 0 : n.mentionable,
                        role_hoist: null == n ? void 0 : n.hoist,
                        role_permissions: null == n ? void 0 : n.permissions.toString(),
                        role_num_members: l
                    },
                    (0, c.hH)(T.id)
                )
            );
        }, [E, T.id, null == P ? void 0 : P.id]),
        i.useEffect(() => {
            (null == P ? void 0 : P.id) != null && (0, d.sE)(T.id, P.id);
        }, [T.id, null == P ? void 0 : P.id]),
        null == P)
    )
        return null;
    switch (E) {
        case y.ZI.DISPLAY:
            t = (0, r.jsx)(_.ZP, {
                guild: T,
                role: P,
                locked: Z,
                highestRole: R,
                setSelectedSection: S
            });
            break;
        case y.ZI.PERMISSIONS:
            t = (0, r.jsx)(O.ZP, {
                guild: T,
                role: P,
                locked: Z,
                setSelectedSection: S,
                initialSearchQuery: w
            });
            break;
        case y.ZI.VERIFICATIONS:
            t = (0, r.jsx)(j.Z, {
                guild: T,
                role: P,
                locked: Z,
                setSelectedSection: S,
                integrations: null != k ? k : void 0
            });
            break;
        case y.ZI.MEMBERS:
            t = (0, r.jsx)(v.ZP, {
                guild: T,
                role: P,
                locked: Z,
                setSelectedSection: S
            });
            break;
        default:
            (0, p.vE)(E);
    }
    return (0, r.jsxs)(o.hjN, {
        className: I.page,
        children: [
            (0, r.jsx)(C.Z, {
                guild: T,
                currentRoleId: n,
                setCurrentRoleId: l,
                setSelectedSection: S
            }),
            (0, r.jsx)('div', {
                className: I.contentContainer,
                ref: D,
                children: (0, r.jsx)(o.JcV, {
                    containerRef: D,
                    children: t
                })
            })
        ]
    });
}
