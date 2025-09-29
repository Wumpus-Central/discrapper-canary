n.d(t, { Z: () => g }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(948789),
    a = n(442837),
    o = n(570140),
    s = n(272008),
    c = n(113434),
    u = n(569984),
    d = n(606033),
    p = n(778680),
    f = n(751586),
    h = n(981631);
let g = function (e) {
    let { questId: t } = e,
        { questId: n, setQuestId: g } = (function (e) {
            let [t, n] = i.useState(e),
                [r, a] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if (r) return;
                    let t = new URLSearchParams(window.location.search).get(c.tR.QUEST_ID);
                    null != t ? n(t) : null != e && n(e), a(!0);
                }, [e, r]),
                i.useEffect(() => {
                    if (!r || null == t) return;
                    let e = new URLSearchParams();
                    e.set(c.tR.TAB, c.e5.PREVIEW_TOOL), e.set(c.tR.QUEST_ID, t);
                    let n = "".concat(h.Z5c.QUEST_HOME_V2, "?").concat(e.toString());
                    (0, l.uL)(n.toString());
                }, [t, r]),
                {
                    questId: t,
                    setQuestId: n,
                }
            );
        })(t),
        m = (0, a.e7)([u.Z], () => (null != n ? u.Z.getQuest(n) : void 0), [n]);
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
    let [b, _] = i.useState([]);
    return (0, r.jsx)(p.Z, {
        controls: (0, r.jsx)(d.Z, {
            questId: n,
            setQuestId: g,
            quest: m,
            refreshQuest: () => {
                null != n && (0, s.MG)(n);
            },
        }),
        selectedSections: b,
        onSectionSelect: (e) => {
            "all" === e ? _([]) : _([e]);
        },
        children:
            null != n
                ? (0, r.jsx)(f.UN, {
                      questId: n,
                      selectedSections: b,
                  })
                : null,
    });
};
