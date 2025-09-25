n.d(t, { Z: () => m }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(948789),
    o = n(442837),
    s = n(570140),
    l = n(272008),
    c = n(113434),
    u = n(569984),
    d = n(606033),
    f = n(778680),
    _ = n(751586),
    p = n(981631);
function h(e) {
    let [t, n] = i.useState(e),
        [r, o] = i.useState(!1);
    return (
        i.useEffect(() => {
            if (r) return;
            let t = new URLSearchParams(window.location.search).get(c.tR.QUEST_ID);
            null != t ? n(t) : null != e && n(e), o(!0);
        }, [e, r]),
        i.useEffect(() => {
            if (!r || null == t) return;
            let e = new URLSearchParams();
            e.set(c.tR.TAB, c.e5.PREVIEW_TOOL), e.set(c.tR.QUEST_ID, t);
            let n = "".concat(p.Z5c.QUEST_HOME_V2, "?").concat(e.toString());
            (0, a.uL)(n.toString());
        }, [t, r]),
        {
            questId: t,
            setQuestId: n,
        }
    );
}
let m = function (e) {
    let { questId: t } = e,
        { questId: n, setQuestId: a } = h(t),
        c = (0, o.e7)([u.Z], () => (null != n ? u.Z.getQuest(n) : void 0), [n]);
    i.useEffect(() => {
        null != n &&
            (0, l.MG)(n).then(() => {
                (0, l.T0)(n);
            });
    }, [n]),
        i.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, l.MG)(n);
            };
            return (
                s.Z.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    s.Z.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let p = () => {
            null != n && (0, l.MG)(n);
        },
        [m, g] = i.useState([]);
    return (0, r.jsx)(f.Z, {
        controls: (0, r.jsx)(d.Z, {
            questId: n,
            setQuestId: a,
            quest: c,
            refreshQuest: p,
        }),
        selectedSections: m,
        onSectionSelect: (e) => {
            "all" === e ? g([]) : g([e]);
        },
        children:
            null != n
                ? (0, r.jsx)(_.UN, {
                      questId: n,
                      selectedSections: m,
                  })
                : null,
    });
};
