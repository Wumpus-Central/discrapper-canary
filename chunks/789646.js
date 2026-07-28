n.d(t, { Mg: () => a, RZ: () => d });
var i = n(477900),
    l = n(582128),
    r = n(403362);
let s = l.createContext(void 0);
function a() {
    let e = l.useContext(s);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}
function o(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: r, manageFocusOnAction: a } = e,
        o = l.useMemo(() => ({ actionButtonRef: n, pollAnswerRef: r, manageFocusOnAction: a }), [n, r, a]);
    return (0, i.jsx)(s.Provider, { value: o, children: t });
}
function d(e) {
    let { children: t } = e,
        [n, s] = l.useState(),
        a = l.useRef(null),
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            "POLL_ANSWERS" === n && null != d.current && d.current?.ref?.focus(),
                "ACTION_BUTTON" === n && null != a.current && a.current?.focus();
        }, [n]),
        (0, i.jsx)(o, {
            pollAnswerRef: d,
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
