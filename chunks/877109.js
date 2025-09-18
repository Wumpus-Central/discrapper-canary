n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(272008),
    s = n(569984),
    l = n(606033),
    c = n(778680),
    u = n(751586);
let d = function (e) {
    let { questId: t } = e,
        [n, d] = i.useState(t),
        f = (0, a.e7)([s.Z], () => (null != n ? s.Z.getQuest(n) : void 0), [n]);
    i.useEffect(() => {
        null != t && d(t);
    }, [t]),
        i.useEffect(() => {
            null != n && (0, o.MG)(n);
        }, [n]);
    let _ = () => {
            null != n && (0, o.MG)(n);
        },
        [p, h] = i.useState([]);
    return (0, r.jsx)(c.Z, {
        controls: (0, r.jsx)(l.Z, {
            questId: n,
            setQuestId: d,
            quest: f,
            refreshQuest: _,
        }),
        selectedSections: p,
        onSectionSelect: (e) => {
            "all" === e ? h([]) : h([e]);
        },
        children:
            null != n
                ? (0, r.jsx)(u.UN, {
                      questId: n,
                      selectedSections: p,
                  })
                : null,
    });
};
