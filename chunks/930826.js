n.d(t, { Z: () => l }), n(583741), n(290780), n(642613);
var r = n(951288);
n(647438);
var a = n(905131),
    i = n(437800);
function l(e) {
    let { memberIds: t, guildId: n, pickedMemberIds: l, currentMemberId: o } = e,
        c = t.filter((e) => !l.includes(e)),
        u = t.filter((e) => l.includes(e) && e !== o).reverse();
    null != o && c.unshift(o), c.sort((e, t) => (e === o ? -1 : +(t === o)));
    let s = t.length > 5;
    return (0, r.jsxs)("div", {
        className: i.listContainer,
        children: [
            c.length > 0 &&
                (0, r.jsxs)("div", {
                    className: i.section,
                    children: [
                        (0, r.jsxs)("h3", {
                            className: i.sectionTitle,
                            children: ["Available (", c.length, ")"],
                        }),
                        (0, r.jsx)("ul", {
                            className: i.memberList,
                            "data-two-columns": s || void 0,
                            children: c.map((e) =>
                                (0, r.jsx)(
                                    a.Z,
                                    {
                                        userId: e,
                                        guildId: n,
                                        isPicked: !1,
                                        isCurrent: o === e,
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            u.length > 0 &&
                (0, r.jsxs)("div", {
                    className: i.section,
                    children: [
                        (0, r.jsxs)("h3", {
                            className: i.sectionTitle,
                            children: ["Selected (", u.length, ")"],
                        }),
                        (0, r.jsx)("ul", {
                            className: i.memberList,
                            "data-two-columns": s || void 0,
                            children: u.map((e) =>
                                (0, r.jsx)(
                                    a.Z,
                                    {
                                        userId: e,
                                        guildId: n,
                                        isPicked: !0,
                                        isCurrent: !1,
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
        ],
    });
}
