n.d(t, { Mg: () => o, RZ: () => u });
var l = n(477900),
    i = n(582128),
    s = n(403362);
let r = i.createContext(void 0);
function o() {
    let e = i.useContext(r);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}
function a(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: s, manageFocusOnAction: o } = e,
        a = i.useMemo(() => ({ actionButtonRef: n, pollAnswerRef: s, manageFocusOnAction: o }), [n, s, o]);
    return (0, l.jsx)(r.Provider, { value: a, children: t });
}
function u(e) {
    let { children: t } = e,
        [n, r] = i.useState(),
        o = i.useRef(null),
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            "POLL_ANSWERS" === n && null != u.current && u.current?.ref?.focus(),
                "ACTION_BUTTON" === n && null != o.current && o.current?.focus();
        }, [n]),
        (0, l.jsx)(a, {
            pollAnswerRef: u,
            actionButtonRef: o,
            manageFocusOnAction: function (e) {
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
                        (0, s.xb)(e);
                }
            },
            children: t,
        })
    );
}
