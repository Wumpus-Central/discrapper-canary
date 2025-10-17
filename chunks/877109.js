n.d(t, { Z: () => m }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(843611),
    a = n(442837),
    o = n(570140),
    s = n(272008),
    c = n(113434),
    u = n(569984),
    d = n(606033),
    p = n(778680),
    f = n(751586),
    h = n(981631);
function g(e) {
    return new URLSearchParams(e).get(c.tR.QUEST_ID);
}
let m = function (e) {
    let { questId: t } = e,
        { questId: n, setQuestId: m } = (function (e) {
            let t = (0, l.k6)(),
                [n, r] = i.useState(e),
                { search: a } = (0, l.TH)();
            return (
                i.useEffect(() => {
                    let t = g(a);
                    null != t ? r(t) : null != e && r(e);
                }, [e, a]),
                i.useEffect(() => {
                    if (null == n || g(a) === n) return;
                    let e = new URLSearchParams();
                    e.set(c.tR.TAB, c.e5.PREVIEW_TOOL),
                        e.set(c.tR.QUEST_ID, n),
                        t.push("".concat(h.Z5c.QUEST_HOME_V2, "?").concat(e.toString()));
                }, [n, t, a]),
                {
                    questId: n,
                    setQuestId: r,
                }
            );
        })(t),
        b = (0, a.e7)([u.Z], () => (null != n ? u.Z.getQuest(n) : void 0), [n]),
        _ = (0, a.e7)([u.Z], () => (null != n ? u.Z.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, s.MG)(n).then(() => {
                (0, s.T0)(n);
            });
    }, [n]),
        i.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, s.MG)(n);
            };
            return (
                o.Z.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    o.Z.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [E, O] = i.useState([]);
    return (0, r.jsx)(p.Z, {
        controls: (0, r.jsx)(d.Z, {
            questId: n,
            setQuestId: m,
            quest: b,
            refreshQuest: () => {
                null != n && (0, s.MG)(n);
            },
        }),
        selectedSections: E,
        onSectionSelect: (e) => {
            "all" === e ? O([]) : O([e]);
        },
        children:
            (null == _ ? void 0 : _.id) != null
                ? (0, r.jsx)(f.UN, {
                      questId: null == _ ? void 0 : _.id,
                      selectedSections: E,
                  })
                : null,
    });
};
