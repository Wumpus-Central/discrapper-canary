n.d(t, { Mg: () => s, RZ: () => c });
var i = n(627968),
    l = n(64700),
    a = n(403362);
let r = l.createContext(void 0);
function s() {
    let e = l.useContext(r);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}
function o(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: a, manageFocusOnAction: s } = e,
        o = l.useMemo(() => ({ actionButtonRef: n, pollAnswerRef: a, manageFocusOnAction: s }), [n, a, s]);
    return (0, i.jsx)(r.Provider, { value: o, children: t });
}
function c(e) {
    let { children: t } = e,
        [n, r] = l.useState(),
        s = l.useRef(null),
        c = l.useRef(null);
    return (
        l.useEffect(() => {
            "POLL_ANSWERS" === n && null != c.current && c.current?.ref?.focus(),
                "ACTION_BUTTON" === n && null != s.current && s.current?.focus();
        }, [n]),
        (0, i.jsx)(o, {
            pollAnswerRef: c,
            actionButtonRef: s,
            manageFocusOnAction: (e) => {
                switch (e) {
                    case "submit":
                    case "cancel":
                        r("ACTION_BUTTON");
                        break;
                    case "remove":
                    case "showVotes":
                        r("POLL_ANSWERS");
                        break;
                    case "showVoterDetails":
                        break;
                    default:
                        (0, a.xb)(e);
                }
            },
            children: t,
        })
    );
}
