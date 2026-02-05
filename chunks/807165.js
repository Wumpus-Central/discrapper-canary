"use strict";
n.d(t, { A: () => I, W: () => C });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(311907),
    o = n(36525),
    d = n(686956),
    c = n(964486),
    u = n(34457),
    m = n(498642),
    g = n(403362),
    x = n(997509),
    h = n(555337),
    _ = n(636042),
    A = n(396816),
    p = n(856644),
    f = n(206774),
    j = n(763582),
    N = n(966851),
    E = n(927573),
    b = n(652215);
function T(e) {
    x.A.selectRole(e);
}
let C = () => {
    let { guild: e } = (0, a.cf)([h.A], () => h.A.getProps()),
        t = (0, a.bG)([A.A], () => A.A.formState),
        n = (0, a.bG)([A.A], () => A.A.errorMessage);
    return (0, i.jsx)(o.A, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = A.A.editedRoleIds.map((e) => A.A.getRole(e)).filter(g.Vq),
                i = A.A.getSortDeltas(),
                s = null,
                l = null;
            A.A.hasRoleConfigurationChanges &&
                ((l = A.A.editedRoleIdsForConfigurations), (s = A.A.getEditedRoleConnectionConfigurationsMap())),
                (0, _.JY)(t, n, i, l, s);
        },
        submitting: t === b.XlH.SUBMITTING,
        onReset: _.Ts,
    });
};
function I(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, a.cf)([A.A], () => ({ guild: A.A.guild, roles: A.A.roles }), []);
    r()(null != n, "Guild cannot be null here");
    let o = s.useMemo(() => l.find((e) => (0, u.Oy)(e)), [l]);
    r()(null != o, "Guild must have an everyone role");
    let g = s.useMemo(() => l.filter((e) => !(0, u.Oy)(e)), [l]),
        x = (0, a.bG)([h.A], () => h.A.getSelectedRoleId()),
        [_, b] = s.useState(g.length > 0);
    s.useEffect(() => {
        b(_ || g.length > 0);
    }, [_, g.length]),
        (0, c.Ay)(() => {
            let e = m.A.getMemberCount(n.id);
            null != e && e <= p.gz && d.A.requestMembers(n.id, "", 0, !1);
        });
    let [C, I] = s.useState(E.T$.DISPLAY);
    return (s.useEffect(() => {
        null == x && I(E.T$.DISPLAY);
    }, [x]),
    null != x)
        ? (0, i.jsx)(f.A, { editRoleId: x, setEditRoleId: T, selectedSection: C, setSelectedSection: I })
        : _
          ? (0, i.jsx)(N.A, {
                setEditRoleId: T,
                guild: n,
                everyoneRole: o,
                otherRoles: g,
                setSelectedSection: I,
                refToScroller: t,
            })
          : (0, i.jsx)(j.A, { guild: n, everyoneRole: o, setEditRoleId: T });
}
