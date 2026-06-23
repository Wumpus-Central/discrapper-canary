n.d(t, { Mg: () => a, RZ: () => u });
var l = n(627968),
    i = n(64700),
    r = n(403362);
let s = i.createContext(void 0);
function a() {
    let e = i.useContext(s);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}
function o(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: r, manageFocusOnAction: a } = e,
        o = i.useMemo(() => ({ actionButtonRef: n, pollAnswerRef: r, manageFocusOnAction: a }), [n, r, a]);
    return (0, l.jsx)(s.Provider, { value: o, children: t });
}
function u(e) {
    let { children: t } = e,
        [n, s] = i.useState(),
        a = i.useRef(null),
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            "POLL_ANSWERS" === n && null != u.current && u.current?.ref?.focus(),
                "ACTION_BUTTON" === n && null != a.current && a.current?.focus();
        }, [n]),
        (0, l.jsx)(o, {
            pollAnswerRef: u,
            actionButtonRef: a,
            manageFocusOnAction: function (e) {
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
                        (0, r.xb)(e);
                }
            },
            children: t,
        })
    );
}
