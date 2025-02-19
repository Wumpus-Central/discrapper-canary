n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(367907),
    d = n(605436),
    u = n(228643),
    m = n(496675),
    p = n(626135),
    g = n(823379),
    h = n(243730),
    f = n(946724),
    b = n(999382),
    x = n(130341),
    j = n(981975),
    N = n(660962),
    v = n(442182),
    _ = n(322816),
    O = n(266665),
    y = n(203377),
    C = n(981631),
    I = n(814569);
function E(e) {
    let t,
        { editRoleId: n, setEditRoleId: s, selectedSection: E, setSelectedSection: S } = e,
        T = (0, l.e7)([f.Z], () => f.Z.guild, []);
    a()(null != T, 'guildId cannot be null here');
    let { role: P, permissionSearchQuery: w } = (0, l.cj)(
        [f.Z],
        () => ({
            role: f.Z.getRole(n),
            permissionSearchQuery: f.Z.getPermissionSearchQuery()
        }),
        [n]
    );
    i.useEffect(() => {
        null == P && s(null);
    }, [P, s]);
    let R = (0, l.e7)([m.Z], () => m.Z.getHighestRole(T), [T]),
        D = (0, l.e7)([m.Z], () => !m.Z.isRoleHigher(T, R, P)),
        Z = i.useRef(null),
        A = (0, l.e7)([b.Z], () => b.Z.getProps().integrations),
        k = {
            role: P,
            editRoleId: n
        },
        W = i.useRef(k);
    if (
        (i.useEffect(() => {
            W.current = k;
        }),
        i.useEffect(() => {
            var e, t;
            let { role: n, editRoleId: r } = W.current,
                i = (0, x.UT)(E),
                s = null !== (t = null === (e = h.Z.getRoleMemberCount(T.id)) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : 0;
            p.default.track(
                C.rMx.ROLE_PAGE_VIEWED,
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
                        is_everyone: (0, d.pM)(T.id, r),
                        role_id: r,
                        role_mentionable: null == n ? void 0 : n.mentionable,
                        role_hoist: null == n ? void 0 : n.hoist,
                        role_permissions: null == n ? void 0 : n.permissions.toString(),
                        role_num_members: s
                    },
                    (0, c.hH)(T.id)
                )
            );
        }, [E, T.id, null == P ? void 0 : P.id]),
        i.useEffect(() => {
            (null == P ? void 0 : P.id) != null && (0, u.sE)(T.id, P.id);
        }, [T.id, null == P ? void 0 : P.id]),
        null == P)
    )
        return null;
    switch (E) {
        case y.ZI.DISPLAY:
            t = (0, r.jsx)(N.ZP, {
                guild: T,
                role: P,
                locked: D,
                highestRole: R,
                setSelectedSection: S
            });
            break;
        case y.ZI.PERMISSIONS:
            t = (0, r.jsx)(_.ZP, {
                guild: T,
                role: P,
                locked: D,
                setSelectedSection: S,
                initialSearchQuery: w
            });
            break;
        case y.ZI.VERIFICATIONS:
            t = (0, r.jsx)(j.Z, {
                guild: T,
                role: P,
                locked: D,
                setSelectedSection: S,
                integrations: null != A ? A : void 0
            });
            break;
        case y.ZI.MEMBERS:
            t = (0, r.jsx)(v.ZP, {
                guild: T,
                role: P,
                locked: D,
                setSelectedSection: S
            });
            break;
        default:
            (0, g.vE)(E);
    }
    return (0, r.jsxs)(o.hjN, {
        className: I.page,
        children: [
            (0, r.jsx)(O.Z, {
                guild: T,
                currentRoleId: n,
                setCurrentRoleId: s,
                setSelectedSection: S
            }),
            (0, r.jsx)('div', {
                className: I.contentContainer,
                ref: Z,
                children: (0, r.jsx)(o.JcV, {
                    containerRef: Z,
                    children: t
                })
            })
        ]
    });
}
