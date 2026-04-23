n.d(t, { Mg: () => r, RZ: () => d });
var i = n(627968),
    l = n(64700),
    a = n(403362);
let s = l.createContext(void 0);
function r() {
    let e = l.useContext(s);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}
function o(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: a, manageFocusOnAction: r } = e,
        o = l.useMemo(() => ({ actionButtonRef: n, pollAnswerRef: a, manageFocusOnAction: r }), [n, a, r]);
    return (0, i.jsx)(s.Provider, { value: o, children: t });
}
function d(e) {
    let { children: t } = e,
        [n, s] = l.useState(),
        r = l.useRef(null),
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            "POLL_ANSWERS" === n && null != d.current && d.current?.ref?.focus(),
                "ACTION_BUTTON" === n && null != r.current && r.current?.focus();
        }, [n]),
        (0, i.jsx)(o, {
            pollAnswerRef: d,
            actionButtonRef: r,
            manageFocusOnAction: (e) => {
                switch (e) {
                    case "submit":
                    case "cancel":
                        s("ACTION_BUTTON");
                        break;
                    case "remove":
                    case "showVotes":
                        s("POLL_ANSWERS");
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
