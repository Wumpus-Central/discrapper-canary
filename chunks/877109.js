n.d(t, { Z: () => h }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(948789),
    o = n(442837),
    s = n(272008),
    l = n(113434),
    c = n(569984),
    u = n(606033),
    d = n(778680),
    f = n(751586),
    _ = n(981631);
function p(e) {
    let [t, n] = i.useState(e),
        [r, o] = i.useState(!1);
    return (
        i.useEffect(() => {
            if (r) return;
            let t = new URLSearchParams(window.location.search).get(l.tR.QUEST_ID);
            null != t ? n(t) : null != e && n(e), o(!0);
        }, [e, r]),
        i.useEffect(() => {
            if (!r || null == t) return;
            let e = new URLSearchParams();
            e.set(l.tR.TAB, l.e5.PREVIEW_TOOL), e.set(l.tR.QUEST_ID, t);
            let n = "".concat(_.Z5c.QUEST_HOME_V2, "?").concat(e.toString());
            (0, a.uL)(n.toString());
        }, [t, r]),
        {
            questId: t,
            setQuestId: n,
        }
    );
}
let h = function (e) {
    let { questId: t } = e,
        { questId: n, setQuestId: a } = p(t),
        l = (0, o.e7)([c.Z], () => (null != n ? c.Z.getQuest(n) : void 0), [n]);
    i.useEffect(() => {
        null != n && (0, s.MG)(n);
    }, [n]);
    let _ = () => {
            null != n && (0, s.MG)(n);
        },
        [h, m] = i.useState([]);
    return (0, r.jsx)(d.Z, {
        controls: (0, r.jsx)(u.Z, {
            questId: n,
            setQuestId: a,
            quest: l,
            refreshQuest: _,
        }),
        selectedSections: h,
        onSectionSelect: (e) => {
            "all" === e ? m([]) : m([e]);
        },
        children:
            null != n
                ? (0, r.jsx)(f.UN, {
                      questId: n,
                      selectedSections: h,
                  })
                : null,
    });
};
